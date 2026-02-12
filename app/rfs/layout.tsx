import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requests for Startups | SPEC",
  description: "Ideas SPEC wants to support",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
