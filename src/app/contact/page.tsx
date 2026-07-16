import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">

        <section className="text-center">
          <h1 className="text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Have questions, feedback, or suggestions? {"We'd"} love to hear
            from you. Feel free to get in touch.
          </p>
        </section>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="mb-6 text-2xl font-bold">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="rounded-xl bg-white p-8 shadow">
            <h2 className="mb-6 text-2xl font-bold">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">📧 Email</h3>

                <Link
                  href="mailto:shihab.bhuiya07@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  shihab.bhuiya07@gmail.com
                </Link>
              </div>

              <div>
                <h3 className="font-semibold">💼 LinkedIn</h3>

                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Visit LinkedIn Profile
                </Link>
              </div>

              <div>
                <h3 className="font-semibold">💻 GitHub</h3>

                <Link
                  href="https://github.com/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Visit GitHub Profile
                </Link>
              </div>

              <div>
                <h3 className="font-semibold">📍 Location</h3>

                <p className="text-gray-600">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="text-xl font-semibold">
                 {" Let's"} Build Something Amazing!
                </h3>

                <p className="mt-3 text-gray-600">
                 {" I'm"} always interested in collaborating on exciting web
                  development projects and exploring new opportunities.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}