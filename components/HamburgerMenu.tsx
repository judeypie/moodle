"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// The HamburgerMenu provides a compact, mobile-friendly navigation solution.
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/";

  // Toggles the visibility of the dropdown menu.
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Closes the menu, useful for when a link is clicked.
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" data-testid="hamburger-menu">
      <button
        onClick={handleToggle}
        className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 rounded"
        aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-700"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            <Link
              href="/"
              onClick={closeMenu}
              className={`block px-4 py-2 text-sm ${
                pathname === "/"
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
              role="menuitem"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`block px-4 py-2 text-sm ${
                pathname === "/about"
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
              role="menuitem"
            >
              About
            </Link>
            <Link
              href="/escape-room"
              onClick={closeMenu}
              className={`block px-4 py-2 text-sm ${
                pathname === "/escape-room"
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
              role="menuitem"
            >
              Escape Room
            </Link>
            <Link
              href="/coding-races"
              onClick={closeMenu}
              className={`block px-4 py-2 text-sm ${
                pathname === "/coding-races"
                  ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-300"
              } hover:bg-gray-100 dark:hover:bg-gray-700`}
              role="menuitem"
            >
              Coding Races
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
