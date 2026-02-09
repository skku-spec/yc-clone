"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  { id: "logistics", label: "Logistics" },
  { id: "should-i-apply", label: "Should I apply?" },
  { id: "incorporating", label: "Incorporating" },
  { id: "other", label: "Other" },
  { id: "late-applications", label: "Late Applications" },
  { id: "application-technical-support", label: "Application Technical Support" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

interface QA {
  question: string;
  answer: React.ReactNode;
}

function FAQSection({ items }: { items: QA[] }) {
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i}>
          <p className="mb-2 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            <span className="font-medium">{item.question}</span>
          </p>
          <div className="mb-8 font-sans text-lg font-light leading-[1.7] text-[#16140f]">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

const logisticsQA: QA[] = [
  {
    question: "What happens at Y Combinator?",
    answer: (
      <p>
        <Link href="/about" className="text-[#16140f] underline hover:opacity-70">This</Link>.
      </p>
    ),
  },
  {
    question: "Where does the YC program happen? Do I need to move to San Francisco?",
    answer: (
      <>
        <p className="mb-6">The batch takes place in-person in San Francisco. It kicks off with a 3-day, in-person retreat and features weekly meetups in San Francisco.</p>
        <p className="mb-6">We briefly did run YC remotely during Covid, but since 2022 it has been <a href="https://www.youtube.com/watch?v=GiuxXzmvolU" className="text-[#16140f] underline hover:opacity-70" target="_blank" rel="noopener noreferrer">back in person</a>. We&apos;ve found that YC works much better in person.</p>
        <p>Of course, after the 3 month program, you can go wherever you want.</p>
      </>
    ),
  },
  {
    question: "How do we choose which startups to fund?",
    answer: (
      <p>We have an application process that&apos;s open to any startup, anywhere in the world. You can apply <Link href="/apply" className="text-[#16140f] underline hover:opacity-70">here</Link>.</p>
    ),
  },
  {
    question: "How can we get funding for our startup?",
    answer: (
      <p><Link href="/apply" className="text-[#16140f] underline hover:opacity-70">Apply online</Link> for our next funding cycle.</p>
    ),
  },
  {
    question: "How much do you invest?",
    answer: (
      <p>We have a standard deal for every company accepted to YC. We invest $500,000 in every company on <Link href="/deal" className="text-[#16140f] underline hover:opacity-70">standard terms</Link>.</p>
    ),
  },
  {
    question: "What can I use the YC investment for?",
    answer: (
      <>
        <p className="mb-6">You can use the YC investment for anything that you believe helps your business. In most cases, the first use of the funding should be for the founders to support themselves so they can work full-time on their company, typically by paying themselves a salary. If you have student loans, a mortgage, etc. you can use what you pay yourself from the YC investment to cover those.</p>
        <p>Founders can also use the investment to cover their travel expenses to San Francisco.</p>
      </>
    ),
  },
  {
    question: "What is the time commitment of YC?",
    answer: (
      <>
        <p className="mb-6">It is less than most founders expect; a few hours per week if you participate in all the recommended activities. All parts of the YC program are optional; as a founder we expect you to choose how to spend your time to maximize the odds of your company succeeding.</p>
        <p>Some founders worry that YC will be a distraction from working on their startup. But actually it&apos;s the opposite; we created YC to make it possible for founders to spend several months completely focused on their startup with no distractions. Many founders tell us that their three months in YC was the most productive time of their lives.</p>
      </>
    ),
  },
  {
    question: "What are the dates for the next batch?",
    answer: (
      <p>All the relevant dates are <Link href="/apply" className="text-[#16140f] underline hover:opacity-70">here</Link>.</p>
    ),
  },
  {
    question: "This batch isn't a good time for me. Can I apply to the one after?",
    answer: (
      <>
        <p className="mb-6">Yes. The most common way this happens is that you&apos;re currently a student, and you want to apply for the batch that starts after you graduate.</p>
        <p>We call this applying for Early Decision. Learn more about Early Decision <Link href="/early-decision" className="text-[#16140f] underline hover:opacity-70">here</Link>.</p>
      </>
    ),
  },
  {
    question: "I'm actively fundraising now but the next batch doesn't start for a long time. What should I do?",
    answer: (
      <p>Apply now and tell us on the application that you&apos;re actively fundraising. If you are accepted, we start the investment process immediately; we don&apos;t wait until the next batch starts.</p>
    ),
  },
];

const shouldIApplyQA: QA[] = [
  {
    question: "Am I too early to apply to YC? Should I wait until I have more traction?",
    answer: (
      <>
        <p className="mb-6">No, it would be a mistake to wait to apply. On average, 40% of the companies we fund in each batch are just an idea. Most don&apos;t have any revenue.</p>
        <p>While YC does also fund companies that are far along, the majority of the companies we fund will always be companies at the very earliest stage. We recommend applying for YC as soon as you have a founding team and an idea you are excited about.</p>
      </>
    ),
  },
  {
    question: "We've already been working on our startup for a while. Is YC appropriate for us?",
    answer: (
      <>
        <p className="mb-6">It likely still is. While the majority of the YC batch is pre-revenue companies, a significant percentage these days is also companies that are much further along.</p>
        <p className="mb-6">7% of recent batches had more than $50k in monthly revenue when accepted. Epic companies like Rappi and MessageBird did YC when they were making well over $1M / year.</p>
        <p>When we fund companies that are further along, we work with them differently and help them with different things compared to early-stage startups. We can probably help any startup that hasn&apos;t already raised a series A round from VCs.</p>
      </>
    ),
  },
  {
    question: "We've already raised funding. Can we still apply?",
    answer: (
      <p>Sure. Each YC batch has many companies who have already raised over $1M.</p>
    ),
  },
  {
    question: "I've raised money at a higher valuation than is implied by the YC investment? Am I too far along to do YC? Is doing YC a \"down-round\"?",
    answer: (
      <>
        <p className="mb-6">No. A large percentage of each batch has already raised money at a higher valuation than is implied by the YC investment. Since most founders don&apos;t do YC primarily for the money, thinking about the YC investment as having a &quot;valuation&quot; isn&apos;t how we&apos;d suggest you think about it.</p>
        <p>Instead, as explained in <a href="http://paulgraham.com/equity.html" className="text-[#16140f] underline hover:opacity-70" target="_blank" rel="noopener noreferrer">this essay</a>, just ask yourself if you believe joining YC can improve your startup&apos;s outcome by at least 7%.</p>
      </>
    ),
  },
  {
    question: "We don't really need the money. Does it still make sense to apply?",
    answer: (
      <p>At least half of the startups we fund don&apos;t need the money. And in fact the money is only a small part of <Link href="/about" className="text-[#16140f] underline hover:opacity-70">what YC does</Link>.</p>
    ),
  },
  {
    question: "Do you only fund startups that write software?",
    answer: (
      <p>No, we&apos;ll consider startups in any field. We&apos;ve funded companies that make everything from microbes to fusion reactors to coffee carts. You can see all the companies we&apos;ve funded in the <Link href="/companies" className="text-[#16140f] underline hover:opacity-70">YC Startup Directory</Link>.</p>
    ),
  },
  {
    question: "Can a single person apply for funding?",
    answer: (
      <>
        <p className="mb-6">Yes. We regularly accept solo founders. That said, our advice remains that one-person startups are tough and you&apos;re more likely to succeed with a co-founder.</p>
        <p>If you don&apos;t have a co-founder and would like one, you should check out <Link href="/cofounder-matching" className="text-[#16140f] underline hover:opacity-70">YC Co-founder Matching</Link>, a free product we run to help people find co-founders.</p>
      </>
    ),
  },
  {
    question: "I have a great idea for a startup, but I'm not technical. Will you still fund me?",
    answer: (
      <p>It&apos;s important for the founding team to have the skills to build their product themselves, rather than outsourcing it to someone else. For most businesses, that usually means you need a technical co-founder.</p>
    ),
  },
  {
    question: "Can I participate in YC while I'm a full-time student or working full-time at a job?",
    answer: (
      <p>You can certainly apply when you are a full-time student or employee, but we expect the founders to commit to working full-time on their company during the batch and afterwards if accepted.</p>
    ),
  },
  {
    question: "I'm working and living in the US on a visa (e.g., an H-1B). Can I do YC and stay in the US?",
    answer: (
      <>
        <p className="mb-6">In most cases, yes. YC works with excellent immigration attorneys that have helped hundreds of our founders get visas to move to or stay in the US. There are a number of possible visa options depending on the details of your situation.</p>
        <p>If you apply and are invited to join YC, we will connect you with an immigration attorney who will work with you to develop an individualized immigration plan for you.</p>
      </>
    ),
  },
  {
    question: "YC has already funded a company that does something similar to my idea. Will that affect my chances of being accepted?",
    answer: (
      <>
        <p className="mb-6">It won&apos;t. Unlike many investors, we don&apos;t consider it a factor whether we&apos;ve already funded a company working on something similar.</p>
        <p>Even if we tried not to accept competing companies, we&apos;d end up with them anyway because startup ideas morph so much. So from early on, we made sure that if two YC startups are working on related stuff, we don&apos;t talk to one about what the other&apos;s doing.</p>
      </>
    ),
  },
  {
    question: "Can we apply more than once?",
    answer: (
      <>
        <p className="mb-6">Yes. In a typical YC batch, about half the companies applied multiple times before being accepted. If you&apos;ve applied before and not gotten in, we strongly encourage you to apply again. Having made progress since your last application is a strong signal to us.</p>
        <p>We ask applicants to only submit one application per batch.</p>
      </>
    ),
  },
  {
    question: "Do we need to know someone at YC to get in?",
    answer: (
      <p>No. One of YC&apos;s core principles is considering all applications equally. We don&apos;t rely on introductions the way many investors do.</p>
    ),
  },
  {
    question: "If we participated in another accelerator, can we do YC?",
    answer: (
      <p>Yes. We&apos;ve had some companies join YC after doing another accelerator. However, if you&apos;ve done another accelerator already, we may expect that you&apos;ve reached a higher level of progress.</p>
    ),
  },
  {
    question: "Do you give feedback on application results?",
    answer: (
      <>
        <p className="mb-6">We don&apos;t provide feedback on application results unless you are invited to interview with us. If we did this, we&apos;d spend all our time providing feedback and doing nothing else due to the volume of applications we have to process. <Link href="/whynot" className="text-[#16140f] underline hover:opacity-70">Read this</Link> for more info about feedback.</p>
        <p>If you are invited to interview with us, we will give you detailed feedback about why you were or were not selected after the interview.</p>
      </>
    ),
  },
];

const incorporatingQA: QA[] = [
  {
    question: "Do we need to incorporate before applying?",
    answer: <p>Nope.</p>,
  },
  {
    question: "What if we incorporated as a non-US corporation?",
    answer: (
      <>
        <p className="mb-6">If your company is already incorporated somewhere other than the United States, Canada, Singapore or the Cayman Islands, in order to participate in YC you will need to create a parent company that is in one of those jurisdictions. The existing company will then become a subsidiary of the new United States, Singapore or Cayman parent company.</p>
        <p>Many companies in each YC batch do this process in order to join YC. While we will connect you with lawyers who will drive this process, it will require a significant effort on your part.</p>
      </>
    ),
  },
];

const otherQA: QA[] = [
  {
    question: "Why did you choose the name \"Y Combinator\"?",
    answer: (
      <p>The Y combinator is one of the coolest ideas in computer science. It&apos;s also a metaphor for what we do. It&apos;s a program that runs programs; we&apos;re a company that helps start companies.</p>
    ),
  },
  {
    question: "I'd like YC to publicize my product / service among the portfolio companies.",
    answer: (
      <>
        <p className="mb-6">The best way to publicize your product within the YC community is to get a few YC startups as happy users and ask them to recommend you to their peers.</p>
        <p>That being said, we do keep a list of offers that we share with our active YC portfolio companies. If you would like to offer a special deal on your service or product to our companies, you can <a href="https://deals.ycombinator.com" className="text-[#16140f] underline hover:opacity-70" target="_blank" rel="noopener noreferrer">do so here</a>. We manually review these deals and will let you know if your offer has been approved or rejected.</p>
      </>
    ),
  },
  {
    question: "Are you hiring?",
    answer: (
      <p><Link href="/careers" className="text-[#16140f] underline hover:opacity-70">Yes, we are</Link>. So are <Link href="/jobs" className="text-[#16140f] underline hover:opacity-70">over 500 companies we&apos;ve funded</Link>.</p>
    ),
  },
  {
    question: "Where can I find answers to questions about Hacker News?",
    answer: (
      <p><a href="https://news.ycombinator.com/newsfaq.html" className="text-[#16140f] underline hover:opacity-70" target="_blank" rel="noopener noreferrer">The Hacker News FAQ</a></p>
    ),
  },
];

const lateApplicationsQA: QA[] = [
  {
    question: "What are Late Applications?",
    answer: (
      <p>Late applications are those submitted after the application deadlines. We do our best to continue reading applications submitted after the deadline.</p>
    ),
  },
  {
    question: "The deadline has passed. Am I better off applying late or waiting until the next batch?",
    answer: (
      <p>If you&apos;re ready to do YC, you should just apply now. We fund many companies that apply late every batch.</p>
    ),
  },
  {
    question: "When will I get a reply if I submit a late application?",
    answer: (
      <>
        <p className="mb-6">With on-time applications, we provide a specific date we&apos;ll get back to founders by, but with late applications we don&apos;t because we have to review them whenever we have spare time.</p>
        <p>Most late applications will get a decision within a month, but we can&apos;t guarantee that — sometimes it may take longer. If you applied late and haven&apos;t heard from us, it&apos;s because we&apos;re still working on it. We always respond to everyone who applies, no exceptions.</p>
      </>
    ),
  },
  {
    question: "I have a great reason for why my application is late. Can you mark it as on time?",
    answer: (
      <p>No, sorry. But don&apos;t worry! Just get it in as soon as possible.</p>
    ),
  },
];

const applicationTechSupportQA: QA[] = [
  {
    question: "Our group has two ideas. Can we submit two applications?",
    answer: (
      <p>We don&apos;t recommend it. You should pick your favorite idea and apply with that one.</p>
    ),
  },
  {
    question: "Someone recommended me for a previous application and I've decided to apply again. What should I do?",
    answer: (
      <p>Nothing! Recommendations carry over — no need to ask them to resubmit.</p>
    ),
  },
  {
    question: "My co-founder started an application for us, but when I log in to my account, I don't see it.",
    answer: (
      <p>Only the founder who created the application has access to it. If you need to edit it, you&apos;ll need to go through them.</p>
    ),
  },
  {
    question: "My co-founder hasn't received an email to fill out their profile.",
    answer: (
      <p>First thing to do is to make sure the co-founder email address you are entering into the main application form is the correct email address. Secondly, if they already have an account with YC, make sure you&apos;re entering that email address. If your co-founder hasn&apos;t received the email despite entering the correct address, try removing and re-adding them to trigger a new email.</p>
    ),
  },
  {
    question: "When my co-founder clicks on the link to fill out their profile, they're directed to my account page.",
    answer: (
      <p>This can happen when you&apos;re both using the same computer and you&apos;re still logged into your account. Have them open the link in an incognito browser window and sign in/up using their own credentials.</p>
    ),
  },
  {
    question: "We submitted our application but need to edit it.",
    answer: (
      <p>Your application enters our review process once you submit it, so we don&apos;t allow continuous editing. If something material has changed — like a co-founder addition/removal — please go <a href="https://apply.ycombinator.com/app/edit" className="text-[#16140f] underline hover:opacity-70" target="_blank" rel="noopener noreferrer">here</a> to submit an update.</p>
    ),
  },
  {
    question: "Was our application submitted? I can't tell.",
    answer: (
      <>
        <p className="mb-6">We send you a confirmation email with a copy of your application when you submit. If you don&apos;t see that email, check your spam folder. If you don&apos;t see it there, make sure you entered your email address correctly on the application.</p>
        <p>If you still don&apos;t see the confirmation email, you likely did not submit the application. To do so, click the Edit Application button from your account page. The submit button is at the bottom of the application.</p>
      </>
    ),
  },
  {
    question: "When is the application deadline? When will I know my results? When are interviews?",
    answer: (
      <p>All of these questions are answered <Link href="/apply" className="text-[#16140f] underline hover:opacity-70">here</Link>.</p>
    ),
  },
  {
    question: "We previously applied and would like to use that application for this batch.",
    answer: (
      <p>You can reference past applications from your account page, but you&apos;ll need to fill out a new one every time you apply.</p>
    ),
  },
  {
    question: "We are not based in the US. Do we need to do anything to apply to YC? (e.g., incorporate in the US, get visas or business licenses)",
    answer: (
      <p>No need to do any of that. If we accept your application, we&apos;ll help you get visas and incorporate.</p>
    ),
  },
];

const categoryContent: Record<CategoryId, { title: string; items: QA[] }> = {
  logistics: { title: "Logistics", items: logisticsQA },
  "should-i-apply": { title: "Should I apply?", items: shouldIApplyQA },
  incorporating: { title: "Incorporating", items: incorporatingQA },
  other: { title: "Other", items: otherQA },
  "late-applications": { title: "Late Applications", items: lateApplicationsQA },
  "application-technical-support": { title: "Application Technical Support", items: applicationTechSupportQA },
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<CategoryId>("logistics");

  return (
    <div className="mx-auto max-w-[1100px] px-4 pb-24">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-[60px] font-medium leading-[75px] text-[#16140f]">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="mx-auto max-w-[640px]">
        <nav className="mb-10 border-b border-[#d4d4cc]">
          <ul className="flex flex-wrap gap-0">
            {CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-3 font-sans text-sm font-light transition-colors ${
                    activeTab === cat.id
                      ? "border-b-2 border-[#16140f] text-[#16140f]"
                      : "text-[#16140f]/60 hover:text-[#16140f]"
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <article>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={activeTab === cat.id ? "block" : "hidden"}
            >
              <h2 className="mb-6 font-serif text-[22px] font-medium leading-[28px] text-[#16140f]">
                {categoryContent[cat.id].title}
              </h2>
              <FAQSection items={categoryContent[cat.id].items} />
            </div>
          ))}
        </article>
      </div>
    </div>
  );
}
