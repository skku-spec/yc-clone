import Link from "next/link";
import { notFound } from "next/navigation";
import { libraryItems } from "../library-data";

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

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Video: "bg-red-100 text-red-700",
    Essay: "bg-amber-100 text-amber-700",
    Podcast: "bg-purple-100 text-purple-700",
    Guide: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[12px] font-semibold tracking-wide uppercase font-['Pretendard',sans-serif] ${colors[type] || "bg-gray-100 text-gray-700"}`}
    >
      {type}
    </span>
  );
}

function RelatedCard({
  item,
}: {
  item: (typeof libraryItems)[number];
}) {
  return (
    <Link href={`/library/${item.slug}`} className="group block">
      <div
        className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg"
        style={{ backgroundColor: item.thumbnailColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="px-4 text-center font-['MaruBuri',serif] text-[11px] font-medium text-[#16140f]/40 leading-tight">
             {item.title}
           </span>
         </div>
         {item.duration && item.type === "Video" && (
           <div className="absolute right-2 bottom-2 flex items-center gap-0.5 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-medium text-white font-['Pretendard',sans-serif]">
             <PlayIcon className="h-2 w-2" />
             {item.duration}
           </div>
         )}
        <div className="absolute inset-0 bg-[#FF6C0F]/0 transition-colors duration-200 group-hover:bg-[#FF6C0F]/10" />
      </div>
      <h4 className="mb-0.5 font-['MaruBuri',serif] text-[0.9rem] font-semibold leading-snug text-[#16140f] transition-colors group-hover:text-[#FF6C0F]">
         {item.title}
       </h4>
       <p className="text-[12px] font-['Pretendard',sans-serif] font-normal text-[#16140f]/50">
        {item.author}
        {item.views && <span className="ml-1">&middot; {item.views} views</span>}
      </p>
    </Link>
  );
}

export function generateStaticParams() {
  return libraryItems.slice(0, 15).map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = libraryItems.find((i) => i.slug === slug);
  if (!item) {
    return { title: "Not Found | SPEC 자료실" };
  }
  return {
    title: `${item.title} | SPEC 자료실`,
    description: item.description,
  };
}

export default async function LibraryArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = libraryItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedItems = libraryItems
    .filter(
      (other) =>
        other.slug !== item.slug &&
        other.categories.some((c) => item.categories.includes(c))
    )
    .slice(0, 5);

  const bodyParagraphs = item.body.split("\n\n").filter(Boolean);

   return (
     <section className="px-4 pb-24 pt-12 md:pt-16">
       <div className="mx-auto max-w-[1100px]">
         <nav className="mb-6 flex items-center gap-2 font-['Pretendard',sans-serif] text-[13px] font-normal text-[#16140f]/50">
            <Link
              href="/library"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#FF6C0F]"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" />
              자료실
            </Link>
            <span>/</span>
            <span className="truncate text-[#16140f]/70">{item.title}</span>
          </nav>

         <div className="flex flex-col gap-12 lg:flex-row">
          <article className="min-w-0 flex-1">
            <div className="mb-4 flex items-center gap-3">
              <TypeBadge type={item.type} />
               {item.categories.map((cat) => (
                 <span
                   key={cat}
                   className="rounded-full border border-[#16140f]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#16140f]/50 font-['Pretendard',sans-serif]"
                 >
                   {cat}
                 </span>
               ))}
            </div>

            <h1 className="mb-4 font-[system-ui] text-[clamp(1.75rem,4vw,2.75rem)] font-black leading-tight tracking-tight text-[#16140f]">
              {item.title}
            </h1>

            <div className="mb-6 flex items-center gap-3">
               <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6C0F]/10 text-[13px] font-semibold text-[#FF6C0F] font-['Pretendard',sans-serif]">
                 {item.author
                   .split(" ")
                   .map((n) => n[0])
                   .join("")}
               </div>
               <div>
                 <p className="font-['Pretendard',sans-serif] text-[14px] font-medium text-[#16140f]">
                   {item.author}
                 </p>
                 <p className="font-['Pretendard',sans-serif] text-[12px] font-normal text-[#16140f]/50">
                  {item.authorRole && (
                    <span>{item.authorRole} &middot; </span>
                  )}
                  {item.date}
                  {item.views && <span> &middot; {item.views} views</span>}
                </p>
              </div>
            </div>

            {item.youtubeId && (
              <div className="mb-8 overflow-hidden rounded-xl">
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&enablejsapi=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            )}

            {!item.youtubeId && item.type === "Video" && (
              <div className="mb-8 overflow-hidden rounded-xl">
                <div
                  className="relative flex aspect-video w-full items-center justify-center"
                  style={{ backgroundColor: item.thumbnailColor }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/10">
                      <PlayIcon className="h-8 w-8 text-[#16140f]/40" />
                    </div>
                    <span className="font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f]/40">
                       Video player
                     </span>
                  </div>
                </div>
              </div>
            )}

            <p className="mb-8 font-['Pretendard',sans-serif] text-[16px] font-normal leading-relaxed text-[#16140f]/70 italic border-l-2 border-[#FF6C0F]/30 pl-4">
              {item.description}
            </p>

            <div className="prose-yc">
              {bodyParagraphs.map((paragraph, i) => {
                const trimmed = paragraph.trim();
                const isHeading =
                  trimmed.endsWith(":") && trimmed.length < 80;
                const isListItem = trimmed.startsWith("-") || trimmed.startsWith("•");
                const isNumberedItem = /^\d+\./.test(trimmed);

                if (isHeading) {
                  return (
                    <h3
                       key={i}
                       className="mt-8 mb-3 font-[system-ui] text-[1.2rem] font-bold text-[#16140f]"
                     >
                       {trimmed.replace(/:$/, "")}
                     </h3>
                  );
                }

                if (isListItem) {
                  return (
                    <p
                       key={i}
                       className="mb-2 pl-4 font-['Pretendard',sans-serif] text-[16px] font-normal leading-[1.75] text-[#16140f]/85"
                     >
                       <span className="mr-2 text-[#FF6C0F]">&bull;</span>
                       {trimmed.replace(/^[-•]\s*/, "")}
                     </p>
                  );
                }

                if (isNumberedItem) {
                  const match = trimmed.match(/^(\d+)\.\s*(.*)/);
                  if (match) {
                    return (
                      <p
                         key={i}
                         className="mb-3 font-['Pretendard',sans-serif] text-[16px] font-normal leading-[1.75] text-[#16140f]/85"
                       >
                         <span className="mr-2 font-semibold text-[#FF6C0F]">
                           {match[1]}.
                         </span>
                         {match[2]}
                       </p>
                    );
                  }
                }

                return (
                   <p
                     key={i}
                     className="mb-5 font-['Pretendard',sans-serif] text-[16px] font-normal leading-[1.75] text-[#16140f]/85"
                   >
                     {trimmed}
                   </p>
                );
              })}
            </div>

             <div className="mt-12 border-t border-[#16140f]/8 pt-6">
               <p className="font-['Pretendard',sans-serif] text-[13px] font-normal text-[#16140f]/40">
                 더 많은 자료를 찾으신가요?{" "}
                 <Link
                   href="/library"
                   className="text-[#FF6C0F] underline underline-offset-2"
                 >
                   SPEC 자료실 둘러보기
                 </Link>
               </p>
             </div>
          </article>

          <aside className="w-full shrink-0 lg:w-[280px]">
            <div className="sticky top-24">
              {relatedItems.length > 0 && (
                <>
                   <h3 className="mb-4 font-[system-ui] text-[1rem] font-bold text-[#16140f]">
                     관련 자료
                   </h3>
                  <div className="flex flex-col gap-5">
                    {relatedItems.map((related) => (
                      <RelatedCard key={related.slug} item={related} />
                    ))}
                  </div>
                </>
              )}

               <div className="mt-8 rounded-xl border border-[#FF6C0F]/15 bg-[#FF6C0F]/5 p-5">
                 <p className="mb-2 font-[system-ui] text-[0.95rem] font-bold text-[#16140f]">
                   SPEC 필독 자료
                 </p>
                 <p className="mb-3 font-['Pretendard',sans-serif] text-[13px] font-normal leading-relaxed text-[#16140f]/60">
                   SPEC에서 엄선한 스타트업 창업과 투자에 관한 가장 중요한 자료들입니다.
                 </p>
                 <Link
                   href="/library"
                   className="font-['Pretendard',sans-serif] text-[13px] font-medium text-[#FF6C0F] transition-opacity hover:opacity-80"
                 >
                   자료실 둘러보기 →
                 </Link>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
