'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '50+', label: 'PROJECTS', subtext: 'Launched startups' },
  { number: '200+', label: 'MEMBERS', subtext: 'Total alumni' },
  { number: '15+', label: 'AWARDS', subtext: 'Competition wins' },
  { number: '10+', label: 'PARTNERS', subtext: 'Corporate partners' },
];

const achievements = [
  { year: '2024', title: 'Grand Prize, Startup Competition', org: 'SKKU Entrepreneurship Center' },
  { year: '2024', title: 'K-Startup Finals', org: 'Ministry of SMEs' },
  { year: '2023', title: 'Demo Day Launch', org: '50+ Investors attended' },
  { year: '2023', title: 'Accelerator Partnership', org: 'Sparklab, Primer' },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-16 text-center">
          <h2 
            className="text-5xl font-black uppercase tracking-tight text-white lg:text-6xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Our Track Record
          </h2>
          <p className="mt-4 font-['Pretendard'] text-lg font-light text-white/50">
            Built by SPEC founders
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-700 hover:bg-white/10 lg:p-8 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div 
                className="text-5xl font-black text-white lg:text-6xl"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {stat.number}
              </div>
              <div 
                className="mt-2 text-sm font-bold uppercase tracking-widest text-white/90"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {stat.label}
              </div>
              <div className="mt-1 font-['Pretendard'] text-sm font-light text-white/40">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 
            className="mb-8 text-center text-3xl font-bold uppercase tracking-wide text-white lg:text-4xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Milestones
          </h3>
          <div className="mx-auto max-w-2xl">
            {achievements.map((item, i) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`flex items-start gap-6 border-l-2 border-white/20 py-4 pl-6 transition-all duration-700 ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <span className="shrink-0 font-['Pretendard'] text-sm font-medium text-white/40">
                  {item.year}
                </span>
                <div>
                  <div className="font-['Pretendard'] text-base font-medium text-white">
                    {item.title}
                  </div>
                  <div className="mt-0.5 font-['Pretendard'] text-sm font-light text-white/50">
                    {item.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/companies"
            className="inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-wide text-white underline decoration-white/30 underline-offset-4 transition-all hover:decoration-white"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            View All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
