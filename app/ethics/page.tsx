import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ethics | SPEC",
  description: "SPEC 윤리 강령",
};

export default function EthicsPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-14 md:pt-20">
      <h1 className="mb-8 text-center font-[system-ui] text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        Ethics
      </h1>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-12 md:flex-row">
        <div className="flex-[2]">
          <p className="mb-4 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
            SPEC은 서로를 신뢰하는 사람들의 네트워크입니다. 이 커뮤니티의 강점은 구성원들이 공유하는 가치에서 나옵니다.
          </p>

          <p className="mb-4 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
            우리는 정직, 존중, 책임감을 중요하게 생각합니다. 이러한 가치는 창업가가 갖춰야 할 필수적인 자질입니다.
            비윤리적인 행동은 전체 커뮤니티의 신뢰를 훼손합니다.
          </p>

          <p className="mb-4 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
            SPEC 회원이 지켜야 할 윤리 강령:
          </p>

          <ul className="mb-6 ml-6 list-disc space-y-2 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
            <li>
              공동 창업자와 팀원을 공정하게 대우하고 존중합니다.
            </li>
            <li>
              정직하고 투명한 방식으로 사업을 운영합니다.
            </li>
            <li>
              커뮤니티 구성원에게 스팸을 보내거나 부적절한 홍보를 하지 않습니다.
            </li>
            <li>
              투자자 및 파트너와의 약속을 지킵니다.
            </li>
            <li>
              다른 회원을 괴롭히거나 위협하지 않습니다.
            </li>
            <li>
              SPEC 내에서 공유된 기밀 정보를 외부에 유출하지 않습니다.
            </li>
            <li>
              개인정보 보호 및 보안 문제를 신속하고 적절하게 해결합니다.
            </li>
            <li>
              SPEC 커뮤니티 내에서 공유된 정보를 비회원에게 전달하지 않습니다.
            </li>
            <li>
              자신의 회사나 SPEC의 명예를 훼손하는 행동을 하지 않습니다.
            </li>
            <li>
              지원 과정에서 정직하게 임합니다.
            </li>
            <li>
              약속과 계약을 이행하며, 투자금을 회사 발전을 위해서만 사용합니다.
            </li>
            <li>
              성균관대학교 규정과 SPEC 커뮤니티 가이드라인을 준수합니다.
            </li>
            <li>
              선의와 전문성을 가지고 행동합니다.
            </li>
          </ul>

          <p className="mb-4 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
            커뮤니티를 보호하기 위해, 윤리 강령을 위반한 회원은 SPEC 활동 자격이 제한될 수 있습니다.
            모든 팀원은 팀 내 개인의 비윤리적 행동에 대한 책임을 공유할 수 있습니다.
          </p>

          <p className="mb-4 font-['Pretendard',sans-serif] text-base font-normal leading-relaxed text-[#16140f]">
            여러분이 윤리적으로 행동하는 한, SPEC은 어떤 어려움에서도 여러분을 지원할 것입니다.
          </p>
        </div>

        <nav className="w-[170px] shrink-0">
          <div className="font-['Pretendard',sans-serif] text-sm">
            <p className="mb-2 font-semibold uppercase tracking-wider text-[#16140f]/60">
              관련 페이지
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  SPEC 소개
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#FF6C0F] hover:opacity-70">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
