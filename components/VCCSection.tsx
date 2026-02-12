'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const features = [
  {
    title: '비즈니스 모델링',
    desc: '린 캔버스, TAM/SAM/SOM, 수익 구조 설계',
  },
  {
    title: 'Go-to-Market',
    desc: '고객 획득, 프라이싱, 그로스 전략 수립',
  },
  {
    title: 'IR & 피칭',
    desc: '투자 유치 전략, 피치덱 제작, 모의 IR',
  },
];

const mentors = [
  {
    name: 'Peter Kim',
    role: '전략 컨설턴트',
    company: '前 McKinsey',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Sarah Lee',
    role: '스타트업 투자심사역',
    company: '前 알토스벤처스',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'David Park',
    role: '연쇄 창업가',
    company: '2x Exit Founder',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
  },
  {
    name: 'Jimin Choi',
    role: '그로스 해커',
    company: '前 카카오모빌리티',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
  },
];

export default function VCCSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === sectionRef.current) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-transparent py-24 lg:py-32 transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="mx-auto max-w-[1100px] px-6">
         {/* Label */}
         <div className="text-center">
           <span className="text-sm font-bold uppercase tracking-[0.06em] text-white/60">
             Venture Creation Course
           </span>
         </div>

         {/* Headline */}
           <h2
            className="mt-5 text-center text-5xl font-black uppercase tracking-tight text-white lg:text-6xl"
           style={{
             fontFamily: 'system-ui, -apple-system, sans-serif',
           }}
         >
           미니 MBA를 넘어선 실전 창업 교육
         </h2>

         {/* Description */}
         <p className="mx-auto mt-6 max-w-2xl text-center font-['MaruBuri',serif] text-xl leading-relaxed text-white/70">
           성균관대 RISE 사업단과 공동 운영하는 VCC(Venture Creation Course)는
           창업의 A to Z를 다루는 미니 MBA 커리큘럼입니다. SPEC 멤버는 정규
           커리큘럼과 함께 VCC를 병행하며, 비즈니스 모델링부터 IR 피칭까지
           체계적으로 학습합니다.
         </p>

         {/* Feature Cards */}
         <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
           {features.map((feature) => (
             <div
               key={feature.title}
               className="rounded-xl border border-white/8 bg-transparent p-6 text-center"
             >
               <h3 className="mb-3 font-['Pretendard',sans-serif] text-xl font-bold text-white">
                 {feature.title}
               </h3>
               <p className="font-['Pretendard',sans-serif] text-base text-white/70">
                 {feature.desc}
               </p>
             </div>
           ))}
         </div>

         {/* Mentor Grid */}
         <div className="mt-20">
           <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.06em] text-white/60">
             VCC 멘토진
           </p>

           <div className="mx-auto grid max-w-2xl grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-4">
             {mentors.map((mentor) => (
               <div
                 key={mentor.name}
                 className="flex flex-col items-center text-center"
               >
                 <img
                   src={mentor.photo}
                   alt={mentor.name}
                   loading="lazy"
                   className="h-20 w-20 rounded-full object-cover ring-1 ring-white/10"
                 />
                 <span className="mt-3 font-['Pretendard',sans-serif] text-base font-semibold text-white">
                   {mentor.name}
                 </span>
                 <span className="font-['Pretendard',sans-serif] text-sm text-white/70">
                   {mentor.role}
                 </span>
                 <span className="font-['Pretendard',sans-serif] text-sm text-white/60">
                   {mentor.company}
                 </span>
               </div>
             ))}
           </div>
         </div>

         {/* CTA Link */}
         <div className="mt-12 text-center">
              <Link
               href="/vcc"
               className="inline-block text-lg font-medium text-white/60 underline decoration-white/20 underline-offset-4 transition-all duration-300 hover:decoration-[#FF6C0F]/40 hover:text-[#FF6C0F]"
            >
             VCC 커리큘럼 자세히 보기 →
           </Link>
         </div>
      </div>
    </section>
  );
}
