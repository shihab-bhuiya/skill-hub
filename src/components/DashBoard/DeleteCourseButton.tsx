"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteCourseButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/courses/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        toast.success("Course deleted successfully!");
        setOpen(false);
        router.refresh();
      } else {
        toast.error("Failed to delete course.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
      >
        Delete
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800">
              Delete Course
            </h2>

            <p className="mt-3 text-gray-600">
              Are you sure you want to delete this course? This action cannot be
              undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                disabled={loading}
                className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 disabled:cursor-not-allowed"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={loading}
                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-400"
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}