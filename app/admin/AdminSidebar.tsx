"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: "📊" },
  { label: "Users", href: "/admin/users", icon: "👥" },
  { label: "Posts", href: "/admin/posts", icon: "📝" },
  { label: "Jobs", href: "/admin/jobs", icon: "💼" },
  { label: "Library", href: "/admin/library", icon: "📚" },
  { label: "Launches", href: "/admin/launches", icon: "🚀" },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/admin") {
    return pathname === "/admin";
  }

  return pathname.startsWith(href);
}

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full min-h-screen flex-col p-5">
      <div className="mb-8 px-2">
        <p className="text-xs uppercase tracking-[0.18em] text-[#6b6b5e]">SPEC</p>
        <h1 className="mt-1 text-xl font-semibold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">Admin Panel</h1>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-[#FFF0E5] font-semibold text-[#FF6C0F]"
                  : "text-[#4a4a40] hover:bg-[#f0efe6]"
              }`}
            >
              <span aria-hidden="true" className="text-base leading-none">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <Link
        href="/"
        className="mt-5 rounded-lg px-3 py-2 text-sm text-[#6b6b5e] transition-colors hover:bg-[#f0efe6] hover:text-[#16140f]"
      >
        Back to Site
      </Link>
    </div>
  );
}
