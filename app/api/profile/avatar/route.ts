import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

const PROFILE_AVATARS_BUCKET = "profile-avatars";
const MAX_AVATAR_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_AVATAR_MIME_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

function resolveFileExtension(file: File) {
  const fileNameParts = file.name.split(".");
  const fromName = fileNameParts.length > 1 ? fileNameParts[fileNameParts.length - 1] : "";
  const normalizedFromName = fromName.trim().toLowerCase();

  if (normalizedFromName) {
    return normalizedFromName === "jpeg" ? "jpg" : normalizedFromName;
  }

  if (file.type === "image/jpeg") {
    return "jpg";
  }

  const fromMime = file.type.split("/")[1]?.trim().toLowerCase();
  return fromMime || "jpg";
}

async function ensureProfileAvatarBucket() {
  const adminClient = createAdminClient();
  const { data: bucket, error: getBucketError } = await adminClient.storage.getBucket(PROFILE_AVATARS_BUCKET);

  if (getBucketError && !getBucketError.message.toLowerCase().includes("not found")) {
    throw new Error(`Failed to load storage bucket: ${getBucketError.message}`);
  }

  if (!bucket) {
    const { error: createBucketError } = await adminClient.storage.createBucket(PROFILE_AVATARS_BUCKET, {
      public: true,
      fileSizeLimit: MAX_AVATAR_SIZE_BYTES,
      allowedMimeTypes: ALLOWED_AVATAR_MIME_TYPES,
    });

    if (createBucketError && !createBucketError.message.toLowerCase().includes("already exists")) {
      throw new Error(`Failed to create storage bucket: ${createBucketError.message}`);
    }

    return;
  }

  if (!bucket.public) {
    const { error: updateBucketError } = await adminClient.storage.updateBucket(PROFILE_AVATARS_BUCKET, {
      public: true,
      fileSizeLimit: MAX_AVATAR_SIZE_BYTES,
      allowedMimeTypes: ALLOWED_AVATAR_MIME_TYPES,
    });

    if (updateBucketError) {
      throw new Error(`Failed to update storage bucket: ${updateBucketError.message}`);
    }
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      return NextResponse.json(
        {
          success: false,
          error: `Authentication failed: ${authError.message}`,
        },
        { status: 401 },
      );
    }

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "로그인이 필요해요.",
        },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const avatar = formData.get("avatar");

    if (!(avatar instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          error: "업로드할 이미지 파일을 찾지 못했어요.",
        },
        { status: 400 },
      );
    }

    if (!ALLOWED_AVATAR_MIME_TYPES.includes(avatar.type)) {
      return NextResponse.json(
        {
          success: false,
          error: "JPG, PNG, WEBP, AVIF 파일만 업로드할 수 있어요.",
        },
        { status: 400 },
      );
    }

    if (avatar.size > MAX_AVATAR_SIZE_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "프로필 사진은 5MB 이하만 업로드할 수 있어요.",
        },
        { status: 400 },
      );
    }

    await ensureProfileAvatarBucket();

    const adminClient = createAdminClient();
    const extension = resolveFileExtension(avatar);
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const filePath = `${user.id}/${fileName}`;

    const { error: uploadError } = await adminClient.storage.from(PROFILE_AVATARS_BUCKET).upload(filePath, avatar, {
      cacheControl: "3600",
      upsert: false,
      contentType: avatar.type,
    });

    if (uploadError) {
      return NextResponse.json(
        {
          success: false,
          error: `프로필 사진 업로드에 실패했어요: ${uploadError.message}`,
        },
        { status: 500 },
      );
    }

    const { data: publicUrlData } = adminClient.storage.from(PROFILE_AVATARS_BUCKET).getPublicUrl(filePath);
    if (!publicUrlData.publicUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "업로드 후 이미지 URL 생성에 실패했어요.",
        },
        { status: 500 },
      );
    }

    const { error: updateProfileError } = await adminClient
      .from("profiles")
      .update({ photo: publicUrlData.publicUrl })
      .eq("id", user.id);

    if (updateProfileError) {
      return NextResponse.json(
        {
          success: false,
          error: `프로필 업데이트에 실패했어요: ${updateProfileError.message}`,
        },
        { status: 500 },
      );
    }

    revalidatePath("/profile");

    return NextResponse.json({
      success: true,
      photoUrl: publicUrlData.publicUrl,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "프로필 사진 저장 중 오류가 발생했어요.",
      },
      { status: 500 },
    );
  }
}
