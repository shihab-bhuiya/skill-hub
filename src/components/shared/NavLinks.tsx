"use client";

import { NavItem } from "@/types/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { NavItem } from "@/types/navigation";

type NavLinksProps = {
  links: NavItem[];
};

export default function NavLinks({links}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`transition-colors ${
              pathname === link.href
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}