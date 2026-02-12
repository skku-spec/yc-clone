import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | SPEC",
  description: "Frequently asked questions about SPEC",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
