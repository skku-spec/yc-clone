"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const founderProfiles = [
  {
    name: "Vrinda",
    school: "Haas",
    company: "Visa",
    quote:
      "I built and managed the Visa platform that powers the Chase Sapphire Reserve.",
    image: "https://bookface-static.ycombinator.com/vite/assets/vrinda-DIFyFYoW.png",
  },
  {
    name: "Bryant",
    school: "Harvard",
    company: "Microsoft",
    quote:
      "Scored a perfect 180 (99.99 percentile) on my LSAT and was on law review at Harvard Law School.",
    image: "https://bookface-static.ycombinator.com/vite/assets/bryant-lk4fCmdu.png",
  },
  {
    name: "Saba",
    school: "Berkeley",
    company: "Doordash",
    quote:
      "Youngest engineer to be promoted to E7 (Senior Staff) at DoorDash.",
    image: "https://bookface-static.ycombinator.com/vite/assets/saba-BxgDnKV-.png",
  },
  {
    name: "Curtis",
    school: "MIT",
    company: "Google",
    quote:
      "Built Appetas, an instant website builders for SMBs. Acquired by Google in 2014.",
    image: "https://bookface-static.ycombinator.com/vite/assets/curtis-B8XoRD6S.png",
  },
  {
    name: "Shreyas",
    school: "UIUC",
    company: "SpaceX",
    quote:
      "I managed the full teardown and rebuild of a rocket engine turbopump in a single day.",
    image: "https://bookface-static.ycombinator.com/vite/assets/shreyas-Ct0zLDn2.png",
  },
  {
    name: "Daryl",
    school: "Cornell",
    company: "Tesla",
    quote:
      "Worked on autonomous cars at XPENG, AR games at Snapchat, planning algorithms at Google X, and gesture recognition at Tesla.",
    image: "https://bookface-static.ycombinator.com/vite/assets/daryl-49F1QQZ8.png",
  },
];

const cityStats = [
  { city: "San Francisco", count: "3,200" },
  { city: "New York City", count: "3,000" },
  { city: "London", count: "2,900" },
  { city: "Bangalore", count: "1,900" },
  { city: "Los Angeles", count: "1,400" },
  { city: "Toronto", count: "1,200" },
  { city: "Berlin", count: "800" },
  { city: "Paris", count: "700" },
  { city: "Seattle", count: "700" },
  { city: "Singapore", count: "600" },
];

const testimonials = [
  {
    quote:
      "Without this we never would have met, done YC, or started this company.",
    names: "Curtis and Matthew",
    company: "Whalesync",
    companyHref: "https://www.ycombinator.com/companies/whalesync",
    images: [
      "https://bookface-static.ycombinator.com/vite/assets/curtis-B8XoRD6S.png",
      "https://bookface-static.ycombinator.com/vite/assets/matthew-CdFwOZcJ.png",
    ],
  },
  {
    quote:
      "The YC Co-Founder Matching platform is a huge unfair advantage to filter for the exact people you\u2019re looking for and save time on the search. It\u2019s changing the game and enabling more people to start companies.",
    names: "Philip and Mathias",
    company: "AccessOwl",
    companyHref: "https://www.ycombinator.com/companies/accessowl",
    images: [
      "https://bookface-static.ycombinator.com/vite/assets/philip-D0oeKP8P.png",
      "https://bookface-static.ycombinator.com/vite/assets/mathias-CM_ovQh8.png",
    ],
  },
  {
    quote:
      "Finding the right co-founder was always the biggest barrier preventing me from jumping in to start my own company. YC Co-Founder Matching felt like a cheat-code to solving that problem. Once we matched, we started working together every day and haven\u2019t stopped since. Couldn\u2019t be more grateful for Co-Founder Matching!",
    names: "Andrew and Shreya",
    company: "Pledge Health",
    companyHref: "https://www.ycombinator.com/companies/pledge-health",
    images: [
      "https://bookface-static.ycombinator.com/vite/assets/andrew-7HFc81hL.png",
      "https://bookface-static.ycombinator.com/vite/assets/shreya-CHfoaimM.png",
    ],
  },
  {
    quote:
      "This was by far the most valuable tool I had access to when making the most important decision for my company. The quality and quantity of people who are serious about their venture and serious about looking for a co-founder was unmatched. We\u2019re extremely grateful to YC Co-Founder Matching for bringing our founding team together.",
    names: "Oliver and Royce",
    company: "clearspace",
    companyHref: "https://www.ycombinator.com/companies/clearspace",
    images: [
      "https://bookface-static.ycombinator.com/vite/assets/oliver-BLufwa3Y.png",
      "https://bookface-static.ycombinator.com/vite/assets/royce-Bk7XUyNt.png",
    ],
  },
];

const howItWorksSteps = [
  { num: "1", text: "Create a profile and tell us about yourself" },
  {
    num: "2",
    text: "Our matching engine shows you profiles that fit your preferences",
  },
  {
    num: "3",
    text: "If a profile piques your interest, invite them to connect",
  },
  {
    num: "4",
    text: "If they accept your invite, that\u2019s a match! Find a time to start the conversation.",
  },
];

const faqs = [
  {
    q: "Who is this for?",
    a: "Anyone who is looking for a co-founder. You can have an idea in mind or just be exploring. You can be already working full-time on a startup or just interested in doing one in the future.",
  },
  {
    q: "Does YC take equity in return for using this? Are there strings attached?",
    a: "No, co-founder matching is a completely free product.",
  },
  {
    q: "I\u2019m not sure if I want to start a startup yet, can I use co-founder matching to just meet people and see what happens?",
    a: "Absolutely, co-founder matching is a great way to meet cool people in your city who are interested in startups.",
  },
  {
    q: "Will my profile be public? Can my employer find me?",
    a: "No, your profile is not public to the internet. Your profile is visible only to other people who have been approved for co-founder matching.",
  },
];

function ProfileCard({
  profile,
}: {
  profile: (typeof founderProfiles)[number];
}) {
  return (
    <div className="flex min-w-[300px] max-w-[340px] flex-col rounded-2xl bg-white p-6 shadow-sm">
      <p className="mb-4 font-['Outfit',sans-serif] text-sm font-light leading-relaxed text-[#16140f]/80">
        {profile.quote}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#e8e8e0]">
          <Image
            src={profile.image}
            alt={profile.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
            unoptimized
          />
        </div>
        <div>
          <p className="font-['Outfit',sans-serif] text-sm font-semibold text-[#16140f]">
            {profile.name}
          </p>
          <p className="font-['Outfit',sans-serif] text-xs font-light text-[#16140f]/60">
            {profile.school} &middot; {profile.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CofounderMatchingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      <section className="relative px-4 pb-16 pt-12 text-center sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-[800px]">
          <div className="mb-6">
            <Image
              src="https://bookface-static.ycombinator.com/vite/assets/cfm_profiles-Dm-05vp5.png"
              alt="co-founder emojis"
              width={200}
              height={60}
              className="mx-auto"
              unoptimized
            />
          </div>
          <h1 className="font-['Source_Serif_4',serif] text-4xl font-bold tracking-tight text-[#16140f] sm:text-5xl lg:text-6xl">
            <span className="font-['Outfit',sans-serif] text-lg font-medium tracking-wider text-[#FF6C0F] sm:text-xl">
              Y Combinator
            </span>
            <br />
            Co&#x2011;Founder Matching
          </h1>
          <p className="mt-5 font-['Outfit',sans-serif] text-lg font-light text-[#16140f]/70 sm:text-xl">
            Where savvy founders go to meet potential co&#x2011;founders
          </p>
           <div className="mt-8 flex items-center justify-center gap-4">
             <a
               href="https://startupschool.org/users/sign_in?sign_up=true&continue_url=%2Fcofounder-matching%2Fdashboard"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full bg-[#FF6C0F] px-8 py-3 font-['Outfit',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-90"
             >
               Sign up
             </a>
             <a
               href="https://startupschool.org/users/sign_in?continue_url=%2Fcofounder-matching%2Fdashboard"
               target="_blank"
               rel="noopener noreferrer"
               className="rounded-full border border-[#16140f]/20 px-8 py-3 font-['Outfit',sans-serif] text-sm font-medium text-[#16140f] transition-colors hover:bg-[#16140f]/5"
             >
               Sign in
             </a>
           </div>
          <p className="mt-6 font-['Outfit',sans-serif] text-xs font-light italic text-[#16140f]/50">
            (Actual founders who met on this site and got funded by YC.)
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-['Source_Serif_4',serif] text-2xl font-light leading-relaxed text-[#16140f] sm:text-3xl">
            We know even the best founders don&apos;t always have people in
            their network who are ready to start a company
          </p>
          <p className="mt-6 font-['Source_Serif_4',serif] text-2xl font-bold text-[#16140f] sm:text-3xl">
            That&apos;s why we built co-founder matching.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-[1000px] gap-8 sm:grid-cols-3">
          {[
            {
              title: "Good for all stages",
              desc: "Whether you\u2019re getting to know people for the future, or ready to go now.",
            },
            {
              title: "Come with or without an idea",
              desc: "Don\u2019t have the right idea yet? This is a great place to find it.",
            },
            {
              title: "Explore on your own terms",
              desc: "No commitment, no equity, no strings attached.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="font-['Outfit',sans-serif] text-base font-semibold text-[#16140f]">
                {item.title}
              </h3>
              <p className="mt-2 font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eae9e2] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-10 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            World-class founders are on co-founder matching
          </h2>
          <div className="scrollbar-none -mx-4 flex gap-5 overflow-x-auto px-4 pb-4">
            {founderProfiles.map((profile) => (
              <ProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            The largest network of its kind &mdash; over 100K matches made
          </h2>
          <p className="mt-4 font-['Outfit',sans-serif] text-base font-light text-[#16140f]/70">
            Active profiles in top cities
          </p>
          <div className="mx-auto mt-10 grid max-w-[700px] grid-cols-2 gap-x-12 gap-y-4 text-left sm:grid-cols-2">
            {cityStats.map((stat) => (
              <div
                key={stat.city}
                className="flex items-center justify-between border-b border-[#e8e8e0] py-3"
              >
                <span className="font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/80">
                  {stat.city}
                </span>
                <span className="font-['Outfit',sans-serif] text-sm font-semibold tabular-nums text-[#16140f]">
                  {stat.count}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-['Outfit',sans-serif] text-sm font-light italic text-[#16140f]/60">
            We also run exclusive in-person co-founder matching meetups for
            founders in SF and NYC
          </p>
        </div>
      </section>

      <section className="bg-[#eae9e2] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            Built with YC&apos;s expertise
          </h2>
          <p className="mt-4 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]/70">
            We&apos;ve distilled all of YC&apos;s knowledge about the make-up
            of successful founding teams into our matching engine &mdash; and
            into our confidential co-founder matching handbook.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-10 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            From YC companies who met on co-founder matching
          </h2>
          <div className="space-y-10">
            {testimonials.map((t) => (
              <div
                key={t.names}
                className="rounded-2xl border border-[#e8e8e0] bg-white p-8"
              >
                <p className="mb-6 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {t.images.map((img, i) => (
                       <div
                         key={i}
                         className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[#e8e8e0]"
                       >
                         <Image
                           src={img}
                           alt="Founder profile photo"
                           width={40}
                           height={40}
                           className="h-full w-full object-cover"
                           unoptimized
                         />
                       </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-['Outfit',sans-serif] text-sm font-semibold text-[#16140f]">
                      {t.names}
                    </p>
                     <a
                       href={t.companyHref}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-['Outfit',sans-serif] text-xs font-light text-[#FF6C0F] hover:underline"
                     >
                       {t.company}
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-[#FF6C0F] px-4 py-12 text-center">
         <a
           href="https://startupschool.org/users/sign_in?sign_up=true&continue_url=%2Fcofounder-matching%2Fdashboard"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block rounded-full bg-white px-10 py-3.5 font-['Outfit',sans-serif] text-sm font-semibold text-[#FF6C0F] transition-opacity hover:opacity-90"
         >
           Sign up now
         </a>
       </section>

       <section className="px-4 py-16 sm:py-20">
         <div className="mx-auto max-w-[800px]">
           <h2 className="mb-12 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
             How does it work?
           </h2>
          <div className="space-y-8">
            {howItWorksSteps.map((step) => (
              <div key={step.num} className="flex items-start gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6C0F] font-['Outfit',sans-serif] text-lg font-bold text-white">
                  {step.num}
                </div>
                <p className="pt-2 font-['Outfit',sans-serif] text-base font-light text-[#16140f]/80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eae9e2] px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8 text-center font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-['Outfit',sans-serif] text-sm font-semibold text-[#16140f]">
                    {faq.q}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[#16140f]/40 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="font-['Outfit',sans-serif] text-sm font-light leading-relaxed text-[#16140f]/70">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-[#FF6C0F] px-4 py-12 text-center">
         <a
           href="https://startupschool.org/users/sign_in?sign_up=true&continue_url=%2Fcofounder-matching%2Fdashboard"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block rounded-full bg-white px-10 py-3.5 font-['Outfit',sans-serif] text-sm font-semibold text-[#FF6C0F] transition-opacity hover:opacity-90"
         >
           Sign up now
         </a>
       </section>
     </div>
   );
 }
