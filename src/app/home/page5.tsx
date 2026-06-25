"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Fifth() {
  useEffect(() => {
    AOS.refresh(); // Component render hone ke baad AOS refresh
  }, []);

  const loanCards = [
    {
      image: "/personal loan",
      alt: "Personal Loan",
      title: "Personal Loan",
      description:
        "Get instant personal loans with KeshvaCredit at competitive rates. Minimal docs, quick approval & RBI-regulated partners.",
    },
    {
      image: "/home loan",
      alt: "Home Loan",
      title: "Home Loan",
      description:
        "Affordable home loans at competitive interest rates with quick approval and flexible options.",
    },
    {
      image: "/credit loan",
      alt: "Credit Card",
      title: "Credit Card",
      description:
        "Borrow up to your limit for purchases or bills with flexible repayment options.",
    },
    {
      image: "/business loan",
      alt: "Business Loan",
      title: "Business Loan",
      description:
        "Grow your business with easy financing, low interest rates, and quick approvals.",
    },
  ];

  return (
    <section className="bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-5">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content */}
          <div
            className="w-full lg:w-1/3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="bg-teal-600 p-6 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-3xl font-bold text-black mb-5">
                Instant Funds,
                <br />
                Endless Possibilities
              </h2>

              <p className="text-black leading-7">
                Get quick access to funds whenever you need them! Fast
                approvals, hassle-free processing, and secure transactions make
                fulfilling your financial needs easier than ever.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div
            className="w-full lg:w-2/3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {loanCards.map((card, index) => (
                <div
                  key={index}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1000"
                  className="bg-teal-600 rounded-2xl p-3 shadow-lg flex items-center gap-4 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image bilkul same rakhi hai */}
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-15 h-15 object-cover rounded-xl shrink-0 hover:scale-105 transition-transform duration-300"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-black leading-6">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}