"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold">KC</h1>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/personal-loan">Personal loan</Link>
          <div className="relative group">

            <span className="cursor-pointer">Features ▾</span>

            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 z-50">

              <Link href="/send-analyzer" className="block px-4 py-2 hover:bg-gray-200">
                Send Analyser
              </Link>

              <Link href="/bill-payment" className="block px-4 py-2 hover:bg-gray-200">
                Bill Payment
              </Link>
            </div>
          </div>
          <Link href="/contact">Calculators</Link>
          <Link href="/contact">Help Center</Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}