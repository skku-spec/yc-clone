"use client";

import Link from "next/link";
import { useState, useTransition } from "react";

import { forgotPassword } from "@/lib/actions/auth";

export default function ForgotPasswordForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError(null);
    setSuccess(false);

    startTransition(async () => {
      const result = await forgotPassword(formData);

      if (result?.error) {
        setError(result.error);
        return;
      }

      setSuccess(true);
    });
  };

  return (
    <form action={handleSubmit} className="space-y-5">
      {error ? <p className="rounded bg-[#fdecec] px-3 py-2 text-sm text-[#b42318]">{error}</p> : null}
      {success ? (
        <p className="rounded bg-[#fff4e9] px-3 py-2 text-sm text-[#b64a00]">Check your email for a password reset link</p>
      ) : null}

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-[#666]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-[#FF6C0F] focus:ring-0"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded bg-[#FF6C0F] px-6 py-3 font-semibold text-white transition-colors hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Sending..." : "Send reset link"}
      </button>

      <p className="text-center text-sm text-[#555]">
        <Link href="/login" className="text-[#FF6C0F] hover:underline">
          Back to Log in
        </Link>
      </p>
    </form>
  );
}
