"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";

export default function BusinessLoanForm() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const [showOtp, setShowOtp] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  // STEP 1
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
  // STEP 2
  const [panNumber, setPanNumber] = useState("");
  const [dob, setDob] = useState("");
  const [businessPan, setBusinessPan] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessAge, setBusinessAge] = useState("");
  const [income, setIncome] = useState("");
  const [businessLocation, setBusinessLocation] = useState("");
  const [udyamNumber, setUdyamNumber] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [msmeNumber, setMsmeNumber] = useState("");

  useEffect(() => {
    const phone = localStorage.getItem("phone");

    if (phone) {
      setIsVerified(true);
      setShowOtp(false);
      setMobile(phone);
    } else {
      setShowOtp(true);
    }
  }, []);

  const handleFinalSubmit = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/business/createbusinessman",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            business_owner_name: fullName,
            business_owner_email: email,
            business_owner_phone: Number(mobile),

            business_owner_pan: panNumber,
            business_ower_dob: dob,

            business_pan: businessPan,
            business_name: businessName,
            business_type: businessType,

            business_age: Number(businessAge),
            business_location: businessLocation,

            business_loan_purpose: "Business Loan",
            business_loan_amount: Number(loanAmount),

            annual_revenue: Number(income),

            Udyam_Registration_Number: udyamNumber,
            gst_number: gstNumber,
            msme_registration_number: msmeNumber,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Application Submitted Successfully");
        router.push("/quickLinks");
      } else {
        alert(data.message || "Submission Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };
return (
  <>
    {showOtp && (
      <OtpPopup
        onClose={() => router.push("/")}
        onVerified={() => {
          const savedPhone = localStorage.getItem("phone");
          setMobile(savedPhone || "");
          setShowOtp(false);
          setIsVerified(true);
        }}
      />
    )}

    {isVerified && (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl mx-auto bg-[#07152d] rounded-2xl p-8 text-white">
          
          <h1 className="text-center text-4xl font-bold py-6">
            Business Loans starting at 10.25%* Interest Rates
          </h1>

          {/* Stepper */}
          <div className="mb-10">
            <div className="relative max-w-xl mx-auto flex items-center justify-between">
              
              <div className="absolute top-5 left-0 right-0 border-t-2 border-dashed border-gray-500"></div>

              <div
                onClick={() => setStep(1)}
                className="relative z-10 flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                    step === 1
                      ? "bg-white text-blue-600 border-blue-600"
                      : "bg-gray-300 text-gray-700 border-gray-400"
                  }`}
                >
                  1
                </div>

                <span
                  className={`mt-2 font-semibold ${
                    step === 1 ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  Basic Details
                </span>
              </div>

              <div
                onClick={() => setStep(2)}
                className="relative z-10 flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                    step === 2
                      ? "bg-white text-blue-600 border-blue-600"
                      : "bg-gray-300 text-gray-700 border-gray-400"
                  }`}
                >
                  2
                </div>

                <span
                  className={`mt-2 font-semibold ${
                    step === 2 ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  Additional Details
                </span>
              </div>
            </div>
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Business Owner Name*"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="amount"
                placeholder="Loan Amount*"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />
                 <input
                type="phone"
                placeholder="business owner phone*"
                value={mobile}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <button
                onClick={() => setStep(2)}
                className="w-full h-14 rounded-lg bg-blue-600 hover:bg-blue-700 font-bold"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <input
                type="text"
                placeholder="PAN Number*"
                value={panNumber}
                onChange={(e) => setPanNumber(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="Business PAN*"
                value={businessPan}
                onChange={(e) => setBusinessPan(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="Business Name*"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="Business Type"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="Business Age"
                value={businessAge}
                onChange={(e) => setBusinessAge(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="number"
                placeholder="Annual Income"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="Business Location"
                value={businessLocation}
                onChange={(e) => setBusinessLocation(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="Udyam Number"
                value={udyamNumber}
                onChange={(e) => setUdyamNumber(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="GST Number"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <input
                type="text"
                placeholder="MSME Number"
                value={msmeNumber}
                onChange={(e) => setMsmeNumber(e.target.value)}
                className="w-full h-14 px-4 rounded-lg bg-transparent border border-gray-400"
              />

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 h-14 rounded-lg border border-gray-400"
                >
                  Back
                </button>

                <button
                  onClick={handleFinalSubmit}
                  disabled={loading}
                  className="w-1/2 h-14 rounded-lg bg-green-600 hover:bg-green-700 font-bold"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </>
);
}