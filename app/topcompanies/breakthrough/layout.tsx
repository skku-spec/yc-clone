import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breakthrough Companies | SPEC",
  description: "Breakthrough SPEC companies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
