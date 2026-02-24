import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import DeleteApplicationButton from "@/components/dashboard/DeleteApplicationButton";

export default async function ApplicationsDashboardPage() {
  const supabase = await createClient();
  const { profile } = await getCurrentUser();
  const isAdmin = profile?.role === "admin";

  const { data: applications, error } = await supabase
    .from("applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching applications:", error);
  }

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(dateString));
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-[#16140f] [font-family:system-ui,-apple-system,sans-serif]">
          지원서 목록
        </h1>
        <p className="text-sm text-[#6b6b5e]">총 {applications?.length ?? 0}개의 지원서</p>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#ddd9cc] bg-white text-nowrap">
        <table className="w-full text-left text-sm font-['Pretendard',sans-serif]">
          <thead className="bg-[#fcfcf8] border-b border-[#ddd9cc] text-[#6b6b5e] font-medium">
            <tr>
              <th className="px-6 py-4">지원자</th>
              <th className="px-6 py-4">전공</th>
              <th className="px-6 py-4">지원 차수</th>
              <th className="px-6 py-4">지원일</th>
              <th className="px-6 py-4">상태</th>
              <th className="px-6 py-4 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#ddd9cc]">
            {!applications || applications.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-10 text-center text-[#9a9a8c]">
                  아직 접수된 지원서가 없습니다.
                </td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="hover:bg-[#fcfcf8] transition-colors">
                  <td className="px-6 py-4 font-medium text-[#16140f]">
                    <div>
                      <p>{app.name}</p>
                      <p className="text-xs text-[#6b6b5e] font-normal">{app.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#4a4a40]">{app.major || "-"}</td>
                  <td className="px-6 py-4 text-[#4a4a40]">{app.batch}기</td>
                  <td className="px-6 py-4 text-[#4a4a40]">
                    {formatDate(app.created_at)}
                  </td>

                  <td className="px-6 py-4">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                      app.status === "pending" 
                        ? "bg-[#FFF0E5] text-[#FF6C0F]" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {app.status === "pending" ? "접수 완료" : app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/dashboard/applications/${app.id}`}
                        className="inline-flex h-8 items-center rounded-md border border-[#ddd9cc] px-3 text-xs font-medium text-[#16140f] hover:bg-[#fcfcf8]"
                      >
                        열람하기
                      </Link>
                      {isAdmin && (
                        <DeleteApplicationButton id={app.id} applicantName={app.name} />
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
