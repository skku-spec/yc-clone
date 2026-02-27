import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "지원하기 | SPEC — 성균관대 창업학회",
  description: "SPEC 4기 멤버를 모집합니다.",
};

export default function ApplyPage() {
  return (
    <div className="bg-[#fcfcf8] min-h-screen">
      {/* ── Hero ──────────────────────────────────── */}
      <section className="mx-auto max-w-[760px] px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <h1 className="text-[clamp(2.75rem,6vw,4.25rem)] font-black leading-[1.08] tracking-tight text-[#16140f] font-[family-name:'Source_Serif_4',serif]">
          Apply to SPEC
        </h1>

        <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-[#4a4a40] font-['Pretendard',sans-serif]">
          <p>
            SPEC은 성균관대학교 실전창업동아리입니다. 다양한 멘토분들의 강연을
            통해 창업에 대한 지식을 쌓고, 여러 학과의 사람들이 모여 함께 창업에
            도전합니다.
          </p>
          <p>
            현재 <strong className="font-semibold text-[#16140f]">SPEC 4기 러너(Learner)</strong>를
            모집하고 있습니다. 러너 트랙은 창업에 대한 교육 및 팀 프로젝트를
            중심으로 활동하며, 매주 정기 세션에 참여하게 됩니다.
          </p>
          <p>
            팀 프로젝트를 통해 포트폴리오를 쌓고, 실전 창업 역량을 기를 수
            있습니다. 창업에 관심 있는 누구나 지원할 수 있습니다.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/apply/form"
            className="inline-flex items-center justify-center rounded-full bg-[#FF6C0F] px-10 py-4 text-lg font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98] font-['Pretendard',sans-serif]"
          >
            Apply
          </Link>
        </div>
      </section>

      {/* ── About Applying ───────────────────────── */}
      <section className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight text-[#16140f] font-[family-name:'Source_Serif_4',serif]">
          지원 안내
        </h2>

        <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-[#4a4a40] font-['Pretendard',sans-serif]">
          <p>
            지원서는 온라인으로 제출하며, 제출 후에는 수정이 불가합니다.
            지원서에서는 본인의 창업에 대한 관심과 SPEC에서 하고 싶은 활동을
            자유롭게 작성해 주세요.
          </p>
          <p>
            서류 심사 후 합격자에 한해 온라인 면접이 진행됩니다. 면접은 약
            10~15분 내외이며, 지원서를 바탕으로 간단한 대화를 나눕니다.
          </p>
          <p>
            최종 합격 발표 후 OT에 필참해야 하며, OT에서 활동에 대한 안내와
            팀 배정이 이루어집니다.
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-[#e8e6dd] bg-white p-8 md:p-10">
          <h3 className="text-lg font-bold text-[#16140f] font-['Pretendard',sans-serif]">
            모집 일정
          </h3>
          <dl className="mt-5 space-y-4 text-[16px] font-['Pretendard',sans-serif]">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="w-44 shrink-0 font-medium text-[#6b6b5e]">
                1차 서류 추가 모집
              </dt>
              <dd className="text-[#16140f]">~ 9월 14일 (일) 23:59</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="w-44 shrink-0 font-medium text-[#6b6b5e]">
                결과 발표
              </dt>
              <dd className="text-[#16140f]">9월 15일 (월) 저녁</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="w-44 shrink-0 font-medium text-[#6b6b5e]">
                2차 온라인 면접
              </dt>
              <dd className="text-[#16140f]">9월 16일 ~ 17일</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="w-44 shrink-0 font-medium text-[#6b6b5e]">
                최종 발표
              </dt>
              <dd className="text-[#16140f]">9월 19일 (금)</dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
              <dt className="w-44 shrink-0 font-semibold text-[#FF6C0F]">
                OT (필참)
              </dt>
              <dd className="font-semibold text-[#FF6C0F]">
                9월 22일 (월) 18:00
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── About the Batch ──────────────────────── */}
      <section className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight text-[#16140f] font-[family-name:'Source_Serif_4',serif]">
          활동 소개
        </h2>

        <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-[#4a4a40] font-['Pretendard',sans-serif]">
          <p>
            SPEC 4기는 <strong className="font-semibold text-[#16140f]">2025년 9월 22일부터 2026년 3월 3일까지</strong>{" "}
            활동합니다. 정기 세션은 매주 월요일 저녁 7시에 자연과학캠퍼스에서
            진행됩니다.
          </p>
          <p>
            한 학기 동안 창업 전문가 초청 강연, 아이디어톤, 해커톤, 데모데이 등
            다양한 프로그램에 참여하게 됩니다. 팀 프로젝트를 통해 아이디어를
            실제 서비스로 구현하는 경험을 쌓을 수 있습니다.
          </p>
          <p>
            SPEC 졸업 후에도 Alumni 네트워크를 통해 창업 생태계와 연결됩니다.
            이전 기수 출신 멤버들이 다양한 분야에서 활발히 활동하고 있습니다.
          </p>
          <p>
            회비는 35,000원이며, 활동에 필요한 모든 프로그램과 자료가
            제공됩니다.
          </p>
        </div>
      </section>

      {/* ── Footer Note ──────────────────────────── */}
      <div className="mx-auto max-w-[760px] px-6 pb-24">
        <p className="mt-8 text-[15px] leading-[1.7] text-[#9a9a8c] font-['Pretendard',sans-serif]">
          궁금한 점이 있으면 러너 회장 전도현(010-9445-0964)에게
          문의해 주세요. 보다 자세한 정보는 SPEC 인스타그램(
          <a
            href="https://instagram.com/skku_spec"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[#6b6b5e] transition-colors"
          >
            @skku_spec
          </a>
          )에서 확인할 수 있습니다.
        </p>
        <p className="mt-3 text-[14px] text-[#b0b0a2] font-['Pretendard',sans-serif]">
          본 동아리는 성균관대학교 캠퍼스타운사업단과 함께합니다.
        </p>
      </div>
    </div>
  );
}
