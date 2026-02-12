import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents | SPEC",
  description: "SPEC 관련 문서 및 양식",
};

const SPEC_DOCS = [
  {
    name: "지원서 양식",
    description: "SPEC 4기 지원서 — Google Form을 통해 온라인으로 제출합니다.",
    link: "#",
    linkText: "지원서 작성하기",
  },
  {
    name: "사업계획서 템플릿",
    description:
      "SPEC 공식 사업계획서 양식입니다. 문제 정의, 솔루션, 시장 분석, 비즈니스 모델, 팀 구성 등 핵심 항목이 포함되어 있습니다.",
    link: "#",
    linkText: "템플릿 다운로드",
  },
  {
    name: "피치덱 템플릿",
    description:
      "데모데이용 발표자료 양식입니다. 10장 이내로 핵심 내용을 전달할 수 있도록 구성되어 있습니다.",
    link: "#",
    linkText: "템플릿 다운로드",
  },
  {
    name: "팀 협약서",
    description:
      "팀원 간 역할, 지분, 의사결정 구조 등을 합의하는 양식입니다. 팀 구성 초기에 작성하는 것을 권장합니다.",
    link: "#",
    linkText: "양식 다운로드",
  },
  {
    name: "NDA 양식",
    description:
      "멘토링 시 비밀유지 합의서 양식입니다. 외부 멘토와의 미팅 전 상호 서명을 권장합니다.",
    link: "#",
    linkText: "양식 다운로드",
  },
];

export default function DocumentsPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <div className="mb-8 text-center">
        <h1 className="font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
          Documents
        </h1>
        <p className="mt-2 font-['Pretendard',sans-serif] text-base text-[#16140f]/60">
          SPEC 관련 문서 및 양식
        </p>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-12 md:flex-row">
        <nav className="shrink-0 md:w-[170px]">
          <ul className="sticky top-24 space-y-3 font-['Pretendard',sans-serif] text-sm">
            <li>
              <a
                href="#downloads"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                다운로드
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                문서 안내
              </a>
            </li>
          </ul>
        </nav>

        <article className="min-w-0 flex-1">
          <section id="downloads">
            <h2 className="mb-6 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              문서 다운로드
            </h2>

            <p className="mb-6 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              SPEC 활동에 필요한 주요 문서와 양식을 아래에서 확인하실 수
              있습니다. 각 문서는 팀의 원활한 활동을 위해 준비되었으며,
              필요에 따라 수정하여 사용하실 수 있습니다.
            </p>

            <div className="space-y-8">
              {SPEC_DOCS.map((doc) => (
                <div
                  key={doc.name}
                  className="border-b border-[#16140f]/10 pb-6"
                >
                  <h3 className="mb-2 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
                    {doc.name}
                  </h3>
                  <p className="mb-3 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
                    {doc.description}
                  </p>
                  <a
                    href={doc.link}
                    className="font-['Pretendard',sans-serif] text-sm font-medium text-[#FF6C0F] underline hover:opacity-70"
                  >
                    {doc.linkText}
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="mt-12">
            <h2 className="mb-6 font-['MaruBuri',serif] text-[32px] font-medium leading-tight text-[#16140f]">
              문서 안내
            </h2>

            <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              SPEC은 선발된 팀들이 창업 과정에서 필요한 핵심 문서를 쉽게
              활용할 수 있도록 표준 양식을 제공합니다. 이 양식들은 실제
              SPEC-backed companies의 피드백을 반영하여 지속적으로 개선되고
              있습니다.
            </p>

            <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              사업계획서 템플릿은 투자자와 멘토에게 팀의 비전을 명확하게
              전달하기 위한 구조로 설계되었습니다. 문제 정의부터 시장 분석,
              비즈니스 모델, 재무 계획까지 스타트업 초기 단계에서 반드시
              다뤄야 할 항목들을 포함하고 있습니다.
            </p>

            <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              피치덱 템플릿은 데모데이 발표를 위해 최적화되어 있습니다.
              10장 이내의 슬라이드로 핵심 메시지를 전달할 수 있도록
              구성되었으며, 이전 기수 팀들의 발표 경험이 녹아 있습니다.
            </p>

            <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              팀 협약서는 공동 창업 초기에 팀원 간의 역할, 지분 배분,
              의사결정 구조, 이탈 시 처리 방안 등을 명확히 하기 위한
              문서입니다. 초기에 이런 부분을 합의하지 않으면 나중에
              심각한 갈등의 원인이 될 수 있으므로, 팀 구성 직후 작성하는
              것을 강력히 권장합니다.
            </p>

            <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              NDA(비밀유지 합의서)는 외부 멘토, 투자자 또는 파트너와의
              미팅에서 팀의 아이디어와 사업 정보를 보호하기 위한
              양식입니다. 상호 서명을 통해 양측의 정보를 보호합니다.
            </p>

            <p className="mb-4 font-['MaruBuri',serif] text-base leading-relaxed text-[#16140f]">
              모든 문서는 참고용으로 제공되며, 법적 효력이 필요한 경우
              전문 법률 자문을 받으시기 바랍니다. 문서 관련 문의사항은{" "}
              <a
                href="mailto:contact@spec-skku.org"
                className="text-[#FF6C0F] underline hover:opacity-70"
              >
                contact@spec-skku.org
              </a>
              로 연락해 주세요.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
