"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Demo Admin Credentials
  const fillAdminCredentials = () => {
    setFormData({
      email: "admin@gmail.com", // Replace with your admin email
      password: "admin123", // Replace with your admin password
    });
  };

  // Demo User Credentials
  const fillUserCredentials = () => {
    setFormData({
      email: "user@gmail.com", // Replace with your user email
      password: "users123", // Replace with your user password
    });
  };

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Login successfully");
    } else {
      toast.error(error?.message || "Something went wrong");
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Login to your SkillHub account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Demo Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={fillAdminCredentials}
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Admin Demo
            </button>

            <button
              type="button"
              onClick={fillUserCredentials}
              className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700"
            >
              User Demo
            </button>
          </div>

          <Button type="submit">Login</Button>

          <div className="rounded-lg border p-2 text-center">
            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full font-medium"
            >
              Continue With Google
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {"Don't"} have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}