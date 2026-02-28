"use client";

import { useMemo, useState } from "react";

import PageHeader from "@/components/PageHeader";
import type { Database } from "@/lib/supabase/types";
import CustomSelect from "@/components/ui/CustomSelect";

type Launch = Database["public"]["Tables"]["launches"]["Row"];
type SortMode = "top" | "new" | "";

interface Category {
  emoji: string;
  label: string;
}

interface LaunchesPageClientProps {
  launches: Launch[];
  categories: readonly Category[];
}

function getDaysAgo(createdAt: string): number {
  const createdAtMs = new Date(createdAt).getTime();
  if (Number.isNaN(createdAtMs)) {
    return 0;
  }
  return Math.max(0, Math.floor((Date.now() - createdAtMs) / 86400000));
}

export default function LaunchesPageClient({ launches, categories }: LaunchesPageClientProps) {
  const [votes, setVotes] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    launches.forEach((launch) => {
      initial[launch.id] = launch.votes;
    });
    return initial;
  });
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set());
  const [sortMode, setSortMode] = useState<SortMode>("new");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleVote = (id: string) => {
    setVotedIds((previous) => {
      const next = new Set(previous);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
    setVotes((previous) => ({
      ...previous,
      [id]: votedIds.has(id) ? previous[id] - 1 : previous[id] + 1,
    }));
  };

  const batchOptions = useMemo(() => {
    const batches = new Set(launches.map((launch) => launch.batch));
    return Array.from(batches).sort();
  }, [launches]);

  const industryOptions = useMemo(() => {
    const industries = new Set(launches.map((launch) => launch.category));
    return Array.from(industries).sort();
  }, [launches]);

  const filteredAndSorted = useMemo(() => {
    let items = [...launches];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (launch) =>
          launch.company.toLowerCase().includes(query) ||
          launch.tagline.toLowerCase().includes(query) ||
          launch.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "전체") {
      items = items.filter((launch) => launch.category === selectedCategory);
    }

    if (selectedBatch) {
      items = items.filter((launch) => launch.batch === selectedBatch);
    }

    if (selectedIndustry) {
      items = items.filter((launch) => launch.category === selectedIndustry);
    }

    if (sortMode === "top") {
      items.sort(
        (a, b) => (votes[b.id] ?? b.votes) - (votes[a.id] ?? a.votes)
      );
    } else {
      items.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    }

    return items;
  }, [launches, searchQuery, selectedCategory, selectedBatch, selectedIndustry, sortMode, votes]);

  const isPlainEmptyState =
    launches.length === 0 &&
    !searchQuery.trim() &&
    !selectedBatch &&
    !selectedIndustry &&
    selectedCategory === "전체";

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
          <CustomSelect
            value={selectedBatch}
            onChange={(value) => setSelectedBatch(value)}
            options={batchOptions}
            placeholder="기수"
            className="w-[140px]"
          />

          <CustomSelect
            value={selectedIndustry}
            onChange={(value) => setSelectedIndustry(value)}
            options={industryOptions}
            placeholder="분야"
            className="w-[140px]"
          />

          <span className="text-[15px] font-normal text-[#333]">정렬:</span>
          <CustomSelect
            value={sortMode}
            onChange={(value) => setSortMode(value as SortMode)}
            options={[{ label: "투표순", value: "top" }, { label: "최신순", value: "new" }]}
            placeholder="정렬 기준"
            className="w-[140px]"
          />
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.filter((category) => category.label !== "전체").map((category) => (
            <button
              key={category.label}
              onClick={() => setSelectedCategory(category.label)}
              className={`font-['Pretendard',sans-serif] transition-all ${
                selectedCategory === category.label
                  ? "text-white"
                  : "text-[#16140f]/80 hover:text-[#16140f]"
              }`}
              style={{
                background:
                  selectedCategory === category.label
                    ? "#FF6C0F"
                    : "rgb(234,234,222)",
                borderRadius: 20,
                padding: "4px 14px",
                fontSize: 16,
              }}
            >
              <span className="mr-1">{category.emoji}</span>
              {category.label}
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
              {isPlainEmptyState ? "아직 등록된 런치가 없습니다." : "검색 결과가 없습니다."}
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
  const daysAgo = getDaysAgo(launch.created_at);

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
            {daysAgo === 1 ? "1일 전" : `${daysAgo}일 전`}
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
