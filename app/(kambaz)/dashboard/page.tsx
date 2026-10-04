import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title" className="my-2 text-3xl font-semibold">
        Dashboard
      </h1>
      <hr className="mb-3 border-neutral-300" />
      <h2 id="wd-dashboard-published" className="my-2 text-2xl font-medium">
        Published Courses (5)
      </h2>
      <hr className="mb-6 border-neutral-300" />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="CS1234 React JS"
          subtitle="Full Stack software developer"
          image="/images/reactjs.jpg"
        />
        <CourseCard
          id="2345"
          title="CS2345 Node JS"
          subtitle="Server side JavaScript"
          image="/images/nodejs.jpg"
        />
        <CourseCard
          id="3456"
          title="CS3456 MongoDB"
          subtitle="NoSQL Databases"
          image="/images/mongodb.jpg"
        />
        {/* On your own: personalized card */}
        <CourseCard
          id="4550"
          title="CS4550 Web Development"
          subtitle="Building Kambaz with Next.js, React, Tailwind, Node, and MongoDB"
          image="/images/reactjs.jpg"
        />
        {/* With AI: fourth sample card */}
        <CourseCard
          id="CS9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample, not my course"
          image="/images/reactjs.jpg"
        />
      </div>
    </div>
  );
}
