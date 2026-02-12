import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Recommend | SPEC",
  description: "SPEC을 추천해주세요",
};

export default function RecommendPage() {
  return (
    <>
      <div className="pt-14 md:pt-20">
        <PageHeader title="Recommend" align="center" />
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-24 pt-8 md:px-8">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
          <p className="mb-6">
            주변에 창업에 관심 있는 성균관대 학생이 있다면 SPEC을 추천해주세요.
            여러분의 추천은 잠재력 있는 창업가를 발견하는 데 큰 도움이 됩니다.
          </p>

          <p className="mb-6">
            추천 방법은 간단합니다. 지원서에 추천인 이름을 기재하거나,{" "}
            <a
              href="mailto:recommend@spec-skku.org"
              className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
            >
              recommend@spec-skku.org
            </a>
            로 이메일을 보내주세요.
          </p>

          <p className="mb-6">
            우리가 찾는 것은 뛰어난 실행력, 진정한 열정, 그리고 팀워크를 발휘할 수 있는 사람입니다.
            창업 경험이 없어도 괜찮습니다. 배우고자 하는 의지가 가장 중요합니다.
          </p>

          <p className="mb-6">
            아직 지원하지 않은 학생이라면, 우리가 직접 연락해서 지원을 독려하겠습니다.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-lg font-normal italic text-[#16140f]">
            함께 성장할 동료를 찾습니다.
          </p>

          <p className="mb-6">
            감사합니다.
            <br />
            –SPEC
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[170px] shrink-0 font-['Pretendard',sans-serif] text-sm lg:block">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                관련 페이지
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
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                더 알아보기
              </p>
              <ul className="space-y-1.5">
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
          </div>
        </nav>
      </div>
    </>
  );
}
