import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Y Combinator",
  description: "Latest news and insights from Y Combinator",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
