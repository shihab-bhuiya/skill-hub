import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">SkillHub</h2>

          <p className="mt-4 text-gray-400">
            Learn modern technology through project-based online courses.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>

          <div className="space-y-3">
            <Link href="/" className="block hover:text-blue-400">
              Home
            </Link>

            <Link href="/courses" className="block hover:text-blue-400">
              Courses
            </Link>

            <Link href="/about" className="block hover:text-blue-400">
              About
            </Link>

            <Link href="/contact" className="block hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Support</h3>

          <div className="space-y-3">
            <Link href="/privacy" className="block hover:text-blue-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="block hover:text-blue-400">
              Terms & Conditions
            </Link>

            <Link href="/faq" className="block hover:text-blue-400">
              FAQ
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>

          <p className="text-gray-400">
            support@skillhub.com
          </p>

          <p className="mt-2 text-gray-400">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} SkillHub. All rights reserved.
      </div>
    </footer>
  );
}