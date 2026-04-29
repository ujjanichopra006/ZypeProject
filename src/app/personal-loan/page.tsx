"use client";
import Second from "../personal-loan/page2";
import Emi from "../home/emicalculator"
import Third from "../personal-loan/page3";
import Forth from "../personal-loan/page4";
import Fifth from "../personal-loan/page5";
export default function Loan() {
  return (
    <>
      <div className="relative min-h-screen  flex overflow-hidden bg-gradient-to-r from-gray-600 via-black to-green-900">

        <div className="max-w-2xl">

          <h1 className="text-4xl md:text-4xl px-10 mt-15 font-bold text-whitek leading-tight">
            Instant Personal Loans for <br /> Every Need Online
          </h1>
          <ul className="mt-8 space-y-5 text-lg text-gray-800">
            <li className="flex items-center px-12 text-white gap-3">
              Loans from ₹3,000 to ₹5,00,000
            </li>
            <li className="flex items-center px-12 text-white gap-3">
              Quick Approval in 60 Seconds
            </li>
            <li className="flex items-center px-12 text-white gap-3">
              Safe & RBI-Compliant Lending App
            </li>
            <li className="flex items-center  px-12 text-white gap-3">
              No Collateral Required
            </li>

          </ul>
          <button className="w-60 mt-10 mx-12 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition">
            Apply Now
          </button>
          <div className="flex gap-4 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-14 cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-14 cursor-pointer"
            />
          </div>

        </div>
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-auto">

          <img
            src="https://media.istockphoto.com/id/2173102007/photo/online-personal-loan-and-financial-concept-financial-loan-agreement-personal-or-business.jpg?s=612x612&w=0&k=20&c=y73lB4LA-0acKlVkRvrtl_6wDta8CBzCoKZRCKq3Wh8="
            className="w-full h-96 md:w-full md:h-[400px] mt-20 rounded-full object-cover shadow-2xl border-4 border-white"
          />

        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-600 via-black to-green-900">
        <p className="text-white py-10 px-6">When life presents unexpected financial needs—be it a medical emergency, a sudden repair, or an education fee—access to quick loans online can be essential. A personal loan provides a fast, flexible, and reliable financial solution to bridge the gap between your immediate requirement and your  <br />
          KC offers instant personal loan options designed for the modern borrower: a 100% digital application process, minimal documentation, instant approvals, and quick disbursal directly to your bank account. Our objective is to provide you with the financial freedom to cover expenses up to ₹2 Lakhs without the burden of collateral. This makes an instant loan with low interest a viable option for diverse financial needs</p>
        <h1 className="text-white text-center justify-center text-4xl font-bold">What is a Personal Loan?
        </h1>
        <p className="text-white py-10 text-center">A personal loan is an unsecured loan that individuals can borrow from financial institutions (RBI-regulated Banks & NBFCs) to meet <br />various financial needs without providing any collateral or security. This means you do not need to mortgage assets like property, gold, <br /> or fixed deposits to get the funds. The loan is approved primarily based on your creditworthiness, which is assessed through your income, <br /> credit score, and repayment history, in line with RBI’s Fair Practices Code for credit appraisal (Source: RBI).
        </p>
        <div className="flex justify-center mt-4">
          <button className="w-60 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition">
            Apply Now
          </button>
        </div>
      </div>
      <Second />
      <Emi />
      <Third />
      <Forth />
      <Fifth />
    </>
  );
}