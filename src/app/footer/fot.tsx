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
             <a href="/"><span>X</span></a>
          <a href="/"> <span>▶</span></a>
            <a href="/"><span>f</span></a>
            <a href="/"><span>📷</span></a>
            <a href="/"><span>in</span></a>
          </div>
          <p>https://keshvacredit.com/</p>
          <p>080654 20207</p>
          <h1>TIMEING=</h1>
          <p>Mon-sat, 9;00 AM-5;00 PM</p>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Home</h2>
          <ul className="space-y-2">
           <a href="/"> <li>About Us</li> </a>
            <a href="/"><li>Personal Loan</li></a>
            <a href="/"><li>Spend Analyser</li></a>
            <a href="/"><li>Bill Payments</li></a>
           <a href="/"><li>Blogs</li></a>
            <a href="/"><li>Sitemap</li></a>
           <a href="/"> <li>Careers</li></a>
            <a href="/"><li>Contact Us</li></a>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
           <a href="/"> <li>Media Partners</li></a>
            <a href="/"><li>Sourcing Partners</li></a>
          </ul>
        </div>
        <div>
          <h2 className="text-white font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
           <a href="/"> <li>Product Terms</li></a>
           <a href="/"> <li>Privacy Policy</li></a>
           <a href="/"> <li>Terms and Conditions</li></a>
            <a href="/"><li>Grievance Redressal</li></a>
            <a href="/"><li>Customer Data Policy</li></a>
            <a href="/"><li>Other Policies</li></a>
          </ul>
        </div>

      </div>
    </footer>
  );
}