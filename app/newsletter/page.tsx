import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "뉴스레터 | SPEC",
  description: "SPEC 뉴스레터 구독 페이지",
};

export default function NewsletterPage() {
  redirect("/subscribe");
}
