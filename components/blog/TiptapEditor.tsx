"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import CharacterCount from "@tiptap/extension-character-count";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import { useCallback, useEffect, useRef } from "react";

import "./tiptap-editor.css";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

interface TiptapEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
  placeholder?: string;
  editable?: boolean;
  onWordCountChange?: (count: number) => void;
}

/* ------------------------------------------------------------------ */
/*  Lowlight instance (created once at module level)                    */
/* ------------------------------------------------------------------ */

const lowlight = createLowlight(all);

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
/*  MenuBar (block-level controls — inline formatting in BubbleMenu)   */
/* ------------------------------------------------------------------ */

function MenuBar({ editor, onAddImage }: { editor: Editor; onAddImage: () => void }) {
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

      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        title="구분선"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── Text alignment ── */}
      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
        title="왼쪽 정렬"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="18" y2="18" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
        title="가운데 정렬"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="6" y1="12" x2="18" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </ToolbarButton>

      <ToolbarButton
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
        title="오른쪽 정렬"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="9" y1="12" x2="21" y2="12" />
          <line x1="6" y1="18" x2="21" y2="18" />
        </svg>
      </ToolbarButton>

      <Separator />

      {/* ── Image ── */}
      <ToolbarButton onClick={onAddImage} title="이미지">
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
/*  EditorBubbleMenu (inline formatting on text selection)             */
/* ------------------------------------------------------------------ */

function EditorBubbleMenu({ editor }: { editor: Editor }) {
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

  return (
    <BubbleMenu
      editor={editor}
      options={{
        placement: "top",
      }}
      shouldShow={({ editor: ed, from, to }) => {
        // Don't show for empty selections
        if (from === to) return false;
        // Don't show inside code blocks
        if (ed.isActive("codeBlock")) return false;
        // Don't show if an image is selected
        if (ed.isActive("image")) return false;
        return true;
      }}
    >
      <div className="tiptap-bubble-menu">
        {/* Bold */}
        <button
          type="button"
          className={`bubble-btn ${editor.isActive("bold") ? "is-active" : ""}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
          title="굵게 (Ctrl+B)"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
            <path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
          </svg>
        </button>

        {/* Italic */}
        <button
          type="button"
          className={`bubble-btn ${editor.isActive("italic") ? "is-active" : ""}`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          title="기울임 (Ctrl+I)"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="4" x2="10" y2="4" />
            <line x1="14" y1="20" x2="5" y2="20" />
            <line x1="15" y1="4" x2="9" y2="20" />
          </svg>
        </button>

        {/* Underline */}
        <button
          type="button"
          className={`bubble-btn ${editor.isActive("underline") ? "is-active" : ""}`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="밑줄 (Ctrl+U)"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3" />
            <line x1="4" y1="21" x2="20" y2="21" />
          </svg>
        </button>

        {/* Strikethrough */}
        <button
          type="button"
          className={`bubble-btn ${editor.isActive("strike") ? "is-active" : ""}`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          title="취소선"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <path d="M16 6C16 6 14.5 4 12 4 9 4 7 6 7 8c0 1.5 1 2.5 3 3.5" />
            <path d="M8 18c0 0 1.5 2 4 2 3 0 5-2 5-4 0-1.5-1-2.5-3-3.5" />
          </svg>
        </button>

        <div className="bubble-separator" />

        {/* Link */}
        <button
          type="button"
          className={`bubble-btn ${editor.isActive("link") ? "is-active" : ""}`}
          onClick={setLink}
          title="링크"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        </button>

        <div className="bubble-separator" />

        {/* Highlight */}
        <button
          type="button"
          className={`bubble-btn ${editor.isActive("highlight") ? "is-active" : ""}`}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          title="하이라이트"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </button>
      </div>
    </BubbleMenu>
  );
}

/* ------------------------------------------------------------------ */
/*  FooterStats bar                                                    */
/* ------------------------------------------------------------------ */

function FooterStats({ editor }: { editor: Editor }) {
  const characters = editor.storage.characterCount.characters();
  const words = editor.storage.characterCount.words();
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "8px 16px",
        fontSize: 12,
        color: "#6b6b5e",
        background: "#f5f5ee",
        borderTop: "1px solid #ddd9cc",
        fontFamily: "'Pretendard', sans-serif",
      }}
    >
      <span>{characters.toLocaleString()} / 50,000</span>
      <span>{words.toLocaleString()} 단어</span>
      <span>~{readingTime}분 읽기</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function TiptapEditor({
  content = "",
  onChange,
  onImageUpload,
  placeholder = "내용을 입력하세요...",
  editable = true,
  onWordCountChange,
}: TiptapEditorProps) {
  /* Track blob URLs for cleanup */
  const blobUrlsRef = useRef<Map<string, string>>(new Map());

  /* Image upload with immediate blob preview */
  const handleImageUpload = useCallback(
    async (file: File, ed: Editor) => {
      if (!onImageUpload) return;

      // Create an immediate blob preview
      const blobUrl = URL.createObjectURL(file);

      // Insert the blob preview immediately for instant feedback
      ed.chain().focus().setImage({ src: blobUrl }).run();

      try {
        const uploadedUrl = await onImageUpload(file);

        if (uploadedUrl) {
          // Find and replace the blob URL with the real uploaded URL
          const { doc } = ed.state;
          let replaced = false;

          doc.descendants((node, pos) => {
            if (replaced) return false;
            if (node.type.name === "image" && node.attrs.src === blobUrl) {
              ed.chain()
                .focus()
                .command(({ tr }) => {
                  tr.setNodeMarkup(pos, undefined, {
                    ...node.attrs,
                    src: uploadedUrl,
                  });
                  return true;
                })
                .run();
              replaced = true;
              return false;
            }
            return true;
          });

          // Track for cleanup
          blobUrlsRef.current.set(blobUrl, uploadedUrl);
        }
      } catch (error) {
        console.error("Image upload failed:", error);

        // Remove the image node on failure
        const { doc } = ed.state;
        doc.descendants((node, pos) => {
          if (node.type.name === "image" && node.attrs.src === blobUrl) {
            ed.chain()
              .focus()
              .command(({ tr }) => {
                tr.delete(pos, pos + node.nodeSize);
                return true;
              })
              .run();
            return false;
          }
          return true;
        });
      } finally {
        // Revoke the blob URL to free memory
        URL.revokeObjectURL(blobUrl);
        blobUrlsRef.current.delete(blobUrl);
      }
    },
    [onImageUpload],
  );

  /* Toolbar image button — prompt for URL */
  const addImage = useCallback(
    (ed: Editor) => {
      const url = window.prompt("이미지 URL을 입력하세요", "https://");
      if (url) {
        ed.chain().focus().setImage({ src: url }).run();
      }
    },
    [],
  );

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        codeBlock: false, // Replaced by CodeBlockLowlight
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        defaultProtocol: "https",
        HTMLAttributes: {
          class: "text-[#FF6C0F] underline underline-offset-2",
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      Image.configure({
        allowBase64: false,
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto my-4",
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      CharacterCount.configure({
        limit: 50000,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: false,
      }),
      Typography,
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
      onWordCountChange?.(ed.storage.characterCount.words());
    },
  });

  /* Cleanup blob URLs on unmount */
  useEffect(() => {
    const blobUrls = blobUrlsRef.current;
    return () => {
      blobUrls.forEach((_realUrl, blobUrl) => {
        URL.revokeObjectURL(blobUrl);
      });
      blobUrls.clear();
    };
  }, []);

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
        {editor && (
          <MenuBar
            editor={editor}
            onAddImage={() => addImage(editor)}
          />
        )}
        {editor && <EditorBubbleMenu editor={editor} />}
        <EditorContent editor={editor} />
        {editor && <FooterStats editor={editor} />}
      </div>
    </div>
  );
}
