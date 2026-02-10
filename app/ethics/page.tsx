import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder Ethics | Y Combinator",
  description:
    "Y Combinator is a network of people who trust one another, often solely on the basis of participation in the YC program. Members of the YC community share a common set of values, such as integrity, respect and accountability.",
};

export default function EthicsPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <h1 className="mb-8 text-center font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
        Founder Ethics
      </h1>

      <div className="mx-auto flex max-w-[900px] flex-col gap-12 md:flex-row">
        <div className="flex-[2]">
          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Y Combinator is a network of people who trust one another, often
            solely on the basis of participation in the YC program.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            The YC community is strong because its members share a set of common
            values such as integrity, respect and accountability. We believe
            these are critical traits for founders to have. The continuing
            strength and value of this network hinges on the trustworthiness of
            its members. Founders who behave unethically put the reputation of
            the entire community at risk.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Some examples of ethical behavior we expect from founders are:
          </p>

          <ul className="mb-6 ml-6 list-disc space-y-2 font-sans text-base leading-relaxed text-[#16140f]">
            <li>
              Treating co-founders and employees with fairness and respect.
            </li>
            <li>
              Not using misleading, dishonest or illegal sales tactics.
            </li>
            <li>
              Not spamming members of the community, or shilling in any manner
              for funds, investors, consultants/advisors, events/conferences,
              politicians/campaigns, tokens/NFTs, content marketing or similar.
            </li>
            <li>Being honest with investors and partners.</li>
            <li>
              Not harassing or threatening any co-founder, YC community member,
              employee, or anyone else.
            </li>
            <li>
              Keeping off-the-record or confidential information (whether about
              YC itself or a YC company) private and secret.
            </li>
            <li>
              Ensuring your company resolves privacy and security issues promptly
              and appropriately.
            </li>
            <li>
              Treating emails and other communications shared within the YC
              network as confidential, and not forwarding to non-YC founders,
              investors, or the press.
            </li>
            <li>
              Not behaving in a way that damages the reputation of his/her
              company or of YC.
            </li>
            <li>
              Being honest in the YC application and interview process.
            </li>
            <li>
              Keeping your word, including honoring{" "}
              <Link
                href="/handshake"
                className="text-[#FF6C0F] underline hover:opacity-70"
              >
                handshake deals
              </Link>
              , contractual obligations and the like.
            </li>
            <li>
              Treating the money invested in your company with the utmost
              respect, to be used exclusively to further the goals of the
              company.
            </li>
            <li>
              Abiding by the Y Combinator Brand Use Rules, the BookFace
              Community Guidelines and the Hacker News Guidelines.
            </li>
            <li>
              Generally operating in good faith and behaving in a professional
              and upstanding way.
            </li>
          </ul>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            To maintain our community, if we determine (in our sole discretion)
            that a founder has behaved unethically during or after YC, we will
            revoke their YC founder status. This includes access to all Y
            Combinator spaces, software, lists and events. All founders in a
            company may be held responsible for the unethical actions of a single
            co-founder or a company employee, depending on the circumstances.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            We will stand behind you no matter how much your company struggles,
            as long as you behave ethically.
          </p>
        </div>

        <nav className="flex-1">
          <div className="font-sans text-sm">
            <p className="mb-2 font-semibold uppercase tracking-wider text-[#16140f]/60">
              Elsewhere
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#FF6C0F] hover:opacity-70"
                >
                  About Y Combinator
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#FF6C0F] hover:opacity-70">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
