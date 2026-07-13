"use client";

import Button from "../ui/Button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

type LoggedInMenuProps = {
  session: {
    user: {
      name: string;
      role: "admin" | "user";
    };
  };
};

export default function LoggedInMenu({
  session,
}: LoggedInMenuProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="hidden text-right md:block">
        <p className="font-medium">
          {session.user.name}
        </p>

        <p className="text-sm text-gray-500">
          {session.user.role}
        </p>
      </div>

      <Button href="/dashboard">
        Dashboard
      </Button>

      <Button
        variant="outline"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}