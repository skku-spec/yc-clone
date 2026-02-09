import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press | Y Combinator",
  description: "Press resources and information about Y Combinator.",
};

const pClass =
  "mb-6 font-['Outfit',sans-serif] font-light text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const h3Class =
  "mb-3 font-['Source_Serif_4',serif] text-[1.75rem] font-medium italic leading-tight text-[#16140f] md:text-[1.4rem]";

const sectionClass = "mb-10";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

export default function PressPage() {
  return (
    <main className="flex-1 px-4 pb-4 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[640px]">
        <h1 className="mb-2 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:mb-4">
          Press
        </h1>
      </div>

      <article className="mx-auto max-w-[640px]">
        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Press &amp; Media</strong>
          </h3>
          <p className={pClass}>
            <a href="mailto:press@ycombinator.com" className={linkClass}>
              press@ycombinator.com
            </a>
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>About Y Combinator</strong>
          </h3>
          <p className={pClass}>
            YC helps founders launch, build, and scale the great technology
            companies of the next 100 years.
          </p>
          <p className={pClass}>
            Since 2005, we&apos;ve funded over{" "}
             <a
               href="https://www.ycombinator.com/companies"
               target="_blank"
               rel="noopener noreferrer"
               className={linkClass}
             >
               5,000 companies
             </a>
            . Today, over a dozen YC companies are public, more than 100 are
            valued at over $1B, and the combined valuation of YC alumni is over
            $800B.
          </p>
          <p className={pClass}>
            YC was designed, created, and is run by startup founders (including
            many YC alumni) who have built the best platform for supporting
            startups as they grow. Our flagship YC batch program runs four times
            a year. We give companies seed funding (
            <Link href="/deal" className={linkClass}>
              $500,000
            </Link>
            ) and work with founders intensively for 3 months.
          </p>
          <ul className="mb-6 space-y-2">
            <li>
              <Link href="/about" className={linkClass}>
                Learn more
              </Link>
            </li>
            <li>
              <a
                href="https://blog.ycombinator.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Latest news
              </a>
            </li>
            <li>
              <Link href="/companies" className={linkClass}>
                YC Directory
              </Link>
            </li>
            <li>
              <Link href="/people" className={linkClass}>
                People
              </Link>
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Stats</strong>
          </h3>
          <ul className="mb-6 list-disc pl-8 font-['Outfit',sans-serif] text-[18px] font-light leading-[1.7] text-[#16140f]">
            <li className="mb-2">
              Since 2005, we&apos;ve funded over 5,000 startups
            </li>
            <li className="mb-2">
              Y Combinator is a community of over 7,000 founders
            </li>
            <li className="mb-2">
              Our companies have a combined valuation of over $600B
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>
            <strong>Follow</strong>
          </h3>
          <ul className="space-y-2 font-['Outfit',sans-serif] text-[18px] font-light leading-[1.7]">
            <li>
              <a
                href="https://www.facebook.com/ycombinator"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ycombinator"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/ycombinator"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ycombinator/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/school/y-combinator/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@y_combinator?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/show/1tgqafxZAB0Bjd8nkwVtE4?si=6f342e636aba4e9e"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Spotify
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
