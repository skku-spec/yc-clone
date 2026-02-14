import { createClient } from "@/lib/supabase/server";

type StatCard = {
  label: string;
  value: number;
};

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [usersResult, postsResult, publishedPostsResult, commentsResult, jobsResult, libraryResult] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("posts").select("id", { count: "exact", head: true }),
    supabase.from("posts").select("id", { count: "exact", head: true }).eq("published", true),
    supabase.from("comments").select("id", { count: "exact", head: true }),
    supabase.from("jobs").select("id", { count: "exact", head: true }),
    supabase.from("library_items").select("id", { count: "exact", head: true }),
  ]);

  const stats: StatCard[] = [
    { label: "Total Users", value: usersResult.count ?? 0 },
    { label: "Total Posts", value: postsResult.count ?? 0 },
    { label: "Published Posts", value: publishedPostsResult.count ?? 0 },
    { label: "Comments", value: commentsResult.count ?? 0 },
    { label: "Jobs", value: jobsResult.count ?? 0 },
    { label: "Library Items", value: libraryResult.count ?? 0 },
  ];

  return (
    <section>
      <h1 className="mb-7 text-3xl font-semibold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">Admin Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-lg border border-[#ddd9cc] bg-white p-6">
            <p className="text-3xl font-bold text-[#16140f]">{stat.value.toLocaleString()}</p>
            <p className="mt-2 text-sm text-[#6b6b5e]">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
