import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Meeting Not Found
      </h1>

      <p className="mb-4">
        The requested meeting could not be found.
      </p>

      <Link
        href="/meetings"
        className="rounded bg-gray-600 px-4 py-2 text-white"
      >
        Back to Meetings
      </Link>
    </main>
  );
}