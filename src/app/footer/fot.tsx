"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-black text-white py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr_1fr] gap-10">

          {/* Left Side */}
          <div className="max-w-[430px]">
            {/* Replace /logo.png with your actual logo */}
            <Image
              src="/keshvacredit"
              alt="Keshva Credit"
              width={190}
              height={60}
              className="mb-5"
            />

            <p className="text-[14px] leading-8 text-gray-300">
              Discover smarter borrowing with our trusted loan aggregation
              platform. Instantly compare offers from leading NBFCs, enjoy
              competitive interest rates, and experience quick, hassle-free
              approvals — all backed by advanced data protection and complete
              transparency.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase underline underline-offset-4 mb-7">
              Resources
            </h3>

            <ul className="space-y-4 text-[14px] text-gray-300">
              <li>
                <Link href="/personal-loan" className="hover:text-white duration-200">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link href="/business-loan" className="hover:text-white duration-200">
                  Business Loan
                </Link>
              </li>
              <li>
                <Link href="/gold-loan" className="hover:text-white duration-200">
                  Gold Loan
                </Link>
              </li>
              <li>
                <Link href="/home-loan" className="hover:text-white duration-200">
                  Home Loan
                </Link>
              </li>
            </ul>
          </div>
{/* Follow Us */}
<div>
  <h3 className="text-[15px] font-semibold uppercase underline underline-offset-4 mb-7">
    Follow Us
  </h3>

  <ul className="space-y-4 text-[14px] text-gray-300">
    <li>
      <a
        href="https://www.linkedin.com/company/keshvacredit/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white duration-200"
      >
        LinkedIn
      </a>
    </li>

    <li>
     <a
  href="https://www.facebook.com/people/KeshvaCredit-Loans/61575907491609/?rdid=myZYbNHKLeOYaJRD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ATVmsgGNK%2F"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white duration-200"
>
  Facebook
</a>
    </li>

    <li>
      <a
  href="https://www.instagram.com/keshva_credit"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white duration-200"
>
  Instagram
</a>
    </li>

    <li>
      <a
        href="https://www.whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white duration-200"
      >
        WhatsApp
      </a>
    </li>

    <li>
      <a
        href="https://www.youtube.com/@keshvacredit"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white duration-200"
      >
        YouTube
      </a>
    </li>

    <li>
      <a
        href="https://x.com/KeshvaCredit?s=09"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white duration-200"
      >
        X (Twitter)
      </a>
    </li>
  </ul>
</div>

          {/* Legal */}
          <div>
  <h3 className="text-[15px] font-semibold uppercase underline underline-offset-4 mb-7">
    Legal
  </h3>

  <ul className="space-y-4 text-[14px] text-gray-300">
    <li>
      <Link
        href="/PrivacyPolicy"
        className="hover:text-white duration-200"
      >
        Privacy Policy
      </Link>
    </li>

    <li>
      <Link
        href="/DataPolicy"
        className="hover:text-white duration-200"
      >
        Data Policy
      </Link>
    </li>

    <li>
      <Link
        href="/Lenderscontact"
        className="hover:text-white duration-200"
      >
        Lender contacts
      </Link>
    </li>

    <li>
      <Link
        href="/LenderGrievances"
        className="hover:text-white duration-200"
      >
        Lender Grievances
      </Link>
    </li>

    <li>
      <Link
        href="/DeleteAccount"
        className="hover:text-white duration-200"
      >
        Delete My Account
      </Link>
    </li>

    <li>
      <Link
        href="/TermsConditions"
        className="hover:text-white duration-200"
      >
        Terms Conditions 
      </Link>
    </li>
  </ul>
</div>

          {/* Other */}
          <div>
            <h3 className="text-[15px] font-semibold uppercase underline underline-offset-4 mb-7">
              Other
            </h3>

            <ul className="space-y-4 text-[14px] text-gray-300">
              <li>
                <Link href="/Ourblogs" 
                className="hover:text-white duration-200">
                  Our blogs
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-white duration-200">
                  Register as Partner
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white duration-200">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white duration-200">
                  RBI Sachet
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}