import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "런치 | SPEC — 성균관대 창업학회",
  description: "SPEC 팀들의 제품 런칭 소식을 만나보세요.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
