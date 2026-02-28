import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { getMyApplication } from "@/lib/actions/applications";
import ApplicationStatusCard from "./ApplicationStatusCard";
import StatusCheckForm from "./StatusCheckForm";

export default async function ApplicationStatusPage() {
  const { user } = await getCurrentUser();

  // If logged in, try to fetch application linked to this account
  let linkedApplication: {
    status: string;
    name: string;
    batch: string;
    created_at: string;
    updated_at: string;
  } | null = null;

  if (user) {
    const result = await getMyApplication();
    if (result.success && result.application) {
      linkedApplication = result.application;
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5ee]">
      <section className="mx-auto max-w-[760px] px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <h1
          className="text-[clamp(2.75rem,6vw,4.25rem)] font-black leading-[1.08] tracking-tight text-[#16140f]"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          지원 현황 확인
        </h1>
        <p className="mt-4 font-['Pretendard',sans-serif] text-[17px] leading-[1.75] text-[#4a4a40]">
          {linkedApplication
            ? "로그인 계정에 연결된 지원서 현황입니다."
            : "지원서 제출 시 입력한 이메일과 학번으로 현재 지원 상태를 확인할 수 있습니다."}
        </p>

        {linkedApplication ? (
          /* Logged in + has linked application → show immediately */
          <ApplicationStatusCard application={linkedApplication} />
        ) : user ? (
          /* Logged in but no linked application → show form with note */
          <>
            <div className="mt-10 rounded-lg border border-[#d9d9cc] bg-[#FFF0E5] px-5 py-4">
              <p className="font-['Pretendard',sans-serif] text-sm text-[#4a4a40]">
                현재 로그인한 계정에 연결된 지원서가 없습니다.
                <br />
                이전에 지원하셨다면 아래에서 이메일과 학번으로 조회할 수 있습니다.
              </p>
            </div>
            <StatusCheckForm />
          </>
        ) : (
          /* Not logged in → show form */
          <StatusCheckForm />
        )}

        <div className="mt-10 text-center">
          <Link
            href="/apply"
            className="font-['Pretendard',sans-serif] text-sm text-[#6b6b5e] underline underline-offset-2 hover:text-[#16140f]"
          >
            ← 지원 페이지로 돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
}
