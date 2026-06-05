"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";
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

export default function goldLoan() {
  const router = useRouter();

  const [showOtp, setShowOtp] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    owner_name: "",
  owner_email: "",
  owner_phone: "",
  owner_pan: "",
  owner_age: "",
  lender_name: "",
  gold_loan_amount: "",
  interest_rate: "",
  loan_purpose: "",
  gold_weight: "",
  gold_purity: "",
  gold_value: "",
  gold_type: "",
  gold_form: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.owner_name ||
    !formData.owner_phone ||
    !formData.owner_email ||
    !formData.owner_pan
  ) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const response = await fetch(
      "https://keshvacredit.onrender.com/api/gold-loan/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          owner_name: formData.owner_name,
          owner_email: formData.owner_email,
          owner_phone: formData.owner_phone,
          owner_pan: formData.owner_pan,
          owner_age: Number(formData.owner_age),
          lender_name: formData.lender_name,
          gold_loan_amount: Number(formData.gold_loan_amount),
          interest_rate: Number(formData.interest_rate),
          loan_purpose: formData.loan_purpose,
          gold_weight: Number(formData.gold_weight),
          gold_purity: Number(formData.gold_purity),
          gold_value: Number(formData.gold_value),
          gold_type: formData.gold_type,
          gold_form: formData.gold_form,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Gold Loan Application Submitted Successfully");

      console.log(data);

      setFormData({
        owner_name: "",
        owner_email: "",
        owner_phone: "",
        owner_pan: "",
        owner_age: "",
        lender_name: "",
        gold_loan_amount: "",
        interest_rate: "",
        loan_purpose: "",
        gold_weight: "",
        gold_purity: "",
        gold_value: "",
        gold_type: "",
        gold_form: "",
      });
    } else {
      alert(data.message || "Submission Failed");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
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
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">

      <div className="w-full max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
           Get a Gold Loan with Rates{" "}
            <span className="text-black">Starting at 10.25%*</span>
          </h1>

          <p className="text-black mt-5 text-lg md:text-2xl leading-relaxed">
            Apply for quick approvals, flexible EMIs, and exclusive offers from trusted banks and lenders.
          </p>

        </div>

       <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white border border-gray-300 rounded-3xl w-full max-w-3xl p-6 md:p-12 shadow-xl"
        >

          <h2 className="text-center text-4xl font-bold text-black mb-12">
            Basic Information
          </h2>

          
          <div className="grid md:grid-cols-2 gap-10 mb-10">

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <User className="text-black" />

              <input
                type="text"
                name="owner_name"
                placeholder="Name"
                value={formData.owner_name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Phone className="text-black" />

              <input
                type="text"
                name="owner_phone"
                placeholder="0000000000"
                value={formData.owner_phone}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

          </div>

          
          <div className="grid md:grid-cols-2 gap-10 mb-10">

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Mail className="text-black" />

              <input
                type="email"
                name="owner_email"
                placeholder="Email"
                value={formData.owner_email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <CalendarDays className="text-black" />

              <input
                type="date"
                name="owner_age"
                value={formData.owner_age}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <CreditCard className="text-black" />

              <input
                type="text"
                name="owner_pan"
                placeholder="PAN NUMBER"
                value={formData.owner_pan}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <MapPin className="text-black" />

              <input
                type="text"
                name="lender_name"
                placeholder="lender_name"
                value={formData.lender_name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <BadgeIndianRupee className="text-black" />

              <input
                type="text"
                name="gold_loan_amount"
                placeholder="gold_loan_amount"
                value={formData.gold_loan_amount}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Wallet className="text-black" />

              <input
                type="text"
                name="interest_rate"
                placeholder="interest_rate"
                value={formData.interest_rate}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <MapPin className="text-black" />

              <input
                type="text"
                name="loan_purpose"
                placeholder="loan_purpose"
                value={formData.loan_purpose}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Building className="text-black" />

              <input
                type="text"
                name="gold_weight"
                placeholder="gold_weight"
                value={formData.gold_weight}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-10">

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <User className="text-black" />

              <input
                type="text"
                name="gold_purity"
                placeholder="gold_purity"
                value={formData.gold_purity}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <BriefcaseBusiness className="text-black" />

              <input
                type="text"
                name="gold_value"
                placeholder="gold_value"
                value={formData.gold_value}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

<div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <BriefcaseBusiness className="text-black" />

              <input
                type="text"
                name="gold_type"
                placeholder="gold_type"
                value={formData.gold_type}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>
<div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <BriefcaseBusiness className="text-black" />

              <input
                type="text"
                name="gold_form"
                placeholder="gold_form"
                value={formData.gold_form}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>



          </div>

          <div className="flex items-start gap-3 mb-10">

            <input
              type="checkbox"
              className="mt-1 w-5 h-5"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              I hereby authorize KeshvaCredit Services Private Limited and its
              registered lending partners to act as my authorized
              representatives to access my credit information.
            </p>

          </div>

          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 transition duration-300 text-white text-2xl font-bold py-5 rounded-2xl"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
    )}
</>
  );
}