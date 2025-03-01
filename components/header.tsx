"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md overflow-visible">
      <nav className="container mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-700 hover:text-indigo-600 transition-colors duration-300"
        >
          Ashutosh Choudhari
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {["About", "Skills", "Projects", "Experience", "Education", "Tableau", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative px-3 py-2 text-gray-800 hover:text-indigo-600 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-0 bg-indigo-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {["About", "Skills", "Projects", "Experience", "Education", "Tableau", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
