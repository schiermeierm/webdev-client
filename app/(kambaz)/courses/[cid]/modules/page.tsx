"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import { useParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Module from "./Module";
import Lesson from "./Lesson";
import GreenCheckmark from "./GreenCheckmark";
import * as db from "../../../database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((module) => module.course === cid);
  return (
    <div id="wd-modules-screen">
      <div id="wd-modules-controls" className="mb-4 flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          id="wd-collapse-all"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm hover:bg-neutral-200"
        >
          Collapse All
        </button>
        <button
          type="button"
          id="wd-view-progress"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm hover:bg-neutral-200"
        >
          View Progress
        </button>
        <span className="inline-flex items-center rounded border border-neutral-300 bg-neutral-100 ps-2 text-sm">
          <GreenCheckmark />
          <select
            id="wd-publish-all"
            defaultValue="publish-all"
            className="border-0 bg-transparent px-2 py-1.5 text-sm"
          >
            <option value="publish-all">Publish All</option>
            <option value="publish-all-modules-and-items">Publish all modules and items</option>
            <option value="publish-modules-only">Publish modules only</option>
            <option value="unpublish-all">Unpublish all modules and items</option>
          </select>
        </span>
        <button
          type="button"
          id="wd-add-module-btn"
          className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
        >
          <FaPlus /> Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 p-0">
        {modules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                <li className="wd-content-item">{lesson.description}</li>
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
