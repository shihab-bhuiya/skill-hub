"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFoundActions() {
  const router = useRouter();

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        Go Home
      </Link>
      <button
        type="button"
        onClick={() => router.back()}
        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800"
      >
        Go Back
      </button>
    </div>
  );
}
