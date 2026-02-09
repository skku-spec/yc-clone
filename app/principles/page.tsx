import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Y Combinator's Founding Principles | Y Combinator",
  description:
    "Startups are on balance a good thing. Their founders and early employees can be much more productive than they'd be working for an established company.",
};

export default function PrinciplesPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <h1 className="mb-8 text-center font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
        Y Combinator&apos;s Founding Principles
      </h1>

      <div className="mx-auto max-w-[680px]">
        <p className="mb-5 font-sans text-base leading-relaxed text-[#16140f]">
          Startups are on balance a good thing. Their founders and early
          employees can be much more productive than they&apos;d be working for
          an established company. Y Combinator&apos;s goal is to cause there to
          be more startups, by helping founders to start them.
        </p>

        <p className="mb-5 font-sans text-base leading-relaxed text-[#16140f]">
          Y Combinator represents the union of two ideas that had not previously
          been combined: the application of mass production techniques to startup
          funding. Funding startups in batches is not only more efficient, but
          also better for founders.
        </p>

        <p className="mb-5 font-sans text-base leading-relaxed text-[#16140f]">
          YC&apos;s value is the number of startups we help times how much we
          help them. Make both factors surprisingly big, and the product will be
          surprising squared.
        </p>

        <p className="mb-5 font-sans text-base leading-relaxed text-[#16140f]">
          From the point YC funds a startup we should put the founders&apos;
          interests first, before even our own. That may seem counterintuitive in
          a for-profit business, but in this business it works; it&apos;s more
          scalable (in much the same way telling the truth is), and empirically
          the benefits of benevolence are greater than the costs. And since the
          only way to be consistently benevolent is to actually be a good person,
          YC&apos;s employees must be.
        </p>

        <p className="mb-5 font-sans text-base leading-relaxed text-[#16140f]">
          We must remember that we&apos;re investors, not bosses. We can advise
          and persuade, but not command. Good founders don&apos;t need more than
          advice anyway. And since you can&apos;t know what it&apos;s like to
          start a startup without having done it, those who advise the founders
          should be mostly people who have.
        </p>

        <p className="mb-5 font-sans text-base leading-relaxed text-[#16140f]">
          YC is also a startup itself, and (what&apos;s more difficult) must
          remain one. Many of the startups we fund get their first injection of
          startup culture from YC, so it&apos;s critical that YC practice what
          it preaches. YC has to be fast, cheap, informal, and focused on
          essentials. If something seems like the sort of bullshit a big company
          would engage in, it&apos;s probably a mistake. As with benevolence, the
          first line of defense is hiring.
        </p>

        <p className="mb-8 font-sans text-base leading-relaxed text-[#16140f]">
          The most successful founders are motivated less by money than by a
          consuming interest in what they&apos;re building. YC showed that this
          principle extends to investing too. What drove us in starting YC was
          that it seemed a cool hack: that if we helped founders in the earliest
          stages, there could be a lot more successful startups. That hypothesis
          turned out to be correct, and it has a long way to run. Focus on
          helping founders, and everything else will follow.
        </p>

        <div className="font-sans text-base leading-relaxed text-[#16140f]">
          <p>Paul Graham</p>
          <p>Jessica Livingston</p>
          <p>Robert Morris</p>
          <p>Trevor Blackwell</p>
        </div>
      </div>
    </section>
  );
}
