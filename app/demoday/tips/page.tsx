import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Day Tips | Y Combinator",
  description:
    "Tips and advice for attending Y Combinator Demo Day as an investor.",
};

interface Tip {
  id: string;
  title: string;
  description: React.ReactNode;
}

const TIPS: Tip[] = [
  {
    id: "q1",
    title: "Don\u2019t share your invitation.",
    description:
      "Your invitation is only intended for you. This is a private, invitation-only event.",
  },
  {
    id: "q3",
    title: "Use a computer, not a phone or tablet.",
    description:
      "During Demo Day, we use an online system to let you specify which startups you want to meet. It is easiest to browse companies and generate invitations while watching the presentations on the same large screen.",
  },
  {
    id: "q6",
    title: "Handshake Deal Protocol.",
    description: (
      <>
        Most of the companies are going to be using a standardized convention
        for handshake deals.{" "}
        <Link
          href="/handshake"
          className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
        >
          Learn more
        </Link>
        .
      </>
    ),
  },
  {
    id: "q7",
    title: "Familiarize yourself with the Safe",
    description: (
      <>
        The companies will be raising money using investment paperwork created
        by Y Combinator &mdash; the Simple Agreement for Future Equity
        (&ldquo;Safe&rdquo;). You should make sure you are familiar with this
        paperwork.{" "}
        <Link
          href="/documents"
          className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
        >
          Learn more
        </Link>
        .
      </>
    ),
  },
];

export default function DemoDayTipsPage() {
  return (
    <div className="flex-1 px-4 pb-16 pt-12 md:pt-16">
      <div className="mx-auto max-w-[740px]">
        <h1 className="mb-10 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          Demo Day Tips
        </h1>

        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <nav className="shrink-0 md:sticky md:top-24 md:w-[200px] md:self-start">
            <h3 className="mb-3 font-['Outfit',sans-serif] text-[12px] font-semibold uppercase tracking-[0.08em] text-[#16140f]/50">
              The Basics
            </h3>
            <ul className="space-y-1">
              {TIPS.map((tip) => (
                <li key={tip.id}>
                  <a
                    href={`#${tip.id}`}
                    className="block rounded-md px-3 py-2 font-['Outfit',sans-serif] text-[13px] font-normal text-[#16140f]/60 transition-colors hover:bg-[#16140f]/5 hover:text-[#16140f]"
                  >
                    {tip.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="min-w-0 flex-1">
            <h2 className="mb-8 font-['Source_Serif_4',serif] text-[clamp(1.5rem,3vw,2rem)] font-medium italic tracking-tight text-[#16140f]">
              The Basics
            </h2>

            <dl className="space-y-8">
              {TIPS.map((tip) => (
                <div
                  key={tip.id}
                  id={tip.id}
                  className="border-b border-[#16140f]/8 pb-8 last:border-0"
                >
                  <dt className="mb-3 font-['Outfit',sans-serif] text-[16px] font-semibold leading-snug text-[#16140f]">
                    {tip.title}
                  </dt>
                  <dd className="font-['Outfit',sans-serif] text-[15px] font-light leading-[1.7] text-[#16140f]/80">
                    {tip.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 rounded-lg border border-[#ff6600]/20 bg-[#ff6600]/5 p-6">
              <p className="mb-3 font-['Outfit',sans-serif] text-[15px] font-semibold text-[#16140f]">
                Have more questions?
              </p>
              <p className="font-['Outfit',sans-serif] text-[14px] font-light leading-relaxed text-[#16140f]/70">
                Check out the{" "}
                <Link
                  href="/demoday/faq"
                  className="font-medium text-[#ff6600] underline decoration-[#ff6600]/30 underline-offset-2 transition-all hover:decoration-[#ff6600]"
                >
                  Demo Day FAQ
                </Link>{" "}
                for answers to common questions about the event, invitations,
                and logistics.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
