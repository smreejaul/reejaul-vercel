"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900">
              Syed Reejaul Hussain
            </div>
            <div className="text-xs text-gray-600">Principal UX Engineer</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About
          </Link>
          <Link
            href="/experiences"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Projects
          </Link>
          {/* <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Blog
          </Link> */}
          <Link
            href="/contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 flex flex-col px-6 py-4 gap-3 md:hidden shadow-lg">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              About
            </Link>
            <Link
              href="/experiences"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 transition font-medium py-2"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
