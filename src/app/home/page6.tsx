"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Users,
  BadgeCheck,
  FileText,
  DollarSign,
  HandCoins,
  Clock3,
} from "lucide-react";

export default function Sixth() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  const cards = [
    {
      icon: <Users className="text-white w-6 h-6" />,
      title: "Happy Customers",
      description:
        "Trusted by over five lakh users! Enjoy smooth, secure service and great financial rewards.",
    },
    {
      icon: <BadgeCheck className="text-white w-6 h-6" />,
      title: "Instant Approval",
      description:
        "Get online loan approval in just 48 hours with minimum paperwork and fast fund access.",
    },
    {
      icon: <FileText className="text-white w-6 h-6" />,
      title: "100% Paperless",
      description:
        "Apply entirely online — quick, safe, and hassle-free from the comfort of your home.",
    },
    {
      icon: <DollarSign className="text-white w-6 h-6" />,
      title: "No Hidden Charges",
      description:
        "Enjoy complete transparency with no surprise fees or hidden costs.",
    },
    {
      icon: <HandCoins className="text-white w-6 h-6" />,
      title: "Loans Disbursed",
      description:
        "Over ₹1000 crore disbursed swiftly with secure and simple approvals.",
    },
    {
      icon: <Clock3 className="text-white w-6 h-6" />,
      title: "Flexible Loan Options",
      description:
        "Choose loans from ₹1,000 to ₹1,00,000 with flexible repayment terms from 3 to 24 months.",
    },
  ];

  return (
    <section className="bg-slate-900 py-14 overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-10">
        {/* Top Line */}
        <div
          className="flex items-center mb-14"
          data-aos="fade-down"
        >
          <div className="flex-1 h-px bg-gray-500"></div>

          <h2 className="px-6 text-yellow-300 text-xl md:text-2xl font-medium whitespace-nowrap">
            ॐ KeshvaCredit ॐ
          </h2>

          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-14 lg:gap-16 items-center">
          {/* Left Mobile Image */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <img
              src="/mobile application.png"
              alt="Mobile Application"
              className="w-[230px] md:w-[280px] hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
                className="bg-[#11a5a8] rounded-3xl border border-white p-7 min-h-[210px] flex flex-col items-center text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-black mt-4">
                  {card.title}
                </h3>

                <p className="text-gray-800 text-sm leading-6 mt-3">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}