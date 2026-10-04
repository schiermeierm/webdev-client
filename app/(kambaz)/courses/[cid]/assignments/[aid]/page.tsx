import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

const input = "w-full font-sans rounded border border-neutral-300 px-3 py-2 text-sm";
const label = "text-sm md:pt-2 md:text-right";
const row = "mb-5 grid grid-cols-1 items-start gap-2 md:grid-cols-12 md:gap-4";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${input} mb-5`} />

      <textarea
        id="wd-description"
        rows={8}
        className={`${input} mb-6`}
        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel. The landing page should include: your full name and section, links to each of the lab assignments, a link to the Kambaz application, and links to all relevant source code repositories."
      />

      <div className={row}>
        <label htmlFor="wd-points" className={`${label} md:col-span-3`}>
          Points
        </label>
        <div className="md:col-span-9">
          <input id="wd-points" type="number" defaultValue={100} className={input} />
        </div>
      </div>

      <div className={row}>
        <label htmlFor="wd-group" className={`${label} md:col-span-3`}>
          Assignment Group
        </label>
        <div className="md:col-span-9">
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={`${input} bg-white`}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>

      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={`${label} md:col-span-3`}>
          Display Grade as
        </label>
        <div className="md:col-span-9">
          <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={`${input} bg-white`}>
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
            <option value="LETTER">Letter Grade</option>
            <option value="COMPLETE">Complete/Incomplete</option>
          </select>
        </div>
      </div>

      <div className={row}>
        <label htmlFor="wd-submission-type" className={`${label} md:col-span-3`}>
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-4 md:col-span-9">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${input} mb-4 bg-white`}>
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          {[
            { id: "wd-text-entry", text: "Text Entry", checked: false },
            { id: "wd-website-url", text: "Website URL", checked: true },
            { id: "wd-media-recordings", text: "Media Recordings", checked: false },
            { id: "wd-student-annotation", text: "Student Annotation", checked: false },
            { id: "wd-file-upload", text: "File Uploads", checked: false },
          ].map(({ id, text, checked }) => (
            <div key={id} className="mb-2 flex items-center gap-2 text-sm">
              <input type="checkbox" id={id} defaultChecked={checked} className="h-4 w-4" />
              <label htmlFor={id}>{text}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={row}>
        <span className={`${label} md:col-span-3`}>Assign</span>
        <div className="rounded border border-neutral-300 p-4 md:col-span-9">
          <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${input} mb-4`} />

          <label htmlFor="wd-due-date" className="mb-1 block text-sm font-semibold">
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" className={`${input} mb-4`} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-semibold">
                Available from
              </label>
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" className={input} />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-semibold">
                Until
              </label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" className={input} />
            </div>
          </div>
        </div>
      </div>

      {/* With AI: sample field */}
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
        Sample notes
      </label>
      <textarea id="wd-ai-editor-notes" rows={3} className={`${input} mb-5`} />

      <hr className="mb-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-900 no-underline hover:bg-neutral-200"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-1.5 text-sm text-white no-underline hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
