"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import AuthCard from "@/components/ui/AuthCard";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
       const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
        const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Login Successfully");
            redirect("/");
        } else {
            toast.error(error?.message || "Something went wrong");
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
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Create a password"
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