"use client";

import { useState } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"email" | "name">("email");
  const [result, setResult] = useState<"idle" | "success" | "not_found">("idle");

  const handleVerify = () => {
    if (!searchQuery.trim()) return;
    setResult("idle");
    setTimeout(() => {
      setResult("not_found");
    }, 800);
  };

  return (
    <div className="overflow-hidden">
      <section className="px-4 pb-8 pt-10 text-center sm:pb-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-[800px]">
          <h1 className="inline-flex items-center justify-center gap-3 font-[system-ui] text-3xl font-black tracking-tight text-[#16140f] sm:text-4xl">
            <svg
              className="h-8 w-8 text-[#FF6C0F] sm:h-9 sm:w-9"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            Verify
          </h1>
          <p className="mt-4 font-['Pretendard',sans-serif] text-lg font-normal text-[#16140f]/60">
            SPEC 프로그램 참여자/졸업자 인증
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-[720px]">
          <div className="mb-12">
            <h2 className="mb-4 font-['MaruBuri',serif] text-2xl font-semibold text-[#16140f]">
              참여 인증이란?
            </h2>
            <p className="mb-4 font-['Pretendard',sans-serif] text-[15px] font-normal leading-relaxed text-[#16140f]/80">
              SPEC 프로그램에 참여했거나 졸업한 분인지 확인할 수 있는
              인증 서비스입니다. 아래 정보를 통해 인증할 수 있습니다:
            </p>
            <ul className="ml-8 list-disc space-y-2 font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f]/80">
              <li>참여자 이름 및 기수</li>
              <li>참여한 프로그램 (배치 정보)</li>
              <li>활동 기간 및 상태 (현재 활동 / 졸업)</li>
            </ul>
          </div>

          <div className="mb-12 rounded-xl border border-[#e8e8e0] bg-[#fafaf5] p-6">
            <h3 className="mb-3 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
              인증 방법 선택
            </h3>
            <div className="mb-4 flex gap-3">
              <button
                onClick={() => {
                  setSearchType("email");
                  setResult("idle");
                }}
                className={`rounded-lg px-4 py-2 font-['Pretendard',sans-serif] text-sm font-medium transition-colors ${
                  searchType === "email"
                    ? "bg-[#FF6C0F] text-white"
                    : "bg-[#eae9e2] text-[#16140f]/70 hover:bg-[#dedad0]"
                }`}
              >
                이메일 인증
              </button>
              <button
                onClick={() => {
                  setSearchType("name");
                  setResult("idle");
                }}
                className={`rounded-lg px-4 py-2 font-['Pretendard',sans-serif] text-sm font-medium transition-colors ${
                  searchType === "name"
                    ? "bg-[#FF6C0F] text-white"
                    : "bg-[#eae9e2] text-[#16140f]/70 hover:bg-[#dedad0]"
                }`}
              >
                기수/이름 검색
              </button>
            </div>
            <p className="mb-4 font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f]/60">
              {searchType === "email"
                ? "SPEC 지원 시 사용한 이메일 주소를 입력해 주세요."
                : "기수 번호와 이름을 입력해 주세요. (예: 1기 홍길동)"}
            </p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder={
                  searchType === "email"
                    ? "example@skku.edu"
                    : "1기 홍길동"
                }
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setResult("idle");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleVerify();
                }}
                className="flex-1 rounded-lg border border-[#e8e8e0] bg-white px-4 py-3 font-['Pretendard',sans-serif] text-sm font-normal text-[#16140f] placeholder:text-[#16140f]/40 focus:border-[#FF6C0F] focus:outline-none focus:ring-1 focus:ring-[#FF6C0F]"
              />
              <button
                onClick={handleVerify}
                className="shrink-0 rounded-lg bg-[#16140f] px-5 py-3 font-['Pretendard',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                인증하기
              </button>
            </div>

            {result === "success" && (
              <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="flex items-center gap-2 font-['Pretendard',sans-serif] text-sm font-semibold text-green-800">
                  <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  인증 완료
                </p>
                <p className="mt-1 font-['Pretendard',sans-serif] text-sm font-normal text-green-700">
                  SPEC 프로그램 참여가 확인되었습니다.
                </p>
              </div>
            )}

            {result === "not_found" && (
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="flex items-center gap-2 font-['Pretendard',sans-serif] text-sm font-semibold text-amber-800">
                  <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1-64 0z" />
                  </svg>
                  정보를 찾을 수 없습니다
                </p>
                <p className="mt-1 font-['Pretendard',sans-serif] text-sm font-normal text-amber-700">
                  입력하신 정보와 일치하는 참여 기록이 없습니다. 정보를
                  다시 확인해 주세요.
                </p>
              </div>
            )}
          </div>

          <div className="mb-12">
            <h3 className="mb-3 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
              외부 기관 및 파트너를 위한 안내
            </h3>
            <p className="mb-4 font-['Pretendard',sans-serif] text-[15px] font-normal leading-relaxed text-[#16140f]/80">
              SPEC 참여 여부를 확인하려면 해당 인원에게 직접 인증을
              요청하시거나, 아래 이메일로 문의해 주세요. 본인 동의 하에
              참여 이력을 확인해 드립니다.
            </p>
            <div className="rounded-lg bg-[#eae9e2] px-4 py-3">
              <code className="font-mono text-sm text-[#16140f]/80">
                verify@spec-skku.org
              </code>
            </div>
          </div>

          <div className="mb-12 rounded-xl border border-[#e8e8e0] bg-[#fafaf5] p-6">
            <h3 className="mb-3 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
              SPEC 참여자라면
            </h3>
            <p className="mb-4 font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f]/80">
              프로그램 참여 시 등록한 이메일로 인증할 수 있습니다.
              이메일이 기억나지 않는 경우, 기수와 이름으로도 검색이
              가능합니다.
            </p>
            <Link
              href="/apply"
              className="inline-block rounded-lg bg-[#FF6C0F] px-5 py-2.5 font-['Pretendard',sans-serif] text-sm font-medium text-white transition-colors hover:bg-[#e55c00]"
            >
              SPEC 지원하기
            </Link>
          </div>

          <div className="rounded-xl border border-[#e8e8e0] bg-[#fafaf5] p-6">
            <h3 className="mb-3 font-['Pretendard',sans-serif] text-lg font-semibold text-[#16140f]">
              도움이 필요하신가요?
            </h3>
            <p className="font-['Pretendard',sans-serif] text-[15px] font-normal text-[#16140f]/80">
              인증 관련 문의사항은{" "}
              <Link
                href="/contact"
                className="font-medium text-[#FF6C0F] hover:underline"
              >
                문의하기
              </Link>
              를 통해 연락해 주세요.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
