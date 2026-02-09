import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Y Combinator",
  description: "Frequently asked questions about Y Combinator",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
