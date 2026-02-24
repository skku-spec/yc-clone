import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "SPEC 소개 | SPEC — 성균관대 창업학회",
  description:
    "SPEC은 성균관대학교에서 시작된 실전 창업 학회입니다. Preneur 트랙과 Learner 트랙을 통해 이론이 아닌 실행으로 증명합니다.",
};

const tocLinks = [
  { label: "소개", href: "#intro" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Organization", href: "#organization" },
  { label: "Two Tracks", href: "#tracks" },
  { label: "Demo Day", href: "#demo-day" },
];

const pageLinks = [
  { label: "멤버", href: "/people" },
  { label: "커리큘럼", href: "/curriculum" },
  { label: "자주 묻는 질문", href: "/faq" },
  { label: "프레스", href: "/press" },
];

const pClass =
  "mb-6 font-['MaruBuri',serif] font-normal text-[17px] leading-[1.75] text-[#16140f] last:mb-0";

const sectionClass = "mb-10";

const h2Class =
  "mb-3 font-['system-ui'] text-[1.5rem] font-bold leading-tight uppercase text-[#16140f]";

const spanClass =
  "mb-3 block font-['Pretendard',sans-serif] font-semibold leading-[1.4] text-[#16140f]";

const preneurDivisions = [
  { name: "Operations", desc: "내부 프로세스 설계 · 기수 운영 체계화" },
  { name: "Engineering", desc: "프로덕트 개발 · 기술 인프라 구축" },
  { name: "Partnerships", desc: "투자사 IR · 기업 파트너십 · 후원 유치" },
  { name: "Design", desc: "브랜드 아이덴티티 · UI/UX · 비주얼" },
  { name: "Contents", desc: "콘텐츠 전략 · SNS · 미디어 커버리지" },
  { name: "Community", desc: "알럼나이 네트워크 · 행사 · 리쿠르팅" },
];

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 pb-24 pt-14 md:pt-20">
      <div className="mx-auto max-w-[1100px]">
        <PageHeader title="What Happens at SPEC" />
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12">
        {/* Sidebar Navigation */}
        <nav className="sticky top-24 hidden w-[170px] shrink-0 self-start lg:block">
          <ul className="space-y-2 font-['Pretendard',sans-serif] text-sm font-normal tracking-[0.3px]">
            {tocLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block leading-relaxed text-[#16140f] transition-colors hover:text-orange-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-[#d9d9cc] pt-4">
            <ul className="space-y-2 font-['Pretendard',sans-serif] text-sm font-normal tracking-[0.3px]">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block leading-relaxed text-[#16140f]/60 transition-colors hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="min-w-0 flex-1">
          <article className="max-w-[720px]">
            {/* ── Hero Intro ── */}
            <p id="intro" className={`scroll-mt-28 ${pClass}`}>
              SPEC은 성균관대학교에서 시작된 실전 창업 학회입니다. 아이디어를
              떠드는 곳이 아닙니다. 만들고, 팔고, 증명하는 곳입니다. 30주 안에
              매출을 만들어내는 것, 그것이 우리가 하는 일의 전부입니다.
            </p>

            {/* ── Philosophy ── */}
            <section
              id="philosophy"
              className={`scroll-mt-28 ${sectionClass}`}
            >
              <h2 className={h2Class}>Philosophy</h2>
              <p className={pClass}>
                SPEC을 움직이는 핵심 신념입니다. 타협하지 않습니다.
              </p>

              <div className="mb-8 space-y-6">
                <div className="border-l-[3px] border-[#FF6C0F] pl-5">
                  <p className="mb-1 font-[system-ui] text-[1.1rem] font-black uppercase leading-tight text-[#16140f]">
                    Ship, Don&apos;t Talk
                  </p>
                  <p className={`mb-0 ${pClass}`}>
                    사업계획서 100페이지보다 고객 한 명의 결제가 더 가치
                    있습니다. SPEC에서는 발표가 아니라 런칭이 평가 기준입니다.
                  </p>
                </div>

                <div className="border-l-[3px] border-[#FF6C0F] pl-5">
                  <p className="mb-1 font-[system-ui] text-[1.1rem] font-black uppercase leading-tight text-[#16140f]">
                    Revenue Is Truth
                  </p>
                  <p className={`mb-0 ${pClass}`}>
                    매출은 거짓말하지 않습니다. 시장이 원하는 것을 만들었는지
                    확인하는 유일한 방법은 누군가가 돈을 내는 것입니다.
                  </p>
                </div>

                <div className="border-l-[3px] border-[#FF6C0F] pl-5">
                  <p className="mb-1 font-[system-ui] text-[1.1rem] font-black uppercase leading-tight text-[#16140f]">
                    Uncomfortable Is Good
                  </p>
                  <p className={`mb-0 ${pClass}`}>
                    편안한 환경에서는 아무것도 태어나지 않습니다. 매주 공개되는
                    매출 보드, 냉정한 피드백, 끊임없는 데드라인. 불편함을 성장의
                    연료로 씁니다.
                  </p>
                </div>

                <div className="border-l-[3px] border-[#FF6C0F] pl-5">
                  <p className="mb-1 font-[system-ui] text-[1.1rem] font-black uppercase leading-tight text-[#16140f]">
                    Network Compounds
                  </p>
                  <p className={`mb-0 ${pClass}`}>
                    30주가 끝나도 관계는 끝나지 않습니다. SPEC 알럼나이
                    네트워크는 시간이 갈수록 강해지는 복리 자산입니다.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Organization ── */}
            <section
              id="organization"
              className={`scroll-mt-28 ${sectionClass}`}
            >
              <h2 className={h2Class}>Organization</h2>
              <p className={pClass}>
                SPEC은 수평적이지만 명확한 구조로 운영됩니다. 각 역할이 하나의
                목표 &mdash; 멤버의 성장 &mdash; 를 향해 움직입니다.
              </p>

              <div className="mb-8">
                {/* ── Level 1: Managing Lead ── */}
                <div className="flex justify-center">
                  <div className="w-full max-w-[300px] rounded-lg border border-[#FF6C0F]/30 bg-white px-6 py-5 text-center shadow-sm">
                    <span className="mb-1 block font-[system-ui] text-[11px] font-black uppercase tracking-[0.15em] text-[#FF6C0F]">
                      Managing Lead
                    </span>
                    <span className="block font-['MaruBuri',serif] text-[13px] leading-snug text-[#16140f]/55">
                      전체 방향 설정 · 최종 의사결정
                    </span>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center">
                  <div className="h-7 w-px bg-[#d9d9cc]" />
                </div>

                {/* ── Level 2: Preneur / Learner branches ── */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Preneur branch */}
                  <div className="rounded-xl border border-[#FF6C0F]/20 bg-[#FF6C0F]/[0.03] p-5">
                    <div className="mb-4 text-center">
                      <span className="mb-0.5 block font-[system-ui] text-[11px] font-black uppercase tracking-[0.15em] text-[#FF6C0F]">
                        Preneur
                      </span>
                      <span className="block font-['MaruBuri',serif] text-[13px] leading-snug text-[#16140f]/55">
                        조직 운영 · 스케일업
                      </span>
                    </div>

                    {/* Connector inside Preneur */}
                    <div className="mb-4 flex justify-center">
                      <div className="h-5 w-px bg-[#FF6C0F]/20" />
                    </div>

                    {/* 6 Divisions — 3×2 grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {preneurDivisions.map((div) => (
                        <div
                          key={div.name}
                          className="rounded-md border border-[#16140f]/6 bg-white px-3 py-3 text-center"
                        >
                          <span className="mb-0.5 block font-[system-ui] text-[11px] font-bold uppercase tracking-wider text-[#16140f]/70">
                            {div.name}
                          </span>
                          <span className="block font-['MaruBuri',serif] text-[11px] leading-snug text-[#16140f]/45">
                            {div.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col rounded-xl border border-[#16140f]/8 bg-[#f5f5ee]/60 p-5">
                    <div className="mb-4 text-center">
                      <span className="mb-0.5 block font-[system-ui] text-[11px] font-black uppercase tracking-[0.15em] text-[#16140f]/60">
                        Learner
                      </span>
                      <span className="block font-['MaruBuri',serif] text-[13px] leading-snug text-[#16140f]/55">
                        실전 창업 · 매출 증명
                      </span>
                    </div>

                    <div className="mb-4 flex justify-center">
                      <div className="h-5 w-px bg-[#16140f]/10" />
                    </div>

                    <div className="space-y-2">
                      {[
                        { phase: '01', title: '탐색', desc: '팀 셔플 · 다양한 프로젝트 경험' },
                        { phase: '02', title: '팀빌딩', desc: '진짜 팀 구성 · 아이템 확정' },
                        { phase: '03', title: '실행', desc: '매출 성장 · 스케일업' },
                        { phase: '04', title: '데모데이', desc: '투자자 피칭 · 창업 전환' },
                      ].map((step) => (
                        <div
                          key={step.phase}
                          className="flex items-center gap-2.5 rounded-md border border-[#16140f]/6 bg-white px-3 py-2.5"
                        >
                          <span className="font-[system-ui] text-[10px] font-black tabular-nums text-[#16140f]/20">
                            {step.phase}
                          </span>
                          <div className="min-w-0">
                            <span className="block font-[system-ui] text-[11px] font-bold uppercase tracking-wider text-[#16140f]/70">
                              {step.title}
                            </span>
                            <span className="block font-['MaruBuri',serif] text-[11px] leading-snug text-[#16140f]/45">
                              {step.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Two Tracks ── */}
            <section id="tracks" className={`scroll-mt-28 ${sectionClass}`}>
              <h2 className={h2Class}>Two Tracks</h2>
              <p className={pClass}>
                SPEC은 두 개의 트랙으로 운영됩니다. 목표는 같지만 방법이
                다릅니다. 둘 다 결국 &ldquo;실행할 수 있는 사람&rdquo;을 만드는
                데 집중합니다.
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Preneur Track Card */}
                <div className="flex flex-col rounded-xl border border-[#FF6C0F]/25 bg-[#FF6C0F]/[0.03] p-6">
                  <div className="mb-4">
                    <span className="mb-2 inline-block font-[system-ui] text-[2rem] leading-none">
                      🚀
                    </span>
                    <h3 className="font-[system-ui] text-[1.2rem] font-black uppercase leading-tight text-[#16140f]">
                      Preneur
                    </h3>
                    <span className="mt-1 block font-['Pretendard',sans-serif] text-[13px] font-medium text-[#FF6C0F]">
                      조직 리더십 트랙 · 3월–11월
                    </span>
                  </div>

                  <p className="mb-5 font-['MaruBuri',serif] text-[15px] leading-[1.7] text-[#16140f]/80">
                    SPEC을 하나의 스타트업처럼 운영하고 스케일업합니다. IR로
                    펀딩과 파트너십을 확장하고, Learner 팀을 멘토링하며,
                    대한민국을 먹을 액셀러레이팅 동아리를 만들어갑니다.
                  </p>

                  <ul className="mb-6 space-y-2.5">
                    {[
                      "SPEC 조직 운영 & 스케일업",
                      "투자사 IR & 파트너십 확장",
                      "Learner 팀 멘토링 & 서포트",
                      "대한민국 최고의 액셀러레이팅 동아리 구축",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-['MaruBuri',serif] text-[14px] leading-[1.6] text-[#16140f]/70"
                      >
                        <span className="mt-[2px] shrink-0 text-[#FF6C0F]">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="/curriculum?track=preneur"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6C0F] px-5 py-2.5 font-['Pretendard',sans-serif] text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Preneur 커리큘럼 보기 →
                    </Link>
                  </div>
                </div>

                {/* Learner Track Card */}
                <div className="flex flex-col rounded-xl border border-[#16140f]/10 bg-[#f5f5ee]/60 p-6">
                  <div className="mb-4">
                    <span className="mb-2 inline-block font-[system-ui] text-[2rem] leading-none">
                      🔥
                    </span>
                    <h3 className="font-[system-ui] text-[1.2rem] font-black uppercase leading-tight text-[#16140f]">
                      Learner
                    </h3>
                    <span className="mt-1 block font-['Pretendard',sans-serif] text-[13px] font-medium text-[#16140f]/50">
                      실전 창업 트랙 · 3월–11월
                    </span>
                  </div>

                  <p className="mb-5 font-['MaruBuri',serif] text-[15px] leading-[1.7] text-[#16140f]/80">
                    이론이 아니라 실행으로 배웁니다. ₩10만원부터 매출을
                    만들고, 몸으로 부딪히며 성장합니다. 한 기수 안에 수억
                    매출을 달성하는 팀도 나옵니다.
                  </p>

                  <ul className="mb-6 space-y-2.5">
                    {[
                      "₩10만원부터 시작하는 매출 챌린지",
                      "이론 NO, 실행 YES — 몸으로 부딪히며 배우기",
                      "한 기수 안에 수억 매출 달성 가능",
                      "체계적 커리큘럼으로 단계별 성장",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-['MaruBuri',serif] text-[14px] leading-[1.6] text-[#16140f]/70"
                      >
                        <span className="mt-[2px] shrink-0 text-[#16140f]/30">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      href="/curriculum?track=learner"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#16140f]/15 bg-white px-5 py-2.5 font-['Pretendard',sans-serif] text-[13px] font-semibold text-[#16140f] transition-colors hover:border-[#FF6C0F]/30 hover:text-[#FF6C0F]"
                    >
                      Learner 커리큘럼 보기 →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Demo Day ── */}
            <section id="demo-day" className={`scroll-mt-28 ${sectionClass}`}>
              <h2 className={h2Class}>Demo Day</h2>
              <p className={pClass}>
                한 기수의 여정이 수렴하는 날입니다. Learner 팀들이 투자자, 기업
                관계자, 미디어 앞에서 자신이 만든 제품과 매출을 피칭합니다.
                발표가 아닙니다 &mdash; 증명입니다.
              </p>
              <p className={pClass}>
                데모데이 이후에도 SPEC 알럼나이 네트워크의 일원으로 계속해서
                연결됩니다. 한 기수는 끝나지만, 관계는 복리로 쌓입니다.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
