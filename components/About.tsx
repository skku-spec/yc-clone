export default function About() {
  const photoStripImages = [
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-2-compressed-a5f4c41c8c039e0bb0b38bb9d316b79ea9f8211d9e4fa19cf80a1377e74b3036.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-4-compressed-077596611ae3be172d6407ab7a9423f205939fbcfeef24fd54ca8da4f1370b27.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-6-compressed-cd04f86654c60d7c2642aeb14a7c7cd42719036be4e7764fd58a386383671fb6.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-1-compressed-569ab168698179832828d33e2cec6a76f2180fe19425d688788badc68a676d34.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/about/strip-picture-7-compressed-7f5971e8a87c7c6925fb2f68db87e098033291969eba2a5cabb46398978193e5.jpg",
  ];

  const founderPhotos = {
    aman: "https://bookface-static.ycombinator.com/assets/ycdc/about/aman-mishra-compressed-f86a1a0caaa317ed5e8770981a0ebb253846a406837c88fe89137ed0c85a7a47.jpg",
    adith: "https://bookface-static.ycombinator.com/assets/ycdc/about/adith-reddi-compressed-1c81fcfa8ef9cf7a23b35d0c34648d1b79ab613b0fdced3ea015d23ffb984cdc.jpg",
    bishesh: "https://bookface-static.ycombinator.com/assets/ycdc/about/bishesh-khadka-compressed-76f09ec549bbfdb8c7fa25d8ac0e943f2e3bc593cb5cc43af5b7fc5b8ad3ee9c.jpg",
    justin: "https://bookface-static.ycombinator.com/assets/ycdc/about/justin-lee-compressed-d28010cde316d6846b799904d8c9fd74ea60e799a781aa782693ae4e72f38f2b.jpg",
    fern: "https://bookface-static.ycombinator.com/assets/ycdc/about/fern-morrison-compressed-77abc8bb3419c4876f47ec4740fa41af61265d824a093af7d3537ac10f15b898.jpg",
  };

  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-[550px] flex-col gap-[36px] px-5">
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
              alt=""
              loading="lazy"
              className={`aspect-square min-w-0 flex-1 rounded-lg object-cover ${
                index >= 3 ? "max-md:hidden" : ""
              }`}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-['Outfit',sans-serif] text-[0.7rem] font-normal uppercase tracking-[0.15em] text-[#16140F]">
            In Founders&apos; Words
          </h3>

          <div className="flex flex-col gap-7">
            <div className="relative m-0">
              <span className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px]">
                YC compresses months of growth into weeks.
              </span>
              <img
                src={founderPhotos.aman}
                alt="Aman Mishra"
                loading="lazy"
                className="mx-1.5 mr-3 inline-block h-8 w-8 rounded-full object-cover"
              />
              <span className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px]">
                The sense of urgency is so infectious among founders that it
                becomes the most productive period in most people&apos;s lives.
              </span>
              <img
                src={founderPhotos.adith}
                alt="Adith Reddi"
                loading="lazy"
                className="mx-1.5 mr-3 inline-block h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="relative m-0">
              <span className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px]">
                It&apos;s a community of founders that you can&apos;t find
                anywhere else.
              </span>
              <img
                src={founderPhotos.bishesh}
                alt="Bishesh Khadka"
                loading="lazy"
                className="mx-1.5 mr-3 inline-block h-8 w-8 rounded-full object-cover"
              />
              <span className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px]">
                It feels like having the entire world at your back—from Partners
                to batchmates.
              </span>
              <img
                src={founderPhotos.justin}
                alt="Justin Lee"
                loading="lazy"
                className="mx-1.5 mr-3 inline-block h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="relative m-0">
              <span className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px]">
                Being surrounded by the top 1% of founders in the world just
                completely resets the bar.
              </span>
              <img
                src={founderPhotos.fern}
                alt="Fern Morrison"
                loading="lazy"
                className="mx-1.5 mr-3 inline-block h-8 w-8 rounded-full object-cover"
              />
              <span className="font-['Source_Serif_4',serif] text-[1.2rem] leading-[1.7] underline decoration-[rgba(255,90,0,0.25)] underline-offset-[3px]">
                You leave with a completely new sense of how fast
                &quot;fast&quot; can be.
              </span>
              <img
                src={founderPhotos.aman}
                alt="Aman Mishra"
                loading="lazy"
                className="mx-1.5 mr-3 inline-block h-8 w-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
