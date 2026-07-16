"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


type EnrollButtonProps = {
  courseId: string;
};

export default function EnrollButton({
  courseId,
}: EnrollButtonProps) {
  const router = useRouter();

  const handleEnroll = async () => {
    // Get current session
    const session = await authClient.getSession();

    if (!session.data?.user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    const user = session.data.user;

    const enrollment = {
      courseId,
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/enrollments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollment),
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Enrollment successful!");
      router.push("/dashboard/my-courses");
    } else {
      toast.error(data.message || "Enrollment failed");
    }
  };

  return (
    <button
      onClick={handleEnroll}
      className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
    >
      Enroll Now
    </button>
  );
}