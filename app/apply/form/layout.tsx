import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "지원하기 | SPEC",
  description: "SPEC 부원 지원서를 작성하고 제출하세요.",
};

export default function ApplyFormLayout({ children }: { children: React.ReactNode }) {
  return children;
}
