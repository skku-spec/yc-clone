import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Handshake Deal Protocol | Y Combinator",
  description:
    "Silicon Valley runs on handshake deals. A handshake deal is a verbal commitment to a transaction.",
};

export default function HandshakePage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <h1 className="mb-8 text-center font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
        The Handshake Deal Protocol
      </h1>

      <div className="mx-auto flex max-w-[900px] flex-col gap-8 md:flex-row">
        <nav className="shrink-0 md:w-[200px]">
          <ul className="sticky top-24 space-y-3 font-sans text-sm">
            <li>
              <a href="#intro" className="text-[#FF6C0F] hover:opacity-70">
                Intro
              </a>
            </li>
            <li>
              <a
                href="#the-problem"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                The Problem
              </a>
            </li>
            <li>
              <a
                href="#the-protocol"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                The Protocol
              </a>
            </li>
            <li>
              <a
                href="#audit-trail"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                Audit Trail
              </a>
            </li>
            <li>
              <a
                href="#avoids-ambiguity"
                className="text-[#FF6C0F] hover:opacity-70"
              >
                Avoids Ambiguity
              </a>
            </li>
          </ul>
        </nav>

        <article className="min-w-0 flex-1">
          <section id="intro">
            <h2 className="mb-4 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              Intro
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Silicon Valley runs on handshake deals. A handshake deal is a
              verbal commitment to a transaction. The actual transaction comes
              later, when documents are signed and money changes hands.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Why do we need handshake deals? Why not just wait till the actual
              transaction? Because things can happen fast in the startup world.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              So both investors and founders need a way to reserve space in a
              transaction. Founders need it because creating documents and
              getting them signed would slow down their fundraising, and
              investors need it because if they had to wait for documents to get
              created and signed before they could commit, they&apos;d miss out
              on the hotter deals.
            </p>
            <p className="mb-8 font-sans text-base leading-relaxed text-[#16140f]">
              Handshake deals are not unique to Silicon Valley of course. They
              tend to arise wherever trust is sufficiently high and speed is
              sufficiently important. Diamond dealers apparently use them a lot.
            </p>
          </section>

          <section id="the-problem">
            <h2 className="mb-4 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              The Problem
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Unfortunately, things don&apos;t work as smoothly in Silicon
              Valley as among diamond dealers. This is not a closed community of
              pros who deal with one another day after day. Many participants in
              the funding market are noobs, and some are dishonest.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Every cycle we get reports of supposed handshake deals that fell
              through. Without video of the conversation it&apos;s hard for us
              to be sure whether there really was a deal and the investor
              welched, or there wasn&apos;t and the founders are just victims of
              their own wishful thinking.
            </p>
            <p className="mb-8 font-sans text-base leading-relaxed text-[#16140f]">
              The problem is compounded by the fact that some investors
              deliberately mislead startups about how interested they are in
              investing. Startups&apos; prospects can change rapidly. If
              investors say no in a way that sounds like yes, they can
              essentially take a free option to invest. They haven&apos;t
              actually committed, so it costs them nothing, but if the startup
              turns out to be a hot one, they can retroactively claim that their
              almost-yes was an actual yes, and that the startup is morally
              obliged to let them invest.
            </p>
          </section>

          <section id="the-protocol">
            <h2 className="mb-4 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              The Protocol
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Fortunately there is a way to fix most of these problems: to
              define a standard protocol for handshake deals. We&apos;re going
              to start using this within YC, and we hope it will spread to the
              rest of the startup community.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              The protocol defines an offer as an amount to be invested, plus a
              valuation or valuation cap (or no cap), plus an optional discount.
              Here are some example offers: $100k at a $5M cap. $100k uncapped.
              $100k uncapped with a 10% discount.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              According to the protocol, you have a handshake deal if and only
              if the following happens: (1) The investor says &quot;I&apos;m
              in.&quot; (2) The startup sends the investor an email or text
              message saying &quot;Can you confirm you&apos;re in for
              [offer]?&quot; — spelling out the exact offer including the
              specific amount and terms. (3) The investor replies yes.
            </p>
            <p className="mb-8 font-sans text-base leading-relaxed text-[#16140f]">
              Unless and until this process is completed, there is no handshake
              deal. So it is in the interest of investors to complete the final
              step, because until they do the startup is under no obligation to
              take their money.
            </p>
          </section>

          <section id="audit-trail">
            <h2 className="mb-4 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              Audit Trail
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Since both parties will usually have mobile devices from which
              they can send such messages, they should ordinarily do it in
              person as the final step of the agreement. They should each regard
              it as suspicious if the other is unwilling to.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              At the very least this protocol will tell us who&apos;s at fault
              if we get a report of a handshake deal falling through. But it
              should do more than that. A definite protocol that leaves a trail
              will both prevent founders from misleading themselves, and
              discourage investors from misleading them.
            </p>
            <p className="mb-8 font-sans text-base leading-relaxed text-[#16140f]">
              I don&apos;t think the offer has to specify the documents to be
              used. In practice this is rarely an issue. People either use one
              of the{" "}
              <Link
                href="/documents"
                className="text-[#FF6C0F] underline hover:opacity-70"
              >
                standard documents
              </Link>{" "}
              (for small investments) or negotiate in good faith (for large
              ones). Market terms are well enough understood that it should be
              easy to see who&apos;s at fault if one party is making
              difficulties about the terms, and that&apos;s all we ask from this
              protocol.
            </p>
          </section>

          <section id="avoids-ambiguity">
            <h2 className="mb-4 font-serif text-[32px] font-medium leading-tight text-[#16140f]">
              Avoids Ambiguity
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              The protocol deliberately makes it impossible to say certain
              things. For example, an investor can&apos;t just say they&apos;ll
              invest $x, without specifying a valuation or cap. Investors who do
              that can escape their commitment later by claiming the price
              turned out to be too high. An offer to invest has to specify a
              valuation or cap, or no cap. Otherwise it&apos;s incompletely
              defined and thus not even an offer.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              It also isn&apos;t possible to make a handshake deal on an offer
              to invest a range of money. Investors will sometimes try to make a
              deal to invest, say, $50k to $150k. If a startup agrees to that,
              they&apos;re obliged to save $150k of space but the investor is
              only obliged to invest $50k. An offer to invest a range of money
              is really two separate things: an offer to invest the bottom end
              of the range, plus an expression of interest in possibly investing
              more. So we suggest startups respond to each separately: do a
              handshake deal for the bottom end of the range, and respond
              politely to the investor&apos;s interest in investing more, but
              don&apos;t feel any obligation to take more money till the
              investor commits to investing it. Knowing they&apos;re guaranteed
              no more than the lower end of their range should sometimes cause
              investors to commit upfront to investing more. And if it
              doesn&apos;t, it would have been a mistake for the startup to rely
              on getting more.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Finally, it isn&apos;t possible to add conditions to a handshake
              deal. For example, there is no way for an investor to use this
              protocol to offer, as some investors try to do, to invest if other
              people will—e.g. to say that they&apos;ll invest as part of a
              larger round if you can find a lead. That sort of commitment is so
              worthless in practice that it&apos;s a mistake for startups either
              to rely on it, or to feel themselves bound by it. It&apos;s not
              even rightly considered an offer, but at best a lead (and one that
              will rapidly grow cold). While the investor can&apos;t add
              conditions to a handshake deal, it is possible to change the
              deadlines in which the offer must be accepted and the funding has
              to be completed. The purpose of these deadlines is to prevent
              situations where either the investor delays acceptance of the
              handshake deal or the startup and the investor have a valid
              handshake deal, but no time frame in which the investor must send
              its money. These deadlines avoid any ambiguity about whether or
              not there is a valid handshake deal and about when the handshake
              deal expires, and it should certainly expire if the investor fails
              to fund after a certain period of time. Ten days is a reasonable
              period of time for both parties to complete the funding process,
              but they can decide on different timing, provided there is
              unequivocal agreement (in writing) about a different deadline.
            </p>
            <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
              Startups and investors can of course make any sort of arrangement
              they want. But they don&apos;t have a handshake deal according to
              this protocol unless the terms are precise and unconditional.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
