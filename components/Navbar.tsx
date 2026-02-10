import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 isolate z-50 bg-transparent">
      <div className="bg-[#FF6C0F] text-[#FCFCF8] text-center py-[10px] px-[6px]">
        <Link
          href="/apply"
          className="inline-flex items-center gap-1.5 font-['Pretendard',sans-serif] text-sm font-normal tracking-wide hover:opacity-80 transition-opacity no-underline text-white"
        >
          2026 봄학기 신규 회원 모집 중
          <svg
            width="12"
            height="12"
            viewBox="0 0 20 20"
            fill="none"
            className="ml-0.5"
          >
            <path
              d="M8 6L12 10L8 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </Link>
      </div>

      <nav className="bg-transparent">
        <div className="relative hidden min-[1024px]:flex items-center justify-center w-full max-w-[1400px] mx-auto px-8 py-3.5">
          <div className="flex items-center gap-16">
            <div className="nav-item relative">
              <button className="nav-link text-white hover:text-white/80 flex items-center gap-1 font-['Pretendard',sans-serif] text-sm">
                소개
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="dropdown-menu hidden">
                <div className="dropdown-container bg-black/90 backdrop-blur-sm rounded-lg p-2 mt-2 border border-white/10">
                  <Link href="/about" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    SPEC 소개
                  </Link>
                  <Link href="/apply" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    지원하기
                  </Link>
                  <Link href="/people" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    멤버
                  </Link>
                  <Link href="/blog" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    블로그
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-item relative">
              <button className="nav-link text-white hover:text-white/80 flex items-center gap-1 font-['Pretendard',sans-serif] text-sm">
                프로젝트
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="dropdown-menu hidden">
                <div className="dropdown-container bg-black/90 backdrop-blur-sm rounded-lg p-2 mt-2 border border-white/10">
                  <Link href="/companies" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    프로젝트 목록
                  </Link>
                  <Link href="/founders" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    팀원 디렉토리
                  </Link>
                  <Link href="/launches" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    런칭 소식
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/library" className="nav-link text-white hover:text-white/80 font-['Pretendard',sans-serif] text-sm">
              라이브러리
            </Link>
          </div>

          <Link href="/" className="mx-10 shrink-0">
            <img src="/logo.png" alt="SPEC" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-16">
            <Link href="/partners" className="nav-link text-white hover:text-white/80 font-['Pretendard',sans-serif] text-sm">
              파트너
            </Link>

            <div className="nav-item relative">
              <button className="nav-link text-white hover:text-white/80 flex items-center gap-1 font-['Pretendard',sans-serif] text-sm">
                리소스
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="dropdown-menu hidden">
                <div className="dropdown-container bg-black/90 backdrop-blur-sm rounded-lg p-2 mt-2 border border-white/10">
                  <Link href="/startup-school" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    스타트업 스쿨
                  </Link>
                  <Link href="/subscribe" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    뉴스레터
                  </Link>
                  <Link href="/cofounder-matching" className="dropdown-item block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded text-sm font-['Pretendard',sans-serif]">
                    팀원 찾기
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/jobs" className="nav-link text-white hover:text-white/80 font-['Pretendard',sans-serif] text-sm">
              채용
            </Link>
          </div>

          <Link
            href="/apply"
            className="absolute right-8 flex h-10 items-center justify-center rounded-full bg-[#FF6C0F] px-5 pb-[2px] font-['MaruBuri',serif] text-sm font-normal italic tracking-normal text-[#FCFCF8] transition-all hover:brightness-90"
          >
            Apply
          </Link>
        </div>

        <div className="relative flex min-[1024px]:hidden items-center justify-center px-2 py-2">
          <Link href="/" className="inline-block h-[48px]">
            <img src="/logo.png" alt="SPEC" className="h-12 w-auto" />
          </Link>
          <button
            className="absolute right-2 inline-flex items-center justify-center rounded-md bg-white/10 p-2 text-white"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 8h16M4 16h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
