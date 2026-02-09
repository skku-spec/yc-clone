import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YC Startup Library | Y Combinator",
  description: "Watch videos, listen to podcasts, and read essays for startup founders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
