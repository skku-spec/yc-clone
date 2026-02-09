export type ContentType = "Video" | "Essay" | "Podcast" | "Guide";

export type Category =
  | "Fundraising"
  | "Product"
  | "Growth"
  | "AI"
  | "Leadership"
  | "Design"
  | "Engineering"
  | "Sales"
  | "Culture"
  | "Hiring"
  | "Legal"
  | "Strategy"
  | "Founder Stories"
  | "Hard Tech";

export interface LibraryItem {
  slug: string;
  title: string;
  author: string;
  authorRole?: string;
  type: ContentType;
  categories: Category[];
  description: string;
  body: string;
  date: string;
  views?: string;
  duration?: string;
  youtubeId?: string;
  featured?: boolean;
  thumbnailColor: string;
}

export const categories: Category[] = [
  "Fundraising",
  "Product",
  "Growth",
  "AI",
  "Leadership",
  "Design",
  "Engineering",
  "Sales",
  "Culture",
  "Hiring",
  "Legal",
  "Strategy",
  "Founder Stories",
  "Hard Tech",
];

export const libraryItems: LibraryItem[] = [
  {
    slug: "how-to-get-startup-ideas",
    title: "How to Get Startup Ideas",
    author: "Paul Graham",
    authorRole: "Co-founder, Y Combinator",
    type: "Essay",
    categories: ["Product", "Strategy"],
    description:
      "The way to get startup ideas is not to try to think of startup ideas. It\u2019s to look for problems, preferably problems you have yourself.",
    body: `The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself.

The very best startup ideas tend to have three things in common: they're something the founders themselves want, that they themselves can build, and that few others realize are worth doing. Microsoft, Apple, Yahoo, Google, and Facebook all began this way.

Why is it so important to work on a problem you have? Among other things, it ensures the problem really exists. It sounds obvious to say you should only work on problems that exist. And yet by far the most common mistake startups make is to solve problems no one has.

If you look at the way successful founders have had their ideas, it's generally the result of some external stimulus hitting a prepared mind. Bill Gates and Paul Allen heard about the Altair and thought "I bet we could write a Basic interpreter for it." Drew Houston realized he'd forgotten his USB stick and thought "I really need to make my files live online." Resistance to new things that are introduced is often a sign they're not solving a real problem. Resistance to a new operating system is a sign that the old one is working fine.

How do you tell whether there's a path out of an idea? How do you tell whether something is the germ of a giant company, or just a niche product? Often you can't. The founders of Airbnb didn't realize at first how big a market they were tapping. They initially had the much narrower idea of renting air mattresses on people's floors during conferences. The idea grew as they discovered how much demand there was.

Live in the future, then build what's missing.`,
    date: "November 2012",
    featured: true,
    thumbnailColor: "#e8e4dc",
  },
  {
    slug: "do-things-that-dont-scale",
    title: "Do Things That Don\u2019t Scale",
    author: "Paul Graham",
    authorRole: "Co-founder, Y Combinator",
    type: "Essay",
    categories: ["Growth", "Strategy"],
    description:
      "One of the most common types of advice we give at Y Combinator is to do things that don\u2019t scale.",
    body: `One of the most common types of advice we give at Y Combinator is to do things that don't scale. A lot of would-be founders believe that startups either take off or don't. You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist.

Actually startups take off because the founders make them take off. There may be a handful that just grew by themselves, but usually it takes some sort of push to get them going. A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.

The most common unscalable thing founders have to do at the start is to recruit users manually. Nearly all startups have to. You can't wait for users to come to you. You have to go out and get them.

Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone should have been able to sit back and wait for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition.

Startups building things for other startups have a big pool of potential users in the other companies we've funded. None used that more than Stripe. At YC we use the term "Collison installation" for the technique they invented. More diffident founders ask "Will you try our beta?" and if the answer is yes, they say "Great, we'll send you a link." But the Collison brothers weren't going to wait. When anyone expressed interest, they'd say "Right then, give me your laptop" and set them up on the spot.`,
    date: "July 2013",
    thumbnailColor: "#dce8dc",
  },
  {
    slug: "startup-equals-growth",
    title: "Startup = Growth",
    author: "Paul Graham",
    authorRole: "Co-founder, Y Combinator",
    type: "Essay",
    categories: ["Growth", "Fundraising"],
    description:
      "A startup is a company designed to grow fast. Being newly founded does not in itself make a company a startup.",
    body: `A startup is a company designed to grow fast. Being newly founded does not in itself make a company a startup. Nor is it necessary for a startup to work on technology, or take venture funding, or have some sort of "exit." The only essential thing is growth. Everything else we associate with startups follows from growth.

If you want to start one it's important to understand that. Startups are so hard that you can't be pointed off to the side and hope to succeed. You have to know that growth is what you're after. The good news is, if you get growth, everything else tends to fall into place. Which means you can use growth like a compass to make almost every decision you face.

The growth of a successful startup usually has three phases. There's an initial period of slow or no growth while the startup tries to figure out what it's doing. As the startup figures out how to make something lots of people want and how to reach those people, there's a period of rapid growth. Eventually a successful startup will grow into a big company. Growth will slow, partly due to internal limits and partly because the company is starting to bump up against the limits of the markets it serves.

Together these three phases produce an S-curve. The phase whose growth defines the startup is the second one, the ascent. Its length and slope determine how big the company will be.

The slope is the company's growth rate. If there's one number every founder should always know, it's the company's growth rate. That's the measure of a startup. If you don't know that number, you don't even know whether you're doing well or badly.`,
    date: "September 2012",
    thumbnailColor: "#dce0e8",
  },
  {
    slug: "how-to-start-a-startup",
    title: "How to Start a Startup",
    author: "Sam Altman",
    authorRole: "Former President, Y Combinator",
    type: "Video",
    categories: ["Strategy", "Product", "Growth"],
    description:
      "Everything we know about how to start a startup, compiled from the CS183B lecture series at Stanford.",
    body: `This lecture series covers everything we know about how to start a startup. The speakers are some of the most successful startup founders and investors in the world.

The course covers four key areas: Ideas, Products, Teams, and Execution. We believe these are the fundamentals of starting a successful startup.

Part I: Ideas, Products, and Teams
The first few lectures cover how to come up with good ideas, how to build great products, and how to assemble the right team.

Part II: Growth
The next section covers growth strategies, including how to acquire your first users, how to measure growth, and how to scale.

Part III: Building a Company
The later lectures discuss company building, culture, management, hiring, and dealing with the challenges of rapid growth.

Part IV: Fundraising and Legal
The final lectures cover fundraising, investor relations, and legal considerations for startups.

Each lecture is approximately one hour long and features a different speaker sharing their expertise and experience.`,
    date: "2014",
    duration: "20 lectures",
    youtubeId: "CBYhVcO4WgI",
    thumbnailColor: "#e8dce0",
  },
  {
    slug: "how-to-talk-to-users",
    title: "How to Talk to Users",
    author: "Eric Migicovsky",
    authorRole: "YC Partner, Founder of Pebble",
    type: "Video",
    categories: ["Product", "Growth"],
    description:
      "The best founders maintain a direct connection to their users throughout the life of their company. How do you talk to users and what do you ask them?",
    body: `The best founders maintain a direct connection to their users throughout the life of their company. They talk to users before they even start building, while building, and after they launch.

Here are the key principles for talking to users effectively:

1. Talk about their life, not your idea
When you start with "Let me tell you about my idea," you're asking for opinions, not facts. Instead, ask about their life and their problems.

2. Ask about specifics in the past instead of generics or opinions about the future
Bad: "Would you use a product that does X?"
Good: "Tell me about the last time you encountered this problem."

3. Talk less, listen more
The goal is to extract information from the other person. You should be listening 90% of the time.

4. Get commitments and advancement
At the end of the conversation, you should push for some kind of commitment. This could be a letter of intent, a deposit, or an agreement to participate in a beta.

5. Find your best first customer
The best first customers are people who have the problem most acutely and are actively looking for a solution.

The Mom Test by Rob Fitzpatrick is an excellent resource for learning how to conduct user interviews properly.`,
    date: "August 2019",
    duration: "21:44",
    youtubeId: "MT4Ig2uqjTc",
    views: "850K",
    thumbnailColor: "#e0e8dc",
  },
  {
    slug: "startup-mechanics",
    title: "Startup Mechanics",
    author: "Kirsty Nathoo",
    authorRole: "CFO, Y Combinator",
    type: "Video",
    categories: ["Legal", "Fundraising"],
    description:
      "Everything you need to know about the mechanics of starting a startup: incorporation, equity, fundraising, and more.",
    body: `Starting a startup involves a lot of mechanics that founders often don't think about until it's too late. This guide covers the essential mechanics every founder needs to understand.

Incorporation:
Most startups should incorporate as a Delaware C-Corporation. This is the standard structure that investors expect and makes fundraising much easier.

Equity Split:
Divide equity fairly among co-founders, and make sure everyone is on a vesting schedule. The standard is 4-year vesting with a 1-year cliff.

83(b) Election:
If you receive restricted stock, you must file an 83(b) election within 30 days. This is one of the most important tax elections you'll make.

SAFE Notes:
The SAFE (Simple Agreement for Future Equity) is the most common instrument for early-stage fundraising. It's simpler and faster than traditional convertible notes.

Hiring:
When you start hiring, make sure to set up proper payroll, get workers' compensation insurance, and understand employment law in your state.

Bookkeeping:
Keep clean books from day one. This will save you enormous headaches when it comes time to raise funding or file taxes.`,
    date: "March 2019",
    duration: "35:17",
    youtubeId: "LVKn4Q3JwQA",
    views: "420K",
    thumbnailColor: "#e8e0dc",
  },
  {
    slug: "how-to-plan-an-mvp",
    title: "How to Plan an MVP",
    author: "Michael Seibel",
    authorRole: "Managing Director, Y Combinator",
    type: "Video",
    categories: ["Product", "Strategy"],
    description:
      "Your MVP should be the simplest version of your product that delivers value to your first users. Here\u2019s how to plan it.",
    body: `An MVP (Minimum Viable Product) is the simplest version of your product that you can launch to start getting feedback from users.

The key principles of building an MVP:

1. Launch quickly
Your goal should be to get something into users' hands within weeks, not months. Speed of iteration is the primary advantage that startups have over large companies.

2. Scope down aggressively  
Your MVP should have the minimum set of features needed to solve the core problem. If you can cut a feature and still deliver value, cut it.

3. Talk to users before and after
Before building, talk to potential users to understand their problems. After launching, talk to them again to understand what's working and what isn't.

4. Don't worry about scaling
Your MVP doesn't need to scale. It just needs to work well enough for your first users. You can worry about scaling later.

5. Manually supplement your product
It's perfectly fine to do things manually that you'll eventually automate. This is a great way to learn what your users actually need.

The biggest mistake founders make with MVPs is making them too complex. Remember: the 'M' stands for Minimum.`,
    date: "January 2020",
    duration: "18:23",
    youtubeId: "1hHMwLxN6EM",
    views: "1.2M",
    thumbnailColor: "#dcdce8",
  },
  {
    slug: "how-to-get-your-first-customers",
    title: "How to Get Your First Customers",
    author: "Gustaf Alstr\u00f6mer",
    authorRole: "YC Partner",
    type: "Video",
    categories: ["Growth", "Sales"],
    description:
      "Getting your first customers is one of the hardest challenges for any startup. Here are the strategies that work.",
    body: `Getting your first customers is critical. Here's what works:

1. Do things that don't scale
Reach out individually to potential customers. Send personal emails, make phone calls, go to events. The first 10-100 customers should each be acquired through personal effort.

2. Find the watering holes
Where do your potential customers hang out? Online forums, conferences, social media groups? Go there and be helpful before you try to sell.

3. Leverage your network
Ask friends, family, and former colleagues. Not necessarily to be customers themselves, but to introduce you to people who might be.

4. Build in public
Share your progress publicly. Write blog posts, tweet about what you're building, create content that attracts your target audience.

5. Offer exceptional service
When you have very few customers, you can afford to treat each one like royalty. This creates word-of-mouth that's more powerful than any marketing campaign.

Remember: your first customers are not just buyers, they're partners in building your product. Treat them accordingly.`,
    date: "March 2020",
    duration: "15:44",
    youtubeId: "hyYCn_kAngI",
    views: "75K",
    thumbnailColor: "#e4dce8",
  },
  {
    slug: "how-to-set-kpis-and-goals",
    title: "How to Set KPIs and Goals",
    author: "Anu Hariharan",
    authorRole: "Managing Director, Y Combinator Continuity",
    type: "Video",
    categories: ["Growth", "Leadership"],
    description:
      "Setting the right KPIs is critical for any startup. Learn how to choose the metrics that matter most and set goals that drive growth.",
    body: `The right KPIs (Key Performance Indicators) tell you whether your startup is on track. Here's how to set them:

1. Choose a primary metric
Every startup should have ONE primary metric that captures the essence of what you're building. For most startups, this is either revenue or active users.

2. Set weekly growth targets
At YC, we ask founders to set a weekly growth target of 5-7% for their primary metric. This compounds incredibly fast—7% weekly growth means 33x annual growth.

3. Secondary metrics matter too
While you focus on your primary metric, keep an eye on secondary metrics like churn, engagement, and unit economics.

4. Track cohort-based retention
Don't just look at overall numbers. Break your users into cohorts by sign-up date and track how each cohort retains over time.

5. Be honest with your data
It's tempting to cherry-pick metrics that make you look good. Resist this temptation. The whole point of tracking KPIs is to understand reality.

6. Review weekly
Set aside time every week to review your metrics, understand what changed, and decide what to do about it.`,
    date: "June 2019",
    duration: "28:45",
    youtubeId: "lL3DNq_MpeU",
    views: "310K",
    thumbnailColor: "#dce8e4",
  },
  {
    slug: "how-to-raise-a-seed-round",
    title: "How to Raise a Seed Round",
    author: "Geoff Ralston",
    authorRole: "Former President, Y Combinator",
    type: "Guide",
    categories: ["Fundraising"],
    description:
      "A comprehensive guide to raising your seed round, from preparation through closing.",
    body: `Raising a seed round is a critical milestone for most startups. Here's a comprehensive guide:

Preparation:
Before you start fundraising, make sure you have a clear story about what you're building, why it matters, and why you're the right team to do it.

How Much to Raise:
Most seed rounds today are between $1M and $4M. Raise enough to achieve specific milestones, typically 18-24 months of runway.

Instruments:
The most common instrument for seed rounds is the SAFE (Simple Agreement for Future Equity). It's simpler and faster than convertible notes or priced rounds.

Valuation:
Seed valuations typically range from $5M to $20M post-money, depending on traction, team, and market.

The Pitch:
Your pitch should cover: the problem, your solution, traction, team, market size, and what you're raising. Keep it concise.

The Process:
1. Build a target list of 50-100 investors
2. Get warm introductions
3. Take meetings in parallel, not sequentially
4. Create urgency by setting a timeline
5. Get term sheets and close quickly

After the Round:
Send monthly investor updates. Keep your investors informed and engaged.`,
    date: "January 2020",
    thumbnailColor: "#e8dce0",
  },
  {
    slug: "vertical-ai-agents-could-be-10x-bigger-than-saas",
    title: "Vertical AI Agents Could Be 10X Bigger Than SaaS",
    author: "Jared Friedman",
    authorRole: "YC Partner",
    type: "Video",
    categories: ["AI", "Strategy"],
    description:
      "Why vertical AI agents represent a massive opportunity that could dwarf the SaaS revolution.",
    body: `The SaaS revolution created trillions of dollars in value by replacing on-premise software with cloud-based solutions. We believe vertical AI agents represent an even bigger opportunity.

Why? Because while SaaS automated workflows, AI agents can automate entire jobs. The addressable market isn't just software budgets—it's labor budgets.

What are Vertical AI Agents?
Vertical AI agents are AI systems designed to handle specific tasks or roles within a particular industry. Unlike general-purpose AI assistants, they're deeply specialized.

Examples:
- AI agents that handle customer support for e-commerce
- AI agents that do bookkeeping and tax preparation
- AI agents that manage clinical trials
- AI agents that handle legal document review

Why They're Bigger Than SaaS:
1. The market is labor, not software. Global labor spend is 50x larger than software spend.
2. They provide 10x more value. Automating a $100K/year employee is worth far more than replacing a $10K/year SaaS tool.
3. They can serve markets too small for SaaS. Many industries were too small for custom software but are perfect for AI agents.

How to Build Them:
Start with one specific task, nail it completely, then expand. The key is going deep, not wide.`,
    date: "September 2024",
    duration: "22:43",
    youtubeId: "ASABxNenD_U",
    views: "945K",
    thumbnailColor: "#e0dce8",
  },
  {
    slug: "how-to-get-ai-startup-ideas",
    title: "How To Get AI Startup Ideas",
    author: "Jared Friedman",
    authorRole: "YC Partner",
    type: "Video",
    categories: ["AI", "Strategy", "Product"],
    description:
      "A framework for finding and evaluating AI startup ideas in the current landscape.",
    body: `AI is creating the biggest wave of new startup opportunities since the internet. Here's how to find the best ones:

1. Look for tasks, not tools
Don't build "AI for X." Instead, find specific tasks that AI can now do better than humans and build around those.

2. The unbundling opportunity
Large language models are general-purpose, but the best businesses will be specialized. Think about how Craigslist got unbundled into dozens of vertical companies.

3. Where to look
- Tasks that require reading and writing
- Tasks that require analyzing data
- Tasks that require following procedures
- Tasks that are currently done by expensive professionals

4. The 10x test
Can AI make this task 10x cheaper, faster, or better? If not, it's probably not a good AI startup idea.

5. Defensibility
The common concern is "what if OpenAI just builds this?" The answer: vertical expertise, proprietary data, and workflow integration create strong moats.

6. Start with the workflow
Don't start with the AI model. Start with understanding the workflow you're trying to automate, then figure out what AI capabilities you need.`,
    date: "December 2024",
    duration: "43:28",
    youtubeId: "6IFR3X7pQM0",
    views: "265K",
    thumbnailColor: "#dce4e8",
  },
  {
    slug: "how-to-build-the-future-sam-altman",
    title: "How To Build The Future: Sam Altman",
    author: "Garry Tan",
    authorRole: "CEO, Y Combinator",
    type: "Video",
    categories: ["AI", "Founder Stories", "Leadership"],
    description:
      "Sam Altman discusses OpenAI, the future of AI, and what it means for startups.",
    body: `In this episode of How To Build The Future, Y Combinator CEO Garry Tan sits down with Sam Altman to discuss the trajectory of AI development, the founding story of OpenAI, and what the future holds for startups in an AI-first world.

Key topics covered:
- The early days of OpenAI and the decision to build GPT
- How ChatGPT changed everything overnight
- The relationship between AI capabilities and startup opportunities
- Why Sam believes this is the best time ever to start a company
- The importance of building things that leverage AI's strengths
- How to think about AGI timelines and their impact on business
- The future of work in an AI-powered world

Notable quotes:
"The cost of intelligence is going to zero. When that happens, every business that depends on human intelligence becomes reimaginable."

"I think we're going to look back on this era as the most important technological transition in human history. And the startups founded right now will be the ones that define the next century."`,
    date: "October 2024",
    duration: "15:58",
    youtubeId: "xXRMRE_-dLM",
    views: "687K",
    thumbnailColor: "#e8dce4",
  },
  {
    slug: "andrej-karpathy-software-is-changing",
    title: "Andrej Karpathy: Software Is Changing (Again)",
    author: "Andrej Karpathy",
    authorRole: "Founding member, OpenAI",
    type: "Video",
    categories: ["AI", "Engineering"],
    description:
      "Andrej Karpathy explains how AI is fundamentally changing the nature of software development.",
    body: `Andrej Karpathy, founding member of OpenAI and former Director of AI at Tesla, discusses how software is undergoing its most fundamental transformation since the invention of programming.

The key insight: We're moving from Software 1.0 (explicit programming) to Software 2.0 (neural networks) to Software 3.0 (LLM-powered natural language programming).

In Software 1.0, humans write explicit instructions. In Software 2.0, humans design architectures and datasets, and the optimization writes the code (weights). In Software 3.0, humans describe what they want in natural language, and AI writes the code.

This has profound implications:
1. The barrier to creating software drops dramatically
2. The nature of "programming" changes fundamentally
3. New kinds of applications become possible
4. The relationship between developers and their tools transforms

Karpathy argues that we're in the very early stages of this transition and that the companies that figure out how to build great Software 3.0 products will become the next generation of tech giants.

The talk includes practical advice for developers on how to adapt to this new paradigm and leverage AI tools effectively in their work.`,
    date: "July 2024",
    duration: "61:13",
    youtubeId: "LBWaGeFjjCk",
    views: "2.3M",
    thumbnailColor: "#dce8e0",
  },
  {
    slug: "how-to-find-a-co-founder",
    title: "How to Find a Co-Founder",
    author: "Harj Taggar",
    authorRole: "YC Partner, Founder of Triplebyte",
    type: "Video",
    categories: ["Hiring", "Strategy"],
    description:
      "Finding the right co-founder is one of the most important decisions you\u2019ll make. Here\u2019s how to do it right.",
    body: `Finding a co-founder is one of the most important decisions you'll make as a founder. Here's what works:

Where to Find Co-Founders:
1. People you've worked with before (strongest signal)
2. People you went to school with
3. YC's Co-Founder Matching platform
4. Startup communities and events
5. Open source communities

What to Look For:
- Complementary skills (if you're technical, find someone with business skills, and vice versa)
- Shared values and work ethic
- Someone you genuinely enjoy spending time with
- Resilience and grit
- Intellectual honesty

Red Flags:
- Someone who only wants to be a "CEO" without doing real work
- Misaligned commitment levels
- Someone who can't handle disagreement
- Vastly different risk tolerances

How to "Date" Before "Marrying":
1. Work on a small project together first
2. Have hard conversations about equity, commitment, and expectations
3. Discuss worst-case scenarios
4. Set clear expectations about roles and responsibilities

Remember: co-founder breakups are one of the top reasons startups fail. Take this decision seriously.`,
    date: "May 2020",
    duration: "13:02",
    youtubeId: "prKi3-rUPHc",
    views: "107K",
    thumbnailColor: "#e8e4dc",
  },
  {
    slug: "the-real-product-market-fit",
    title: "The Real Product Market Fit",
    author: "Michael Seibel",
    authorRole: "Managing Director, Y Combinator",
    type: "Video",
    categories: ["Product", "Growth"],
    description:
      "What product-market fit actually looks like, and how to know when you\u2019ve found it.",
    body: `Everyone talks about product-market fit, but few people understand what it actually looks like when you have it.

What PMF Feels Like:
When you have product-market fit, you know it. Users are pulling the product out of your hands. You're struggling to keep up with demand. Growth is organic and accelerating.

What PMF Does NOT Look Like:
- Having to convince people to use your product
- Growth that only comes from paid marketing
- High churn rates
- Users who sign up but don't come back

How to Find PMF:
1. Start with a clear hypothesis about who your customer is and what problem you're solving
2. Build the simplest version of your solution
3. Get it in front of users as quickly as possible
4. Measure retention, not just sign-ups
5. Iterate rapidly based on feedback

The Most Common Mistake:
Founders often think they have PMF when they don't. Signs of false PMF:
- Revenue from a single large customer
- Growth driven entirely by press coverage
- Users who say they like it but don't actually use it

Marc Andreessen famously said: "The customers are buying the product just as fast as you can make it. Money is piling up in your company checking account."

If that's not happening, keep iterating.`,
    date: "February 2020",
    duration: "24:32",
    youtubeId: "FBOLk9s9Ci4",
    views: "480K",
    thumbnailColor: "#e0e4e8",
  },
  {
    slug: "how-to-pitch-your-startup",
    title: "How to Pitch Your Startup",
    author: "Kevin Hale",
    authorRole: "YC Partner, Founder of Wufoo",
    type: "Video",
    categories: ["Fundraising", "Strategy"],
    description:
      "A masterclass in how to pitch your startup to investors, from the creator of one of YC\u2019s most beloved companies.",
    body: `A great pitch does three things: it tells investors what you do, why it matters, and why you're going to win.

The Structure of a Great Pitch:
1. Problem (30 seconds): What's the problem? Make it vivid and relatable.
2. Solution (30 seconds): What do you do? Keep it simple.
3. Traction (1 minute): What evidence do you have that this is working?
4. Market (30 seconds): How big is the opportunity?
5. Team (30 seconds): Why are you the right people?
6. Ask (15 seconds): What are you raising and what will you do with it?

Common Pitfalls:
- Starting with your team instead of the problem
- Using jargon or buzzwords
- Spending too long on the solution without showing traction
- Not being specific about numbers
- Not practicing enough

The Two-Minute Rule:
If you can't explain your company clearly in two minutes, you don't understand it well enough yet.

Demo vs. Deck:
If possible, show a demo. A working product is worth a thousand slides.

Remember: investors see hundreds of pitches. Your goal is to be memorable for the right reasons.`,
    date: "September 2019",
    duration: "19:50",
    youtubeId: "17XZGUX_9iM",
    views: "720K",
    thumbnailColor: "#dce0e4",
  },
  {
    slug: "pricing-your-product",
    title: "Pricing Your Product",
    author: "Kevin Hale",
    authorRole: "YC Partner, Founder of Wufoo",
    type: "Video",
    categories: ["Product", "Sales", "Growth"],
    description:
      "How to price your product for maximum growth and revenue. Most startups charge too little.",
    body: `Most startups charge too little. Here's how to think about pricing:

The #1 Rule: Charge More
Almost every startup we see at YC is undercharging. If no one complains about your price, you're not charging enough.

Value-Based Pricing:
Don't price based on your costs. Price based on the value you deliver. If you save a customer $100,000/year, charging $10,000 is a steal.

The 10x Rule:
Your product should deliver at least 10x the value of its price. This makes the purchase decision easy.

Pricing Strategies:
1. Start high and come down (easier than going up)
2. Offer multiple tiers
3. Price annually when possible (reduces churn)
4. Consider usage-based pricing for products with variable usage

Common Mistakes:
- Offering a free tier too early
- Not raising prices as you add value
- Copying competitor pricing without understanding why
- Making pricing too complicated

When to Change Pricing:
- When conversion rates are too high (you're too cheap)
- When conversion rates are too low (you might be too expensive, or more likely, not delivering enough value)
- When you add significant new features
- When you move upmarket`,
    date: "November 2019",
    duration: "17:46",
    youtubeId: "oQw7LV-YfyU",
    views: "127K",
    thumbnailColor: "#e4e0e8",
  },
  {
    slug: "how-to-improve-conversion-rates",
    title: "How to Improve Conversion Rates",
    author: "Gustaf Alstr\u00f6mer",
    authorRole: "YC Partner",
    type: "Video",
    categories: ["Growth", "Product"],
    description:
      "Tactical advice on improving your startup\u2019s conversion rates at every stage of the funnel.",
    body: `Conversion rate optimization is one of the highest-leverage activities for any startup. Small improvements in conversion compound dramatically over time.

The Conversion Funnel:
1. Awareness → Visit (traffic)
2. Visit → Sign-up (registration)
3. Sign-up → Activation (first value moment)
4. Activation → Retention (ongoing use)
5. Retention → Revenue (payment)
6. Revenue → Referral (word of mouth)

Key Principles:
- Measure each step separately
- Focus on the biggest drop-off first
- A/B test systematically
- Talk to users who dropped off to understand why

Quick Wins:
1. Simplify your homepage copy
2. Reduce form fields
3. Add social proof
4. Speed up your site
5. Fix broken flows
6. Add clear CTAs

The Activation Metric:
Find the "aha moment" — the specific action that correlates with long-term retention. For Facebook, it was connecting with 7 friends in 10 days. For Slack, it was sending 2,000 messages.

Once you know your activation metric, optimize everything to get new users to that moment as quickly as possible.`,
    date: "April 2020",
    duration: "23:18",
    youtubeId: "PfBqSfVKa2U",
    views: "46K",
    thumbnailColor: "#dce4e0",
  },
  {
    slug: "elon-musk-how-to-build-the-future",
    title: "Elon Musk: How to Build the Future",
    author: "Elon Musk",
    authorRole: "CEO, Tesla & SpaceX",
    type: "Video",
    categories: ["Founder Stories", "Hard Tech", "Leadership"],
    description:
      "Elon Musk discusses digital superintelligence, multiplanetary life, and how to be useful.",
    body: `In this conversation, Elon Musk shares his perspective on the most important problems facing humanity and how founders should think about building the future.

Topics covered:
- The case for becoming multiplanetary
- The development of artificial general intelligence
- Sustainable energy and the transition to electric vehicles
- The importance of manufacturing and hardware
- How to think about risk when building ambitious companies
- Why most people underestimate what they can accomplish in a decade

On starting companies:
"You should only start a company if you feel compelled to. If you need to be motivated to start a company, don't do it. It should feel like something you have to do."

On hard problems:
"I think there's a tendency for people to work on incremental improvements rather than fundamental breakthroughs. The world needs people working on the hard problems."

On persistence:
"There were times at both Tesla and SpaceX where things were so bad that I thought we were going to die. But we didn't, because we kept going."

On building teams:
"Every person you hire should be someone you'd want to work for. That's the bar."`,
    date: "July 2024",
    duration: "39:32",
    youtubeId: "Fs_U9jlVRkw",
    views: "643K",
    thumbnailColor: "#e8dce8",
  },
  {
    slug: "design-for-startups",
    title: "Why Design Matters for Startups",
    author: "Kat Manalac",
    authorRole: "YC Partner",
    type: "Video",
    categories: ["Design", "Product"],
    description:
      "Why design is a competitive advantage for startups and how to get it right from the beginning.",
    body: `Design isn't just about making things look pretty. It's about making things work well. Here's why design matters for startups:

1. First Impressions Count
Users form opinions about your product in seconds. A well-designed product signals competence and trustworthiness.

2. Good Design Reduces Friction
Every point of friction in your product is a place where users drop off. Good design eliminates friction and makes the path to value as smooth as possible.

3. Design Is a Competitive Advantage
When two products have similar features, users choose the one that's better designed. Design can be your moat.

How to Get Design Right (Even Without a Designer):
1. Copy great designs (don't try to be original at first)
2. Keep it simple (when in doubt, remove elements)
3. Use established design systems (like Tailwind, Shadcn)
4. Focus on the core user flow first
5. Get feedback from real users, not other founders

Design Principles for Startups:
- Clarity over cleverness
- Consistency is key
- White space is your friend
- Typography matters more than you think
- Color should serve a purpose

Resources:
- Refactoring UI by Steve Schoger and Adam Wathan
- Laws of UX by Jon Yablonski
- Design of Everyday Things by Don Norman`,
    date: "October 2023",
    duration: "20:44",
    youtubeId: "bVRmU3cDAng",
    views: "50K",
    thumbnailColor: "#e0dce4",
  },
  {
    slug: "andrew-ng-building-faster-with-ai",
    title: "Andrew Ng: Building Faster with AI",
    author: "Andrew Ng",
    authorRole: "Founder, DeepLearning.AI",
    type: "Video",
    categories: ["AI", "Engineering", "Leadership"],
    description:
      "Andrew Ng shares his framework for building AI products and how founders can move faster with AI.",
    body: `Andrew Ng, one of the most influential figures in AI, shares his framework for building AI products and companies.

Key Insights:

1. AI is the new electricity
Just as electricity transformed every industry 100 years ago, AI is going to transform every industry today. The question isn't whether AI will impact your industry—it's how soon.

2. The AI development cycle
Traditional software: Idea → Code → Test → Deploy
AI software: Idea → Data → Model → Test → Deploy

The data step is what makes AI development different. Spend more time on data quality than model architecture.

3. Start with small, focused projects
Don't try to build an "AI platform." Start with one specific problem, solve it well, then expand.

4. The 80/20 rule for AI
80% of the value in most AI projects comes from relatively simple techniques (supervised learning, basic NLP). Only 20% requires cutting-edge research.

5. Build an AI team
You need three types of people:
- ML engineers who can build models
- Data engineers who can build data pipelines
- Domain experts who understand the problem

6. Think about the full stack
The model is just one part of an AI product. You also need data collection, preprocessing, serving infrastructure, monitoring, and a great user experience.`,
    date: "June 2024",
    duration: "38:56",
    youtubeId: "D84s8lRpnzM",
    views: "410K",
    thumbnailColor: "#e4dce0",
  },
  {
    slug: "sam-altman-future-of-openai",
    title: "Sam Altman: The Future of OpenAI",
    author: "Sam Altman",
    authorRole: "CEO, OpenAI",
    type: "Video",
    categories: ["AI", "Founder Stories", "Strategy"],
    description:
      "Sam Altman discusses ChatGPT\u2019s origins, the future of AI, and building one of the most important companies in history.",
    body: `In this in-depth conversation, Sam Altman, CEO of OpenAI, discusses the past, present, and future of artificial intelligence.

On ChatGPT's Origins:
"We were honestly surprised by how much people loved ChatGPT. We knew the technology was impressive, but the reaction was beyond anything we anticipated. It turns out that making AI accessible through a simple chat interface was the key insight."

On the Future of AI:
"I believe we're in the early stages of the most important technological revolution in human history. The capabilities we'll see in the next 5 years will make today's AI look primitive."

On Building OpenAI:
"Building OpenAI has been the hardest thing I've ever done. The technical challenges are immense, the stakes are incredibly high, and there's no playbook for building a company like this."

On Startups in the AI Era:
"This is the best time ever to start a company. AI is going to create more value than any technology in history, and most of that value will be captured by startups, not incumbents."

On Safety and Alignment:
"We take safety incredibly seriously. Getting AI alignment right isn't just important for OpenAI—it's important for humanity. We're investing heavily in this area."

On Competition:
"Competition is healthy and expected. What matters isn't who's first, but who builds the most useful and safe AI systems."`,
    date: "August 2024",
    duration: "49:41",
    youtubeId: "xXRMRE_-dLM",
    views: "472K",
    thumbnailColor: "#dce0e8",
  },
  {
    slug: "before-the-startup",
    title: "Before the Startup",
    author: "Paul Graham",
    authorRole: "Co-founder, Y Combinator",
    type: "Essay",
    categories: ["Strategy", "Culture"],
    description:
      "Counterintuitive advice for aspiring startup founders based on a lecture given at Stanford.",
    body: `This essay is derived from a guest lecture I gave at Sam Altman's startup class at Stanford. It's aimed at college students, but much of it is applicable to potential founders of all ages.

One of the advantages of having kids is that when you have to give advice, you can ask yourself "what would I tell my own kids?" My kids are little, but I can imagine what I'd tell them about startups if they were in college, and it turns out to be the same things I tell people in YC.

1. Startups are counterintuitive
Your instincts about startups will be wrong. One of the most counterintuitive things about startups is that it's OK to have a "bad" idea. Many of the best startups seemed like bad ideas at first: Facebook was just another social network, Airbnb involved strangers sleeping in your house.

2. You can't game the system
Expertise at starting startups is not what you need. What you need is expertise in your own users.

3. Starting a startup will change you
The demands of a startup will push you in ways you never expected. This is neither good nor bad—it's just reality.

4. The way to get startup ideas is to not try to get startup ideas
If you make a conscious effort to think of startup ideas, you'll think of ideas that are plausible but wrong. The way to come up with good ideas is to look for problems.

5. Don't worry about competition
Inexperienced founders usually give competitors more credit than they deserve. It's exceptionally rare for a startup to be killed by a competitor.

6. The most important thing is to start
The best way to learn about startups is to start one. You'll learn more in the first month of running a startup than in a year of thinking about starting one.`,
    date: "October 2014",
    thumbnailColor: "#e4e0dc",
  },
];
