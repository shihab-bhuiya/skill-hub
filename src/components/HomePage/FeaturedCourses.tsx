import Link from "next/link";

type Course = {
  _id: string;
  title: string;
  instructor: string;
  category: string;
  price: number;
  thumbnail: string;
};

async function getFeaturedCourses(): Promise<Course[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/courses?limit=4`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}
export default async function FeaturedCourses() {
  const courses = await getFeaturedCourses();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Featured Courses
        </h2>

        <p className="mt-3 text-gray-600">
          Discover our most popular courses taught by experienced instructors.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <span className="rounded bg-blue-100 px-3 py-1 text-xs text-blue-700">
                {course.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                {course.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {course.instructor}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-blue-600">
                  ${course.price}
                </span>

                <Link
                  href={`/courses/${course._id}`}
                  className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/courses"
          className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
}