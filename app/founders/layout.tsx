import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "출신 창업가 | SPEC — 성균관대 창업학회",
  description: "SPEC 1~3기를 거쳐 자신만의 사업을 시작한 창업가들입니다.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
