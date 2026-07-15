"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type ImgBBResponse = {
  success: boolean;
  data: {
    display_url: string;
  };
};

export default function AddCoursePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    try {
      // =============================
      // Get Image
      // =============================
      const imageInput = form.elements.namedItem(
        "image"
      ) as HTMLInputElement;

      const image = imageInput.files?.[0];

      if (!image) {
        toast.error("Please select an image");
        setLoading(false);
        return;
      }

      // =============================
      // Upload Image to ImgBB
      // =============================
      const imageFormData = new FormData();
      imageFormData.append("image", image);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
        {
          method: "POST",
          body: imageFormData,
        }
      );

      const imgData: ImgBBResponse = await imgRes.json();

      if (!imgData.success) {
        toast.error("Image upload failed");
        setLoading(false);
        return;
      }

      // =============================
      // Create Course Object
      // =============================
      const course = {
        title: (
          form.elements.namedItem("title") as HTMLInputElement
        ).value,
        instructor: (
          form.elements.namedItem("instructor") as HTMLInputElement
        ).value,
        category: (
          form.elements.namedItem("category") as HTMLInputElement
        ).value,
        level: (
          form.elements.namedItem("level") as HTMLInputElement
        ).value,
        duration: (
          form.elements.namedItem("duration") as HTMLInputElement
        ).value,
        price: Number(
          (
            form.elements.namedItem("price") as HTMLInputElement
          ).value
        ),
        thumbnail: imgData.data.display_url,
        description: (
          form.elements.namedItem(
            "description"
          ) as HTMLTextAreaElement
        ).value,
      };

      console.log("Course:", course);

      // =============================
      // Save Course to Backend
      // =============================
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/courses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add course");
      }

      toast.success("Course Added Successfully!");

      form.reset();

      router.push("/dashboard/manage-courses");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Add Course
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          name="title"
          type="text"
          placeholder="Course Title"
          className="w-full rounded border p-3"
          required
        />

        <input
          name="instructor"
          type="text"
          placeholder="Instructor"
          className="w-full rounded border p-3"
          required
        />

        <input
          name="category"
          type="text"
          placeholder="Category"
          className="w-full rounded border p-3"
          required
        />

        <input
          name="level"
          type="text"
          placeholder="Level"
          className="w-full rounded border p-3"
          required
        />

        <input
          name="duration"
          type="text"
          placeholder="Duration"
          className="w-full rounded border p-3"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className="w-full rounded border p-3"
          required
        />

        <input
          name="image"
          type="file"
          accept="image/*"
          className="w-full rounded border p-3"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="h-40 w-full rounded border p-3"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Add Course"}
        </button>
      </form>
    </div>
  );
}