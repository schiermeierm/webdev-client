import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="my-2 text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="mb-3 border-neutral-300" />
      <h2 id="wd-dashboard-published" className="my-2 text-2xl font-medium">
        Published Courses ({courses.length})
      </h2>
      <hr className="mb-6 border-neutral-300" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}
