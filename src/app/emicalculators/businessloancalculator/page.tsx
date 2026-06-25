"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import businessAnimation from "@/animations/Business.json";

export default function BusinessLoanCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(60);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [amount, rate, tenure]);

  const calculateEMI = () => {
    const monthlyRate = rate / 12 / 100;

    if (monthlyRate === 0) {
      const emiValue = amount / tenure;
      setEmi(emiValue);
      setTotalPayment(amount);
      setTotalInterest(0);
      return;
    }

    const emiValue =
      (amount *
        monthlyRate *
        Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    const totalPay = emiValue * tenure;
    const interest = totalPay - amount;

    setEmi(emiValue);
    setTotalPayment(totalPay);
    setTotalInterest(interest);
  };

  return (
<div className="bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#3a506b] py-5 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold">
            Business Finance Tool
          </span>

          <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-200">
            Business Loan EMI Calculator
          </h1>

          <p className="mt-2 text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Calculate EMI, interest payable and repayment amount instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-stretch">
          {/* Calculator Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-4 min-h-[420px] flex flex-col">
            <div>
              {/* Loan Amount */}
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <label className="font-semibold text-slate-700 text-sm">
                    Loan Amount
                  </label>
                  <span className="font-bold text-blue-700 text-sm">
                    ₹ {amount.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="50000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-2 w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Interest Rate */}
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <label className="font-semibold text-slate-700 text-sm">
                    Interest Rate
                  </label>
                  <span className="font-bold text-blue-700 text-sm">
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
                  className="w-full accent-blue-600"
                />

                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="mt-2 w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tenure */}
              <div className="mb-3">
                <div className="flex justify-between mb-1">
                  <label className="font-semibold text-slate-700 text-sm">
                    Loan Tenure
                  </label>
                  <span className="font-bold text-blue-700 text-sm">
                    {tenure} Months
                  </span>
                </div>

                <input
                  type="range"
                  min="12"
                  max="240"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />

                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="mt-2 w-full border border-slate-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={calculateEMI}
                className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-md hover:shadow-xl transition-all"
              >
                Calculate EMI
              </button>
            </div>

            {/* Results */}
            <div className="mt-auto pt-3">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-3 text-white">
                <h3 className="text-center text-base font-semibold mb-3">
                  Loan Summary
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="bg-white/15 rounded-xl p-3">
                    <p className="text-xs opacity-80">Monthly EMI</p>
                    <h2 className="text-base font-bold mt-1">
                      ₹ {Math.round(emi).toLocaleString()}
                    </h2>
                  </div>

                  <div className="bg-white/15 rounded-xl p-3">
                    <p className="text-xs opacity-80">Total Interest</p>
                    <h2 className="text-base font-bold mt-1">
                      ₹ {Math.round(totalInterest).toLocaleString()}
                    </h2>
                  </div>

                  <div className="bg-white/15 rounded-xl p-3">
                    <p className="text-xs opacity-80">Total Payment</p>
                    <h2 className="text-base font-bold mt-1">
                      ₹ {Math.round(totalPayment).toLocaleString()}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animation Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 min-h-[420px] p-4 flex flex-col justify-center">
            <Lottie
              animationData={businessAnimation}
              loop
              className="w-full max-w-[200px] mx-auto"
            />

            <div className="text-center mt-2">
              <h2 className="text-lg font-bold text-slate-900">
                Grow Your Business
              </h2>

              <p className="text-slate-600 mt-1 text-sm">
                Plan finances smartly and calculate EMI instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}