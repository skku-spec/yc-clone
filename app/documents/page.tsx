import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YC Safe Financing Documents | Y Combinator",
  description:
    "Y Combinator introduced the safe (simple agreement for future equity) in late 2013. Download SAFE financing documents for US and non-US companies.",
};

const SAFE_BASE = "https://bookface-static.ycombinator.com/assets/ycdc";

const US_DOCS = [
  {
    name: "Safe: Valuation Cap, no Discount",
    file: "Postmoney Safe - Valuation Cap Only - FINAL-f2a64add6d21039ab347ee2e7194141a4239e364ffed54bad0fe9cf623bf1691.docx",
  },
  {
    name: "Safe: Discount, no Valuation Cap",
    file: "Postmoney Safe - Discount Only - FINAL-b9ecb516615d60c6c4653507442aa2561023004368232b7d6e75edc9629acc99.docx",
  },
  {
    name: 'Safe: "Uncapped MFN" (no Valuation Cap, no Discount)',
    file: "Postmoney Safe - MFN Only - FINAL-2bc87fa3d2ec5072a60d653aec9a885fb43879781e44341fa720a8e7d1cc42ff.docx",
  },
  {
    name: "Pro Rata Side Letter",
    file: "Pro Rata Side Letter-d6dd8d827741862b18fba0f658da17fb4e787e5f2dda49584b9caea89bf42302.docx",
  },
  {
    name: "Safe User Guide",
    file: "Website User Guide Feb 2023 - final-28acf9a3b938e643cc270b7da514194d5c271359be25b631b025605673fa9f95.pdf",
  },
];

const NON_US_DOCS = [
  {
    name: "Safe: Valuation Cap, No Discount (Canada)",
    file: "Postmoney Safe - Valuation Cap Only (Canada) FINAL-908361f232fb25ff961560a0b959cd4f656ca944f84d6009f7cab56e629f79f2.docx",
  },
  {
    name: "Pro Rata Side Letter (Canada)",
    file: "Pro Rata Side Letter (Canada)-199957825465a7b592b0a04464b22a76dc7ced40bc828cce858cb5f39527084f.docx",
  },
  {
    name: "Safe: Valuation Cap, No Discount (Caymans)",
    file: "Postmoney Safe - Valuation Cap Only (Cayman) FINAL-7b3206e15466942b218b31118667593d735ee05a39d5390ad78dc7cc74310d33.docx",
  },
  {
    name: "Pro Rata Side Letter (Caymans)",
    file: "Pro Rata Side Letter (Cayman)-ec1289f5f228237488f011bce2279d8cb4fd90db676a89e7fa4e02abe441b93a.docx",
  },
  {
    name: "Safe: Valuation Cap, No Discount (Singapore)",
    file: "Postmoney Safe - Valuation Cap Only (Singapore) FINAL-3ce53fbce48b42a5a2a4e657654d78ec40310d43b318802ef7039cb9260783ce.docx",
  },
  {
    name: "Pro Rata Side Letter (Singapore)",
    file: "Pro Rata Side Letter (Singapore)-22ef48dda1009ab83ab9162cbdaae846ec480b9796bb453532dd747edb5d9c25.docx",
  },
];

const SAFE_USER_GUIDE_URL = `${SAFE_BASE}/Website User Guide Feb 2023 - final-28acf9a3b938e643cc270b7da514194d5c271359be25b631b025605673fa9f95.pdf`;

export default function DocumentsPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
          Safe Financing Documents
        </h1>
        <p className="mt-2 font-sans text-base text-[#16140f]/60">
          By Carolynn Levy
        </p>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-col gap-8 md:flex-row">
        <nav className="shrink-0 md:w-[200px]">
          <ul className="sticky top-24 space-y-3 font-sans text-sm">
            <li>
              <a
                href="#downloads"
                className="text-[#ff6600] hover:opacity-70"
              >
                Downloads
              </a>
            </li>
            <li>
              <a
                href="#about-the-safe"
                className="text-[#ff6600] hover:opacity-70"
              >
                About the Safe
              </a>
            </li>
          </ul>
        </nav>

        <article className="min-w-0 flex-1">
          <section id="downloads">
            <h2 className="mb-6 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              Download the Safe
            </h2>

            <h3 className="mb-3 font-sans text-lg font-semibold text-[#16140f]">
              US companies
            </h3>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              There are three versions of the post-money safe intended for use
              by US companies, plus an optional side letter.
            </p>
            <ul className="mb-8 ml-6 list-disc space-y-2 font-sans text-base text-[#16140f]">
              {US_DOCS.map((doc) => (
                <li key={doc.file}>
                  <a
                    href={`${SAFE_BASE}/${doc.file}`}
                    className="text-[#ff6600] underline hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 font-sans text-lg font-semibold text-[#16140f]">
              Non-US companies
            </h3>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              There is one version of the post-money safe, Valuation Cap (no
              discount), intended for use by companies formed in Canada, Cayman
              and Singapore, plus an optional side letter for each country.
              Before using any of these international forms, you should consult
              with a lawyer licensed in the relevant country.
            </p>
            <ul className="mb-8 ml-6 list-disc space-y-2 font-sans text-base text-[#16140f]">
              {NON_US_DOCS.map((doc) => (
                <li key={doc.file}>
                  <a
                    href={`${SAFE_BASE}/${doc.file}`}
                    className="text-[#ff6600] underline hover:opacity-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="about-the-safe" className="mt-12">
            <h2 className="mb-6 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              About the Safe
            </h2>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Y Combinator introduced the safe (simple agreement for future
              equity) in late 2013, and since then, it has been used by almost
              all YC startups and countless non-YC startups as the main
              instrument for early-stage fundraising.
            </p>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Our first safe was a &quot;pre-money&quot; safe, because at the
              time of its introduction, startups were raising smaller amounts of
              money in advance of raising a priced round of financing (typically,
              a Series A Preferred Stock round). The safe was a simple and fast
              way to get that first money into the company, and the concept was
              that holders of safes were merely early investors in that future
              priced round. But early stage fundraising evolved in the years
              following the introduction of the original safe, and now startups
              are raising much larger amounts of money as a first
              &quot;seed&quot; round of financing. While safes are being used for
              these seed rounds, these rounds are really better considered as
              wholly separate financings, rather than &quot;bridges&quot; into
              later priced rounds.
            </p>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              In 2018 we released the &quot;post-money&quot; safe. By
              &quot;post-money,&quot; we mean that safe holder ownership is
              measured after (post) all the safe money is accounted for - which
              is its own round now - but still before (pre) the new money in the
              priced round that converts and dilutes the safes (usually the
              Series A, but sometimes Series Seed). The post-money safe has what
              we think is a huge advantage for both founders and investors - the
              ability to calculate immediately and precisely how much ownership
              of the company has been sold. It&apos;s critically important for
              founders to understand how much dilution is caused by each safe
              they sell, just as it is fair for investors to know how much
              ownership of the company they have purchased.
            </p>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              The safe has two fundamental features that are critically important
              for startups:
            </p>

            <ul className="mb-6 ml-6 list-disc space-y-3 font-sans text-base leading-relaxed text-[#16140f]">
              <li>
                It allows for{" "}
                <a
                  href="http://www.paulgraham.com/hiresfund.html"
                  className="text-[#ff6600] underline hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  high resolution fundraising
                </a>
                . Startups can close with an investor as soon as both parties are
                ready to sign and the investor is ready to wire money, instead of
                trying to coordinate a single close with all investors
                simultaneously. In fact, high resolution fundraising may be much
                easier now that both founders and investors have more certainty
                and transparency into what each side is giving and getting.
              </li>
              <li>
                As a flexible, one-document security without numerous terms to
                negotiate, safes save startups and investors money in legal fees
                and reduce the time spent negotiating the terms of the
                investment. Startups and investors will usually only have to
                negotiate one item: the valuation cap. Because a safe has no
                expiration or maturity date, there should be no time or money
                spent dealing with extending maturity dates, revising interest
                rates or the like.
              </li>
            </ul>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Whether you are using the safe for the first time or are already
              familiar with safes, we recommend reviewing our{" "}
              <a
                href={SAFE_USER_GUIDE_URL}
                className="text-[#ff6600] underline hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safe User Guide
              </a>{" "}
              (geared primarily at US companies). The Safe User Guide explains
              how the safe converts, with sample calculations, an explanation of
              the pro rata side letter, and suggestions for best use.
            </p>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              While the safe may not be suitable for all financing situations,
              the terms are intended to be balanced, taking into account both the
              startup&apos;s and the investors&apos; interests. There is a
              trade-off between simplicity and comprehensiveness, so while not
              every edge case is addressed, we believe the safe covers the most
              pertinent and common issues. Both parties are encouraged to have
              their lawyers review the safe if they want to, but we believe it
              provides a starting point that can be used in most situations,
              without modifications. We hold this belief because of our firsthand
              experience seeing and helping hundreds of companies fundraise every
              year, as well as the thoughtful feedback we received from the
              founders, investors, lawyers and accountants with whom we have
              shared drafts of every iteration of the safe.
            </p>

            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Needless to say, YC does not assume responsibility for the contents
              of, or the consequence of using, any version of the safe or any
              other document found on our website. Before using any of these
              forms, you should consult with a lawyer licensed in the country
              where your company was formed.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
