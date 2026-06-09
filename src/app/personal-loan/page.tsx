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

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    if (phone) {
      setIsVerified(true); 
      setFormData((prev) => ({
        ...prev,
        person_phone: phone,
      }));
    } else {
      setShowOtp(true); // OTP popup show hoga
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.person_name || !formData.person_phone || !formData.person_email) {
      alert("Please fill required fields");
      return;
    }
    try {

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/personal-loan/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            person_name: formData.person_name,
            person_email: formData.person_email,
            person_phone: formData.person_phone,
            person_pan: formData.person_pan,
            person_dob: formData.person_dob,
            person_aadhar: formData.person_aadhar,
            person_name_as_per_aadhar: formData.person_name_as_per_aadhar,
            employment_type: formData.employment_type,
            person_age: Number(formData.person_age),
            loan_purpose: formData.loan_purpose,
            annual_income: Number(formData.annual_income),
            person_location: formData.person_location,
            personal_loan_amount: Number(formData.personal_loan_amount),
          })
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        alert("Personal Loan Application Submitted Successfully");

        console.log(data);

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

        router.push("/quickLinks");
      } else {
        alert(data.message || "Submission Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-10">
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
        {isVerified && (
          <form
            onSubmit={handleSubmit}
            className="mx-auto bg-white text-black border rounded-3xl w-full max-w-3xl p-6 md:p-12 shadow-xl"
          >
            <h2 className="text-center text-4xl font-bold mb-10">
              Personal Loan Form
            </h2>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <User />
              <input
                name="person_name"
                placeholder="Name"
                value={formData.person_name}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Phone />
              <input
                name="person_phone"
                placeholder="Phone"
                value={formData.person_phone}
                readOnly
                className="w-full outline-none bg-gray-100"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Mail />
              <input
                name="person_email"
                placeholder="Email"
                value={formData.person_email}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <CalendarDays />
              <input
                type="date"
                name="person_dob"
                placeholder=" dob"
                value={formData.person_dob}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <CreditCard />
              <input
                name="person_pan"
                placeholder="PAN"
                value={formData.person_pan}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <MapPin />
              <input
                name="person_aadhar"
                placeholder="person_aadhar"
                value={formData.person_aadhar}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <BadgeIndianRupee />
              <input
                name="annual_income"
                placeholder="Annual_Income"
                value={formData.annual_income}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Wallet />
              <input
                name="employment_type"
                placeholder="employment_type"
                value={formData.employment_type}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <MapPin />
              <input
                name="person_age"
                placeholder="person_age"
                value={formData.person_age}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>


            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <MapPin />
              <input
                name="loan_purpose"
                placeholder="loan_purpose"
                value={formData.loan_purpose}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Building />
              <input
                name="person_location"
                placeholder="person_location"
                value={formData.person_location}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              <Building />
              <input
                name="personal_loan_amount"
                placeholder="personal_loan_amount"
                value={formData.personal_loan_amount}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            <div className="flex items-center border-b pb-3 gap-3 mb-6">
              < MapPin />
              <input
                name="person_name_as_per_aadhar"
                placeholder="Person_name_as_per_aadhar"
                value={formData.person_name_as_per_aadhar}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl text-xl font-bold"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}