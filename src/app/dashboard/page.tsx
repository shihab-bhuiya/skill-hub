import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getUserSession();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome, {user.name} 👋
      </h1>

      {/* <p className="mt-2 text-gray-600">
        You are logged in as <strong>{user.role}</strong>.
      </p> */}
    </div>
  );
}