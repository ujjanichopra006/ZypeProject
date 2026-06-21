"use client";

import Image from "next/image";
import { User, Mail, Phone, MapPin } from "lucide-react";

const lenders = [
  {
    name: "Ram Fincorp",
    logo: "https://loans.ramfincorp.com/assets/logo-BpdDq2iL.png",
    officer: "Saourav Kumar",
    email: "info@ramfincorp.com",
    link: "mailto:info@ramfincorp.com",
  },
  {
    name: "zype",
    logo: "https://www.getzype.com/wp-content/uploads/2024/09/Zype_svg_black.svg",
    officer: "Vikas",
    email: "support@getzype.com",
    link: "mailto:support@getzype.com",
  },
  {
    name: "mPokket",
    logo: "https://web.mpokket.in/footer-revamp/fd4778f562d3177f3c72.svg",
    officer: "Ridham",
    email: "support@mpokket.com",
    link: "mailto:support@mpokket.com",
  },
  {
    name: "Olyv",
    logo: "/olyv.png",
    officer: "Moushumi Mukherjee",
    email: "grievance@smartcoin.co.in",
    link: "mailto:grievance@smartcoin.co.in",
  },
  {
    name: "TrustPaisa",
    logo: "https://static.trustpaisa.com/logos/full.svg",
    officer: "Sharath Kumar",
    email: "grievance@trustpaisa.com",
    link: "mailto:grievance@trustpaisa.com",
  },
  {
    name: "FDPL Finance Private Limited",
    logo: "https://www.fdplfinance.com/assets/images/logo/FatakLoans.svg",
    officer: "Ms. Anshika Gupta",
    email: "escalation@fdplfinance.com",
    link: "mailto:escalation@fdplfinance.com",
  },
  {
    name: "Moneyview",
    logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
    officer: "Rishov Bhattacharjee",
    email: "grievance@moneyview.in",
    phone: "080 6939 0476",
    address:
      "17/1, 1st and 2nd Floor, The Address Building, Outer Ring Road, Marathahalli, Kadubeesanahalli, Bangalore - 560103",
    link: "mailto:grievance@moneyview.in",
  },
];

export default function LenderGrievance() {
  return (
    <section className="min-h-screen bg-[#030d21] py-8 px-40">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Lender Grievance
          </h1>
          <p className="mt-1 text-sm text-gray-300">
            Direct contact for grievance resolution
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {lenders.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[290px] bg-[#f5f5f5] rounded-lg overflow-hidden border border-gray-200 shadow-md"
            >
              {/* Logo */}
              <div className="h-[65px] border-b border-gray-200 flex items-center justify-center px-3 py-2 bg-white">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={130}
                  height={35}
                  className="object-contain w-auto max-h-[35px]"
                />
              </div>

              {/* Card Content */}
              <div className="p-3">
                {/* Company Name */}
                <h2 className="text-[16px] font-semibold text-[#0b2242] text-center mb-4">
                  {item.name}
                </h2>

                {/* Officer */}
                <div className="flex items-start gap-2 mb-2.5">
                  <User
                    size={14}
                    className="text-gray-500 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[11px] text-gray-500">
                      Grievance Officer
                    </p>
                    <p className="text-[13px] text-[#1d2b4d]">
                      {item.officer}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2 mb-2.5">
                  <Mail
                    size={14}
                    className="text-gray-500 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[11px] text-gray-500">
                      Contact Email
                    </p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-[13px] text-blue-600 hover:underline break-all"
                    >
                      {item.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {item.phone && (
                  <div className="flex items-start gap-2 mb-2.5">
                    <Phone
                      size={14}
                      className="text-gray-500 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-[11px] text-gray-500">
                        Phone Number
                      </p>
                      <p className="text-[13px] text-[#1d2b4d]">
                        {item.phone}
                      </p>
                    </div>
                  </div>
                )}

                {/* Address */}
                {item.address && (
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin
                      size={14}
                      className="text-gray-500 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="text-[11px] text-gray-500">
                        Address
                      </p>
                      <p className="text-[12px] leading-4 text-[#1d2b4d]">
                        {item.address}
                      </p>
                    </div>
                  </div>
                )}

                {/* Button */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-md bg-[#dbe3ef] hover:bg-[#d2dce8] py-1.5 text-center text-[13px] font-medium text-blue-700 transition-all duration-200"
                >
                  Contact Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}