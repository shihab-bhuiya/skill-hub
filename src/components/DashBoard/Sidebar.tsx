"use client";

import DashboardNav from "./DashboardNav";
import Link from "next/link";

export default function Sidebar() {
  // Replace this later with your Better Auth session
  const role: "admin" | "user" = "admin";

  return (
    <aside className="hidden w-64 border-r bg-white md:block">
      <div className="border-b p-6">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          SkillHub
        </Link>
      </div>

      <div className="p-4">
        <DashboardNav role={role} />
      </div>
    </aside>
  );
}