"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const allModules = useModulesStore((state) => state.modules);
  const modules = allModules.filter((module) => module.course === cid);
  return (
    <div id="wd-modules-screen">
      <ModulesControls />
      <ul id="wd-modules" className="m-0 p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module} />
        ))}
      </ul>
    </div>
  );
}
