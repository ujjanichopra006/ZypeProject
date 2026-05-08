"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import loans from "../../animations/loans.json";

import AOS from "aos";
import "aos/dist/aos.css";
import Second from "../../app/home/page2";
import Third from "../../app/home/page3";
export default function Home() {



    useEffect(() => {

        AOS.init({
            duration: 1500,

        });

    });

    return (
        <>

            <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gray-100 text-black px-6 md:px-15">

                <div
                    className="max-w-3xl"
                    data-aos="fade-right"
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">

                        Empowering Every Indian with <br />
                        Instant Loans

                    </h1>

                    <p className="text-lg md:text-xl mt-8 leading-relaxed text-black">
                        Get the funds you need with quick approvals,
                        <span className="text-red-600 font-semibold">
                            {" "}
                            minimal paperwork, and fast disbursals.
                        </span>

                        {" "}Whether it’s a small expense or a big dream,
                        our hassle-free loan solutions are designed
                        to fit your needs.

                        We are innovators, problem solvers,
                        and trusted partners making borrowing simple.

                    </p>

                </div>
 
           <div
                    className="w-64 h-100 md:w-80"
                    data-aos="zoom-in"
                >

                    <Lottie animationData={loans} loop={true} />

                </div>
 
            </div>
            <div className="bg-gray-100 shadow-2xl py-15 shadow-gray-800 flex flex-wrap justify-center gap-4 p-6">
                 <div
                    className="w-64 h-60 bg-white border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300"
                    data-aos="fade-up"
                >

                    <h1 className="text-black text-xl font-bold mb-3">
                        Your Trust Is Our Greatest Strength
                    </h1>

                    <p className="text-black text-sm leading-relaxed">
                        We believe in you — no collateral, no security deposits,
                        just simple and accessible credit.
                    </p>

                </div>



                <div
                    className="w-64 h-60 bg-white border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >

                    <h1 className="text-black text-xl font-bold mb-3">
                        Fast Support, Anytime
                    </h1>

                    <p className="text-black text-sm leading-relaxed">
                        Stuck with something? Contact us at
                        keshvacredit@gmail.com for quick responses.
                    </p>

                </div>



                <div
                    className="w-64 h-60 bg-white border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >

                    <h1 className="text-black text-xl font-bold mb-3">
                        Unlimited Credit Access
                    </h1>

                    <p className="text-black text-sm leading-relaxed">
                        Apply once with KeshvaCredit and enjoy instant
                        credit withdrawal and fund usage anytime.
                    </p>

                </div>



                <div
                    className="w-64 h-60 bg-white border rounded-xl shadow-lg p-4 flex flex-col justify-center hover:scale-105 duration-300"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >

                    <h1 className="text-black text-xl font-bold mb-3">
                        Safe, Secure & Trusted
                    </h1>

                    <p className="text-black text-sm leading-relaxed">
                        We uphold the highest data security standards,
                        ensuring privacy with RBI-approved institutions.
                    </p>

                </div>

            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gray-100 text-black px-6 md:px-10 py-10">


                <div
                    className="max-w-3xl"
                    data-aos="fade-right"
                >

                    <h1 className="text-xl md:text-2xl font-semibold leading-tight">

                        Avail Instant Loans from ₹2,000 to ₹20 Lakhs

                        <br />

                        <span className="text-blue-600">
                            Quick, Hassle-Free, and Secure 🚀
                        </span>

                    </h1>

                    <p className="text-lg md:text-xl text-black mt-6 leading-relaxed">

                        With KeshvaCredit, achieve your financial goals.
                        We’re on a mission to ensure financial inclusion
                        for every Indian!

                    </p>

                </div>



                <div
                    className="mt-10 md:mt-0 flex justify-center"
                    data-aos="flip-up"
                >

                    <img
                        src="/sell car.jpg"
                        alt="sell car"
                        className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg"
                    />

                </div>

            </div>
            <Second />
            <Third />
        </>
    );
}