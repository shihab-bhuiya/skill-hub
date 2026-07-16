import { redirect } from "next/navigation";
import { getUserSession } from "@/lib/core/session";

type Course = {
  _id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  category: string;
  price: number;
};

async function getMyCourses(email: string): Promise<Course[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-courses/${email}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function MyCoursesPage() {
  const user = await getUserSession();

  if (!user) {
    redirect("/login");
  }

  const courses = await getMyCourses(user.email);

  return (
    <section className="p-6">
      <h1 className="mb-8 text-3xl font-bold">
        My Courses
      </h1>

      {courses.length === 0 ? (
        <div className="rounded-lg border p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No Courses Yet
          </h2>

          <p className="mt-2 text-gray-500">
            You {"haven't"} enrolled in any courses.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="overflow-hidden rounded-xl border bg-white shadow"
            >
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold">
                  {course.title}
                </h2>

                <p className="mt-2 text-gray-500">
                  {course.instructor}
                </p>

                <p className="mt-2">
                  {course.category}
                </p>

                <p className="mt-4 font-bold text-blue-600">
                  ${course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}