"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative -ml-[calc(50vw-50%)] w-screen overflow-hidden"
    >
      <div className="relative flex h-[90vh] flex-col items-center justify-center px-6">
       <div
           className="flex max-w-[1200px] flex-col items-center gap-8 mx-auto"
           style={{
             opacity: mounted ? 1 : 0,
             transform: mounted ? "translateY(0)" : "translateY(20px)",
             transition: "opacity 0.6s ease, transform 0.6s ease",
           }}
         >
          {/* Batch badge */}
           <span className="inline-block rounded-full border border-white/20 px-4 py-1 font-['Outfit',sans-serif] text-xs uppercase tracking-[0.08em] text-white/50">
             2026 Spring · 4th Batch
           </span>

            {/* Main headline */}
            <h1
              className="text-center font-black uppercase leading-[0.9] tracking-[-0.03em] text-white text-[48px] md:text-[72px] lg:text-[96px]"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
            >
              <span className="text-orange-500">EXECUTION</span>
              <br />
              IS EVERYTHING.
            </h1>

            {/* Subtext */}
            <div className="text-center mt-6 flex flex-col gap-3">
              <p
                className="font-['Outfit',sans-serif] font-semibold tracking-[0.05em] text-white text-base md:text-lg"
              >
                SKKU Prep Entrepreneurs&apos; Club
              </p>
              <p
                className="font-['Outfit',sans-serif] font-light tracking-wide text-white/70 text-base md:text-lg"
              >
                Building founders who devour markets — Korea first, then the world.
              </p>
            </div>
        </div>

         {/* Scroll-down arrow */}
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
           <svg
             width="20"
             height="20"
             viewBox="0 0 20 20"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             className="text-white"
           >
             <path
               d="M6 8L10 12L14 8"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             />
           </svg>
         </div>
      </div>
    </section>
  );
}
