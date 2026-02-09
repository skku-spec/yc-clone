import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo Day FAQ | Y Combinator",
  description:
    "Frequently asked questions about Y Combinator Demo Day, including invitations, logistics, and what to expect.",
};

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "the-basics",
    title: "The Basics",
    items: [
      {
        question: "What is Demo Day?",
        answer: (
          <>
            On{" "}
            <Link
              href="/demoday"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              Demo Day
            </Link>
            , Y Combinator&apos;s latest batch of startups present to an
            invite-only audience of approximately 1,000 investors and media.
            While we ran Demo Day remotely during covid, Demo Day is now back to
            being in-person.
          </>
        ),
      },
      {
        question: "What is Demo Day?",
        answer:
          "Demo Day is a private, invitation-only event and always oversubscribed. If you receive an invitation, RSVP yes to confirm your spot.",
      },
      {
        question: "What is Demo Day?",
        answer:
          "There is no continuous list of investors who are always invited to Demo Day. Investors are invited based on their recent investment history in YC companies and our relationships with them.",
      },
      {
        question: "When and where is Demo Day held?",
        answer:
          "Demo Day will be held in San Francisco on Tuesday, March 24th.",
      },
      {
        question: "Can I participate online?",
        answer:
          "For those who can\u2019t make it to San Francisco, we will provide access to the demo day website, which has information on the companies that presented.",
      },
      {
        question: "How do I get an invitation to Demo Day?",
        answer: (
          <>
            Invitations are software generated and based on recent investment
            history in YC startups. If you are an investor, you can also apply
            for an invitation directly at{" "}
            <Link
              href="/demoday"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              ycombinator.com/demoday
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: "existing-invitations",
    title: "Existing Invitations",
    items: [
      {
        question:
          "A partner at my firm has received a Demo Day invite. Can additional people at our firm receive Demo Day invitations?",
        answer: (
          <>
            Yes, other members of your firm can sign up for an invitation at{" "}
            <Link
              href="/demoday"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              ycombinator.com/demoday
            </Link>
            , or email us at{" "}
            <a
              href="mailto:demoday@ycombinator.com"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              demoday@ycombinator.com
            </a>
            .
          </>
        ),
      },
      {
        question:
          "Can I share my invite with someone else who is interested in attending Demo Day?",
        answer:
          "The invitation to Demo Day is for you and you only. It is not transferable and it cannot be used for multiple people. If someone you know is interested in going, we recommend encouraging them to apply or to get an introduction to one of the YC general partners.",
      },
      {
        question:
          "Can I transfer the invitation to someone else in my firm?",
        answer: (
          <>
            If you would like to transfer your invitation to another partner at
            the same firm, please email us at{" "}
            <a
              href="mailto:demoday@ycombinator.com"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              demoday@ycombinator.com
            </a>
            . Transfers to other partners are fine; transfers to associates or
            other non-partner staff will be case-by-case depending on
            availability.
          </>
        ),
      },
    ],
  },
  {
    id: "during-demo-day",
    title: "During Demo Day",
    items: [
      {
        question:
          "Can I get information on which companies will be presenting?",
        answer: (
          <>
            Yes, companies launch throughout the batch on our{" "}
            <Link
              href="/companies"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              Startup Directory
            </Link>{" "}
            and{" "}
            <Link
              href="/launches"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              Launch YC
            </Link>
            . Visit those to discover most of the companies presenting.
          </>
        ),
      },
    ],
  },
];

export default function DemoDayFAQPage() {
  return (
    <div className="flex-1 px-4 pb-16 pt-12 md:pt-16">
      <div className="mx-auto max-w-[740px]">
        <h1 className="mb-10 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          Demo Day FAQ
        </h1>

        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <nav className="shrink-0 md:sticky md:top-24 md:w-[180px] md:self-start">
            <ul className="flex gap-3 md:flex-col md:gap-1">
              {FAQ_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-md px-3 py-2 font-['Outfit',sans-serif] text-[14px] font-medium text-[#16140f]/60 transition-colors hover:bg-[#16140f]/5 hover:text-[#16140f]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="min-w-0 flex-1">
            {FAQ_SECTIONS.map((section, sectionIndex) => (
              <section
                key={section.id}
                id={section.id}
                className={sectionIndex > 0 ? "mt-12" : ""}
              >
                <h2 className="mb-6 font-['Source_Serif_4',serif] text-[clamp(1.5rem,3vw,2rem)] font-medium italic tracking-tight text-[#16140f]">
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={`${section.id}-${itemIndex}`}
                      className="border-b border-[#16140f]/8 pb-6 last:border-0"
                    >
                      <h3 className="mb-3 font-['Outfit',sans-serif] text-[16px] font-semibold leading-snug text-[#16140f]">
                        {item.question}
                      </h3>
                      <div className="font-['Outfit',sans-serif] text-[15px] font-light leading-[1.7] text-[#16140f]/80">
                        {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
