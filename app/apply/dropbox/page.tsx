import { redirect } from "next/navigation";

export const metadata = {
  title: "지원 가이드 | SPEC",
};

export default function ApplyDropboxPage() {
  redirect("/howtoapply");
}
