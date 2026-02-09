import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Founder Matching | Y Combinator",
  description: "Find your co-founder through Y Combinator",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
