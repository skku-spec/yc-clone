import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breakthrough Companies | Y Combinator",
  description: "Breakthrough Y Combinator companies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
