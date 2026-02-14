"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";

import TiptapEditor from "@/components/blog/TiptapEditor";
import { useUser } from "@/hooks/useUser";
import { createPost, updatePost } from "@/lib/actions/posts";
import type { BlogPost, TagInfo } from "@/lib/api";
import { uploadBlogImage } from "@/lib/storage";
import { createClient } from "@/lib/supabase/client";
import type { ProfileRole } from "@/lib/supabase/types";

const WRITER_ROLES: ProfileRole[] = [
  "pre_runner",
  "runner",
  "alumni",
  "mentor",
  "admin",
];

type PostEditorFormProps = {
  mode: "create" | "edit";
  post?: BlogPost;
  initialTags?: TagInfo[];
};

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function PostEditorForm({ mode, post, initialTags = [] }: PostEditorFormProps) {
  const router = useRouter();
  const { profile, role, isLoading, isAuthenticated } = useUser();

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(mode === "edit");
  const [type, setType] = useState<"blog" | "news">(post?.type ?? "blog");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [selectedTags, setSelectedTags] = useState<string[]>(post?.tags ?? []);
  const [allTags, setAllTags] = useState<TagInfo[]>(initialTags);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isAdmin = role === "admin";
  const canWrite = isAuthenticated && WRITER_ROLES.includes(role);
  const canEditCurrentPost =
    mode === "edit" && post
      ? isAuthenticated && (isAdmin || (Boolean(post.authorId) && post.authorId === profile?.id))
      : false;

  useEffect(() => {
    if (mode === "create" && !isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, mode, router]);

  useEffect(() => {
    if (mode === "create" && initialTags.length > 0) {
      return;
    }

    if (mode === "create") {
      const supabase = createClient();
      void supabase
        .from("tags")
        .select("slug, label")
        .then(({ data }) => {
          if (!data) {
            return;
          }

          setAllTags(
            data.map((tag) => ({
              slug: tag.slug,
              label: tag.label,
            })),
          );
        });
    }
  }, [initialTags, mode]);

  const pageTitle = mode === "create" ? "글쓰기" : "글 수정";
  const saveDisabled =
    isSubmitting || !title.trim() || !slug.trim() || !excerpt.trim() || !content.trim();

  const sortedTags = useMemo(
    () => [...allTags].sort((a, b) => a.label.localeCompare(b.label, "ko")),
    [allTags],
  );

  const handleSelectTag = (tagSlug: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagSlug) ? prev.filter((tag) => tag !== tagSlug) : [...prev, tagSlug],
    );
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextTitle = event.target.value;
    setTitle(nextTitle);

    if (mode === "create" && !slugTouched) {
      setSlug(slugify(nextTitle));
    }
  };

  const handleSlugChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSlugTouched(true);
    setSlug(event.target.value);
  };

  const handleCoverImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      setErrorMessage(null);
      const uploadedUrl = await uploadBlogImage(file);
      setImageUrl(uploadedUrl);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "이미지 업로드 중 문제가 발생했습니다.",
      );
    }
  };

  const submitForm = async (published: boolean) => {
    if (saveDisabled) {
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.set("title", title.trim());
    formData.set("slug", slugify(slug));
    formData.set("type", type);
    formData.set("excerpt", excerpt.trim());
    formData.set("image_url", imageUrl.trim());
    formData.set("content", content);
    formData.set("published", String(published));
    selectedTags.forEach((tag) => formData.append("tags", tag));

    const result =
      mode === "create"
        ? await createPost(formData)
        : await updatePost(post?.id ?? "", formData);

    setIsSubmitting(false);

    if (!result.success || !result.slug) {
      setErrorMessage(result.error ?? "저장 중 문제가 발생했습니다.");
      return;
    }

    router.push(`/blog/${result.slug}`);
    router.refresh();
  };

  if (isLoading) {
    return (
      <section className="min-h-screen bg-[#f5f5ee] px-6 py-12">
        <div className="mx-auto max-w-[800px] font-['Pretendard',sans-serif] text-[#6b6b5e]">
          사용자 정보를 불러오는 중입니다...
        </div>
      </section>
    );
  }

  if ((mode === "create" && !canWrite) || (mode === "edit" && !canEditCurrentPost)) {
    return (
      <section className="min-h-screen bg-[#f5f5ee] px-6 py-12">
        <div className="mx-auto max-w-[800px] rounded-[10px] border border-[#ddd9cc] bg-white p-6">
          <h1 className="font-[system-ui] text-[28px] font-bold text-[#16140f]">권한이 없습니다</h1>
          <p className="mt-3 font-['Pretendard',sans-serif] text-[15px] text-[#6b6b5e]">
            {mode === "create"
              ? "글쓰기는 pre_runner 이상 권한에서만 가능합니다."
              : "본인 글 작성자 또는 관리자만 수정할 수 있습니다."}
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-[6px] bg-[#FF6C0F] px-4 py-2 font-['Pretendard',sans-serif] text-[14px] font-medium text-white"
          >
            블로그로 돌아가기
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f5f5ee] px-6 py-10">
      <div className="mx-auto max-w-[800px]">
        <h1 className="mb-8 font-[system-ui] text-[clamp(2rem,4vw,2.75rem)] font-black text-[#16140f]">
          {pageTitle}
        </h1>

        <div className="space-y-7 rounded-[10px] border border-[#ddd9cc] bg-white p-6 md:p-8">
          <label className="block">
            <span className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              제목
            </span>
            <input
              value={title}
              onChange={handleTitleChange}
              placeholder="포스트 제목을 입력하세요"
              className="h-12 w-full rounded-[8px] border border-[#ddd9cc] px-4 font-['Pretendard',sans-serif] text-[22px] font-semibold text-[#16140f] focus:border-[#FF6C0F] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              Slug
            </span>
            <input
              value={slug}
              onChange={handleSlugChange}
              placeholder="example-post-slug"
              className="h-11 w-full rounded-[8px] border border-[#ddd9cc] px-4 font-['Pretendard',sans-serif] text-[14px] text-[#16140f] focus:border-[#FF6C0F] focus:outline-none"
            />
          </label>

          <fieldset>
            <legend className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              포스트 유형
            </legend>
            <div className="flex flex-wrap gap-5">
              <label className="inline-flex items-center gap-2 font-['Pretendard',sans-serif] text-[14px] text-[#16140f]">
                <input
                  type="radio"
                  checked={type === "blog"}
                  onChange={() => setType("blog")}
                  className="accent-[#FF6C0F]"
                />
                SPEC 블로그
              </label>
              {isAdmin && (
                <label className="inline-flex items-center gap-2 font-['Pretendard',sans-serif] text-[14px] text-[#16140f]">
                  <input
                    type="radio"
                    checked={type === "news"}
                    onChange={() => setType("news")}
                    className="accent-[#FF6C0F]"
                  />
                  SPEC 소식
                </label>
              )}
            </div>
          </fieldset>

          <label className="block">
            <span className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              요약
            </span>
            <textarea
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              rows={3}
              className="w-full rounded-[8px] border border-[#ddd9cc] px-4 py-3 font-['Pretendard',sans-serif] text-[14px] text-[#16140f] focus:border-[#FF6C0F] focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              커버 이미지
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverImageUpload}
              className="w-full rounded-[8px] border border-[#ddd9cc] px-4 py-2 font-['Pretendard',sans-serif] text-[13px] text-[#4a4a40] file:mr-3 file:rounded-[6px] file:border-0 file:bg-[#e8e6dc] file:px-3 file:py-1.5 file:font-['Pretendard',sans-serif] file:text-[12px] file:text-[#16140f]"
            />
            {imageUrl && (
              <div className="mt-3 overflow-hidden rounded-[8px] border border-[#ddd9cc]">
                <img src={imageUrl} alt="Cover preview" className="max-h-[280px] w-full object-cover" />
              </div>
            )}
          </label>

          <div>
            <span className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              본문
            </span>
            <TiptapEditor
              content={content}
              onChange={setContent}
              onImageUpload={uploadBlogImage}
              placeholder="글 내용을 입력하세요..."
            />
          </div>

          <fieldset>
            <legend className="mb-2 block font-['Pretendard',sans-serif] text-[14px] font-semibold text-[#16140f]">
              태그
            </legend>
            <div className="flex flex-wrap gap-2">
              {sortedTags.map((tag) => {
                const selected = selectedTags.includes(tag.slug);

                return (
                  <label
                    key={tag.slug}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1 font-['Pretendard',sans-serif] text-[13px] transition-colors ${
                      selected
                        ? "border-[#FF6C0F] bg-[#FF6C0F] text-white"
                        : "border-[#ddd9cc] bg-white text-[#4a4a40] hover:border-[#FF6C0F]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => handleSelectTag(tag.slug)}
                      className="hidden"
                    />
                    {tag.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {errorMessage && (
            <p className="font-['Pretendard',sans-serif] text-[13px] text-[#d63a19]">{errorMessage}</p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => submitForm(true)}
              disabled={saveDisabled}
              className="inline-flex h-[40px] items-center rounded-[8px] bg-[#FF6C0F] px-5 font-['Pretendard',sans-serif] text-[14px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              발행하기
            </button>
            <button
              type="button"
              onClick={() => submitForm(false)}
              disabled={saveDisabled}
              className="inline-flex h-[40px] items-center rounded-[8px] border border-[#ddd9cc] px-5 font-['Pretendard',sans-serif] text-[14px] font-medium text-[#16140f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              임시저장
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex h-[40px] items-center rounded-[8px] px-2 font-['Pretendard',sans-serif] text-[13px] text-[#6b6b5e]"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
