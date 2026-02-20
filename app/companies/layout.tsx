import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트 | SPEC — 성균관대 창업학회",
  description: "SPEC 1~2기에서 탄생한 프로젝트들을 만나보세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
