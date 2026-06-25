"use client";

import { useState, useMemo } from "react";
import Lottie from "lottie-react";
import { Home, IndianRupee } from "lucide-react";

import homeAnimation from "@/animations/home.json";

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emiData = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  return (
    <section className="bg-gradient-to-br from-slate-100 via-blue-100 to-cyan-100 py-8 px-2">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-3">
            <Home className="w-7 h-7 text-blue-700" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Home Loan EMI Calculator
          </h2>

          <p className="mt-2 text-slate-600 text-sm max-w-xl mx-auto">
            Calculate EMI, interest & total repayment instantly.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-3 gap-4 items-center">

          {/* Left Card */}
          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-md">

            <h3 className="text-lg font-bold mb-4 text-slate-800">
              Loan Details
            </h3>

            {/* Loan Amount */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold">
                  Loan Amount
                </label>
                <span className="text-blue-700 font-bold text-sm">
                  ₹ {loanAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-blue-700"
              />
            </div>

            {/* Interest */}
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold">
                  Interest Rate
                </label>
                <span className="text-cyan-600 font-bold text-sm">
                  {interestRate}%
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-cyan-600"
              />
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between mb-1">
                <label className="text-sm font-semibold">
                  Tenure
                </label>
                <span className="text-blue-700 font-bold text-sm">
                  {tenure}Y
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-blue-700"
              />
            </div>
          </div>

          {/* Animation */}
          <div className="flex justify-center">
            <Lottie
              animationData={homeAnimation}
              loop
              className="w-[220px] md:w-[320px]"
            />
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 rounded-2xl p-4 text-white shadow-lg">

            <h3 className="text-xl font-bold mb-4">
              EMI Summary
            </h3>

            <div className="bg-white/15 rounded-xl p-3 mb-3">
              <p className="text-xs text-blue-100">Monthly EMI</p>
              <h2 className="text-2xl font-bold flex items-center gap-1">
                <IndianRupee className="w-5 h-5" />
                {emiData.emi.toLocaleString("en-IN")}
              </h2>
            </div>

            <div className="bg-white/15 rounded-xl p-3 mb-3">
              <p className="text-xs text-blue-100">Interest</p>
              <h3 className="text-lg font-bold">
                ₹ {emiData.totalInterest.toLocaleString("en-IN")}
              </h3>
            </div>

            <div className="bg-white/15 rounded-xl p-3">
              <p className="text-xs text-blue-100">Total Payable</p>
              <h3 className="text-lg font-bold">
                ₹ {emiData.totalPayment.toLocaleString("en-IN")}
              </h3>
            </div>

            <button className="w-full mt-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold hover:scale-105 transition">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}