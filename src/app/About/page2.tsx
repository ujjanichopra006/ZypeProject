"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>

      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">

          <h2
            className="text-4xl font-bold text-center text-black mb-4"
            data-aos="fade-up"
          >
            Our Loan Partners
          </h2>

          <p
            className="text-lg text-center text-gray-600 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We work with partners who believe in “quality over quantity” and
            strive for excellence.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

            <div className="flex items-center justify-center p-4" data-aos="zoom-in">
              <Image src="/Zype.png" alt="Zype" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="100">
              <Image src="/Moneyview.jpg" alt="MoneyView" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="200">
              <Image src="/Ramfin.png" alt="Ramfin" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="300">
              <Image src="/Fatakpay.jpg" alt="FatakPay" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="zoom-in" data-aos-delay="400">
              <Image src="/olyv.png" alt="Olyv" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/trustpaisa.png" alt="trustPaisa" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="100">
              <Image src="/CreditSea.png" alt="CreditSea" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="200">
              <Image src="/payme.png" alt="Payme" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up" data-aos-delay="300">
              <Image src="/capitalnow.png" alt="Capitalnow" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/bajaj housing.jpg" alt="Bajaj Housing" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/faircent.png" alt="Faircent" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/protium.png" alt="Protium" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/Muthoot fincorp.png" alt="Muthoot Fincorp" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/branch.webp" alt="Branch" width={100} height={70} />
            </div>

            <div className="flex items-center justify-center p-4" data-aos="fade-up">
              <Image src="/kamakshi money.png" alt="Kamakshi Money" width={100} height={70} />
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white">

        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-black">
            How It Works
          </h2>
          <p className="text-gray-600 mt-4">
            Our simple three-step process gets you from application to approval—fast.
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

          {/* CARD 1 */}
          <div
            className="text-center border border-gray-400 rounded-xl p-6 hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <img
              src="/select loan.png"
              alt="Select Loan"
              className="w-60 h-40 object-cover rounded-lg mx-auto"
              data-aos="zoom-in"
            />
            <h3 className="mt-4 text-xl text-black font-semibold">Select Loan</h3>
            <p className="text-gray-600 mt-2">
              Your Dream Loan is Just a Click Away. Compare & Conquer.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="text-center border border-gray-400 rounded-xl p-6 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img
              src="/instant approval.jpg"
              alt="Instant Approval"
              className="w-60 h-40 object-cover rounded-lg mx-auto"
              data-aos="zoom-in"
              data-aos-delay="150"
            />
            <h3 className="mt-4 text-xl text-black font-semibold">Instant Approval</h3>
            <p className="text-gray-600 mt-2">
              Apply online and get instant approval from lenders.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="text-center border border-gray-400 rounded-xl p-6 hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="/receive funds.jpg"
              alt="Receive Funds"
              className="w-60 h-40 object-cover rounded-lg mx-auto"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
            <h3 className="mt-4 text-xl text-black font-semibold">Receive Funds</h3>
            <p className="text-gray-600 mt-2">
              Funds disbursed to your account quickly and securely.
            </p>
          </div>

        </div>
      </section>

    <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">

      <div className="absolute inset-0 bg-emerald-500">

        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "/whole image.avif",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-3xl px-4">

        <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full text-sm mb-6 shadow-md">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs">
            New
          </span>
          <span className="text-black">
            Any Query? Contact us. We’re here 24/7 →
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Empowering Dreams, Financing the Future
        </h1>

        {/* Paragraph */}
        <p className="mt-4 text-black/80 text-base md:text-lg">
          At KeshvaCredit, we connect borrowers with the right lenders, using
          technology and innovation to unlock financial opportunities and growth.
        </p>

      </div>
    </section>
    </>
  );
}                                  