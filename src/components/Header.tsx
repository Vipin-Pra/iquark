"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Sample Class", path: "/sample-class" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent-500">
              <FaPhone size={12} />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@iquark.co.in" className="flex items-center gap-2 hover:text-accent-500">
              <FaEnvelope size={12} />
              <span>info@iquark.co.in</span>
            </a>
          </div>
          <div className="hidden md:block">
            <span>Ignite Your Competitive Edge</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            iQuark
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors font-medium"
              >
                Enroll Now
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="block text-gray-700 hover:text-primary-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
