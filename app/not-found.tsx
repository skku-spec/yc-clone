import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: "#f5f5ee" }}>
      <div className="w-full max-w-md text-center">
        {/* 404 Header */}
        <h1
          className="text-6xl font-bold mb-4"
          style={{
            color: "#FF6C0F",
            fontFamily: "system-ui",
          }}
        >
          404
        </h1>

        {/* Error Message */}
        <h2
          className="text-2xl font-semibold mb-6"
          style={{
            color: "#16140f",
            fontFamily: "system-ui",
          }}
        >
          페이지를 찾을 수 없습니다
        </h2>

        <p
          className="text-base mb-8"
          style={{
            color: "#6b6b5e",
            fontFamily: '"Pretendard", sans-serif',
            lineHeight: "1.6",
          }}
        >
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>

        {/* Home Link */}
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-md font-medium transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: "#FF6C0F",
            color: "#FCFCF8",
            fontFamily: '"Pretendard", sans-serif',
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
