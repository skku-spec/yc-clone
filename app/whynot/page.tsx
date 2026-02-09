import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why We Don't Invite Groups to Interviews | Y Combinator",
  description:
    "A lot of groups that don't get invited to interviews would like to know why. This is a reasonable thing to want.",
};

export default function WhyNotPage() {
  return (
    <>
      <h1 className="px-4 pt-12 text-center font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:pt-16">
        Why We Don&apos;t Invite Groups to Interviews
      </h1>

      <div className="mx-auto flex max-w-[1100px] gap-12 px-4 pb-10 pt-8 md:px-8 lg:px-12">
        <article className="min-w-0 max-w-[720px] flex-1 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]">
          <p className="mb-6">
            A lot of groups that don&apos;t get invited to interviews would like
            to know why. This is a reasonable thing to want. If there&apos;s
            something wrong with your project, you want to know what.
          </p>

          <p className="mb-6">
            So why don&apos;t we tell people why we didn&apos;t invite them to
            interview? Because, paradoxical as it sounds, there often is no
            reason. The median application is usually pretty good. The reason it
            gets rejected is not that it seems particularly bad, but that there
            are a sufficient number of others that seem particularly good.
          </p>

          <p className="mb-6">
            Probably the reason people expect feedback about why they were
            rejected is that they implicitly think of applying to YC like taking
            a test and getting a grade. But a test where only a fixed number of
            applicants can pass regardless of the average quality is not a grade
            in that sense.
          </p>

          <p className="mb-6">
            There are physical limits on the number of teams a YC Partner can
            reasonably work with during a batch. We interview as many great
            teams as needed to find that number of companies and then generally
            stop, no matter how many good ones apply. From that cutoff down to
            about the halfway point, the applications are pretty good. The
            reason they didn&apos;t get invited was not that there was anything
            specifically wrong with them. They were just pushed down by other
            applicants who were particularly stellar.
          </p>

          <p className="mb-6">
            So the reason we can&apos;t respond to emails about why teams were
            rejected is that a lot of the time there&apos;s literally no answer.
            We could make one up, but we&apos;d be lying in many cases, and the
            better the group, the more likely we&apos;d be lying. The main
            reason the top third or so of the applicants don&apos;t get invited
            to interviews is literally not to be found anywhere in their
            application, but instead is distributed across the top few
            applications that pushed them down below the cutoff.
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
