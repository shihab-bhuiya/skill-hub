const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Frontend Developer",
    review:
      "SkillHub helped me master React and land my first developer job. The courses are practical and easy to follow.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Shihab Bhuiya",
    role: "Software Engineer",
    review:
      "The instructors explain complex topics clearly. Building projects boosted my confidence.",
    image: "https://ibb.co.com/dsq50dcm",
  },
  {
    name: "Ayesha Khan",
    role: "UI/UX Designer",
    review:
      "I loved the structured learning path and supportive community. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">What Our Students Say</h2>
          <p className="mt-3 text-gray-600">
            Hear from learners who have grown their careers with SkillHub.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-full object-cover"
              />

              <h3 className="mt-5 text-xl font-semibold">{item.name}</h3>

              <p className="text-blue-600">{item.role}</p>

              <p className="mt-4 text-yellow-500">★★★★★</p>

              <p className="mt-4 text-gray-600">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}