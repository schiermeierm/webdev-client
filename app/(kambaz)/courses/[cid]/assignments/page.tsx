"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch, FaCaretDown } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import AssignmentItem from "./AssignmentItem";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const router = useRouter();
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const assignments = allAssignments.filter((assignment) => assignment.course === courseId);
  const { currentUser } = useAccountContext();
  const canEdit = currentUser?.role !== "STUDENT";
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const pendingDelete = assignments.find((a) => a._id === pendingDeleteId);
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
          {canEdit && (
          <button
            id="wd-add-assignment"
            type="button"
            onClick={() => router.push(`/courses/${courseId}/assignments/new`)}
            className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
          >
            <FaPlus /> Assignment
          </button>
          )}
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
          {assignments.map((assignment) => (
            <AssignmentItem
              key={assignment._id}
              aid={assignment._id}
              cid={courseId}
              title={assignment.title}
              onDelete={canEdit ? () => setPendingDeleteId(assignment._id) : undefined}
              details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            />
          ))}
        </ul>
      </div>
      {pendingDelete && (
        <DeleteAssignmentDialog
          title={pendingDelete.title}
          onCancel={() => setPendingDeleteId(null)}
          onConfirm={() => {
            deleteAssignment(pendingDelete._id);
            setPendingDeleteId(null);
          }}
        />
      )}
    </div>
  );
}
