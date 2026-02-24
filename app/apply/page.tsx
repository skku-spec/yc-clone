import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "지원하기 | SPEC — 성균관대 창업학회",
  description: "SPEC 4기 멤버를 모집합니다.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <PageHeader title="Apply Now" align="center" />

      <article className="mx-auto max-w-[800px]">
        <div className="mb-14 rounded-[10px] border border-[#ddd9cc] bg-white p-10 md:p-14 shadow-sm">
          <h1 className="mb-8 text-4xl font-black text-[#16140f] [font-family:system-ui,-apple-system,sans-serif] leading-tight">
            실전창업동아리 SPEC 3기 <br /> 러너 리쿠르팅
          </h1>
          
          <div className="prose prose-lg max-w-none text-[#4a4a40] space-y-10 font-['Pretendard',sans-serif]">
            <p className="text-xl leading-relaxed">
              안녕하세요, 성균관대학교 실전창업동아리 SPEC입니다!<br/><br/>
              🚀 창업 아이디어는 있지만, 함께할 팀원을 찾기 어려우셨나요?<br/>
              📖 밑바닥부터 실전 창업을 경험하고 싶다면?
            </p>

            <div className="bg-[#fcfcf8] p-8 rounded-lg border border-[#f0efe6]">
              <p className="leading-relaxed">
                SPEC은 다양한 멘토분들의 강연을 통해 창업에 대한 지식을 쌓고, 여러 학과의 사람들이 모여 함께 창업에 도전하는 동아리입니다.<br/><br/>
                SPEC은 러너(Learner)와 프러너(Preneur) 두 가지 트랙으로 운영되며, 이 지원서는 러너(Learner) 모집을 위한 지원서입니다.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#16140f]">📢 러너(Learner)란?</h2>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>창업에 대한 교육 및 팀 프로젝트를 중심으로 활동하는 트랙입니다.</li>
                <li>매주 정기 세션에 참여해야 합니다.</li>
                <li>팀 프로젝트를 통해 포트폴리오를 쌓고, 실전 창업 역량을 기를 수 있습니다.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#16140f] flex items-center gap-2">
                   <span className="h-2.5 w-2.5 rounded-full bg-[#FF6C0F]"></span> 지원 정보
                </h3>
                <ul className="space-y-3 text-[17px]">
                  <li>• <strong>지원 자격:</strong> 창업에 관심 있는 누구나</li>
                  <li>• <strong>활동 기간:</strong> 2025.09.22. ~ 2026.03.03.</li>
                  <li>• <strong>회비:</strong> 35,000원</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#16140f] flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6C0F]"></span> 활동 정보
                </h3>
                <ul className="space-y-3 text-[17px]">
                  <li>• <strong>정기 세션:</strong> 매주 월요일 저녁 7시</li>
                  <li>• <strong>활동 장소:</strong> 자연과학캠퍼스</li>
                  <li>• <strong>주요 행사:</strong> 아이디어톤, 해커톤, 데모데이 등</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 bg-[#16140f] text-white p-10 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold border-b border-white/20 pb-4">📢 러너 모집 일정</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-lg">
                <span className="font-semibold text-white/70">1차 서류 추가 모집</span>
                <span className="font-medium">~ 9월 14일 23:59</span>
                <span className="font-semibold text-white/70">결과 발표</span>
                <span className="font-medium">9월 15일(월) 저녁</span>
                <span className="font-semibold text-white/70">2차 온라인 면접</span>
                <span className="font-medium">9월 16일 ~ 17일</span>
                <span className="font-semibold text-white/70">최종 발표</span>
                <span className="font-medium">9월 19일(금)</span>
                <span className="font-semibold text-[#FF6C0F]">OT (필참)</span>
                <span className="font-bold text-[#FF6C0F]">9월 22일(월) 18:00</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#f0efe6]">
              <p className="text-sm text-[#9a9a8c] leading-relaxed">
                📌 보다 자세한 정보는 SPEC 인스타그램(@skku_spec)에서 확인할 수 있습니다.<br/>
                * 본 동아리는 성균관대학교 캠퍼스타운사업단과 함께합니다.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#6b6b5e]">
                <span><strong>문의처:</strong> 러너 회장 전도현 010-9445-0964</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/apply/form"
            className="group relative inline-flex h-20 w-fit items-center justify-center rounded-full bg-[#FF6C0F] px-16 font-['MaruBuri',serif] text-3xl italic tracking-wider text-white transition-all hover:scale-105 active:scale-95 shadow-2xl"
          >
            Apply Now →
          </Link>
        </div>
      </article>

    </div>
  );
}
