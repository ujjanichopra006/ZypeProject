"use client";

import { useState, useEffect } from "react";
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
  Home,
  Landmark,
  MapPinned,
  Hash,
  Square,
} from "lucide-react";

export default function HomeLoan() {

  const router = useRouter();

  const [showOtp, setShowOtp] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const [formData, setFormData] = useState({
    applicant_name: "",
    applicant_email: "",
    applicant_phone: "",
    applicant_pan: "",
    applicant_aadhar: "",
    applicant_dob: "",
    applicant_age: "",

    employment_type: "",
    applicant_location: "",
    annual_income: "",
    work_experience_years: "",

    property_type: "",
    property_address: "",
    property_city: "",
    property_state: "",
    property_pincode: "",
    property_area_sqft: "",
    property_value: "",

    loan_amount_requested: "",
    loan_purpose: "",
    loan_tenure_years: "",
    down_payment: "",
  });

    useEffect(() => {
    const phone = localStorage.getItem("phone");

    if (phone) {
      setIsVerified(true);

      setFormData((prev) => ({
        ...prev,
        applicant_phone: phone,
      }));
    } else {
      setShowOtp(true);
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !formData.applicant_name ||
      !formData.applicant_phone ||
      !formData.applicant_email
    ) {
      alert("Please fill all required fields");
      return;

    }

    try {

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/home-loan/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            applicant_name: formData.applicant_name,
            applicant_email: formData.applicant_email,
            applicant_phone: formData.applicant_phone,
            applicant_pan: formData.applicant_pan,
            applicant_aadhar: formData.applicant_aadhar,
            applicant_dob: formData.applicant_dob,
            applicant_age: Number(formData.applicant_age),

            employment_type: formData.employment_type,
            applicant_location: formData.applicant_location,
            annual_income: Number(formData.annual_income),
            work_experience_years: Number(
              formData.work_experience_years
            ),

            property_type: formData.property_type,
            property_address: formData.property_address,
            property_city: formData.property_city,
            property_state: formData.property_state,
            property_pincode: formData.property_pincode,
            property_area_sqft: Number(formData.property_area_sqft),
            property_value: Number(formData.property_value),

            loan_amount_requested: Number(
              formData.loan_amount_requested
            ),
            loan_purpose: formData.loan_purpose,
            loan_tenure_years: Number(
              formData.loan_tenure_years
            ),
            down_payment: Number(formData.down_payment),
          }),
        }
      ); const data = await response.json();
      console.log("Status:", response.status);
      console.log("Response:", data);
      if (response.ok) {
        alert("Form Submitted Successfully");

      console.log(data);

     
        setFormData({
          applicant_name: "",
          applicant_email: "",
          applicant_phone: "",
          applicant_pan: "",
          applicant_aadhar: "",
          applicant_dob: "",
          applicant_age: "",

          employment_type: "",
          applicant_location: "",
          annual_income: "",
          work_experience_years: "",

          property_type: "",
          property_address: "",
          property_city: "",
          property_state: "",
          property_pincode: "",
          property_area_sqft: "",
          property_value: "",

          loan_amount_requested: "",
          loan_purpose: "",
          loan_tenure_years: "",
          down_payment: "",
        });
        router.push("/quickLinks");
      } else {
        alert("Something went wrong");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
     {showOtp && (
             <OtpPopup
               onClose={() => {
                 router.push("/");
               }}
               onVerified={() => {
                 const savedPhone = localStorage.getItem("phone");
     
                 setFormData((prev) => ({
                   ...prev,
                   person_phone: savedPhone || "",
                 }));
     
                 setShowOtp(false);
                 setIsVerified(true);
               }}
             />
           )}
      <div className="w-full max-w-5xl">


        <div className="text-center mb-10">

          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Home Loans starting at{" "}
            <span className="text-black">8.50%*</span> Interest Rates
          </h1>

          <p className="text-black mt-5 text-lg md:text-2xl leading-relaxed">
            Get the best home loan offers with low interest rates and quick approval process.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-white border border-gray-300 rounded-3xl w-full max-w-5xl p-6 md:p-12 shadow-xl"
        >
          {/* Applicant Details */}
          <h2 className="text-3xl text-black font-bold mb-8 text-center">
            Applicant Details
          </h2>

          <div className="grid md:grid-cols-2 text-black gap-6 mb-10">
            {/* Applicant Name */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <User />
              <input
                type="text"
                name="applicant_name"
                placeholder="Applicant Name"
                value={formData.applicant_name}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <Phone />
              <input
                type="text"
                name="applicant_phone"
                placeholder="Mobile Number"
                value={formData.applicant_phone}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <Mail />
              <input
                type="email"
                name="applicant_email"
                placeholder="Email Address"
                value={formData.applicant_email}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* DOB */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <CalendarDays />
              <input
                type="date"
                name="applicant_dob"
                value={formData.applicant_dob}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* PAN */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <CreditCard />
              <input
                type="text"
                name="applicant_pan"
                placeholder="PAN Number"
                value={formData.applicant_pan}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Aadhaar */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <CreditCard />
              <input
                type="text"
                name="applicant_aadhar"
                placeholder="Aadhaar Number"
                value={formData.applicant_aadhar}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Age */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <User />
              <input
                type="number"
                name="applicant_age"
                placeholder="Age"
                value={formData.applicant_age}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            {/* Location */}
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <MapPin />
              <input
                type="text"
                name="applicant_location"
                placeholder="Location"
                value={formData.applicant_location}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Employment Details */}
          <h2 className="text-3xl text-black font-bold mb-8 text-center">
            Employment Details
          </h2>

          <div className="grid md:grid-cols-2 text-black gap-6 mb-10">
            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <BriefcaseBusiness />
              <input
                type="text"
                name="employment_type"
                placeholder="Employment Type"
                value={formData.employment_type}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <BadgeIndianRupee />
              <input
                type="number"
                name="annual_income"
                placeholder="Annual Income"
                value={formData.annual_income}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
              <BriefcaseBusiness />
              <input
                type="number"
                name="work_experience_years"
                placeholder="Work Experience"
                value={formData.work_experience_years}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Property Details */}
          <h2 className="text-3xl text-black font-bold mb-8 text-center">
            Property Details
          </h2>

          <div className="grid md:grid-cols-2 text-black gap-6 mb-10">
            <input
              type="text"
              name="property_type"
              placeholder="Property Type"
              value={formData.property_type}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              name="property_address"
              placeholder="Property Address"
              value={formData.property_address}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              name="property_city"
              placeholder="City"
              value={formData.property_city}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              name="property_state"
              placeholder="State"
              value={formData.property_state}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              name="property_pincode"
              placeholder="Pincode"
              value={formData.property_pincode}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="number"
              name="property_area_sqft"
              placeholder="Area (Sq Ft)"
              value={formData.property_area_sqft}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="number"
              name="property_value"
              placeholder="Property Value"
              value={formData.property_value}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />
          </div>

          {/* Loan Details */}
          <h2 className="text-3xl text-black font-bold mb-8 text-center">
            Loan Details
          </h2>

          <div className="grid md:grid-cols-2 text-black gap-6 mb-10">
            <input
              type="number"
              name="loan_amount_requested"
              placeholder="Loan Amount"
              value={formData.loan_amount_requested}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              name="loan_purpose"
              placeholder="Loan Purpose"
              value={formData.loan_purpose}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="number"
              name="loan_tenure_years"
              placeholder="Loan Tenure (Years)"
              value={formData.loan_tenure_years}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="number"
              name="down_payment"
              placeholder="Down Payment"
              value={formData.down_payment}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl text-xl font-bold"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>

  );
}