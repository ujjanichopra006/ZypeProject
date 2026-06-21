"use client";

import Image from "next/image";

const homeloanlender = [
  {
    name: "Bajaj Housing Finance",
    logo: "/bajaj housing.jpg",
    category: "Home Loan",
    rate: "7.49% per annum",
    max: "Up to ₹5 Crores",
  },

];

export default function businessloanlender() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="rounded-2xl bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            home Loan Lenders
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/90">
            Choose the best home Loan lender for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {homeloanlender.map((loan) => (
            <div
              key={loan.name}
              className="rounded-2xl border border-white/20 bg-[#0f172a] p-6 shadow-lg hover:shadow-blue-500/20 transition"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={loan.logo}
                    alt={loan.name}
                    width={60}
                    height={60}
                    className="object-contain rounded"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">
                    {loan.name}
                  </h2>

                  <p className="text-sm text-white/80">
                    • Interest Rate: {loan.rate}
                  </p>

                  <p className="text-sm text-white/80 mt-1">
                    • Max Loan: {loan.max}
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-white/10 p-3 rounded-lg text-sm">
                ⚡ Fast approval with minimal documents
              </div>

              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-medium">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}