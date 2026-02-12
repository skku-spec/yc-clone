import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify | SPEC",
  description: "Verify a SPEC company",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
