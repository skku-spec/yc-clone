"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface TiptapEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
  placeholder?: string;
  editable?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Toolbar button                                                     */
/* ------------------------------------------------------------------ */

interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  title: string;
  children: React.ReactNode;
}

function ToolbarButton({ onClick, isActive, title, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="toolbar-btn"
      style={{
        width: 30,
        height: 30,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        transition: "background 120ms ease, color 120ms ease",
        background: isActive ? "#FF6C0F" : "transparent",
        color: isActive ? "#fff" : "#16140f",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = "#e8e6dc";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Separator                                                          */
/* ------------------------------------------------------------------ */

function Separator() {
  return (
    <div
      style={{
        width: 1,
        height: 18,
        background: "#ddd9cc",
        margin: "0 6px",
        flexShrink: 0,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  MenuBar                                                            */
/* ------------------------------------------------------------------ */

function MenuBar({ editor }: { editor: Editor }) {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("링크 URL을 입력하세요", previousUrl || "https://");

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("이미지 URL을 입력하세요", "https://");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 2,
        padding: "8px 12px",
        borderBottom: "1px solid #ddd9cc",
        background: "#f5f5ee",
        borderRadius: "8px 8px 0 0",
        fontFamily: "'Pretendard', sans-serif",
      }}
    >
      {/* ── Inline formatting ── */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        title="굵게 (Ctrl+B)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
          <path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        title="기울임 (Ctrl+I)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="4" x2="10" y2="4" />
          <line x1="14" y1="20" x2="5" y2="20" />
          <line x1="15" y1="4" x2="9" y2="20" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
        title="밑줄 (Ctrl+U)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3" />
          <line x1="4" y1="21" x2="20" y2="21" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        title="취소선"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M16 6C16 6 14.5 4 12 4 9 4 7 6 7 8c0 1.5 1 2.5 3 3.5" />
          <path d="M8 18c0 0 1.5 2 4 2 3 0 5-2 5-4 0-1.5-1-2.5-3-3.5" />
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── Headings ── */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
        title="제목 1"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4v16" />
          <path d="M4 12h8" />
          <path d="M12 4v16" />
          <path d="M17 12l2-2v10" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
        title="제목 2"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4v16" />
          <path d="M4 12h8" />
          <path d="M12 4v16" />
          <path d="M17 10a2 2 0 114 0c0 1.5-4 3-4 5h4" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive("heading", { level: 3 })}
        title="제목 3"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4v16" />
          <path d="M4 12h8" />
          <path d="M12 4v16" />
          <path d="M17 10a2 2 0 114 0 2 2 0 01-2 2" />
          <path d="M19 14a2 2 0 110 4 2 2 0 01-2-2" />
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── Lists ── */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        title="글머리 기호"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="9" y1="6" x2="20" y2="6" />
          <line x1="9" y1="12" x2="20" y2="12" />
          <line x1="9" y1="18" x2="20" y2="18" />
          <circle cx="5" cy="6" r="1" fill="currentColor" />
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <circle cx="5" cy="18" r="1" fill="currentColor" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        title="번호 매기기"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="6" x2="20" y2="6" />
          <line x1="10" y1="12" x2="20" y2="12" />
          <line x1="10" y1="18" x2="20" y2="18" />
          <text x="3" y="8" fontSize="8" fill="currentColor" stroke="none" fontFamily="sans-serif">1</text>
          <text x="3" y="14" fontSize="8" fill="currentColor" stroke="none" fontFamily="sans-serif">2</text>
          <text x="3" y="20" fontSize="8" fill="currentColor" stroke="none" fontFamily="sans-serif">3</text>
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── Block formatting ── */}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
        title="인용"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2z" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
        title="코드 블록"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── Link & Image ── */}
      <ToolbarButton
        onClick={setLink}
        isActive={editor.isActive("link")}
        title="링크"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
      </ToolbarButton>

      <ToolbarButton onClick={addImage} title="이미지">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── History ── */}
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        title="실행 취소 (Ctrl+Z)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        title="다시 실행 (Ctrl+Shift+Z)"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
      </ToolbarButton>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Prose styling (injected once via <style>)                          */
/* ------------------------------------------------------------------ */

const PROSE_STYLES = `
.tiptap-editor-root .ProseMirror {
  outline: none;
  min-height: 400px;
  padding: 24px;
  font-family: 'MaruBuri', serif;
  font-size: 17px;
  line-height: 1.8;
  color: #16140f;
}

.tiptap-editor-root .ProseMirror h1 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 1em 0 0.5em;
  font-family: system-ui, -apple-system, sans-serif;
}

.tiptap-editor-root .ProseMirror h2 {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0.9em 0 0.4em;
  font-family: system-ui, -apple-system, sans-serif;
}

.tiptap-editor-root .ProseMirror h3 {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0.8em 0 0.3em;
  font-family: system-ui, -apple-system, sans-serif;
}

.tiptap-editor-root .ProseMirror p {
  font-size: 17px;
  margin: 0.75em 0;
}

.tiptap-editor-root .ProseMirror ul {
  list-style-type: disc;
  padding-left: 1.5em;
  margin: 0.5em 0;
}

.tiptap-editor-root .ProseMirror ol {
  list-style-type: decimal;
  padding-left: 1.5em;
  margin: 0.5em 0;
}

.tiptap-editor-root .ProseMirror li {
  margin: 0.25em 0;
}

.tiptap-editor-root .ProseMirror li p {
  margin: 0.15em 0;
}

.tiptap-editor-root .ProseMirror blockquote {
  border-left: 3px solid #FF6C0F;
  padding-left: 1em;
  margin: 1em 0;
  font-style: italic;
  color: #6b6b5e;
}

.tiptap-editor-root .ProseMirror code {
  background: #e8e6dc;
  border-radius: 4px;
  padding: 0.15em 0.4em;
  font-size: 0.9em;
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', Menlo, monospace;
}

.tiptap-editor-root .ProseMirror pre {
  background: #1a1a1a;
  border-radius: 8px;
  padding: 16px 20px;
  margin: 1em 0;
  overflow-x: auto;
}

.tiptap-editor-root .ProseMirror pre code {
  display: block;
  background: none;
  padding: 0;
  border-radius: 0;
  color: #e4e4e4;
  font-size: 0.875em;
  line-height: 1.6;
}

.tiptap-editor-root .ProseMirror img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1em 0;
}

.tiptap-editor-root .ProseMirror a {
  color: #FF6C0F;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.tiptap-editor-root .ProseMirror a:hover {
  opacity: 0.8;
}

.tiptap-editor-root .ProseMirror hr {
  border: none;
  border-top: 1px solid #ddd9cc;
  margin: 1.5em 0;
}

/* Placeholder */
.tiptap-editor-root .ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #a3a295;
  font-style: italic;
  pointer-events: none;
  height: 0;
}

.tiptap-editor-root .ProseMirror .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  color: #a3a295;
  font-style: italic;
  pointer-events: none;
  height: 0;
}
`;

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function TiptapEditor({
  content = "",
  onChange,
  onImageUpload,
  placeholder = "내용을 입력하세요...",
  editable = true,
}: TiptapEditorProps) {
  const stylesInjected = useRef(false);

  /* Inject prose styles once */
  useEffect(() => {
    if (stylesInjected.current) return;
    stylesInjected.current = true;

    const style = document.createElement("style");
    style.setAttribute("data-tiptap-editor", "true");
    style.textContent = PROSE_STYLES;
    document.head.appendChild(style);

    return () => {
      style.remove();
      stylesInjected.current = false;
    };
  }, []);

  /* Handle pasted / dropped images */
  const handleImageUpload = useCallback(
    async (file: File, editor: Editor) => {
      if (!onImageUpload) return;

      try {
        const url = await onImageUpload(file);
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      } catch {
        // silently fail – the consumer handles errors
      }
    },
    [onImageUpload],
  );

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-[#FF6C0F] underline",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    editable,
    editorProps: {
      handleDrop: (view, event, _slice, moved) => {
        if (!moved && event.dataTransfer?.files?.length) {
          const images = Array.from(event.dataTransfer.files).filter((f) =>
            f.type.startsWith("image/"),
          );

          if (images.length > 0) {
            event.preventDefault();
            const editorInstance = editor;
            if (editorInstance) {
              images.forEach((image) => handleImageUpload(image, editorInstance));
            }
            return true;
          }
        }
        return false;
      },
      handlePaste: (_view, event) => {
        const items = event.clipboardData?.items;
        if (!items) return false;

        const images: File[] = [];
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          if (item.type.startsWith("image/")) {
            const file = item.getAsFile();
            if (file) images.push(file);
          }
        }

        if (images.length > 0) {
          event.preventDefault();
          const editorInstance = editor;
          if (editorInstance) {
            images.forEach((image) => handleImageUpload(image, editorInstance));
          }
          return true;
        }

        return false;
      },
    },
    onUpdate: ({ editor: ed }) => {
      onChange?.(ed.getHTML());
    },
  });

  return (
    <div className="tiptap-editor-root">
      <div
        style={{
          border: "1px solid #ddd9cc",
          borderRadius: 8,
          overflow: "hidden",
          background: "#fff",
          transition: "border-color 200ms ease",
        }}
        onFocusCapture={(e) => {
          const wrapper = e.currentTarget;
          wrapper.style.borderColor = "#FF6C0F";
        }}
        onBlurCapture={(e) => {
          const wrapper = e.currentTarget;
          if (!wrapper.contains(e.relatedTarget)) {
            wrapper.style.borderColor = "#ddd9cc";
          }
        }}
      >
        {editor && <MenuBar editor={editor} />}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
