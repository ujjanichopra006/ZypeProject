"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const tabs = [
  "Personal Loan",
  "Short Term Loan",
  "Business Loan",
  "Home Loan",
  "Gold Loan",
];

const loans = [
  {
    name: "Olyv",
    logo: "/olyv.png",
    category: "Personal Loan",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
  },
  {
    name: "payme",
    logo: "/payme.png",
    category: "Personal Loan",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
  },
  {
    name: "Hero fincorp",
    logo: "/Hero fincorp.jpg",
    category: "Personal Loan",
    rate: "19% to 29% per annum",
    max: "₹50,000 - ₹5,00,000",
  },
  {
    name: "NEXI Loans",
    logo: "/NEXT Loans.png",
    category: "Personal Loan",
    rate: "Up to 20% per annum",
    max: "Up to ₹1 Lakh",
  },
  {
    name: "capitalnow",
    logo: "/capitalnow.png",
    category: "Personal Loan",
    rate: "18% to 36% per annum",
    max: "Up to ₹3 Lakhs",
  },
  {
    name: "Zype",
    logo: "/Zype.png",
    category: "Personal Loan",
    rate: "Up to 1.5% per month",
    max: "Up to ₹3 Lakhs",
  },
  {
    name: "RamFin",
    logo: "/Ramfin.png",
    category: "Personal Loan",
    rate: "0.35% to 0.80% per day",
    max: "Up to ₹5 Lakhs",
  },
  {
    name: "Fatakpay",
    logo: "/Fatakpay.jpg",
    category: "Personal Loan",
    rate: "12% to 35.95% per annum",
    max: "Up to ₹5 Lakhs",
  },
  {
    name: "CreditSea",
    logo: "/CreditSea.png",
    category: "Personal Loan",
    rate: "14% to 36% per annum",
    max: "Up to ₹5 Lakhs",
  },
  {
    name: "trustpaisa",
    logo: "/trustpaisa.png",
    category: "Personal Loan",
    rate: "18.25% to 36% per annum",
    max: "Up to ₹1 Lakh",
  },

  {
    name: "Digi Credit",
    logo: "/Digi Credit.png",
    category: "Short Term Loan",
    rate: "up to 3% per month",
    max: "Up to ₹35,000",
  },
  {
    name: "Fatakpay",
    logo: "/Fatakpay.jpg",
    category: "Short Term Loan",
    rate: "15% per annum",
    max: "Up to ₹35,000",
  },
  {
    name: "Cashtool",
    logo: "/cashtool.png",
    category: "Short Term Loan",
    rate: "up to 35% per annum",
    max: "Up to ₹60,000",
  },
  {
    name: "My Money Bazar",
    logo: "/my money bazar.png",
    category: "Short Term Loan",
    rate: "up to 35% per annum",
    max: "Up to ₹30,000",
  },
  {
    name: "Cashvia",
    logo: "/cashvia.jpg",
    category: "Short Term Loan",
    rate: "up to 35% per annum",
    max: "Up to ₹30,000",
  },

  {
    name: "Protium",
    logo: "/protium.png",
    category: "Business Loan",
    rate: "10.5% to 30% per annum",
    max: "Up to ₹5 Crores",
  },
  {
    name: "Muthoot FinCorp",
    logo: "/Muthoot fincorp.png",
    category: "Business Loan",
    rate: "11% to 15% per annum",
    max: "Up to ₹5 Crores",
  },
  {
    name: "Faircent",
    logo: "/faircent.png",
    category: "Business Loan",
    rate: "12% per annum",
    max: "Up to ₹2 Crores",
  },
  {
    name: "FlexiLoans",
    logo: "/flexiloans.png",
    category: "Business Loan",
    rate: "12% to 18% per annum",
    max: "Up to ₹1 Crore",
  },

  {
    name: "Bajaj Housing Finance",
    logo: "/bajaj housing.jpg",
    category: "Home Loan",
    rate: "7.49% per annum",
    max: "Up to ₹5 Crores",
  },

  {
    name: "Dvara Money",
    logo: "/Dvara Money.jpg",
    category: "Gold Loan",
    rate: "24% to 27% per annum",
    max: "Up to ₹5 Lakhs",
  },
];

export default function QuickLinks() {
  
  const searchParams = useSearchParams();

 const tabFromUrl = searchParams.get("tab");

const [activeTab, setActiveTab] = useState("Personal Loan");

useEffect(() => {
  if (tabFromUrl) {
    setActiveTab(decodeURIComponent(tabFromUrl));
  }
}, [tabFromUrl]);

  const filteredLoans = loans.filter(
    (loan) => loan.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#0b1220] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">

        <div className="rounded-2xl bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 p-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Quick Links
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/90">
            Financial Freedom Starts with the Right Loan.
            We Help You Find It.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* LOAN CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {filteredLoans.length > 0 ? (
            filteredLoans.map((loan) => (
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
            ))
          ) : (
            <p className="text-center col-span-2 text-white/70 mt-10">
              No lenders available for this category yet 🚧
            </p>
          )}
        </div>

      </div>
    </div>
  );
}