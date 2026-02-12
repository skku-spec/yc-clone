import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Principles | SPEC",
  description: "SPEC의 핵심 원칙",
};

export default function PrinciplesPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <h1 className="mb-8 text-center font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        Principles
      </h1>

      <div className="mx-auto max-w-[720px]">
        <div className="space-y-8">
          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              1. 실행이 전부다
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              아이디어보다 실행을 중시합니다. 완벽한 계획보다 빠른 실행이 더 중요합니다.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              2. 만들기 전에 팔아라
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              고객 검증이 먼저입니다. 제품을 만들기 전에 고객이 정말로 원하는지 확인하세요.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              3. 빠르게 실패하라
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              실패는 학습의 시작입니다. 빠르게 시도하고, 빠르게 배우세요.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              4. 동료를 도와라
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              커뮤니티의 힘을 믿습니다. 서로 돕고 함께 성장하는 것이 SPEC의 정신입니다.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              5. 솔직하게 말하라
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              거짓 칭찬보다 진실된 피드백을. 솔직함이 성장의 밑거름입니다.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              6. 숫자로 증명하라
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              감이 아닌 데이터로 의사결정을. 측정할 수 없는 것은 개선할 수 없습니다.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-['Pretendard',sans-serif] text-xl font-bold text-[#16140f]">
              7. 시작이 반이다
            </h2>
            <p className="font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
              완벽한 준비는 없습니다. 지금 바로 시작하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
