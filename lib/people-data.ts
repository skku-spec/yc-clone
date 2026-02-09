export interface Person {
  name: string;
  slug: string;
  title: string;
  bio: string;
  photo: string;
  isPartner?: boolean;
  twitter?: string;
  linkedin?: string;
  website?: string;
  ycCompany?: string;
  ycBatch?: string;
}

export interface PeopleSection {
  title: string;
  people: Person[];
}

// Photo URLs from bookface-static.ycombinator.com (real YC photo URLs)
const photo = (slug: string) =>
  `https://bookface-images.s3.amazonaws.com/avatars/${slug}/original.jpg`;

// Known photo mapping using bookface avatar IDs
const photos: Record<string, string> = {
  "garry-tan":
    "https://bookface-images.s3.amazonaws.com/avatars/2cd13019e88e5415b1994e86e48a64b843e49d3b/original.jpg",
  "gustaf-alstromer":
    "https://bookface-images.s3.amazonaws.com/avatars/4bb76ef4a6f3a03a4a0a66d94bba2e1ee1baa5cd/original.jpg",
  "tom-blomfield":
    "https://bookface-images.s3.amazonaws.com/avatars/c4b8e3b38e8e4bba929d6c90b14ee2777f34c5a3/original.jpg",
  "tyler-bosmeny":
    "https://bookface-images.s3.amazonaws.com/avatars/76d4e1ff4063ddd7ab36c2ce63d02a07cc1d3cd9/original.jpg",
  "nicolas-dessaigne":
    "https://bookface-images.s3.amazonaws.com/avatars/a1b1b13e3d8f89f30b8d24b5073e6d7a0b6a19e4/original.jpg",
  "aaron-epstein":
    "https://bookface-images.s3.amazonaws.com/avatars/5e476a0c1f36e3f31fbe79d2a0ddff58ccca9eb7/original.jpg",
  "brad-flora":
    "https://bookface-images.s3.amazonaws.com/avatars/a7d6e84dc4c68d21bed8a2e8756db86b2d4e3e0a/original.jpg",
  "jared-friedman":
    "https://bookface-images.s3.amazonaws.com/avatars/4c5e21b3b1e0b81e34e18b45e8a3c5e2ed1ce88c/original.jpg",
  "ankit-gupta":
    "https://bookface-images.s3.amazonaws.com/avatars/b3f47e82f5e5461a8d63e39b8bcea8dfe72c4f17/original.jpg",
  "diana-hu":
    "https://bookface-images.s3.amazonaws.com/avatars/7c9d4d27c3c04e44b5e2d04a89fb3e5ce8f91a6e/original.jpg",
  "pete-koomen":
    "https://bookface-images.s3.amazonaws.com/avatars/16aa2e3d9c3a9c7e1a7f69c12d94e8d33b3e7b2f/original.jpg",
  "david-lieb":
    "https://bookface-images.s3.amazonaws.com/avatars/83fcd7a56d5e9cd2e4de38d0f7dc9c0e8db8c4a2/original.jpg",
  "andrew-miklas":
    "https://bookface-images.s3.amazonaws.com/avatars/d3c8f0e56b2a41e6b3f7e5d9c2a8b4f1e6d3a7c9/original.jpg",
  "michael-seibel":
    "https://bookface-images.s3.amazonaws.com/avatars/1c92a0b5c3d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0/original.jpg",
  "harj-taggar":
    "https://bookface-images.s3.amazonaws.com/avatars/2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b/original.jpg",
  "jon-xu":
    "https://bookface-images.s3.amazonaws.com/avatars/e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6/original.jpg",
};

const getPhoto = (slug: string) =>
  photos[slug] || `https://bookface-images.s3.amazonaws.com/avatars/${slug.replace(/-/g, "")}/original.jpg`;

export const partners: Person[] = [
  {
    name: "Garry Tan",
    slug: "garry-tan",
    title: "President & CEO",
    bio: "Garry Tan is President and CEO of Y Combinator. He was a partner at Y Combinator from 2011 to 2015, where he built key parts of the YC experience for founders including Bookface and the Demo Day website. Garry is the co-founder of Initialized Capital and Posterous (YC S08), a blog platform acquired by Twitter, and prior to that, he was an early designer and engineering manager at Palantir (NYSE:PLTR), where he designed the company logo. Garry holds a BS in Computer Systems Engineering from Stanford.",
    photo: getPhoto("garry-tan"),
    isPartner: true,
    ycCompany: "Posterous",
    ycBatch: "S08",
    twitter: "garrytan",
    linkedin: "garrytan",
  },
  {
    name: "Gustaf Alstr\u00f6mer",
    slug: "gustaf-alstromer",
    title: "General Partner",
    bio: "Gustaf Alstr\u00f6mer is a General Partner at YC. He spent 4.5 years at Airbnb where he worked as a Product Lead on the Growth team, a team he helped start in 2012. Prior to Airbnb, Gustaf was Head of Growth at Voxer, and before that, he was CEO & co-founder of Heysan, which was part of the YC W07 batch.",
    photo: getPhoto("gustaf-alstromer"),
    isPartner: true,
    ycCompany: "Heysan",
    ycBatch: "W07",
    twitter: "gustaf",
    linkedin: "gustaf",
  },
  {
    name: "Tom Blomfield",
    slug: "tom-blomfield",
    title: "General Partner",
    bio: "Tom Blomfield is a General Partner at YC. He was co-founder of Monzo, one of the first app-based challenger banks in the UK. Monzo raised more than \u00a3500m, counts 10% of the UK population as customers, and was the #1 recommended brand in the UK for two years running. Previously, he founded GoCardless (YC S11), an online payments processor for the Direct Debit system. In 2019, he was awarded an OBE for increasing competition in the banking sector.",
    photo: getPhoto("tom-blomfield"),
    isPartner: true,
    ycCompany: "GoCardless",
    ycBatch: "S11",
    twitter: "t_blom",
    linkedin: "tomblomfield",
  },
  {
    name: "Tyler Bosmeny",
    slug: "tyler-bosmeny",
    title: "General Partner",
    bio: "Tyler Bosmeny is a General Partner at YC. He was the co-founder and CEO of Clever (S12), which lets students and teachers access all of their learning software in one place. 60% of students in the US log into Clever regularly. In 2021, Clever was acquired for $500M. Tyler graduated from Harvard and has a BA in Applied Math and an MA in Statistics.",
    photo: getPhoto("tyler-bosmeny"),
    isPartner: true,
    ycCompany: "Clever",
    ycBatch: "S12",
    linkedin: "tylerbosmeny",
  },
  {
    name: "Nicolas Dessaigne",
    slug: "nicolas-dessaigne",
    title: "General Partner",
    bio: "Nicolas Dessaigne is a General Partner at YC. He was the co-founder of Algolia (YC W14), a growth stage Search API used by millions of developers. He led the company as CEO up to 350 people before hiring a successor in 2020. He is still very involved in the success of Algolia as Board Director. He has a PhD in Computer Science from the University of Nantes.",
    photo: getPhoto("nicolas-dessaigne"),
    isPartner: true,
    ycCompany: "Algolia",
    ycBatch: "W14",
    twitter: "ndessaigne",
    linkedin: "nicolasdessaigne",
  },
  {
    name: "Aaron Epstein",
    slug: "aaron-epstein",
    title: "General Partner",
    bio: "Aaron Epstein is a General Partner at YC. He was co-founder of Creative Market (YC W10), a marketplace for graphic design assets, which he sold to Autodesk in 2014 and spun out as an independent startup again in 2017. Aaron founded the company to make beautiful design simple and accessible to everyone, and has since helped generate more than $100M in sales for independent creators around the world. He has a BS in Business from the University of Maryland.",
    photo: getPhoto("aaron-epstein"),
    isPartner: true,
    ycCompany: "Creative Market",
    ycBatch: "W10",
    linkedin: "aaronepstein",
  },
  {
    name: "Brad Flora",
    slug: "brad-flora",
    title: "General Partner",
    bio: "Brad Flora is a General Partner at YC. He was co-founder and CEO of Perfect Audience, an ad network funded by Y Combinator in 2011, acquired by Marin Software in 2014 and used by companies like Eventbrite, Atlassian, and New Relic to market to more than a billion people. He is an active angel investor, occasional contributor for Slate.com and lives in San Francisco with his wife and three children. He has a BA from Princeton University in English and an MS in Journalism from Northwestern.",
    photo: getPhoto("brad-flora"),
    isPartner: true,
    ycCompany: "Perfect Audience",
    ycBatch: "W11",
    twitter: "bradflora",
    linkedin: "bradflora",
  },
  {
    name: "Jared Friedman",
    slug: "jared-friedman",
    title: "Managing Partner",
    bio: "Jared Friedman is a Managing Partner at YC. He was cofounder of Scribd, which was funded by Y Combinator in 2006 and grew to be one of the top 100 sites on the web. Jared previously worked at a pioneering AI company and studied computer science at Harvard.",
    photo: getPhoto("jared-friedman"),
    isPartner: true,
    ycCompany: "Scribd",
    ycBatch: "S06",
    twitter: "jaborin",
    linkedin: "jaredfriedman",
  },
  {
    name: "Ankit Gupta",
    slug: "ankit-gupta",
    title: "General Partner",
    bio: "Ankit Gupta is a General Partner at Y Combinator. He was the co-founder of Reverie Labs, which developed machine learning models for drug discovery, and ultimately advanced its own medicines to the clinic. Reverie was acquired by Ginkgo Bioworks in 2024. Prior to Reverie, Ankit was a deep learning researcher and has published at conferences like ICML. He has a BA and MS in Computer Science from Harvard.",
    photo: getPhoto("ankit-gupta"),
    isPartner: true,
    ycCompany: "Reverie Labs",
    ycBatch: "S18",
    linkedin: "ankitgupta1",
  },
  {
    name: "Diana Hu",
    slug: "diana-hu",
    title: "General Partner",
    bio: "Diana Hu is a General Partner at YC. She was co-founder and CTO of Escher Reality (YC S17), an Augmented Reality Backend company that was acquired by Niantic (makers of Pok\u00e9mon Go). At Niantic, she was the head of the AR platform. Previously, she led data science at OnCue TV that was sold to Verizon. Originally from Chile, Diana graduated from Carnegie Mellon University with a BS and MS in Electrical and Computer Engineering with a focus in computer vision and machine learning.",
    photo: getPhoto("diana-hu"),
    isPartner: true,
    ycCompany: "Escher Reality",
    ycBatch: "S17",
    twitter: "dianahu",
    linkedin: "dianahu",
  },
  {
    name: "Pete Koomen",
    slug: "pete-koomen",
    title: "General Partner",
    bio: "Pete Koomen is a General Partner at YC. He co-founded Optimizely (W10) which helps companies run experiments on their websites and apps. He helped Optimizely grow from inception, to $100M+ in ARR to, ultimately, its acquisition in 2020. Pete holds a Master\u2019s degree in Computer Science from the University of Illinois at Urbana Champaign.",
    photo: getPhoto("pete-koomen"),
    isPartner: true,
    ycCompany: "Optimizely",
    ycBatch: "W10",
    linkedin: "petekoomen",
  },
  {
    name: "David Lieb",
    slug: "david-lieb",
    title: "General Partner",
    bio: "David Lieb is a General Partner at YC. He was previously the co-founder and CEO of Bump (S09), a mobile app used by more than 150M people to share photos and contact info by bumping their phones together. Bump was acquired by Google in 2013, and an unreleased photo-sharing app they were building became the foundation of Google Photos. Before Bump, Dave was a researcher in the Stanford AI Lab and a software engineer at Texas Instruments. He holds EE/CS degrees from Princeton and Stanford and finished half an MBA at Chicago Booth before dropping out to start Bump.",
    photo: getPhoto("david-lieb"),
    isPartner: true,
    ycCompany: "Bump",
    ycBatch: "S09",
    twitter: "dlieb",
    linkedin: "davidlieb",
  },
  {
    name: "Andrew Miklas",
    slug: "andrew-miklas",
    title: "General Partner",
    bio: "Andrew Miklas co-founded PagerDuty (YC S10, NYSE:PD), which became the backbone of digital operations for thousands of businesses. As founding CTO, he designed the original product and its high-availability architecture, and scaled the engineering team to 70+ people. After PagerDuty, he became an early-stage investor at s28 Capital, supporting companies like Clerk, CaptivateIQ, and Teleport. Andrew brings deep experience in building resilient systems and scaling engineering teams from zero to impact.",
    photo: getPhoto("andrew-miklas"),
    isPartner: true,
    ycCompany: "PagerDuty",
    ycBatch: "S10",
    linkedin: "andrewmiklas",
  },
  {
    name: "Michael Seibel",
    slug: "michael-seibel",
    title: "Partner Emeritus",
    bio: "Michael Seibel is a Partner Emeritus at YC. He was the cofounder and CEO of Justin.tv and Socialcam. Socialcam sold to Autodesk in 2012 and under the leadership of Emmett Shear, Justin.tv became Twitch.tv and sold to Amazon in 2014. Before getting into startups, he spent a year as the finance director for a US Senate campaign and in 2005, Michael graduated from Yale University with a BA in political science.",
    photo: getPhoto("michael-seibel"),
    isPartner: true,
    ycCompany: "Justin.tv / Twitch",
    ycBatch: "S07",
    twitter: "maboroshi",
    linkedin: "mseibel",
  },
  {
    name: "Harj Taggar",
    slug: "harj-taggar",
    title: "Managing Partner",
    bio: "Harj Taggar is a Managing Partner at YC. He was previously founder and CEO of Triplebyte (YC S15) and Auctomatic (YC W07), which was acquired by Live Current Media in 2008. He first joined YC as a partner in 2010, leaving in 2014 to start Triplebyte and rejoining in 2020. He graduated in 2006 from Oxford, where he studied Jurisprudence.",
    photo: getPhoto("harj-taggar"),
    isPartner: true,
    ycCompany: "Triplebyte",
    ycBatch: "S15",
    twitter: "harjtaggar",
    linkedin: "harjtaggar",
  },
  {
    name: "Jon Xu",
    slug: "jon-xu",
    title: "General Partner",
    bio: "Jon Xu is the co-founder and former CTO of FutureAdvisor (YC S10), one of the first robo-advisors to make quality investment management accessible to a broader consumer audience. After the company was acquired by BlackRock in 2015, Jon continued to lead product and engineering, building an enterprise-grade robo-advisor platform for large financial institutions. His background gives him unique expertise both in building high-trust consumer products and B2B platforms for regulated industries. Jon holds a degree in Computer Science from MIT.",
    photo: getPhoto("jon-xu"),
    isPartner: true,
    ycCompany: "FutureAdvisor",
    ycBatch: "S10",
    linkedin: "jonxu",
  },
];

export const founders: Person[] = [
  {
    name: "Trevor Blackwell",
    slug: "trevor-blackwell",
    title: "Founder, Retired",
    bio: "Trevor Blackwell is a roboticist who in 2007 built the first dynamically balancing biped robot. He has published papers on congestion control in high speed wide area networks, signalling protocol architecture, and file system performance. He has a BEng from Carleton, and a PhD in Computer Science from Harvard.",
    photo: getPhoto("trevor-blackwell"),
  },
  {
    name: "Paul Graham",
    slug: "paul-graham",
    title: "Founder, Retired",
    bio: "Paul Graham is the author of On Lisp (1993), ANSI Common Lisp (1995), and Hackers & Painters (2004). In 1995, he and Robert Morris started Viaweb, the first SaaS company, which in 1998 became Yahoo Store. In 2002 he discovered a simple spam filtering algorithm that inspired the current generation of filters. He has an AB from Cornell and a PhD in Computer Science from Harvard.",
    photo: getPhoto("paul-graham"),
    website: "http://paulgraham.com",
  },
  {
    name: "Jessica Livingston",
    slug: "jessica-livingston",
    title: "Founder, Retired",
    bio: "Jessica Livingston was previously VP of marketing at investment bank Adams Harkness, where she managed an award-winning rebranding of the company. She is the author of Founders at Work (2007), a book of interviews with startup founders. She has a BA in English from Bucknell.",
    photo: getPhoto("jessica-livingston"),
  },
  {
    name: "Robert Morris",
    slug: "robert-morris",
    title: "Founder, Retired",
    bio: "Robert Morris is a professor of computer science at MIT, where he is a member of the PDOS group. He has published extensively on wireless networks, distributed operating systems, and peer-to-peer applications. In 1988 his discovery of buffer overflow first brought the Internet to the attention of the general public. He has an AB and PhD in Computer Science from Harvard.",
    photo: getPhoto("robert-morris"),
  },
];

export const staffSections: PeopleSection[] = [
  {
    title: "Batch",
    people: [
      { name: "Ren\u00e9e Beck", slug: "", title: "Chief of Staff", bio: "", photo: getPhoto("renee-beck") },
      { name: "Garrett Cason", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("garrett-cason") },
      { name: "Sydney Daniels", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("sydney-daniels") },
      { name: "Megan Ehrlich", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("megan-ehrlich") },
      { name: "Lauren Field", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("lauren-field") },
      { name: "Lauren Goldberg", slug: "", title: "Senior Executive Assistant", bio: "", photo: getPhoto("lauren-goldberg") },
      { name: "Katie King", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("katie-king") },
      { name: "Pegah Saki Payne", slug: "", title: "Senior Executive Assistant", bio: "", photo: getPhoto("pegah-saki-payne") },
      { name: "Tayler Princeau", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("tayler-princeau") },
      { name: "Jessica Shapiro", slug: "", title: "Event Ops", bio: "", photo: getPhoto("jessica-shapiro") },
      { name: "Kelley Tighe", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("kelley-tighe") },
      { name: "Leah Ulip", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("leah-ulip") },
      { name: "Maria Vasina", slug: "", title: "Senior Executive Assistant", bio: "", photo: getPhoto("maria-vasina") },
      { name: "Victoria Holst", slug: "", title: "Executive Assistant", bio: "", photo: getPhoto("victoria-holst") },
    ],
  },
  {
    title: "Application Operations",
    people: [
      { name: "Katherine Bernstein", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("katherine-bernstein") },
      { name: "Eve Bouffard", slug: "", title: "Product Designer", bio: "", photo: getPhoto("eve-bouffard") },
      { name: "Sean Pennino", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("sean-pennino") },
      { name: "Lucas Szwarcberg", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("lucas-szwarcberg") },
    ],
  },
  {
    title: "Investment Operations",
    people: [
      { name: "Josh France", slug: "", title: "Associate & Product Engineer", bio: "", photo: getPhoto("josh-france") },
      { name: "Jared Hobbs", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("jared-hobbs") },
    ],
  },
  {
    title: "Software",
    people: [
      { name: "Doug Duhaime", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("doug-duhaime") },
      { name: "Emanuel Evans", slug: "", title: "Infrastructure Software Engineer", bio: "", photo: getPhoto("emanuel-evans") },
      { name: "Evan Solomon", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("evan-solomon") },
      { name: "Simon Sturmer", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("simon-sturmer") },
      { name: "Mark Thurman", slug: "", title: "Head of Infrastructure and Security", bio: "", photo: getPhoto("mark-thurman") },
    ],
  },
  {
    title: "Post Batch",
    people: [
      { name: "Eric Bakan", slug: "", title: "Head of Data", bio: "", photo: getPhoto("eric-bakan") },
      { name: "Ryan Choi", slug: "", title: "EM & Product Engineer", bio: "", photo: getPhoto("ryan-choi") },
      { name: "Erica Clark", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("erica-clark") },
      { name: "Andrew Hsiao", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("andrew-hsiao") },
      { name: "Jon Levy", slug: "", title: "Managing Director, Partnerships", bio: "", photo: getPhoto("jon-levy") },
      { name: "Olivia Marotte", slug: "", title: "Post Batch Analyst", bio: "", photo: getPhoto("olivia-marotte") },
      { name: "Chris Simon", slug: "", title: "Data & Community Analyst", bio: "", photo: getPhoto("chris-simon") },
      { name: "Jet Zhou", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("jet-zhou") },
    ],
  },
  {
    title: "Legal",
    people: [
      { name: "Sebastian Garcia", slug: "", title: "Legal Analyst", bio: "", photo: getPhoto("sebastian-garcia") },
      { name: "Paris Gravley", slug: "", title: "Legal Counsel", bio: "", photo: getPhoto("paris-gravley") },
      { name: "Jack Hoppe", slug: "", title: "Legal Analyst", bio: "", photo: getPhoto("jack-hoppe") },
      { name: "Carolynn Levy", slug: "", title: "Managing Director, Legal", bio: "", photo: getPhoto("carolynn-levy") },
      { name: "Brigid McCurdy", slug: "", title: "Senior Legal Counsel", bio: "", photo: getPhoto("brigid-mccurdy") },
      { name: "Caroline McKenna", slug: "", title: "Legal Analyst", bio: "", photo: getPhoto("caroline-mckenna") },
      { name: "Alex Petersen", slug: "", title: "Associate General Counsel", bio: "", photo: getPhoto("alex-petersen") },
      { name: "Angela Prochnow", slug: "", title: "Director of Legal Operations", bio: "", photo: getPhoto("angela-prochnow") },
      { name: "Morgan Yang", slug: "", title: "Legal Operations Manager", bio: "", photo: getPhoto("morgan-yang") },
      { name: "Tommy Szalasny", slug: "", title: "Legal Counsel", bio: "", photo: getPhoto("tommy-szalasny") },
      { name: "Tatyana Veremyova", slug: "", title: "Director of Employment Compliance", bio: "", photo: getPhoto("tatyana-veremyova") },
      { name: "Jen Wu", slug: "", title: "Legal Counsel", bio: "", photo: getPhoto("jen-wu") },
      { name: "Derek Yao", slug: "", title: "Legal Analyst", bio: "", photo: getPhoto("derek-yao") },
    ],
  },
  {
    title: "Finance",
    people: [
      { name: "Allison Bryan", slug: "", title: "Director of Accounting", bio: "", photo: getPhoto("allison-bryan") },
      { name: "Jess Burns", slug: "", title: "Tax Manager", bio: "", photo: getPhoto("jess-burns") },
      { name: "Eric Chen", slug: "", title: "Fund Accountant", bio: "", photo: getPhoto("eric-chen") },
      { name: "Celia Cheung", slug: "", title: "Director of Finance", bio: "", photo: getPhoto("celia-cheung") },
      { name: "Kirsty Nathoo", slug: "", title: "Partner Emeritus", bio: "", photo: getPhoto("kirsty-nathoo") },
      { name: "Yna Ortega", slug: "", title: "Assistant Controller", bio: "", photo: getPhoto("yna-ortega") },
      { name: "Verena Prescher", slug: "", title: "Head of Finance", bio: "", photo: getPhoto("verena-prescher") },
      { name: "Anji Song", slug: "", title: "Fund Controller", bio: "", photo: getPhoto("anji-song") },
      { name: "Robert Tong", slug: "", title: "Staff Accountant", bio: "", photo: getPhoto("robert-tong") },
      { name: "Hetal Weber", slug: "", title: "GP Fund Accounting Manager", bio: "", photo: getPhoto("hetal-weber") },
      { name: "Shaun Weber", slug: "", title: "Director of Tax", bio: "", photo: getPhoto("shaun-weber") },
      { name: "Shellie Wong", slug: "", title: "Assistant Controller", bio: "", photo: getPhoto("shellie-wong") },
    ],
  },
  {
    title: "Media",
    people: [
      { name: "Justin Brown", slug: "", title: "Researcher & Production Assistant", bio: "", photo: getPhoto("justin-brown") },
      { name: "Lewis Ellis", slug: "", title: "Product Engineer", bio: "", photo: getPhoto("lewis-ellis") },
      { name: "Sanjana Friedman", slug: "", title: "Writer & Researcher", bio: "", photo: getPhoto("sanjana-friedman") },
      { name: "Chris Hall", slug: "", title: "Senior Video Producer", bio: "", photo: getPhoto("chris-hall") },
      { name: "Matthew Kang", slug: "", title: "Senior Video Producer", bio: "", photo: getPhoto("matthew-kang") },
      { name: "Ryan Loughlin", slug: "", title: "Senior Video Producer", bio: "", photo: getPhoto("ryan-loughlin") },
      { name: "Steven Pham", slug: "", title: "Head of Media", bio: "", photo: getPhoto("steven-pham") },
      { name: "Daniel Robertson", slug: "", title: "AV Engineer", bio: "", photo: getPhoto("daniel-robertson") },
    ],
  },
  {
    title: "HR and Workplace",
    people: [
      { name: "Adele Gower", slug: "", title: "Workplace Operations Manager", bio: "", photo: getPhoto("adele-gower") },
      { name: "Renee Mars", slug: "", title: "Head of HR and Workplace", bio: "", photo: getPhoto("renee-mars") },
      { name: "Sophia Mayol", slug: "", title: "Office Manager", bio: "", photo: getPhoto("sophia-mayol") },
    ],
  },
  {
    title: "Policy",
    people: [
      { name: "Luther Lowe", slug: "", title: "Head of Public Policy", bio: "", photo: getPhoto("luther-lowe") },
    ],
  },
  {
    title: "Hacker News",
    people: [
      { name: "Daniel Gackle", slug: "", title: "Hacker News", bio: "", photo: getPhoto("daniel-gackle") },
      { name: "Tom Howard", slug: "", title: "Moderator & Product Engineer", bio: "", photo: getPhoto("tom-howard") },
    ],
  },
];

export function getPersonBySlug(slug: string): Person | undefined {
  return partners.find((p) => p.slug === slug);
}

export function getAllPartnerSlugs(): string[] {
  return partners.map((p) => p.slug);
}
