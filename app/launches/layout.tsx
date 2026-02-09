import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launches | Y Combinator",
  description: "Latest launches from YC startups",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
