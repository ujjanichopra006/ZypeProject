"use client";

import Image from "next/image";

const personalLoanLenders = [
  {
    name: "Olyv",
    logo: "/olyv.png",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
  },
  {
    name: "payme",
    logo: "/payme.png",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
  },
  {
    name: "Hero fincorp",
    logo: "/Hero fincorp.jpg",
    rate: "19% to 29% per annum",
    max: "₹50,000 - ₹5,00,000",
  },
  {
    name: "NEXI Loans",
    logo: "/NEXT Loans.png",
    rate: "Up to 20% per annum",
    max: "Up to ₹1 Lakh",
  },
  {
    name: "capitalnow",
    logo: "/capitalnow.png",
    rate: "18% to 36% per annum",
    max: "Up to ₹3 Lakhs",
  },
  {
    name: "Zype",
    logo: "/Zype.png",
    rate: "Up to 1.5% per month",
    max: "Up to ₹3 Lakhs",
  },
  {
    name: "RamFin",
    logo: "/Ramfin.png",
    rate: "0.35% to 0.80% per day",
    max: "Up to ₹5 Lakhs",
  },
  {
    name: "Fatakpay",
    logo: "/Fatakpay.jpg",
    rate: "12% to 35.95% per annum",
    max: "Up to ₹5 Lakhs",
  },
  {
    name: "CreditSea",
    logo: "/CreditSea.png",
    rate: "14% to 36% per annum",
    max: "Up to ₹5 Lakhs",
  },
  {
    name: "trustpaisa",
    logo: "/trustpaisa.png",
    rate: "18.25% to 36% per annum",
    max: "Up to ₹1 Lakh",
  },
];

export default function PersonalLoanLenders() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="rounded-2xl bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Personal Loan Lenders
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/90">
            Choose the best Personal Loan lender for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {personalLoanLenders.map((loan) => (
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