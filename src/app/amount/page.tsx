"use client";

export default function AmountPage() {
  const amounts = [
    3000, 5000, 10000,
    15000, 20000, 25000,
    30000, 35000, 40000,
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-600 via-black to-green-900 flex flex-col items-center p-6">

        <h1 className="text-white text-3xl font-bold mb-10 text-center">
          Personal Loan By Amount
        </h1>


        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">

          {amounts.map((amt, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-center shadow-sm transform transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-white"
            >
              <h2 className="text-black text-2xl font-bold mb-4">
                ₹ {amt}
              </h2>

              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Check
              </button>
            </div>
          ))}

        </div>
      </div>

    </>
  );
}