"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function OtpPopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

    
      <div className="w-[400px] rounded-3xl p-6 bg-gradient-to-br from-green-300 to-green-500 relative shadow-xl">

     
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X size={28} />
        </button>

       
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">
          Login with OTP
        </h2>

       
        <input
          type="bg-purple-300 text-white"
          placeholder="Enter mobile number"
          className="w-full p-3 rounded-lg bg-black outline-none mb-4"
        />

        
        <div className="flex items-start gap-2 mb-6">
          <input type="checkbox" className="mt-1" />
          <p className="text-sm text-black">
            I agree to be contacted via Email, WhatsApp, SMS, or Call.
          </p>
        </div>

        <button

          className="w-full py-3 rounded-lg bg-green-200 text-green-800 font-semibold opacity-70 cursor-not-allowed">
          Send OTP
        </button>
      </div>
    </div>
  );
}