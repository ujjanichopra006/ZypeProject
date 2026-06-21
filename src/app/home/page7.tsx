"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BriefcaseBusiness, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Seventh() {
  const [activeTab, setActiveTab] = useState("professional");
  const router = useRouter();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // animation har scroll par chalega
      mirror: true, // scroll up par bhi animate hoga
      offset: 80,
    });
  }, []);

  // Refresh AOS when tab changes
  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  const professionalData = {
    title: "Quick Loans for Professionals",
    description:
      "As a working professional, managing personal expenses, home renovations, or urgent financial needs can be challenging. mPokket provides quick loan disbursements with fast approvals, flexible repayment options, and competitive interest rates.",
    image: "/loan Professionals.avif",
  };

  const selfEmployedData = {
    title: "Quick Loans for Self Employed",
    description:
      "Our loans are designed for freelancers, entrepreneurs, and business owners. Get working capital, manage cash flow, or meet personal needs with quick approvals, low interest rates, and flexible repayment plans.",
    image: "/self employe.jpg",
  };

  const data =
    activeTab === "professional"
      ? professionalData
      : selfEmployedData;

  return (
    <section
      className="bg-slate-900 py-6 px-3 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6" data-aos="fade-down">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Tailored Loan Solutions
          </h2>

          <p className="text-gray-200 mt-1 text-xs md:text-sm">
            Financial support designed for your unique needs
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center mb-6"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="bg-white rounded-full p-1 flex w-full max-w-md shadow-md">
            <button
              onClick={() => setActiveTab("professional")}
              className={`flex-1 py-2 text-xs rounded-full flex items-center justify-center gap-1 transition-all duration-300 ${
                activeTab === "professional"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              <BriefcaseBusiness size={14} />
              Working Professionals
            </button>

            <button
              onClick={() => setActiveTab("self")}
              className={`flex-1 py-2 text-xs rounded-full flex items-center justify-center gap-1 transition-all duration-300 ${
                activeTab === "self"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
            >
              <Rocket size={14} />
              Self Employed
            </button>
          </div>
        </div>

        {/* Card */}
        <div
          key={activeTab} // tab change par component remount hoga
          className="bg-white rounded-xl overflow-hidden shadow-lg grid lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Left Side */}
          <div
            className="p-4 lg:p-5"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-[#0A2342] mb-3">
              {data.title}
            </h3>

            <p className="text-gray-600 text-xs md:text-sm leading-6">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => router.push("/quickLinks")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xs font-medium transition"
              >
                Apply Now
              </button>

              <button
                onClick={() => router.push("/quickLinks")}
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-xs font-medium transition"
              >
                Learn More
              </button>
            </div>

            {/* Benefits */}
            <div
              className="border-t mt-5 pt-4"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <h4 className="font-bold text-black text-base mb-2">
                Key Benefits
              </h4>

              <div className="grid grid-cols-2 gap-2 text-xs text-black">
                <div>✓ Quick Approval</div>
                <div>✓ Low Interest Rates</div>
                <div>✓ Flexible Repayment</div>
                <div>✓ Minimal Documentation</div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="relative min-h-[220px] lg:min-h-[350px]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}