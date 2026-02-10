export default function CTA() {
  const founderPhotos = [
    "https://bookface-static.ycombinator.com/assets/ycdc/cta/strip-1-compressed-ce42bc8fecdc153d730248e38ee249308ecc331b18578e104aea271799bcac2b.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/cta/strip-2-compressed-a8ffaac8528534c7c9c4e7fb89f29b5ab04d459c3e49e64cbb1bbeae1f388c65.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/cta/strip-3-compressed-d06014b81ad5bdbae6d2c82c9588e945ced85c262b2f8d84293c259d67c01d6b.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/cta/strip-4-compressed-b0fc0e34b4469e0975477cbc90078f1409fadc74f153fa2b9b3627552aa88495.jpg",
    "https://bookface-static.ycombinator.com/assets/ycdc/cta/strip-5-compressed-ce27431ff3116220609285866be4349397afb8fe50dac47a7fd72e0977a063b6.jpg",
  ];

  return (
    <section className="pb-8 pt-0 bg-transparent">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6">
        <h2 
          className="text-center text-[3.75rem] font-black uppercase leading-[1.1] text-white"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Ready to Build?
        </h2>

        <p className="mt-6 w-3/4 text-center font-['Pretendard',sans-serif] text-lg font-light text-white/80">
          All you need is an idea. Let's make it happen.
        </p>

        <a
          href="/apply"
          className="mt-10 flex h-20 items-center justify-center rounded-full bg-[#FF6C0F] px-10 pb-1 text-[1.75rem] font-bold uppercase text-[#FCFCF8] transition-all hover:brightness-90 hover:scale-105"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Apply Now
        </a>

         <div className="mt-20 flex w-full gap-3">
           {founderPhotos.map((src, index) => (
             <img
               key={index}
               src={src}
               alt="SPEC 커뮤니티"
               loading="lazy"
               className={`aspect-square min-w-0 flex-1 rounded-lg object-cover opacity-80 ${
                 index >= 3 ? "max-md:hidden" : ""
               }`}
             />
           ))}
         </div>
      </div>
    </section>
  );
}
