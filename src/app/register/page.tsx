"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import AuthCard from "@/components/ui/AuthCard";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function RegisterPage() {
       const [formData, setFormData] = useState({
        email: "",
        name:"",
        password: "",
    });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
    

       const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const { data, error } = await authClient.signUp.email({
    name: formData.name,
    email: formData.email,
    password: formData.password,
    callbackURL: "/",
  });

  if (data) {
    toast.success("Account created successfully");
    redirect("/")
  } else {
    toast.error(error?.message || "Something went wrong");
    console.log("Error",error);
  }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <AuthCard
        title="Create Account"
        subtitle="Join SkillHub and start learning today."
      >
        <form onSubmit={handleSubmit} className="space-y-5">
         <Input
      id="name"
     name="name"
     label="Full Name"
     placeholder="Enter your full name"
     value={formData.name}
     onChange={handleChange}
    />

      <Input
  id="email"
  name="email"
  type="email"
  label="Email"
  placeholder="Enter your email"
  value={formData.email}
  onChange={handleChange}
/>

       <Input
  id="password"
  name="password"
  type="password"
  label="Password"
  placeholder="Create a password"
  value={formData.password}
  onChange={handleChange}
/>

          <Button type="submit">
            Register
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}