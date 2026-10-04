/* eslint-disable @next/next/no-img-element */
function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-24 w-24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.05" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function CourseCard({
  id,
  extra = "",
  textExtra = "",
  title,
  blurb,
}: {
  id?: string;
  extra?: string;
  textExtra?: string;
  title: string;
  blurb: string;
}) {
  return (
    <div
      id={id}
      className={`mx-auto mb-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl ${extra}`}
    >
      <div className="md:flex">
        <div className="relative md:w-48 md:shrink-0">
          <img
            className="h-56 w-full object-cover md:h-full md:min-h-56"
            src="/images/reactjs.jpg"
            alt="React JS"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-sky-300">
            <ReactLogo />
            <div className="mt-2 text-2xl font-semibold">React JS</div>
          </div>
        </div>
        <div className={`min-w-0 p-8 ${textExtra}`}>
          <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
            Professional Courses
          </div>
          <a
            href="#"
            className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{blurb}</p>
        </div>
      </div>
    </div>
  );
}

export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      {/* On your own: personal copy plus md:bg-sky-50 so the card color changes at md */}
      <CourseCard
        extra="md:bg-sky-50"
        title="Full Stack Web Development with Next.js"
        blurb="Building and styling a Canvas-style learning platform with React, Next.js, CSS, and Tailwind."
      />
      {/* With AI: lg:p-12 gives the text column more padding on wide screens */}
      <CourseCard
        id="wd-ai-responsive"
        textExtra="lg:p-12"
        title="Rocket Propulsion Fundamentals"
        blurb="An in-depth study of the fundamentals of rocket propulsion, covering thrust, specific impulse, and nozzle design."
      />
    </div>
  );
}
