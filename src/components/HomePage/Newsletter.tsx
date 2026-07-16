export default function Newsletter() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>

        <p className="mt-4 text-blue-100">
          Get updates about new courses, discounts, and learning resources.
        </p>

        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border bg-white px-5 py-3 text-black outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-black px-6 py-3 font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}