import { Header } from "../components/Header";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-900 pb-4">
          <Header />
        </div>
        <section className="mb-12 max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Contact
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm always open to new opportunities and collaborations.{" "}
            <strong>Let's build something great together!</strong> Whether you
            have a project in mind, want to discuss tech, or just want to
            connect, feel free to reach out.
          </p>
          <div className="flex space-x-4 mb-4">
            <a
              href="mailto:mawuli098@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              Email
            </a>
            <a
              href="https://github.com/MawuliKing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              GitHub
            </a>
            <a
              href="https://x.com/emil_mod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/john-emil-modzaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
            >
              Resume
            </a>
          </div>
          <div className="mb-2">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              <strong>Typical response time:</strong> Within 24 hours
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
