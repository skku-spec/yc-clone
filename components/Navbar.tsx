import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 isolate z-50 bg-[#f5f5ee]">
      <div className="bg-[#ff6600] text-white text-center py-2.5 px-4">
        <Link
          href="/apply"
          className="inline-flex items-center gap-1.5 font-['Outfit',sans-serif] text-sm font-light tracking-wide hover:opacity-80 transition-opacity no-underline text-white"
        >
          Apply for Spring 2026 by February 9
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

      <nav className="bg-[#f5f5ee]">
        <div className="relative hidden min-[1024px]:flex items-center w-full max-w-[1400px] mx-auto gap-10 px-8 py-3.5">
          <div className="flex flex-1 items-center justify-end gap-12">
            <div className="nav-item relative">
              <button className="nav-link flex items-center gap-1">
                About
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
                <div className="dropdown-container">
                  <Link href="/what-happens-at-yc" className="dropdown-item">
                    What Happens at YC?
                  </Link>
                  <Link href="/apply" className="dropdown-item">
                    Apply
                  </Link>
                  <Link href="/yc-interview-guide" className="dropdown-item">
                    YC Interview Guide
                  </Link>
                  <Link href="/faq" className="dropdown-item">
                    FAQ
                  </Link>
                  <Link href="/people" className="dropdown-item">
                    People
                  </Link>
                  <Link href="/blog" className="dropdown-item">
                    YC Blog
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-item relative">
              <button className="nav-link flex items-center gap-1">
                Companies
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
                <div className="dropdown-container">
                  <Link href="/companies" className="dropdown-item">
                    Startup Directory
                  </Link>
                  <Link href="/founders" className="dropdown-item">
                    Founder Directory
                  </Link>
                  <Link href="/launch" className="dropdown-item">
                    Launch YC
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/library" className="nav-link">
              Library
            </Link>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.9985 47.9994H0V8.61853e-07H47.9985V47.9994Z"
                fill="#FF6600"
              />
              <path
                d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z"
                fill="white"
              />
            </svg>
          </Link>

          <div className="flex flex-1 items-center justify-start gap-12">
            <Link href="/partners" className="nav-link">
              Partners
            </Link>

            <div className="nav-item relative">
              <button className="nav-link flex items-center gap-1">
                Resources
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
                <div className="dropdown-container">
                  <Link href="/startup-school" className="dropdown-item">
                    Startup School
                  </Link>
                  <Link href="/newsletter" className="dropdown-item">
                    Newsletter
                  </Link>
                  <Link href="/rfs" className="dropdown-item">
                    Requests for Startups
                  </Link>
                  <Link href="/investors" className="dropdown-item">
                    For Investors
                  </Link>
                  <Link href="/verify" className="dropdown-item">
                    Verify Founders
                  </Link>
                  <Link href="https://news.ycombinator.com" className="dropdown-item">
                    Hacker News
                  </Link>
                  <Link href="/bookface" className="dropdown-item">
                    Bookface
                  </Link>
                  <Link href="/safe" className="dropdown-item">
                    Safe
                  </Link>
                  <Link href="/cofounder-matching" className="dropdown-item">
                    Find a Co-Founder
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/jobs" className="nav-link">
              Startup Jobs
            </Link>
          </div>

          <Link
            href="/apply"
            className="absolute right-8 flex h-10 items-center justify-center rounded-full bg-[#ff6600] px-5 pb-[2px] font-['Source_Serif_4',serif] text-sm font-normal italic tracking-[0.015rem] text-white transition-opacity hover:opacity-80"
          >
            Apply
          </Link>
        </div>

        <div className="relative flex min-[1024px]:hidden items-center justify-center px-2 py-2">
          <Link href="/" className="inline-block h-[48px] w-[48px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.9985 47.9994H0V8.61853e-07H47.9985V47.9994Z"
                fill="#FF6600"
              />
              <path
                d="M13.9012 11.7843H17.6595L22.4961 21.5325C23.203 22.9836 23.7984 24.3976 23.7984 24.3976C23.7984 24.3976 24.4313 23.021 25.175 21.5325L30.0868 11.7843H33.5843L25.2865 27.3746V37.309H22.1244V27.1884L13.9012 11.7843Z"
                fill="white"
              />
            </svg>
          </Link>
          <button
            className="absolute right-2 inline-flex items-center justify-center rounded-md bg-white p-2 text-[#16140f]"
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
