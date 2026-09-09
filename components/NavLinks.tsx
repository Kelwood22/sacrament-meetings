"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      <Link
        href="/"
        className={
          pathname === "/" ? "font-bold text-blue-600" : ""
        }
      >
        Home
      </Link>

      <Link
        href="/meetings"
        className={
          pathname === "/meetings" ? "font-bold text-blue-600" : ""
        }
      >
        Meetings
      </Link>
    </nav>
  );
}