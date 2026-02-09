import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Y Combinator",
  description: "Contact information for Y Combinator.",
};

const pClass =
  "mb-6 font-['Outfit',sans-serif] font-light text-[18px] leading-[1.7] text-[#16140f] last:mb-0";

const linkClass =
  "text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700";

const emailCategories = [
  { label: "General inquiries", email: "info@ycombinator.com" },
  { label: "Applying to YC", email: "apply@ycombinator.com" },
  { label: "Press", email: "press@ycombinator.com" },
  { label: "Security", email: "security@ycombinator.com" },
];

const socialLinks = [
  { label: "Blog", href: "/blog", internal: true },
  {
    label: "Twitter",
    href: "https://twitter.com/ycombinator",
    internal: false,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/YCombinator",
    internal: false,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCcefcZRL2oaA_uBNeo5UOWg",
    internal: false,
  },
];

export default function ContactPage() {
  return (
    <main className="flex-1 px-4 pb-4 pt-12 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-[640px]">
        <h1 className="mb-2 font-['Source_Serif_4',serif] text-[clamp(2.5rem,5vw,3.75rem)] font-medium italic leading-tight tracking-tight text-[#16140f] md:mb-4">
          Contact
        </h1>
      </div>

      <div className="mx-auto max-w-[640px]">
        <div className="mb-10">
          <p className={pClass}>
            Before contacting us, please check the{" "}
            <Link href="/faq" className={linkClass}>
              Frequently Asked Questions
            </Link>
            .
          </p>
          <p className={pClass}>
            Here are contact emails for different parts of YC:
          </p>

          <div className="mb-8 space-y-4">
            {emailCategories.map((item) => (
              <div key={item.email}>
                <p className="font-['Outfit',sans-serif] text-[15px] font-normal text-[#16140f]/60">
                  {item.label}
                </p>
                <a
                  href={`mailto:${item.email}`}
                  className="font-['Outfit',sans-serif] text-[18px] font-light text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <nav>
          <h3 className="mb-4 font-['Outfit',sans-serif] text-sm font-medium uppercase tracking-wider text-[#16140f]/60">
            Social Media
          </h3>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                {link.internal ? (
                  <Link
                    href={link.href}
                    className="font-['Outfit',sans-serif] text-[18px] font-light text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Outfit',sans-serif] text-[18px] font-light text-[#16140f] underline decoration-gray-500 underline-offset-2 transition-all hover:decoration-gray-700"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
