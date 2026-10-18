"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FaInbox } from "react-icons/fa";
import "@/app/labs/lab2/tailwind/utilities.css";

type NavLink = {
  id: string;
  label: string;
  href: string;
  icon: IconType;
  isActive: (path: string) => boolean;
};

const links: NavLink[] = [
  {
    id: "wd-account-link",
    label: "Account",
    href: "/account",
    icon: FaRegCircleUser,
    isActive: (p) => p.startsWith("/account"),
  },
  {
    id: "wd-dashboard-link",
    label: "Dashboard",
    href: "/dashboard",
    icon: AiOutlineDashboard,
    isActive: (p) => p.startsWith("/dashboard"),
  },
  {
    id: "wd-course-link",
    label: "Courses",
    href: "/dashboard",
    icon: LiaBookSolid,
    isActive: (p) => p.startsWith("/courses"),
  },
  {
    id: "wd-calendar-link",
    label: "Calendar",
    href: "/calendar",
    icon: IoCalendarOutline,
    isActive: (p) => p.startsWith("/calendar"),
  },
  {
    id: "wd-inbox-link",
    label: "Inbox",
    href: "/inbox",
    icon: FaInbox,
    isActive: (p) => p.startsWith("/inbox"),
  },
  {
    id: "wd-labs-link",
    label: "Labs",
    href: "/labs",
    icon: LiaCogSolid,
    isActive: (p) => p.startsWith("/labs"),
  },
  // With AI: one more sample tile with the same idle classes
  {
    id: "wd-ai-nav-help",
    label: "Help",
    href: "/labs",
    icon: FaCircleQuestion,
    isActive: () => false,
  },
  // With AI: History sample item
  {
    id: "wd-history-link",
    label: "History",
    href: "/history",
    icon: IoCalendarOutline,
    isActive: (p) => p.startsWith("/history"),
  },
];

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed top-0 bottom-0 left-0 z-20 hidden w-[120px] overflow-y-auto bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/NEU.png" alt="Northeastern" className="mx-auto w-[75px]" />
      </a>
      {links.map(({ id, label, href, icon: Icon, isActive }) => {
        const active = isActive(pathname);
        const isAccount = id === "wd-account-link";
        const iconColor = isAccount && !active ? "text-white" : "text-red-600";
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={`block w-full py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className={`mx-auto mb-1 block text-3xl ${iconColor}`} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
