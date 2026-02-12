import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SPEC",
  description: "Latest news and insights from SPEC",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
