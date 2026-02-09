import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Companies | Y Combinator",
  description: "Top Y Combinator companies by valuation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
