import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Library | Y Combinator",
  description: "Search startup advice and resources",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
