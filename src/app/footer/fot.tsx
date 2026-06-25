"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [showMoreLoans, setShowMoreLoans] = useState(false);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Delhi", "Ladakh", "Chandigarh"
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 mb-8">
          
          {/* Left Side - Brand */}
          <div className="max-w-[430px]">
            <Image
              src="/keshvacredit.png"
              alt="Keshva Credit"
              width={190}
              height={60}
              className="mb-5"
            />
            <p className="text-[14px] leading-7 text-gray-300">
              Discover smarter borrowing with our trusted loan aggregation
              platform. Instantly compare offers from leading NBFCs, enjoy
              competitive interest rates, and experience quick, hassle-free
              approvals — all backed by advanced data protection and complete
              transparency.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[15px] font-semibold mb-6">RESOURCES</h3>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li><Link href="/personal-loan" className="hover:text-white transition-colors">Personal Loan</Link></li>
              <li><Link href="/business-loan" className="hover:text-white transition-colors">Business Loan</Link></li>
              <li><Link href="/gold-loan" className="hover:text-white transition-colors">Gold Loan</Link></li>
              <li><Link href="/home-loan" className="hover:text-white transition-colors">Home Loan</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[15px] font-semibold mb-6">FOLLOW US</h3>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li><a href="https://www.linkedin.com/company/keshvacredit/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/people/KeshvaCredit-Loans/61575907491609/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://www.instagram.com/keshva_credit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="https://www.youtube.com/@keshvacredit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://x.com/KeshvaCredit?s=09" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[15px] font-semibold mb-6">LEGAL</h3>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li><Link href="/PrivacyPolicy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/DataPolicy" className="hover:text-white transition-colors">Data Policy</Link></li>
              <li><Link href="/Lenderscontact" className="hover:text-white transition-colors">Lender Contacts</Link></li>
              <li><Link href="/LenderGrievances" className="hover:text-white transition-colors">Lender Grievances</Link></li>
              <li><Link href="/DeleteAccount" className="hover:text-white transition-colors">Delete My Account</Link></li>
              <li><Link href="/TermsConditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="text-[15px] font-semibold mb-6">OTHER</h3>
            <ul className="space-y-3 text-[14px] text-gray-300">
              <li><Link href="/Ourblogs" className="hover:text-white transition-colors">Our Blogs</Link></li>
              <li><Link href="/partner" className="hover:text-white transition-colors">Register as Partner</Link></li>
              <li><Link href="/Contact" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><Link href="/FAQ" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/emicalculators" className="hover:text-white transition-colors">EMIcalculators</Link></li>
              <li><Link href="https://sachet.rbi.org.in//" className="hover:text-white transition-colors">RBI sachet</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-[14px] text-gray-400 mb-2">
          © 2026 Keshvacredit Services Private Limited. All Rights Reserved - CIN: U70200HR2025PTC129612
        </div>

        {/* Click for more loan options - Dropdown Toggle */}
        <div className="text-center mb-6">
          <button 
            onClick={() => setShowMoreLoans(!showMoreLoans)}
            className="text-white text-[14px] font-medium hover:text-gray-300 transition-colors cursor-pointer"
          >
            Click for more loan option's {showMoreLoans ? '▲' : '▼'}
          </button>
        </div>

        {/* State-wise Personal Loan Links - Dropdown */}
       {/* State-wise Personal Loan Links - Dropdown */}
{showMoreLoans && (
  <div className="text-center text-[13px] text-gray-400 space-y-2 mb-6 animate-fadeIn">
    {indianStates.map((state, index) => (
      <span key={state}>
        {index > 0 && <span className="mx-1">||</span>}
        <Link 
          href={`/loan/${state.toLowerCase().replace(/\s+/g, '-')}`} 
          className="hover:text-white transition-colors mx-1"
        >
          Personal Loan in {state}
        </Link>
      </span>
    ))}
  </div>
)}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </footer>
  );
}