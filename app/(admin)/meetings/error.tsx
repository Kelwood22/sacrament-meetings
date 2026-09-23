"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Something went wrong
      </h1>

      <p className="mb-4">
        {error.message}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded bg-gray-600 px-4 py-2 text-white"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}