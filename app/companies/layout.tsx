import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companies | Y Combinator",
  description: "Browse Y Combinator funded startups",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
