import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Happens at YC | Y Combinator",
  description:
    "An overview of what happens during the YC program and the benefits you get as a YC founder.",
};

const sidebarLinks = [
  { label: "About", href: "/about" },
  { label: "What Happens at YC?", href: "/about" },
  { label: "People", href: "/people" },
  { label: "FAQ", href: "/faq" },
  { label: "Press", href: "/press" },
];

const pClass =
  "mb-6 font-['Outfit',sans-serif] font-light text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const sectionClass = "mb-10";

const h2Class =
  "mb-3 font-['Source_Serif_4',serif] text-[1.75rem] font-medium italic leading-tight text-[#16140f] md:text-[1.4rem]";

const spanClass =
  "mb-3 block font-['Outfit',sans-serif] font-normal leading-[1.4] text-[#16140f]";

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 pb-10 pt-16">
      <div className="mx-auto max-w-[640px] mb-12">
        <h1 className="font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          What Happens at YC
        </h1>
      </div>

      <div className="mx-auto flex max-w-[1100px] gap-0">
        {/* Sidebar Navigation */}
         <div className="hidden w-[352px] shrink-0 justify-end pr-8 md:flex">
           <nav className="sticky top-24 z-10 hidden w-40 self-start md:block">
             <ul className="space-y-2 font-['Outfit',sans-serif] text-sm font-light tracking-[0.3px]">
               {sidebarLinks.map((link) => (
                 <li key={link.href}>
                   <Link
                     href={link.href}
                     className="block leading-relaxed text-[#16140f] transition-colors hover:text-orange-600"
                   >
                     {link.label}
                   </Link>
                 </li>
               ))}
             </ul>
           </nav>
        </div>

        {/* Main Content */}
        <div className="w-full">
          <article className="mx-auto max-w-[640px]">
            <p className={pClass}>
              People often ask us what happens at Y Combinator. Here is an
              overview of what happens during the YC program and the benefits you
              get as a YC founder.
            </p>

            {/* The YC Program */}
            <section id="the-yc-program" className={sectionClass}>
              <h2 className={h2Class}>The YC Program</h2>

              <p className={pClass}>
                YC is a three month program. We now run YC four times a year, in
                the winter, spring, summer, and fall. Here&apos;s what happens
                during the three months of YC:
              </p>

              <p className={pClass}>
                <span className={spanClass}>The Goal</span>
              </p>
              <p className={pClass}>
                The overall goal of YC is to help startups really take off. They
                arrive at YC at all different stages. Some haven&apos;t even
                started working yet, and others have been launched for a year or
                more. But whatever stage a startup is at when they arrive, our
                goal is to help them to be in dramatically better shape 3 months
                later.
              </p>
              <p className={pClass}>
                For most startups, better shape translates into two things: to
                have a better product with more users, and to have more options
                for raising money.
              </p>
              <p className={pClass}>
                Startups at all stages benefit from the intensity of YC.
                That&apos;s probably the best word to describe the atmosphere.
                For 3 months, it&apos;s all startup, all the time. Everyone
                around you&mdash;us, the other founders in your batch, the
                alumni, the speakers, the investors&mdash;wants to help your
                startup succeed. In that atmosphere it&apos;s hard not to be
                highly motivated. And that kind of extraordinary motivation is
                what one needs to do something as difficult as starting a
                startup.
              </p>
              <p className={pClass}>
                Many founders describe the 11 weeks leading up to Demo Day as
                the most productive period in their lives. Though YC continues
                after the 3 month cycle, and the alumni community is an
                increasingly valuable resource, those 11 weeks are still the most
                important thing. You can&apos;t make people something
                they&apos;re not, but the right conditions can bring out the best
                in them. And since most people have way more potential than they
                realize, they&apos;re often surprised by what they&apos;re
                capable of.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Funding</span>
              </p>
              <p className={pClass}>
                YC invests $500,000 in every company on standard terms. Our $500K
                investment is made on 2 separate safes:
              </p>
              <p className={pClass}>
                We invest $125,000 on a post-money safe in return for 7% of your
                company (the &ldquo;$125k safe&rdquo;)
              </p>
              <p className={pClass}>
                We invest $375,000 on an uncapped safe with a Most Favored
                Nation (&ldquo;MFN&rdquo;) provision (the &ldquo;MFN
                safe&rdquo;)
              </p>

              <p className={pClass}>
                <span className={spanClass}>Groups</span>
              </p>
              <p className={pClass}>
                During the batch, startups are sorted into 3 groups. Each group
                is led by YC partners who advise the founders in one-on-one and
                group office hours. Each group is split into sections (6-10
                companies), so that founders get the benefit of an intimate
                setting within the larger batch.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Office Hours</span>
              </p>
              <p className={pClass}>
                Much of what takes place at YC happens during office hours.
                Partners host group office hours every two weeks and one-on-one
                office hours as often as founders want. What startups talk about
                at office hours depends on the stage of the company and where
                they are in the YC cycle.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Bookface</span>
              </p>
              <p className={pClass}>
                Bookface is the platform founders use to connect to one
                another&mdash;imagine a combination of Facebook, Quora, and
                LinkedIn. Each founder has a profile and can tag themselves as an
                expert in any topic. If you have a question, need an
                introduction, or want to poll for knowledge, you can post the
                request to the forum on Bookface. The knowledge base of the YC
                community is both broad and deep&mdash;the community includes
                founders who are the world&apos;s foremost experts in everything
                from security to community building to nuclear energy.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Batch Kickoff</span>
              </p>
              <p className={pClass}>
                In the first few weeks of the batch we host a 3-day, in-person
                kickoff. The kickoff gives founders the opportunity to get to
                know each other, their group partners, and the YC team.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Alumni Talks</span>
              </p>
              <p className={pClass}>
                Every week, we invite an eminent person from the startup world to
                speak. Most speakers are successful startup founders &mdash; the
                founders of Airbnb, Stripe, Doordash and Ginkgo Bioworks often
                come back to tell the inside story of what happened in the early
                days of their startups. Talks are strictly off the record to
                encourage candor, because the inside story of most startups is
                more colorful than the one presented later to the public.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Public Launches</span>
              </p>
              <p className={pClass}>
                Once a startup has something built that&apos;s ready to launch,
                we help founders figure out how to present it to users and the
                press. We prepare founders for launches on community sites like
                Product Hunt and Hacker News, and for their first press pitches
                and interviews.
              </p>

              <p className={pClass}>
                <span className={spanClass}>First Customers</span>
              </p>
              <p className={pClass}>
                B2B and consumer companies often get their first 40-50 paying
                customers from the YC community. With that, you not only get
                first customers, you get the smartest early product feedback
                possible.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Weekly Meetups</span>
              </p>
              <p className={pClass}>
                Throughout the batch, we host weekly meetups in San Francisco.
                These events often feature special guests like the founders of YC
                and successful YC founders.
              </p>

              <p className={pClass}>
                <span className={spanClass}>Demo Day</span>
              </p>
              <p className={pClass}>
                On Demo Day, the latest batch of Y Combinator-funded founders
                present their companies to an audience of specially selected
                investors and press. We doubt there&apos;s another occasion when
                such a large percentage of the top startup investors have their
                attention focused on the same thing.
              </p>
              <p className={pClass}>
                In the weeks following Demo Day we keep in close touch with the
                startups as they negotiate the fundraising maze, and help them
                decipher the real messages in investors&apos; sometimes
                deliberately ambiguous responses. Often we talk to the investors
                ourselves, to find out what they&apos;re really thinking about a
                particular startup. Because YC-funded startups are a known
                quantity to investors and get introduced to enough of them to
                create serious price competition, companies tend to get higher
                valuations than they might otherwise.
              </p>
            </section>

            {/* Advice */}
            <section id="advice" className={sectionClass}>
              <h2 className={h2Class}>Advice</h2>
              <p className={pClass}>
                <em>Ongoing office hours</em>
              </p>
              <p className={pClass}>
                Office hours don&apos;t stop after the YC program. We have office
                hours year round, and startups from all previous cycles can book
                time whenever they want.
              </p>
            </section>

            {/* Community */}
            <section id="community" className={sectionClass}>
              <h2 className={h2Class}>Community</h2>
              <p className={pClass}>
                <em>Alumni community</em>
              </p>
              <p className={pClass}>
                Today the YC alumni community is probably the most powerful
                community in the startup world. It&apos;s powerful not just
                because of its size, but also because its members have such a
                strong commitment to helping one another. A culture of
                helpfulness has been an important part of YC since the beginning,
                and founders know that if they ever come across a challenge they
                need help with, they not only have the partners at their
                disposal, they have 6,000+ domain experts they can call on.
              </p>
              <p className={pClass}>
                <em>Alumni Reunion</em>
              </p>
              <p className={pClass}>
                Each year, YC hosts a formal gathering of alumni. Exciting things
                happen when you bring founders together &mdash; ideas are
                exchanged, deals get made, problem solving happens amongst peers.
              </p>
              <p className={pClass}>
                <em>Founder Communities</em>
              </p>
              <p className={pClass}>
                Founders have access to WhatsApp groups and Bookface channels
                that reach specific communities. There are lists for hardware,
                biotech, edtech, international, women founders, Black founders,
                Hispanic and Latino founders, and more.
              </p>
              <p className={pClass}>
                <em>Alumni Demo Day</em>
              </p>
              <p className={pClass}>
                Active YC founders get an early look at the YC companies in each
                batch at Alumni Demo Day.
              </p>
              <p className={pClass}>
                <em>Deals</em>
              </p>
              <p className={pClass}>
                Each YC company receives access to discounts and free accounts
                for over 100 products. Some of these are highly significant,
                including hundreds of thousands of dollars of free hosting for
                each company provided by major cloud hosting companies.
              </p>
            </section>

            {/* Brand */}
            <section id="brand" className={sectionClass}>
              <h2 className={h2Class}>Brand</h2>
              <p className={pClass}>
                <em>Credibility</em>
              </p>
              <p className={pClass}>
                When one company in YC does well, the whole community benefits.
                Because YC has such a strong track record, early adopters,
                investors and press are often more willing to take a look at YC
                founders, even if they&apos;re first time founders.
              </p>
              <p className={pClass}>
                <em>Company Directory</em>
              </p>
              <p className={pClass}>
                YC companies are showcased in the YC Startup Directory. Our
                startups can be filtered and discovered by potential customers,
                investors, or hires.
              </p>
            </section>

            {/* Hiring */}
            <section id="hiring" className={sectionClass}>
              <h2 className={h2Class}>Hiring</h2>
              <p className={pClass}>
                <em>Work at a Startup</em>
              </p>
              <p className={pClass}>
                Work at a Startup helps YC founders build their team &mdash; from
                first employees to VPs of product and operations. Thousands of
                jobseekers across hundreds of YC companies have landed roles
                through the platform and extended YC community.
              </p>
              <p className={pClass}>
                <em>Hacker News</em>
              </p>
              <p className={pClass}>
                HN is a news aggregator where users can find and discuss the
                latest news and submit content on anything that gratifies
                one&apos;s intellectual curiosity. YC alumni also post
                engineering, product, and design jobs on HN.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
