import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Growth Program | SPEC",
  description:
    "SPEC 졸업 후에도 계속되는 성장 지원",
};

const benefits = [
  {
    title: "Alumni Mentoring",
    description:
      "동문 네트워크를 통한 지속적인 멘토링. SPEC을 졸업한 선배 창업가들이 실전 경험과 인사이트를 공유하며 후배 팀의 성장을 돕습니다.",
  },
  {
    title: "Investment Connections",
    description:
      "후속 투자 연계 프로그램. SPEC 파트너 VC 및 엔젤 투자자 네트워크를 통해 시드 및 시리즈 A 라운드 투자 기회를 제공합니다.",
  },
  {
    title: "Business Expansion Support",
    description:
      "사업 확장을 위한 실질적 지원. 파트너사 연계, B2B 세일즈 노하우, 해외 진출 전략 등 스케일업 단계에서 필요한 모든 것을 제공합니다.",
  },
  {
    title: "Alumni Slack Network",
    description:
      "동문 전용 Slack 채널에서 24/7 소통. 채용 공고 공유, 협업 기회 탐색, 실시간 조언 요청 등 동문 간 활발한 교류가 이루어집니다.",
  },
  {
    title: "Quarterly Networking",
    description:
      "분기별 동문 네트워킹 이벤트. 새로운 팀을 만나고, 최신 트렌드를 공유하며, 협업 파트너를 찾는 정기적인 만남의 장을 제공합니다.",
  },
  {
    title: "Annual Reunion",
    description:
      "연간 SPEC 리유니언 행사. 전체 동문이 한자리에 모여 성과를 축하하고, 인사이트를 나누며, SPEC 커뮤니티의 유대감을 강화합니다.",
  },
];

const stats = [
  { value: "200+", label: "SPEC 동문 창업가" },
  { value: "50+", label: "현재 운영 중인 스타트업" },
  { value: "80%", label: "졸업 후 1년 내 후속 투자 유치" },
  { value: "평생", label: "동문 네트워크 접근 권한" },
];

const eligibility = [
  "SPEC 졸업 팀 (현재 활동 중인 스타트업)",
  "제품-시장 적합성(PMF)을 확보한 팀",
  "명확한 성장 목표와 전략을 가진 팀",
  "동문 커뮤니티에 적극적으로 기여할 의지가 있는 팀",
  "지속 가능한 비즈니스 모델을 구축 중인 팀",
];

const timeline = [
  {
    phase: "졸업",
    duration: "정규 프로그램 종료",
    detail: "SPEC 정규 프로그램을 성공적으로 마치고 동문 네트워크에 합류합니다.",
  },
  {
    phase: "Alumni Network",
    duration: "즉시",
    detail:
      "졸업과 동시에 Alumni Slack 채널 및 동문 전용 리소스에 접근할 수 있습니다.",
  },
  {
    phase: "Continued Mentoring",
    duration: "지속적",
    detail:
      "필요에 따라 SPEC 멘토 및 선배 동문과 1:1 멘토링 세션을 예약할 수 있습니다.",
  },
  {
    phase: "Networking Events",
    duration: "분기별",
    detail:
      "분기마다 열리는 동문 네트워킹 행사에 참여하여 새로운 기회를 탐색합니다.",
  },
  {
    phase: "Annual Reunion",
    duration: "연 1회",
    detail:
      "연례 SPEC 리유니언에서 전체 동문을 만나고 커뮤니티의 성장을 축하합니다.",
  },
];



export default function GrowthProgramPage() {
  return (
    <div className="overflow-hidden pb-24">
      <section className="px-4 pb-16 pt-14 sm:pt-20 lg:pt-24 md:pt-20">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-4 font-['Pretendard',sans-serif] text-sm font-medium uppercase tracking-widest text-[#FF6C0F]">
            SPEC Alumni
          </p>
          <h1 className="font-[system-ui] font-black text-[clamp(2.5rem,5vw,3.75rem)] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
            Growth Program
          </h1>
          <p className="mx-auto mt-6 max-w-[650px] font-['Pretendard',sans-serif] text-lg font-normal leading-relaxed text-[#16140f]/70">
            SPEC을 졸업해도 여정은 끝나지 않습니다. 동문 네트워크를 통한 지속적인 멘토링, 투자 연계, 그리고 성장 지원이 계속됩니다.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/apply"
              className="rounded-full bg-[#FF6C0F] px-8 py-3 font-['Pretendard',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              지원하기
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[#16140f]/20 px-8 py-3 font-['Pretendard',sans-serif] text-sm font-medium text-[#16140f] transition-colors hover:bg-[#16140f]/5"
            >
              자세히 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#16140f] px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-['MaruBuri',serif] text-4xl font-bold text-[#FF6C0F] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-['Pretendard',sans-serif] text-sm font-normal text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-4 text-center font-['MaruBuri',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            Alumni Resources
          </h2>
          <p className="mx-auto mb-12 max-w-[600px] text-center font-['Pretendard',sans-serif] text-base font-normal text-[#16140f]/70">
            SPEC 동문에게 제공되는 모든 성장 지원 프로그램입니다.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#e8e8e0] bg-white p-8"
              >
                <h3 className="mb-3 font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
                  {benefit.title}
                </h3>
                <p className="font-['Pretendard',sans-serif] text-sm font-normal leading-relaxed text-[#16140f]/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eae9e2] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-4 text-center font-['MaruBuri',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            Alumni Journey
          </h2>
          <p className="mx-auto mb-12 max-w-[550px] text-center font-['Pretendard',sans-serif] text-base font-normal text-[#16140f]/70">
            졸업부터 평생 동문까지 &mdash; SPEC과 함께하는 여정입니다.
          </p>
          <div className="space-y-0">
            {timeline.map((step, index) => (
              <div
                key={step.phase}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6C0F] font-['Pretendard',sans-serif] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 h-full w-px bg-[#FF6C0F]/20" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-['Pretendard',sans-serif] text-base font-semibold text-[#16140f]">
                      {step.phase}
                    </h3>
                    <span className="font-['Pretendard',sans-serif] text-xs font-medium text-[#FF6C0F]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1 font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f]/70">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[700px]">
          <h2 className="mb-4 text-center font-['MaruBuri',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            참여 자격
          </h2>
          <p className="mx-auto mb-10 max-w-[550px] text-center font-['Pretendard',sans-serif] text-base font-normal text-[#16140f]/70">
            SPEC 동문 성장 프로그램은 졸업 팀 중 활발히 성장하고 있는 스타트업을 위한 프로그램입니다.
          </p>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6C0F]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f]/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#FF6C0F] px-4 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[600px]">
          <h2 className="font-['MaruBuri',serif] text-3xl font-bold text-white sm:text-4xl">
            함께 성장하세요
          </h2>
          <p className="mt-4 font-['Pretendard',sans-serif] text-base font-normal text-white/80">
            SPEC 동문 커뮤니티는 언제나 열려 있습니다. 200명 이상의 창업가들이 서로를 돕고 성장하는 네트워크에 합류하세요.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-block rounded-full bg-white px-10 py-3.5 font-['Pretendard',sans-serif] text-sm font-semibold text-[#FF6C0F] transition-opacity hover:opacity-90"
          >
            SPEC 지원하기
          </Link>
        </div>
      </section>
    </div>
  );
}
