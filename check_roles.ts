import { createClient } from "./lib/supabase/server";

async function listUsers() {
  const supabase = await createClient();
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("name, email:id, role") // id is used as a placeholder for email if not joined, but I'll just check names and roles
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching profiles:", error);
    return;
  }

  console.log("Registered Profiles and Roles:");
  profiles.forEach(p => {
    console.log(`- ${p.name} (Role: ${p.role})`);
  });
}

listUsers();
