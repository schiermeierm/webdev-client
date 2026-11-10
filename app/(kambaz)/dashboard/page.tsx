"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { isEnrolled, useEnrollmentsStore } from "../store/enrollmentsStore";
import { emptyCourse, useCoursesStore, type Course } from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";

const field = "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const visibleCourses =
    currentUser && !showAllCourses
      ? courses.filter((c) => isEnrolled(enrollments, currentUser._id, c._id))
      : courses;

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title" className="my-2 text-3xl font-semibold">
          Dashboard
        </h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            onClick={() => setShowAllCourses(!showAllCourses)}
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Enrollments
          </button>
        )}
      </div>
      <hr className="mb-3 border-neutral-300" />
      <h5 className="flex flex-wrap items-center gap-2 text-lg font-medium">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium hover:bg-yellow-500"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      <input
        className={`mt-2 ${field}`}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={field}
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      {/* With AI: sample course-number field */}
      <input
        className={field}
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className={field}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr className="my-3 border-neutral-300" />
      <h2 id="wd-dashboard-published" className="my-2 text-2xl font-medium">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr className="mb-6 border-neutral-300" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard key={c._id} course={c} onEdit={() => setCourse(c)} />
        ))}
      </div>
    </div>
  );
}
