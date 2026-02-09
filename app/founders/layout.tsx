import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founders | Y Combinator",
  description: "Y Combinator founder directory",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
