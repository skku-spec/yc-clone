import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "지원하기 | SPEC",
  description: "SPEC 부원 지원서를 작성하고 제출하세요.",
};

export default async function ApplyFormLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getCurrentUser();

  if (!user) {
    redirect("/login?redirect=/apply/form");
  }

  return children;
}
