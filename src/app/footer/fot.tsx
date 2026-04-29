"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-black text-gray-300 px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-4 gap-10">
    
        <div>
          <h1 className="text-2xl font-bold text-white mb-6">KC</h1>
          <div className="flex gap-4 mb-6">
            <button className="border px-4 py-2 rounded-lg text-sm">
              Google Play
            </button>
            <button className="border px-4 py-2 rounded-lg text-sm">
              App Store
            </button>
          </div>
          <p className="mb-2">Follow Us:</p>
          <div className="flex gap-4 text-xl mb-6">
            <span>X</span>
            <span>▶</span>
            <span>f</span>
            <span>📷</span>
            <span>in</span>
          </div>
          <p>https://keshvacredit.com/</p>
          <p>080654 20207</p>
          <h1>TIMEING=</h1>
          <p>Mon-sat, 9;00 AM-5;00 PM</p>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Home</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Personal Loan</li>
            <li>Spend Analyser</li>
            <li>Bill Payments</li>
            <li>Blogs</li>
            <li>Sitemap</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>Media Partners</li>
            <li>Sourcing Partners</li>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>Product Terms</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Grievance Redressal</li>
            <li>Customer Data Policy</li>
            <li>Other Policies</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}