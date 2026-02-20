"use client";

import Link from "next/link";
import { useState, useTransition } from "react";

import { signUp } from "@/lib/actions/auth";

const INPUT_CLASSNAME =
  "w-full border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-[#ff6600] focus:ring-0";

export default function SignUpForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError(null);

    const firstName = String(formData.get("first_name") ?? "").trim();
    const lastName = String(formData.get("last_name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const username = String(formData.get("username") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();
    const linkedinUrl = String(formData.get("linkedin_url") ?? "").trim();

    if (!firstName || !lastName || !email || !username || !password || !linkedinUrl) {
      setError("Please fill out all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    let normalizedLinkedInUrl = linkedinUrl;
    if (!linkedinUrl.startsWith("http://") && !linkedinUrl.startsWith("https://")) {
      normalizedLinkedInUrl = "https://" + linkedinUrl;
    }

    try {
      const parsedLinkedInUrl = new URL(normalizedLinkedInUrl);
      if (!parsedLinkedInUrl.hostname.includes("linkedin.com")) {
        setError("Please enter a valid LinkedIn profile URL.");
        return;
      }
    } catch {
      setError("Please enter a valid LinkedIn profile URL.");
      return;
    }

    formData.set("linkedin_url", normalizedLinkedInUrl);

    startTransition(async () => {
      const result = await signUp(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-5">
      {error ? <p className="rounded bg-[#fdecec] px-3 py-2 text-sm text-[#b42318]">{error}</p> : null}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="first_name" className="block text-sm font-medium text-[#666]">
            First Name
          </label>
          <input id="first_name" name="first_name" type="text" required className={INPUT_CLASSNAME} autoComplete="given-name" />
        </div>

        <div className="space-y-1">
          <label htmlFor="last_name" className="block text-sm font-medium text-[#666]">
            Last Name
          </label>
          <input id="last_name" name="last_name" type="text" required className={INPUT_CLASSNAME} autoComplete="family-name" />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-[#666]">
          Email
        </label>
        <input id="email" name="email" type="email" required className={INPUT_CLASSNAME} autoComplete="email" />
      </div>

      <div className="space-y-1">
        <label htmlFor="username" className="block text-sm font-medium text-[#666]">
          Username
        </label>
        <input id="username" name="username" type="text" required className={INPUT_CLASSNAME} autoComplete="username" />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="block text-sm font-medium text-[#666]">
          Password
        </label>
        <input id="password" name="password" type="password" required className={INPUT_CLASSNAME} autoComplete="new-password" />
      </div>

      <div className="space-y-1">
        <label htmlFor="linkedin_url" className="block text-sm font-medium text-[#666]">
          Your LinkedIn Profile URL
        </label>
        <input
          id="linkedin_url"
          name="linkedin_url"
          type="url"
          required
          placeholder="https://www.linkedin.com/in/username/"
          className={INPUT_CLASSNAME}
          autoComplete="url"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded bg-[#ff6600] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#e55b00] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Signing up..." : "Sign Up"}
      </button>

      <p className="text-center text-sm text-[#555]">
        Already have an account?{" "}
        <Link href="/login" className="text-[#ff6600] hover:underline">
          Log in.
        </Link>
      </p>
    </form>
  );
}
