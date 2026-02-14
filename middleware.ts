import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/middleware";
import type { Database, ProfileRole } from "@/lib/supabase/types";

const WRITER_ROLES: ProfileRole[] = ["pre_runner", "runner", "alumni", "mentor", "admin"];

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
): Promise<ProfileRole> {
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

  return profile?.role ?? "outsider";
}

export async function middleware(request: NextRequest) {
  const response = await updateSession(request);
  const pathname = request.nextUrl.pathname;

  const needsAdmin = isAdminRoute(pathname);
  const needsWriter = isBlogWriteRoute(pathname) || isBlogEditRoute(pathname);
  const needsAuth = isProfileRoute(pathname);

  if (!needsAdmin && !needsWriter && !needsAuth) {
    return response;
  }

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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
