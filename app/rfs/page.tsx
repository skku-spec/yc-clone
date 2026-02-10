"use client";

import { useState } from "react";
import Link from "next/link";

interface RFSEntry {
  id: string;
  title: string;
  author: string;
  authorHref: string;
  description: string[];
}

interface Batch {
  name: string;
  intro: string;
  entries: RFSEntry[];
}

const batches: Batch[] = [
  {
    name: "Spring 2026",
    intro:
      "The way startups are built has shifted quickly. AI-native companies can now be built faster, cheaper, and with more ambition than ever. We\u2019re excited about a range of startup ideas that span AI-native workflows, new financial primitives, modernized industrial systems, and more. This time around, a few even come directly from YC founders sharing opportunities they\u2019re seeing on the frontier.",
    entries: [
      {
        id: "cursor-for-product-managers",
        title: "Cursor for Product Managers",
        author: "By Andrew Miklas",
        authorHref: "/people/andrew-miklas",
        description: [
          "Over the last few years, we\u2019ve seen an explosion of AI tools for writing code. Cursor and Claude Code are great at helping teams build software once it\u2019s clear what needs to be built. But writing code is only part of building a product people want. The most important part is figuring out what to build in the first place!",
          "Every successful product requires product management: talking to users, understanding markets, synthesizing feedback, and deciding what problems are worth solving and how the product should work. Whether this process is done by founders, engineers, or product managers, the activity is the same. Historically, the output has been product requirements docs, Figma mocks, and Jira tickets \u2014 artifacts designed to communicate intent to human engineers.",
          "Today, teams use AI in isolated parts of this process, but there\u2019s no system that supports the full loop of product discovery. Imagine a tool where you upload customer interviews and product usage data, ask \"what should we build next?\", and get the outline of a new feature complete with an explanation based on customer feedback as to why this is a change worth making. The tool would also propose specific changes to your product\u2019s UI, data model, and workflows, and would break down the development tasks so they could be handled by your favorite coding agent.",
          "We think there\u2019s an opportunity to build a \"Cursor for product management\": an AI-native system focused on helping teams figure out what to build, not just how to build it. As agents increasingly take the first pass at implementation, the way we define and communicate \"what to build\" needs to change. If you\u2019re building in this space, we\u2019d love to hear from you.",
        ],
      },
      {
        id: "ai-native-hedge-funds",
        title: "AI-Native Hedge Funds",
        author: "By Charlie Holtz",
        authorHref: "/companies/conductor",
        description: [
          "In the 1980s, a small group of funds started using computers to analyze markets. At the time it seemed silly, but quantitative trading is now obvious. We\u2019re at a similar inflection point now, and the next Renaissance, Bridgewater, and D.E. Shaw\u2019s are going to be built on AI.",
          "The biggest funds in the world have been slow to adapt. I worked as a quant researcher at one of these funds, and when I asked compliance to let us use ChatGPT, I didn\u2019t even get a response. It made it clear to me that the hedge funds of the future won\u2019t just bolt AI onto their existing strategies. They\u2019ll use it to come up with entirely new ones. That\u2019s where the alpha is.",
          "We\u2019ve already got swarms of Claude agents writing our codebases. Imagine swarms of agents doing what hedge fund traders do now - combing through 10-Ks, earnings calls, and SEC filings, synthesizing analyst ideas and making trades. An AI-native hedge fund will be the first to do this well.",
        ],
      },
      {
        id: "ai-powered-agencies",
        title: "AI-Native Agencies",
        author: "By Aaron Epstein",
        authorHref: "/people/aaron-epstein",
        description: [
          "Agencies have always been crazy hard to scale. Low margins, slow manual work, and the only way to grow is to add more people. But AI changes this. Now instead of selling software to customers to help them do the work, you can charge way more by using the software yourself and selling them the finished product at 100x the price.",
          "Think of a design firm that uses AI to produce custom design work for clients upfront, to win the business before the contract is even signed. Or an ad agency that uses AI to create stunning video ads without the time and expense of setting up a physical shoot. Or a law firm that uses AI to write legal docs in minutes, rather than weeks.",
          "That\u2019s why agencies of the future will look more like software companies, with software margins. And they\u2019ll scale far bigger than any agencies that exist in these fragmented markets today. If you\u2019re rethinking how agencies and service businesses of the future will be built, we\u2019d love to hear from you.",
        ],
      },
      {
        id: "stablecoin-financial-services",
        title: "Stablecoin Financial Services",
        author: "By Daivik Goel",
        authorHref: "/companies/shor",
        description: [
          "Stablecoins are rapidly becoming critical infrastructure for global finance, yet much of the financial services layer remains unbuilt. The GENIUS and CLARITY Acts are placing stablecoins in a unique position between DeFi and TradFi, compliant but crypto-native. This creates room for financial services that offer DeFi benefits like better yield or access to tokenized real-world assets while operating under traditional compliance frameworks.",
          "Today, businesses and individuals must choose between regulated financial products with limited upside and unregulated crypto with real risk. Stablecoins sitting in the regulatory middle ground can bridge this gap, whether that\u2019s yield-bearing accounts, new investment access, or infrastructure that makes money move faster and cheaper across borders.",
          "The regulatory window is open. The rails are being laid. It\u2019s the perfect time to build something that blurs the line between the two worlds.",
        ],
      },
      {
        id: "ai-for-government",
        title: "AI for Government",
        author: "By Tom Blomfield",
        authorHref: "/people/tom-blomfield",
        description: [
          "The first wave of AI companies has helped businesses and normal people fill in forms and complete online applications with unprecedented speed and accuracy. On the flip side, many of these forms will be received by local, state, and federal government, where they\u2019re currently printing them out and processing them by hand.",
          "Government desperately needs AI tools to deal with the huge increase that\u2019s coming down the line. And the benefit is that it will also make government much more cost-effective and responsive. We\u2019ve seen hints of this digital government in places like Estonia, but we need to spread it to the rest of the world.",
          "This kind of startup is not for the faint of heart. Selling to government is extremely hard, but once you\u2019ve figured out how to land your first customer, they tend to be very sticky and can expand to huge contracts.",
        ],
      },
      {
        id: "modern-metal-mills",
        title: "Modern Metal Mills",
        author: "By Zane Hengsperger",
        authorHref: "/companies/nox-metals",
        description: [
          "When people talk about reindustrializing America, they usually focus on labor costs or geopolitics. But a bigger problem is hiding in plain sight: American metal mills are slow by design. If you buy rolled aluminum or steel tube in the U.S., lead times of 8 to 30 weeks are normal. Most buyers can\u2019t even purchase directly from mills. And despite high prices, mills still operate on thin margins.",
          "That\u2019s not because demand is weak or workers are unskilled\u2014it\u2019s because the systems running these mills were designed decades ago. Production planning, scheduling, quoting, and execution are fragmented. Mills optimize for tonnage and utilization, not speed, flexibility, or margin. Short runs and spec changes are treated as disruptions instead of opportunities.",
          "Automation has lagged at the exact moment the workforce is shrinking. Material handling, changeovers, inspection, and quality control still rely on tribal knowledge held by a few experienced operators. Automation is mostly used to push more tons through a slow system, not to eliminate setup time or variability.",
          "Energy is the other half of the problem. Aluminum and steel are extremely energy-intensive, yet most mills rely on legacy power contracts and inflexible grids. New energy models\u2014on-site generation, smarter power management, even next-generation nuclear\u2014could dramatically reduce costs, but they\u2019re rarely designed into mills from the start.",
          "What\u2019s changed is that software and energy technology are finally good enough to rethink the entire system. AI-driven planning, real-time MES, and modern automation can compress lead times and raise margins at the same time. We think this creates an opportunity to build modern, software-defined American mills\u2014especially in aluminum rolling and steel tube\u2014where long lead times and energy costs are most entrenched.",
          "Modernizing mills isn\u2019t just about going faster. It\u2019s about making domestic metal cheaper, more flexible, and more profitable\u2014and rebuilding the industrial foundation of the U.S.",
        ],
      },
      {
        id: "ai-guidance-for-physical-work",
        title: "AI Guidance for Physical Work",
        author: "By David Lieb",
        authorHref: "/people/david-lieb",
        description: [
          "You know that scene in The Matrix, where Neo plugs a cable into the back of his head and wakes up a while later and says \"I know Kung Fu\"? Physical work is about to get something similar \u2013 not through brain implants, but through real-time AI guidance.",
          "Much of the AI conversation focuses on which desk jobs will get replaced. But for physical work\u2014stuff like field services, manufacturing, healthcare\u2014AI can\u2019t yet act in the world. What it can do is see, reason, and guide the human who does. Imagine wearing a small camera while an AI sees what you see and talks you through the job: \"turn off that valve\", \"use the \u215C inch wrench\", \"that part looks worn, replace it\". Instead of needing months or years of training, workers can become effective immediately, with AI coaching them and accessing new skills when needed.",
          "Why now? Three things have converged. First, multimodal models can now see and reason about real-world situations reliably. Second, the hardware is already everywhere \u2013 phones, AirPods, Smart Glasses. And third, skilled labor shortages make this economically urgent and a high wage job for millions of people.",
          "There are a few approaches you could take. The most obvious is to build this system and sell it to companies with existing workforces. Or, you could pick a vertical, like HVAC repair or nursing, and build a full-stack superpowered workforce. Or, you could build a platform that lets anyone sign up and become a skilled worker or start their own business.",
          "If you\u2019re interested in giving physical workers the same type of AI superpowers that Claude Code gives you, we\u2019d love to see you apply.",
        ],
      },
      {
        id: "large-spatial-models",
        title: "Large Spatial Models",
        author: "By Ryan McLinko",
        authorHref: "/companies/astranis",
        description: [
          "Large language models have driven most of the recent breakthroughs in AI, but their impact has been constrained to domains that can be expressed primarily through language. Unlocking the next wave of AI capability, and enabling artificial general intelligence, will require models that are capable of spatial reasoning.",
          "Today\u2019s systems can handle limited spatial tasks, such as basic relationships or depth estimation, but they cannot robustly reason about spatial manipulation, 2D and 3D features, their relationships, or operations like mental rotation. This limits AI\u2019s ability to understand and interact with the physical world.",
          "There is an opportunity to build large-scale spatial reasoning models that treat geometry and physical structure as first-class primitives, not approximations layered on top of language. Such models would enable AI systems to reason about and design real-world objects and environments. A company that succeeds in building this capability could define the next AI foundation model, on the scale of OpenAI or Anthropic.",
        ],
      },
      {
        id: "infra-for-government-fraud-hunters",
        title: "Infra for Government Fraud Hunters",
        author: "By Garry Tan",
        authorHref: "/people/garry-tan",
        description: [
          "We want to fund startups that bring government fraud investigation into the modern era. Government is the biggest customer on earth\u2014it spends trillions annually at the federal, state and local levels, and it hemorrhages a commensurate amount in fraud. Medicare alone loses tens of billions a year to improper payments.",
          "One of the most effective ways to claw this money back at scale is the qui tam provision under the False Claims Act. This lets private citizens file lawsuits on behalf of the government against companies defrauding it. If the case succeeds, these citizens get to keep a percentage of whatever\u2019s recovered.",
          "At the moment, this process is painfully slow: An insider tips off a law firm, and then the firm spends months or years manually pulling documents and building the case. This should be accelerated with software. Not dashboards, but intelligent systems that can take an insider tip and organize the evidence around it\u2014parsing messy PDFs, tracing opaque corporate structures, and packaging the findings into complaint-ready files.",
          "Some startups are already filing FCA claims themselves, but we think there\u2019s a big opportunity to build tools that dramatically speed up whistleblower law firms, state AGs, and inspectors general.",
          "Founder profile matters here. We\u2019re looking for teams where at least one founder has actually done work like this, whether that\u2019s a former FCA counsel, compliance lead or auditor. Now is the time to build this: the AI capabilities are finally here, and there\u2019s bipartisan tailwind to act. If you can make fraud recovery 10x faster, you\u2019ll build a huge business \u2014 and return billions to taxpayers.",
        ],
      },
      {
        id: "make-llms-easy-to-train",
        title: "Make LLMs Easy to Train",
        author: "By Gabriel Birnbaum",
        authorHref: "/companies/yn",
        description: [
          "Training large language models is still surprisingly difficult. My co-founder Eric and I have spent the last three years training diffusion and language models at Can of Soup, and despite all the attention AI has received, the tooling has barely improved.",
          "On any given day we may spend significant time dealing with broken SDKs, SSHing into busted GPU instances (that you only find out are busted after spinning them up for half an hour), or discovering major bugs in open-source tooling. Not to mention the work of managing, sourcing, processing, and visualizing terabytes of data.",
          "I\u2019d love to use products that make LLM training easy. \u2022 APIs that abstract training. \u2022 Databases to easily manage very large datasets. \u2022 Dev environments built with ML research in mind.",
          "As post-training and model specialization become more important, I could see these products becoming the foundation of how software is built in the future.",
        ],
      },
    ],
  },
  {
    name: "Fall 2025",
    intro:
      "We continue to see enormous opportunity across AI infrastructure, vertical AI applications, and foundational technology shifts. Here are some of the areas we\u2019re most excited about for Fall 2025.",
    entries: [
      {
        id: "ai-agent-infrastructure",
        title: "AI Agent Infrastructure",
        author: "By Jared Friedman",
        authorHref: "/people/jared-friedman",
        description: [
          "AI agents are becoming more capable and autonomous, but the infrastructure to build, deploy, and manage them at scale is still immature. We\u2019re looking for startups building the picks and shovels of the agent economy.",
        ],
      },
      {
        id: "ai-for-healthcare",
        title: "AI for Healthcare",
        author: "By Aaron Epstein",
        authorHref: "/people/aaron-epstein",
        description: [
          "Healthcare generates enormous amounts of data but has been slow to adopt AI. There are huge opportunities in clinical decision support, administrative automation, and drug discovery.",
        ],
      },
    ],
  },
  {
    name: "Summer 2025",
    intro: "Our Summer 2025 batch focused on the next wave of AI-first companies and infrastructure that will power them.",
    entries: [
      {
        id: "foundation-model-companies",
        title: "Foundation Model Companies",
        author: "By Daniel Gross",
        authorHref: "/people/daniel-gross",
        description: [
          "We believe there\u2019s room for many more foundation model companies beyond the current leaders. Specialized models for specific domains will create enormous value.",
        ],
      },
    ],
  },
  {
    name: "Spring 2025",
    intro: "Spring 2025 RFS focused on applying AI to transform legacy industries and build new categories of software.",
    entries: [
      {
        id: "ai-for-science",
        title: "AI for Science",
        author: "By Garry Tan",
        authorHref: "/people/garry-tan",
        description: [
          "AI is beginning to accelerate scientific discovery in fields from biology to materials science. We want to fund startups that are using AI to push the boundaries of what\u2019s possible in scientific research.",
        ],
      },
    ],
  },
  {
    name: "Winter 2025",
    intro: "Our Winter 2025 RFS explored the intersection of AI with enterprise software, developer tools, and new computing paradigms.",
    entries: [
      {
        id: "enterprise-ai",
        title: "Enterprise AI",
        author: "By Michael Seibel",
        authorHref: "/people/michael-seibel",
        description: [
          "Large enterprises are eager to adopt AI but struggling with implementation. There\u2019s a massive opportunity to build AI-native enterprise software that replaces legacy systems.",
        ],
      },
    ],
  },
  {
    name: "Summer 2024",
    intro: "Summer 2024 saw the beginning of the AI agent revolution and new opportunities in climate tech and biotech.",
    entries: [
      {
        id: "climate-tech",
        title: "Climate Tech",
        author: "By Gustaf Alstr\u00f6mer",
        authorHref: "/people/gustaf-alstromer",
        description: [
          "The climate crisis demands innovative solutions. We\u2019re looking for startups working on carbon capture, clean energy, sustainable materials, and other technologies that can make a meaningful impact on climate change.",
        ],
      },
    ],
  },
];

export default function RFSPage() {
  const [activeBatch, setActiveBatch] = useState(0);
  const currentBatch = batches[activeBatch];

  return (
    <div className="mx-auto max-w-[1200px] px-4 pb-20 pt-12 sm:pt-16 lg:pt-20">
      {/* Header */}
      <div className="mb-10 max-w-[800px]">
        <h1 className="font-['Source_Serif_4',serif] text-4xl font-bold tracking-tight text-[#16140f] sm:text-5xl">
          Requests for Startups
        </h1>
        <p className="mt-5 font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]/80 sm:text-lg">
          RFS is our tradition of sharing ideas we&apos;d like to see founders
          tackle. These represent just a fraction of what we fund &mdash; if one
          excites you, take it as extra validation to dive in, but you
          don&apos;t need to work on these ideas to apply to YC.
        </p>
      </div>

      {/* Batch Tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {batches.map((batch, index) => (
          <button
            key={batch.name}
            onClick={() => setActiveBatch(index)}
            className={`rounded-full px-5 py-2 font-['Outfit',sans-serif] text-sm font-medium transition-all ${
              activeBatch === index
                ? "bg-[#FF6C0F] text-white"
                : "bg-[#e8e8e0] text-[#16140f] hover:bg-[#ddddd3]"
            }`}
          >
            {batch.name}
          </button>
        ))}
      </div>

      {/* Batch Content */}
      <div className="mb-12">
        <h2 className="font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f]">
          {currentBatch.name}
        </h2>
        <p className="mt-4 max-w-[800px] font-['Outfit',sans-serif] text-base font-light leading-relaxed text-[#16140f]/80">
          {currentBatch.intro}
        </p>
      </div>

      {/* RFS Entries */}
      <div className="space-y-16">
        {currentBatch.entries.map((entry) => (
          <article
            key={entry.id}
            id={entry.id}
            className="border-t border-[#d9d9d0] pt-10"
          >
            <div className="mb-6">
              <h3 className="group font-['Source_Serif_4',serif] text-2xl font-bold text-[#16140f] sm:text-[28px]">
                {entry.title}
                <Link
                  href={`#${entry.id}`}
                  className="ml-2 text-[#16140f]/30 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  #
                </Link>
              </h3>
              <Link
                href={entry.authorHref}
                className="mt-2 inline-block font-['Outfit',sans-serif] text-sm font-medium text-[#FF6C0F] hover:underline"
              >
                {entry.author}
              </Link>
            </div>
            <div className="max-w-[800px] space-y-4">
              {entry.description.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-['Outfit',sans-serif] text-[15px] font-light leading-[1.75] text-[#16140f]/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
