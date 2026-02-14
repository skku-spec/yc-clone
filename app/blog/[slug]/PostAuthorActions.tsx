"use client";

import Link from "next/link";

import { useUser } from "@/hooks/useUser";

type PostAuthorActionsProps = {
  slug: string;
  authorId?: string;
};

export default function PostAuthorActions({ slug, authorId }: PostAuthorActionsProps) {
  const { profile, role, isAuthenticated } = useUser();
  const canEdit =
    isAuthenticated && (role === "admin" || (Boolean(authorId) && profile?.id === authorId));

  if (!canEdit) {
    return null;
  }

  return (
    <div data-can-edit={canEdit} className="mt-6">
      <Link
        href={`/blog/edit/${slug}`}
        className="inline-flex items-center rounded-[6px] border border-[#ddd9cc] px-3 py-1.5 font-['Pretendard',sans-serif] text-[13px] font-medium text-[#16140f] transition-colors hover:border-[#FF6C0F] hover:text-[#FF6C0F]"
      >
        수정하기
      </Link>
    </div>
  );
}
