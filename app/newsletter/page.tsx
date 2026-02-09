import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Subscribe to YC's Newsletter | Y Combinator",
  description:
    "Keep up with the latest news, launches, jobs, and events from the YC community.",
};

export default function NewsletterPage() {
  redirect("/subscribe");
}
