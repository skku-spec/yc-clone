import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Companies | SPEC",
  description: "Featured SPEC companies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
