import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Day | Y Combinator",
  description:
    "Information about Y Combinator Demo Day, where startups present to investors.",
};

const pClass =
  "mb-6 font-['Outfit',sans-serif] font-light text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

export default function DemoDayPage() {
  return (
    <main className="flex-1 px-4 pb-4 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[640px]">
        <h1 className="mb-2 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:mb-4">
          Demo Day
        </h1>
      </div>

      <article className="mx-auto max-w-[640px]">
        <section className="mb-10">
          <p className={pClass}>
            On Demo Day, Y Combinator&apos;s latest batch of startups present to
            an invite-only audience of approximately 1,500 investors and media.
            To learn more, read our{" "}
            <Link href="/demoday/faq" className={linkClass}>
              Demo Day FAQ
            </Link>
            .
          </p>
          <p className={pClass}>
            If you are an investor and would like to attend demo day, you can{" "}
            <a
              href="https://events.ycombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              apply here
            </a>
            .
          </p>
          <p className={pClass}>
            You can also get a preview of the companies on the{" "}
            <Link href="/companies" className={linkClass}>
              YC Startup Directory
            </Link>{" "}
            and{" "}
            <Link href="/launches" className={linkClass}>
              Launch YC
            </Link>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
