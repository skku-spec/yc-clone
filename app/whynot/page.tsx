import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "선발되지 않았다면 | SPEC",
  description: "SPEC에 선발되지 않은 분들을 위한 안내",
};

export default function WhyNotPage() {
  return (
    <>
      <div className="pt-14 md:pt-20">
        <PageHeader title="What's Next" align="center" />
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-24 pt-8 md:px-8">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
          <p className="mb-6">
            선발되지 않았다고 해서 끝이 아닙니다. 많은 분들이 그 이유를 알고 싶어하시는데,
            이는 당연한 요구입니다. 무엇이 부족했는지 알아야 다음 기회를 준비할 수 있으니까요.
          </p>

          <p className="mb-6">
            하지만 역설적이게도, 선발되지 않은 명확한 이유가 없는 경우가 많습니다.
            대부분의 지원서는 훌륭합니다. 탈락한 이유는 지원서가 특별히 나빠서가 아니라,
            더 뛰어난 지원자들이 충분히 많았기 때문입니다.
          </p>

          <p className="mb-6">
            많은 분들이 SPEC 지원을 시험 보듯 생각하시는 것 같습니다.
            하지만 정해진 인원만 선발할 수 있는 상황에서는 절대적인 평가 기준이 아닌
            상대적인 비교가 이루어질 수밖에 없습니다.
          </p>

          <p className="mb-6">
            SPEC 운영진이 한 기수 동안 함께할 수 있는 팀의 수는 제한되어 있습니다.
            우리는 그 인원을 채울 만큼의 훌륭한 팀을 면접하고, 그 이후로는 아무리 좋은
            지원서가 남아있어도 멈출 수밖에 없습니다. 선발 기준 아래부터 중간 지점까지의
            지원서들은 모두 우수합니다. 이들이 선발되지 않은 이유는 지원서 자체에 문제가
            있어서가 아니라, 다른 지원자들이 더욱 뛰어났기 때문입니다.
          </p>

          <p className="mb-6">
            따라서 탈락 이유를 구체적으로 설명드리기 어려운 경우가 많습니다.
            억지로 이유를 만들어낼 수는 있지만, 그것은 거짓말이 될 것입니다.
            상위권 지원자들이 선발되지 않은 진짜 이유는 지원서 어딘가에 있는 것이 아니라,
            그들보다 더 뛰어난 소수의 지원자들이 있었다는 사실뿐입니다.
          </p>

          <p className="mb-6 font-['MaruBuri',serif] text-lg font-normal italic text-[#16140f]">
            가장 중요한 것은 포기하지 않는 것입니다. 다음 기수에 다시 도전하세요.
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[170px] shrink-0 font-['Pretendard',sans-serif] text-sm lg:block">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
              관련 페이지
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
        </nav>
      </div>
    </>
  );
}
