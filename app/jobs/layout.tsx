import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs | Y Combinator",
  description: "Find jobs at top YC startups",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
