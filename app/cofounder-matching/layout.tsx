import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Founder Matching | SPEC",
  description: "Find your co-founder through SPEC",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
