"use client";

import { authClient } from "@/lib/auth-client";

export default function LogoutButton() {
  const handleSignOut = async () => {
    await authClient.signOut();
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