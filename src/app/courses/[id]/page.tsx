import EnrollButton from "@/components/course/EnrollButton";
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

async function getCourse(id: string): Promise<Course> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Course not found");
  }

  return res.json();
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = await getCourse(id);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <Link
        href="/courses"
        className="text-blue-600 hover:underline"
      >
        ← Back to Courses
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full rounded-xl"
        />

        <div>
          <span className="rounded bg-blue-100 px-3 py-1 text-sm text-blue-700">
            {course.category}
          </span>

          <h1 className="mt-4 text-4xl font-bold">
            {course.title}
          </h1>

          <p className="mt-6 text-gray-600">
            {course.description}
          </p>

          <div className="mt-8 space-y-3">
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>

            <p>
              <strong>Level:</strong> {course.level}
            </p>

            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <p>
              <strong>Price:</strong> ${course.price}
            </p>
          </div>

          <EnrollButton courseId={course._id}/>
        </div>
      </div>
    </section>
  );
}