"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const links = [
    { id: "wd-course-home-link", label: "Home", path: "home" },
    { id: "wd-course-modules-link", label: "Modules", path: "modules" },
    { id: "wd-course-piazza-link", label: "Piazza", path: "piazza" },
    { id: "wd-course-zoom-link", label: "Zoom", path: "zoom" },
    { id: "wd-course-assignments-link", label: "Assignments", path: "assignments" },
    { id: "wd-course-quizzes-link", label: "Quizzes", path: "quizzes" },
    { id: "wd-course-grades-link", label: "Grades", path: "grades" },
    { id: "wd-course-people-link", label: "People", path: "people/table" },
    // With AI
    { id: "wd-course-announcements-link", label: "Announcements", path: "announcements" },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none">
      {links.map(({ id, label, path }) => {
        const href = `/courses/${cid}/${path}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
