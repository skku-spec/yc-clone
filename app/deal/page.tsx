import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Y Combinator Standard Deal | Y Combinator",
  description:
    "Details of the Y Combinator standard deal: $500,000 investment on standard terms.",
};

const pClass =
  "mb-6 font-['Outfit',sans-serif] font-light text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const h3Class =
  "mb-3 font-['Source_Serif_4',serif] text-[1.75rem] font-medium italic leading-tight text-[#16140f] md:text-[1.4rem]";

const sectionClass = "mb-10";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

export default function DealPage() {
  return (
    <main className="flex-1 px-4 pb-4 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[640px]">
        <h1 className="mb-2 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:mb-4">
          The Y Combinator Deal
        </h1>
        <p className="mb-8 font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/60">
          By Kirsty Nathoo
        </p>
      </div>

      <article className="mx-auto max-w-[640px]">
        <section className={sectionClass}>
          <h3 className={h3Class}>YC&apos;s Standard Deal</h3>
          <p className={pClass}>
            We have a standard deal for every company that is accepted to Y
            Combinator. We invest $500,000, and our investment gives YC 7% of
            your company plus an incremental equity amount that will be fixed
            when you raise money from other investors.
          </p>
          <p className={pClass}>
            The YC investment is not contingent on hitting any milestones, and we
            do not wait until the batch program starts to invest. The day a
            company is accepted to YC, we commit to investing our standard deal
            and begin the process to do so immediately.
          </p>
          <p className={pClass}>
            In addition to the YC investment, YC companies receive access to a
            wide range of resources. Here is a{" "}
            <Link href="/about" className={linkClass}>
              full list
            </Link>{" "}
            of the benefits and resources available to YC founders.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>The Math</h3>
          <p className={pClass}>
            The way it works is this: we invest $500,000. $125,000 of our
            investment converts into a fixed 7%, and the other $375,000 is
            invested on an uncapped MFN safe.
          </p>
          <p className={pClass}>
            If you&apos;re not familiar with uncapped MFN safes, here&apos;s a
            quick example. In a typical scenario where you raise your next safes
            at a $15M post-money valuation cap, the $375,000 MFN safe would
            convert into $375,000 / $15,000,000 = 2.5% of the company.
          </p>
          <p className={pClass}>
            YC also gets a right to continue to invest in subsequent rounds of
            financing you raise (a &ldquo;pro rata&rdquo; right). In many cases
            we have invested millions of dollars in companies by continuing to
            support them in later rounds.
          </p>
          <p className={pClass}>
            Finally, it&apos;s sometimes hard to compare offers from different
            accelerators. Importantly, we don&apos;t charge any fees to the
            companies to be part of YC. We understand the complex reasons that
            cause some accelerators to charge fees to the companies that
            participate in their programs, and while we don&apos;t think
            it&apos;s bad behavior, obviously founders should deduct those fees
            from the investment when they&apos;re thinking about those offers. We
            also try hard to avoid any &ldquo;gotcha&rdquo; terms like enhanced
            returns in downside exit scenarios and similar provisions.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>Details of the investment</h3>
          <p className={pClass}>
            This section sets out the details and mechanics of YC&apos;s
            investment, for those who are interested.
          </p>
          <p className={pClass}>
            Our $500K investment is made on 2 separate safes at the same time,
            with an accompanying YC Agreement:
          </p>
          <ul className="mb-6 list-disc pl-8">
            <li className={pClass}>
              We invest $125,000 on a post-money safe in return for 7% of your
              company (the &ldquo;$125k safe&rdquo;)
            </li>
            <li className={pClass}>
              We invest $375,000 on an uncapped safe with a Most Favored Nation
              (&ldquo;MFN&rdquo;) provision (the &ldquo;MFN safe&rdquo;)
            </li>
            <li className={pClass}>
              The YC Agreement sets out some YC-specific guidelines and rights,
              including a participation right to invest in the company&apos;s
              future financing rounds.
            </li>
          </ul>
          <p className={pClass}>
            In this Safe Conversion Financing, assuming all of the
            company&apos;s outstanding Safes were issued on a post-money basis, 3
            things will happen simultaneously in the round - though the
            calculations are ordered specifically, as follows:
          </p>
          <ul className="mb-6 list-disc pl-8">
            <li className={pClass}>
              All Safes and other convertible instruments convert into preferred
              shares
            </li>
            <li className={pClass}>
              A stock option pool is created or increased to a pre-agreed
              percentage of the company
            </li>
            <li className={pClass}>
              New money is invested in the company
            </li>
          </ul>
          <p className={pClass}>
            YC&apos;s $125k Safe will convert in the priced round into 7% of the
            company&apos;s equity (including any existing option pool) after all
            the Safes and other convertible instruments have converted in
            conjunction with the priced round.
          </p>
          <p className={pClass}>
            YC&apos;s MFN Safe will automatically convert in the priced round on
            the terms of the lowest cap Safe (or other most favorable terms, such
            as a discount) issued between the specific MFN start date (around the
            start of the batch) and the priced round.
          </p>
          <p className={pClass}>
            The priced round itself, and the creation or increase of the stock
            option pool, will dilute YC&apos;s ownership.
          </p>
          <p className={pClass}>
            The pro rata right, mentioned above, means YC has the right to
            purchase a portion of the new money securities issued in the
            financing in order to help maintain our ownership stake. If we
            exercise the pro rata right, step #3 then includes our additional new
            money investment.
          </p>
          <p className={pClass}>
            Additional Future Financing Rounds: When you conduct subsequent
            rounds of financing, we continue to have a participation right to
            help maintain our ownership stake.
          </p>
        </section>

        <section className={sectionClass}>
          <h3 className={h3Class}>Incorporating</h3>
          <p className={pClass}>
            We invest in US, Cayman, and Singapore corporations. If you
            haven&apos;t incorporated a company yet, don&apos;t worry about it;
            we will help you do that if you are accepted to YC.
          </p>
          <p className={pClass}>
            We have startups that apply to YC from all around the world and many
            have already incorporated in their home countries. If you&apos;ve
            already incorporated your startup in another country that is not one
            of the three above, you will need to &ldquo;flip&rdquo; your
            corporate structure to have a parent company in one of those three
            countries. In these cases, we introduce founders to lawyers who can
            work out the best process for doing this. Often, the original entity
            will become a subsidiary of a new parent company and will continue to
            operate in the startup&apos;s home country; the parent company will
            be the ultimate owner of all your startup&apos;s intellectual
            property and assets, but IP can be held at the subsidiary or parent
            level &ndash; that&apos;s your choice.
          </p>
        </section>
      </article>
    </main>
  );
}
