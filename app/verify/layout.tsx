import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify | Y Combinator",
  description: "Verify a Y Combinator company",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
