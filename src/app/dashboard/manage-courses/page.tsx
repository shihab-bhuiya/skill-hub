import DeleteCourseButton from "@/components/DashBoard/DeleteCourseButton";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";


type Course = {
  _id: string;
  title: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  price: number;
};

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/courses`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export default async function ManageCoursesPage() {
  const courses = await getCourses();
 
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Manage Courses
        </h1>

        <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md">
          Total Courses: {courses.length}
        </p>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">Title</th>
            <th className="border p-3">Instructor</th>
            <th className="border p-3">Category</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course._id}>
              <td className="border p-3">{course.title}</td>
              <td className="border p-3">{course.instructor}</td>
              <td className="border p-3">{course.category}</td>
              <td className="border p-3">${course.price}</td>

              <td className="border p-3">
                <div className="flex gap-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                  <Link href={`/courses/${course._id}`}>
                    View
                  </Link>
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    <DeleteCourseButton id={course._id}/>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}