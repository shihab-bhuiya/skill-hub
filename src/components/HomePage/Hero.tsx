import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row">

        {/* Left Side */}
        <div className="max-w-xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 Learn Anytime, Anywhere
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Learn New Skills.
            <br />
            Build Your Future.
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            SkillHub helps you learn from expert instructors through
            practical, project-based courses. Start your learning journey
            today and achieve your career goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Courses
            </Link>

            <Link
              href="/register"
              className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Get Started
            </Link>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">250+</h3>
              <p className="text-gray-500">Courses</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">12K+</h3>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500">Instructors</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="Students learning together"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}