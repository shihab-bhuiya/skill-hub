"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  PlusCircle,
  AdIcon,
} from "lucide-react";



type DashboardNavProps = {
  role: "admin" | "user";
};

export default function DashboardNav({
  role,
}: DashboardNavProps) {
  const pathname = usePathname();

  const adminLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Users",
      href: "/dashboard/manage-users",
      icon: Users,
    },
    {
      name: "Manage Courses",
      href: "/dashboard/manage-courses",
      icon: BookOpen,
    },
    {
      name:"Add-Course",
      href:"/dashboard/add-courses",
      icon:AdIcon,
    }
  ];

  const userLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Course",
      href: "/dashboard/my-course",
      icon: PlusCircle,
    },
  ];

const links = role === "admin" ? adminLinks : userLinks;
console.log("Role is ",role)
return (
  <ul className="space-y-2">
    {links.map((link) => {
      const Icon = link.icon;
      const isActive = pathname === link.href;

      return (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon size={20} />
            {link.name}
          </Link>
        </li>
      );
    })}
  </ul>
)}