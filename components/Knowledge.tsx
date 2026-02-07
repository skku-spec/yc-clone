export default function Knowledge() {
  const videoArticles = [
    {
      title: "Andrej Karpathy: Software Is Changing (Again)",
      thumbnail:
        "https://bookface-static.ycombinator.com/assets/ycdc/knowledge/andrej-karpathy-startupschool-thumbnail-f31a834fbaf0754bca88d153f588af4e58a192f388a8dfad1d6e7b8d80fd9ddc.jpg",
    },
    {
      title: "How To Build The Future: Sam Altman",
      thumbnail:
        "https://bookface-static.ycombinator.com/assets/ycdc/knowledge/sam-altman-htbtf-thumbnail-1ac3d5f7e9b2c4d6a8f0e2b4d6c8a0f2e4b6d8c0a2f4e6b8d0c2a4f6e8b0d2c4.jpg",
    },
    {
      title: "YC Partners Answer Your Questions",
      thumbnail:
        "https://bookface-static.ycombinator.com/assets/ycdc/knowledge/office-hours-thumbnail-b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4.jpg",
    },
  ];

  const startupNews = [
    "Announcing the YC AI Student Starter Pack",
    "Emergent Raises $70M Series B at $300M Valuation",
    "Govdash Raises $30M Series B",
    "Fleetzero Raises $43M Series A for Battery-Powered Cargo Ships",
    "Deepgram Raises $130M Series C",
  ];

  const paulGrahamEssays = [
    "Default Alive or Default Dead",
    "Do Things that Don't Scale",
    "Be Relentlessly Resourceful",
    "How to Get Startup Ideas",
    "Startup = Growth",
  ];

  return (
    <section className="py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-[60px] text-center font-['Source_Serif_4',serif] text-5xl italic text-[#16140f]">
          Knowledge & News
        </h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-8 lg:w-2/3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {videoArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex flex-col gap-3"
                >
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-['Outfit',sans-serif] text-base font-light text-[#16140f]">
                    {article.title}
                  </h3>
                </a>
              ))}
            </div>

            <a href="#" className="group flex flex-col gap-6 sm:flex-row">
              <div className="aspect-video overflow-hidden rounded-xl sm:w-1/2">
                <img
                  src="https://bookface-static.ycombinator.com/assets/ycdc/knowledge/contrarian-bets-thumbnail-7338837a6c93d5ad4e5132173591a960a893ee96d2ba82617be6cab60aa20898.jpg"
                  alt="Billion-Dollar Unpopular Startup Ideas"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 sm:w-1/2">
                <span className="font-['Outfit',sans-serif] text-xs font-medium uppercase tracking-wider text-[#16140f]">
                  LIGHTCONE PODCAST
                </span>
                <h3 className="font-['Source_Serif_4',serif] text-3xl font-normal text-[#16140f]">
                  Billion-Dollar Unpopular Startup Ideas
                </h3>
                <p className="font-['Outfit',sans-serif] text-base font-light text-[#16140f]">
                  The Lightcone team discusses contrarian startup ideas that
                  became billion-dollar companies, and why the best
                  opportunities often look bad at first.
                </p>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-10 lg:w-1/3">
            <div className="flex flex-col gap-4">
              <h4 className="font-['Outfit',sans-serif] text-xs font-medium uppercase italic tracking-wider text-[#16140f]">
                Startup News
              </h4>
              <div className="flex flex-col gap-3">
                {startupNews.map((news, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center justify-between font-['Outfit',sans-serif] text-sm font-light text-[#16140f] transition-colors hover:text-[#ff5a00]"
                  >
                    <span>{news}</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-['Outfit',sans-serif] text-xs font-medium uppercase italic tracking-wider text-[#16140f]">
                Paul Graham Essays
              </h4>
              <div className="flex flex-col gap-3">
                {paulGrahamEssays.map((essay, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-center justify-between font-['Outfit',sans-serif] text-sm font-light text-[#16140f] transition-colors hover:text-[#ff5a00]"
                  >
                    <span>{essay}</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      ›
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
