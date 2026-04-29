"use client";
import { useState, useEffect } from "react";

export default function EMICalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [amount, rate, tenure]);

  const calculateEMI = () => {
    const P = amount;
    const r = rate / 12 / 100;
    const n = tenure;

    if (r === 0) {
      setEmi((P / n).toFixed(2));
      return;
    }

    const emiValue =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-600 via-black to-green-900 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          EMI Calculator
        </h1>

        <div className="mb-5">
          <label className=" text-black font-semibold">
            Loan Amount: ₹{amount}
          </label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

        <div className="mb-5">
          <label className=" text-black font-semibold">
            Interest Rate: {rate}%
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

       
        <div className="mb-5">
          <label className=" text-black font-semibold">
            Tenure: {tenure} months
          </label>
          <input
            type="range"
            min="1"
            max="60"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full mt-2"
          />
        </div>

 
        <div className="mt-6 text-center  p-4 rounded-xl">
          <p className="text-lg text-black font-semibold">Monthly EMI</p>
          <p className="text-3xl font-bold text-blue-600">
            ₹ {emi}
          </p>
        </div>
      </div>
    </div>
  );
}