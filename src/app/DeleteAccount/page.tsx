"use client";

import { useState } from "react";

export default function DeleteAccount() {
  // First popup opens directly
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    if (!email.trim() || !phone.trim()) {
      alert("Please fill in both Email and Phone Number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/deleteuser/delete-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            phone,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          data.message || "Your account deletion request has been submitted."
        );

        setEmail("");
        setPhone("");
        setShowConfirmModal(false);
        setShowInfoModal(true);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Delete API Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* First Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#071327] px-4 py-6">
          <div className="w-full max-w-lg rounded-3xl border-2 border-emerald-400 bg-[#06142b] p-5 md:p-6 text-white shadow-2xl">
            <p className="text-[14px] md:text-[16px] leading-6 md:leading-7">
              You can request the deletion of your information from{" "}
              <span className="font-bold">KeshvaCredit</span> at any stage.
              This data retention and deletion policy is in line with the
              applicable laws and guidelines of the RBI.
            </p>

            <p className="mt-5 text-[14px] md:text-[16px] font-medium">
              You have two ways to request account deletion:
            </p>

            <ul className="mt-4 list-disc pl-5 space-y-2 text-[13px] md:text-[15px] leading-6">
              <li>
                Send an email to our customer support team at{" "}
                <span className="font-semibold text-blue-400">
                  keshvacredit@gmail.com
                </span>{" "}
                from your registered email address with the subject{" "}
                <span className="italic font-medium">
                  "Delete my account"
                </span>
                . Please also mention your registered mobile number.
              </li>

              <li>
                Or, you can directly submit a deletion request by clicking the{" "}
                <span className="font-semibold">Delete My Account</span> button
                below.
              </li>
            </ul>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  setShowInfoModal(false);
                  setShowConfirmModal(true);
                }}
                className="rounded-2xl bg-red-600 px-7 py-2.5 text-sm md:text-base font-bold text-white transition-all duration-300 hover:bg-red-700"
              >
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div
            className="w-full max-w-sm rounded-3xl bg-[#ececec] p-5 md:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-6 text-center text-xl md:text-2xl font-bold text-red-600">
              Confirm Account Deletion
            </h2>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-yellow-400 bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-yellow-400 bg-white px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  setShowInfoModal(true);
                  setEmail("");
                  setPhone("");
                }}
                disabled={loading}
                className="flex-1 rounded-xl bg-gray-400 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-500"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDelete}
                disabled={loading}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 ${
                  loading
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {loading ? "Submitting..." : "Confirm & Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}