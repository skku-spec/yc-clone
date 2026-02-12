"use client";

import { useState, useMemo } from "react";
import { Launch, LAUNCHES, CATEGORIES } from "@/lib/launches-data";
import PageHeader from "@/components/PageHeader";

type SortMode = "top" | "new" | "";

export default function LaunchesPage() {
  const [votes, setVotes] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {};
    LAUNCHES.forEach((l) => {
      initial[l.id] = l.votes;
    });
    return initial;
  });
  const [votedIds, setVotedIds] = useState<Set<number>>(new Set());
  const [sortMode, setSortMode] = useState<SortMode>("new");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleVote = (id: number) => {
    setVotedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
    setVotes((prev) => ({
      ...prev,
      [id]: votedIds.has(id) ? prev[id] - 1 : prev[id] + 1,
    }));
  };

  const batchOptions = useMemo(() => {
    const batches = new Set(LAUNCHES.map((l) => l.batch));
    return Array.from(batches).sort();
  }, []);

  const industryOptions = useMemo(() => {
    const industries = new Set(LAUNCHES.map((l) => l.category));
    return Array.from(industries).sort();
  }, []);

  const filteredAndSorted = useMemo(() => {
    let items = [...LAUNCHES];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (l) =>
          l.company.toLowerCase().includes(q) ||
          l.tagline.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "전체") {
      items = items.filter((l) => l.category === selectedCategory);
    }

    if (selectedBatch) {
      items = items.filter((l) => l.batch === selectedBatch);
    }

    if (selectedIndustry) {
      items = items.filter((l) => l.category === selectedIndustry);
    }

    if (sortMode === "top") {
      items.sort((a, b) => (votes[b.id] ?? b.votes) - (votes[a.id] ?? a.votes));
    } else {
      items.sort((a, b) => a.daysAgo - b.daysAgo);
    }

    return items;
  }, [searchQuery, selectedCategory, selectedBatch, selectedIndustry, sortMode, votes]);

  return (
    <div className="min-h-screen px-4 pb-24 pt-14 md:px-8 md:pt-20">
      <div className="mx-auto max-w-[720px]">
        <PageHeader title="Launch SPEC" subtitle="SPEC 팀들의 제품 런칭 소식을 만나보세요." align="center" />

        <div className="mb-5">
          <input
            type="text"
            placeholder="런치 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-[#ddd] bg-white font-['Pretendard',sans-serif] text-[#16140f] outline-none transition-all placeholder:text-[#16140f]/40 focus:border-[#FF6C0F]/40 focus:ring-2 focus:ring-[#FF6C0F]/10"
            style={{
              height: 54,
              borderRadius: 10,
              fontSize: 18,
              padding: "14px 22px",
            }}
          />
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-3">
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="border border-[#ddd] bg-white font-['Pretendard',sans-serif] text-[#16140f]/80 outline-none"
            style={{
              fontSize: 15,
              height: 42,
              borderRadius: 6,
              padding: "8px 40px 8px 12px",
            }}
          >
            <option value="">기수</option>
            {batchOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="border border-[#ddd] bg-white font-['Pretendard',sans-serif] text-[#16140f]/80 outline-none"
            style={{
              fontSize: 15,
              height: 42,
              borderRadius: 6,
              padding: "8px 40px 8px 12px",
            }}
          >
            <option value="">분야</option>
            {industryOptions.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>

          <span className="text-[15px] font-normal text-[#333]">정렬:</span>
          <select
            value={sortMode}
            onChange={(e) => setSortMode(e.target.value as SortMode)}
            className="border border-[#ddd] bg-white font-['Pretendard',sans-serif] text-[#16140f]/80 outline-none"
            style={{
              fontSize: 15,
              height: 42,
              borderRadius: 6,
              padding: "8px 40px 8px 12px",
            }}
          >
            <option disabled>정렬 기준</option>
            <option value="top">투표순</option>
            <option value="new">최신순</option>
          </select>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {CATEGORIES.filter((cat) => cat.label !== "전체").map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`font-['Pretendard',sans-serif] transition-all ${
                selectedCategory === cat.label
                  ? "text-white"
                  : "text-[#16140f]/80 hover:text-[#16140f]"
              }`}
              style={{
                background:
                  selectedCategory === cat.label
                    ? "#FF6C0F"
                    : "rgb(234,234,222)",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 16,
              }}
            >
              <span className="mr-1">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mb-4 border-b border-[#16140f]/8 pb-3">
          <span className="font-['Pretendard',sans-serif] text-[13px] font-normal text-[#16140f]/50">
            {filteredAndSorted.length}개 런치
          </span>
        </div>

        {filteredAndSorted.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#16140f]/15 py-20">
            <svg
              className="mb-4 h-12 w-12 text-[#16140f]/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
            <p className="font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f]/50">
              검색 결과가 없습니다.
            </p>
          </div>
        ) : (
          <div className="space-y-0">
            {filteredAndSorted.map((launch) => (
              <LaunchCard
                key={launch.id}
                launch={launch}
                voteCount={votes[launch.id] ?? launch.votes}
                hasVoted={votedIds.has(launch.id)}
                onVote={() => handleVote(launch.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function LaunchCard({
  launch,
  voteCount,
  hasVoted,
  onVote,
}: {
  launch: Launch;
  voteCount: number;
  hasVoted: boolean;
  onVote: () => void;
}) {
  return (
    <article className="group flex items-center gap-4 border-b border-[#16140f]/6 py-3 transition-colors hover:bg-[#FF6C0F]/[0.02]">
      <div
        className="flex shrink-0 items-center justify-center border border-[#16140f]/8 bg-white"
        style={{ width: 40, height: 40, borderRadius: 0 }}
      >
        <span className="font-['Pretendard',sans-serif] text-[14px] font-bold text-[#FF6C0F]">
          {launch.company.charAt(0)}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <h2 className="font-['Pretendard',sans-serif] text-[15px] font-semibold text-[#16140f] transition-colors group-hover:text-[#FF6C0F]">
            {launch.company}
          </h2>
          <span className="font-['Pretendard',sans-serif] text-[14px] font-normal text-[#16140f]/70">
            {launch.tagline}
          </span>
        </div>
        <div className="mt-0.5 flex items-center gap-3">
          <span
            className="font-['Pretendard',sans-serif] text-[#666]"
            style={{ fontSize: 12, fontWeight: 400 }}
          >
            {launch.category}
          </span>
          <span
            className="font-['Pretendard',sans-serif] text-[#666]"
            style={{ fontSize: 12, fontWeight: 400 }}
          >
            {launch.batch}
          </span>
          <span
            className="font-['Pretendard',sans-serif] text-[#16140f]/40"
            style={{ fontSize: 12, fontWeight: 400 }}
          >
            {launch.daysAgo === 1
              ? "1일 전"
              : `${launch.daysAgo}일 전`}
          </span>
        </div>
      </div>

      <button
        onClick={onVote}
        className="flex shrink-0 items-center gap-1 transition-colors"
        aria-label={`Upvote ${launch.company}`}
        style={{ color: hasVoted ? "#FF6C0F" : "rgb(170,184,194)" }}
      >
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill={hasVoted ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span
          className="font-['Pretendard',sans-serif] font-medium leading-none"
          style={{ fontSize: 13 }}
        >
          {voteCount}
        </span>
      </button>
    </article>
  );
}
