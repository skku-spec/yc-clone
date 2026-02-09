import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apply to YC | Y Combinator",
  description:
    "Apply to Y Combinator. We invest in startups at the earliest stages.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-[60px] font-medium leading-[75px] text-[#16140f]">
          Apply to Y Combinator
        </h1>
      </div>

      <article className="mx-auto max-w-[640px]">
        <div className="mb-6">
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            Y Combinator is accepting applications for the Spring 2026 Batch
            funding cycle. The batch will take place from April to June in San
            Francisco.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            You can also apply to future batches (Summer, Fall, and Winter) now
            - see more at{" "}
            <Link
              href="/early-decision"
              className="text-[#16140f] underline hover:opacity-70"
            >
              Early Decision
            </Link>
            .
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            The deadline to apply on-time is February 9 at 8pm PT; if you apply
            before the deadline, you will get a decision by March 13. If you
            apply after the deadline, we will still consider the application but
            can&apos;t promise exactly when we&apos;ll get back to you.
          </p>
        </div>

        <Link
          href="https://apply.ycombinator.com/home"
          className="mx-auto mb-12 flex h-[80px] w-fit items-center rounded-full bg-black px-10 pb-1 font-serif text-[28px] text-[#f5f5ee] transition-opacity hover:opacity-80"
        >
          Apply
        </Link>

        <div className="mb-10">
          <h2 className="mb-3 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
            About applying to YC
          </h2>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            If you want to apply, please submit your{" "}
            <Link
              href="https://apply.ycombinator.com/home"
              className="text-[#16140f] underline hover:opacity-70"
            >
              application online
            </Link>
            .
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            People who applied before the regular deadline will hear back by
            March 13. If you apply after the deadline, we&apos;ll still consider
            the application but can&apos;t promise exactly when we&apos;ll get
            back to you.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            We encourage you to submit your application as soon as you&apos;re
            ready to apply.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            If your application is promising, we will invite you to interview
            with us. Most interviews will be held by video conference in February
            and March. We typically make decisions the same day as your
            interview, and we give everyone who interviews detailed feedback on
            our decision.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            We invest in companies as soon as they are accepted; we do not wait
            for the batch to start.
          </p>
        </div>

        <div>
          <h2 className="mb-3 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
            About the batch
          </h2>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            The batch will take place in-person at YC&apos;s campus in San
            Francisco. It starts with a 3-day, in-person kick-off and features
            regular meetups in San Francisco. For more information, please read
            our{" "}
            <Link href="/faq" className="text-[#16140f] underline hover:opacity-70">
              FAQs
            </Link>
            .
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            During the batch, we invite eminent people from the startup world to
            speak. The founders of OpenAI, Airbnb, Stripe, and Doordash often
            come back to tell the inside story of what happened in the early days
            of their startups.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            Every company works with a dedicated{" "}
            <Link
              href="/partners"
              className="text-[#16140f] underline hover:opacity-70"
            >
              YC General Partner
            </Link>
            , who gets to know them well and can help with a wide range of
            issues. Every YC general partner is a successful startup founder
            themselves, has advised hundreds of startups, and works closely with
            a small group of startups they personally hand-select every batch.{" "}
            <Link
              href="/companies"
              className="text-[#16140f] underline hover:opacity-70"
            >
              YC companies
            </Link>{" "}
            are in a direct slack channel with their partner and meet weekly
            during the batch.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            Similar to how many universities have a house model, each YC batch
            is actually several small, autonomous groups of companies. You go
            through YC as part of this small group of companies, have dinner with
            them each week, and build both personal and professional
            relationships. Many founders build lifelong friendships with the
            founders in their group.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            During and after the batch, we introduce founders to people who can
            help with any challenge. Often, this means founders of other YC
            companies. Today, The{" "}
            <Link
              href="/about#community"
              className="text-[#16140f] underline hover:opacity-70"
            >
              YC alumni community
            </Link>{" "}
            is one of the most powerful communities in the world, and its
            members have a strong commitment to help one another.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            Towards the end of the batch, we help companies raise additional
            funds by introducing them to YC&apos;s extensive network of
            investors.
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            YC doesn&apos;t end after 3 months. We continue to help founders for
            the life of their company, and beyond — and so does the YC alumni
            community.{" "}
            <Link
              href="/about#advice"
              className="text-[#16140f] underline hover:opacity-70"
            >
              Read more here
            </Link>
            .
          </p>
          <p className="mb-6 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            If you have other questions, reach out via{" "}
            <a
              href="mailto:apply@ycombinator.com"
              className="text-[#16140f] underline hover:opacity-70"
            >
              email
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
