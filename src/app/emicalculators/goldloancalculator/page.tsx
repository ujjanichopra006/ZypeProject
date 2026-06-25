"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import goldAnimation from "@/animations/Coin purse (1).json";

export default function GoldLoanCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(9);
  const [tenure, setTenure] = useState(36);

  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const monthlyRate = rate / 12 / 100;

    const emiValue =
      monthlyRate === 0
        ? amount / tenure
        : (amount *
            monthlyRate *
            Math.pow(1 + monthlyRate, tenure)) /
          (Math.pow(1 + monthlyRate, tenure) - 1);

    const total = emiValue * tenure;
    const totalInterest = total - amount;

    setEmi(Math.round(emiValue));
    setInterest(Math.round(totalInterest));
    setTotalPayment(Math.round(total));
  }, [amount, rate, tenure]);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-sm font-semibold shadow-md">
            Gold Loan EMI Calculator
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
            Calculate Your Gold Loan EMI
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Calculate EMI, total interest payable and total repayment amount instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Calculator */}
          <div className="bg-white rounded-3xl shadow-xl border border-yellow-100 p-6 h-[430px] flex flex-col justify-center">
            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">
                  Loan Amount
                </label>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-xl font-bold text-amber-700">
                  ₹ {amount.toLocaleString()}
                </div>

                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="10000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-3 accent-yellow-500 cursor-pointer"
                />
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">
                  Interest Rate (%)
                </label>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-xl font-bold text-amber-700">
                  {rate}%
                </div>

                <input
                  type="range"
                  min="6"
                  max="18"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full mt-3 accent-yellow-500 cursor-pointer"
                />
              </div>

              {/* Tenure */}
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">
                  Loan Tenure (Months)
                </label>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-xl font-bold text-amber-700">
                  {tenure} Months
                </div>

                <input
                  type="range"
                  min="6"
                  max="84"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full mt-3 accent-yellow-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Animation */}
          <div className="bg-white rounded-3xl shadow-xl border border-yellow-100 h-[430px] flex items-center justify-center overflow-hidden">
            <Lottie
              animationData={goldAnimation}
              loop
              autoplay
              className="w-[260px] h-[260px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-2xl shadow-lg border border-yellow-100 p-5 text-center">
            <h3 className="text-sm text-gray-500">
              Monthly EMI
            </h3>

            <p className="mt-2 text-xl md:text-2xl font-bold text-yellow-600">
              ₹ {emi.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-5 text-center">
            <h3 className="text-sm text-gray-500">
              Total Interest
            </h3>

            <p className="mt-2 text-xl md:text-2xl font-bold text-orange-600">
              ₹ {interest.toLocaleString()}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-5 text-center">
            <h3 className="text-sm text-gray-500">
              Total Payment
            </h3>

            <p className="mt-2 text-xl md:text-2xl font-bold text-green-600">
              ₹ {totalPayment.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}