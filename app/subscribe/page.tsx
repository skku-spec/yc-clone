import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe to YC's Newsletter | Y Combinator",
  description:
    "Keep up with the latest news, launches, jobs, and events from the YC community.",
};

const pClass =
  "mb-6 font-['Outfit',sans-serif] font-light text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

export default function SubscribePage() {
  return (
    <main className="flex-1 px-4 pb-4 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[640px] text-center">
        <h1 className="mb-2 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:mb-4">
          Subscribe to YC&apos;s Newsletter
        </h1>
      </div>

      <article className="mx-auto max-w-[640px] text-center">
        <section className="mb-10">
          <p className={pClass}>
            Keep up with the latest news, launches, jobs, and events from the YC
            community.
          </p>

           <div className="my-8">
             <a
               href="https://account.ycombinator.com?continue=https://www.ycombinator.com/newsletter/subscribe?signup_source=ycdc_newsletter_page"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex h-20 items-center justify-center rounded-full bg-black px-10 pb-1 font-['Source_Serif_4',serif] text-[1.75rem] font-normal italic tracking-[0.015rem] text-[#f5f5ee] no-underline transition-[opacity,transform] duration-300 ease-out hover:opacity-80 max-md:h-[42px] max-md:px-9 max-md:text-[20px]"
             >
               Sign in to subscribe!
             </a>
           </div>

          <p className={pClass}>
            <a
              href="https://us7.campaign-archive.com/home/?u=6507bf4e4c2df3fdbae6ef738&id=547725049b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
            >
              View Newsletter Archive
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
