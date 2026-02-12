"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

   return (
     <section ref={sectionRef} className="pb-8 pt-0 bg-transparent">
       <div
         className="mx-auto flex max-w-4xl flex-col items-center px-6 transition-opacity duration-500 ease-in-out"
         style={{
           opacity: visible ? 1 : 0,
         }}
       >
         <h2 className="text-center text-[40px] md:text-[56px] font-black uppercase leading-[1.1] text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
           4기와 함께할
           <br />
           파운더를 찾습니다
         </h2>

         <p className="mt-6 w-3/4 text-center font-['MaruBuri',serif] text-xl font-normal text-white/80">
           아이디어보다 실행력. 30주 안에 매출로 증명하세요.
         </p>

         <a
           href="/apply"
           className="mt-10 flex h-14 items-center justify-center rounded-full bg-[#FF6C0F] px-8 font-['Pretendard',sans-serif] text-lg font-semibold text-[#FCFCF8] transition-brightness duration-200 hover:brightness-95"
         >
            Apply
          </a>

         <p className="mt-4 font-['Pretendard',sans-serif] text-base text-white/60">
            Deadline: March 2026
         </p>
       </div>
     </section>
   );
}
