"use client";

import { useState } from "react";
import { deleteApplication } from "@/lib/actions/applications";
import { useRouter } from "next/navigation";

type DeleteApplicationButtonProps = {
  id: string;
  applicantName: string;
};

export default function DeleteApplicationButton({ id, applicantName }: DeleteApplicationButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`${applicantName}님의 지원서를 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const result = await deleteApplication(id);
      if (result.error) {
        alert(result.error);
      } else {
        // 성공 시 목록 갱신을 위해 router.refresh() 호출 또는 상세 페이지의 경우 목록으로 이동
        router.refresh();
      }
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex h-8 items-center rounded-md border border-red-200 bg-white px-3 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50 transition-colors"
    >
      {isDeleting ? "삭제 중..." : "삭제하기"}
    </button>
  );
}
