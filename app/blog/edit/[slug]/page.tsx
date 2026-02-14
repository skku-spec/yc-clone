import { notFound } from "next/navigation";

import PostEditorForm from "@/app/blog/PostEditorForm";
import { getBlogPostBySlug, getBlogTags } from "@/lib/api";

export const revalidate = 60;

export default async function BlogEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, tags] = await Promise.all([getBlogPostBySlug(slug), getBlogTags()]);

  if (!post) {
    notFound();
  }

  return <PostEditorForm mode="edit" post={post} initialTags={tags} />;
}
