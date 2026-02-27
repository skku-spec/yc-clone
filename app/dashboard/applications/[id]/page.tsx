import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import DeleteApplicationButton from "@/components/dashboard/DeleteApplicationButton";


type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ApplicationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();
  const { profile } = await getCurrentUser();
  const isAdmin = profile?.role === "admin";

  const { data: app, error } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !app) {
    notFound();
  }

  return (
    <article className="max-w-[900px]">
      {/* Back + actions */}
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/applications"
            className="inline-flex items-center gap-2 text-sm text-[#6b6b5e] hover:text-[#16140f]"
          >
            <span>←</span>
            <span>목록으로</span>
          </Link>
          {isAdmin && (
            <>
              <div className="h-4 w-[1px] bg-[#ddd9cc]" />
              <DeleteApplicationButton id={app.id} applicantName={app.name} />
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex rounded-full bg-[#FFF0E5] px-3 py-1 text-xs font-medium text-[#FF6C0F] sm:text-sm">
            {app.batch}기 지원서
          </span>
          <span className="inline-flex rounded-full bg-[#f0efe6] px-3 py-1 text-xs font-medium text-[#6b6b5e] sm:text-sm">
            접수일: {new Intl.DateTimeFormat("ko-KR", { dateStyle: "long" }).format(new Date(app.created_at))}
          </span>
        </div>
      </div>

      {/* Header card */}
      <header className="mb-8 rounded-[10px] border border-[#ddd9cc] bg-white p-5 sm:mb-10 sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <h1 className="text-2xl font-bold text-[#16140f] sm:text-4xl [font-family:system-ui,-apple-system,sans-serif]">
              {app.name}
            </h1>
            <p className="mt-1.5 text-base text-[#4a4a40] sm:mt-2 sm:text-lg">
              {app.major}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm text-[#6b6b5e] md:text-right">
            <div>
              <p className="text-xs font-semibold text-[#16140f] sm:text-sm">학번</p>
              <p className="text-xs sm:text-sm">{app.student_id || "-"}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#16140f] sm:text-sm">이메일</p>
              <p className="truncate text-xs sm:text-sm">{app.email}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#16140f] sm:text-sm">연락처</p>
              <p className="text-xs sm:text-sm">{app.phone || "-"}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content sections */}
      <div className="space-y-6 sm:space-y-10">
        <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-5 sm:p-8">
          <h2 className="mb-4 border-b border-[#f0efe6] pb-3 text-lg font-bold text-[#16140f] sm:mb-6 sm:text-xl [font-family:system-ui,-apple-system,sans-serif]">
            자기소개
          </h2>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-[#16140f] font-['Pretendard',sans-serif] sm:text-base">
            {app.introduction}
          </div>
        </section>

        <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-5 sm:p-8">
          <h2 className="mb-4 border-b border-[#f0efe6] pb-3 text-lg font-bold text-[#16140f] sm:mb-6 sm:text-xl [font-family:system-ui,-apple-system,sans-serif]">
            창업에 대한 비전 및 목표
          </h2>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-[#16140f] font-['Pretendard',sans-serif] sm:text-base">
            {app.vision || "작성된 내용이 없습니다."}
          </div>
        </section>

        <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-5 sm:p-8">
          <h2 className="mb-4 border-b border-[#f0efe6] pb-3 text-lg font-bold text-[#16140f] sm:mb-6 sm:text-xl [font-family:system-ui,-apple-system,sans-serif]">
            함께 도전해보고 싶은 창업 아이템
          </h2>
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-[#16140f] font-['Pretendard',sans-serif] sm:text-base">
            {app.startup_idea || "작성된 내용이 없습니다."}
          </div>
        </section>

        <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-5 sm:p-8">
          <h2 className="mb-4 border-b border-[#f0efe6] pb-3 text-lg font-bold text-[#16140f] sm:mb-6 sm:text-xl [font-family:system-ui,-apple-system,sans-serif]">
            촬영/디자인 경험 조사 (우대 사항)
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-semibold text-[#16140f]">영상 촬영</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className={app.equip ? "text-[#FF6C0F]" : "text-[#ddd9cc]"}>
                    {app.equip ? "✓" : "✗"}
                  </span>
                  <span>촬영 장비 소지</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={app.photo_exp ? "text-[#FF6C0F]" : "text-[#ddd9cc]"}>
                    {app.photo_exp ? "✓" : "✗"}
                  </span>
                  <span>촬영 경력 있음</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-[#16140f]">디자인</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className={app.design_exp ? "text-[#FF6C0F]" : "text-[#ddd9cc]"}>
                    {app.design_exp ? "✓" : "✗"}
                  </span>
                  <span>디자인 경력 있음</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={app.figma ? "text-[#FF6C0F]" : "text-[#ddd9cc]"}>
                    {app.figma ? "✓" : "✗"}
                  </span>
                  <span>피그마 사용 가능</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className={app.illustrator ? "text-[#FF6C0F]" : "text-[#ddd9cc]"}>
                    {app.illustrator ? "✓" : "✗"}
                  </span>
                  <span>일러스트레이터 사용 가능</span>
                </li>
              </ul>
            </div>
          </div>
          {app.experience_extra && (
            <div className="mt-6 border-t border-[#f0efe6] pt-4 text-sm">
              <p className="mb-2 font-semibold text-[#16140f]">기타 경험 및 역량</p>
              <p className="leading-relaxed text-[#4a4a40]">{app.experience_extra}</p>
            </div>
          )}
        </section>

        {app.portfolio_url && (
          <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-5 sm:p-8">
            <h2 className="mb-4 border-b border-[#f0efe6] pb-3 text-lg font-bold text-[#16140f] sm:mb-6 sm:text-xl [font-family:system-ui,-apple-system,sans-serif]">
              포트폴리오 / 관련 링크
            </h2>
            <a
              href={app.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 break-all text-sm text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-4 hover:decoration-[#FF6C0F] sm:text-base"
            >
              <span>{app.portfolio_url}</span>
              <span className="shrink-0 text-xs">↗</span>
            </a>
          </section>
        )}
      </div>
    </article>
  );
}
