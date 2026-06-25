"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import OtpPopup from "../popup/popup";
import { Search, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectDropdown, setProjectDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      const phone = localStorage.getItem("phone");

      if (phone) {
        setIsloggedIn(true);
      } else {
        setIsloggedIn(false);
      }
    };

    syncAuth();

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("authChange", syncAuth);

    return () => {
      window.removeEventListener("authChange", syncAuth);
    };
  }, []);

const handleLogout = () => {
  localStorage.removeItem("phone");

  localStorage.removeItem("personalLoanSubmitted");
  localStorage.removeItem("businessLoanSubmitted");
  localStorage.removeItem("homeLoanSubmitted");
  localStorage.removeItem("goldLoanSubmitted");

  setIsloggedIn(false);

  window.dispatchEvent(new Event("authChange"));
};
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          
          <img
            src="/keshvacredit"
            alt="logo"
            className="h-10 object-contain"
          />

          <div className="hidden md:flex gap-3 items-center relative">
            <Link href="/" className="hover:text-blue-400 px-4 py-2">
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => setProjectDropdown(!projectDropdown)}
                className="cursor-pointer px-4 py-2 hover:text-blue-400"
              >
                Our Products ▾
              </button>

              {projectDropdown && (
                <div className="absolute top-12 left-0 bg-white text-black rounded-lg shadow-lg w-52 overflow-hidden z-50">
                  <Link
                    href="/personal-loan"
                    onClick={() => setProjectDropdown(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Personal-Loan
                  </Link>

                  <Link
                    href="/business-loan"
                    onClick={() => setProjectDropdown(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Business-Loan
                  </Link>

                  <Link
                    href="/home-loan"
                    onClick={() => setProjectDropdown(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Home-Loan
                  </Link>

                  <Link
                    href="/gold-loan"
                    onClick={() => setProjectDropdown(false)}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Gold-Loan
                  </Link>
                </div>
              )}
            </div>

            <Link href="/About" className="px-4 py-2 hover:text-blue-400">
              About
            </Link>

            <Link href="/Contact" className="px-4 py-2 hover:text-blue-400">
              Contact
            </Link>

            <Link href="/quickLinks" className="px-4 py-2 hover:text-blue-400">
              Quick link
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <User size={20} />
            </Link>

            <button className="p-2 rounded-full hover:bg-white/10 transition">
              <Search size={20} />
            </button>

            {isloggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Sign In
              </button>
            )}

            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden p-4 space-y-2 bg-black text-white">
          <Link href="/" className="block">
            Home
          </Link>

          <div className="space-y-2 pl-2">
            <p className="text-gray-300 font-semibold">Our Project</p>

            <Link href="/personal-loan" className="block">
              Personal Loan
            </Link>

            <Link href="/business-loan" className="block">
              Business Loan
            </Link>

            <Link href="/home-loan" className="block">
              Home Loan
            </Link>

            <Link href="/gold-loan" className="block">
              Gold Loan
            </Link>
          </div>

          <Link href="/About" className="block">
            About
          </Link>

          <Link href="/Contact" className="block">
            Contact
          </Link>
        </div>
      )}

      {isOpen && <OtpPopup onClose={() => setIsOpen(false)} />}
    </>
  );
}