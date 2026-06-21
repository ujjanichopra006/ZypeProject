"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import loans from "../../animations/loans.json";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Second from "../../app/home/page2";
import Third from "../../app/home/page3";
import Forth from "../../app/home/page4";
import Fifth from "../../app/home/page5";
import EMICalculator from "../home/EMIcalculator";
import Sixth from "../../app/home/page6";
import Seventh from "../../app/home/page7";
import Eighth from "../../app/home/page8";

export default function Home() {
  const router = useRouter();

  const handlePersonalLoanClick = () => {
    const isSubmitted = localStorage.getItem("personalLoanSubmitted") === "true";
    if (isSubmitted) {
      router.push("/personalloanlender");
    } else {
      router.push("/personal-loan");
    }
  };

  // ✅ NEW: Same logic for Business Loan
  const handleBusinessLoanClick = () => {
    const isSubmitted = localStorage.getItem("businessLoanSubmitted") === "true";
    if (isSubmitted) {
      router.push("/businessloanlender");
    } else {
      router.push("/business-loan");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });

    const refreshAOS = () => AOS.refreshHard();
    window.addEventListener("load", refreshAOS);
    const timer = setTimeout(() => AOS.refreshHard(), 500);

    return () => {
      window.removeEventListener("load", refreshAOS);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-slate-900">
      {/* HERO SECTION */}
      <section className="min-h-[80vh] flex items-center justify-center bg-slate-900 text-white px-4 sm:px-10 md:px-16 lg:px-24 py-10">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left" data-aos="fade-right">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Empowering Every Indian with <br />
              Instant Loans
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-5 leading-relaxed text-gray-200">
              Get the funds you need with quick approvals,
              <span className="text-red-400 font-semibold"> minimal paperwork, and fast disbursals.</span>
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <button
                onClick={handlePersonalLoanClick}
                className="bg-green-400 text-black rounded-xl py-3 text-sm font-semibold w-full hover:scale-105 transition"
              >
                Personal Loan
              </button>

              {/* ✅ Updated Business Loan Button */}
              <button
                onClick={handleBusinessLoanClick}
                className="bg-red-400 text-black rounded-xl py-3 text-sm font-semibold w-full hover:scale-105 transition"
              >
                Business Loan
              </button>

              <Link href="/home-loan">
                <button className="bg-yellow-400 text-black rounded-xl py-3 text-sm font-semibold w-full hover:scale-105 transition">
                  Home Loan
                </button>
              </Link>

              <Link href="/gold-loan">
                <button className="bg-blue-400 text-black rounded-xl py-3 text-sm font-semibold w-full hover:scale-105 transition">
                  Gold Loan
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center" data-aos="zoom-in">
            <div className="w-64 sm:w-72 md:w-96">
              <Lottie animationData={loans} loop />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="bg-slate-900 px-4 py-12 md:py-16 flex flex-wrap justify-center gap-6">
        <div className="w-full sm:w-72 min-h-[200px] bg-green-300 rounded-xl shadow-lg p-6 flex flex-col justify-center hover:scale-105 transition">
          <h2 className="text-black text-lg font-bold mb-2">Your Trust Is Our Strength</h2>
          <p className="text-black text-sm">No collateral required, simple and accessible credit.</p>
        </div>
        <div className="w-full sm:w-72 min-h-[200px] bg-green-300 rounded-xl shadow-lg p-6 flex flex-col justify-center hover:scale-105 transition">
          <h2 className="text-black text-lg font-bold mb-2">Fast Support</h2>
          <p className="text-black text-sm">Contact us at keshvacredit@gmail.com anytime.</p>
        </div>
        <div className="w-full sm:w-72 min-h-[200px] bg-green-300 rounded-xl shadow-lg p-6 flex flex-col justify-center hover:scale-105 transition">
          <h2 className="text-black text-lg font-bold mb-2">Unlimited Access</h2>
          <p className="text-black text-sm">Apply once and access funds anytime.</p>
        </div>
        <div className="w-full sm:w-72 min-h-[200px] bg-green-300 rounded-xl shadow-lg p-6 flex flex-col justify-center hover:scale-105 transition">
          <h2 className="text-black text-lg font-bold mb-2">Safe & Secure</h2>
          <p className="text-black text-sm">Data protection with high security standards.</p>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-slate-900 flex items-center justify-center px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
          <img src="/sell car.jpg" alt="sell car" className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl shadow-xl" data-aos="fade-right" />
          <div data-aos="fade-left" className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Avail Loans from ₹2,000 to ₹20 Lakhs</h2>
            <p className="mt-3 text-blue-400 font-semibold">Quick, Hassle-Free, Secure 🚀</p>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section className="w-full py-12"><Second /></section>
      <section className="w-full py-12"><Third /></section>
      <section className="w-full py-12"><Forth /></section>
      <section className="w-full py-12"><Fifth /></section>
      <section className="w-full py-12"><EMICalculator /></section>
      <section className="w-full py-12"><Sixth /></section>
      <section className="w-full py-12"><Seventh /></section>
      <section className="w-full py-12"><Eighth /></section>
    </div>
  );
}