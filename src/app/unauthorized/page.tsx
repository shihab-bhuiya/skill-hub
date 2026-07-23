import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import UnauthorizedActions from "../../components/shared/UnauthorizedActions";

export const metadata: Metadata = {
  title: "Access Denied",
  description: "You do not have permission to access this page.",
};

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center rounded-4xl border border-slate-200/70 bg-white/80 p-8 text-center shadow-[0_24px_80px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/30 sm:p-12 lg:flex-row lg:text-left xl:p-16">
        <div className="mb-8 shrink-0 lg:mb-0 lg:mr-10">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-amber-500/20 to-orange-500/20 text-amber-600 ring-1 ring-amber-500/20 dark:from-amber-400/20 dark:to-orange-400/20 dark:text-amber-300 sm:h-28 sm:w-28">
            <ShieldAlert className="h-12 w-12 sm:h-14 sm:w-14" />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            Unauthorized
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Access Denied
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
            You do not have permission to access this page.
          </p>

          <UnauthorizedActions />
        </div>
      </div>
    </div>
  );
}
