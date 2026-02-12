"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { libraryItems, type LibraryItem } from "../library-data";

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

function ArrowLeftIcon({ className }: { className?: string }) {
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
      <line x1={19} y1={12} x2={5} y2={12} />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function TypeBadge({ type }: { type: LibraryItem["type"] }) {
  const colors: Record<string, string> = {
    Video: "bg-red-100 text-red-700",
    Essay: "bg-amber-100 text-amber-700",
    Podcast: "bg-purple-100 text-purple-700",
    Guide: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase font-['Pretendard',sans-serif] ${colors[type] || "bg-gray-100 text-gray-700"}`}
    >
      {type}
    </span>
  );
}

function SearchResultCard({ item }: { item: LibraryItem }) {
  return (
    <Link
      href={`/library/${item.slug}`}
      className="group flex gap-4 rounded-xl border border-[#16140f]/6 bg-white p-4 transition-all hover:border-[#FF6C0F]/20 hover:shadow-sm"
    >
      <div
        className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-lg sm:block"
        style={{ backgroundColor: item.thumbnailColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="px-2 text-center font-['MaruBuri',serif] text-[10px] font-medium text-[#16140f]/40 leading-tight">
             {item.title}
           </span>
         </div>
         {item.duration && item.type === "Video" && (
           <div className="absolute right-1.5 bottom-1.5 flex items-center gap-0.5 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-medium text-white font-['Pretendard',sans-serif]">
             <PlayIcon className="h-2 w-2" />
             {item.duration}
           </div>
         )}
      </div>

      <div className="flex min-w-0 flex-col justify-center">
        <div className="mb-1 flex items-center gap-2">
          <TypeBadge type={item.type} />
           {item.categories.slice(0, 2).map((cat) => (
             <span
               key={cat}
               className="hidden text-[11px] text-[#16140f]/40 font-['Pretendard',sans-serif] sm:inline"
             >
               {cat}
             </span>
           ))}
        </div>
         <h3 className="mb-1 truncate font-['MaruBuri',serif] text-[1rem] font-semibold leading-snug text-[#16140f] transition-colors group-hover:text-[#FF6C0F]">
           {item.title}
         </h3>
         <p className="line-clamp-1 text-[13px] font-['Pretendard',sans-serif] font-normal text-[#16140f]/50">
          {item.author}
          {item.date && <span className="ml-1.5">&middot; {item.date}</span>}
          {item.views && (
            <span className="ml-1.5">&middot; {item.views} views</span>
          )}
        </p>
      </div>
    </Link>
  );
}

export default function LibrarySearchPage() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return libraryItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categories.some((c) => c.toLowerCase().includes(q))
    );
  }, [query]);

  const popularSearches = [
    "startup ideas",
    "fundraising",
    "product market fit",
    "AI",
    "design",
    "growth",
    "co-founder",
    "pricing",
  ];

   return (
     <section className="px-4 pb-24 pt-12 md:pt-16">
      <div className="mx-auto max-w-[720px]">
         <Link
           href="/library"
           className="mb-6 inline-flex items-center gap-1.5 font-['Pretendard',sans-serif] text-[13px] font-medium text-[#16140f]/50 transition-colors hover:text-[#FF6C0F]"
         >
           <ArrowLeftIcon className="h-3.5 w-3.5" />
           자료실로 돌아가기
         </Link>

         <h1 className="mb-6 font-[system-ui] text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-tight text-[#16140f]">
            Search
         </h1>

        <div className="relative mb-8">
          <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[#16140f]/30" />
           <input
             ref={inputRef}
             type="text"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             placeholder="검색어를 입력하세요..."
             className="w-full rounded-2xl border border-[#16140f]/12 bg-white py-4 pr-4 pl-12 font-['Pretendard',sans-serif] text-[16px] font-normal text-[#16140f] shadow-sm outline-none transition-all placeholder:text-[#16140f]/35 focus:border-[#FF6C0F]/40 focus:ring-2 focus:ring-[#FF6C0F]/10"
           />
        </div>

        {!query.trim() && (
           <div className="mb-10">
             <p className="mb-3 font-['Pretendard',sans-serif] text-[13px] font-medium tracking-wide text-[#16140f]/40 uppercase">
               인기 검색
             </p>
             <div className="flex flex-wrap gap-2">
               {popularSearches.map((term) => (
                 <button
                   key={term}
                   onClick={() => setQuery(term)}
                   className="rounded-full border border-[#16140f]/10 bg-white px-4 py-1.5 font-['Pretendard',sans-serif] text-[13px] font-normal text-[#16140f]/60 transition-all hover:border-[#FF6C0F]/30 hover:text-[#FF6C0F]"
                 >
                   {term}
                 </button>
               ))}
             </div>
           </div>
        )}

         {query.trim() && (
           <p className="mb-6 font-['Pretendard',sans-serif] text-[14px] font-normal text-[#16140f]/50">
             &ldquo;<span className="font-medium text-[#16140f]">{query}</span>&rdquo;에 대한 {results.length}개의 검색 결과
           </p>
         )}

        {query.trim() && results.length > 0 && (
          <div className="flex flex-col gap-3">
            {results.map((item) => (
              <SearchResultCard key={item.slug} item={item} />
            ))}
          </div>
        )}

         {query.trim() && results.length === 0 && (
           <div className="py-16 text-center">
             <div className="mb-4 text-4xl">🔍</div>
             <p className="mb-2 font-[system-ui] text-lg font-bold text-[#16140f]/70">
               검색 결과가 없습니다
             </p>
             <p className="font-['Pretendard',sans-serif] text-[14px] font-normal text-[#16140f]/40">
               다른 검색어를 시도하거나 {" "}
               <Link
                 href="/library"
                 className="text-[#FF6C0F] underline underline-offset-2"
               >
                 전체 자료실
               </Link>
               을 둘러보세요
             </p>
           </div>
         )}
      </div>
    </section>
  );
}
