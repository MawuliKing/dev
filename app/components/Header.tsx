"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800">John Emil</h1>
      <button
        className="lg:hidden text-gray-600 hover:text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav
        className={`w-full lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        } lg:block mt-4 lg:mt-0`}
      >
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
          <li>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-800"
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
