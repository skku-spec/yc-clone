import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Companies | Y Combinator",
  description: "Featured Y Combinator companies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
