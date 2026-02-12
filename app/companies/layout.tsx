import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "출신 기업 | SPEC — 성균관대 창업학회",
  description: "SPEC 1~3기에서 탄생한 기업들을 만나보세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
