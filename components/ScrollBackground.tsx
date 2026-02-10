'use client';

import { useEffect, useState } from 'react';

const heroImages = [
  '/heroes/jobs1.jpg',
  '/heroes/elon1.jpg',
  '/heroes/jensen2.jpg',
  '/heroes/elon3.jpg',
  '/heroes/jobs3.jpg',
  '/heroes/elon2.jpg',
  '/heroes/jensen1.jpeg',
];

export default function ScrollBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / docHeight;
      const index = Math.floor(scrollProgress * heroImages.length * 2) % heroImages.length;
      setCurrentIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === currentIndex ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover grayscale"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}
