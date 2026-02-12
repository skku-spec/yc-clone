"use client";

import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS, TAGS } from "./blogData";

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("all-posts");
  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const recentPosts = BLOG_POSTS.filter((p) => !p.featured).slice(0, 3);
  const allPosts = BLOG_POSTS.filter((p) => !p.featured);

  const tabs = [
    { id: "all-posts", label: "전체" },
    { id: "featured", label: "주요 소식" },
    { id: "recent", label: "최근" },
  ];

  return (
    <section className="min-h-screen pb-24">
       {/* Page Header */}
       <div className="border-b border-[#ddd9cc]">
         <div className="mx-auto max-w-[1068px] px-6 pt-14 pb-8 text-center">
           <h1 className="text-[clamp(2.5rem,5vw,3.75rem)] font-black leading-[1.15] tracking-tight uppercase text-[#16140f]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
             SPEC Stories
           </h1>
         </div>
       </div>

      {/* Navigation Tabs — 3 tabs with search */}
      <div className="border-b border-[#ddd9cc]">
        <div className="mx-auto flex max-w-[1068px] items-center justify-between px-6 py-5">
          {/* Tabs */}
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-['Pretendard',sans-serif] text-[14px] font-[500] padding-[8px_4px] border-b-[2px] transition-colors ${
                  activeTab === tab.id
                    ? "border-b-[oklch(0.705_0.213_47.604)] text-[#16140f]"
                    : "border-b-transparent text-[#8a8a7e]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <input
            type="text"
            placeholder="검색..."
            className="font-['Pretendard',sans-serif] w-[320px] h-[38px] rounded-[6px] border-[1px] border-[#ddd9cc] px-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.705_0.213_47.604)]"
          />
        </div>
      </div>

      {/* Featured Post (Hero) — max ~518px width, ultra-light headline */}
      {featuredPost && (
        <div className="border-b border-[#ddd9cc]">
          <div className="mx-auto max-w-[1200px] px-6 py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
              <div className="max-w-[518px] shrink-0">
                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  {featuredPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="inline-flex rounded-[4px] bg-[oklch(0.928_0.008_231.39)] px-[8px] py-[2px] font-['Pretendard',sans-serif] text-[12px] font-[500] text-[#4a4a40] transition-opacity hover:opacity-70"
                    >
                      {TAGS.find((t) => t.slug === tag)?.label ?? tag}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group mb-3 block font-['Pretendard',sans-serif] text-[30px] font-semibold leading-[1.2] tracking-tight text-[#000000] transition-colors hover:text-[#FF6C0F]"
                >
                  {featuredPost.title}
                </Link>
                <p className="sr-only font-['Pretendard',sans-serif] text-[14px] text-[#5a6270]">
                  {featuredPost.author}
                </p>
                <p className="mb-5 font-['MaruBuri',serif] text-[18px] font-normal leading-relaxed text-[#000000]">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 font-['Pretendard',sans-serif] text-[16px] font-medium text-[#FF6C0F] transition-opacity hover:opacity-70"
                >
                  더 읽기 <ArrowIcon />
                </Link>
              </div>
              {featuredPost.imageUrl && (
                <Link href={`/blog/${featuredPost.slug}`} className="block flex-1">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Recent Posts (3 columns with images) */}
      <div id="recent-posts" className="border-b border-[#ddd9cc]">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <h3 className="mb-8 font-['Pretendard',sans-serif] text-[20px] font-semibold text-[oklch(0.705_0.213_47.604)]">
            최근 소식
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                {post.imageUrl && (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mb-4 block overflow-hidden rounded-lg"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                )}
                <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="inline-flex rounded-[4px] bg-[oklch(0.928_0.008_231.39)] px-[8px] py-[2px] font-['Pretendard',sans-serif] text-[12px] font-[500] text-[#4a4a40] transition-opacity hover:opacity-70"
                    >
                      {TAGS.find((t) => t.slug === tag)?.label ?? tag}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mb-2 block font-['Pretendard',sans-serif] text-[20px] font-semibold leading-snug text-[#16140f] transition-colors hover:text-[#FF6C0F]"
                >
                  {post.title}
                </Link>
                <p className="sr-only font-['Pretendard',sans-serif] text-[14px] text-[#5a6270]">
                  {post.author}
                </p>
                <p className="mb-3 font-['MaruBuri',serif] text-[18px] font-normal leading-relaxed text-[#4a4a40] line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-['Pretendard',sans-serif] text-[16px] font-medium text-[#FF6C0F] transition-opacity hover:opacity-70"
                >
                  더 읽기 <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* All Posts + Categories Sidebar */}
      <div id="all-posts" className="mx-auto max-w-[1200px] px-6 pt-12">
        <div className="flex gap-12">
       {/* Post List */}
           <div className="min-w-0 flex-1">
             <h3 className="mb-6 font-['Pretendard',sans-serif] text-[20px] font-semibold text-[oklch(0.705_0.213_47.604)]">
                전체 글
             </h3>
             <div className="space-y-0 divide-y divide-[#ddd9cc]">
               {allPosts.map((post) => (
                 <article key={post.slug} className="py-7 first:pt-0">
                   <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                     {post.tags.slice(0, 3).map((tag) => (
                       <Link
                         key={tag}
                         href={`/blog/tag/${tag}`}
                         className="inline-flex rounded-[4px] bg-[oklch(0.928_0.008_231.39)] px-[8px] py-[2px] font-['Pretendard',sans-serif] text-[12px] font-[500] text-[#4a4a40] transition-opacity hover:opacity-70"
                       >
                         {TAGS.find((t) => t.slug === tag)?.label ?? tag}
                       </Link>
                     ))}
                   </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group mb-1 block font-['Pretendard',sans-serif] text-[30px] font-semibold leading-snug text-[#16140f] transition-colors hover:text-[#FF6C0F]"
                    >
                      {post.title}
                    </Link>
                    <p className="sr-only mb-2 font-['Pretendard',sans-serif] text-[14px] text-[#5a6270]">
                      <span className="text-[#16140f]">{post.author}</span>{" "}
                      &middot; {post.date}
                    </p>
                    <p className="mb-3 font-['MaruBuri',serif] text-[18px] font-normal leading-relaxed text-[#4a4a40]">
                      {post.excerpt}
                    </p>
                   <Link
                     href={`/blog/${post.slug}`}
                     className="inline-flex items-center gap-1.5 font-['Pretendard',sans-serif] text-[16px] font-medium text-[#FF6C0F] transition-opacity hover:opacity-70"
                   >
                     더 읽기 <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Categories Sidebar */}
          <aside className="hidden w-[220px] shrink-0 lg:block">
            <p className="mb-4 font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              카테고리
            </p>
            <div className="flex flex-col gap-1.5">
              {TAGS.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/blog/tag/${tag.slug}`}
                  className="rounded-lg px-3 py-1.5 font-['Pretendard',sans-serif] text-[14px] text-[#4a4a40] transition-colors hover:bg-[#e8e6dc] hover:text-[#FF6C0F]"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
