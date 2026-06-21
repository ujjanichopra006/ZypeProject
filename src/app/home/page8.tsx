"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  Star,
  Users,
  Handshake,
  Landmark,
  Clock3,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    id: 1,
    title: "Fill Basic Details",
    desc: "Provide your personal and financial details to help us find the best loan options.",
    img: "/fill details.png",
  },
  {
    id: 2,
    title: "Choose an Offer",
    desc: "Browse through loan offers and select the one that fits your requirements.",
    img: "/an offer.png",
  },
  {
    id: 3,
    title: "Get Instant Approval",
    desc: "Submit your documents online and receive money directly in your bank account.",
    img: "/approval.png",
  },
];

const testimonials = [
  {
    name: "Simran Kaur",
    letter: "S",
    text: "Instant loan approval and timely disbursement. Transparent process and professional support team.",
  },
  {
    name: "Vikas Jha",
    letter: "V",
    text: "Very happy with their service. The loan process was simple and completely hassle-free from start to finish.",
  },
  {
    name: "Ananya Gupta",
    letter: "A",
    text: "Clear instructions, minimal paperwork, and professional guidance. Loan was credited within the same day.",
  },
  {
    name: "Parveen Chouhan",
    letter: "P",
    text: "Loan disbursement in less than 24 hours is not what I had expected but this is amazing. Thank you very much, KeshvaCredit team.",
  },
  {
    name: "Pardeep 80B",
    letter: "P",
    text: "Highly satisfied with overall loan disbursement experience. Haven't seen any platform giving so many choices to cater to financial needs. Highly recommended!",
  },
  {
    name: "Aryan Verma",
    letter: "A",
    text: "The process was smooth and quick. Minimal paperwork and clear instructions made it hassle-free.",
  },
];

const stats = [
  {
    icon: <Users size={26} className="text-blue-600" />,
    value: "60,000+",
    title: "Happy Customers",
    color: "text-blue-600",
  },
  {
    icon: <Handshake size={26} className="text-purple-600" />,
    value: "50+",
    title: "Relationships",
    color: "text-purple-600",
  },
  {
    icon: <Landmark size={26} className="text-green-600" />,
    value: "30+",
    title: "Partner NBFCs",
    color: "text-green-600",
  },
  {
    icon: <Clock3 size={26} className="text-orange-500" />,
    value: "Under 24h",
    title: "Fast Disbursement",
    color: "text-orange-500",
  },
];

export default function Eighth() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Har scroll par animation chalega
      mirror: true, // Scroll up par bhi animate hoga
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="bg-slate-900 text-white py-8 overflow-hidden">
      <div className="max-w-4xl mx-auto px-3">
        {/* ---------------- How It Works ---------------- */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-xl text-white md:text-2xl font-bold">
            How It Works
          </h2>

          <p className="text-xs md:text-sm text-gray-200 mt-1">
            Get your loan in just 3 simple steps.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="relative mt-5 hidden lg:block"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="absolute top-3 left-0 w-full h-[2px] bg-blue-500 rounded-full"></div>

          <div className="flex justify-between relative z-10">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold"
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Step Cards */}
        <div className="grid lg:grid-cols-3 text-black gap-3 mt-5">
          {steps.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#4ca77f] border border-yellow-400 rounded-lg p-3 text-center shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              <h3 className="text-base font-bold text-black">
                {item.title}
              </h3>

              <p className="text-black text-xs mt-2 leading-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ---------------- Testimonials ---------------- */}
        <div
          className="mt-10 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="animate-testimonials flex gap-3">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[220px] shrink-0 border border-gray-500 rounded-xl p-3 bg-transparent"
              >
                <div className="flex gap-1 mb-3 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="text-sm leading-5 text-gray-200 min-h-[85px]">
                  {item.text}
                </p>

                <div className="border-t border-gray-500 mt-3 pt-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs font-bold text-black">
                    {item.letter}
                  </div>

                  <h4 className="text-sm font-semibold">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- Statistics ---------------- */}
        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-xl md:text-2xl font-bold">
            Our <span className="text-blue-500">Impressive</span> Statistics
          </h2>

          <p className="text-xs md:text-sm text-gray-200 mt-1">
            Trusted by thousands, delivering excellence every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-xl p-3 min-h-[180px] flex flex-col justify-between hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                {item.icon}
              </div>

              <div>
                <h3 className={`text-xl font-bold ${item.color}`}>
                  {item.value}
                </h3>

                <p className="text-gray-700 text-xs mt-1">
                  {item.title}
                </p>
              </div>

              <div className="w-10 h-1 rounded-full bg-orange-300 mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}