"use client";

import { useState } from "react";
import Link from "next/link";
// import OtpPopup from "../popup/popup";
import { Search } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [projectDropdown, setProjectDropdown] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-900 to-black text-white">

        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">


          <img
            src="/logo.webp"
            alt="keshvacradit"
            className="h-10 md:h-10 object-contain"
          />

          <div className="hidden md:flex gap-3 items-center">


            <Link
              href="/"
              className="hover:text-blue-400 duration-300 px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-white">
              Home
            </Link>


            <div className="relative">

              <span
                className=" cursor-pointer hover:text-blue-400 duration-300 px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-white"
                onClick={() => setProjectDropdown(!projectDropdown)}
              >
                Our Project ▾
              </span>

              {projectDropdown && (

                <div className="absolute left-0 mt-2 w-52 bg-white text-black rounded shadow-lg z-50">

                  <Link
                    href="/"
                    className=" hover:text-blue-400 duration-300 block px-4 py-2 hover:bg-gray-200"
                  >
                    Personal Loan
                  </Link>

                  <Link
                    href="/"
                    className=" hover:text-blue-400 duration-300 block px-4 py-2 hover:bg-gray-200"
                  >
                    Business Loan
                  </Link>

                  <Link
                    href="/"
                    className=" hover:text-blue-400 duration-300 block px-4 py-2 hover:bg-gray-200"
                  >
                    Home Loan
                  </Link>

                  <Link
                    href="/"
                    className="hover:text-blue-400 duration-300 block px-4 py-2 hover:bg-gray-200"
                  >
                    Gold Loan
                  </Link>

                </div>
              )}

            </div>

            <Link
              href="/About"
              className="hover:text-blue-400 duration-300  px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/Ouick links"
              className="hover:text-blue-400 duration-300  px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-white"
            >
              Ouick Links
            </Link>

            <Link
              href="/Contact"
              className="hover:text-blue-400 duration-300 px-4 py-2 rounded-2xl hover:bg-blue-400 hover:text-white"
            >
              Contact
            </Link>
          </div>



          <div className="flex items-center gap-4">
            <button className="bg-white p-2 rounded-full hover:bg-white/20 duration-300">
              <img
                src="user.png"
                alt="profile"
                className=" h-5 w-5 bg-white rounded-full object-contain"></img>
            </button>



            <button className="bg-white  text-black p-2 rounded-full hover:bg-white/20 duration-300">

              <Search size={22} />

            </button>



            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Sign In
            </button>



            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </div>



        {menuOpen && (

          <div className="md:hidden px-4 pb-4 space-y-3 flex flex-col">

            <Link href="/">Home</Link>

            <Link href="/personal-loan">
              Personal Loan
            </Link>

            <Link href="/business-loan">
              Business Loan
            </Link>

            <Link href="/home-loan">
              Home Loan
            </Link>

            <Link href="/gold-loan">
              Gold Loan
            </Link>

            <Link href="/emicalculator">
              Calculators
            </Link>

            <Link href="/helpCenter">
              Help Center
            </Link>

          </div>

        )}

      </nav >


      {/* {isOpen && (
        <OtpPopup onClose={() => setIsOpen(false)} />
      )
      } */}
    </>
  );
}