const statistics = [
  {
    number: "12K+",
    title: "Active Students",
    description: "Students learning on SkillHub.",
  },
  {
    number: "250+",
    title: "Premium Courses",
    description: "Industry-focused online courses.",
  },
  {
    number: "50+",
    title: "Expert Instructors",
    description: "Professionals with real experience.",
  },
  {
    number: "4.9★",
    title: "Average Rating",
    description: "Rated by thousands of happy learners.",
  },
];

export default function Statistics() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            SkillHub by the Numbers
          </h2>

          <p className="mt-4 text-blue-100">
            Thousands of learners trust SkillHub to grow their careers.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm"
            >
              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-3 text-blue-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}