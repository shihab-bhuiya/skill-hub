"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type DeleteUserButtonProps = {
  id: string;
};

export default function DeleteUserButton({
  id,
}: DeleteUserButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        toast.success("User deleted successfully!");
        setOpen(false);
        router.refresh();
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
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
          <div className="w-96 rounded-lg bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-gray-800">
              Delete User
            </h2>

            <p className="mt-3 text-gray-600">
              Are you sure you want to delete this user?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}