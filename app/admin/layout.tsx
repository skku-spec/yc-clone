import type { ReactNode } from "react";

import { requireRole } from "@/lib/auth";

import { AdminSidebar } from "./AdminSidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  await requireRole("admin");

  return (
    <div className="min-h-screen bg-[#f5f5ee] text-[#16140f] [font-family:Pretendard,system-ui,sans-serif]">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="w-[240px] shrink-0 border-r border-[#ddd9cc] bg-white">
          <AdminSidebar />
        </aside>
        <main className="flex-1 px-8 py-10 sm:px-10">{children}</main>
      </div>
    </div>
  );
}
