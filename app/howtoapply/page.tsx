import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Apply to Y Combinator | Y Combinator",
  description:
    "I thought it might help applicants if I explained what we look for when we read applications.",
};

export default function HowToApplyPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
          How to Apply to Y Combinator
        </h1>
        <p className="mt-2 font-sans text-base text-[#16140f]/60">
          Paul Graham
        </p>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-col-reverse gap-12 md:flex-row">
        <article className="min-w-0 flex-[2]">
          <h3
            id="intro"
            className="mb-3 font-sans text-lg font-semibold text-[#16140f]"
          >
            Introduction
          </h3>

           <h2 className="mb-6 font-serif text-[28px] font-medium leading-snug text-[#16140f]">
             Four times a year Y Combinator takes{" "}
             <a
               href="http://www.ycombinator.com/apply/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#ff6600] underline hover:opacity-70"
             >
               applications
             </a>{" "}
             for funding. I thought it might help applicants if I explained what
             we look for when we read them.
           </h2>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Probably the biggest thing people don&apos;t understand about the
            process is the importance of expressing yourself clearly. Every year
            we get some applications that are obviously good, some that are
            obviously bad, and in the middle a huge number where we just
            can&apos;t tell. The idea seems kind of promising, but it&apos;s not
            explained well enough for us to understand it. The founders seem like
            they might be good, but we don&apos;t get a clear enough picture of
            them to say for sure.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            I suspect for every group we invite to interviews, there are one or
            two more that are just as good but that we pass over because they
            don&apos;t manage to convey how good they are. If that&apos;s true,
            another way to say it is that, of groups good enough to make it to
            interviews, more than half blow the application.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            If we get 1000 applications and have 10 days to read them, we have
            to read about 100 a day. That means a YC partner who reads your
            application will on average have already read 50 that day and have 50
            more to go. Yours has to stand out. So you have to be exceptionally
            clear and concise. Whatever you have to say, give it to us right in
            the first sentence, in the simplest possible terms.
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            All the YC partners read applications. We each do it separately, to
            avoid groupthink, so I&apos;m not sure exactly what the others do,
            but it&apos;s probably similar to what I do.
          </p>

          <h3
            id="matteroffact"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            Matter of Fact Answers
          </h3>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            The first question I look at is, &quot;What is your company going to
            make?&quot; This isn&apos;t the question I care most about, but I
            look at it first because I need something to hang the application on
            in my mind.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            The best answers are the most matter of fact. It&apos;s a mistake to
            use marketing-speak to make your idea sound more exciting. We&apos;re
            immune to marketing-speak; to us it&apos;s just noise.
            <a
              href="#n1"
              className="ml-0.5 text-[#ff6600] hover:opacity-70"
            >
              1.
            </a>{" "}
            So don&apos;t begin your answer with something like
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            We are going to transform the relationship between individuals and
            information.
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            That sounds impressive, but it conveys nothing. It could be a
            description of any technology company. Are you going to build a
            search engine? Database software? A router? I have no idea.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            One test of whether you&apos;re explaining your idea effectively is
            to ask how close the reader is to reproducing it. After reading that
            sentence I&apos;m no closer than I was before, so its content is
            effectively zero. Another mistake is to begin with a sweeping
            introductory paragraph about how important the problem is:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            Information is the lifeblood of the modern organization. The ability
            to channel information quickly and efficiently to those who need it
            is critical to a company&apos;s success. A company that achieves an
            edge in the efficient use of information will, all other things being
            equal, have a significant edge over competitors.
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Again, zero content; after reading this, the reader is no closer to
            reproducing your project than before. A good answer would be
            something like:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            A database with a wiki-like interface, combined with a graphical UI
            for controlling who can see and edit what.
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            I&apos;m not convinced yet that this will be the next Google, but at
            least I&apos;m starting to engage with it. I&apos;m thinking what
            such a thing would be like.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            One reason founders resist giving matter-of-fact descriptions is that
            they seem to constrain your potential. &quot;But it&apos;s so much
            more than a database with a wiki UI!&quot; The problem is, the less
            constraining your description, the less you&apos;re saying. So
            it&apos;s better to err on the side of matter-of-factness.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            We advise startups presenting at Demo Day to do the same. Better to
            start with an overly narrow description of your project than try to
            describe it in its full generality and lose the audience completely.
            If there&apos;s a simple one-sentence description of what you&apos;re
            doing that only conveys half your potential, that&apos;s actually
            pretty good. You&apos;re halfway to your destination in just the
            first sentence.
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            One good trick for describing a project concisely is to explain it as
            a variant of something the audience already knows. It&apos;s like
            Wikipedia, but within an organization. It&apos;s like an answering
            service, but for email. It&apos;s eBay for jobs. This form of
            description is wonderfully efficient. Don&apos;t worry that it will
            make your idea seem &quot;derivative.&quot; Some of the best ideas in
            history began by sticking together two existing ideas no one realized
            could be combined.
          </p>

          <h3
            id="thefounders"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            The Founders
          </h3>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            After spending 20 seconds or so trying to understand the idea, I skip
            down to look at the founders. My initial goal is to figure out what
            kind of group I&apos;m dealing with.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Three friends about to graduate from college? Two colleagues who work
            together at a big company and want to jump ship? Are they all
            programmers? A mix of programmers and business people? There are maybe
            20 or 30 different configurations of founders.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Once I know what type of group I have, I try to figure out how good
            an instance of that type it is. The most important question for
            deciding that is
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            Please tell us in one or two sentences about something impressive
            that each founder has built or achieved.
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            To me this is the most important question on the application.
            It&apos;s deliberately open-ended; there&apos;s no one type of answer
            we&apos;re looking for. It could be that you did really well in
            school, or that you wrote a highly-regarded piece of software, or
            that you paid your own way through college after leaving home at 16.
            It&apos;s not the type of achievement that matters so much as the
            magnitude. Succeeding in a startup is, in the most literal sense,
            extraordinary, so we&apos;re looking for people able to do
            extraordinary things.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            As with all questions on the application, the best answers are the
            most specific. A surprising number of people answer with something
            like:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            Jordan is an exceptionally dedicated person who gives 100% effort to
            every project he undertakes.
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            This kind of generic claim carries no weight. A single, specific
            example would be much more convincing. You probably shouldn&apos;t
            list the startup itself as your most impressive achievement. We
            already know you&apos;ve created that. Why waste the opportunity to
            brag about something else?
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            If there&apos;s no one thing about you that you feel stands out, what
            should you list? I&apos;d go with whatever you&apos;ve done that was
            the hardest—preferably (though not necessarily) the hardest
            intellectually. It doesn&apos;t matter if it&apos;s not the sort of
            thing you&apos;d put on a resume. We&apos;re not looking for the same
            things as HR departments.
          </p>

          <h3
            id="insight"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            Insight
          </h3>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            If the founders seem promising, I&apos;ll now spend more time trying
            to understand the idea. I care more about the founders than the idea,
            because most of the startups we fund will change their idea
            significantly.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            If a group of founders seemed impressive enough, I&apos;d fund them
            with no idea. But a really good idea will also get our
            attention—not because of the idea per se, but because it&apos;s
            evidence the founders are smart.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Just as what we look for in founders is not the type of achievement
            but the magnitude, what we look for in ideas is not the type of idea
            but the level of insight you have about it. You&apos;re going to
            start an auction site? That could be a good idea or a bad idea. What
            matters is how you&apos;re going to hold your own against eBay.
            What&apos;s going to be distinctive about your solution?
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            It&apos;s a common mistake to say the distinctive thing about your
            solution will be that it&apos;s well-designed and easy to use. That
            is not an insight. You&apos;re just claiming you&apos;re going to
            execute well. Whoever wrote the current software was presumably also
            trying to. So you have to be more specific. Exactly what are you
            going to do that will make your software easier to use? And will that
            be enough? The reason a lot of big companies&apos; software sucks is
            that they have some kind of natural monopoly. Unless you have a plan
            for cracking it, it won&apos;t make any difference if yours is
            better.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            We don&apos;t mind if you&apos;re doing something that will face
            serious obstacles. In fact, we like that. The best startup ideas are
            generally outliers that seem crazy to most people initially. But we
            want to see that you&apos;re aware of the obstacles, and have at
            least a theory about how to overcome them. We&apos;d be delighted to
            get an application that answered the question &quot;What are you
            going to make?&quot; with
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            A new search engine to compete with Google.
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            so long as this was followed by
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            We know that sounds impossible, but we think we can get a toehold
            initially by…
          </blockquote>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Wouldn&apos;t you be interested at this point? Even if the plan had
            only a 1% chance of working, it would be worth backing.
            <a
              href="#n2"
              className="ml-0.5 text-[#ff6600] hover:opacity-70"
            >
              2.
            </a>
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Whereas if we can see obstacles to your idea that you don&apos;t seem
            to have considered, that&apos;s a bad sign. This is your idea.
            You&apos;ve had days, at least, to think about it, and we&apos;ve
            only had a couple minutes. We shouldn&apos;t be able to come up with
            objections you haven&apos;t thought of.
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            Paradoxically, it is for this reason better to disclose all the flaws
            in your idea than to try to conceal them. If we think of a problem
            you don&apos;t mention, we&apos;ll assume it&apos;s because you
            haven&apos;t thought of it. And since we care more about you than the
            idea, it&apos;s a mistake to risk sacrificing yourself to make the
            idea seem better.
          </p>

          <h3
            id="exploration"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            Further Exploration
          </h3>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            If the founders seem promising and the idea is interesting, I&apos;ll
            now spend a lot more time on the application.
          </p>

           <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
             I&apos;ll take a look at the{" "}
             <Link
               href="/library"
               className="text-[#ff6600] underline hover:opacity-70"
             >
               video
             </Link>
             , if there is one. (Statistically we&apos;re much more likely to
             interview people who submit a video.) I&apos;ll check out the demo.
             And I&apos;ll look at answers to some of the more mundane questions,
             like the stock allocation.
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            If the founders seem promising but the idea doesn&apos;t, I check
            the question near the end that asks what other ideas the founders
            had. It&apos;s quite common for us to fund groups to work on ideas
            they listed as alternates.
          </p>

          <h3
            id="wildcard"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            The Wildcard
          </h3>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            There&apos;s one question that acts like a wildcard, at least for me:
          </p>

          <blockquote className="mb-4 border-l-4 border-[#ddd] pl-5 font-sans text-base italic leading-relaxed text-[#16140f]/80">
            Please tell us about the time you most successfully hacked some
            (non-computer) system to your advantage.
          </blockquote>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            If this wasn&apos;t already clear, we&apos;re not looking for the
            sort of obedient, middle-of-the-road people that big companies tend
            to hire. We&apos;re looking for people who like to beat the system.
            So if the answer to this question is good enough, it will make me go
            back and take a second look at an application that otherwise seemed
            unpromising. In fact, I think there are people we&apos;ve invited to
            interviews mainly on the strength of their answer to this question.
          </p>

          <h3
            id="helpout"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            Help Us Out
          </h3>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Generally, the advice I&apos;d give to applicants is: help us out.
            Investors are optimists. We want to believe you&apos;re great. Most
            people you meet in everyday life don&apos;t.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            If you go around saying you&apos;re going to start the next Google,
            most people&apos;s initial reaction will be skepticism. Partly
            because the odds of succeeding are low, so skepticism is the safe
            bet, but also because most people are threatened by ambition: you
            seem to be trying to put yourself above them, even if that isn&apos;t
            your intention.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Investors are different—not because they&apos;re more generous
            spirited than other people, but because they get equity. Tell
            investors you&apos;re going to start the next Google and they
            immediately perk up. They don&apos;t default to skepticism, because
            they like risky bets. And they don&apos;t feel like you&apos;re
            trying to put yourself above them, because they hope to be drawn up
            with you.
          </p>

          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            Like all investors, we want to believe. So help us believe. If
            there&apos;s something about you that stands out, or some special
            insight you have into the problem you plan to work on, make sure we
            see it.
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            The best way to do that is simply to be concise. You don&apos;t have
            to sell us on you. We&apos;ll sell ourselves, if we can just
            understand you. But every unnecessary word in your application
            subtracts from the effect of the necessary ones. So before submitting
            your application, print it out and take a red pen and cross out every
            word you don&apos;t need. And in what&apos;s left be as specific and
            as matter-of-fact as you can.
          </p>

          <h3
            id="example"
            className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]"
          >
            Example Application
          </h3>

          <h2 className="mb-6 font-serif text-[28px] font-medium leading-snug text-[#16140f]">
            Here&apos;s an example of a successful application:{" "}
            <Link
              href="/apply/dropbox"
              className="text-[#ff6600] underline hover:opacity-70"
            >
              Dropbox&apos;s Summer 2007 application
            </Link>
          </h2>

          <h2
            id="footnotes"
            className="mb-4 mt-12 font-serif text-[28px] font-medium leading-snug text-[#16140f]"
          >
            Notes
          </h2>

          <ol className="mb-6 ml-6 list-decimal space-y-3 font-sans text-base leading-relaxed text-[#16140f]">
            <li id="n1">
              This is true of investors generally. Never use vague or inflated
              language with experienced investors. They&apos;ve heard so much of
              it that it no longer has any effect on them, except to confuse and
              annoy them.{" "}
              <a href="#r1" className="text-[#ff6600] hover:opacity-70">
                ↪
              </a>
            </li>
            <li id="n2">
              The &quot;next Google&quot; is unlikely to be a search engine,
              however, just as the &quot;next Microsoft&quot; was not a desktop
              software company. I used competing directly with Google as an
              example of a problem with maximum difficulty, not maximum payoff.
              Maximum payoff is more likely to come from making Google irrelevant
              than from replacing it. How exactly? I have no more than vague
              ideas about that. I wouldn&apos;t expect to be able to figure out
              the right answer, just as I wouldn&apos;t have expected anyone to
              figure out in 1990 what would make Microsoft irrelevant.{" "}
              <a href="#r2" className="text-[#ff6600] hover:opacity-70">
                ↪
              </a>
            </li>
          </ol>

          <p className="mt-8 font-sans text-base leading-relaxed text-[#16140f]">
            <strong>Thanks</strong> to Trevor Blackwell, Jessica Livingston, and
            Robert Morris for reading drafts of this, and to Drew Houston for
            posting Dropbox&apos;s application.
          </p>
        </article>

        <nav className="shrink-0 md:w-[220px]">
          <div className="sticky top-24 font-sans text-sm">
            <p className="mb-2 font-semibold uppercase tracking-wider text-[#16140f]/60">
              Contents
            </p>
            <ul className="mb-6 space-y-2">
              <li>
                <a href="#intro" className="text-[#ff6600] hover:opacity-70">
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#matteroffact"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  Matter of Fact Answers
                </a>
              </li>
              <li>
                <a
                  href="#thefounders"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  The Founders
                </a>
              </li>
              <li>
                <a href="#insight" className="text-[#ff6600] hover:opacity-70">
                  Insight
                </a>
              </li>
              <li>
                <a
                  href="#exploration"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  Further Exploration
                </a>
              </li>
              <li>
                <a
                  href="#wildcard"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  The Wildcard
                </a>
              </li>
              <li>
                <a href="#helpout" className="text-[#ff6600] hover:opacity-70">
                  Help Us Out
                </a>
              </li>
              <li>
                <a href="#example" className="text-[#ff6600] hover:opacity-70">
                  Example Application
                </a>
              </li>
              <li>
                <a
                  href="#footnotes"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  Notes
                </a>
              </li>
            </ul>

            <p className="mb-2 font-semibold uppercase tracking-wider text-[#16140f]/60">
              Elsewhere
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/apply"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  Apply to Y Combinator
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[#ff6600] hover:opacity-70">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/whynot"
                  className="text-[#ff6600] hover:opacity-70"
                >
                  Why Groups Aren&apos;t Invited
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}
