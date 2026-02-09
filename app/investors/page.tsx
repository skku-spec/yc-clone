import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources for Investors | Y Combinator",
  description:
    "Resources for investors interested in Y Combinator companies.",
};

export default function InvestorsPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-[60px] font-medium leading-[75px] text-[#16140f]">
          Resources for Investors
        </h1>
      </div>

      <article className="mx-auto max-w-[640px]">
        <div className="mb-10">
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            Since 2005, Y Combinator has funded over 5,000 companies and worked
            with over 7,000 founders. Every 3 months over 10,000 companies apply
            to participate in our accelerator and we typically have a 1%
            acceptance rate.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            We now have more than 400 companies valued over $100M and more than
            100 companies valued over $1B.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            To see a complete directory of YC companies please visit the{" "}
            <Link
              href="/companies"
              className="text-[#16140f] underline hover:opacity-70"
            >
              YC Startup Directory
            </Link>
            .
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
            Demo Day
          </h2>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            Four times a year, YC hosts Demo Day where each batch of companies
            present to investors from around the world. The event is invitation
            only. If you are interested in learning more,{" "}
            <Link
              href="/demoday"
              className="text-[#16140f] underline hover:opacity-70"
            >
              click here
            </Link>
            .
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
            Fundraising Documents
          </h2>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            If you are interested in using YC&apos;s standard fundraising
            documents (the Safe), you can{" "}
            <Link
              href="/documents"
              className="text-[#16140f] underline hover:opacity-70"
            >
              download templates
            </Link>
            .
          </p>
        </div>

        <div className="mb-10">
          <h2 className="mb-3 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
            Handshake Protocol
          </h2>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            If you are interested in investing in a YC company, we encourage you
            to read the{" "}
            <Link
              href="/handshake"
              className="text-[#16140f] underline hover:opacity-70"
            >
              Handshake Protocol
            </Link>
            . This is a standard protocol for handshake deals with YC companies.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
            Angel Investing Resources
          </h2>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            If you are interested in becoming an angel investor, we recommend
            checking out our{" "}
            <a
              href="https://www.ycombinator.com/library?categories=Investing%20in%20Startups"
              className="text-[#16140f] underline hover:opacity-70"
            >
              library resources on investing
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
