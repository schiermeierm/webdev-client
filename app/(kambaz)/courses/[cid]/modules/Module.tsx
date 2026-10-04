import type { ReactNode } from "react";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Module({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 list-none overflow-hidden border border-neutral-300">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 font-semibold">
        <span className="flex items-center gap-2">
          <BsGripVertical className="shrink-0 text-xl" />
          {title}
        </span>
        <ModuleControlButtons />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
