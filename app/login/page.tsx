import { LoginForm } from "@/components/login-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bishopric Login",
  description:
    "Sign in to manage sacrament meetings.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-900">
            Bishopric Login
          </h1>

          <p className="mt-2 text-gray-600">
            Sign in to manage sacrament meetings,
            speakers, hymns, and assignments.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}