"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useAccountContext } from "./AccountContext";

const allLinks = {
  signin: { id: "wd-account-signin-link", label: "Signin", href: "/account/signin" },
  signup: { id: "wd-account-signup-link", label: "Signup", href: "/account/signup" },
  profile: { id: "wd-account-profile-link", label: "Profile", href: "/account/profile" },
};

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? [allLinks.profile]
    : [allLinks.signin, allLinks.signup];
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none">
      {links.map(({ id, label, href }) => (
        <Link
          key={id}
          id={id}
          href={href}
          className={
            pathname === href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
