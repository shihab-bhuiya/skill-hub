
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { publicNavLinks } from "@/constants/navigation";
import Link from "next/link";
import { getUserSession } from "@/lib/core/session";

import LogoutButton from "../ui/LogOutButton";

export default async function Navbar () {
  const user =await getUserSession()
  console.log("USer",user);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavLinks links={publicNavLinks} />
        </div>

        {/* Desktop Auth */}

      {
        user ? <div className="flex gap-2 items-center">
          <h1 className="font-bold">Hi, {user.name}</h1>
          <LogoutButton/>
          </div>:
  
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      }

        {/* Mobile */}
        <MobileMenu links={publicNavLinks} />
      </nav>
    </header>
  );
}