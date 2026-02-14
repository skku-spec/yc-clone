import { createClient } from "@/lib/supabase/client";

const BLOG_IMAGE_BUCKET = "blog-images";
const JOB_LOGOS_BUCKET = "job-logos";

export function getStorageUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  const supabase = createClient();
  const { data } = supabase.storage.from(BLOG_IMAGE_BUCKET).getPublicUrl(normalizedPath);

  if (!data.publicUrl) {
    throw new Error(`Unable to construct public URL for storage path: ${path}`);
  }

  return data.publicUrl;
}

export async function uploadBlogImage(file: File): Promise<string> {
  const supabase = createClient();
  const extension = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const safeExtension = extension ? extension.toLowerCase() : "bin";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${safeExtension}`;
  const filePath = `images/${fileName}`;

  const { error: uploadError } = await supabase.storage.from(BLOG_IMAGE_BUCKET).upload(filePath, file, {
    upsert: false,
  });

  if (uploadError) {
    throw new Error(`Failed to upload blog image: ${uploadError.message}`);
  }

  const { data } = supabase.storage.from(BLOG_IMAGE_BUCKET).getPublicUrl(filePath);

  if (!data.publicUrl) {
    throw new Error("Image uploaded successfully, but failed to generate public URL.");
  }

  return data.publicUrl;
}

export async function uploadJobLogo(file: File): Promise<string> {
  const supabase = createClient();
  const extension = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const safeExtension = extension ? extension.toLowerCase() : "bin";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${safeExtension}`;
  const filePath = `logos/${fileName}`;

  const { error: uploadError } = await supabase.storage.from(JOB_LOGOS_BUCKET).upload(filePath, file, {
    upsert: false,
  });

  if (uploadError) {
    throw new Error(`Failed to upload job logo: ${uploadError.message}`);
  }

  const { data } = supabase.storage.from(JOB_LOGOS_BUCKET).getPublicUrl(filePath);

  if (!data.publicUrl) {
    throw new Error("Logo uploaded successfully, but failed to generate public URL.");
  }

  return data.publicUrl;
}
