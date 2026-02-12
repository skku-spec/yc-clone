import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Industrialization | SPEC",
  description:
    "기술 기반 산업화 창업",
};

export default function TechnoIndustrialistPage() {
  return (
    <>
      <header className="px-4 pt-14 text-center md:pt-20">
        <p className="mb-3 font-['Pretendard',sans-serif] text-sm font-normal uppercase tracking-widest text-[#FF6C0F]">
          Technology Track
        </p>
        <h1 className="font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
          Tech Industrialization
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] font-['Pretendard',sans-serif] text-base font-normal leading-normal text-[#16140f]">
          하드웨어, 제조, 딥테크 분야의 기술 기반 창업을 지원합니다.
        </p>
      </header>

      <div className="mx-auto max-w-[720px] px-4 pb-24 pt-8 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f] md:px-8">
        <p className="mb-6">
          SPEC은 소프트웨어뿐 아니라 하드웨어, 제조, 인프라 분야의 창업도 적극 지원합니다. 딥테크, 하드웨어, 에너지, 물류 등 물리적 세계를 혁신하는 기술 창업에 관심이 있습니다.
        </p>

        <p className="mb-6">
          성균관대학교 공과대학과의 협력을 통해 연구 시설, 장비, 제조 파트너십을 연결합니다. 기술 개발부터 양산까지, 하드웨어 스타트업이 필요로 하는 전 과정을 함께합니다.
        </p>

        <p className="mb-6">
          <strong className="font-normal">대상 분야:</strong> 로보틱스, IoT 하드웨어, 스마트 제조, 에너지 기술, 신소재, 반도체/전자 부품, 물류 자동화, 기타 딥테크 분야.
        </p>

        <div className="mt-8">
          <Link
            href="/rfs"
            className="inline-flex items-center gap-2 font-['Pretendard',sans-serif] text-sm font-normal text-[#FF6C0F] transition-opacity hover:opacity-80"
          >
            SPEC이 찾는 분야 전체 보기
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
