import type { Metadata } from "next";
import { FileQuestion } from "lucide-react";
import NotFoundActions from "../components/shared/NotFoundActions";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you are looking for does not exist or may have been moved.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center rounded-4xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-[0_24px_80px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/30 sm:p-12 lg:flex-row lg:text-left xl:p-16">
        <div className="mb-8 shrink-0 lg:mb-0 lg:mr-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-600/20 text-cyan-600 ring-1 ring-cyan-500/20 dark:from-cyan-400/20 dark:to-blue-500/20 dark:text-cyan-300 sm:h-28 sm:w-28">
            <FileQuestion className="h-12 w-12 sm:h-14 sm:w-14" />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Error 404
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            404
          </h1>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            The page you are looking for does not exist or may have been moved.
          </p>

          <NotFoundActions />
        </div>
      </div>
    </div>
  );
}
