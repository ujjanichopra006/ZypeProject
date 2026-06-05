"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import homeLoanAnimation from "@/animations/homeLoan.json";
import Second from "../../app/About/page2";
export default function About() {
  return (
    <>
    <div className="w-full min-h-screen bg-[#0b1220] text-white">

      
      <section
        className="relative w-full h-[80vh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/loan marketplace.jpg')",
        }}
      >
       
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl px-4">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            1ST Loan{" "}
            <span className="text-orange-500">Marketplace</span>{" "}
            – Simplifying Your{" "}
            <span className="text-orange-500">Loan Journey</span>
          </h1>

          <p className="mt-6 text-gray-200 text-sm md:text-lg max-w-3xl mx-auto">
            Simplifying the Borrowing Experience with Instant Approvals, Best Interest Rates,
            and Trusted Lenders for Personal, Business, and Emergency Loans.
            Unlock Your Loan Options. India’s Top Lender Compared
          </p>

        </div>
      </section>

      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-4xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At KeshvaCredit, we revolutionize the lending experience by connecting
              borrowers with trusted lenders. We make securing a loan fast and stress-free.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Lottie
              animationData={homeLoanAnimation}
              loop={true}
              className="w-[350px] md:w-[400px]"
            />
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-[#0f172a] text-center text-white">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Us Special
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            At KeshvaCredit, we believe financial solutions should be simple, transparent,
            and tailored. We empower you with seamless digital experiences and peace of mind.
            Compare Loans, Get More. Your Best Rates, All in One Place.
          </p>

        </div>

         <div className="grid grid-cols-3 px-20">
                   
                               <div className="flex items-center justify-center p-4" data-aos="zoom-in">
                                 <Image src="/fast approval.jpg" alt="Fast Approval" width={100} height={70} />
                               </div>
                   
                               <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="100">
                                 <Image src="/quick disbursal.png" alt="quick disbursal" width={100} height={70} />
                               </div>
                   
                               <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="200">
                                 <Image src="/100% paperless.png" alt="100% Paperless" width={100} height={70} />
                               </div>
                   
                               <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="300">
                                 <Image src="/wide product range.png" alt="wide product range" width={100} height={70} />
                               </div>
                   
                               <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="400">
                                 <Image src="/hassle free docs.png" alt="hassle free docs" width={100} height={70} />
                               </div>
                                <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="300">
                                 <Image src="/safe data ecosystem.png" alt="safe data ecosystem" width={100} height={70} />
                               </div>
                               </div>
      </section>

    </div>

     <Second />
     </>
  );
}