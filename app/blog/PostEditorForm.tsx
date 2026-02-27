"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
} from "react";

import TiptapEditor from "@/components/blog/TiptapEditor";
import { useUser } from "@/hooks/useUser";
import { createPost, updatePost } from "@/lib/actions/posts";
import type { BlogPost, TagInfo } from "@/lib/api";
import type { UserRole } from "@/lib/auth";
import { uploadBlogImage } from "@/lib/storage";
import { createClient } from "@/lib/supabase/client";

/* ─── Constants & Types ─────────────────────────────────────────── */

const WRITER_ROLES: UserRole[] = ["member", "admin"];

type PostEditorFormProps = {
  mode: "create" | "edit";
  post?: BlogPost;
  initialTags?: TagInfo[];
};

type SaveStatus = "idle" | "saving" | "saved" | "error";

/* ─── Utility Functions ─────────────────────────────────────────── */

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

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function countWords(text: string): number {
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function estimateReadingTime(words: number): number {
  return Math.max(1, Math.ceil(words / 200));
}

/* ─── SVG Icons (inline, zero-dep) ──────────────────────────────── */

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="mb-2 text-[#b5b2a6]"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M21 15L16.5 10L9 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18L11 14.5L3 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PostEditorForm — Medium/Ghost-style distraction-free editor
   ═══════════════════════════════════════════════════════════════════ */

export default function PostEditorForm({ mode, post, initialTags = [] }: PostEditorFormProps) {
  const router = useRouter();
  const { profile, role, isLoading, isAuthenticated } = useUser();

  /* ─── Core form state ───────────────────────────────────────── */
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

  /* ─── UI state ──────────────────────────────────────────────── */
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>(mode === "edit" ? "saved" : "idle");
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  /* ─── Refs ──────────────────────────────────────────────────── */
  const hasUnsavedChanges = useRef(false);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  /* ─── Derived ───────────────────────────────────────────────── */
  const isAdmin = role === "admin";
  const canWrite = isAuthenticated && WRITER_ROLES.includes(role);
  const canEditCurrentPost =
    mode === "edit" && post
      ? isAuthenticated && (isAdmin || (Boolean(post.authorId) && post.authorId === profile?.id))
      : false;

  const saveDisabled =
    isSubmitting || !title.trim() || !slug.trim() || !excerpt.trim() || !content.trim();

  const sortedTags = useMemo(
    () => [...allTags].sort((a, b) => a.label.localeCompare(b.label, "ko")),
    [allTags],
  );

  /* ─── Auth redirect ─────────────────────────────────────────── */
  useEffect(() => {
    if (mode === "create" && !isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, mode, router]);

  /* ─── Fetch tags (create mode) ──────────────────────────────── */
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

  /* ─── Word count derived from content ───────────────────────── */
  useEffect(() => {
    const plainText = stripHtml(content);
    setWordCount(countWords(plainText));
  }, [content]);

  /* ─── beforeunload warning ──────────────────────────────────── */
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges.current) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  /* ─── Escape key closes drawer ──────────────────────────────── */
  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isDrawerOpen]);

  /* ─── Auto-save (edit mode) ─────────────────────────────────── */
  const performAutoSave = useCallback(async () => {
    if (mode !== "edit" || !post?.id) return;
    if (!title.trim() || !slug.trim() || !excerpt.trim() || !content.trim()) return;

    setSaveStatus("saving");

    const formData = new FormData();
    formData.set("title", title.trim());
    formData.set("slug", slugify(slug));
    formData.set("type", type);
    formData.set("excerpt", excerpt.trim());
    formData.set("image_url", imageUrl.trim());
    formData.set("content", content);
    formData.set("published", String(post.published ?? false));
    selectedTags.forEach((tag) => formData.append("tags", tag));

    const result = await updatePost(post.id, formData);

    if (result.success) {
      setSaveStatus("saved");
      setLastSavedAt(new Date());
      hasUnsavedChanges.current = false;
    } else {
      setSaveStatus("error");
    }
  }, [mode, post?.id, post?.published, title, slug, type, excerpt, imageUrl, content, selectedTags]);

  /* Keep a ref so the debounce timer always calls the latest version */
  const performAutoSaveRef = useRef(performAutoSave);
  performAutoSaveRef.current = performAutoSave;

  const triggerAutoSave = useCallback(() => {
    hasUnsavedChanges.current = true;

    if (mode !== "edit") return;

    setSaveStatus("idle");

    if (autoSaveTimerRef.current) {
      clearTimeout(autoSaveTimerRef.current);
    }

    autoSaveTimerRef.current = setTimeout(() => {
      void performAutoSaveRef.current();
    }, 2000);
  }, [mode]);

  /* Clean up auto-save timer on unmount */
  useEffect(() => {
    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, []);

  /* ─── localStorage draft (create mode) ──────────────────────── */
  useEffect(() => {
    if (mode !== "create") return;
    if (!title && !content) return;

    hasUnsavedChanges.current = true;

    const draft = JSON.stringify({
      title,
      slug,
      type,
      excerpt,
      imageUrl,
      content,
      selectedTags,
      savedAt: new Date().toISOString(),
    });

    try {
      localStorage.setItem("blog-draft-latest", draft);
    } catch {
      /* localStorage full or unavailable */
    }
  }, [mode, title, slug, type, excerpt, imageUrl, content, selectedTags]);

  /* ─── Handlers ──────────────────────────────────────────────── */

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextTitle = event.target.value;
    setTitle(nextTitle);
    if (mode === "create" && !slugTouched) {
      setSlug(slugify(nextTitle));
    }
    triggerAutoSave();
  };

  const handleSlugChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSlugTouched(true);
    setSlug(event.target.value);
    triggerAutoSave();
  };

  const handleContentChange = (html: string) => {
    setContent(html);
    triggerAutoSave();
  };

  const handleExcerptChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setExcerpt(event.target.value);
    triggerAutoSave();
  };

  const handleSelectTag = (tagSlug: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagSlug) ? prev.filter((t) => t !== tagSlug) : [...prev, tagSlug],
    );
    triggerAutoSave();
  };

  const handleCoverImageUpload = async (file: File) => {
    try {
      setErrorMessage(null);
      const uploadedUrl = await uploadBlogImage(file);
      setImageUrl(uploadedUrl);
      triggerAutoSave();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "이미지 업로드 중 문제가 발생했습니다.",
      );
    }
  };

  const handleCoverInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const target = event.target;
    await handleCoverImageUpload(file);
    target.value = "";
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(false);
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      await handleCoverImageUpload(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const removeCoverImage = () => {
    setImageUrl("");
    triggerAutoSave();
  };

  const submitForm = async (published: boolean) => {
    if (saveDisabled) return;

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

    hasUnsavedChanges.current = false;

    if (mode === "create") {
      try {
        localStorage.removeItem("blog-draft-latest");
      } catch {
        /* ignore */
      }
    }

    router.push(`/blog/${result.slug}`);
    router.refresh();
  };

  /* ─── Save status display text ──────────────────────────────── */

  const saveStatusText = useMemo(() => {
    if (mode === "create") return "새 글";
    switch (saveStatus) {
      case "saving":
        return "저장 중...";
      case "saved":
        return lastSavedAt ? "저장됨 ✓ · 방금 전" : "저장됨 ✓";
      case "error":
        return "저장 실패";
      default:
        return "변경사항 있음";
    }
  }, [mode, saveStatus, lastSavedAt]);

  const saveStatusColor =
    saveStatus === "error"
      ? "text-[#d63a19]"
      : saveStatus === "saved"
        ? "text-[#3d8c40]"
        : "text-[#6b6b5e]";

  /* ═══ Early returns ═══════════════════════════════════════════ */

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5ee]">
        <p className="font-['Pretendard',sans-serif] text-[15px] text-[#6b6b5e]">
          사용자 정보를 불러오는 중입니다...
        </p>
      </div>
    );
  }

  if ((mode === "create" && !canWrite) || (mode === "edit" && !canEditCurrentPost)) {
    return (
      <section className="min-h-screen bg-[#f5f5ee] px-6 py-12">
        <div className="mx-auto max-w-[800px] rounded-[10px] border border-[#ddd9cc] bg-white p-6">
          <h1 className="font-[system-ui] text-[28px] font-bold text-[#16140f]">
            권한이 없습니다
          </h1>
          <p className="mt-3 font-['Pretendard',sans-serif] text-[15px] text-[#6b6b5e]">
            {mode === "create"
              ? "글쓰기는 member 이상 권한에서만 가능합니다."
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

  /* ═══ Main Render ═════════════════════════════════════════════ */

  return (
    <div className="relative min-h-screen bg-[#f5f5ee]">
      {/* ── Header Bar ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-[#ddd9cc] bg-white px-4 md:px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-['Pretendard',sans-serif] text-[14px] text-[#6b6b5e] transition-colors hover:text-[#16140f]"
        >
          <ChevronLeftIcon />
          <span className="hidden sm:inline">돌아가기</span>
        </Link>

        <span
          className={`absolute left-1/2 -translate-x-1/2 font-['Pretendard',sans-serif] text-[13px] ${saveStatusColor}`}
        >
          {saveStatusText}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="inline-flex h-[34px] items-center rounded-[6px] border border-[#ddd9cc] px-3 font-['Pretendard',sans-serif] text-[13px] font-medium text-[#16140f] transition-colors hover:border-[#FF6C0F] hover:text-[#FF6C0F]"
          >
            발행 설정
          </button>
          <button
            type="button"
            onClick={() => void submitForm(true)}
            disabled={saveDisabled}
            className="inline-flex h-[34px] items-center rounded-[8px] bg-[#FF6C0F] px-4 font-['Pretendard',sans-serif] text-[13px] font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            발행하기
          </button>
        </div>
      </header>

      {/* ── Main Content Area ──────────────────────────────────── */}
      <main className="mx-auto max-w-[800px] px-4 py-8 pb-16 md:px-6">
        <div className="rounded-[12px] bg-white px-5 py-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] md:px-12 md:py-10">
          {/* Cover Image Zone */}
          {imageUrl ? (
            <div className="group relative mb-8 overflow-hidden rounded-[10px]">
              <img
                src={imageUrl}
                alt="커버 이미지"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => coverInputRef.current?.click()}
                  className="rounded-[6px] bg-white/90 px-3 py-1.5 font-['Pretendard',sans-serif] text-[13px] font-medium text-[#16140f] backdrop-blur-sm transition-colors hover:bg-white"
                >
                  변경
                </button>
                <button
                  type="button"
                  onClick={removeCoverImage}
                  className="rounded-[6px] bg-white/90 px-3 py-1.5 font-['Pretendard',sans-serif] text-[13px] font-medium text-[#d63a19] backdrop-blur-sm transition-colors hover:bg-white"
                >
                  ✕ 삭제
                </button>
              </div>
            </div>
          ) : (
            <div
              role="button"
              tabIndex={0}
              onClick={() => coverInputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") coverInputRef.current?.click();
              }}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`mb-8 flex cursor-pointer flex-col items-center justify-center rounded-[10px] border-2 border-dashed py-12 transition-colors ${
                isDraggingOver
                  ? "border-[#FF6C0F] bg-[#FF6C0F]/5"
                  : "border-[#ddd9cc] hover:border-[#FF6C0F]/50 hover:bg-[#f5f5ee]/50"
              }`}
            >
              <ImagePlaceholderIcon />
              <span className="font-['Pretendard',sans-serif] text-[14px] text-[#6b6b5e]">
                커버 이미지를 드래그하거나 클릭하세요
              </span>
            </div>
          )}

          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleCoverInputChange}
          />

          {/* Title */}
          <input
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
            className="mb-4 w-full bg-transparent font-[system-ui] text-[clamp(2rem,4vw,2.75rem)] font-black leading-tight text-[#16140f] placeholder:text-[#c5c2b8] focus:outline-none"
          />

          {/* Thin divider */}
          <div className="mb-6 h-px w-12 bg-[#ddd9cc]" />

          {/* Editor */}
          <div className="min-h-[400px]">
            <TiptapEditor
              content={content}
              onChange={handleContentChange}
              onImageUpload={uploadBlogImage}
              placeholder="본문을 작성하세요..."
            />
          </div>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="mt-4 rounded-[8px] border border-[#d63a19]/20 bg-[#d63a19]/5 px-4 py-3">
            <p className="font-['Pretendard',sans-serif] text-[13px] text-[#d63a19]">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Create mode hint */}
        {mode === "create" && (
          <p className="mt-4 text-center font-['Pretendard',sans-serif] text-[12px] text-[#b5b2a6]">
            임시저장하면 서버에 저장됩니다
          </p>
        )}
      </main>

      {/* ── Footer Bar ─────────────────────────────────────────── */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center border-t border-[#ddd9cc]/50 bg-[#f5f5ee]/80 py-2 backdrop-blur-sm">
        <span className="font-['Pretendard',sans-serif] text-xs text-[#6b6b5e]">
          {wordCount.toLocaleString()} 단어 · ~{estimateReadingTime(wordCount)}분 읽기
        </span>
      </footer>

      {/* ── Drawer Backdrop ────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-20 bg-black/30 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Publish Settings Drawer ────────────────────────────── */}
      <aside
        className={`fixed right-0 top-0 z-30 flex h-full w-full flex-col border-l border-[#ddd9cc] bg-white shadow-xl transition-transform duration-300 ease-out md:w-[380px] ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#ddd9cc] px-6">
          <h2 className="font-['Pretendard',sans-serif] text-[16px] font-bold text-[#16140f]">
            발행 설정
          </h2>
          <button
            type="button"
            onClick={() => setIsDrawerOpen(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#6b6b5e] transition-colors hover:bg-[#f5f5ee] hover:text-[#16140f]"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Slug */}
            <label className="block">
              <span className="mb-1.5 block font-['Pretendard',sans-serif] text-[13px] font-semibold text-[#16140f]">
                URL 슬러그
              </span>
              <input
                value={slug}
                onChange={handleSlugChange}
                placeholder="example-post-slug"
                className="h-10 w-full rounded-[8px] border border-[#ddd9cc] px-3 font-['Pretendard',sans-serif] text-[14px] text-[#16140f] transition-colors focus:border-[#FF6C0F] focus:outline-none"
              />
            </label>

            {/* Post type */}
            <fieldset>
              <legend className="mb-1.5 block font-['Pretendard',sans-serif] text-[13px] font-semibold text-[#16140f]">
                포스트 유형
              </legend>
              <div className="flex gap-4">
                <label className="inline-flex cursor-pointer items-center gap-2 font-['Pretendard',sans-serif] text-[14px] text-[#16140f]">
                  <input
                    type="radio"
                    checked={type === "blog"}
                    onChange={() => {
                      setType("blog");
                      triggerAutoSave();
                    }}
                    className="accent-[#FF6C0F]"
                  />
                  SPEC 블로그
                </label>
                {isAdmin && (
                  <label className="inline-flex cursor-pointer items-center gap-2 font-['Pretendard',sans-serif] text-[14px] text-[#16140f]">
                    <input
                      type="radio"
                      checked={type === "news"}
                      onChange={() => {
                        setType("news");
                        triggerAutoSave();
                      }}
                      className="accent-[#FF6C0F]"
                    />
                    SPEC 소식
                  </label>
                )}
              </div>
            </fieldset>

            {/* Excerpt */}
            <label className="block">
              <span className="mb-1.5 block font-['Pretendard',sans-serif] text-[13px] font-semibold text-[#16140f]">
                요약
              </span>
              <textarea
                value={excerpt}
                onChange={handleExcerptChange}
                rows={3}
                placeholder="포스트 요약을 입력하세요"
                className="w-full rounded-[8px] border border-[#ddd9cc] px-3 py-2.5 font-['Pretendard',sans-serif] text-[14px] text-[#16140f] transition-colors focus:border-[#FF6C0F] focus:outline-none"
              />
            </label>

            {/* Tags */}
            <fieldset>
              <legend className="mb-1.5 block font-['Pretendard',sans-serif] text-[13px] font-semibold text-[#16140f]">
                태그
              </legend>
              <div className="flex flex-wrap gap-2">
                {sortedTags.map((tag) => {
                  const selected = selectedTags.includes(tag.slug);
                  return (
                    <label
                      key={tag.slug}
                      className={`inline-flex cursor-pointer items-center rounded-full border px-3 py-1 font-['Pretendard',sans-serif] text-[13px] transition-colors ${
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
          </div>
        </div>

        {/* Drawer footer */}
        <div className="shrink-0 border-t border-[#ddd9cc] p-6">
          <button
            type="button"
            onClick={() => {
              setIsDrawerOpen(false);
              void submitForm(true);
            }}
            disabled={saveDisabled}
            className="mb-2 flex h-[42px] w-full items-center justify-center rounded-[8px] bg-[#FF6C0F] font-['Pretendard',sans-serif] text-[14px] font-medium text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            발행하기
          </button>
          <button
            type="button"
            onClick={() => {
              setIsDrawerOpen(false);
              void submitForm(false);
            }}
            disabled={saveDisabled}
            className="flex h-[42px] w-full items-center justify-center rounded-[8px] border border-[#ddd9cc] font-['Pretendard',sans-serif] text-[14px] font-medium text-[#16140f] transition-colors hover:border-[#FF6C0F] disabled:cursor-not-allowed disabled:opacity-50"
          >
            임시저장
          </button>
        </div>
      </aside>
    </div>
  );
}
