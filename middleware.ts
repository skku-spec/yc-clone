import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/middleware";
import type { Database } from "@/lib/supabase/types";

const WRITER_ROLES = ["member", "admin"];
type UserRole = "outsider" | "member" | "admin";

function isAdminRoute(pathname: string) {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

function isBlogWriteRoute(pathname: string) {
  return pathname === "/blog/write" || pathname.startsWith("/blog/write/");
}

function isBlogEditRoute(pathname: string) {
  return pathname === "/blog/edit" || pathname.startsWith("/blog/edit/");
}

function isProfileRoute(pathname: string) {
  return pathname === "/profile" || pathname.startsWith("/profile/");
}

// Routes that exist as directories but are not linked in the header navigation.
// Block access and redirect to home.
const BLOCKED_ROUTES = [
  "/jobs",
  "/demoday",
  "/contact",
  "/cofounder-matching",
  "/faq",
  "/library",
  "/press",
  "/subscribe",
  "/vcc",
];

function isBlockedRoute(pathname: string) {
  return BLOCKED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
}

function redirectWithCookies(request: NextRequest, response: NextResponse, pathname: string) {
  const redirectResponse = NextResponse.redirect(new URL(pathname, request.url));

  response.cookies.getAll().forEach((cookie) => {
    redirectResponse.cookies.set(cookie);
  });

  return redirectResponse;
}

async function getUserRole(
  request: NextRequest,
  response: NextResponse,
  userId: string,
): Promise<UserRole> {
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle();

  return (profile?.role as UserRole | null) ?? "outsider";
}

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const pathname = request.nextUrl.pathname;

  // Block access to orphan routes not in header navigation
  if (isBlockedRoute(pathname)) {
    return redirectWithCookies(request, response, "/");
  }

  const needsAdmin = isAdminRoute(pathname);
  const needsWriter = isBlogWriteRoute(pathname) || isBlogEditRoute(pathname);
  const needsAuth = isProfileRoute(pathname);

  if (!needsAdmin && !needsWriter && !needsAuth) {
    return response;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Without Supabase config, skip auth checks — allow page to render
    return response;
  }

  const supabase = createServerClient<Database>(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    if (needsWriter || needsAuth) {
      return redirectWithCookies(request, response, "/login");
    }

    return redirectWithCookies(request, response, "/");
  }

  const role = await getUserRole(request, response, user.id);

  if (needsAdmin && role !== "admin") {
    return redirectWithCookies(request, response, "/");
  }

  if (needsWriter && !WRITER_ROLES.includes(role)) {
    return redirectWithCookies(request, response, "/");
  }

  return response;


}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|bmp|tiff|woff|woff2|ttf|eot|otf|css|js|map)$).*)",
  ],
};
