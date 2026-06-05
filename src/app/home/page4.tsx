"use client";

import Link from "next/link";
import { useState } from "react";

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
                "Address Proof (Aadhaar/Utility bill)",
                "Income Proof (Salary slips or bank statement)",
                "Selfie with ID (for verification)",
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
                "Income Proof (Bank statement or salary slips)",
                "Property documents (Sale agreement, Title deed)",
                "Selfie with ID (for verification)",
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
                "Bank statements for last 6-12 months",
                "Business registration proof (GST/MSME)",
                "Selfie with ID (for verification)",
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
                "Income Proof (Salary slips or bank statement)",
                "Selfie with ID (for verification)",
            ],
        },
    };

    const [activeLoan, setActiveLoan] = useState("personal");

    return (
        <div className="bg-gray-100 py-10">


            <div className="flex items-center justify-between bg-gray-200 rounded-[40px] shadow-2xl px-20 py-10 mx-10 mb-10">


                <div className="flex flex-col text-black">

                    <h1 className="text-4xl font-bold leading-tight">
                        Get the <br />
                        KeshvaCredit App Today!
                    </h1>

                    <p className="text-xl py-8 leading-relaxed">
                        Discover and compare the best loan offers from <br />
                        multiple trusted lenders, check your eligibility,<br />
                        apply instantly, and manage everything seamlessly <br />
                        within one app.
                    </p>

                    <Link href="https://play.google.com/store/apps/details?id=com.keshvacredit.loan&pcampaignid=web_share">

                        <button>
                            <img
                                src="/1.png"
                                alt="Google Play"
                                className="w-40 rounded-xl"
                            />
                        </button>

                    </Link>
                </div>


                <div className="flex justify-center">

                    <img
                        src="/ss.webp"
                        alt="App Screenshot"
                        className="w-[350px] rounded-3xl shadow-lg"
                    />

                </div>

            </div>


            <div className="flex flex-col items-center justify-center py-8">

                <h1 className="text-blue-700 text-3xl font-bold text-center">
                    Financial Products Eligibility
                </h1>

                <p className="text-black text-xl text-center mt-4">
                    Check eligibility criteria and documents required for various financial products
                </p>

            </div>


            <div className="flex justify-center gap-6 py-5 flex-wrap">

                <button
                    onClick={() => setActiveLoan("personal")}
                    className="bg-blue-300 shadow-md rounded-xl px-4 py-3 h-13 w-45 hover:bg-green-300 transition-all duration-300 cursor-pointer"
                >
                    <h2 className="text-lg font-bold text-black">
                        Personal Loan
                    </h2>
                </button>

                <button
                    onClick={() => setActiveLoan("home")}
                    className="bg-blue-300 shadow-md rounded-xl px-4 py-3 h-13 w-45 hover:bg-green-300 transition-all duration-300 cursor-pointer"
                >
                    <h2 className="text-lg font-bold text-black">
                        Home Loan
                    </h2>
                </button>

                <button
                    onClick={() => setActiveLoan("business")}
                    className="bg-blue-300 shadow-md rounded-xl px-4 py-3 h-13 w-45 hover:bg-green-300 transition-all duration-300 cursor-pointer"
                >
                    <h2 className="text-lg font-bold text-black">
                        Business Loan
                    </h2>
                </button>

                <button
                    onClick={() => setActiveLoan("credit")}
                    className="bg-blue-300 shadow-md rounded-xl px-4 py-3 h-13 w-45 hover:bg-green-300 transition-all duration-300 cursor-pointer"
                >
                    <h2 className="text-lg font-bold text-black">
                        Credit Card
                    </h2>
                </button>

            </div>


            <div className="grid md:grid-cols-2 gap-8 px-20 py-10 max-w-6xl mx-auto">

                <div className="bg-gray-200 rounded-3xl shadow-xl p-7">

                    <h1 className=" text-black text-3xl font-bold mb-8">
                        ✅ Eligibility Criteria
                    </h1>

                    <div className="space-y-5">
                        {loanData[activeLoan as keyof typeof loanData].eligibility.map(
                            (item, index) => (
                                <p key={index} className="text-small text-black">
                                    ✅ {item}
                                </p>
                            )
                        )}
                    </div>
                </div>
                <div className="bg-gray-200 rounded-3xl shadow-xl p-7">

                    <h1 className=" text-black text-3xl font-bold mb-8">
                        📃 Documents Required
                    </h1>

                    <div className="space-y-5">

                         {loanData[activeLoan as keyof typeof loanData].documents.map(
                            (item, index) => (
                                <p key={index} className="text-small text-black">
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
