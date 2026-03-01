'use client';

import { startTransition, useEffect, useRef, useState } from 'react';

const principles = [
  {
    title: 'SHIP, DON\u2019T TALK',
    body: '\uC0AC\uC5C5\uACC4\uD68D\uC11C 100\uD398\uC774\uC9C0\uBCF4\uB2E4 \uACE0\uAC1D \uD55C \uBA85\uC758 \uACB0\uC81C\uAC00 \uB354 \uAC00\uCE58 \uC788\uC2B5\uB2C8\uB2E4. SPEC\uC5D0\uC11C\uB294 \uBC1C\uD45C\uAC00 \uC544\uB2C8\uB77C \uB7F0\uCE6D\uC774 \uD3C9\uAC00 \uAE30\uC900\uC785\uB2C8\uB2E4.',
  },
  {
    title: 'REVENUE IS TRUTH',
    body: '\uB9E4\uCD9C\uC740 \uAC70\uC9D3\uB9D0\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC2DC\uC7A5\uC774 \uC6D0\uD558\uB294 \uAC83\uC744 \uB9CC\uB4E4\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uB294 \uC720\uC77C\uD55C \uBC29\uBC95\uC740 \uB204\uAD70\uAC00\uAC00 \uB3C8\uC744 \uB0B4\uB294 \uAC83\uC785\uB2C8\uB2E4.',
  },
  {
    title: 'UNCOMFORTABLE IS GOOD',
    body: '\uD3B8\uC548\uD55C \uD658\uACBD\uC5D0\uC11C\uB294 \uC544\uBB34\uAC83\uB3C4 \uD0DC\uC5B4\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB9E4\uC8FC \uACF5\uAC1C\uB418\uB294 \uB9E4\uCD9C \uBCF4\uB4DC, \uB0C9\uC815\uD55C \uD53C\uB4DC\uBC31, \uB04A\uC784\uC5C6\uB294 \uB370\uB4DC\uB77C\uC778. \uBD88\uD3B8\uD568\uC744 \uC131\uC7A5\uC758 \uC5F0\uB8CC\uB85C \uC501\uB2C8\uB2E4.',
  },
  {
    title: 'NETWORK COMPOUNDS',
    body: '30\uC8FC\uAC00 \uB05D\uB098\uB3C4 \uAD00\uACC4\uB294 \uB05D\uB098\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. SPEC \uC54C\uB7FC\uB098\uC774 \uB124\uD2B8\uC6CC\uD06C\uB294 \uC2DC\uAC04\uC774 \uAC08\uC218\uB85D \uAC15\uD574\uC9C0\uB294 \uBCF5\uB9AC \uC790\uC0B0\uC785\uB2C8\uB2E4.',
  },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTransition(() => {
            setIsVisible(true);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-transparent">
      <div ref={sectionRef} className="mx-auto max-w-[640px] px-6 text-center">
        <span
          className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-white/50"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          What We Believe
        </span>

        <h2
          className="mb-4 text-[2rem] sm:text-[2.5rem] font-black uppercase leading-[0.95] text-white md:text-[3.5rem]"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}
        >
          NON‑NEGOTIABLE.
        </h2>
        <p
          className="mb-12 text-lg text-white/50"
          style={{ fontFamily: "'Pretendard', sans-serif" }}
        >
          타협하지 않는 4가지 원칙
        </p>

        <div className="space-y-4 md:space-y-6">
          {principles.map((principle, i) => (
            <div
              key={principle.title}
              className="block w-full border-l-[3px] border-[#FF6C0F] pl-5 text-left"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? 'translate3d(0, 0, 0)'
                  : 'translate3d(0, 16px, 0)',
                transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`,
                willChange: isVisible ? 'auto' : 'transform, opacity',
              }}
            >
              <h3
                className="text-base font-black uppercase tracking-wide text-white sm:text-lg"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {principle.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-white/80 md:text-base"
                style={{ fontFamily: "'MaruBuri', serif" }}
              >
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
