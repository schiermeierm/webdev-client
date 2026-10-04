import type { ReactNode } from "react";
import Link from "next/link";
import { BsGripVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import LessonControlButtons from "../modules/LessonControlButtons";

function Details({ details }: { details: string }) {
  const parts = details.split(" | ");
  return (
    <div className="mt-1 text-sm text-neutral-600">
      {parts.map((part, i) => {
        let content: ReactNode = part;
        if (i === 0) {
          content = <span className="text-red-600">{part}</span>;
        } else if (part.startsWith("Not available until")) {
          content = (
            <>
              <span className="font-semibold">Not available until</span>
              {part.slice("Not available until".length)}
            </>
          );
        } else if (part.startsWith("Due")) {
          content = (
            <>
              <span className="font-semibold">Due</span>
              {part.slice("Due".length)}
            </>
          );
        }
        return (
          <span key={i}>
            {i > 0 && " | "}
            {content}
          </span>
        );
      })}
    </div>
  );
}

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  return (
    <li className="wd-assignment-list-item flex items-center gap-3 border-b border-l-[3px] border-neutral-300 border-l-green-600 p-3 ps-2">
      <BsGripVertical className="shrink-0 text-xl" />
      <FaRegEdit className="shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline hover:underline"
        >
          {title}
        </Link>
        <Details details={details} />
      </div>
      <LessonControlButtons />
    </li>
  );
}
