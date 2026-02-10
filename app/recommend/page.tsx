import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YC Recommendations | Y Combinator",
  description:
    "If you are a founder of a YC-funded company, you can recommend promising founders to YC and keep track of their applications.",
};

export default function RecommendPage() {
  return (
    <>
      <h1 className="px-4 pt-12 text-center font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:pt-16">
        YC Recommendations
      </h1>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-10 pt-8 md:px-8 lg:px-12">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]">
          <p className="mb-6">
            If you are a founder of a YC-funded company, you can recommend
            promising founders to YC and keep track of their applications{" "}
             <a
               href="https://bookface.ycombinator.com/recommendations"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               via Bookface
             </a>
            .
          </p>

          <p className="mb-6">
            If they haven&apos;t applied yet, we&apos;ll send an email
            encouraging them.
          </p>

          <p className="mb-6">
            Thank you!
            <br />
            –YC
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[220px] shrink-0 font-['Outfit',sans-serif] text-sm lg:block">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                Related
              </p>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/apply"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    Apply to Y Combinator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                Elsewhere
              </p>
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/about"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    About Y Combinator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
