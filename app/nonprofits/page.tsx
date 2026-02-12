import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Social Impact | SPEC",
  description:
    "SPEC 소셜임팩트 트랙",
};

export default function NonprofitsPage() {
  return (
    <>
      <div className="pt-14 md:pt-20">
        <PageHeader 
          title="Social Impact" 
          subtitle="돈만 버는 것이 전부가 아닙니다"
          align="center" 
        />
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-24 pt-8 md:px-8">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
          <p className="mb-6">
            SPEC은 영리 스타트업뿐만 아니라 사회적 가치를 추구하는 팀도 환영합니다. 
            환경, 교육, 헬스케어, 지역사회 문제 등 사회적 임팩트를 만들어내는 프로젝트라면 
            누구나 지원할 수 있습니다. 
            지금까지 소셜임팩트 트랙을 통해 지원받은 팀들의 목록은{" "}
            <Link
              href="/companies?nonprofit=true"
              className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
            >
              여기에서
            </Link>{" "}
            확인하실 수 있습니다.
          </p>

          <p className="mb-6">
            우리는 단순히 기부에만 의존하는 모델보다는, 
            고객이나 수혜자에게 실질적인 가치를 제공하고 그에 대한 대가를 받는 
            지속 가능한 비즈니스 모델을 선호합니다. 
            두 가지 이유 때문입니다: (1) 돈을 내는 고객은 솔직합니다. 
            무료 서비스의 사용자는 불만을 잘 말하지 않지만, 
            유료 고객은 문제가 있으면 즉시 피드백을 줍니다. 
            (2) 경제 상황에 덜 취약합니다. 
            기부금은 경기 침체기에 급격히 줄어들지만, 
            제품이나 서비스로 수익을 내면 그 충격을 완화할 수 있습니다.
          </p>

          <p className="mb-6">
            소셜임팩트 팀들도 영리 스타트업과 함께 같은 프로그램을 진행하며, 
            SPEC의 모든 멘토링과 교육 커리큘럼을 동일하게 제공받습니다. 
            사회적 가치를 추구하면서도 실행력과 성장을 중시하는 것이 SPEC의 철학입니다.
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[170px] shrink-0 font-['Pretendard',sans-serif] text-sm lg:block">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
              더 알아보기
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/apply"
                  className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                >
                  SPEC 지원하기
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                >
                  SPEC 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                >
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
