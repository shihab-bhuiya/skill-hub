import Link from "next/link";

const categories = [
  {
    name: "Frontend",
    icon: "💻",
    description: "React, Next.js, TypeScript",
  },
  {
    name: "Backend",
    icon: "⚙️",
    description: "Node.js, Express, MongoDB",
  },
  {
    name: "UI/UX Design",
    icon: "🎨",
    description: "Figma & Design Systems",
  },
  {
    name: "Mobile Development",
    icon: "📱",
    description: "React Native & Flutter",
  },
  {
    name: "Artificial Intelligence",
    icon: "🤖",
    description: "AI & Machine Learning",
  },
  {
    name: "Cyber Security",
    icon: "🔒",
    description: "Network & Web Security",
  },
];

export default function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Browse Categories
          </h2>

          <p className="mt-3 text-gray-600">
            Explore courses from different technology fields.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/courses?category=${category.name}`}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-5 text-2xl font-semibold">
                {category.name}
              </h3>

              <p className="mt-3 text-gray-500">
                {category.description}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}