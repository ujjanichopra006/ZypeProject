"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Forth() {
  const loanData = {
    personal: {
      eligibility: [
        "Minimum age: 21 years",
        "Maximum age: 60 years at loan maturity",
        "Minimum income: ₹15,000 per month (salaried), ₹2 lakh p.a. (self-employed)",
        "Credit score: 650 or above preferred",
        "Employment: Minimum 1 year with current employer",
      ],
      documents: [
        "Identity Proof (Aadhaar/PAN)",
        "Address Proof (Aadhaar/Utility Bill)",
        "Income Proof (Salary Slips or Bank Statement)",
        "Selfie with ID (For Verification)",
      ],
    },

    home: {
      eligibility: [
        "Minimum age: 21 years",
        "Maximum age: 65 years at loan maturity",
        "Minimum income: ₹25,000 per month (salaried), ₹3 lakh p.a. (self-employed)",
        "Property value: Minimum ₹20 lakh",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Income Proof (Bank Statement or Salary Slips)",
        "Property Documents (Sale Agreement, Title Deed)",
        "Selfie with ID (For Verification)",
      ],
    },

    business: {
      eligibility: [
        "Business vintage: Minimum 3 years",
        "Annual turnover: Minimum ₹10 lakh",
        "Profitability: Should be profitable for last 2 years",
        "Credit score: 700 or above preferred",
        "Existing loans: EMI/NMI ratio below 50%",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Bank Statements for last 6-12 months",
        "Business Registration Proof (GST/MSME)",
        "Selfie with ID (For Verification)",
      ],
    },

    credit: {
      eligibility: [
        "Minimum age: 18 years (21 for premium cards)",
        "Minimum income: ₹12,000 per month",
        "Credit score: 650 or above",
        "Employment: Stable income source for last 6 months",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Income Proof (Salary Slips or Bank Statement)",
        "Selfie with ID (For Verification)",
      ],
    },
  };

  const [activeLoan, setActiveLoan] =
    useState<keyof typeof loanData>("personal");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Har scroll par animation chalega
      mirror: true, // Scroll up par bhi animation
      offset: 80,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, []);

  // Tab change hone par animation refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    return () => clearTimeout(timer);
  }, [activeLoan]);

  const handleLoanChange = (
    loan: keyof typeof loanData
  ) => {
    setActiveLoan(loan);
  };

  return (
    <div className="bg-slate-900 py-10 px-5 md:px-10 lg:px-20 overflow-hidden">
      {/* App Download Section */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-green-300 rounded-[40px] shadow-2xl px-8 md:px-12 lg:px-20 py-10 mx-auto mb-16 max-w-7xl"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
        data-aos-anchor-placement="top-bottom"
      >
        {/* Left Content */}
        <div
          className="flex flex-col text-black"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Get the <br />
            KeshvaCredit App Today!
          </h1>

          <p className="text-base md:text-xl py-8 leading-relaxed">
            Discover and compare the best loan offers from
            <br className="hidden md:block" />
            multiple trusted lenders, check your eligibility,
            <br className="hidden md:block" />
            apply instantly, and manage everything seamlessly
            <br className="hidden md:block" />
            within one app.
          </p>

          <Link
            href="https://play.google.com/store/apps/details?id=com.keshvacredit.loan&pcampaignid=web_share"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              src="/1.png"
              alt="Google Play"
              className="w-44 rounded-xl hover:scale-105 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Mobile Image */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <img
            src="/ss.webp"
            alt="App Screenshot"
            className="w-[260px] md:w-[320px] lg:w-[350px] rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Heading */}
      <div
        className="flex flex-col items-center justify-center py-8"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-blue-500 text-3xl md:text-4xl font-bold text-center">
          Financial Products Eligibility
        </h1>

        <p className="text-white text-center text-lg md:text-xl mt-4">
          Check eligibility criteria and documents required for
          various financial products
        </p>
      </div>

      {/* Tabs */}
      <div
        className="flex justify-center gap-4 md:gap-6 py-5 flex-wrap"
        data-aos="fade-up"
      >
        {[
          { key: "personal", label: "Personal Loan" },
          { key: "home", label: "Home Loan" },
          { key: "business", label: "Business Loan" },
          { key: "credit", label: "Credit Card" },
        ].map((item, index) => (
          <button
            key={item.key}
            onClick={() =>
              handleLoanChange(
                item.key as keyof typeof loanData
              )
            }
            className={`shadow-md rounded-xl px-5 py-3 w-40 transition-all duration-300 cursor-pointer hover:scale-105 ${
              activeLoan === item.key
                ? "bg-green-300 scale-105"
                : "bg-blue-300 hover:bg-green-300"
            }`}
            data-aos="flip-up"
            data-aos-delay={index * 100}
          >
            <h2 className="text-lg font-bold text-black">
              {item.label}
            </h2>
          </button>
        ))}
      </div>

      {/* Eligibility & Documents */}
      <div className="grid md:grid-cols-2 gap-8 px-2 md:px-10 py-10 max-w-6xl mx-auto">
        {/* Eligibility Card */}
        <div
          key={`${activeLoan}-eligibility`}
          className="bg-green-300 rounded-3xl shadow-xl p-7 hover:-translate-y-2 transition-all duration-300"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="text-black text-3xl font-bold mb-8">
            ✅ Eligibility Criteria
          </h1>

          <div className="space-y-5">
            {loanData[activeLoan].eligibility.map(
              (item, index) => (
                <p
                  key={index}
                  className="text-black text-base"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  data-aos-duration="800"
                >
                  ✅ {item}
                </p>
              )
            )}
          </div>
        </div>

        {/* Documents Card */}
        <div
          key={`${activeLoan}-documents`}
          className="bg-green-300 rounded-3xl shadow-xl p-7 hover:-translate-y-2 transition-all duration-300"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="text-black text-3xl font-bold mb-8">
            📃 Documents Required
          </h1>

          <div className="space-y-5">
            {loanData[activeLoan].documents.map(
              (item, index) => (
                <p
                  key={index}
                  className="text-black text-base"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                  data-aos-duration="800"
                >
                  ✅ {item}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}