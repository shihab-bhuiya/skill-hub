import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-5 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          Welcome to SkillHub
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight">
          Learn New Skills.
          <br />
          Build Your Future.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Explore programming courses, improve your skills, and learn from experienced instructors with SkillHub.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Explore Courses
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 transition hover:bg-blue-50"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}