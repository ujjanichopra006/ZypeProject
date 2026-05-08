"use client";


export default function EmiCalculator() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-blue-200 via-white to-blue-200 py-10 px-4">

      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-800">
          Personal Loan EMI Calculator...
        </h1>
        <p className=" text-xl text-gray-600 mt-2">
          Plan your loan smartly by calculating EMI, interest, and total payable amount.
        </p>
      </div>

      <div className="bg-gray-200 p-6 rounded-2xl shadow-md">
       \
      </div>

      <div className=" text-xl font-samibold max-w-3xl mx-auto mt-8 text-gray-600 text-sm text-center">
        <p>
          EMI = Equated Monthly Installment. It depends on loan amount, interest rate, and tenure.
        </p>
      </div>

    </div>
  );
}