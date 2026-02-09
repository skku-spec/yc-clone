import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requests for Startups | Y Combinator",
  description: "Ideas Y Combinator wants to fund",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
