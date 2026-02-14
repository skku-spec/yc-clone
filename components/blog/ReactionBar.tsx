"use client";

import { useEffect, useMemo, useState, useTransition } from "react";

import {
  toggleReaction,
  type ReactionSummary,
} from "@/lib/actions/reactions";

const ALLOWED_EMOJIS = ["👍", "🔥", "❤️", "🎉", "🤔", "👀"] as const;

type ReactionBarProps = {
  postId: string;
  initialReactions: ReactionSummary[];
  userId?: string;
};

type ReactionsByEmoji = Record<string, { count: number; userIds: string[] }>;

function toReactionMap(items: ReactionSummary[]): ReactionsByEmoji {
  const base = ALLOWED_EMOJIS.reduce<ReactionsByEmoji>((acc, emoji) => {
    acc[emoji] = { count: 0, userIds: [] };
    return acc;
  }, {});

  for (const item of items) {
    if (!base[item.emoji]) {
      continue;
    }

    base[item.emoji] = {
      count: item.count,
      userIds: item.userIds,
    };
  }

  return base;
}

export default function ReactionBar({ postId, initialReactions, userId }: ReactionBarProps) {
  const [isPending, startTransition] = useTransition();
  const [reactions, setReactions] = useState<ReactionsByEmoji>(() => toReactionMap(initialReactions));

  useEffect(() => {
    setReactions(toReactionMap(initialReactions));
  }, [initialReactions]);

  const reactionEntries = useMemo(
    () => ALLOWED_EMOJIS.map((emoji) => ({ emoji, ...reactions[emoji] })),
    [reactions],
  );

  const handleToggle = (emoji: string) => {
    if (!userId || isPending) {
      return;
    }

    const prev = reactions;
    const hasReacted = prev[emoji].userIds.includes(userId);

    const optimistic: ReactionsByEmoji = {
      ...prev,
      [emoji]: {
        count: hasReacted ? Math.max(0, prev[emoji].count - 1) : prev[emoji].count + 1,
        userIds: hasReacted
          ? prev[emoji].userIds.filter((id) => id !== userId)
          : [...prev[emoji].userIds, userId],
      },
    };

    setReactions(optimistic);

    startTransition(async () => {
      const result = await toggleReaction(postId, emoji);
      if (!result.success) {
        setReactions(prev);
      }
    });
  };

  return (
    <section className="mt-8" style={{ fontFamily: "'Pretendard', sans-serif" }}>
      <p className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-[#6b6b5e]">Reactions</p>
      <div className="flex flex-wrap items-center gap-2">
        {reactionEntries.map(({ emoji, count, userIds }) => {
          const isActive = userId != null && userIds.includes(userId);
          const isEmpty = count === 0;

          return (
            <button
              key={emoji}
              type="button"
              onClick={() => handleToggle(emoji)}
              title={userId ? "Toggle reaction" : "로그인 후 반응을 남길 수 있어요"}
              aria-label={`${emoji} reaction ${count}`}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[14px] transition-colors disabled:cursor-not-allowed"
              style={{
                borderColor: isActive ? "#FF6C0F" : "#ddd9cc",
                backgroundColor: isActive ? "#fff1e8" : "#f5f5ee",
                color: isEmpty ? "#6b6b5e" : "#16140f",
                opacity: isEmpty && !isActive ? 0.65 : 1,
              }}
              disabled={isPending}
            >
              <span>{emoji}</span>
              <span className="min-w-[1ch] text-[13px] font-semibold">{count}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
