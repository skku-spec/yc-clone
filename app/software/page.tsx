import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources | SPEC",
  description:
    "SPEC 팀이 사용하는 도구와 리소스",
};

export default function SoftwarePage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <div className="mb-16 text-center">
        <h1 className="font-[system-ui] mb-2 text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
          Resources
        </h1>
        <p className="font-['Pretendard',sans-serif] text-base font-normal text-[#16140f]">
          SPEC이 제공하는 도구와 리소스
        </p>
      </div>

      <div className="mx-auto max-w-[720px]">
        <article className="mb-16">
          <div className="mb-10">
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              SPEC 팀이 효율적으로 협업하고 성장하기 위해서는 적절한 도구와 리소스가 필수입니다. 우리는 팀들이 최고 수준의 기술 환경과 템플릿을 활용할 수 있도록 지원합니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              SPEC이 제공하는 리소스는 크게 네 가지 영역으로 나뉩니다: 협업 도구(Tool Stack), 사업 템플릿(Templates), 스타트업 파트너십(Partners), 그리고 커뮤니티(Community). 각각은 팀의 성장 단계에 맞춰 최적의 지원을 제공하도록 설계되었습니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              협업 도구로는 Notion을 통한 문서 관리, Slack을 통한 팀 커뮤니케이션, Figma를 통한 디자인 협업, 그리고 GitHub을 통한 코드 관리를 지원합니다. 이 도구들은 SPEC 팀이 직접 사용하면서 검증한 것들입니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              사업 템플릿으로는 사업계획서, 피치덱, 재무 모델 등을 제공합니다. 이러한 템플릿들은 투자자와의 미팅이나 데모데이 준비에 필수적입니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              또한 AWS, Vercel 등 주요 클라우드 서비스의 스타트업 크레딧을 지원받을 수 있으며, 이는 초기 팀들의 운영 비용을 크게 절감하는 데 도움이 됩니다.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-['MaruBuri',serif] mb-4 text-2xl font-normal text-[#16140f]">
              Tool Stack (협업 도구)
            </h2>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              SPEC 팀들이 효과적으로 협업하기 위해 다음의 도구들을 기본으로 제공합니다:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              <li>
                <strong>Notion</strong> — 프로젝트 관리, 문서 작성, 데이터베이스 구축
              </li>
              <li><strong>Slack</strong> — 팀 커뮤니케이션 및 공지사항 관리</li>
              <li>
                <strong>Figma</strong> — UI/UX 디자인 협업 및 프로토타이핑
              </li>
              <li><strong>GitHub</strong> — 코드 버전 관리 및 협업</li>
            </ul>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              이러한 도구들은 SPEC 팀이 직접 사용하면서 최적화한 것들로, 초기 스타트업에 필요한 모든 협업 기능을 제공합니다. 각 팀은 프로그램 참여 시 이 모든 도구에 접근할 수 있습니다.
            </p>
          </div>
        </article>

        <article className="mb-16">
          <div className="mb-10">
            <h2 className="font-['MaruBuri',serif] mb-4 text-2xl font-normal text-[#16140f]">
              Templates (사업 템플릿)
            </h2>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              SPEC 팀들이 투자자와의 미팅이나 데모데이를 준비할 때 필요한 필수 문서들을 제공합니다. 모든 템플릿은 실제 투자자와 업계 전문가의 피드백을 바탕으로 작성되었습니다.
            </p>
            <div className="mb-6 h-[400px] w-full overflow-hidden rounded-lg bg-[#d4d4cc]">
              <div className="flex h-full items-center justify-center font-['Pretendard',sans-serif] text-sm text-[#16140f]/40">
                SPEC 코워킹 스페이스
              </div>
            </div>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              제공되는 템플릿에는 사업계획서, 피치덱, 재무 모델, 마케팅 계획 등이 포함됩니다. 각 템플릿은 성균관대학교 내에서의 창업 생태계에 맞춰 커스터마이징되어 있습니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              또한 SPEC의 멘토들은 팀의 피치덱이나 사업계획서를 검토하고 피드백을 제공합니다. 이는 팀이 투자자와의 첫 미팅부터 인상적인 프레젠테이션을 할 수 있도록 돕습니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              이러한 템플릿과 피드백은 팀의 성장 단계에 따라 지속적으로 업데이트됩니다. 우리는 팀이 시간을 낭비하지 않고 실질적인 비즈니스 구축에 집중할 수 있도록 지원합니다.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="font-['MaruBuri',serif] mb-4 text-2xl font-normal text-[#16140f]">
              Partners & Community (파트너십 및 커뮤니티)
            </h2>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              SPEC은 주요 클라우드 서비스 제공자 및 스타트업 도구 회사들과 파트너십을 맺고 있습니다. 프로그램 참여 팀들은 AWS 크레딧, Vercel 호스팅, GitHub Pro 등의 서비스를 무료로 이용할 수 있습니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              SPEC 커뮤니티의 핵심은 팀 간의 협력과 학습입니다. 주간 오피스아워에서 팀들은 직접 멘토들을 만나 조언을 받을 수 있으며, Slack 채널을 통해 프로그램 참여 팀들과 소통할 수 있습니다.
            </p>
            <p className="mb-6 font-['Pretendard',sans-serif] text-lg font-normal leading-[1.7] text-[#16140f]">
              프로그램을 졸업한 후에도 SPEC 동문 네트워크에 접근할 수 있으며, 이는 향후 펀딩이나 사업 파트너십 기회로 이어질 수 있습니다. Several SPEC-backed companies have already grown into successful businesses.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#FF6C0F] px-8 py-4 font-['Pretendard',sans-serif] text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            SPEC에 문의하기
          </Link>
        </article>
      </div>
    </div>
  );
}
