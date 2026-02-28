"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development only
    if (process.env.NODE_ENV === "development") {
      console.error("Global error:", error);
    }
  }, [error]);

  return (
    <html lang="ko">
      <head>
        <title>오류</title>
      </head>
      <body style={{ backgroundColor: "#f5f5ee", color: "#16140f" }}>
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-md text-center">
            {/* Header */}
            <h1
              className="text-5xl font-bold mb-6"
              style={{
                color: "#16140f",
                fontFamily: "system-ui",
              }}
            >
              시스템 오류
            </h1>

            {/* Error Message */}
            <p
              className="text-lg mb-8"
              style={{
                color: "#6b6b5e",
                fontFamily: '"Pretendard", sans-serif',
              }}
            >
              관리자에게 문의해주세요.
            </p>

            <p
              className="text-base mb-8"
              style={{
                color: "#6b6b5e",
                fontFamily: '"Pretendard", sans-serif',
                lineHeight: "1.6",
              }}
            >
              시스템에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
            </p>

            {/* Retry Button */}
            <button
              onClick={reset}
              className="inline-block px-8 py-3 rounded-md font-medium transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: "#FF6C0F",
                color: "#FCFCF8",
                fontFamily: '"Pretendard", sans-serif',
              }}
            >
              홈으로
            </button>

            {/* Error ID (dev only) */}
            {error.digest && (
              <p
                className="text-xs mt-8"
                style={{
                  color: "#6b6b5e",
                  fontFamily: '"Pretendard", sans-serif',
                }}
              >
                Error ID: {error.digest}
              </p>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
