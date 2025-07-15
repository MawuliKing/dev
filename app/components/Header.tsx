"use client";

import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex flex-wrap justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          <Link
            href="/"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
          >
            JEM
          </Link>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 -mt-1">
          Empowering ideas through code
        </p>
      </div>
      <div className="flex items-center space-x-2">
        {/* Theme toggle */}
        <button
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 mr-2"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          className="lg:hidden text-gray-600 hover:text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav
        className={`w-full lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        } lg:block mt-4 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <li>
            <Link
              href="/#about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <a
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
