import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YC Interview Guide | Y Combinator",
  description:
    "If you've been invited to a YC interview, congratulations! Here's what you need to know and what we recommend you do to prepare.",
};

export default function InterviewsPage() {
  return (
    <>
      <h1 className="px-4 pt-12 text-center font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:pt-16">
        YC Interview Guide
      </h1>

      <div className="mx-auto max-w-[800px] px-4 pb-16 pt-8 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f] md:px-8">
        <p className="mb-8 text-lg">
          If you&apos;ve been invited to a YC interview, congratulations!
          We&apos;ve designed YC interviews so that you don&apos;t need to do
          much preparation. Here&apos;s what you need to know and what we
          recommend you do - and don&apos;t do - to prepare.
        </p>

        <h2 className="mb-4 mt-10 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
          The Basics
        </h2>
        <ul className="mb-8 list-disc space-y-2 pl-6">
          <li>YC interviews are 10-minute conversations over Zoom.</li>
          <li>All founders should be present on the call.</li>
          <li>Expect 2-3 YC Partners to be on the call.</li>
          <li>
            Interviewers will have read your application and have it open during
            the call.
          </li>
        </ul>

        <h2 className="mb-4 mt-10 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
          Watch this Video
        </h2>
        <p className="mb-4">
          We recommend watching this video by Dalton Caldwell, Group Partner at
          YC. He discusses what to expect in your interview and provides
          insights on what sets successful interviews apart.
        </p>
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/B5tU2447OK8"
            title="How to Apply And Succeed at Y Combinator | Startup School"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        <h2 className="mb-4 mt-10 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
          How to Prepare for Your YC Interview
        </h2>
        <p className="mb-6">
          Because interviews are so short, there just isn&apos;t time for small
          talk or formal presentations. We only do two things at interviews: we
          ask you questions, and we look at what you&apos;ve built so far.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Don&apos;t rehearse
        </h3>
        <p className="mb-6">
          Founders looking for an edge on how to get accepted into YC sometimes
          think that doing lots of interview preparation will help. However,
          beyond the basic preparation recommended here, it is not useful and is
          often counter-productive.
        </p>
        <p className="mb-6">
          You don&apos;t need to do mock interview prep, and we prefer that you
          don&apos;t prepare any kind of presentation. We sometimes notice that
          founders overprepare which does not increase the chances of their
          acceptance because it can make the interview more awkward. (For
          instance if founders start to answer a question that hasn&apos;t even
          been fully asked yet.) There isn&apos;t time for prepared speeches,
          slide presentations, or screencasts. We just want to have a
          conversation, and that works better when you are talking
          spontaneously. YC interviews can go in many different directions. So
          don&apos;t worry if the interview doesn&apos;t take the form you
          expected.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Instead of rehearsing, make progress
        </h3>
        <p className="mb-6">
          If you really want to improve your chances of getting into YC, the
          best way to get an edge is to work hard and have your startup improve
          between the time that you applied and the time that you interview.
          This may mean you launched, improved your product, increased revenue,
          etc. Demonstrating you can move fast and make quick progress is the
          most surefire way to impress your interviewers.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Be ready to describe what your company does
        </h3>
        <p className="mb-6">
          Typically the first question we ask is: What is your company working
          on? This is the most basic question an investor could ask, and yet
          you&apos;d be surprised how many founders find it hard to answer
          clearly. Explain what you&apos;re doing in a few simple, jargon-free
          sentences.
        </p>
        <p className="mb-6">
          We love learning new things. And a good startup idea usually teaches
          you something when you encounter it. Don&apos;t worry if the new
          things about your idea are things only someone in your field would
          care about. We like that. We&apos;d rather have interesting details
          than boring generalizations.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Understand your users and metrics
        </h3>
        <p className="mb-6">
          If you&apos;re already launched, you should know everything you can
          about your users and your metrics. We&apos;re impressed by startups
          who know a lot about their users, and can tell us what they learned.
        </p>
        <p className="mb-6">
          Here are some questions we often ask if you&apos;ve launched: Where do
          new users come from? What is your growth like? How much are your users
          using the product, and do they stick around? What are your unit
          economics? What makes new users try you? Why do the reluctant ones
          hold back? What are the top things users want? What has surprised you
          about user behavior?
        </p>
        <p className="mb-6">
          If you already have users, it is helpful to have your key metrics
          written down someplace where you can quickly reference them during the
          interview. We don&apos;t expect teams to have every little number
          memorized, and having them written down will free you from feeling
          like you have to. Please note that if you state numbers in the
          interview we may ask for verification of them afterwards.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Don&apos;t be afraid to be honest about challenges
        </h3>
        <p className="mb-6">
          It will also be useful to think about obstacles in your path. We often
          ask about those and we tend to be more convinced by candid discussion
          of difficulties than glib dismissal of them. You&apos;re going to face
          obstacles; every startup does. If you act as if there aren&apos;t any,
          it will seem to us that you have overlooked them.
        </p>
        <p className="mb-6">
          We also don&apos;t expect you to have all the answers. So if we ask a
          question you don&apos;t know the answer to, don&apos;t panic. A smart
          person trying sincerely to answer an unexpected question can lead to a
          great discussion.
        </p>
        <p className="mb-6">
          You should be intimately familiar with the existing products in your
          market, and what, specifically, is wrong with them. It&apos;s not
          enough to say that you&apos;re going to make something that&apos;s
          more powerful, or easier to use. You should be able to explain how.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Have a demo ready
        </h3>
        <p className="mb-6">
          We sometimes will ask to see a demo of what you&apos;re building. By
          demo, we mean a working version of whatever you&apos;ve built or plan
          to build. If you have a working version of your product, be ready to
          show it. If it&apos;s software, have it loaded up and ready to
          screenshare with us. If it&apos;s hardware, have it physically with
          you and be prepared to show us on the call. If it can&apos;t be in
          the room with you, have a demo video available.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Make sure all founders are ready to participate
        </h3>
        <p className="mb-6">
          For teams with multiple founders, we prefer if each founder answers at
          least one question, so we get to know all of you a bit.
        </p>

        <h3 className="mb-3 mt-8 font-['Source_Serif_4',serif] text-xl font-semibold text-[#16140f]">
          Be earnest
        </h3>
        <p className="mb-6">
          The YC folks in your interview are likely the same people you&apos;ll
          work closely with should you be accepted. Interviews are a way for us
          to identify teams we are looking forward to going through a long
          journey with, and the more we feel confident that our conversation is
          sincere, straightforward and natural, the better.
        </p>

        <h2 className="mb-4 mt-10 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
          Post-Interview Feedback
        </h2>
        <p className="mb-6">
          If your team is not selected after the interview, we&apos;ll give you
          feedback over email. Our aim is to offer genuinely useful advice that
          will make you more likely to succeed. It&apos;s very common for teams
          to take our feedback, re-apply the following batch and get accepted.
        </p>

        <h2 className="mb-4 mt-10 font-['Source_Serif_4',serif] text-3xl font-medium italic text-[#16140f]">
          Useful Links
        </h2>
        <p className="mb-4">
          More advice on interviews from the YC community:
        </p>
        <div className="space-y-3">
           <p>
             <a
               href="https://www.ycombinator.com/blog/tips-for-yc-interviews/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               Tips for YC Interviews
             </a>{" "}
             <span className="text-[#16140f]/60">
               by Jessica Livingston, YC Founding Partner
             </span>
           </p>
           <p>
             <a
               href="https://www.youtube.com/watch?v=rfTgzA6iKZc"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               3 Tips to Nail the Y Combinator Interview
             </a>{" "}
             <span className="text-[#16140f]/60">
               by Garry Tan, YC President and CEO
             </span>
           </p>
           <p>
             <a
               href="https://twitter.com/mwseibel/status/660557656927563776"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#FF6C0F] underline decoration-[#FF6C0F]/30 underline-offset-2 hover:decoration-[#FF6C0F]"
             >
               My 10 pieces of advice for preparing for a YC interview
             </a>{" "}
             <span className="text-[#16140f]/60">
               by Michael Seibel, YC Group Partner
             </span>
           </p>
        </div>
      </div>
    </>
  );
}
