"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type OtpPopupProps = {
  onClose: () => void;
  onVerified?: () => void;
};

export default function OtpPopup({ onClose, onVerified }: OtpPopupProps) {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    const cleanPhone = phone.trim();

    if (cleanPhone.length !== 10) {
      setToast("Enter valid 10 digit number");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://keshvacredit.onrender.com/api/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: cleanPhone }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setToast("OTP sent successfully!");
        setOtpSent(true);
      } else {
        setToast(data.message || "Failed to send OTP");
      }
    } catch {
      setToast("Network Error");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      setToast("Enter valid OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://keshvacredit.onrender.com/api/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setToast("OTP Verified Successfully");

        // ✅ FIX: store phone properly
        localStorage.setItem("phone", phone);

        // sync navbar
        window.dispatchEvent(new Event("authChange"));

        setTimeout(() => {
          onVerified?.();
        }, 800);
      } else {
        setToast(data.message || "Invalid OTP");
      }
    } catch {
      setToast("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="w-[400px] p-6 rounded-2xl bg-white relative text-black">

        <button onClick={onClose} className="absolute top-3 right-3">
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4">Login with OTP</h2>

        {!otpSent ? (
          <>
            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              maxLength={10}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter mobile number"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full bg-green-500 text-white p-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, ""))
              }
              maxLength={6}
              className="w-full p-2 border rounded mb-4"
              placeholder="Enter OTP"
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </>
        )}

        {toast && (
          <p className="text-center text-sm text-blue-600 mt-3">
            {toast}
          </p>
        )}
      </div>
    </div>
  );
}