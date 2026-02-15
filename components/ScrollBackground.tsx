'use client';

import { useEffect, useRef } from 'react';

const entrepreneurImages = [
  '/heroes/jobs1.jpg',
  '/heroes/elon1.jpg',
  '/heroes/jensen2.jpg',
  '/heroes/elon3.jpg',
  '/heroes/jobs3.jpg',
  '/heroes/elon2.jpg',
  '/heroes/jensen1.jpeg',
];

const specImages = [
  '/heroes/1.jpg',
  '/heroes/2.jpg',
  '/heroes/3.jpg',
  '/heroes/4.jpg',
  '/heroes/5.jpg',
];

export default function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);
  const prevPhase = useRef('entrepreneur');
  const prevIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const imgEls = container.querySelectorAll<HTMLElement>('[data-bg]');

    const tick = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      const isSpec = progress >= 0.5;
      const phase = isSpec ? 'spec' : 'entrepreneur';
      const images = isSpec ? specImages : entrepreneurImages;
      const phaseProgress = isSpec
        ? (progress - 0.5) / 0.5
        : progress / 0.5;
      const clamped = Math.max(0, Math.min(1, phaseProgress));
      const index =
        Math.floor(clamped * images.length * 2) % images.length;

      if (phase === prevPhase.current && index === prevIndex.current) return;

      prevPhase.current = phase;
      prevIndex.current = index;

      imgEls.forEach((el) => {
        const match =
          el.dataset.phase === phase &&
          el.dataset.index === String(index);
        el.style.opacity = match ? '0.25' : '0';
      });
    };

    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = 0;
        tick();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    tick();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]"
    >
      {entrepreneurImages.map((src, i) => (
        <div
          key={src}
          data-bg=""
          data-phase="entrepreneur"
          data-index={i}
          className="absolute inset-0"
          style={{
            opacity: i === 0 ? 0.25 : 0,
            transition: 'opacity 2s ease-in-out',
            willChange: 'opacity',
          }}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover grayscale"
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}

      {specImages.map((src, i) => (
        <div
          key={src}
          data-bg=""
          data-phase="spec"
          data-index={i}
          className="absolute inset-0"
          style={{
            opacity: 0,
            transition: 'opacity 2s ease-in-out',
            willChange: 'opacity',
          }}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover grayscale"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}
