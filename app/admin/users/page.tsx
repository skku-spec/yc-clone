import UsersClient from "@/app/admin/users/UsersClient";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function AdminUsersPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load profiles:", error.message);
  }

  const profiles: Profile[] = data ?? [];

  return <UsersClient initialProfiles={profiles} />;
}
