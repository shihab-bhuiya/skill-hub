import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            About SkillHub
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            SkillHub is a modern online learning platform designed to help
            students learn practical technology skills through high-quality,
            project-based courses. Our mission is to make learning simple,
            engaging, and accessible for everyone.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              🎯 Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              We aim to empower students with industry-ready skills through
              structured courses, hands-on projects, and expert guidance.
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">
              🚀 Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              To become a trusted online learning platform where anyone can
              start their technology journey and build a successful career.
            </p>
          </div>
        </section>

        {/* Developer */}
        <section className="mt-20 rounded-2xl bg-white p-10 shadow">
          <h2 className="text-3xl font-bold">
            Meet the Developer
          </h2>

          <p className="mt-6 text-gray-600">
            Hi! {"I'm "}<strong>Shihab Bey</strong>, a passionate Full Stack
            Developer who enjoys building modern web applications using
            React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.
          </p>

          <p className="mt-4 text-gray-600">
            SkillHub was built as a full-stack learning marketplace to
            demonstrate authentication, role-based access, REST APIs,
            MongoDB integration, and responsive UI development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:shihab.bhuiya07@gmail.com"
              className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
            >
              Email Me
            </Link>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="rounded-lg border border-blue-600 px-5 py-3 text-blue-600 hover:bg-blue-50"
            >
              LinkedIn
            </Link>

            <Link
              href="https://github.com/"
              target="_blank"
              className="rounded-lg border border-gray-700 px-5 py-3 hover:bg-gray-100"
            >
              GitHub
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}