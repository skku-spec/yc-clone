const founderCards = [
  {
    name: "Brian Chesky",
    company: "Airbnb",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/brian-chesky-poster-compressed-85f52e5c8382ec6fede2dba32aaf31d46461415bbb46d2388e8c73191c7e2d86.jpg",
  },
  {
    name: "Sam Altman",
    company: "OpenAI",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/sam-altman-poster-compressed-cd7ea430f0afcbeaac64feaa0e1c87cf53e0773cc5b4e0a413b4fb0c7e72f61a.jpg",
  },
  {
    name: "Greg Brockman",
    company: "OpenAI",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/greg-brockman-poster-compressed-71e2e5e2e27f1d5e3b3e3c15eb5b28b5e91f1b8dc62fb64e49ebdd9c4ad95987.jpg",
  },
  {
    name: "Michael Truell",
    company: "Cursor",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/michael-truell-poster-compressed-b6843eec5ddcedb6e26db15bc7404c3cdece7fcde9b5258f8a8c11a03de3f4e5.jpg",
  },
  {
    name: "Paul Graham",
    company: "Y Combinator",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/paul-graham-poster-compressed-5e4ab37e7336be250d0e93db11df3f99eb6b2f8bc9f5e2c42aa1d99e20b9f4f2.jpg",
  },
  {
    name: "Guillermo Rauch",
    company: "Vercel",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/guillermo-rauch-poster-compressed-df0c1ed7e9e0e2b5b6c2bdcb068c2d0a0f8e9bc91b6d2a03fbd7fb71d5e48ee2.jpg",
  },
  {
    name: "Dylan Field",
    company: "Figma",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/dylan-field-poster-compressed-c6dd2f9f9f5c8c1de9a9a8c07cae3ba9c0b23b3d9e7efce7aff51e07a5d8f3b9.jpg",
  },
  {
    name: "Emmett Shear",
    company: "Twitch",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/emmett-shear-poster-compressed-86b0e0bd9b32b8ee1e2a1e8c2b7d3f5e0a6c4d9f1b3e5a7c9d0f2b4e6a8c0d2f.jpg",
  },
  {
    name: "Tony Xu",
    company: "DoorDash",
    poster: "https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/tony-xu-poster-compressed-4b2c6d8e0f1a3b5c7d9e0f2a4b6c8d0e1f3a5b7c9d0e2f4a6b8c0d1e3f5a7b9c.jpg",
  },
];

const partnerCards = [
  {
    name: "Garry Tan",
    batch: "Posterous, S08",
    description: "Co-founder of Posterous (acquired by Twitter) and Initialized Capital. Early engineer at Palantir, designed company logo.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/garry-tan-now-compressed-285e8d782cad23c62dadac1cdde3a87305c1f92dd65d45d7f3bec2b08b70e136.jpg",
    slug: "garry-tan",
  },
  {
    name: "Harj Taggar",
    batch: "Auctomatic, W07",
    description: "Co-founder and CEO of Triplebyte (acquired by Karat) and Auctomatic (acquired by Live Current Media). Graduated from Oxford.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/harj-taggar-now-compressed-e79a614b5ed28c625bde34ab17e9f15be75eef5d5b8e5e7b7bb0e5e7aab3c1fc.jpg",
    slug: "harj-taggar",
  },
  {
    name: "Jared Friedman",
    batch: "Scribd, S06",
    description: "Co-founder of Scribd, one of the top 100 sites on the web. Harvard CS dropout.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/jared-friedman-now-compressed-d0bb32a24bfa2c5fc2b4d7e0af5b13b6c6e1a2d3e4f5a6b7c8d9e0f1a2b3c4d5.jpg",
    slug: "jared-friedman",
  },
  {
    name: "Aaron Epstein",
    batch: "Creative Market, W10",
    description: "Co-founder of Creative Market, generating over $100M in sales for independent creators worldwide.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/aaron-epstein-now-compressed-b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8.jpg",
    slug: "aaron-epstein",
  },
  {
    name: "Diana Hu",
    batch: "Escher Reality, S17",
    description: "Co-founder and CTO of Escher Reality (acquired by Niantic). Shipped AR tech for Pokemon GO to 100M+ users.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/diana-hu-now-compressed-a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2.jpg",
    slug: "diana-hu",
  },
  {
    name: "Gustaf Alstromer",
    batch: "Heysan, W07",
    description: "Led Growth at Airbnb for 4.5 years. Co-founder of Heysan. Previously Head of Growth at Voxer.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/gustaf-alstromer-now-compressed-c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg",
    slug: "gustaf-alstromer",
  },
  {
    name: "Nicolas Dessaigne",
    batch: "Algolia, W14",
    description: "Co-founder of Algolia, a Search API used by millions of developers. PhD in Computer Science.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/nicolas-dessaigne-now-compressed-d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2.jpg",
    slug: "nicolas-dessaigne",
  },
  {
    name: "Tom Blomfield",
    batch: "GoCardless, S11",
    description: "Co-founder of Monzo (£500M raised, 10% UK population). Founded GoCardless. Awarded OBE in 2019.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/tom-blomfield-now-compressed-e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3.jpg",
    slug: "tom-blomfield",
  },
  {
    name: "Brad Flora",
    batch: "Perfect Audience, S11",
    description: "Co-founder and CEO of Perfect Audience (acquired by Marin Software). Active angel investor and Slate contributor.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/brad-flora-now-compressed-f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4.jpg",
    slug: "brad-flora",
  },
  {
    name: "Pete Koomen",
    batch: "Optimizely, W10",
    description: "Co-founder of Optimizely, grew to $100M+ ARR before acquisition. Master's in CS from UIUC.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/pete-koomen-now-compressed-a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5.jpg",
    slug: "pete-koomen",
  },
  {
    name: "Ankit Gupta",
    batch: "Reverie Labs, W18",
    description: "Co-founder and CTO of Reverie Labs (acquired by Ginkgo Bioworks). Deep learning researcher in language, vision, and biology.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/ankit-gupta-now-compressed-b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6.jpg",
    slug: "ankit-gupta",
  },
  {
    name: "Tyler Bosmeny",
    batch: "Clever, S12",
    description: "Co-founder and CEO of Clever (acquired for $500M). Used by 60% of US students.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/tyler-bosmeny-now-compressed-c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7.jpg",
    slug: "tyler-bosmeny",
  },
  {
    name: "David Lieb",
    batch: "Bump, S09",
    description: "Co-founder and CEO of Bump (150M+ users, acquired by Google). Co-founder of Google Photos (1B+ users).",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/david-lieb-now-compressed-d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8.jpg",
    slug: "david-lieb",
  },
  {
    name: "Andrew Miklas",
    batch: "PagerDuty, S10",
    description: "Co-founder and CTO of PagerDuty (NYSE:PD), the first incident management platform and used by half of the Fortune 500.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/andrew-miklas-now-compressed-e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9.jpg",
    slug: "andrew-miklas",
  },
  {
    name: "Jon Xu",
    batch: "FutureAdvisor, S10",
    description: "Co-founder and CTO of FutureAdvisor (acquired by BlackRock). Built robo-advisor platform for financial institutions. MIT EECS grad.",
    photo: "https://bookface-static.ycombinator.com/assets/ycdc/partners/jon-xu-now-compressed-f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0.jpg",
    slug: "jon-xu",
  },
];

export default function InTheRoom() {
  return (
    <>
      <section className="py-[120px] px-6">
        <h2
          className="text-5xl text-center mb-[60px] italic"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Be in the room with …
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {founderCards.map((founder) => (
            <div
              key={founder.name}
              className="rounded-xl overflow-hidden relative"
              style={{
                backgroundColor: "#444",
                aspectRatio: "16 / 9",
              }}
            >
              <img
                src={founder.poster}
                alt={`${founder.name} - ${founder.company}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-[120px]"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="text-white font-normal"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(1.125rem, 1.2vw + 0.5rem, 1.25rem)",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {founder.name}
                </p>
                <p
                  className="text-white font-light"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(0.875rem, 1vw + 0.25rem, 1rem)",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {founder.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[120px] px-6">
        <h2
          className="text-5xl text-center mb-[60px] italic"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          All partners were YC founders first
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {partnerCards.map((partner) => (
            <a
              key={partner.name}
              href={`/people/${partner.slug}`}
              className="overflow-hidden relative block group"
              style={{
                backgroundColor: "#444",
                aspectRatio: "3 / 3.5",
              }}
            >
              <img
                src={partner.photo}
                alt={partner.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.7) 100%)",
                }}
              />

              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ padding: "30px" }}
              >
                <p
                  className="text-white font-normal"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(1.125rem, 1.2vw + 0.5rem, 1.25rem)",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {partner.name}
                </p>
                <p
                  className="text-white font-light mb-2"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {partner.batch}
                </p>
                <p
                  className="text-white font-light"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(0.875rem, 1vw + 0.25rem, 1rem)",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    lineHeight: 1.5,
                  }}
                >
                  {partner.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
