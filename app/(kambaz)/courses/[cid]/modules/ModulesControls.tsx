import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls() {
  return (
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
      <ModuleEditor />
    </div>
  );
}
