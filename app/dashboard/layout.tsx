import type { ReactNode } from "react";
import { requireRole } from "@/lib/auth";
import Link from "next/link";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // 블로그 글쓰기 권한이 있는 멤버(pre_runner 이상)만 접근 가능
  await requireRole("pre_runner");

  return (
    <div className="min-h-screen bg-[#f5f5ee] text-[#16140f] [font-family:Pretendard,system-ui,sans-serif]">
      <div className="mx-auto flex min-h-screen max-w-[1400px]">
        <aside className="w-[240px] shrink-0 border-r border-[#ddd9cc] bg-white p-5">
           <div className="mb-8 px-2">
            <p className="text-xs uppercase tracking-[0.18em] text-[#6b6b5e]">SPEC</p>
            <h1 className="mt-1 text-xl font-semibold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">Dashboard</h1>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            <Link 
              href="/dashboard/applications" 
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#FF6C0F] bg-[#FFF0E5] font-semibold transition-colors"
            >
              <span>📋</span>
              <span>모집 지원서</span>
            </Link>
            {/* 향후 다른 대시보드 메뉴가 추가될 수 있습니다 */}
          </nav>
          <Link
            href="/"
            className="mt-10 rounded-lg px-3 py-2 text-sm text-[#6b6b5e] transition-colors hover:bg-[#f0efe6] hover:text-[#16140f]"
          >
            사이트로 돌아가기
          </Link>
        </aside>
        <main className="flex-1 px-8 py-10 sm:px-10">{children}</main>
      </div>
    </div>
  );
}
