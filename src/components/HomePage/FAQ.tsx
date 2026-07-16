const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "Open the course details page and click the Enroll Now button.",
  },
  {
    question: "Do I get lifetime access?",
    answer:
      "Yes. Once enrolled, you can access your courses anytime.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes. A certificate is available after completing eligible courses.",
  },
  {
    question: "Can I learn on mobile?",
    answer:
      "Yes. SkillHub works on desktop, tablet, and mobile devices.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-xl border p-5"
            >
              <summary className="cursor-pointer text-lg font-semibold">
                {faq.question}
              </summary>

              <p className="mt-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}