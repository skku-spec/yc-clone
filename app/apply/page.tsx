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

      <article className="mx-auto max-w-[720px]">
        <div className="mb-6">
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            SPEC 4기 멤버를 모집합니다.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            30주 동안 매주 매출 챌린지를 수행하며, 실전 창업의 모든 과정을
            경험합니다. 아이디어만으로는 부족합니다 — 실행으로 증명할 준비가 된
            사람을 찾습니다.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <strong>모집 기간:</strong> 2026년 3월 1일 ~ 3월 31일
          </p>
        </div>

        <Link
          href="/apply/form"
          className="mx-auto mb-12 flex h-[80px] w-fit items-center rounded-full bg-black px-10 pb-1 font-['MaruBuri',serif] text-[28px] italic tracking-[0.015rem] text-[#f5f5ee] transition-opacity hover:opacity-80"
        >
          Apply →
        </Link>


        <div className="mb-10">
          <h2 className="mb-3 font-['Pretendard',sans-serif] text-[1.375rem] font-bold text-[#16140f]">
            How to Apply
          </h2>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            지원서를 작성하여 제출해주세요. 서류 심사 → 면접 → 최종 합격
            과정으로 진행됩니다.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            합격 발표는 지원 마감 후 2주 이내에 안내됩니다.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            면접에서는 창업 의지와 실행력을 중점적으로 봅니다. 당신의 열정과
            추진력을 보여주세요.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-['Pretendard',sans-serif] text-[1.375rem] font-bold text-[#16140f]">
            About the Program
          </h2>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <Link
              href="/about"
              className="text-[#16140f] underline hover:text-[#FF6C0F]"
            >
              30주 실전 커리큘럼
            </Link>
            — 이론이 아닌 실제 매출 도전.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <Link
              href="/partners"
              className="text-[#16140f] underline hover:text-[#FF6C0F]"
            >
              카카오모빌리티 등 현직 멘토진
            </Link>
            — 실전 창업가들의 직접 지도.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <Link
              href="/vcc"
              className="text-[#16140f] underline hover:text-[#FF6C0F]"
            >
              VCC 미니 MBA 병행
            </Link>
            — 경영과 기술의 완전한 학습.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            SPEC 알럼나이 네트워크 — 졸업 후에도 함께하는 창업가 커뮤니티.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            매주 매출 챌린지 + 데모데이 — 성과를 숫자로 증명합니다.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <strong>
              SPEC은 학교 동아리가 아닙니다. 진짜 창업을 하는 곳입니다.
            </strong>
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-['Pretendard',sans-serif] text-[1.375rem] font-bold text-[#16140f]">
            자주 묻는 질문
          </h2>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            더 궁금한 점은{" "}
            <Link
              href="/faq"
              className="text-[#16140f] underline hover:text-[#FF6C0F]"
            >
              FAQ
            </Link>
            를 확인해주세요.
          </p>
          <p className="mb-6 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f]">
            <strong>문의:</strong>{" "}
            <a
              href="mailto:spec@skku.edu"
              className="text-[#16140f] underline hover:text-[#FF6C0F]"
            >
              spec@skku.edu
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}
