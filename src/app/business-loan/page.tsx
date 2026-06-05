"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";

export default function BusinessLoanForm() {
  const [step, setStep] = useState(1);

  const router = useRouter();

  const [showOtp, setShowOtp] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [gender, setGender] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [doctor, setDoctor] = useState("");
  const [loading, setLoading] = useState(false);
  const [panNumber, setPanNumber] = useState("");
  const [dob, setDob] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [gstRegistered, setGstRegistered] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [udyamRegistered, setUdyamRegistered] = useState("");
  const [udyamNumber, setUdyamNumber] = useState("");
  const [businessAge, setBusinessAge] = useState("");
  const [income, setIncome] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  
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
          business_loan_amount: Number(loanAmount),

          gender: gender,
          company_type: companyType,
          self_employed_doctor_ca: doctor,

          business_owner_pan: panNumber,
          business_ower_dob: dob,
          business_name: businessName,

          gst_number: gstNumber,
          Udyam_Registration_Number: udyamNumber,

          business_age: Number(businessAge),
          annual_revenue: Number(income),

          business_location: `${city}, ${stateName}`,

          business_type: companyType,
          business_loan_purpose: "Business Loan",

          business_pan: panNumber,

          msme_registration_number: udyamNumber,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Application Submitted Successfully");
      console.log(data);
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
    onClose={() => {
      router.push("/");
    }}
    onVerified={() => {
      setShowOtp(false);
      setIsVerified(true);
    }}
  />
)}
     {isVerified && (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl md:text-6xl font-bold text-center text-black max-w-5xl leading-tight">
        Business Loans starting at{" "}
        <span className="text-blue-900">10.25%*</span> Interest Rates.
      </h1>

      <div className="w-full max-w-4xl bg-[#07152d] rounded-3xl shadow-2xl mt-12 p-8 md:p-12">
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border-4 border-blue-500 bg-gray-200 flex items-center justify-center text-blue-600 text-2xl font-bold">
              1
            </div>
            <p className="text-blue-500 font-semibold mt-3">
              Basic Details
            </p>
          </div>

          <div className="flex-1 border-t-2 border-dotted border-gray-400 mx-4"></div>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-2xl font-bold">
              2
            </div>

            <p className="text-gray-400 font-semibold mt-3">
              Additional Details
            </p>
          </div>
        </div>

        {step === 1 && (
  <div className="space-y-6">
          <input
            type="text"
            placeholder="Full Name*"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
          />

          <input
            type="tel"
            placeholder="Mobile Number*"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
          />

          <input
            type="number"
            placeholder="Loan Amount (₹)*"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
          />

          <div>
            <p className="text-gray-300 mb-3">Gender*</p>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white outline-none"
          >
            <option value="" className="text-black">
              Select Company Type*
            </option>

            <option value="Private Limited" className="text-black">
              Private Limited
            </option>

            <option value="Partnership" className="text-black">
              Partnership
            </option>

            <option value="Sole Proprietorship" className="text-black">
              Sole Proprietorship
            </option>
          </select>

          <div>
            <p className="text-gray-300 mb-3">
              Are you a self-employed Doctor/CA?*
            </p>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="doctor"
                  value="Yes"
                  onChange={(e) => setDoctor(e.target.value)}
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="doctor"
                  value="No"
                  onChange={(e) => setDoctor(e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <button
          onClick={() => setStep(2)}
            disabled={loading}
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-xl text-white text-xl font-semibold mt-6 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Continue"}
          </button>
        </div>
        )}
        {step === 2 && (
  <div className="space-y-6">

  <input
  type="text"
  placeholder="PAN Number*"
  value={panNumber}
  onChange={(e) => setPanNumber(e.target.value)}
  className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
   <input
  type="date"
  value={dob}
  onChange={(e) => setDob(e.target.value)}
  className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
    <input
      type="text"
      placeholder="Pincode*"
      className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white placeholder:text-gray-400 outline-none"
    />

   <input
  type="text"
  placeholder="Business Name*"
  value={businessName}
  onChange={(e) => setBusinessName(e.target.value)}
  className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
     <div className="flex gap-6">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="GST Registered?*"
                  value="Yes"
                 onChange={(e) => setGstRegistered(e.target.value)}
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="GST Registered?*"
                  value="No"
                  onChange={(e) => setGstRegistered(e.target.value)}
                />
                No
              </label>
            </div>
          <div
            className="flex gap-6">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="Udyam Registered?*"
                  value="Yes"
                  onChange={(e) => setGender(e.target.value)}
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="Udyam Registered?*"
                  value="No"
                  onChange={(e) => setGender(e.target.value)}
                />
                No
              </label>
            </div>
        <input
         type="number"
         placeholder="Business Age*"
         value={businessAge}
         onChange={(e) => setBusinessAge(e.target.value)}
         className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
<input
  type="number"
  placeholder="Income*"
  value={income}
  onChange={(e) => setIncome(e.target.value)}
  className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
     <input
  type="text"
  placeholder="State"
  value={stateName}
  onChange={(e) => setStateName(e.target.value)}
  className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
      <input
  type="text"
  placeholder="City"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full h-14 px-5 rounded-xl border border-gray-400 bg-transparent text-white"
/>
      <div  className="flex gap-6">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="Do you have a current Account?*"
                  value="Yes"
                  onChange={(e) => setGender(e.target.value)}
                />
                Yes
              </label>

              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="Do you have a current Account?*"
                  value="No"
                  onChange={(e) => setGender(e.target.value)}
                />
                No
              </label>
            </div>
        

    <button
  onClick={handleFinalSubmit}
  disabled={loading}
  className="w-full h-14 bg-green-600 hover:bg-green-700 transition-all duration-300 rounded-xl text-white text-xl font-semibold disabled:opacity-50"
>
  {loading ? "Submitting..." : "Submit Application"}
</button>

  </div>

)}
      </div>
    </div>
    )}
    </>
  );
}
