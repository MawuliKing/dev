import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Mawuli | John Emil Modzaka - Mobile & Backend Developer",
  description:
    "Portfolio of John Emil Modzaka, a passionate mobile app and backend developer specializing in Flutter, Node.js, LLMs, and cloud technologies. Explore projects, skills, and contact info.",
  keywords: [
    "John Emil Modzaka",
    "Dev Mawuli",
    "Mobile Developer",
    "Backend Developer",
    "Flutter",
    "Node.js",
    "LLMs",
    "Cloud Architecture",
    "Portfolio",
    "Ghana Developer",
    "Software Engineer",
  ],
  authors: [
    { name: "John Emil Modzaka", url: "https://github.com/MawuliKing" },
  ],
  creator: "John Emil Modzaka",
  openGraph: {
    title: "Dev Mawuli | John Emil Modzaka - Mobile & Backend Developer",
    description:
      "Portfolio of John Emil Modzaka, a passionate mobile app and backend developer specializing in Flutter, Node.js, LLMs, and cloud technologies. Explore projects, skills, and contact info.",
    url: "https://dev-mawuli.vercel.app/",
    siteName: "Dev Mawuli Portfolio",
    images: [
      {
        url: "https://dev-mawuli.vercel.app/globe.svg",
        width: 1200,
        height: 630,
        alt: "Dev Mawuli Portfolio - John Emil Modzaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Mawuli | John Emil Modzaka - Mobile & Backend Developer",
    description:
      "Portfolio of John Emil Modzaka, a passionate mobile app and backend developer specializing in Flutter, Node.js, LLMs, and cloud technologies. Explore projects, skills, and contact info.",
    creator: "@emil_mod",
    images: ["https://dev-mawuli.vercel.app/globe.svg"],
  },
  alternates: {
    canonical: "https://dev-mawuli.vercel.app/",
  },
};

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${inter.className}`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-900 pb-4">
          <Header />
        </div>
        {/* Welcome/Mission Statement */}
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Welcome to My Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am dedicated to building impactful digital solutions that empower
            businesses and individuals. Explore my work, skills, and journey
            below.
          </p>
        </section>
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </div>
      {/* Footer */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-700 py-4 mt-8 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} John Emil Modzaka. All rights
            reserved.
          </span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://github.com/MawuliKing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-100"
            >
              GitHub
            </a>
            <a
              href="https://x.com/emil_mod"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-100"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/john-emil-modzaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 dark:hover:text-gray-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
