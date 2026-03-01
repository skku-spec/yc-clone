"use client";

import { useEffect, useRef, useState } from "react";

import CommentSection from "@/components/blog/CommentSection";
import ReactionBar from "@/components/blog/ReactionBar";
import type { CommentWithAuthor } from "@/lib/actions/comments";
import type { ReactionSummary } from "@/lib/actions/reactions";

type InteractiveSectionProps = {
  postId: string;
  comments: CommentWithAuthor[];
  reactions: ReactionSummary[];
  userId?: string;
};

export default function InteractiveSection({
  postId,
  comments,
  reactions,
  userId,
}: InteractiveSectionProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        root: null,
        rootMargin: "320px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sentinelRef}>
      {isVisible ? (
        <>
          <ReactionBar postId={postId} initialReactions={reactions} userId={userId} />
          <CommentSection postId={postId} initialComments={comments} />
        </>
      ) : (
        <section className="mt-8 rounded-xl border border-[#ddd9cc] bg-[#f5f5ee] px-4 py-8 md:px-6">
          <p className="font-['Pretendard',sans-serif] text-[14px] text-[#6b6b5e]">
            인터랙션을 불러오는 중...
          </p>
        </section>
      )}
    </div>
  );
}
