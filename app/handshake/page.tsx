import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community Guidelines | SPEC",
  description:
    "SPEC 커뮤니티 협력 가이드라인",
};

export default function HandshakePage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <h1 className="mb-8 text-center font-[system-ui] font-black text-[clamp(2.5rem,5vw,3.75rem)] leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        Community Guidelines
      </h1>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-12 md:flex-row">
        <nav className="shrink-0 md:w-[170px]">
          <ul className="sticky top-24 space-y-3 font-sans text-sm">
            <li>
              <a href="#intro" className="text-[#FF6C0F] hover:opacity-70">
                소개
              </a>
            </li>
            <li>
              <a
                href="#collaboration"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                팀 간 협력
              </a>
            </li>
            <li>
              <a
                href="#alumni-network"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                동문 네트워크
              </a>
            </li>
            <li>
              <a
                href="#mentor-relationship"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                멘토-팀 관계
              </a>
            </li>
            <li>
              <a
                href="#external-partners"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                외부 협업
              </a>
            </li>
          </ul>
        </nav>

        <article className="min-w-0 flex-1">
          <section id="intro">
            <h2 className="mb-4 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              소개
            </h2>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              SPEC은 단순한 창업 프로그램이 아닙니다. 우리는 서로를 돕고 성장하는 커뮤니티입니다. 이 가이드는 SPEC 커뮤니티 내에서 팀 간 협력, 동문 네트워크 활용, 멘토-팀 관계, 그리고 외부 파트너와의 협업 시 지켜야 할 원칙을 담고 있습니다.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              왜 이런 가이드라인이 필요할까요? 스타트업 생태계는 빠르게 움직이고, 신뢰가 중요하며, 명확한 커뮤니케이션이 필수입니다. 이 가이드라인은 우리 커뮤니티가 건강하게 성장하고, 모든 구성원이 서로를 존중하며 협력할 수 있도록 돕습니다.
            </p>
            <p className="mb-8 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              SPEC 커뮤니티는 상호 신뢰와 존중을 기반으로 합니다. 우리는 함께 성장하고, 서로의 성공을 축하하며, 어려움이 있을 때 도움의 손을 내밉니다.
            </p>
          </section>

          <section id="collaboration">
            <h2 className="mb-4 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              팀 간 협력 원칙
            </h2>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              SPEC 내 팀들은 경쟁자가 아닌 동료입니다. 우리는 지식을 공유하고, 서로의 피드백을 소중히 여기며, 함께 성장합니다.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>지식 공유 문화:</strong> 자신의 실패와 성공 경험을 솔직하게 나누어 주세요. 누군가의 질문에 답변을 알고 있다면 주저하지 말고 도와주세요. Slack 채널에서 활발하게 소통하고, 정기 미팅에 적극적으로 참여해 주세요.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>피드백 문화:</strong> 피드백을 요청할 때는 구체적으로, 피드백을 제공할 때는 건설적으로. 비판이 아닌 성장을 위한 조언으로 접근해 주세요. 피드백을 받을 때는 열린 마음으로 듣고, 감사의 마음을 표현해 주세요.
            </p>
            <p className="mb-8 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>협업 기회:</strong> 다른 팀과 파트너십, 기술 협업, 공동 마케팅 등의 기회를 탐색할 때는 명확한 커뮤니케이션이 중요합니다. 기대사항, 역할, 일정을 미리 합의하고 문서화해 주세요.
            </p>
          </section>

          <section id="alumni-network">
            <h2 className="mb-4 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              동문 네트워크 에티켓
            </h2>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              SPEC 동문 네트워크는 소중한 자산입니다. 동문에게 도움을 요청하거나 소개를 부탁할 때는 다음 원칙을 따라 주세요.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>소개 요청 방법:</strong> 소개를 요청하기 전에 상대방의 프로필과 커리어를 충분히 조사하세요. 왜 그 분과 연결되고 싶은지, 어떤 가치를 제공할 수 있는지 명확히 설명하세요. 중간에서 소개해 주는 동문에게도 부담이 가지 않도록 배려해 주세요.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>비밀유지:</strong> 동문 네트워크 내에서 공유된 정보, 특히 사업 계획, 투자 현황, 개인적인 어려움 등은 철저히 비밀로 유지해야 합니다. 명시적인 허락 없이 외부에 공유하지 마세요.
            </p>
            <p className="mb-8 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>Give and Take:</strong> 도움을 받기만 하지 말고, 자신도 다른 동문을 도울 방법을 찾아보세요. 채용 공고 공유, 전문 지식 제공, 네트워크 연결 등 작은 것부터 시작할 수 있습니다.
            </p>
          </section>

          <section id="mentor-relationship">
            <h2 className="mb-4 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              멘토-팀 관계
            </h2>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              SPEC 멘토들은 여러분의 성공을 진심으로 바라며 시간과 경험을 나눠주시는 분들입니다. 효과적인 멘토링을 위해서는 양방향 소통이 필요합니다.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>기대사항 관리:</strong> 멘토는 모든 답을 가진 사람이 아닙니다. 방향을 제시하고 경험을 공유하는 역할입니다. 구체적인 질문을 준비하고, 멘토링 후에는 액션 아이템을 정리해서 실행에 옮기세요.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>커뮤니케이션:</strong> 멘토의 시간을 존중해 주세요. 사전에 어젠다를 공유하고, 정해진 시간을 지키며, 진행 상황을 정기적으로 업데이트해 주세요. 긴급한 상황이 아니면 업무 시간 외 연락은 자제해 주세요.
            </p>
            <p className="mb-8 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>피드백과 감사:</strong> 멘토의 조언이 도움이 되었다면 결과를 공유하고 감사를 표현해 주세요. 만약 조언이 현재 상황에 맞지 않는다면 정중하게 설명하고 다른 관점을 요청해도 괜찮습니다.
            </p>
          </section>

          <section id="external-partners">
            <h2 className="mb-4 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              외부 협업 원칙
            </h2>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              SPEC 팀이 스폰서, 파트너사, 투자자 등 외부 조직과 협업할 때는 SPEC 커뮤니티 전체를 대표한다는 마음가짐이 필요합니다.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>전문성과 신뢰:</strong> 약속을 지키고, 기한을 준수하며, 명확하게 소통하세요. 문제가 발생하면 숨기지 말고 빠르게 공유하고 해결 방안을 제시하세요. 한 팀의 평판이 SPEC 전체의 평판에 영향을 미칩니다.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>투명한 관계:</strong> 스폰서십이나 파트너십의 조건을 명확히 하고, 이해 상충이 발생할 가능성이 있다면 미리 논의하세요. 계약서나 MOU 등 공식 문서로 합의 사항을 기록해 두는 것이 좋습니다.
            </p>
            <p className="mb-4 font-['Pretendard',sans-serif] text-base leading-relaxed text-[#16140f]">
              <strong>SPEC 리소스 활용:</strong> 외부 협업 시 어려움이 있다면 SPEC 운영진이나 멘토에게 조언을 구하세요. 특히 계약서 검토, 협상 전략, 파트너십 구조 등에서 경험 많은 동문들의 도움을 받을 수 있습니다.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
