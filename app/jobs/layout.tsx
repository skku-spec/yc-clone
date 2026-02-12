import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | SPEC",
  description: "Find jobs at top SPEC startups",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
