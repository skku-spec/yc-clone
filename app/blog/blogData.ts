export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorSlug: string;
  date: string;
  tags: string[];
  featured?: boolean;
  imageUrl?: string;
}

export interface TagInfo {
  slug: string;
  label: string;
}

export const TAGS: TagInfo[] = [
  { slug: "yc-news", label: "YC News" },
  { slug: "yc-events", label: "YC Events" },
  { slug: "admissions", label: "Admissions" },
  { slug: "advice", label: "Advice" },
  { slug: "biotech", label: "Biotech" },
  { slug: "essay", label: "Essay" },
  { slug: "female-founders", label: "Female Founders" },
  { slug: "founder-stories", label: "Founder Stories" },
  { slug: "startup-school", label: "Startup School" },
  { slug: "work-at-a-startup", label: "Work at a Startup" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "adding-canada-back",
    title:
      "Adding Canada Back to Our List of Accepted Countries of Incorporation",
    excerpt:
      "After hearing feedback from Canadian founders in our network, we are adding Canada back to our list of accepted countries of incorporation.",
    content: `After hearing feedback from Canadian founders in our network, we are adding Canada back to our list of accepted countries of incorporation. We have always believed that great founders can come from anywhere, and Canada has produced some of the world's best technology companies.

Over the past year, we heard from many Canadian founders who wanted to apply to YC but were unsure whether their Canadian incorporation would be accepted. We want to remove that barrier.

Starting immediately, startups incorporated in Canada are welcome to apply to YC. Canadian founders have been a significant part of the YC community for over a decade, and we are excited to welcome even more. If you're building something people want, we want to hear from you — regardless of where you're incorporated.

We continue to accept companies incorporated in the US, Canada, the Cayman Islands, Singapore, and several other jurisdictions. If you have questions about whether your country of incorporation is accepted, please check our FAQ or reach out to us directly.`,
    author: "Garry Tan",
    authorSlug: "garry",
    date: "February 2026",
    tags: ["yc-news", "admissions"],
    featured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80",
  },
  {
    slug: "the-yc-ai-student-starter-pack",
    title: "The YC AI Student Starter Pack",
    excerpt:
      "We've partnered with nearly two dozen companies to offer students who attend YC events a suite of over $25,000 in free credits for AI devtools.",
    content: `We are thrilled to announce the YC AI Student Starter Pack — a comprehensive suite of over $25,000 in free credits for the best AI development tools, available to students who attend YC events.

We've partnered with nearly two dozen leading companies in the AI ecosystem to make this possible. The pack includes credits for compute, model APIs, vector databases, observability tools, and more.

Our goal is simple: remove every barrier between talented students and building with AI. The best founders often start building in college, and we want to make sure cost is never the reason a great idea doesn't get built. The participating companies include some of the most innovative names in AI infrastructure.

If you're a student interested in building with AI, attend one of our upcoming YC events to claim your starter pack. We'll be hosting events at universities across the country in the coming months.`,
    author: "Ankit Gupta",
    authorSlug: "ankit-gupta",
    date: "January 2026",
    tags: ["yc-news", "yc-events"],
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    slug: "introducing-w26-batch",
    title: "Introducing the W26 Batch",
    excerpt:
      "We're excited to introduce the Winter 2026 batch — our most competitive and diverse class yet, with founders from 34 countries building across AI, biotech, fintech, and more.",
    content: `Today we're thrilled to introduce the Winter 2026 batch. This is our most competitive class yet, with an acceptance rate under 1.5%. The batch includes 240 companies from 34 countries, working across every major sector of technology.

AI continues to dominate applications, but we're also seeing a resurgence in biotech, climate tech, and defense. More than 40% of the batch is building AI-first companies, while 15% are working in life sciences.

The diversity of this batch is remarkable. Founders range from first-time builders to serial entrepreneurs who have previously scaled companies to hundreds of millions in revenue. Many are repeat YC founders returning with their second or third company.

We believe this batch represents the future of technology. Over the next three months, these founders will work closely with YC partners, participate in group office hours, and prepare for Demo Day. We can't wait to see what they build.`,
    author: "Garry Tan",
    authorSlug: "garry",
    date: "January 2026",
    tags: ["yc-news", "admissions"],
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    slug: "rfs-spring-2026",
    title: "Requests for Startups Spring 2026",
    excerpt:
      "Here are the areas where YC partners are most excited to fund new startups. These are problems we think are important and tractable.",
    content: `Every year, we publish a list of areas where YC partners are particularly excited to fund new startups. These aren't the only things we fund — we're happy to fund good founders working on almost anything — but they represent areas we think are both important and tractable.

This spring, our requests span AI infrastructure, climate tech, government modernization, the future of work, and healthcare. AI is transforming every industry, and we're especially excited about applications that use AI to solve real problems rather than building AI for its own sake.

In healthcare, we're looking for companies that can reduce the cost of drug development, improve diagnostics, or make clinical trials more efficient. In climate, we want to fund companies working on grid-scale energy storage, carbon capture, and sustainable manufacturing.

We're also excited about companies building tools for small businesses, modernizing government services, and creating new forms of education. If you're working on any of these problems, we'd love to hear from you.`,
    author: "Jared Friedman",
    authorSlug: "jared-friedman",
    date: "January 2026",
    tags: ["yc-news", "advice"],
  },
  {
    slug: "yc-partner-bookface-hours",
    title: "YC Partner Bookface Hours",
    excerpt:
      "We're launching a new initiative: weekly open office hours on Bookface where any YC founder can ask questions and get advice from partners.",
    content: `Starting this month, YC partners will be hosting weekly open office hours on Bookface. Any YC founder — past or present — can sign up for a 15-minute slot to discuss anything on their mind.

We've always believed that the YC community is our greatest asset. Bookface, our internal social network for YC founders, connects thousands of entrepreneurs who have been through the program. Now we're making it even easier to get advice from YC partners.

Each week, a different partner will host office hours. Topics can range from fundraising strategy to product development, hiring, or navigating a pivot. There are no restrictions on what you can ask about.

To sign up, visit the Bookface Hours page on Bookface and select an available time slot. We'll start with US-friendly time zones and expand based on demand. We're excited to deepen our connection with the YC alumni network.`,
    author: "Harj Taggar",
    authorSlug: "harj-taggar",
    date: "December 2025",
    tags: ["yc-news", "yc-events"],
  },
  {
    slug: "congratulations-to-equipmentshare",
    title: "Congratulations to EquipmentShare on Going Public",
    excerpt:
      "Today, EquipmentShare (YC W15) goes public. From Missouri to 373 locations nationwide, they've built the operating system construction has been missing.",
    content: `Today, EquipmentShare (YC W15) goes public. From Missouri to 373 locations nationwide, they've built the operating system construction has been missing — built by contractors, for contractors.

When Jabbok and Willy Schlacks joined YC in Winter 2015, they had a simple insight: the construction industry was stuck in the past. Equipment rental was inefficient, fleet management was done on paper, and there was no integrated technology platform for contractors.

Ten years later, EquipmentShare has transformed how construction companies manage their operations. Their platform handles everything from equipment tracking and telematics to fleet management and job costing. They serve thousands of contractors across the country.

Congrats to Jabbok, Willy, and the entire EquipmentShare team on this huge milestone. Your journey from a YC batch to the public markets is an inspiration to founders everywhere.`,
    author: "Garry Tan",
    authorSlug: "garry",
    date: "January 2026",
    tags: ["yc-news", "founder-stories"],
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "2026-demo-days",
    title: "2026 Demo Day Dates",
    excerpt:
      "We're excited to share the Demo Day dates for 2026 so founders, investors, and our broader community can plan ahead.",
    content: `We're excited to share the Demo Day dates for 2026 so founders, investors, and our broader community can plan ahead.

Winter 2026 Demo Day will take place on April 1-2, 2026. Summer 2026 Demo Day is scheduled for September 8-9, 2026. Both events will be held in San Francisco.

Demo Day is the culmination of the YC batch experience. Each company gets a few minutes to present their progress to a curated audience of top investors. It's one of the most efficient fundraising events in the startup world.

We continue to refine the Demo Day format to maximize value for both founders and investors. Last year, we introduced topical sessions that group companies by sector, making it easier for investors to find relevant opportunities. We'll be continuing this format in 2026.`,
    author: "Y Combinator",
    authorSlug: "yc",
    date: "December 2025",
    tags: ["yc-news", "yc-events"],
  },
  {
    slug: "meesho-goes-public",
    title: "Meesho Goes Public",
    excerpt:
      "Meesho goes public today. From S16 to IPO, they've built one of India's largest e-commerce platforms — empowering millions of small merchants.",
    content: `Meesho goes public today. From S16 to IPO, they've built one of India's largest e-commerce platforms — empowering millions of small merchants to grow their businesses.

When Vidit Aatrey and Sanjeev Barnwal joined YC in Summer 2016, they were building a platform to help small merchants in India sell products through social media. The idea was simple but powerful: give every small business owner the tools of an e-commerce giant.

Today, Meesho serves over 150 million customers and empowers millions of small merchants across India. They've become one of the most downloaded shopping apps in India, competing with established players by focusing on the underserved segment of the market.

Congrats to Vidit and Sanjeev on a decade of relentless building and listening to users! Your IPO is a testament to what's possible when you build for real people with real needs.`,
    author: "Tim Brady",
    authorSlug: "tim-brady",
    date: "December 2025",
    tags: ["yc-news", "founder-stories"],
  },
  {
    slug: "billiontoone",
    title:
      "BillionToOne Goes Public — The Startup That Made Genetic Testing Universal",
    excerpt:
      "Today, BillionToOne goes public, becoming YC's fourth publicly traded biotech company. 1 in 11 babies born in the US are tested with their technology.",
    content: `Today, BillionToOne goes public, becoming YC's fourth publicly traded biotech company. More importantly, they have built one of the most important genetic tests in the United States.

Today, 1 in 11 babies born in the US are tested with BillionToOne's fetal genetic test. Their technology is fundamentally more accurate than previous approaches, detecting genetic conditions earlier and with fewer false positives.

BillionToOne was founded by Oguzhan Atay, who went through YC and built the company from a single breakthrough in molecular counting technology. That breakthrough has now scaled to impact millions of families.

The journey from a YC batch to a public biotech company is extraordinarily rare. It requires not just technical innovation but also navigating FDA regulations, building clinical evidence, and scaling a laboratory operation. BillionToOne has done all of this while maintaining a relentless focus on accuracy and patient outcomes.`,
    author: "Jared Friedman",
    authorSlug: "jared-friedman",
    date: "November 2025",
    tags: ["yc-news", "biotech", "founder-stories"],
    imageUrl:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
  },
  {
    slug: "ycs-newest-visiting-partners",
    title: "Meet YC's Newest Visiting Partners",
    excerpt:
      "We're excited to announce that nine exceptional founders are joining us as Visiting Partners at YC.",
    content: `We're excited to announce that nine exceptional founders are joining us as Visiting Partners at YC: Matt Riley, Harshita Arora, Grey Baker, Christopher Golda, Raphael Schaad, Christina Gilbert, Francois Chaubard, Vivian Shen, and James Evans.

Our Visiting Partner program brings successful YC alumni back to YC to help the current batch. Visiting Partners work with founders during office hours, share their experiences at batch events, and provide hands-on mentorship.

Each of these founders has built something remarkable. They've scaled companies, navigated pivots, raised significant funding, and built products used by millions. Their diverse backgrounds span enterprise software, consumer apps, biotech, and AI.

The Visiting Partner program is one of the ways we ensure that the YC experience keeps getting better. By bringing back founders who have been through the trenches, we provide current batch companies with practical, battle-tested advice.`,
    author: "Harj Taggar",
    authorSlug: "harj-taggar",
    date: "October 2025",
    tags: ["yc-news"],
  },
  {
    slug: "build-onchain",
    title: "YC x Coinbase RFS: Build Onchain",
    excerpt:
      "We are entering the era of Fintech 3.0. Regulatory clarity, growing consumer adoption, and low-cost chains have paved the way for a golden age of building in crypto.",
    content: `We are entering the era of Fintech 3.0. Regulatory clarity, growing consumer adoption, and low-cost chains have paved the way for a golden age of building in crypto — and at YC, Base, and Coinbase, we want to fund builders to seize this moment.

The crypto industry has matured significantly. Layer 2 solutions have brought transaction costs down by orders of magnitude. Regulatory frameworks are becoming clearer in major markets. And institutional adoption is accelerating.

We're looking for founders building in payments infrastructure, DeFi protocols, identity verification, supply chain tracking, and any other application where blockchain technology provides a genuine advantage over traditional approaches.

If you're building onchain, we want to hear from you. Apply to YC and mention this RFS in your application. Coinbase and Base will also provide additional resources and support to selected companies.`,
    author: "Harj Taggar",
    authorSlug: "harj-taggar",
    date: "September 2025",
    tags: ["yc-news", "advice"],
  },
  {
    slug: "welcome-ankit",
    title:
      "Ankit Gupta Joins YC as General Partner, Bringing Deep ML Expertise",
    excerpt:
      "We're thrilled to announce that Ankit Gupta is joining YC as our newest General Partner.",
    content: `We're thrilled to announce that Ankit Gupta is joining YC as our newest General Partner. Ankit brings deep expertise in machine learning and a track record of building products used by hundreds of millions of people.

Before joining YC, Ankit was a co-founder of Pulse (acquired by LinkedIn), where he helped build one of the most popular news reading apps. After the acquisition, he led machine learning efforts at LinkedIn, working on the feed ranking and recommendations systems that serve over 900 million members.

Ankit has been advising YC companies informally for years, and we're excited to make it official. His expertise in ML and AI will be invaluable as more and more YC companies are building in this space.

As a General Partner, Ankit will lead group office hours, work with batch companies one-on-one, and help shape YC's strategy in AI and machine learning. Welcome, Ankit!`,
    author: "Garry Tan",
    authorSlug: "garry",
    date: "September 2025",
    tags: ["yc-news"],
  },
  {
    slug: "how-to-apply-to-yc",
    title: "How to Apply to YC: A Comprehensive Guide",
    excerpt:
      "Everything you need to know about the YC application process, from writing your application to preparing for the interview.",
    content: `Applying to YC is straightforward, but it helps to understand what we're looking for. Here's a comprehensive guide to the YC application process.

First, the basics: YC accepts applications on a rolling basis, but we have two main batches per year (Winter and Summer). You can apply at any stage — from idea to revenue. We've funded companies at every stage, from two people with an idea to companies with millions in ARR.

The application itself is designed to be completed in a few hours. We ask about your team, your idea, your progress, and your market. The most important thing is to be clear and concise. We read thousands of applications, so clarity is critical.

If your application advances, you'll be invited to a 10-minute interview with YC partners. This is a conversation, not a presentation. We'll ask questions about your idea, your market, and your team. The best interviews feel like a productive brainstorming session.

Our advice: be yourself, be honest about what you know and don't know, and focus on what makes your team uniquely suited to solve this problem.`,
    author: "Dalton Caldwell",
    authorSlug: "dalton-caldwell",
    date: "August 2025",
    tags: ["admissions", "advice"],
  },
  {
    slug: "startup-school-2025",
    title: "What We Learned From Startup School 2025",
    excerpt:
      "Startup School 2025 was our biggest ever, with over 100,000 founders participating. Here's what we learned and what's next.",
    content: `Startup School 2025 was our biggest ever, with over 100,000 founders participating from more than 180 countries. Here's what we learned.

The most popular content was practical and tactical. Founders don't need more inspiration — they need specific advice on how to talk to users, how to build an MVP, and how to find product-market fit. Our most-watched lectures were on customer development and pricing strategy.

We also saw tremendous demand for AI-focused content. More than 60% of participants were building AI-powered products, and they wanted specific guidance on model selection, fine-tuning, evaluation, and deployment.

Going forward, we're making Startup School a year-round program with more live interaction. We'll be adding peer groups, live office hours with YC partners, and hands-on workshops. If you're a founder who wants to learn from the YC community, Startup School is the best way to start.`,
    author: "Y Combinator",
    authorSlug: "yc",
    date: "July 2025",
    tags: ["startup-school", "yc-events"],
  },
  {
    slug: "female-founders-conference-2025",
    title: "Highlights from the Female Founders Conference 2025",
    excerpt:
      "The 2025 Female Founders Conference brought together hundreds of women building the future. Here are the key takeaways.",
    content: `The 2025 Female Founders Conference was one of our best yet. Hundreds of women founders gathered in San Francisco for a day of talks, panels, and networking. Here are the highlights.

The conference opened with a keynote from a founder who scaled her company from a YC batch to over $500M in revenue. Her message was clear: the best time to start a company is now, and the best way to succeed is to focus relentlessly on your customers.

Panel discussions covered fundraising in a changing market, building diverse teams, navigating the challenges unique to women in tech, and leveraging AI to build faster. The most lively discussion was about the evolving relationship between founders and investors.

We also hosted our first ever "pitch practice" session, where founders got live feedback on their pitches from YC partners. The energy in the room was incredible — founders helping founders, which is what YC is all about.`,
    author: "Y Combinator",
    authorSlug: "yc",
    date: "June 2025",
    tags: ["yc-events", "female-founders"],
  },
  {
    slug: "advice-for-first-time-founders",
    title: "Advice for First-Time Founders from YC Partners",
    excerpt:
      "We asked every YC partner for their single best piece of advice for first-time founders. Here's what they said.",
    content: `We asked every YC partner for their single best piece of advice for first-time founders. The responses were remarkably consistent.

The most common advice: talk to your users. It sounds obvious, but most first-time founders don't do it enough. They build in isolation, relying on assumptions instead of data. The founders who succeed are the ones who are in constant conversation with their customers.

Second most common: launch early. Your product doesn't need to be perfect. It needs to be good enough to learn from. The faster you get real users, the faster you learn what actually matters.

Third: don't over-optimize for fundraising. The best way to raise money is to build something people want. Investors are looking for traction, and traction comes from focused execution, not perfect pitch decks.

Finally: take care of your co-founder relationship. The number one reason startups fail is co-founder conflict. Invest in communication, align on expectations, and address disagreements early.`,
    author: "Michael Seibel",
    authorSlug: "michael-seibel",
    date: "May 2025",
    tags: ["advice", "essay"],
  },
  {
    slug: "work-at-a-startup-2025-update",
    title: "Work at a Startup: 2025 Year in Review",
    excerpt:
      "Work at a Startup helped over 50,000 candidates find roles at YC companies in 2025. Here's what we learned about startup hiring.",
    content: `Work at a Startup, our job platform connecting talented candidates with YC companies, had a record year in 2025. Over 50,000 candidates found roles through the platform, and more than 2,000 YC companies actively hired.

The most in-demand roles were AI/ML engineers, full-stack developers, and product managers. Salaries for AI engineers at early-stage startups rose significantly, reflecting the intense competition for talent in this space.

We also saw growing demand for non-technical roles: sales, operations, and customer success. As YC companies mature, they need people who can build scalable go-to-market operations.

One trend we're watching: more candidates are choosing startups over large tech companies. The appeal of equity, meaningful work, and the chance to build something from scratch is resonating with top talent. If you're looking for your next role, check out workatastartup.com.`,
    author: "Y Combinator",
    authorSlug: "yc",
    date: "April 2025",
    tags: ["work-at-a-startup", "yc-news"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.tags.includes(tag));
}

export function getTagLabel(slug: string): string {
  const tag = TAGS.find((t) => t.slug === slug);
  return tag ? tag.label : slug;
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, limit);

  return BLOG_POSTS.filter(
    (post) =>
      post.slug !== currentSlug &&
      post.tags.some((tag) => current.tags.includes(tag))
  ).slice(0, limit);
}
