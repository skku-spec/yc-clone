import type { Database } from "@/lib/supabase/types";
import { createClient } from "@/lib/supabase/server";

import LaunchesPageClient from "./LaunchesPageClient";

type Launch = Database["public"]["Tables"]["launches"]["Row"];

const CATEGORIES = [
  { emoji: "all", label: "전체" },
  { emoji: "📚", label: "에듀테크" },
  { emoji: "🍽️", label: "푸드테크" },
  { emoji: "🏥", label: "헬스케어" },
  { emoji: "💰", label: "핀테크" },
  { emoji: "🛒", label: "커머스" },
  { emoji: "💬", label: "소셜" },
  { emoji: "🖥️", label: "SaaS" },
  { emoji: "🚚", label: "물류" },
  { emoji: "🤖", label: "AI/ML" },
  { emoji: "📦", label: "기타" },
] as const;

export default async function LaunchesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("launches")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: false });

  const launches: Launch[] = data ?? [];

  return <LaunchesPageClient launches={launches} categories={CATEGORIES} />;
}
