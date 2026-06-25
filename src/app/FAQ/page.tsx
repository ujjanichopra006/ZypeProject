"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQ() {
  const [openPersonal, setOpenPersonal] = useState<number | null>(null);
  const [openBusiness, setOpenBusiness] = useState<number | null>(null);

  // ✅ Personal Loan FAQs
  const personalLoanFaqs: FAQItem[] = [
    {
      q: "What is personal loan?",
      a: "A personal loan is an unsecured loan you can take for needs like home repairs, education, or debt consolidation. You receive a lump sum and repay it in fixed EMIs over a set period.",
    },
    {
      q: "What are typical interest rates?",
      a: "Rates ysually range from 10% to 20% per annum in India. your exact rate depends on your credit score,income,and lender'spolicy ",
    },
    {
      q: "How long can I repay?",
      a: "Repayment tenures generally span from 12 months to 60 months (1–5 years). Longer tenures lower your EMI but increase total interest paid",
    },
 {
      q: "How much can I borrow?",
      a: "Most banks and NBFCs lend anywhere between ₹20,000 up to ₹25 lakh, depending on your eligibility and income.",
    }, 
    {
      q: "Are there any processing fees?",
      a: "Yes—lenders may charge a processing fee of 1%–3% of the loan amount, which is usually deducted from your disbursal.",
    },
     {
      q: "Can I prepay my loan??",
      a: "Yes, partial or full prepayment is allowed by most lenders, often without penalty. Always confirm prepayment rules with your bank.",
    },

  ];

  // ✅ Business Loan FAQs
  const businessLoanFaqs: FAQItem[] = [
    {
      q: "What is business loan?",
      a: "A business loan provides funds for working capital, equipment purchases, or expansion. It can be secured (with collateral) or unsecured.",
    },
    {
      q: "What’s the loan amount range?",
      a: "You can typically borrow between ₹50,000 and ₹50 lakh, depending on your business turnover, credit history, and lender guidelines.",
    },
    {
      q: "What interest rates apply?",
      a: "Business loan rates in India vary from 12% to 18% per annum. Your rate depends on your credit score, business vintage, and financials.",
    },
     {
      q: "What documents are needed?",
      a: "Commonly required documents include bank statements (6–12 months), profit & loss statements, GST returns, and identity/address proofs.",
    },
     {
      q: "How do I apply?",
      a: "You can apply online via a bank or NBFC website by uploading documents and filling out an application form. Approval usually takes 2–5 business days.",
    },
     {
      q: "Is collateral required?",
      a: "Unsecured business loans don’t need collateral but come at higher rates. Secured loans (against property or machinery) often offer lower interest.",
    },
  ];

  // Toggle Personal
  const togglePersonal = (index: number) => {
    setOpenPersonal(openPersonal === index ? null : index);
  };

  // Toggle Business
  const toggleBusiness = (index: number) => {
    setOpenBusiness(openBusiness === index ? null : index);
  };

  return (
   <div className="w-full min-h-screen bg-gradient-to-b from-blue-200 via-white to-blue-200 px-4 py-10">
    <div className="max-w-4xl mx-auto space-y-10">
      {/* ================= PERSONAL LOAN ================= */}
      <div>
        <h2 className="text-2xl text-blue-400 font-bold text-center mb-4">
          Personal Loan FAQs
        </h2>

        <div className="space-y-4">
          {personalLoanFaqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => togglePersonal(index)}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-xl">
                  {openPersonal === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-4 transition-all duration-300 ease-in-out ${
                  openPersonal === index
                    ? "max-h-40 py-3 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden py-0"
                }`}
              >
                <p className="text-gray-600">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BUSINESS LOAN ================= */}
      <div>
        <h2 className="text-2xl text-blue-400 font-bold text-center mb-4">
          Business Loan FAQs
        </h2>

        <div className="space-y-4">
          {businessLoanFaqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleBusiness(index)}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-xl">
                  {openBusiness === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-4 transition-all duration-300 ease-in-out ${
                  openBusiness === index
                    ? "max-h-40 py-3 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden py-0"
                }`}
              >
                <p className="text-gray-600">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}