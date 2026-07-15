"use client";

import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

type ImgBBResponse = {
  success: boolean;
  data: {
    display_url: string;
  };
};

export default function AddCoursePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

const [formData, setFormData] = useState({
  title: "",
  instructor: "",
  category: "",
  level: "",
  duration: "",
  price: "",
  thumbnail: "",
  description: "",
});
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const imageInput = form.elements.namedItem(
      "image"
    ) as HTMLInputElement;

    const image = imageInput.files?.[0];

    if (!image) {
      toast.error("Please select an image.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      // Upload Image to ImgBB
      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imgData: ImgBBResponse = await imgRes.json();

      if (!imgData.success) {
        toast.error("Image upload failed.");
        setLoading(false);
        return;
      }

      const course = {
        title: (
          form.elements.namedItem("title") as HTMLInputElement
        ).value,
        instructor: (
          form.elements.namedItem(
            "instructor"
          ) as HTMLInputElement
        ).value,
        category: (
          form.elements.namedItem(
            "category"
          ) as HTMLInputElement
        ).value,
        level: (
          form.elements.namedItem("level") as HTMLInputElement
        ).value,
        duration: (
          form.elements.namedItem(
            "duration"
          ) as HTMLInputElement
        ).value,
        price: Number(
          (
            form.elements.namedItem(
              "price"
            ) as HTMLInputElement
          ).value
        ),
        thumbnail: imgData.data.display_url,
        description: (
          form.elements.namedItem(
            "description"
          ) as HTMLTextAreaElement
        ).value,
      };

      console.log(course);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/courses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
      price: Number(formData.price),
    }),
  });

  if (res.ok) {
    toast.success("Course Added Successfully");

    setFormData({
      title: "",
      instructor: "",
      category: "",
      level: "",
      duration: "",
      price: "",
      thumbnail: "",
      description: "",
    });

    router.push("/dashboard/manage-courses");
  } else {
    toast.error("Something went wrong");
  }
};
      toast.success("Course added successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-3xl font-bold">
        Add Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
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
          className="rounded bg-blue-600 px-6 py-3 text-white disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Add Course"}
        </button>
      </form>
    </div>
  );
}