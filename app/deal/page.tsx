import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "The SPEC Program | SPEC",
  description:
    "SPEC 프로그램 참여 조건 및 혜택",
};

const pClass =
  "mb-6 font-['Pretendard',sans-serif] font-normal text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const h3Class =
  "mb-3 font-['MaruBuri',serif] text-[1.75rem] font-normal leading-tight text-[#16140f] md:text-[1.4rem]";

const sectionClass = "mb-10";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

export default function DealPage() {
  return (
    <main className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[720px]">
        <PageHeader title="The Program" subtitle="SPEC 프로그램 참여 혜택" />
      </div>

      <article className="mx-auto max-w-[720px]">
        <section className={sectionClass}>
          <h3 className={h3Class}>프로그램 혜택</h3>
          <p className={pClass}>
            SPEC 프로그램에 참여하는 모든 팀은 실전 창업의 기본기를 배우고 성장할 수 있는 환경을 제공받습니다. 30주간의 집중적인 프로그램을 통해 제품 개발부터 시장 진출까지 필요한 모든 과정을 거쳐갑니다.
          </p>
          <p className={pClass}>
            각 팀에는 업계 경험이 풍부한 전담 멘토가 1:1로 배정되어, 팀의 성장 단계에 맞춰 맞춤형 조언과 지원을 제공합니다. 멘토는 단순한 조언자가 아니라, 팀과 함께 성장하는 진정한 파트너입니다.
          </p>
          <p className={pClass}>
            프로그램 참여로 VCC(Venture Capital Club)의 멘토링 기회, 데모데이 발표 무대, 그리고 SPEC 동문 네트워크에 접근할 수 있습니다. 이러한 네트워크는 팀의 성장과 향후 펀딩에 중요한 자산이 될 것입니다.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>참여 기본 정보</h3>
          <p className={pClass}>
            SPEC 프로그램은 성균관대학교 학생들을 중심으로 한 30주간의 실전 창업 프로그램입니다. 프로그램 자체는 무료이며, 참여 팀이 부담해야 할 프로그램 비용은 전혀 없습니다.
          </p>
          <p className={pClass}>
            프로그램 기간 동안 팀들은 코워킹 스페이스를 비롯한 협업 환경을 이용할 수 있으며, 필요한 모든 온라인 협업 도구(Notion, Slack, Figma 등)에 접근할 수 있습니다. 이러한 환경은 팀이 효과적으로 일할 수 있도록 설계되었습니다.
          </p>
          <p className={pClass}>
            SPEC은 참여 팀들이 진정한 의미의 창업을 경험하고 성장할 수 있도록 지원하는 데 초점을 맞추고 있습니다. 프로그램의 모든 측면은 팀의 실질적인 성공을 돕기 위해 설계되었습니다.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>추가 지원 및 리소스</h3>
          <p className={pClass}>
            SPEC 프로그램 참여 팀들은 다양한 외부 리소스와 파트너십에 접근할 수 있습니다. AWS 스타트업 크레딧, Vercel 호스팅 지원 등 기술 인프라 관련 혜택을 제공합니다.
          </p>
          <p className={pClass}>
            SPEC은 다음과 같은 실질적인 지원을 제공합니다:
          </p>
          <ul className="mb-6 list-disc pl-8">
            <li className={pClass}>
              사업계획서, 피치덱, 재무 모델 템플릿 제공
            </li>
            <li className={pClass}>
              주간 오피스아워 및 멘토링 세션 개최
            </li>
            <li className={pClass}>
              SPEC 동문 네트워크를 통한 지속적인 관계 구축 기회
            </li>
            <li className={pClass}>
              협업 도구 및 개발 환경 접근 권한
            </li>
          </ul>
          <p className={pClass}>
            프로그램의 핵심은 팀의 자율성을 존중하면서도, 필요한 모든 지원을 제공하는 것입니다. 각 팀이 최대한의 성장을 이룰 수 있도록 설계되었습니다.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>참여 요건</h3>
          <p className={pClass}>
            SPEC 프로그램의 참여 요건은 다음과 같습니다: 성균관대학교 학생들로 구성된 팀 (개인 또는 소수 팀 구성 가능), 구현하고자 하는 창업 아이디어 또는 초기 프로토타입, 30주간 프로그램에 집중할 수 있는 의지와 시간.
          </p>
          <p className={pClass}>
            법인 등록, 지적재산권 관리, 계약 등의 법적 사항이 필요한 경우, SPEC은 팀을 적절한 법률 전문가로 연결해 드립니다. 팀이 법적인 문제로 인해 창업을 포기하지 않도록 지원하는 것이 우리의 목표입니다.
          </p>
          <p className={pClass}>
            프로그램 참여에 관심이 있으시면, 언제든 SPEC에 문의해주세요. 우리는 진정으로 성장할 의욕이 있는 모든 팀을 환영합니다.
          </p>
        </section>
      </article>
    </main>
  );
}
