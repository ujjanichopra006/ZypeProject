"use client";

import Image from "next/image";
import Link from "next/link";

export default function EmiCalculators() {
  const cards = [
    {
      title: "Personal Loan Calculator",
      desc: "Instantly calculate EMI and plan your personal loan get clear monthly breakdown so you always know exectly what you need to pay.",
      image: "/personal icon.png",
      link: "/emicalculators/personalloancalculator",
    },
    {
      title: "Home Loan Calculator",
      desc: "Plan your dream home with accurate EMI breakdown and interest details understand your monthly payment before you take any loan decision.",
      image: "/home icon.png",
      link: "/emicalculators/homeloancalculator",
    },
    {
      title: "Business Loan Calculator",
      desc: "Smart EMI planning for your business growth and investments track your monthly payments easily and keep your cash flow stable.",
      image: "/business icon.png",
      link: "/emicalculators/businessloancalculator",
    },
    {
      title: "Gold Loan Calculator",
      desc: "Manage your gold loan EMI with simple and accurate calculations get a clear breakdown of monthly payments, interest, and total repayment.",
      image: "/gold icon.png",
      link: "/emicalculators/goldloancalculator",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#03112b] via-[#050b1a] to-[#020817] py-14 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 tracking-wide">
          EMI Calculators
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group w-full max-w-[280px] h-[280px] mx-auto bg-white rounded-2xl shadow-md 
              p-5 flex flex-col justify-between border border-gray-100
              hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* TOP ICON */}
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <h2 className="text-[16px] font-bold text-[#0b1b3a] leading-snug">
                  {card.title}
                </h2>

              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-xs leading-5 mt-3 flex-1">
                {card.desc}
              </p>

              {/* BUTTON */}
              <Link href={card.link}>
                <button className="w-full bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl
                hover:bg-blue-700 active:scale-95 transition-all duration-300">
                  Check Now
                </button>
              </Link>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}