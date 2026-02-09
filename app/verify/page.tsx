"use client";

import { useState } from "react";
import Link from "next/link";

export default function VerifyPage() {
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <div className="overflow-hidden">
      <section className="px-4 pb-8 pt-10 text-center sm:pb-12 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-[800px]">
          <h1 className="inline-flex items-center justify-center gap-3 font-['Source_Serif_4',serif] text-3xl font-bold text-[#16140f] sm:text-4xl">
            <svg
              className="h-8 w-8 text-[#ff6600] sm:h-9 sm:w-9"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            YC Founder Verification
          </h1>
          <p className="mt-4 font-['Outfit',sans-serif] text-lg font-light text-[#16140f]/60">
            A secure way to verify Y Combinator founder status
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-[720px]">
          <div className="mb-12">
            <h2 className="mb-4 font-['Source_Serif_4',serif] text-2xl font-semibold text-[#16140f]">
              How it works
            </h2>
            <p className="mb-4 font-['Outfit',sans-serif] text-[15px] font-light leading-relaxed text-[#16140f]/80">
              YC founders can create verification links that prove their
              participation in Y Combinator. These links display:
            </p>
            <ul className="ml-8 list-disc space-y-2 font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
              <li>The founder&apos;s name and profile picture</li>
              <li>
                Which YC company they founded and which batch they participated
                in (optional)
              </li>
              <li>Contact information (optional)</li>
              <li>
                Any additional information the founder wishes to verify
              </li>
            </ul>
          </div>

          <div className="mb-12 rounded-xl border border-[#e8e8e0] bg-[#fafaf5] p-6">
            <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-semibold text-[#16140f]">
              For YC Founders
            </h3>
            <p className="mb-4 font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
              To create your verification link, visit Bookface:
            </p>
            <Link
              href="https://bookface.ycombinator.com/verify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#ff6600] px-5 py-2.5 font-['Outfit',sans-serif] text-sm font-medium text-white transition-colors hover:bg-[#e55c00]"
            >
              Create Verification Link
            </Link>
          </div>

          <div className="mb-12">
            <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-semibold text-[#16140f]">
              For Partners &amp; Service Providers
            </h3>
            <p className="mb-4 font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
              When you need to verify someone&apos;s YC founder status, ask
              them to share their verification link with you. The link will
              look like:
            </p>
            <div className="mb-4 flex items-center gap-3">
              <code className="block flex-1 overflow-x-auto rounded-lg bg-[#eae9e2] px-4 py-3 font-mono text-sm text-[#16140f]/80">
                https://www.ycombinator.com/verify/[unique-code]
              </code>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <input
                type="text"
                placeholder="Enter verification code or URL..."
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="flex-1 rounded-lg border border-[#e8e8e0] bg-white px-4 py-3 font-['Outfit',sans-serif] text-sm font-light text-[#16140f] placeholder:text-[#16140f]/40 focus:border-[#ff6600] focus:outline-none focus:ring-1 focus:ring-[#ff6600]"
              />
              <button
                className="shrink-0 rounded-lg bg-[#16140f] px-5 py-3 font-['Outfit',sans-serif] text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                Verify
              </button>
            </div>

            <p className="mb-4 font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
              Each verification link is unique and controlled by the founder.
              They can update what information is displayed or disable the link
              at any time.
            </p>

            <div className="mt-6 rounded-xl border border-[#e8e8e0] bg-[#fafaf5] p-6">
              <h4 className="mb-3 font-['Outfit',sans-serif] text-base font-semibold text-[#16140f]">
                Instructions to Send to Founders
              </h4>
              <p className="mb-4 font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/60">
                To request a founder provide a verification link, send them
                something like this:
              </p>
              <div className="rounded-lg bg-white p-5">
                <p className="mb-3 font-['Outfit',sans-serif] text-sm font-light leading-relaxed text-[#16140f]/80">
                  To verify your Y Combinator founder status, could you please
                  share your YC verification link?
                </p>
                <p className="mb-3 font-['Outfit',sans-serif] text-sm font-light leading-relaxed text-[#16140f]/80">
                  You can create one by visiting{" "}
                  <strong className="font-semibold">
                    https://bookface.ycombinator.com/verify
                  </strong>{" "}
                  and clicking &quot;Create Verification Link&quot;. This will
                  generate a unique link that proves your participation in Y
                  Combinator.
                </p>
                <p className="mb-3 font-['Outfit',sans-serif] text-sm font-light leading-relaxed text-[#16140f]/80">
                  The verification link is completely under your control &mdash;
                  you choose what information to display and can disable it at
                  any time.
                </p>
                <p className="font-['Outfit',sans-serif] text-sm font-light text-[#16140f]/80">
                  Thanks!
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-semibold text-[#16140f]">
              API Access
            </h3>
            <p className="mb-4 font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
              Append <code className="rounded bg-[#eae9e2] px-1.5 py-0.5 font-mono text-sm">.json</code> to
              any verification URL to get a machine-readable version:
            </p>
            <div className="mb-4">
              <code className="block overflow-x-auto rounded-lg bg-[#eae9e2] px-4 py-3 font-mono text-sm text-[#16140f]/80">
                https://www.ycombinator.com/verify/[unique-code].json
              </code>
            </div>

            <details className="mt-4">
              <summary className="cursor-pointer font-['Outfit',sans-serif] text-[15px] font-semibold text-[#16140f] hover:underline">
                View API Response Schema
              </summary>
              <pre className="mt-4 overflow-x-auto rounded-lg bg-[#eae9e2] p-5 font-mono text-xs leading-relaxed text-[#16140f]/80">
{`{
  verified: boolean;
  name: string;
  message: string;
  batches?: Array<{
    name: string;
    tag?: "current_batch" | "future_batch";
  }>;
  companies?: Array<{
    name: string;
    url?: string;
    batch?: string;
    title?: string;
    directory_url?: string;
    tags?: ("active_founder" | "inactive_founder" |
           "active_company" | "inactive_company" |
           "current_batch" | "future_batch")[];
  }>;
  email?: string;
  cell?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  note?: string;
  image_url?: string;
}`}
              </pre>
            </details>
          </div>

          <div className="rounded-xl border border-[#e8e8e0] bg-[#fafaf5] p-6">
            <h3 className="mb-3 font-['Outfit',sans-serif] text-lg font-semibold text-[#16140f]">
              Need Help?
            </h3>
            <p className="font-['Outfit',sans-serif] text-[15px] font-light text-[#16140f]/80">
              If you have questions about YC Founder Verification, please{" "}
              <Link
                href="/contact"
                className="font-medium text-[#ff6600] hover:underline"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
