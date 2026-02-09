import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Early Decision for Students | Y Combinator",
  description:
    "Apply now, do YC after you graduate. For students who want to finish school before doing YC. Get funded the moment you're accepted.",
};

export default function EarlyDecisionPage() {
  return (
    <main className="px-4 pb-16 pt-12 md:pt-16">
      <header className="mx-auto max-w-[800px] text-center">
        <h1 className="font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f]">
          Early Decision for Students
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] font-['Outfit',sans-serif] text-lg font-light leading-relaxed text-[#16140f]/80">
          Apply now, do YC after you graduate. For students who want to finish
          school before doing YC. Get funded the moment you&apos;re accepted.
        </p>
      </header>

      <article className="mx-auto mt-12 max-w-[720px] font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]">
        <img
          src="https://bookface-static.ycombinator.com/assets/ycdc/early-decision-hero-b6b5f7dbcfc11aed4bf60a7d32c0b1c89b57a14b41d03c3d4c2b4d3e1e7b9a4c.jpg"
          alt="Early Decision for Students"
          className="mb-8 w-full rounded-xl object-cover"
          loading="lazy"
        />

        <p className="mb-8">
          Sneha and Anushka, founders of{" "}
          <Link
            href="/companies/spur"
            className="text-[#ff6600] underline decoration-[#ff6600]/30 underline-offset-2 hover:decoration-[#ff6600]"
          >
            Spur (S24)
          </Link>
          , applied in Fall 2023 for the S24 batch using Early Decision. This
          allowed them to graduate in May 2024 and then do YC. They&apos;ve
          since raised $4.5M from top investors for their AI-powered QA testing
          tools.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
            How Early Decision Works
          </h2>
          <p className="mb-6">
            Early Decision lets you apply to YC while you&apos;re still in
            school and reserve your spot in a future batch. For example, you
            apply in Fall of this year, for a spot in the summer batch of the
            following year. You submit the same YC application as if you were
            applying for the upcoming batch. If you&apos;re accepted, we&apos;ll
            fund you immediately and hold your place for after you graduate.
          </p>

          <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-medium italic text-[#16140f]">
            Is It for You?
          </h3>
          <p className="mb-6">
            This program is designed for students who want to finish their
            degree before starting a company. If you&apos;re considering working
            on your own startup after graduation, Early Decision makes it easy
            to lock in your spot.
          </p>
          <p className="mb-6">
            Even if you&apos;re not completely sure yet if you want to do a
            startup, you should still apply. There is no downside.
          </p>
          <p className="mb-6">
            Also, if you&apos;re not in your final year, you can still apply for
            Early Decision. You&apos;ll be able to finish the school year
            you&apos;re currently in, and then either join a later batch or
            decide to drop out and start sooner.
          </p>

          <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-medium italic text-[#16140f]">
            The Timeline
          </h3>
          <p className="mb-6">
            The most common path is students applying in the fall of their final
            year and joining the summer batch after graduating in Spring. But
            you can apply for any batch in the future within reason. The
            application and interview process is the same as if you were
            applying for the upcoming batch. Once you&apos;re accepted, YC funds
            you right away and confirms your future batch.
          </p>

          <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-medium italic text-[#16140f]">
            How to Apply
          </h3>
          <p className="mb-6">
            When you fill out your YC application, you&apos;ll see a question
            asking which batch you want to apply for. Simply select &quot;A
            batch after Spring 2026&quot; to indicate you&apos;re applying for
            Early Decision, and tell us which batch you&apos;d like to be
            considered for.
          </p>

          <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-medium italic text-[#16140f]">
            Why We Created Early Decision
          </h3>
          <p className="mb-6">
            Many students want to finish their degree or complete more of their
            education before starting a company. Also we know that many students
            spend a lot of time in Fall or during their final year applying for
            jobs or internships. Early Decision gives students another option:
            apply to YC and bet on yourself.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
            Watch: Why This Is The Perfect Time To Start A Startup
          </h2>
          <div className="aspect-video w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/0TNTlMZFTWw"
              title="Why This Is The Perfect Time To Start A Startup"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </section>

        <section className="rounded-2xl bg-[#ff6600] px-8 py-10 text-center text-white">
          <p className="mb-4 font-['Outfit',sans-serif] text-lg font-light">
            Apply now and secure your spot in a future YC batch.
          </p>
          <a
            href="https://apply.ycombinator.com/home"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-['Outfit',sans-serif] text-base font-medium text-[#ff6600] transition-opacity hover:opacity-90"
          >
            Apply for Early Decision
          </a>
        </section>
      </article>
    </main>
  );
}
