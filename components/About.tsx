export default function About() {
  const photoStripImages = [
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-2-compressed-a5f4c41c8c039e0bb0b38bb9d316b79ea9f8211d9e4fa19cf80a1377e74b3036.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-4-compressed-077596611ae3be172d6407ab7a9423f205939fbcfeef24fd54ca8da4f1370b27.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-6-compressed-cd04f86654c60d7c2642aeb14a7c7cd42719036be4e7764fd58a386383671fb6.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-1-compressed-569ab168698179832828d33e2cec6a76f2180fe19425d688788badc68a676d34.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-7-compressed-7f5971e8a87c7c6925fb2f68db87e098033291969eba2a5cabb46398978193e5.jpg",
  ];

  const founders = {
    aman: {
      name: "Aman Mishra",
      batch: "F25",
      bio: "Founder of Unsiloed AI (F25)",
      photo: "https://bookface-static.ycombinator.com/assets/ycdc/about/aman-mishra-compressed-f86a1a0caaa317ed5e8770981a0ebb253846a406837c88fe89137ed0c85a7a47.jpg",
    },
    adith: {
      name: "Adith Reddi",
      batch: "S25",
      bio: "Founder of Riff (S25)",
      photo: "https://bookface-static.ycombinator.com/assets/ycdc/about/adith-reddi-compressed-1c81fcfa8ef9cf7a23b35d0c34648d1b79ab613b0fdced3ea015d23ffb984cdc.jpg",
    },
    bishesh: {
      name: "Bishesh Khadka",
      batch: "S25",
      bio: "Co-founder of Flux (S25)",
      photo: "https://bookface-static.ycombinator.com/assets/ycdc/about/bishesh-khadka-compressed-76f09ec549bbfdb8c7fa25d8ac0e943f2e3bc593cb5cc43af5b7fc5b8ad3ee9c.jpg",
    },
    justin: {
      name: "Justin Lee",
      batch: "S25",
      bio: "Co-founder of Momentum (S25)",
      photo: "https://bookface-static.ycombinator.com/assets/ycdc/about/justin-lee-compressed-d28010cde316d6846b799904d8c9fd74ea60e799a781aa782693ae4e72f38f2b.jpg",
    },
    fern: {
      name: "Fern Morrison",
      batch: "F24",
      bio: "Founder of Atlas (F24)",
      photo: "https://bookface-static.ycombinator.com/assets/ycdc/about/fern-morrison-compressed-77abc8bb3419c4876f47ec4740fa41af61265d824a093af7d3537ac10f15b898.jpg",
    },
  };

  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-[550px] flex-col gap-7 px-5">
        <div className="flex flex-col gap-7">
          <p className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] text-[#16140F] first-letter:float-left first-letter:mr-3 first-letter:text-[7.6rem] first-letter:font-bold first-letter:leading-[0.75] first-letter:text-[#16140F]">
            In 2005, Y Combinator developed a new model of startup funding. Four
            times a year we invest $500k in a select group of startups. They
            move to San Francisco for three months, where we work intensively
            with them to get the company into the best possible shape, before
            they present to a large audience of investors on Demo Day.
          </p>
          <p className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] text-[#16140F]">
            But YC doesn&apos;t end on Demo Day. We and the YC alumni network
            continue to help founders for the life of their company, and beyond.
          </p>
        </div>

        <div className="my-8 -ml-[calc(50vw-50%)] flex w-screen gap-3 overflow-hidden px-5">
          {photoStripImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="YC founder"
              loading="lazy"
              className={`aspect-square min-w-0 flex-1 rounded-lg object-cover ${
                index >= 3 ? "max-md:hidden" : ""
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-['Outfit',sans-serif] text-[0.7rem] font-normal uppercase tracking-[0.15em] text-[#16140F]">
            In Founders&apos; Words
          </h2>

          <div className="flex flex-col gap-7">
            <div className="relative m-0">
              <span className="inline py-1.5 text-[1.2rem] font-normal leading-[1.7] font-['Source_Serif_4',serif] underline decoration-[rgba(255,90,0,0.6)] underline-offset-[3px] transition-all duration-200 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                YC compresses months of growth into weeks.
              </span>
              <span className="group/avatar relative inline-block align-middle mx-1.5">
                <button
                  className="inline-block cursor-pointer border-0 bg-transparent p-0 transition-all"
                  aria-label="Aman Mishra"
                >
                  <img
                    src={founders.aman.photo}
                    alt="Aman Mishra"
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
                <div className="pointer-events-none absolute left-full top-1/2 z-[1000] ml-3 flex h-[240px] w-[200px] -translate-y-1/2 items-end overflow-hidden rounded-xl opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100 max-[1100px]:hidden">
                  <div className="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-b after:from-transparent after:via-transparent after:via-50% after:to-black/85 after:content-['']">
                    <img src={founders.aman.photo} alt={founders.aman.name} className="block h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="relative z-[3] w-full p-4 text-left">
                    <h3 className="m-0 mb-1 font-['Source_Serif_4',serif] text-[0.95rem] font-medium leading-[1.3] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">{founders.aman.name}</h3>
                    <p className="m-0 mb-1 font-['Outfit',sans-serif] text-xs font-normal leading-[1.3] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">{founders.aman.bio}</p>
                  </div>
                </div>
              </span>
              <span className="inline py-1.5 text-[1.2rem] font-normal leading-[1.7] font-['Source_Serif_4',serif] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px] transition-all duration-200 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                The sense of urgency is so infectious among founders that it
                becomes the most productive period in most people&apos;s lives.
              </span>
              <span className="group/avatar relative inline-block align-middle mx-1.5">
                <button
                  className="inline-block cursor-pointer border-0 bg-transparent p-0 transition-all"
                  aria-label="Adith Reddi"
                >
                  <img
                    src={founders.adith.photo}
                    alt="Adith Reddi"
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
                <div className="pointer-events-none absolute left-full top-1/2 z-[1000] ml-3 flex h-[240px] w-[200px] -translate-y-1/2 items-end overflow-hidden rounded-xl opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100 max-[1100px]:hidden">
                  <div className="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-b after:from-transparent after:via-transparent after:via-50% after:to-black/85 after:content-['']">
                    <img src={founders.adith.photo} alt={founders.adith.name} className="block h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="relative z-[3] w-full p-4 text-left">
                    <h3 className="m-0 mb-1 font-['Source_Serif_4',serif] text-[0.95rem] font-medium leading-[1.3] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">{founders.adith.name}</h3>
                    <p className="m-0 mb-1 font-['Outfit',sans-serif] text-xs font-normal leading-[1.3] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">{founders.adith.bio}</p>
                  </div>
                </div>
              </span>
            </div>

            <div className="relative m-0">
              <span className="inline py-1.5 text-[1.2rem] font-normal leading-[1.7] font-['Source_Serif_4',serif] underline decoration-[rgba(255,90,0,0.6)] underline-offset-[3px] transition-all duration-200 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                It&apos;s a community of founders that you can&apos;t find
                anywhere else.
              </span>
              <span className="group/avatar relative inline-block align-middle mx-1.5">
                <button
                  className="inline-block cursor-pointer border-0 bg-transparent p-0 transition-all"
                  aria-label="Bishesh Khadka"
                >
                  <img
                    src={founders.bishesh.photo}
                    alt="Bishesh Khadka"
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
                <div className="pointer-events-none absolute left-full top-1/2 z-[1000] ml-3 flex h-[240px] w-[200px] -translate-y-1/2 items-end overflow-hidden rounded-xl opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100 max-[1100px]:hidden">
                  <div className="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-b after:from-transparent after:via-transparent after:via-50% after:to-black/85 after:content-['']">
                    <img src={founders.bishesh.photo} alt={founders.bishesh.name} className="block h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="relative z-[3] w-full p-4 text-left">
                    <h3 className="m-0 mb-1 font-['Source_Serif_4',serif] text-[0.95rem] font-medium leading-[1.3] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">{founders.bishesh.name}</h3>
                    <p className="m-0 mb-1 font-['Outfit',sans-serif] text-xs font-normal leading-[1.3] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">{founders.bishesh.bio}</p>
                  </div>
                </div>
              </span>
              <span className="inline py-1.5 text-[1.2rem] font-normal leading-[1.7] font-['Source_Serif_4',serif] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px] transition-all duration-200 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                It feels like having the entire world at your back—from Partners
                to batchmates.
              </span>
              <span className="group/avatar relative inline-block align-middle mx-1.5">
                <button
                  className="inline-block cursor-pointer border-0 bg-transparent p-0 transition-all"
                  aria-label="Justin Lee"
                >
                  <img
                    src={founders.justin.photo}
                    alt="Justin Lee"
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
                <div className="pointer-events-none absolute left-full top-1/2 z-[1000] ml-3 flex h-[240px] w-[200px] -translate-y-1/2 items-end overflow-hidden rounded-xl opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100 max-[1100px]:hidden">
                  <div className="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-b after:from-transparent after:via-transparent after:via-50% after:to-black/85 after:content-['']">
                    <img src={founders.justin.photo} alt={founders.justin.name} className="block h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="relative z-[3] w-full p-4 text-left">
                    <h3 className="m-0 mb-1 font-['Source_Serif_4',serif] text-[0.95rem] font-medium leading-[1.3] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">{founders.justin.name}</h3>
                    <p className="m-0 mb-1 font-['Outfit',sans-serif] text-xs font-normal leading-[1.3] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">{founders.justin.bio}</p>
                  </div>
                </div>
              </span>
            </div>

            <div className="relative m-0">
              <span className="inline py-1.5 text-[1.2rem] font-normal leading-[1.7] font-['Source_Serif_4',serif] underline decoration-[rgba(255,90,0,0.6)] underline-offset-[3px] transition-all duration-200 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                Being surrounded by the top 1% of founders in the world just
                completely resets the bar.
              </span>
              <span className="group/avatar relative inline-block align-middle mx-1.5">
                <button
                  className="inline-block cursor-pointer border-0 bg-transparent p-0 transition-all"
                  aria-label="Fern Morrison"
                >
                  <img
                    src={founders.fern.photo}
                    alt="Fern Morrison"
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
                <div className="pointer-events-none absolute left-full top-1/2 z-[1000] ml-3 flex h-[240px] w-[200px] -translate-y-1/2 items-end overflow-hidden rounded-xl opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100 max-[1100px]:hidden">
                  <div className="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-b after:from-transparent after:via-transparent after:via-50% after:to-black/85 after:content-['']">
                    <img src={founders.fern.photo} alt={founders.fern.name} className="block h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="relative z-[3] w-full p-4 text-left">
                    <h3 className="m-0 mb-1 font-['Source_Serif_4',serif] text-[0.95rem] font-medium leading-[1.3] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">{founders.fern.name}</h3>
                    <p className="m-0 mb-1 font-['Outfit',sans-serif] text-xs font-normal leading-[1.3] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">{founders.fern.bio}</p>
                  </div>
                </div>
              </span>
              <span className="inline py-1.5 text-[1.2rem] font-normal leading-[1.7] font-['Source_Serif_4',serif] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px] transition-all duration-200 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                You leave with a completely new sense of how fast
                &quot;fast&quot; can be.
              </span>
              <span className="group/avatar relative inline-block align-middle mx-1.5">
                <button
                  className="inline-block cursor-pointer border-0 bg-transparent p-0 transition-all"
                  aria-label="Aman Mishra"
                >
                  <img
                    src={founders.aman.photo}
                    alt="Aman Mishra"
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </button>
                <div className="pointer-events-none absolute left-full top-1/2 z-[1000] ml-3 flex h-[240px] w-[200px] -translate-y-1/2 items-end overflow-hidden rounded-xl opacity-0 shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover/avatar:pointer-events-auto group-hover/avatar:opacity-100 max-[1100px]:hidden">
                  <div className="absolute inset-0 z-[1] h-full w-full after:absolute after:inset-0 after:z-[2] after:bg-gradient-to-b after:from-transparent after:via-transparent after:via-50% after:to-black/85 after:content-['']">
                    <img src={founders.aman.photo} alt={founders.aman.name} className="block h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="relative z-[3] w-full p-4 text-left">
                    <h3 className="m-0 mb-1 font-['Source_Serif_4',serif] text-[0.95rem] font-medium leading-[1.3] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.3)]">{founders.aman.name}</h3>
                    <p className="m-0 mb-1 font-['Outfit',sans-serif] text-xs font-normal leading-[1.3] text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">{founders.aman.bio}</p>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
