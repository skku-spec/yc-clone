"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { updateUserRole } from "@/lib/actions/admin";
import type { Database, ProfileRole } from "@/lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

type UsersClientProps = {
  initialProfiles: Profile[];
};

const ROLE_OPTIONS: ProfileRole[] = ["admin", "mentor", "alumni", "runner", "pre_runner", "outsider"];

const ROLE_COLORS: Record<ProfileRole, string> = {
  admin: "#FF6C0F",
  mentor: "#8B5CF6",
  alumni: "#10B981",
  runner: "#3B82F6",
  pre_runner: "#F59E0B",
  outsider: "#9CA3AF",
};

function formatRoleLabel(role: ProfileRole) {
  return role.replace("_", " ");
}

function isProfileRole(value: string): value is ProfileRole {
  return (
    value === "admin" ||
    value === "mentor" ||
    value === "alumni" ||
    value === "runner" ||
    value === "pre_runner" ||
    value === "outsider"
  );
}

function formatJoinedDate(date: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export default function UsersClient({ initialProfiles }: UsersClientProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRoleChange = (userId: string, nextRole: ProfileRole) => {
    startTransition(() => {
      void (async () => {
        const result = await updateUserRole(userId, nextRole);

        if (!result.success) {
          window.alert(result.error ?? "Failed to update role.");
          return;
        }

        router.refresh();
      })();
    });
  };

  return (
    <section className="min-h-screen bg-[#f5f5ee] px-6 py-10 text-[#16140f]">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 font-[system-ui] text-[clamp(2rem,4vw,2.75rem)] font-black">Users</h1>

        <div className="overflow-x-auto rounded-lg border border-[#ddd9cc] bg-white">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#f0efe6] text-left">
              <tr>
                <th className="px-4 py-3 font-['Pretendard',sans-serif] text-sm font-semibold">Name</th>
                <th className="px-4 py-3 font-['Pretendard',sans-serif] text-sm font-semibold">Role</th>
                <th className="px-4 py-3 font-['Pretendard',sans-serif] text-sm font-semibold">Batch</th>
                <th className="px-4 py-3 font-['Pretendard',sans-serif] text-sm font-semibold">Company</th>
                <th className="px-4 py-3 font-['Pretendard',sans-serif] text-sm font-semibold">Joined</th>
              </tr>
            </thead>
            <tbody>
              {initialProfiles.map((profile) => {
                const initial = profile.name.trim().charAt(0).toUpperCase() || "?";

                return (
                  <tr key={profile.id} className="border-t border-[#ece8db]">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#e8e6dc] font-['Pretendard',sans-serif] text-sm font-semibold text-[#4a4a40]">
                          {initial}
                        </div>
                        <div>
                          <p className="font-['Pretendard',sans-serif] text-sm font-semibold text-[#16140f]">
                            {profile.name || "Unknown"}
                          </p>
                          <p className="font-['Pretendard',sans-serif] text-xs text-[#6b6b5e]">{profile.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="inline-flex rounded-full px-2.5 py-1 font-['Pretendard',sans-serif] text-xs font-semibold text-white"
                          style={{ backgroundColor: ROLE_COLORS[profile.role] }}
                        >
                          {formatRoleLabel(profile.role)}
                        </span>
                        <select
                          value={profile.role}
                          onChange={(event) => {
                            const nextRole = event.target.value;
                            if (isProfileRole(nextRole)) {
                              handleRoleChange(profile.id, nextRole);
                            }
                          }}
                          disabled={isPending}
                          className="h-8 rounded-md border border-[#ddd9cc] bg-white px-2 font-['Pretendard',sans-serif] text-xs text-[#16140f] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {ROLE_OPTIONS.map((role) => (
                            <option key={role} value={role}>
                              {formatRoleLabel(role)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-['Pretendard',sans-serif] text-sm text-[#4a4a40]">
                      {profile.batch || "-"}
                    </td>
                    <td className="px-4 py-3 font-['Pretendard',sans-serif] text-sm text-[#4a4a40]">
                      {profile.company || "-"}
                    </td>
                    <td className="px-4 py-3 font-['Pretendard',sans-serif] text-sm text-[#6b6b5e]">
                      {formatJoinedDate(profile.created_at)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
