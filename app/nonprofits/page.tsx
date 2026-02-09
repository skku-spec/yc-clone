import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nonprofits | Y Combinator",
  description:
    "YC works with a small number of non-profits startups in every batch. Learn about our non-profit program.",
};

export default function NonprofitsPage() {
  return (
    <>
      <div className="px-4 pt-12 md:pt-16">
        <h1 className="text-center font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          YC&apos;s Non-profit Program
        </h1>
        <p className="mt-2 text-center font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/60">
          By Tim Brady
        </p>
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-10 pt-8 md:px-8 lg:px-12">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]">
          <p className="mb-6">
            We work with a small number of non-profits startups in every YC
            batch, usually between 2 to 4 companies. We started working with
            non-profits in 2013 and have worked with more than 30 companies so
            far. Here is a{" "}
            <Link
              href="/companies?nonprofit=true"
              className="text-[#ff6600] underline decoration-[#ff6600]/30 underline-offset-2 hover:decoration-[#ff6600]"
            >
              list of the non-profits
            </Link>{" "}
            that have gone through the YC program so far.
          </p>

          <p className="mb-6">
            While 501c3 non-profit companies vary greatly in strategy, we favor
            those companies that strive to cover their operating costs by
            charging fees for the products &amp; services they create rather
            than relying on donations. We do this for two primary reasons: (1)
            Charging users for your product ensures that you provide the value
            you claim to deliver. Users of free products &amp; services rarely
            complain. Paying users complain loudly; they will let you know when
            you&apos;ve gone off course. (2) You are not as vulnerable to market
            downturns. Donations dry up quickly in economic downturns.
            Revenue-generating products and service can insulate you from that.
          </p>

          <p className="mb-6">
            Non-profit startups that charge fees for their products and service
            are also more similar to for-profits startups. Consequently, a lot
            of the advice we give at YC and much of the curriculum during the
            batch is directly applicable to both. During the batch, non-profits
            are mixed in with the for-profit startups.
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[220px] shrink-0 font-['Outfit',sans-serif] text-sm lg:block">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
              Elsewhere
            </p>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/apply"
                  className="text-[#16140f]/70 transition-colors hover:text-[#ff6600]"
                >
                  Apply to Y Combinator
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#16140f]/70 transition-colors hover:text-[#ff6600]"
                >
                  About Y Combinator
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#16140f]/70 transition-colors hover:text-[#ff6600]"
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
