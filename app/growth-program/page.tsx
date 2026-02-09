import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Growth Program | Y Combinator",
  description:
    "YC\u2019s Growth Program helps later-stage startups scale from product-market fit to category leadership.",
};

const benefits = [
  {
    title: "Expert Office Hours",
    description:
      "Weekly sessions with YC partners and alumni who\u2019ve scaled companies to billions in revenue. Get tactical advice on growth, hiring, fundraising, and operations.",
  },
  {
    title: "Growth Playbooks",
    description:
      "Proven frameworks from the fastest-growing YC companies. Learn what actually works for B2B sales, consumer growth, international expansion, and enterprise go-to-market.",
  },
  {
    title: "Executive Network",
    description:
      "Connect with a curated network of operators, executives, and domain experts who can help you solve your toughest scaling challenges.",
  },
  {
    title: "Fundraising Support",
    description:
      "Access to YC\u2019s investor network for Series B and beyond. We help you tell your story to the right investors at the right time.",
  },
  {
    title: "Recruiting Pipeline",
    description:
      "Tap into YC\u2019s talent network to hire senior leaders. We help you find VPs, Directors, and C-level executives who\u2019ve scaled startups before.",
  },
  {
    title: "Peer Community",
    description:
      "Join a cohort of 15\u201320 high-growth companies facing similar challenges. Build relationships that last well beyond the program.",
  },
];

const stats = [
  { value: "$100B+", label: "Combined valuation of Growth Program alumni" },
  { value: "200+", label: "Companies have participated" },
  { value: "85%", label: "Raised follow-on funding within 12 months" },
  { value: "3.2x", label: "Average revenue growth during program" },
];

const eligibility = [
  "Post-Series A YC alumni companies",
  "Demonstrable product-market fit with strong retention",
  "$1M+ ARR or equivalent growth metrics",
  "Founding team committed to building a generational company",
  "Clear thesis on how to scale the business 10x",
];

const timeline = [
  {
    phase: "Application",
    duration: "2 weeks",
    detail: "Submit your application with current metrics and growth thesis",
  },
  {
    phase: "Interview",
    duration: "1 week",
    detail:
      "Meet with Growth Program partners for a deep dive on your business",
  },
  {
    phase: "Program",
    duration: "12 weeks",
    detail:
      "Intensive growth program with weekly sessions, office hours, and peer groups",
  },
  {
    phase: "Demo Day",
    duration: "1 day",
    detail:
      "Present your growth story to YC\u2019s investor network at Growth Demo Day",
  },
  {
    phase: "Alumni Network",
    duration: "Forever",
    detail:
      "Lifetime access to the Growth Program alumni community and resources",
  },
];

export default function GrowthProgramPage() {
  return (
    <div className="overflow-hidden">
      <section className="px-4 pb-16 pt-12 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-4 font-['Outfit',sans-serif] text-sm font-medium uppercase tracking-widest text-[#ff6600]">
            For YC Alumni
          </p>
          <h1 className="font-['Source_Serif_4',serif] text-4xl font-bold tracking-tight text-[#16140f] sm:text-5xl lg:text-6xl">
            Growth Program
          </h1>
          <p className="mx-auto mt-6 max-w-[650px] font-['Outfit',sans-serif] text-lg font-light leading-relaxed text-[#16140f]/70">
            Helping later-stage YC companies scale from product-market fit to
            category leadership. A 12-week intensive program designed for
            founders ready to build generational companies.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/apply"
              className="rounded-full bg-[#ff6600] px-8 py-3 font-['Outfit',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-[#16140f]/20 px-8 py-3 font-['Outfit',sans-serif] text-sm font-medium text-[#16140f] transition-colors hover:bg-[#16140f]/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#16140f] px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-['Source_Serif_4',serif] text-4xl font-bold text-[#ff6600] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-['Outfit',sans-serif] text-sm font-light text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-4 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            What you get
          </h2>
          <p className="mx-auto mb-12 max-w-[600px] text-center font-['Outfit',sans-serif] text-base font-light text-[#16140f]/70">
            Everything you need to accelerate growth and build a lasting
            company.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#e8e8e0] bg-white p-8"
              >
                <h3 className="mb-3 font-['Outfit',sans-serif] text-base font-semibold text-[#16140f]">
                  {benefit.title}
                </h3>
                <p className="font-['Outfit',sans-serif] text-sm font-light leading-relaxed text-[#16140f]/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eae9e2] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-4 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            Program Timeline
          </h2>
          <p className="mx-auto mb-12 max-w-[550px] text-center font-['Outfit',sans-serif] text-base font-light text-[#16140f]/70">
            From application to alumni &mdash; here&apos;s what the journey
            looks like.
          </p>
          <div className="space-y-0">
            {timeline.map((step, index) => (
              <div
                key={step.phase}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6600] font-['Outfit',sans-serif] text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 h-full w-px bg-[#ff6600]/20" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-['Outfit',sans-serif] text-base font-semibold text-[#16140f]">
                      {step.phase}
                    </h3>
                    <span className="font-['Outfit',sans-serif] text-xs font-medium text-[#ff6600]">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-1 font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/70">
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
          <h2 className="mb-4 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            Eligibility
          </h2>
          <p className="mx-auto mb-10 max-w-[550px] text-center font-['Outfit',sans-serif] text-base font-light text-[#16140f]/70">
            The Growth Program is designed for YC alumni companies that are
            ready to scale.
          </p>
          <ul className="space-y-4">
            {eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#ff6600]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#ff6600] px-4 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-[600px]">
          <h2 className="font-['Source_Serif_4',serif] text-3xl font-bold text-white sm:text-4xl">
            Ready to scale?
          </h2>
          <p className="mt-4 font-['Outfit',sans-serif] text-base font-light text-white/80">
            Applications for the next Growth Program cohort are open. Join 200+
            YC companies that have used the program to reach the next level.
          </p>
          <Link
            href="/apply"
            className="mt-8 inline-block rounded-full bg-white px-10 py-3.5 font-['Outfit',sans-serif] text-sm font-semibold text-[#ff6600] transition-opacity hover:opacity-90"
          >
            Apply to Growth Program
          </Link>
        </div>
      </section>
    </div>
  );
}
