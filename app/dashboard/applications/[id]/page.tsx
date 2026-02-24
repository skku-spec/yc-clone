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
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/applications"
            className="inline-flex items-center gap-2 text-sm text-[#6b6b5e] hover:text-[#16140f]"
          >
            <span>←</span>
            <span>목록으로 돌아가기</span>
          </Link>
          {isAdmin && (
            <>
              <div className="h-4 w-[1px] bg-[#ddd9cc]" />
              <DeleteApplicationButton id={app.id} applicantName={app.name} />
            </>
          )}
        </div>
        <div className="flex gap-2">
           <span className="inline-flex rounded-full bg-[#FFF0E5] px-3 py-1 text-sm font-medium text-[#FF6C0F]">
            {app.batch}기 지원서
          </span>
          <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
            접수일: {new Intl.DateTimeFormat("ko-KR", { dateStyle: "long" }).format(new Date(app.created_at))}
          </span>
        </div>

      </div>

      <header className="mb-10 rounded-[10px] border border-[#ddd9cc] bg-white p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">
              {app.name}
            </h1>
            <p className="mt-2 text-lg text-[#4a4a40]">
              {app.major}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm text-[#6b6b5e] sm:grid-cols-2 md:text-right">
            <div>
              <p className="font-semibold text-[#16140f]">이메일</p>
              <p>{app.email}</p>
            </div>
            <div>
              <p className="font-semibold text-[#16140f]">연락처</p>
              <p>{app.phone || "-"}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="space-y-10">
        <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-8">
          <h2 className="mb-6 border-b border-[#f0efe6] pb-3 text-xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">
            자기소개
          </h2>
          <div className="whitespace-pre-wrap font-['Pretendard',sans-serif] leading-relaxed text-[#16140f]">
            {app.introduction}
          </div>
        </section>

        <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-8">
          <h2 className="mb-6 border-b border-[#f0efe6] pb-3 text-xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">
            창업에 대한 비전 및 목표
          </h2>
          <div className="whitespace-pre-wrap font-['Pretendard',sans-serif] leading-relaxed text-[#16140f]">
            {app.vision || "작성된 내용이 없습니다."}
          </div>
        </section>

        {app.portfolio_url && (
          <section className="rounded-[10px] border border-[#ddd9cc] bg-white p-8">
            <h2 className="mb-6 border-b border-[#f0efe6] pb-3 text-xl font-bold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">
              포트폴리오 / 관련 링크
            </h2>
            <a
              href={app.portfolio_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-4 hover:decoration-[#FF6C0F]"
            >
              <span>{app.portfolio_url}</span>
              <span className="text-xs">↗</span>
            </a>
          </section>
        )}
      </div>
    </article>
  );
}
