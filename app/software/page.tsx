import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software at YC | Y Combinator",
  description:
    "Build the software that runs YC. Learn about engineering at Y Combinator.",
};

export default function SoftwarePage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24">
      <div className="mb-16">
        <h1 className="mb-2 font-sans text-[80px] font-bold leading-[80px] text-[#ff6600]">
          Software at YC
        </h1>
        <p className="font-sans text-base text-[#ff6600]">
          Build the software that runs YC
        </p>
      </div>

      <div className="mx-auto max-w-[640px]">
        <article className="mb-16">
          <div className="mb-10">
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              YC operates at massive scale, with a surprisingly small team. To
              do that, we write a lot of software.
            </p>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              You might have used some of YC&apos;s software products yourself,
              like{" "}
              <a
                href="https://news.ycombinator.com/"
                className="text-[#16140f] underline hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hacker News
              </a>{" "}
              or{" "}
              <a
                href="https://www.workatastartup.com/"
                className="text-[#16140f] underline hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work at a Startup
              </a>
              , which helps many YC founders hire their first employees.
            </p>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              But the public facing software is just the tip of the iceberg -
              most of the software we write is invisible to the outside world. We
              work on Bookface, YC&apos;s private social network, which most YC
              founders use every day. We also build the critical internal
              software that runs YC - including the software that lets us
              evaluate 100,000 applications every year and decide which startups
              to fund.
            </p>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              Over the past year, we&apos;ve spent about half of our time
              working on AI agents. Most of what YC funds these days is AI
              companies, and we&apos;ve leaned just as heavily into building our
              own AI software. We now have fully deployed agents that automate
              many important tasks - answering our customer support emails,
              managing our events, and helping us make sense of all the data
              flowing through our systems.
            </p>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              Working at YC means working on the cutting edge of AI - both in
              terms of the software we are writing ourselves and the companies we
              are working with every day.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-4 font-sans text-2xl font-bold text-[#16140f]">
              What it&apos;s like to work at YC
            </h2>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              The YC software team operates on the same advice we give to our
              startups. If you&apos;ve watched YC videos or read Paul
              Graham&apos;s essays you&apos;ll already be familiar with our
              principles:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              <li>
                Hire very slowly and keep your team as small as possible
              </li>
              <li>Avoid bureaucracy at all costs</li>
              <li>
                Stay close to your users and spend a lot of time with them
              </li>
              <li>Move fast and launch stuff as early as possible</li>
            </ul>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              The entire software team is about 15 full-stack product engineers.
              Engineers own projects end to end, including the product decisions,
              and talk directly to the users and key stakeholders. You&apos;ll
              know everyone you work with, and your decisions will matter. Our
              stack is straightforward (Rails, React, Postgres). What matters
              more is good judgment and the ability to see complex projects
              through to the finish line.
            </p>
          </div>
        </article>

        <article className="mb-16">
          <div className="mb-10">
            <h2 className="mb-4 font-sans text-2xl font-bold text-[#16140f]">
              Get full access to YC
            </h2>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              As an engineer at YC, you&apos;re at the center of the startup
              ecosystem. We work out of a beautiful, spacious campus at Pier 70
              in San Francisco&apos;s Dogpatch neighborhood. It was formerly a
              shipyard and one of the city&apos;s largest industrial sites during
              the World Wars. It&apos;s now the center of the AI revolution with
              OpenAI two blocks away and most of the YC founders within walking
              distance.
            </p>
            <div className="mb-6 h-[400px] w-full overflow-hidden rounded-lg bg-[#d4d4cc]">
              <div className="flex h-full items-center justify-center font-sans text-sm text-[#16140f]/40">
                YC office at Pier 70
              </div>
            </div>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              With four batches a year, the office is always buzzing with
              founders. As an engineer at YC, you&apos;re encouraged to attend
              the same events we run for YC founders, which happen just
              downstairs. There are interesting people hanging out downstairs
              almost every day - from guest speakers like Sam Altman, Brian
              Chesky, and Greg Brockman to Demo Day with the who&apos;s who of
              Silicon Valley investors, and endless happy hours, end-of-batch
              parties, and more.
            </p>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              One of the things that makes this job unusual is that a lot of the
              most important people in silicon valley use our software daily -
              including YC partners, investors, and successful founders. That
              means you get to talk directly with your most important users -
              sometimes just by running into them in the hallway.
            </p>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              Many people on the software team have founded companies or plan to.
              In recent years, eight former YC engineers have gone on to start
              YC-funded startups. Working at YC is a good way to get exposure to
              the startup world before starting your own company, and anyone who
              works here has the inside track to getting funded for their own
              company if they decide to become a founder.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="mb-4 font-sans text-2xl font-bold text-[#16140f]">
              Get in touch
            </h2>
            <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
              YC offers highly competitive compensation and benefits, including
              equity in YC&apos;s portfolio. If you&apos;re interested in
              joining us, email{" "}
              <a
                href="mailto:software@ycombinator.com"
                className="text-[#16140f] underline hover:opacity-70"
              >
                software@ycombinator.com
              </a>{" "}
              with a brief note about yourself and what you&apos;d want to
              build.
            </p>
          </div>

          <Link
            href="/careers"
            className="inline-flex items-center rounded-full bg-[#ff6600] px-8 py-4 font-sans text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            See open positions
          </Link>
        </article>
      </div>
    </div>
  );
}
