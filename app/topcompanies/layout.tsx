import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Companies | SPEC",
  description: "Top SPEC companies by valuation",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
