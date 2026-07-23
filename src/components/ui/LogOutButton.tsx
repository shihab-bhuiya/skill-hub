"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();

    router.replace("/login"); // or "/"
    router.refresh();
  };

  return (
    <button
      onClick={handleSignOut}
      className="rounded-lg bg-red-500 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
}