import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  TAGS,
  getPostBySlug,
  getRelatedPosts,
} from "../blogData";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found | Y Combinator" };
    return {
      title: `${post.title} | Y Combinator`,
      description: post.excerpt,
    };
  });
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug, 3);
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <section className="min-h-screen pb-20">
      <div className="mx-auto max-w-[720px] px-6 pt-10">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 font-['Outfit',sans-serif] text-[14px] text-[#6b6b5e] transition-colors hover:text-[#FF6C0F]"
        >
          <ArrowLeftIcon />
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="mb-4 font-['Source_Serif_4',serif] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-tight text-[#16140f]">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6C0F] font-['Outfit',sans-serif] text-[14px] font-semibold text-white">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-['Outfit',sans-serif] text-[14px] font-medium text-[#16140f]">
                  {post.author}
                </p>
                <p className="font-['Outfit',sans-serif] text-[13px] text-[#6b6b5e]">
                  {post.date}
                </p>
              </div>
            </div>
          </header>

          {post.imageUrl && (
            <div className="mb-10 overflow-hidden rounded-lg">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          )}

          <div className="mb-10 space-y-5">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`font-['Outfit',sans-serif] text-[17px] font-light leading-[1.8] text-[#16140f] ${i === 0 ? "drop-cap" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mb-10 border-t border-[#ddd9cc] pt-6">
            <p className="mb-3 font-['Outfit',sans-serif] text-[13px] font-semibold uppercase tracking-wider text-[#6b6b5e]">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="rounded-full bg-[#e8e6dc] px-3.5 py-1 font-['Outfit',sans-serif] text-[13px] font-medium text-[#4a4a40] transition-colors hover:bg-[#FF6C0F] hover:text-white"
                >
                  {TAGS.find((t) => t.slug === tag)?.label ?? tag}
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>

      {related.length > 0 && (
        <div className="border-t border-[#ddd9cc]">
          <div className="mx-auto max-w-[720px] px-6 pt-10">
            <h3 className="mb-6 font-['Source_Serif_4',serif] text-[22px] font-semibold text-[#16140f]">
              Related Posts
            </h3>
            <div className="space-y-0 divide-y divide-[#ddd9cc]">
              {related.map((relatedPost) => (
                <article key={relatedPost.slug} className="py-6 first:pt-0">
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="mb-1 block font-['Source_Serif_4',serif] text-[18px] font-semibold leading-snug text-[#16140f] transition-colors hover:text-[#FF6C0F]"
                  >
                    {relatedPost.title}
                  </Link>
                  <p className="mb-2 font-['Outfit',sans-serif] text-[13px] text-[#6b6b5e]">
                    by{" "}
                    <span className="text-[#16140f]">
                      {relatedPost.author}
                    </span>{" "}
                    &middot; {relatedPost.date}
                  </p>
                  <p className="mb-3 font-['Outfit',sans-serif] text-[14px] font-light leading-relaxed text-[#4a4a40] line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center gap-1.5 font-['Outfit',sans-serif] text-[13px] font-medium text-[#FF6C0F] transition-opacity hover:opacity-70"
                  >
                    Read More <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
