import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자료실 | SPEC — 성균관대 창업학회",
  description: "창업 강의, 멘토 특강, 가이드, 에세이 — SPEC의 모든 콘텐츠를 한 곳에서.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
