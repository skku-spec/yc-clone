"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { updateUserRole } from "@/lib/actions/admin";
import CustomSelect from "@/components/ui/CustomSelect";
import type { Database } from "@/lib/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

type UsersClientProps = {
  initialProfiles: Profile[];
};

type UserRole = "outsider" | "member" | "admin";

const ROLE_OPTIONS: UserRole[] = ["admin", "member", "outsider"];

const ROLE_COLORS: Record<UserRole, string> = {
  admin: "#DC2626",
  member: "#2563EB",
  outsider: "#6b6b5e",
};

function formatRoleLabel(role: UserRole) {
  if (role === "outsider") return "외부인";
  if (role === "member") return "부원";
  return "관리자";
}

function isProfileRole(value: string): value is UserRole {
  return value === "admin" || value === "member" || value === "outsider";
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

  const handleRoleChange = (userId: string, nextRole: UserRole) => {
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
    <section>
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
                          style={{ backgroundColor: ROLE_COLORS[(profile.role as UserRole | null) ?? "outsider"] }}
                        >
                          {formatRoleLabel((profile.role as UserRole | null) ?? "outsider")}
                        </span>
                        <CustomSelect
                          value={(profile.role as UserRole | null) ?? "outsider"}
                          onChange={(nextRole) => {
                            if (isProfileRole(nextRole)) {
                              handleRoleChange(profile.id, nextRole);
                            }
                          }}
                          disabled={isPending}
                          options={ROLE_OPTIONS.map((role) => ({
                            value: role,
                            label: formatRoleLabel(role),
                          }))}
                          className="w-[130px]"
                        />
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
