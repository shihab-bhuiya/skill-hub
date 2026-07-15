import Link from "next/link";

type Course = {
  _id: string;
  title: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  thumbnail: string;
  description: string;
};

async function getCourses(): Promise<Course[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/courses`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Explore Courses
        </h1>

        <p className="text-gray-600 mt-2">
          Learn from industry experts and grow your skills.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg transition"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                {course.category}
              </span>

              <h2 className="mt-4 text-xl font-semibold">
                {course.title}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Instructor: {course.instructor}
              </p>

              <p className="mt-2 text-sm">
                Level: {course.level}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                  ${course.price}
                </span>

                <Link
                  href={`/courses/${course._id}`}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}