'use client';

import { useEffect, useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'entrepreneur' | 'spec'>('entrepreneur');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutEl = document.getElementById('about-section');
      const aboutTop = aboutEl ? aboutEl.offsetTop : Infinity;

      const isSpec = scrollY + window.innerHeight * 0.3 >= aboutTop;
      const images = isSpec ? specImages : entrepreneurImages;
      const sectionStart = isSpec ? aboutTop : 0;
      const sectionEnd = isSpec
        ? document.documentElement.scrollHeight - window.innerHeight
        : aboutTop;
      const sectionLength = sectionEnd - sectionStart || 1;
      const sectionProgress = Math.max(0, Math.min(1, (scrollY - sectionStart) / sectionLength));
      const index = Math.floor(sectionProgress * images.length * 2) % images.length;

      setPhase(isSpec ? 'spec' : 'entrepreneur');
      setCurrentIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
      {entrepreneurImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            phase === 'entrepreneur' && i === currentIndex ? 'opacity-[0.25]' : 'opacity-0'
          }`}
        >
          <img src={src} alt="" className="h-full w-full object-cover grayscale" />
        </div>
      ))}
      {specImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            phase === 'spec' && i === currentIndex ? 'opacity-[0.25]' : 'opacity-0'
          }`}
        >
          <img src={src} alt="" className="h-full w-full object-cover grayscale" />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}
