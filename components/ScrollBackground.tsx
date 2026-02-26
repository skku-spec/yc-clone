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

const allBackgroundImages = [...entrepreneurImages, ...specImages];

export default function ScrollBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerARef = useRef<HTMLImageElement>(null);
  const layerBRef = useRef<HTMLImageElement>(null);
  const rafId = useRef(0);
  const maxScrollRef = useRef(1);
  const prevPhase = useRef('entrepreneur');
  const prevIndex = useRef(0);
  const activeLayer = useRef<'a' | 'b'>('a');
  const activeSrcRef = useRef(entrepreneurImages[0]);
  const loadedImageSetRef = useRef<Set<string>>(new Set([entrepreneurImages[0], entrepreneurImages[1]]));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const layerA = layerARef.current;
    const layerB = layerBRef.current;
    if (!layerA || !layerB) {
      return;
    }

    const updateMetrics = () => {
      maxScrollRef.current = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    };

    let preloadCancelled = false;
    let preloadTimerId = 0;

    const preloadOne = (src: string) =>
      new Promise<void>((resolve) => {
        if (loadedImageSetRef.current.has(src)) {
          resolve();
          return;
        }

        const img = new Image();
        img.decoding = 'async';
        img.setAttribute('fetchpriority', 'low');
        img.onload = () => {
          loadedImageSetRef.current.add(src);
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
        img.src = src;
      });

    const preloadInBackground = async () => {
      for (const src of allBackgroundImages) {
        if (preloadCancelled) {
          break;
        }

        await preloadOne(src);

        await new Promise<void>((resolve) => {
          preloadTimerId = window.setTimeout(resolve, 60);
        });
      }
    };

    void preloadInBackground();

    const setActiveImage = (phase: string, index: number) => {
      const images = phase === 'spec' ? specImages : entrepreneurImages;
      const nextSrc = images[index] ?? images[0];

      if (nextSrc === activeSrcRef.current) {
        return;
      }

      const activeEl = activeLayer.current === 'a' ? layerA : layerB;
      const hiddenEl = activeLayer.current === 'a' ? layerB : layerA;

      const reveal = () => {
        hiddenEl.style.opacity = '0.25';
        activeEl.style.opacity = '0';
        activeLayer.current = activeLayer.current === 'a' ? 'b' : 'a';
        activeSrcRef.current = nextSrc;
        loadedImageSetRef.current.add(nextSrc);
      };

      const revealAfterDecode = () => {
        hiddenEl
          .decode()
          .then(reveal)
          .catch(reveal);
      };

      if (hiddenEl.getAttribute('src') === nextSrc && hiddenEl.complete) {
        revealAfterDecode();
        return;
      }

      hiddenEl.onload = null;
      hiddenEl.onerror = null;
      hiddenEl.src = nextSrc;
      if (hiddenEl.complete) {
        revealAfterDecode();
        return;
      }

      hiddenEl.onload = revealAfterDecode;
      hiddenEl.onerror = reveal;
    };

    const tick = () => {
      const scrollY = window.scrollY;
      const progress = scrollY / maxScrollRef.current;

      const isSpec =
        prevPhase.current === 'spec'
          ? progress >= 0.48
          : progress >= 0.52;
      const phase = isSpec ? 'spec' : 'entrepreneur';
      const images = isSpec ? specImages : entrepreneurImages;
      const phaseProgress = isSpec
        ? (progress - 0.5) / 0.5
        : progress / 0.5;
      const clamped = Math.max(0, Math.min(1, phaseProgress));
      const index = Math.min(
        images.length - 1,
        Math.floor(clamped * images.length),
      );

      if (phase === prevPhase.current && index === prevIndex.current) return;

      prevPhase.current = phase;
      prevIndex.current = index;

      setActiveImage(phase, index);
    };

    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        rafId.current = 0;
        tick();
      });
    };

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(document.documentElement);

    updateMetrics();
    setActiveImage('entrepreneur', 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateMetrics, { passive: true });
    tick();

    return () => {
      preloadCancelled = true;
      if (preloadTimerId) {
        window.clearTimeout(preloadTimerId);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateMetrics);
      resizeObserver.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
      layerA.onload = null;
      layerA.onerror = null;
      layerB.onload = null;
      layerB.onerror = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]"
    >
      <img
        ref={layerARef}
        src={entrepreneurImages[0]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-center grayscale"
        style={{ opacity: 0.25, transition: 'opacity 0.8s ease-out', willChange: 'opacity' }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <img
        ref={layerBRef}
        src={entrepreneurImages[1]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[48%_center] md:object-center grayscale"
        style={{ opacity: 0, transition: 'opacity 0.8s ease-out', willChange: 'opacity' }}
        loading="eager"
        fetchPriority="low"
        decoding="async"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
}
