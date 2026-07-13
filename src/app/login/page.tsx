"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Link from "next/link";


export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-gray-500">
          Login to your SkillHub account
        </p>

        <form className="space-y-5">
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
            placeholder="Enter your password"
          />

          <Button type="submit">
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
         {" Don't"} have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600"
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}