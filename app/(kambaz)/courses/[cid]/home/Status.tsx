import type { IconType } from "react-icons";
import { FaCheckCircle, FaChartBar, FaBullhorn, FaBell, FaChartLine, FaRegLightbulb } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid, LiaCrosshairsSolid } from "react-icons/lia";

const actions: { id: string; label: string; icon: IconType }[] = [
  { id: "wd-import-existing", label: "Import Existing Content", icon: BiImport },
  { id: "wd-import-commons", label: "Import from Commons", icon: LiaFileImportSolid },
  { id: "wd-choose-home", label: "Choose Home Page", icon: LiaCrosshairsSolid },
  { id: "wd-course-stream", label: "View Course Stream", icon: FaChartBar },
  { id: "wd-new-announcement", label: "New Announcement", icon: FaBullhorn },
  { id: "wd-new-analytics", label: "New Analytics", icon: FaChartLine },
  { id: "wd-course-notifications", label: "View Course Notifications", icon: FaBell },
  // With AI: sample action
  { id: "wd-ai-status", label: "Sample action", icon: FaRegLightbulb },
];

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-3 flex gap-1">
        <button
          type="button"
          id="wd-unpublish"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-neutral-200 px-2 py-1.5 text-sm hover:bg-neutral-300"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          id="wd-publish"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-green-600 bg-green-600 px-2 py-1.5 text-sm text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      {actions.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          id={id}
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-left text-sm hover:bg-neutral-200"
        >
          <Icon className="me-2 shrink-0 text-base" /> {label}
        </button>
      ))}
    </div>
  );
}
