import Link from "next/link";
import DashboardNav from "./DashboardNav";
import { getUserSession } from "@/lib/core/session";

export default async function Sidebar() {
  const user = await getUserSession();

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
        <DashboardNav role={user?.role as "admin" | "user"} />
      </div>
    </aside>
  );
}