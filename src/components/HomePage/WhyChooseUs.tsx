const features = [
  {
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals who bring real-world knowledge into every course.",
    icon: "👨‍🏫",
  },
  {
    title: "Project-Based Learning",
    description:
      "Build practical projects that strengthen your portfolio and prepare you for real jobs.",
    icon: "💻",
  },
  {
    title: "Flexible Learning",
    description:
      "Study anytime and anywhere with lifetime access to your enrolled courses.",
    icon: "📚",
  },
  {
    title: "Certificate of Completion",
    description:
      "Receive a certificate after successfully completing your course.",
    icon: "🏆",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Why Choose SkillHub?
          </h2>

          <p className="mt-4 text-gray-600">
            We provide everything you need to learn modern technology and
            advance your career.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}