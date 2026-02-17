'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const mainPartners = [
  { name: '성균관대학교 RISE 사업단', logo: '/logos/rise.png', mobileHeight: 'h-14', desktopHeight: 'md:h-[120px]' },
  { name: '카카오모빌리티', logo: '/logos/kakao.svg', mobileHeight: 'h-5', desktopHeight: 'md:h-10' },
  { name: 'SL IT', logo: '/logos/SL_IT.svg', mobileHeight: 'h-4', desktopHeight: 'md:h-10' },
];

const mentorCompanies = [
  '카카오모빌리티',
  '삼성전자',
  '네이버',
  '토스',
  '쿠팡',
  '배달의민족',
  '라인',
  'SK텔레콤',
];

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
      className={`relative w-full py-20 lg:py-28 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mx-auto max-w-[900px] px-6">
        <p className="mb-10 text-center font-['Pretendard',sans-serif] text-sm font-semibold uppercase tracking-[0.06em] text-white/60">
          함께하는 파트너
        </p>

        <div className="flex items-center justify-center gap-6 sm:gap-14 md:gap-20">
          {mainPartners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={300}
              height={80}
              className={`${partner.mobileHeight} ${partner.desktopHeight} w-auto object-contain brightness-0 invert`}
            />
          ))}
        </div>

        <div className="mx-auto my-10 max-w-md border-t border-white/8" />

        <p className="mb-6 text-center font-['Pretendard',sans-serif] text-xs font-semibold uppercase tracking-[0.06em] text-white/50">
          멘토진 출신 기업
        </p>

        <p className="text-center font-['Pretendard',sans-serif] text-base font-normal text-white/60">
          {mentorCompanies.join(' · ')}
        </p>
      </div>
    </section>
  );
}
