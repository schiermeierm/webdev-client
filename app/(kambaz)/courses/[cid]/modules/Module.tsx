import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import Lesson from "./Lesson";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-5 list-none overflow-hidden border border-neutral-300">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 font-semibold">
        <span className="flex flex-1 items-center gap-2">
          <BsGripVertical className="shrink-0 text-xl" />
          {module.editing ? (
            <input
              className="w-1/2 rounded border border-neutral-300 bg-white px-2 py-1 text-base font-normal"
              defaultValue={module.name}
              onChange={(e) => updateModule({ ...module, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateModule({ ...module, editing: false });
                }
              }}
              autoFocus
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name}>
            <li className="wd-content-item">{lesson.description}</li>
          </Lesson>
        ))}
      </ul>
    </li>
  );
}
