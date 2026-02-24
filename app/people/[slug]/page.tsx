import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { managingLeads, preneurs, getPersonBySlug, getAllPersonSlugs } from "@/lib/people-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPersonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getPersonBySlug(slug);
  if (!person) {
    return { title: "멤버를 찾을 수 없습니다 | SPEC" };
  }
  return {
    title: `${person.name} | SPEC — 성균관대 창업학회`,
    description: person.bio.slice(0, 160),
  };
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    notFound();
  }

  const bioParagraphs = person.bio
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .reduce<string[][]>(
      (acc, sentence, i) => {
        const paragraphIndex = Math.floor(i / 2);
        if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
        acc[paragraphIndex].push(sentence);
        return acc;
      },
      []
    )
    .map((sentences) => sentences.join(" "));

  const otherPartners = [...managingLeads, ...preneurs]
    .filter((p) => p.slug !== slug && p.slug !== "")
    .slice(0, 4);

  return (
    <div className="px-4 pb-24 pt-12 md:pt-16">
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/people"
          className="mb-8 inline-flex items-center gap-1.5 font-['Pretendard',sans-serif] text-[0.875rem] font-medium text-[#FF6C0F] transition-colors hover:text-[#e55c00]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M6 12l4-4-4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          전체 멤버
        </Link>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <figure className="h-[200px] w-[200px] shrink-0 overflow-hidden rounded-2xl bg-[#e8e8df] md:h-[260px] md:w-[260px]">
            <img
              src={person.photo}
              alt={person.name}
              width={260}
              height={260}
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="flex-1">
            <h1
              className="mb-1 text-[clamp(2rem,4vw,3rem)] font-bold uppercase leading-tight tracking-tight text-[#16140f]"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {person.name}
            </h1>
            <p className="mb-1 font-['Pretendard',sans-serif] text-[1.125rem] font-normal text-[#FF6C0F]">
              {person.title}
            </p>
            {person.company && (
              <p className="mb-4 font-['Pretendard',sans-serif] text-[0.9375rem] font-normal text-[#16140f]/50">
                {person.company}
              </p>
            )}

            <div className="flex gap-3">
              {person.twitter && (
                <a
                  href={`https://twitter.com/${person.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#16140f]/5 text-[#16140f]/60 transition-colors hover:bg-[#16140f]/10 hover:text-[#16140f]"
                  aria-label={`${person.name} on Twitter`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {person.linkedin && (
                <a
                  href={`https://linkedin.com/in/${person.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#16140f]/5 text-[#16140f]/60 transition-colors hover:bg-[#16140f]/10 hover:text-[#16140f]"
                  aria-label={`${person.name} on LinkedIn`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {person.website && (
                <a
                  href={person.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#16140f]/5 text-[#16140f]/60 transition-colors hover:bg-[#16140f]/10 hover:text-[#16140f]"
                  aria-label={`${person.name}'s website`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <article className="mt-10 border-t border-[#16140f]/10 pt-8">
          {bioParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="mb-5 font-['MaruBuri',serif] text-[17px] font-normal leading-[1.75] text-[#16140f] last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </article>

        <section className="mt-16 border-t border-[#16140f]/10 pt-10">
          <h2 className="mb-6 font-['Pretendard',sans-serif] text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#16140f]/50">
            Other Members
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {otherPartners.map((p) => (
              <Link
                key={p.slug}
                href={`/people/${p.slug}`}
                className="group block rounded-lg p-3 transition-colors hover:bg-[#eceadf]"
              >
                <figure className="mb-2 aspect-square w-full overflow-hidden rounded-lg bg-[#e8e8df]">
                  <img
                    src={p.photo}
                    alt={p.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div className="font-['MaruBuri',serif] text-[0.875rem] font-semibold leading-tight text-[#16140f]">
                  {p.name}
                </div>
                <div className="font-['Pretendard',sans-serif] text-[0.75rem] font-normal text-[#16140f]/50">
                  {p.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
