"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/actions";
import Email from "next-auth/providers/email";

export function LoginForm() {
  const [errorMessage, formAction, isPending] =
    useActionState(authenticate, undefined);

  return (
    <form
      action={formAction}
      className="space-y-5 rounded-lg border bg-white p-6 shadow-md"
    >
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="bishopric@ward.com"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          minLength={6}
          required
          placeholder="••••••••"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-blue-700 px-4 py-2 font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Signing In..." : "Sign In"}
      </button>

      {errorMessage && (
        <p className="rounded bg-red-100 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
    </form>
  );
}