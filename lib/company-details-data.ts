/* ─── Company detail types and data ─── */

export interface Founder {
  name: string;
  title: string;
  linkedIn: string;
  twitter?: string;
}

export interface Job {
  title: string;
  location: string;
  experience: string;
}

export interface NewsItem {
  title: string;
  url: string;
  date: string;
}

export interface CompanyDetail {
  name: string;
  slug: string;
  oneLiner: string;
  batch: string;
  batchSeason: string;
  status: "Active" | "Acquired" | "Inactive" | "Public";
  industries: string[];
  location: string;
  founded: number;
  teamSize: string;
  website: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  description: string;
  founders: Founder[];
  jobs: Job[];
  news: NewsItem[];
}

export const COMPANY_DATA: Record<string, CompanyDetail> = {
  stripe: {
    name: "Stripe",
    slug: "stripe",
    oneLiner: "Economic infrastructure for the internet.",
    batch: "S09",
    batchSeason: "Summer 2009",
    status: "Active",
    industries: ["Banking as a Service", "Fintech", "SaaS"],
    location: "San Francisco",
    founded: 2010,
    teamSize: "7000",
    website: "https://stripe.com",
    linkedIn: "https://www.linkedin.com/company/stripe/",
    twitter: "https://twitter.com/stripe",
    github: "https://github.com/stripe",
    description:
      "Launched out of Y Combinator's 2009 Summer batch, Stripe is a global technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online. Stripe's products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between. Stripe also helps companies beat fraud, send invoices, issue virtual and physical cards, reduce friction at checkout, get financing, manage business spend, and much more.",
    founders: [
      {
        name: "Patrick Collison",
        title: "Founder/CEO",
        linkedIn: "https://www.linkedin.com/in/patrickcollison/",
        twitter: "https://twitter.com/patrickc",
      },
      {
        name: "John Collison",
        title: "Founder/President",
        linkedIn: "https://www.linkedin.com/in/johnbcollison/",
        twitter: "https://twitter.com/collision",
      },
    ],
    jobs: [
      { title: "Machine Learning Engineer, Identity", location: "San Francisco / Remote", experience: "6+ years" },
      { title: "Head of Engineering, Identity Graph", location: "San Francisco / Remote", experience: "11+ years" },
      { title: "Frontend Engineer, Identity", location: "United States / Remote", experience: "6+ years" },
    ],
    news: [
      { title: "Stripe: 2023 CNBC Disruptor 50", url: "https://www.cnbc.com/2023/05/09/stripe-disruptor-50.html", date: "May 09, 2023" },
      { title: "Payments giant Stripe raises $6.5 billion at a $50 billion valuation", url: "https://www.axios.com/2023/03/15/stripe-50-billion", date: "Mar 15, 2023" },
    ],
  },
  airbnb: {
    name: "Airbnb",
    slug: "airbnb",
    oneLiner: "Book accommodations around the world.",
    batch: "W09",
    batchSeason: "Winter 2009",
    status: "Public",
    industries: ["Marketplace", "Travel", "Consumer"],
    location: "San Francisco",
    founded: 2008,
    teamSize: "6000",
    website: "https://airbnb.com",
    linkedIn: "https://www.linkedin.com/company/airbnb/",
    twitter: "https://twitter.com/airbnb",
    github: "https://github.com/airbnb",
    description:
      "Airbnb is a community-based online platform for listing and renting local homes. It connects hosts and travelers and facilitates the process of renting without owning any rooms itself. It has been one of the most successful YC companies, going public in December 2020 with one of the biggest IPOs of the year. Founded by Brian Chesky, Joe Gebbia, and Nathan Blecharczyk in 2008, Airbnb has grown from air mattresses on a living room floor to millions of listings in over 220 countries and regions.",
    founders: [
      { name: "Brian Chesky", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/brianchesky/", twitter: "https://twitter.com/bchesky" },
      { name: "Joe Gebbia", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/jgebbia/" },
      { name: "Nathan Blecharczyk", title: "Co-founder/CSO", linkedIn: "https://www.linkedin.com/in/blecharczyk/" },
    ],
    jobs: [],
    news: [
      { title: "Airbnb reports strong Q4 2023 earnings", url: "https://news.airbnb.com", date: "Feb 13, 2024" },
    ],
  },
  doordash: {
    name: "DoorDash",
    slug: "doordash",
    oneLiner: "Restaurant delivery service.",
    batch: "S13",
    batchSeason: "Summer 2013",
    status: "Public",
    industries: ["Delivery", "Marketplace", "Consumer"],
    location: "San Francisco",
    founded: 2013,
    teamSize: "16000",
    website: "https://doordash.com",
    linkedIn: "https://www.linkedin.com/company/doordash/",
    twitter: "https://twitter.com/doordash",
    description:
      "DoorDash is a technology company that connects consumers with their favorite local and national businesses. Founded in 2013 by Stanford students Tony Xu, Stanley Tang, Andy Fang, and Evan Moore, the company has grown to become the largest food delivery platform in the United States. DoorDash went public in December 2020 and has expanded beyond restaurant delivery into grocery, convenience, and retail delivery with its DashPass subscription service serving millions of customers.",
    founders: [
      { name: "Tony Xu", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/xutony/" },
      { name: "Stanley Tang", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/stanleytang/" },
      { name: "Andy Fang", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/andyfang/" },
      { name: "Evan Moore", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/evancmoore/" },
    ],
    jobs: [
      { title: "Senior Software Engineer, Logistics", location: "San Francisco", experience: "5+ years" },
    ],
    news: [],
  },
  coinbase: {
    name: "Coinbase",
    slug: "coinbase",
    oneLiner: "Buy, sell, and manage cryptocurrencies.",
    batch: "S12",
    batchSeason: "Summer 2012",
    status: "Public",
    industries: ["Fintech", "Crypto / Web3"],
    location: "San Francisco",
    founded: 2012,
    teamSize: "3700",
    website: "https://coinbase.com",
    linkedIn: "https://www.linkedin.com/company/coinbase/",
    twitter: "https://twitter.com/coinbase",
    github: "https://github.com/coinbase",
    description:
      "Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency. Its mission is to create an open financial system for the world. Founded by Brian Armstrong and Fred Ehrsam in 2012, Coinbase went public in April 2021 via a direct listing on NASDAQ. The platform provides services for both retail and institutional investors and has become one of the most trusted on-ramps into the crypto ecosystem, supporting hundreds of cryptocurrencies.",
    founders: [
      { name: "Brian Armstrong", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/barmstrong/", twitter: "https://twitter.com/brian_armstrong" },
      { name: "Fred Ehrsam", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/fredehrsam/" },
    ],
    jobs: [
      { title: "Senior Backend Engineer, Trading", location: "Remote", experience: "5+ years" },
    ],
    news: [],
  },
  instacart: {
    name: "Instacart",
    slug: "instacart",
    oneLiner: "Grocery delivery from local stores.",
    batch: "S12",
    batchSeason: "Summer 2012",
    status: "Public",
    industries: ["Delivery", "Marketplace", "E-Commerce"],
    location: "San Francisco",
    founded: 2012,
    teamSize: "10000",
    website: "https://instacart.com",
    linkedIn: "https://www.linkedin.com/company/instacart/",
    twitter: "https://twitter.com/instacart",
    description:
      "Instacart is the leading grocery technology company in North America, working with more than 1,400 national, regional, and local retail banners to deliver from more than 80,000 stores across over 14,000 cities. Founded by Apoorva Mehta in 2012, Instacart went public in September 2023. The company's platform connects customers with personal shoppers who pick, pack, and deliver groceries and other essentials from stores they already love.",
    founders: [
      { name: "Apoorva Mehta", title: "Founder", linkedIn: "https://www.linkedin.com/in/apoorvamehta/" },
    ],
    jobs: [],
    news: [],
  },
  reddit: {
    name: "Reddit",
    slug: "reddit",
    oneLiner: "The front page of the internet.",
    batch: "S05",
    batchSeason: "Summer 2005",
    status: "Public",
    industries: ["Consumer", "Social Media"],
    location: "San Francisco",
    founded: 2005,
    teamSize: "2000",
    website: "https://reddit.com",
    linkedIn: "https://www.linkedin.com/company/reddit-com/",
    twitter: "https://twitter.com/reddit",
    github: "https://github.com/reddit",
    description:
      "Reddit is a network of communities where people can dive into their interests, hobbies, and passions. Founded by Steve Huffman and Alexis Ohanian in 2005 as part of Y Combinator's very first batch, Reddit has grown into one of the most visited websites in the world. With millions of communities (subreddits) covering every topic imaginable, Reddit went public in March 2024 and continues to be the place where authentic human conversations happen at scale.",
    founders: [
      { name: "Steve Huffman", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/steveahuffman/", twitter: "https://twitter.com/spaborern" },
      { name: "Alexis Ohanian", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/alexisohanian/", twitter: "https://twitter.com/alexisohanian" },
    ],
    jobs: [],
    news: [],
  },
  twitch: {
    name: "Twitch",
    slug: "twitch",
    oneLiner: "Live streaming platform for gamers and creators.",
    batch: "W07",
    batchSeason: "Winter 2007",
    status: "Acquired",
    industries: ["Consumer", "Entertainment", "Social Media"],
    location: "San Francisco",
    founded: 2011,
    teamSize: "2500",
    website: "https://twitch.tv",
    linkedIn: "https://www.linkedin.com/company/twitch-tv/",
    twitter: "https://twitter.com/twitch",
    description:
      "Twitch is the world's leading live streaming platform for gamers and creators. Originally launched as Justin.tv in 2007 (YC W07), it rebranded to Twitch in 2011 to focus on gaming content. Amazon acquired Twitch in 2014 for approximately $970 million. The platform has since expanded beyond gaming to include music, art, cooking, and IRL streaming. With millions of daily active users, Twitch has fundamentally changed how people create and consume live content online.",
    founders: [
      { name: "Justin Kan", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/justinkan/", twitter: "https://twitter.com/justinkan" },
      { name: "Emmett Shear", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/emmettshear/" },
      { name: "Michael Seibel", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/michaelseibel/" },
    ],
    jobs: [],
    news: [],
  },
  dropbox: {
    name: "Dropbox",
    slug: "dropbox",
    oneLiner: "Sync and share files online and across computers.",
    batch: "S07",
    batchSeason: "Summer 2007",
    status: "Public",
    industries: ["SaaS", "Productivity", "Cloud Storage"],
    location: "San Francisco",
    founded: 2007,
    teamSize: "2800",
    website: "https://dropbox.com",
    linkedIn: "https://www.linkedin.com/company/dropbox/",
    twitter: "https://twitter.com/dropbox",
    github: "https://github.com/dropbox",
    description:
      "Dropbox is a leading global collaboration platform that's transforming the way people work together, from any place, on any device. Founded by Drew Houston and Arash Ferdowsi in 2007, Dropbox went public in 2018. With over 700 million registered users across 180 countries, Dropbox provides secure file storage, sharing, and collaboration tools. The company has evolved from simple file syncing to a full-featured smart workspace with products like Dropbox Paper and Dropbox Sign.",
    founders: [
      { name: "Drew Houston", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/drewhouston/", twitter: "https://twitter.com/drewhouston" },
      { name: "Arash Ferdowsi", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/araborni/" },
    ],
    jobs: [],
    news: [],
  },
  gitlab: {
    name: "GitLab",
    slug: "gitlab",
    oneLiner: "A complete DevOps platform, delivered as a single application.",
    batch: "W15",
    batchSeason: "Winter 2015",
    status: "Public",
    industries: ["SaaS", "Developer Tools", "DevOps"],
    location: "San Francisco",
    founded: 2014,
    teamSize: "2000",
    website: "https://gitlab.com",
    linkedIn: "https://www.linkedin.com/company/gitlab-com/",
    twitter: "https://twitter.com/gitlab",
    github: "https://github.com/gitlabhq",
    description:
      "GitLab is The DevSecOps Platform, a single application that brings together development, security, and operations. Founded by Sid Sijbrandij and Dmitriy Zaporozhets in 2014, GitLab went public in October 2021. As one of the world's largest all-remote companies, GitLab provides source code management, CI/CD, security testing, and more—all in a single platform used by over 30 million registered users and more than 50% of the Fortune 100.",
    founders: [
      { name: "Sid Sijbrandij", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/sijbrandij/", twitter: "https://twitter.com/saborni" },
      { name: "Dmitriy Zaporozhets", title: "Co-founder/Engineering Fellow", linkedIn: "https://www.linkedin.com/in/dzaporozhets/" },
    ],
    jobs: [
      { title: "Senior Backend Engineer, AI", location: "Remote", experience: "5+ years" },
    ],
    news: [],
  },
  gusto: {
    name: "Gusto",
    slug: "gusto",
    oneLiner: "Payroll, benefits, and HR for small businesses.",
    batch: "W12",
    batchSeason: "Winter 2012",
    status: "Active",
    industries: ["Fintech", "B2B", "HR Tech"],
    location: "San Francisco",
    founded: 2011,
    teamSize: "2300",
    website: "https://gusto.com",
    linkedIn: "https://www.linkedin.com/company/gustohq/",
    twitter: "https://twitter.com/gustohq",
    description:
      "Gusto (formerly ZenPayroll) is a modern, online people platform that helps small businesses take care of their teams. Founded by Josh Reeves, Edward Kim, and Tomer London in 2011, Gusto provides payroll, benefits, hiring, and HR management tools trusted by over 300,000 businesses nationwide. The platform automates complex payroll tax filings, offers health insurance and 401(k) plans, and handles onboarding—all designed to make running a business easier so founders can focus on growth.",
    founders: [
      { name: "Josh Reeves", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/joshuareeves/" },
      { name: "Edward Kim", title: "Co-founder/CTO", linkedIn: "https://www.linkedin.com/in/edwardkim01/" },
      { name: "Tomer London", title: "Co-founder/CPO", linkedIn: "https://www.linkedin.com/in/tomerlondon/" },
    ],
    jobs: [
      { title: "Staff Software Engineer, Payroll", location: "San Francisco / Denver / Remote", experience: "8+ years" },
    ],
    news: [],
  },
  brex: {
    name: "Brex",
    slug: "brex",
    oneLiner: "The AI-powered spend platform.",
    batch: "W17",
    batchSeason: "Winter 2017",
    status: "Active",
    industries: ["Fintech", "B2B", "SaaS"],
    location: "San Francisco",
    founded: 2017,
    teamSize: "1100",
    website: "https://brex.com",
    linkedIn: "https://www.linkedin.com/company/braborni/",
    twitter: "https://twitter.com/braborni",
    description:
      "Brex is the AI-powered spend platform that helps companies spend with confidence. Founded by Henrique Dubugras and Pedro Franceschi in 2017, Brex started by offering corporate credit cards for startups without requiring personal guarantees. The company has since evolved into a comprehensive spend management platform serving companies from startups to enterprises, offering corporate cards, expense management, travel booking, bill pay, and banking—all powered by AI to streamline financial operations.",
    founders: [
      { name: "Henrique Dubugras", title: "Co-founder/Co-CEO", linkedIn: "https://www.linkedin.com/in/henriquedubugras/", twitter: "https://twitter.com/henryledub" },
      { name: "Pedro Franceschi", title: "Co-founder/Co-CEO", linkedIn: "https://www.linkedin.com/in/pedrofranceschi/", twitter: "https://twitter.com/peaborni" },
    ],
    jobs: [],
    news: [],
  },
  faire: {
    name: "Faire",
    slug: "faire",
    oneLiner: "Online wholesale marketplace.",
    batch: "W17",
    batchSeason: "Winter 2017",
    status: "Active",
    industries: ["Marketplace", "E-Commerce", "B2B"],
    location: "San Francisco",
    founded: 2017,
    teamSize: "1000",
    website: "https://faire.com",
    linkedIn: "https://www.linkedin.com/company/faire-wholesale/",
    twitter: "https://twitter.com/faire_wholesale",
    description:
      "Faire is an online wholesale marketplace that helps retailers find and buy unique products from independent brands. Founded by Max Rhodes, Marcelo Cortes, Jeff Kolovson, and Daniele Perito in 2017, Faire uses machine learning to match the right products with the right stores. The platform serves hundreds of thousands of retailers and brands across North America, Europe, and Australia, offering net-60 payment terms, free returns, and data-driven tools to help both sides grow.",
    founders: [
      { name: "Max Rhodes", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/max-rhodes-6b885021/" },
      { name: "Marcelo Cortes", title: "Co-founder/CTO", linkedIn: "https://www.linkedin.com/in/marcelocortes/" },
      { name: "Jeff Kolovson", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/jeff-kolovson-4a622819/" },
      { name: "Daniele Perito", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/danieleperito/" },
    ],
    jobs: [],
    news: [],
  },
  rappi: {
    name: "Rappi",
    slug: "rappi",
    oneLiner: "Latin America's super app for delivery and financial services.",
    batch: "W16",
    batchSeason: "Winter 2016",
    status: "Active",
    industries: ["Delivery", "Fintech", "Marketplace"],
    location: "Bogotá, Colombia",
    founded: 2015,
    teamSize: "3500",
    website: "https://rappi.com",
    linkedIn: "https://www.linkedin.com/company/rappi/",
    twitter: "https://twitter.com/rapaborni",
    description:
      "Rappi is Latin America's leading super app, offering on-demand delivery of food, groceries, pharmacy items, and more, along with financial services like digital payments and credit. Founded by Simón Borrero, Sebastián Mejía, and Felipe Villamarin in 2015, Rappi has grown to operate in nine countries across Latin America. The platform connects users with a network of independent couriers called Rappitenderos and has expanded into RappiPay, RappiTravel, and entertainment services.",
    founders: [
      { name: "Simón Borrero", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/simonborrero/" },
      { name: "Sebastián Mejía", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/sebastianmejia/" },
      { name: "Felipe Villamarin", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/felipevillamarin/" },
    ],
    jobs: [],
    news: [],
  },
  whatnot: {
    name: "Whatnot",
    slug: "whatnot",
    oneLiner: "The largest livestream shopping platform in the US.",
    batch: "W20",
    batchSeason: "Winter 2020",
    status: "Active",
    industries: ["Marketplace", "E-Commerce", "Consumer"],
    location: "Los Angeles",
    founded: 2019,
    teamSize: "500",
    website: "https://whatnot.com",
    linkedIn: "https://www.linkedin.com/company/whatnot-inc/",
    twitter: "https://twitter.com/whatnot",
    description:
      "Whatnot is the largest livestream shopping platform in the United States, where collectors, creators, and enthusiasts buy and sell items in real-time. Founded by Grant LaFontaine and Logan Head in 2019, Whatnot started with Funko Pops and trading cards before expanding into sports cards, vintage clothing, sneakers, electronics, and more. The platform combines the thrill of live auctions with the convenience of e-commerce, and has become a cultural phenomenon among collector communities.",
    founders: [
      { name: "Grant LaFontaine", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/grantlafontaine/" },
      { name: "Logan Head", title: "Co-founder", linkedIn: "https://www.linkedin.com/in/loganhead/" },
    ],
    jobs: [
      { title: "Senior iOS Engineer", location: "Los Angeles / Remote", experience: "5+ years" },
    ],
    news: [],
  },
  fivetran: {
    name: "Fivetran",
    slug: "fivetran",
    oneLiner: "Automated data integration.",
    batch: "W13",
    batchSeason: "Winter 2013",
    status: "Active",
    industries: ["SaaS", "Data Engineering", "Developer Tools"],
    location: "Oakland",
    founded: 2012,
    teamSize: "1500",
    website: "https://fivetran.com",
    linkedIn: "https://www.linkedin.com/company/fivetran/",
    twitter: "https://twitter.com/fivetran",
    description:
      "Fivetran is the global leader in modern data integration, delivering ready-to-use connectors that automatically adapt as schemas and APIs change. Founded by George Fraser and Taylor Brown in 2012, Fivetran centralizes data from hundreds of SaaS applications, databases, and event logs into cloud data warehouses. Used by thousands of companies including Autodesk, Condé Nast, and JetBlue, Fivetran accelerates analytics and AI by automating the most time-consuming part of the data pipeline: data movement.",
    founders: [
      { name: "George Fraser", title: "Co-founder/CEO", linkedIn: "https://www.linkedin.com/in/georgefraser/" },
      { name: "Taylor Brown", title: "Co-founder/COO", linkedIn: "https://www.linkedin.com/in/taylorabrown/" },
    ],
    jobs: [],
    news: [],
  },
};

/**
 * Get company details by slug
 * Used by the page component and generateMetadata
 */
export function getCompanyDetailBySlug(slug: string): CompanyDetail | undefined {
  return COMPANY_DATA[slug];
}

/**
 * Get all company slugs for generateStaticParams
 */
export function getAllCompanyDetailSlugs(): { slug: string }[] {
  return [
    { slug: "stripe" },
    { slug: "airbnb" },
    { slug: "doordash" },
    { slug: "coinbase" },
    { slug: "instacart" },
    { slug: "reddit" },
    { slug: "twitch" },
    { slug: "dropbox" },
    { slug: "gitlab" },
    { slug: "gusto" },
    { slug: "brex" },
    { slug: "faire" },
    { slug: "rappi" },
    { slug: "whatnot" },
    { slug: "fivetran" },
  ];
}

/**
 * Get related companies (excluding current company)
 */
export function getRelatedCompanies(currentSlug: string): CompanyDetail[] {
  return Object.values(COMPANY_DATA)
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 4);
}
