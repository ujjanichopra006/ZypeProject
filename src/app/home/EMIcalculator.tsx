"use client";

import { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);

  const emiData = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure;

    const emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
      emi: isNaN(emi) ? 0 : emi,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
    };
  }, [loanAmount, interestRate, tenure]);

  const chartData = [
    {
      name: "Principal",
      value: loanAmount,
    },
    {
      name: "Interest",
      value: emiData.totalInterest,
    },
  ];

  return (
    <div className="bg-[#061533] py-6">
      {/* Heading */}
      <h1 className="text-center text-2xl md:text-3xl font-bold text-white mb-5">
        Periodic{" "}
        <span className="text-blue-500">
          Loan EMI
        </span>{" "}
        Calculator
      </h1>

      <div className="grid lg:grid-cols-2 gap-4 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="bg-[#1a2a67] rounded-xl p-4">
          <h2 className="text-white text-2xl font-bold mb-4">
            EMI Calculator
          </h2>

          <div className="space-y-3">
            <div>
              <label className="block text-white font-medium text-sm mb-1">
                Loan Amount (₹)
              </label>

              <input
                type="number"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(Number(e.target.value))
                }
                className="w-full h-9 bg-transparent border border-white rounded-md px-3 text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium text-sm mb-1">
                Interest Rate (%)
              </label>

              <input
                type="number"
                value={interestRate}
                onChange={(e) =>
                  setInterestRate(Number(e.target.value))
                }
                className="w-full h-9 bg-transparent border border-white rounded-md px-3 text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-medium text-sm mb-1">
                Loan Tenure (Months)
              </label>

              <input
                type="number"
                value={tenure}
                onChange={(e) =>
                  setTenure(Number(e.target.value))
                }
                className="w-full h-9 bg-transparent border border-white rounded-md px-3 text-white text-sm outline-none"
              />
            </div>
          </div>

          <div className="border-t border-gray-400 my-4"></div>

          <div className="flex flex-wrap gap-3">
            <div className="bg-slate-200 rounded-md p-3 flex-1 min-w-[160px]">
              <p className="text-gray-600 text-xs">
                Total Payment
              </p>

              <h3 className="text-[#1a2a67] text-lg font-bold">
                ₹
                {emiData.totalPayment.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  }
                )}
              </h3>
            </div>

            <div className="bg-slate-200 rounded-md p-3 flex-1 min-w-[160px]">
              <p className="text-gray-600 text-xs">
                Total Interest
              </p>

              <h3 className="text-[#1a2a67] text-lg font-bold">
                ₹
                {emiData.totalInterest.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  }
                )}
              </h3>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#efefef] rounded-xl p-4">
          <h2 className="text-2xl font-bold text-black">
            EMI Result
          </h2>

          <div className="h-[2px] bg-blue-500 mt-3 mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-200 p-3 rounded-md">
              <p className="text-gray-600 text-xs">
                Monthly EMI
              </p>

              <h3 className="text-[#1a2a67] text-lg font-bold">
                ₹
                {emiData.emi.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  }
                )}
              </h3>
            </div>

            <div className="bg-slate-200 p-3 rounded-md">
              <p className="text-gray-600 text-xs">
                Total Payment
              </p>

              <h3 className="text-[#1a2a67] text-lg font-bold">
                ₹
                {emiData.totalPayment.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  }
                )}
              </h3>
            </div>

            <div className="bg-slate-200 p-3 rounded-md">
              <p className="text-gray-600 text-xs">
                Total Interest
              </p>

              <h3 className="text-[#1a2a67] text-lg font-bold">
                ₹
                {emiData.totalInterest.toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  }
                )}
              </h3>
            </div>
          </div>

          <h3 className="text-center text-lg font-bold mt-4 mb-2">
            EMI Breakdown
          </h3>

          <div className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  dataKey="value"
                  labelLine={true}
                  label={({ name, value }) =>
                    `${name}: ₹${Number(value).toLocaleString("en-IN")}`
                  }
                >
                  <Cell fill="#4CAF50" />
                  <Cell fill="#FF4D3D" />
                </Pie>

                <Tooltip
                  formatter={(value) =>
                    `₹${Number(value).toLocaleString("en-IN")}`
                  }
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-2 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>
                Principal: ₹{loanAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>
                Interest: ₹
                {emiData.totalInterest.toLocaleString("en-IN", {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}