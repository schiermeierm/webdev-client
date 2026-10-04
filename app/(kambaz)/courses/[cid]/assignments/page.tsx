import "@/app/labs/lab2/tailwind/utilities.css";
import { FaPlus, FaSearch, FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="relative w-full max-w-xs">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="w-full rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm hover:bg-neutral-200"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <div className="border border-neutral-300">
        <h3
          id="wd-assignments-title"
          className="m-0 flex items-center justify-between bg-neutral-200 p-3 text-base font-semibold"
        >
          <span className="flex items-center gap-2">
            <BsGripVertical className="text-xl" />
            <FaCaretDown />
            ASSIGNMENTS
          </span>
          <span className="flex items-center gap-2">
            <span className="rounded-full border border-neutral-400 px-3 py-0.5 text-xs font-normal">
              40% of Total
            </span>
            <button
              type="button"
              className="rounded border border-neutral-300 bg-white px-2 py-1 text-xs"
              aria-label="Add assignment to group"
            >
              <FaPlus />
            </button>
            <IoEllipsisVertical className="text-lg" />
          </span>
        </h3>
        <ul id="wd-assignment-list" className="m-0 list-none p-0">
          <AssignmentItem
            cid={cid}
            aid="123"
            title="A1 - ENV + HTML"
            details="Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts"
          />
          <AssignmentItem
            cid={cid}
            aid="124"
            title="A2 - CSS + TAILWIND"
            details="Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts"
          />
          <AssignmentItem
            cid={cid}
            aid="125"
            title="A3 - JAVASCRIPT + REACT"
            details="Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts"
          />
          {/* On your own */}
          <AssignmentItem
            cid={cid}
            aid="126"
            title="A4 - STATE + REDUX"
            details="Multiple Modules | Not available until May 27 at 12:00am | Due Jun 3 at 11:59pm | 100 pts"
          />
          {/* With AI */}
          <AssignmentItem
            cid={cid}
            aid="ai-a"
            title="A9 - Sample assignment"
            details="Multiple Modules | Not available until Jun 3 at 12:00am | Due Jun 10 at 11:59pm | 100 pts"
          />
        </ul>
      </div>
    </div>
  );
}
