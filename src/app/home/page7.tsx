"use client";

import { useState } from "react";
import Image from "next/image";
import { BriefcaseBusiness, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Seventh() {
  const [activeTab, setActiveTab] = useState("professional");
  const router = useRouter();

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
    <section className="bg-[#02112D] py-6 px-3">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Tailored Loan Solutions
          </h2>

          <p className="text-gray-300 mt-1 text-xs md:text-sm">
            Financial support designed for your unique needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-1 flex w-full max-w-md shadow-md">
            <button
              onClick={() => setActiveTab("professional")}
              className={`flex-1 py-2 text-xs rounded-full flex items-center justify-center gap-1 transition-all ${
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
              className={`flex-1 py-2 text-xs rounded-full flex items-center justify-center gap-1 transition-all ${
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
        <div className="bg-white rounded-xl overflow-hidden shadow-lg grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="p-4 lg:p-5">
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
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-xs font-medium transition">
                Learn More
              </button>
            </div>

            {/* Benefits */}
            <div className="border-t mt-5 pt-4">
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
          <div className="relative min-h-[220px] lg:min-h-[350px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}