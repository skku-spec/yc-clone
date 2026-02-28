"use client";

import { useState } from "react";
import { getApplicationByCredentials } from "@/lib/actions/applications";
import type { ApplicationStatusResult } from "@/lib/actions/applications";
import ApplicationStatusCard from "./ApplicationStatusCard";

export default function StatusCheckForm() {
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [result, setResult] = useState<ApplicationStatusResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await getApplicationByCredentials(email, studentId);
      setResult(response);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-10 rounded-lg border border-[#d9d9cc] bg-white p-8 md:p-10">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void handleSubmit();
          }}
        >
          <label className="block font-['Pretendard',sans-serif] text-sm font-semibold text-[#16140f]">
            이메일
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="지원 시 입력한 이메일"
            required
            className="mt-2 w-full rounded-lg border border-[#ddd9cc] bg-[#fcfcf8] px-4 py-3 font-['Pretendard',sans-serif] text-[15px] text-[#16140f] placeholder:text-[#9a9a8c] outline-none transition-colors focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F]"
          />

          <div className="mt-5">
            <label className="block font-['Pretendard',sans-serif] text-sm font-semibold text-[#16140f]">
              학번
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={studentId}
              onChange={(event) => setStudentId(event.target.value)}
              placeholder="8~10자리 숫자"
              required
              className="mt-2 w-full rounded-lg border border-[#ddd9cc] bg-[#fcfcf8] px-4 py-3 font-['Pretendard',sans-serif] text-[15px] text-[#16140f] placeholder:text-[#9a9a8c] outline-none transition-colors focus:border-[#FF6C0F] focus:ring-1 focus:ring-[#FF6C0F]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !email || !studentId}
            className="mt-8 w-full rounded-full bg-[#FF6C0F] px-8 py-3.5 font-['Pretendard',sans-serif] text-[15px] font-semibold text-white transition-colors hover:bg-[#e55d0b] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "조회 중..." : "조회하기"}
          </button>
        </form>

        {result?.error ? (
          <div className="mt-6 rounded-lg bg-[#FEE2E2] px-4 py-3 font-['Pretendard',sans-serif] text-sm text-[#b42318]">
            {result.error}
          </div>
        ) : null}
      </div>

      {result?.success && result.application ? (
        <ApplicationStatusCard application={result.application} />
      ) : null}
    </>
  );
}
