"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavItem } from "@/types/navigation";

type MobileMenuProps = {
  links: NavItem[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md p-2 hover:bg-gray-100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-16 w-full border-b bg-white shadow-md">
          <ul className="flex flex-col p-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md p-3 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/login"
                className="rounded-lg border px-4 py-2 text-center"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}