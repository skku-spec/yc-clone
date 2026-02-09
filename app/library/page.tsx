"use client";

import { useRef, useMemo } from "react";
import Link from "next/link";
import {
  libraryItems,
  type LibraryItem,
  type Category,
} from "./library-data";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={11} cy={11} r={8} />
      <line x1={21} y1={21} x2={16.65} y2={16.65} />
    </svg>
  );
}

function timeAgo(dateStr: string): string {
  const monthMap: Record<string, number> = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
  };
  const parts = dateStr.split(" ");
  if (parts.length === 2) {
    const month = monthMap[parts[0]];
    const year = parseInt(parts[1]);
    if (!isNaN(year) && month !== undefined) {
      const then = new Date(year, month, 15);
      const now = new Date();
      const diffMs = now.getTime() - then.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      if (diffDays < 1) return "today";
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
      if (diffDays < 30) {
        const w = Math.floor(diffDays / 7);
        return `${w} week${w > 1 ? "s" : ""} ago`;
      }
      if (diffDays < 365) {
        const m = Math.floor(diffDays / 30);
        return `${m} month${m > 1 ? "s" : ""} ago`;
      }
      const y = Math.floor(diffDays / 365);
      return `${y} year${y > 1 ? "s" : ""} ago`;
    }
  }
  if (parts.length === 1) {
    const year = parseInt(parts[0]);
    if (!isNaN(year)) {
      const y = new Date().getFullYear() - year;
      if (y <= 0) return "this year";
      return `${y} year${y > 1 ? "s" : ""} ago`;
    }
  }
  return dateStr;
}

function formatViews(views: string): string {
  return `${views} views`;
}

function getYouTubeThumbnail(youtubeId: string): string {
  return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
}

function CarouselCard({ item }: { item: LibraryItem }) {
  const hasYouTube = !!item.youtubeId;

  return (
    <Link
      href={`/library/${item.slug}`}
      className="group block shrink-0"
      style={{ width: 340 }}
    >
      <div
        className="relative overflow-hidden rounded-[6px]"
        style={{ width: 340, height: 191 }}
      >
        {hasYouTube ? (
          <img
            src={getYouTubeThumbnail(item.youtubeId!)}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="relative h-full w-full"
            style={{ backgroundColor: item.thumbnailColor }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="max-w-[80%] px-4 text-center font-['Source_Serif_4',serif] text-[13px] font-medium leading-tight text-[#16140f]/50">
                {item.title}
              </span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/5" />
      </div>

      <div className="pt-2.5" style={{ width: 340 }}>
        {item.duration && (
          <p className="mb-0.5 font-['Outfit',sans-serif] text-[16px] font-extralight text-black">
            {item.duration}
          </p>
        )}
        <h3 className="mb-1 font-['Outfit',sans-serif] text-[14px] font-medium leading-snug text-[#16140f] group-hover:underline line-clamp-2">
          {item.title}
        </h3>
        <div className="flex items-center gap-1.5 font-['Outfit',sans-serif] text-[14px] font-extralight text-[#16140f]/50">
          {item.views && <span>{formatViews(item.views)}</span>}
          {item.views && item.date && <span>&middot;</span>}
          {item.date && <span>{timeAgo(item.date)}</span>}
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ item }: { item: LibraryItem }) {
  const hasYouTube = !!item.youtubeId;

  return (
    <Link
      href={`/library/${item.slug}`}
      className="group block"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-video w-full overflow-hidden rounded-[6px] md:aspect-auto md:h-auto md:w-7/12">
          {hasYouTube ? (
            <img
              src={getYouTubeThumbnail(item.youtubeId!)}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              className="relative h-full w-full min-h-[260px] rounded-[6px]"
              style={{ backgroundColor: item.thumbnailColor }}
            />
          )}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/5" />
        </div>

        <div className="flex flex-col justify-center py-4 md:w-5/12 md:pl-8 md:py-0">
          <h2 className="mb-2 font-['Outfit',sans-serif] text-[24px] font-medium leading-tight text-[#16140f] group-hover:underline">
            {item.title}
          </h2>
          <p className="mb-3 font-['Outfit',sans-serif] text-[16px] font-extralight leading-relaxed text-[#16140f]/70 line-clamp-3">
            {item.description}
          </p>
          <div className="flex items-center gap-2 font-['Outfit',sans-serif] text-[13px] text-[#16140f]/50">
            <span className="font-normal text-[#16140f]/80">{item.author}</span>
            {item.views && (
              <>
                <span>&middot;</span>
                <span>{formatViews(item.views)}</span>
              </>
            )}
            {item.date && (
              <>
                <span>&middot;</span>
                <span>{timeAgo(item.date)}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function Carousel({
  title,
  items,
}: {
  title: string;
  items: LibraryItem[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return null;

  return (
    <div className="mb-0 pt-3">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-['Outfit',sans-serif] text-[24px] font-normal text-[#16140f]">
          {title}
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <CarouselCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const featured = useMemo(
    () => libraryItems.find((item) => item.featured) || libraryItems[0],
    []
  );

  const carouselSections = useMemo(() => {
    const allSorted = [...libraryItems].sort((a, b) => {
      const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || "0");
      const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || "0");
      if (yearB !== yearA) return yearB - yearA;
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
      ];
      const monthA = months.findIndex((m) => a.date.includes(m));
      const monthB = months.findIndex((m) => b.date.includes(m));
      return monthB - monthA;
    });

    const categoryGroups: { title: string; category: Category }[] = [
      { title: "AI", category: "AI" },
      { title: "Product", category: "Product" },
      { title: "Growth", category: "Growth" },
      { title: "Fundraising", category: "Fundraising" },
      { title: "Founder Stories", category: "Founder Stories" },
      { title: "Leadership", category: "Leadership" },
      { title: "Engineering", category: "Engineering" },
      { title: "Design", category: "Design" },
      { title: "Sales", category: "Sales" },
      { title: "Hiring", category: "Hiring" },
    ];

    const sections: { title: string; items: LibraryItem[] }[] = [
      { title: "The Latest", items: allSorted.slice(0, 10) },
    ];

    for (const group of categoryGroups) {
      const items = libraryItems.filter((item) =>
        item.categories.includes(group.category)
      );
      if (items.length >= 2) {
        sections.push({ title: group.title, items });
      }
    }

    return sections;
  }, []);

  return (
    <section className="bg-[#f5f5ee] px-4 pb-20 pt-6">
      <div className="mx-auto max-w-[1100px]">
        <h1
          className="text-center font-['Source_Serif_4',serif] font-medium tracking-[-1.5px] mb-[50px]"
          style={{
            fontSize: 60,
            lineHeight: "75px",
            color: "rgb(0,0,0)",
          }}
        >
          YC Library
        </h1>

        <p className="text-center mx-auto max-w-screen-md -mt-2 mb-4 font-['Outfit',sans-serif] text-[18px] font-extralight leading-[32px] text-black">
          Watch videos, listen to podcasts, and read essays for startup
          founders. Peruse the full library archive{" "}
          <Link
            href="/library/search"
            className="text-black no-underline hover:underline"
          >
            here
          </Link>
          .
        </p>

        <div className="flex justify-center mt-4 mb-8">
          <Link
            href="/library/search"
            className="relative flex items-center"
            style={{ width: 194, height: 42 }}
          >
            <SearchIcon className="absolute left-3 h-4 w-4 text-[#16140f]/40" />
            <div
              className="flex h-full w-full items-center rounded-[4px] border border-[#6a7282] bg-white font-['Outfit',sans-serif] text-[16px] font-light text-[#16140f]/40"
              style={{ padding: "8px 12px 8px 36px" }}
            >
              Search...
            </div>
          </Link>
        </div>

        <div className="mb-10">
          <FeaturedCard item={featured} />
        </div>

        {carouselSections.map((section) => (
          <Carousel
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
