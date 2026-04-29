"use client";
export default function SalaryPage() {
  const salaries = [
    15000, 18000, 20000, 25000,
    30000, 35000, 40000, 50000,
    60000, 70000, 75000, 80000,
    95000
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-600 via-black to-green-900 flex flex-col items-center p-6">


      <h1 className="text-4xl font-bold mb-10 text-center">
        Personal Loan By Salary
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">

        {salaries.map((salary, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-xl text-center shadow-sm transform transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              ₹{salary.toLocaleString()}
            </h2>

            <p className="text-gray-600 mt-2">
              Salary Personal Loan
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}