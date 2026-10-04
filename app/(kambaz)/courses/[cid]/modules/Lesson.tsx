import type { ReactNode } from "react";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

export default function Lesson({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-lesson border-t border-l-[3px] border-neutral-300 border-l-green-600 p-3 ps-1">
      <div className="flex items-center justify-between">
        <span className="wd-title flex items-center gap-2 font-semibold">
          <BsGripVertical className="shrink-0 text-xl" />
          {title}
        </span>
        <LessonControlButtons />
      </div>
      <ul className="wd-content mt-2 mb-0 list-disc ps-12">{children}</ul>
    </li>
  );
}
