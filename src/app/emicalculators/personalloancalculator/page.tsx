"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import personalLoanAnimation from "@/animations/personalloan.json";

export default function PersonalLoanCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(5);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;

  const emi =
    amount > 0
      ? (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-[#071739] via-[#0B1F4D] to-[#102A63]">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#F8FAFC] rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.25)] overflow-hidden border border-white/10 grid lg:grid-cols-[45%_55%]">

          {/* LEFT SIDE */}
          <div className="p-6 lg:p-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#071739] mb-2">
              Personal Loan EMI Calculator
            </h2>

            <p className="text-gray-600 text-sm mb-5">
              Calculate your monthly EMI instantly and plan your finances smartly.
            </p>

            {/* Lottie Animation */}
            <div className="w-full max-w-[180px] mx-auto mb-6">
              <Lottie
                animationData={personalLoanAnimation}
                loop
              />
            </div>

            {/* Loan Amount */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-[#071739]">
                  Loan Amount
                </label>

                <span className="font-bold text-[#2563EB]">
                  ₹ {amount.toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="50000"
                max="5000000"
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-[#071739]">
                  Interest Rate
                </label>

                <span className="font-bold text-[#2563EB]">
                  {rate}%
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="30"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-semibold text-[#071739]">
                  Loan Tenure
                </label>

                <span className="font-bold text-[#2563EB]">
                  {tenure} Years
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-[#2563EB] cursor-pointer"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative bg-gradient-to-br from-[#071739] via-[#0B1F4D] to-[#1E3A8A] text-white p-6 lg:p-8 flex flex-col justify-center overflow-hidden">

            {/* Background Glow Effects */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">
                Loan Summary
              </h3>

              <div className="space-y-4">

                {/* EMI */}
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                  <p className="text-blue-100 text-sm">
                    Monthly EMI
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    ₹{" "}
                    {emi.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </h2>
                </div>

                {/* Interest */}
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <p className="text-blue-100 text-sm">
                    Total Interest
                  </p>

                  <h3 className="text-2xl font-semibold mt-1">
                    ₹{" "}
                    {totalInterest.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </h3>
                </div>

                {/* Total Payment */}
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                  <p className="text-blue-100 text-sm">
                    Total Payment
                  </p>

                  <h3 className="text-2xl font-semibold mt-1">
                    ₹{" "}
                    {totalPayment.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </h3>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 bg-[#FBBF24] text-[#071739] font-bold py-3 rounded-xl shadow-lg hover:bg-[#F59E0B] hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}