"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { signIn } from "@/lib/actions/auth";

type LoginFormProps = {
  registered: boolean;
  redirect?: string;
};

export default function LoginForm({ registered, redirect }: LoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    setError(null);

    startTransition(async () => {
      const result = await signIn(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.refresh();
        router.push(redirect && redirect.startsWith("/") ? redirect : "/");
      }
    });
  };

  return (
    <form action={handleSubmit} className="space-y-5">
      {registered ? (
        <p className="rounded bg-[#fff4e9] px-3 py-2 text-sm text-[#b64a00]">Account created! Please log in.</p>
      ) : null}

      {error ? <p className="rounded bg-[#fdecec] px-3 py-2 text-sm text-[#b42318]">{error}</p> : null}

      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-[#666]">
          Username or email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          required
          autoComplete="username"
          className="w-full border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-[#ff6600] focus:ring-0"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="password" className="block text-sm font-medium text-[#666]">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full border-0 border-b border-[#ccc] rounded-none bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-[#ff6600] focus:ring-0"
        />
      </div>

      <p className="text-sm text-[#555]">
        Forgot your{" "}
        <Link href="/forgot-password" className="text-[#ff6600] hover:underline">
          username
        </Link>{" "}
        or{" "}
        <Link href="/forgot-password" className="text-[#ff6600] hover:underline">
          password?
        </Link>
      </p>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded bg-[#ff6600] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#e55b00] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Logging in..." : "Log In"}
      </button>

      <p className="text-center text-sm text-[#555]">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-[#ff6600] hover:underline">
          Create an account.
        </Link>
      </p>
    </form>
  );
}
