"use client";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";
import { useState, useEffect } from "react";

import {
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Wallet,
  BriefcaseBusiness,
  BadgeIndianRupee,
  CreditCard,
  Building,
} from "lucide-react";

export default function PersonalLoan() {
  const router = useRouter();
  const [showOtp, setShowOtp] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  // ✅ NEW: Boolean state to track if the form is completely filled
  const [isFormComplete, setIsFormComplete] = useState(false);

  const [formData, setFormData] = useState({
    person_name: "",
    person_phone: "",
    person_email: "",
    person_dob: "",
    person_pan: "",
    person_aadhar: "",
    person_name_as_per_aadhar: "",
    employment_type: "",
    person_age: "",
    loan_purpose: "",
    annual_income: "",
    person_location: "",
    personal_loan_amount: "",
  });

  // ✅ NEW: Automatically updates the boolean to true when all fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val !== "");
    setIsFormComplete(allFilled);
  }, [formData]);

  useEffect(() => {
    if (!localStorage.getItem("personalLoanSubmitted")) {
      localStorage.setItem("personalLoanSubmitted", "false");
    }

    const phone = localStorage.getItem("phone");
    if (phone) {
      setIsVerified(true);
      getUserData(phone);
    } else {
      setShowOtp(true);
    }
  }, []);

  const getUserData = async (phone: string) => {
    try {
      const response = await fetch(
        `https://keshvacredit.onrender.com/api/personal-loan/get-user?person_phone=${phone}`
      );
      const data = await response.json();

      if (response.ok && data) {
        const user = data.data || data.user || data;
        setFormData({
          person_name: user.person_name || "",
          person_phone: user.person_phone || phone,
          person_email: user.person_email || "",
          person_dob: user.person_dob || "",
          person_pan: user.person_pan || "",
          person_aadhar: user.person_aadhar || "",
          person_name_as_per_aadhar: user.person_name_as_per_aadhar || "",
          employment_type: user.employment_type || "",
          person_age: user.person_age?.toString() || "",
          loan_purpose: user.loan_purpose || "",
          annual_income: user.annual_income?.toString() || "",
          person_location: user.person_location || "",
          personal_loan_amount: user.personal_loan_amount?.toString() || "",
        });
      }
    } catch (error) {
      console.error("Get User Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "https://keshvacredit.onrender.com/api/personal-loan/create-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            person_age: Number(formData.person_age),
            annual_income: Number(formData.annual_income),
            personal_loan_amount: Number(formData.personal_loan_amount),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Personal Loan Application Submitted Successfully");
        
        // ✅ Set the localStorage boolean variable to true upon success
        localStorage.setItem("personalLoanSubmitted", "true");

        setFormData({
          person_name: "",
          person_phone: localStorage.getItem("phone") || "",
          person_email: "",
          person_dob: "",
          person_pan: "",
          person_aadhar: "",
          person_name_as_per_aadhar: "",
          employment_type: "",
          person_age: "",
          loan_purpose: "",
          annual_income: "",
          person_location: "",
          personal_loan_amount: "",
        });

        router.push("/personalloanlender");
      } else {
        alert(data.message || "Submission Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-200 via-white to-sky-200 flex justify-center items-center px-4 py-10">
      {showOtp && (
        <OtpPopup
          onClose={() => router.push("/")}
          onVerified={() => {
            const savedPhone = localStorage.getItem("phone");
            if (savedPhone) getUserData(savedPhone);
            setShowOtp(false);
            setIsVerified(true);
          }}
        />
      )}
      
      <div className="w-full max-w-5xl">
        {isVerified && (
          <form
            onSubmit={handleSubmit}
            className="mx-auto bg-white text-black border rounded-3xl w-full max-w-3xl p-6 md:p-12 shadow-xl"
          >
            <h2 className="text-center text-4xl font-bold mb-10">
              Personal Loan Form
            </h2>

            {/* Form Inputs with Corrected Icons */}
            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <User className="text-gray-500" />
              <input name="person_name" placeholder="Full Name" value={formData.person_name} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Phone className="text-gray-500" />
              <input name="person_phone" placeholder="Phone Number" value={formData.person_phone} onChange={handleChange} className="w-full outline-none bg-gray-100" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Mail className="text-gray-500" />
              <input name="person_email" placeholder="Email Address" value={formData.person_email} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <CalendarDays className="text-gray-500" />
              <input type="date" name="person_dob" value={formData.person_dob} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <CreditCard className="text-gray-500" />
              <input name="person_pan" placeholder="PAN Card Number" value={formData.person_pan} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <MapPin className="text-gray-500" />
              <input name="person_aadhar" placeholder="Aadhar Card Number" value={formData.person_aadhar} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <BadgeIndianRupee className="text-gray-500" />
              <input name="annual_income" placeholder="Annual Income (₹)" value={formData.annual_income} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <BriefcaseBusiness className="text-gray-500" />
              <input name="employment_type" placeholder="Employment Type" value={formData.employment_type} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <User className="text-gray-500" />
              <input name="person_age" placeholder="Age" value={formData.person_age} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Wallet className="text-gray-500" />
              <input name="loan_purpose" placeholder="Loan Purpose" value={formData.loan_purpose} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Building className="text-gray-500" />
              <input name="person_location" placeholder="City/Location" value={formData.person_location} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <BadgeIndianRupee className="text-gray-500" />
              <input name="personal_loan_amount" placeholder="Loan Amount Required (₹)" value={formData.personal_loan_amount} onChange={handleChange} className="w-full outline-none" />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <User className="text-gray-500" />
              <input name="person_name_as_per_aadhar" placeholder="Name as per Aadhar Card" value={formData.person_name_as_per_aadhar} onChange={handleChange} className="w-full outline-none" />
            </div>

            {/* ✅ Submit button is disabled until the boolean 'isFormComplete' is true */}
            <button
              type="submit"
              disabled={!isFormComplete}
              className={`w-full py-4 rounded-xl text-xl font-bold transition-all duration-300 mt-4 ${
                isFormComplete 
                  ? "bg-black text-white hover:bg-gray-800 cursor-pointer" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {isFormComplete ? "Submit Application" : "Fill All Fields to Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}