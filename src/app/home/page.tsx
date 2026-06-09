"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import loans from "../../animations/loans.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

import Second from "../../app/home/page2";
import Third from "../../app/home/page3";
import Forth from "../../app/home/page4";
import Fifth from "../../app/home/page5";
import EMICalculator from "./EMIcalculator";
import Sixth from "../../app/home/page6";
import Seventh from "../../app/home/page7";
export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <>
            <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gray-100 text-black px-6 md:px-15">

                <div className="max-w-3xl" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Empowering Every Indian with <br />
                        Instant Loans
                    </h1>

                    <p className="text-lg md:text-xl mt-8 leading-relaxed text-black">
                        Get the funds you need with quick approvals,
                        <span className="text-red-600 font-semibold">
                            {" "}minimal paperwork, and fast disbursals.
                        </span>{" "}
                        Whether it’s a small expense or a big dream,
                        our hassle-free loan solutions are designed to fit your needs.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">

                        <Link href="/personal-loan">
                            <button className="bg-green-400 border rounded-xl py-3 font-semibold w-full hover:scale-105 duration-300">
                                <span className="blink-text">Personal Loan</span>
                            </button>
                        </Link>

                        <Link href="/business-loan">
                            <button className="bg-red-400 border rounded-xl py-3 font-semibold w-full hover:scale-105 duration-300">
                               <span className="blink-text">Business Loan</span>
                            </button>
                        </Link>

                        <Link href="/home-loan">
                            <button className="bg-yellow-400 border rounded-xl py-3 font-semibold w-full hover:scale-105 duration-300">
                              <span className="blink-text">Home Loan</span>
                            </button>
                        </Link>

                        <Link href="/gold-loan">
                            <button className="bg-blue-400 border rounded-xl py-3 font-semibold w-full hover:scale-105 duration-300">
                               <span className="blink-text">Gold loan</span>
                            </button>
                        </Link>

                    </div>
                </div>

                <div className="w-64 md:w-80 mt-10 md:mt-0" data-aos="zoom-in">
                    <Lottie animationData={loans} loop={true} />
                </div>
            </div>

            <div className="bg-gray-100 shadow-2xl  flex flex-wrap justify-center gap-4 p-6">

                <div className="w-64 h-60 bg-green-300 border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300" data-aos="fade-up">
                    <h1 className="text-black text-xl font-bold mb-3">
                        Your Trust Is Our Greatest Strength
                    </h1>
                    <p className="text-black text-sm">
                        We believe in you — no collateral,no security deposits,just simple and accessible credit.
                    </p>
                </div>

                <div className="w-64 h-60 bg-green-300 border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300" data-aos="fade-up" data-aos-delay="200">
                    <h1 className="text-black text-xl font-bold mb-3">
                        Fast Support, Anytime
                    </h1>
                    <p className="text-black text-sm">
                         stuck with something? Contact us at keshvacreit@gmail.com.quick responses reliable solutions!
                    </p>
                </div>

                <div className="w-64 h-60 bg-green-300 border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300" data-aos="fade-up" data-aos-delay="400">
                    <h1 className="text-black text-xl font-bold mb-3">
                        Unlimited Credit Access
                    </h1>
                    <p className="text-black text-sm">
                       Apply once with keshvcredit and enjoy instant cresit.withdrow nd use funds anytime,24/7, all year round.          </p>
                </div>

                <div className="w-64 h-60 bg-green-300 border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300" data-aos="fade-up" data-aos-delay="600">
                    <h1 className="text-black text-xl font-bold mb-3">
                        Safe & Secure
                    </h1>
                    <p className="text-black text-sm">
                        We uphold the highest data security standard, ensuring privacy with RBI-approved financial insitutions.
                    </p>
                </div>

            </div>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-2">

  <div className="flex flex-col md:flex-row items-center justify-center gap-18 max-w-6xl w-full">

    <div className="flex justify-center">
      <img
        src="/sell car.jpg"
        alt="sell car"
        className="w-80 h-80 object-cover rounded-3xl shadow-xl"
      />
    </div>

    <div className="text-center md:text-left max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
        Avail Instant Loans from ₹2,000 to ₹20 Lakhs
      </h1>

      <p className="mt-4 text-2xl font-semibold text-blue-600">
        Quick, Hassle-Free, and Secure 🚀
      </p>

      <p className="mt-6 text-lg text-gray-700">
        Financial freedom for every Indian.
      </p>
    </div>

  </div>

</div>

            <Second />
            <Third />
            <Forth />
            <Fifth />
            <EMICalculator />
            <Sixth/>  
            <Seventh/>         
        </>
    );
}