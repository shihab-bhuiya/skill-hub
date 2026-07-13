import { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="text-center text-3xl font-bold">
        {title}
      </h1>

      <p className="mt-2 text-center text-gray-500">
        {subtitle}
      </p>

      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}