import LaunchesClient from "./LaunchesClient";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Launch = Database["public"]["Tables"]["launches"]["Row"];

export default async function AdminLaunchesPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("launches")
    .select("*")
    .order("votes", { ascending: false });

  if (error) {
    console.error("Failed to load launches:", error.message);
  }

  const launches: Launch[] = data ?? [];

  return <LaunchesClient initialLaunches={launches} />;
}
