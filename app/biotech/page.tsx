import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biotech | Y Combinator",
  description:
    "We want to enable scientists and inventors to bring their work to market. We've funded companies that cover the whole life sciences spectrum.",
};

export default function BiotechPage() {
  return (
    <>
      <h1 className="px-4 pt-12 text-center font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:pt-16">
        Biotech &amp; Life Science Companies
      </h1>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-10 pt-8 md:px-8 lg:px-12">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]">
          <p className="mb-6">
            YC funded our first biotech company, (
             <a
               href="https://www.ginkgobioworks.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               Ginkgo Bioworks
             </a>
            ), in 2014. Since then, we&apos;ve expanded aggressively into all
            areas of biotech and the life sciences. Today, YC funds more biotech
            startups each year than any other investor.
          </p>

          <h3
            id="whoapply"
            className="mb-4 mt-10 font-['Source_Serif_4',serif] text-2xl font-medium italic text-[#16140f]"
          >
            Who Should Apply
          </h3>

          <p className="mb-6">
            A revolution is happening in life sciences that is reminiscent of
            what happened in software in the 90&apos;s. Now that cost and cycle
            time have decreased for biotech, it&apos;s possible for new startups
            to do groundbreaking work.
          </p>

          <p className="mb-6">
            While we also fund companies that are further along, we&apos;re
            especially comfortable funding life science projects at their
            earliest stage, right when they&apos;re ready to spin out of
            university research.
          </p>

          <p className="mb-6">
            We&apos;ve funded companies that cover the whole life sciences
            spectrum, including synthetic biology, therapeutics, digital health,
            diagnostics, medical devices, food technology like clean meat,
            platforms and tools. The examples range from creating{" "}
             <a
               href="http://notablelabs.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               personalized
             </a>{" "}
             cancer treatments to{" "}
             <a
               href="http://solugen.com/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               producing industrial chemicals
             </a>
            .
          </p>

          <h3
            id="whatwedo"
            className="mb-4 mt-10 font-['Source_Serif_4',serif] text-2xl font-medium italic text-[#16140f]"
          >
            What We Do for Life Science Companies
          </h3>

          <p className="mb-6">
            Every life sciences company is different, so we don&apos;t have a
            curriculum or a one-size-fits-all program. Instead, we work with
            each company individually to help solve whatever their current
            challenges are.
          </p>

          <p className="mb-6">
            Some of the things we often help companies with include: regulatory
            approval and clinical trial sites, patents and IP protection,
            reimbursement and developing their business model, negotiating with
            tech transfer offices, finding initial customers, and raising money
            from investors. We also love to get deep into the science and help
            founders think through the scientific bets they are making.
          </p>

          <p className="mb-6">
            Life science companies are still expensive to start (though they are
            getting cheaper), and one of the most important things we do is to
            prepare companies to raise a large round from investors. Bio
            companies in YC have been very successful at raising multi-million
            dollar rounds at the end of the program.
          </p>

          <p className="mb-6">
            One of the most valuable parts of YC for bio companies is the
            network of other bio companies we have funded. It is now a diverse
            network of impressive domain experts who go out of their way to help
            each other. There are also now a number of YC companies that provide
            critical services widely used by the other bio companies:
          </p>

          <ul className="mb-6 list-disc space-y-1 pl-6">
             <li>
               <a
                 href="https://www.enzyme.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Enzyme
               </a>{" "}
               - FDA consulting as a service
             </li>
             <li>
               <a
                 href="https://www.scienceexchange.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Science Exchange
               </a>{" "}
               - marketplace for scientific supplies
             </li>
             <li>
               <a
                 href="http://www.atomwise.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Atomwise
               </a>{" "}
               – computational drug discovery
             </li>
             <li>
               <a
                 href="http://www.cognitionip.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Cognition IP
               </a>{" "}
               – life science patent law firm
             </li>
             <li>
               <a
                 href="https://www.quartzy.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Quartzy
               </a>{" "}
               - lab management
             </li>
             <li>
               <a
                 href="https://www.culturebiosciences.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Culture Biosciences
               </a>{" "}
               - bioreactors on demand
             </li>
          </ul>

          <p className="mb-6">
            YC doesn&apos;t have its own lab space for founders. We&apos;ve
            found that what founders want in lab space is simply too varied for
            one space to work for everyone. Instead, we work with the lab space
            providers to get preferential access and deals for YC companies. The
            Bay Area has some of the world&apos;s best lab space options for
            startups, so no matter what you need, we can help you find it.
          </p>

          <h3
            id="alumni"
            className="mb-4 mt-10 font-['Source_Serif_4',serif] text-2xl font-medium italic text-[#16140f]"
          >
            Alumni
          </h3>

          <p className="mb-4">
            Here are some of the biotech/life sciences companies we&apos;ve
            funded:
          </p>

          <ul className="mb-6 list-disc space-y-1 pl-6">
             <li>
               <a
                 href="http://ginkgobioworks.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Ginkgo Bioworks
               </a>{" "}
               – engineering new organisms
             </li>
             <li>
               <a
                 href="http://solugen.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Solugen
               </a>{" "}
               – producing industrial chemicals with synthetic biology
             </li>
             <li>
               <a
                 href="https://asherbio.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Asher Bio
               </a>{" "}
               - cancer immunotherapies
             </li>
             <li>
               <a
                 href="https://www.lucirahealth.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Lucira Health
               </a>{" "}
               - diagnostics for infectious disease
             </li>
             <li>
               <a
                 href="http://www.zenflow.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Zenflow
               </a>{" "}
               – medical device for PBH
             </li>
             <li>
               <a
                 href="https://www.reverielabs.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Reverie Labs
               </a>{" "}
               – next-generation kinase inhibitors for oncology
             </li>
             <li>
               <a
                 href="https://notablelabs.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Notable Labs
               </a>{" "}
               - personalized drug discovery for blood cancer
             </li>
             <li>
               <a
                 href="https://billiontoone.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 BillionToOne
               </a>{" "}
               - fetal genetic testing service
             </li>
             <li>
               <a
                 href="https://alpine-roads.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Alpine Roads
               </a>{" "}
               - plants engineered to express milk proteins
             </li>
             <li>
               <a
                 href="https://athelas.com/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Athelas
               </a>{" "}
               - point-of-care blood diagnostic device
             </li>
             <li>
               <a
                 href="https://shasqi.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Shasqi
               </a>{" "}
               - localized delivery for oncology drugs
             </li>
             <li>
               <a
                 href="https://endpoint.health/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 Endpoint Health
               </a>{" "}
               - precision medicine for hospital care
             </li>
          </ul>

          <p className="mb-6">
            <Link
              href="/companies?industry=Healthcare"
              className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
            >
              Here is a complete list
            </Link>{" "}
            of the healthcare/life sciences companies we&apos;ve funded.
          </p>

          <h3
            id="blogposts"
            className="mb-4 mt-10 font-['Source_Serif_4',serif] text-2xl font-medium italic text-[#16140f]"
          >
            Blog posts
          </h3>

          <p className="mb-4">
            Here are some things we&apos;ve written about biotech companies.
          </p>

          <ul className="mb-6 list-disc space-y-1 pl-6">
             <li>
               <a
                 href="https://www.ycombinator.com/library/4L-how-biotech-startup-funding-will-change-in-the-next-10-years"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 How Biotech Startup Funding Will Change in the Next 10 Years
               </a>
             </li>
             <li>
               <a
                 href="https://www.ycombinator.com/library/8f-how-to-spin-your-scientific-research-out-of-a-university-and-into-a-startup"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 How to Spin Your Scientific Research Out Of a University and
                 Into a Startup
               </a>
             </li>
             <li>
               <a
                 href="https://www.ycombinator.com/library/4r-yc-and-hard-tech-startups"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
               >
                 YC and Hard Tech Startups
               </a>
             </li>
          </ul>

          <h3
            id="quotes"
            className="mb-4 mt-10 font-['Source_Serif_4',serif] text-2xl font-medium italic text-[#16140f]"
          >
            Quotes
          </h3>

          <blockquote className="mb-2 border-l-4 border-[#FF6C0F] pl-6 italic text-[#16140f]/80">
            <p>
              The pace of YC is insane — you are part of a network of
              fast-growing companies and feed off the energy. Ginkgo is on a
              dramatically faster pace of growth now thanks to YC. I was amazed
              how similar the challenges of scaling a startup are whether you are
              a biotech or a software company. We learned a ton. I&apos;d do it
              again in a heartbeat.
            </p>
          </blockquote>
          <p className="mb-8 text-sm text-[#16140f]/60">
            – Jason Kelly, Ginkgo Bioworks
          </p>

          <blockquote className="mb-2 border-l-4 border-[#FF6C0F] pl-6 italic text-[#16140f]/80">
            <p>
              YC was essential for creating Bikanta&apos;s
              &apos;dictionary&apos;. During YC, we defined many of the key
              elements of our company, from what is the core of our technology
              to the important business milestones to achieve to how to create a
              resourceful team. The YC experience was critical in shaping what
              started as empowering technology into what is now a productive and
              game-changing company.
            </p>
          </blockquote>
          <p className="mb-8 text-sm text-[#16140f]/60">
            – Ambika Bumb, Bikanta
          </p>
        </article>

        <nav className="sticky top-24 hidden h-fit w-[220px] shrink-0 font-['Outfit',sans-serif] text-sm lg:block">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#16140f]/50">
                Contents
              </p>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href="#whoapply"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    Who Should Apply
                  </a>
                </li>
                <li>
                  <a
                    href="#whatwedo"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    What We Do
                  </a>
                </li>
                <li>
                  <a
                    href="#alumni"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    Alumni
                  </a>
                </li>
                <li>
                  <a
                    href="#quotes"
                    className="text-[#16140f]/70 transition-colors hover:text-[#FF6C0F]"
                  >
                    Quotes
                  </a>
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
