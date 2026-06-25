"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";

export default function BusinessLoan() {
  const router = useRouter();

  const [showOtp, setShowOtp] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [formData, setFormData] = useState({
    business_owner_name: "",
    business_owner_phone: "",
    business_owner_email: "",
    business_owner_pan: "",
    business_ower_dob: "",

    business_name: "",
    business_type: "",
    business_age: "",

    annual_revenue: "",
    business_location: "",
    business_loan_amount: "",

    gst_number: "",
    Udyam_Registration_Number: "",
    msme_registration_number: "",

    business_pan: "",
    business_loan_purpose: "Business Expansion",
  });

  useEffect(() => {
  const submitted = localStorage.getItem("businessLoanSubmitted");
  const phone = localStorage.getItem("phone");

  if (phone && submitted === "true") {
    router.replace("/businessloanlender");
    return;
  }

  if (!submitted) {
    localStorage.setItem("businessLoanSubmitted", "false");
  }

  if (phone) {
    setIsVerified(true);

    setFormData((prev) => ({
      ...prev,
      business_owner_phone: phone,
    }));
  } else {
    setShowOtp(true);
  }

  setCheckingAccess(false);
}, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

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
            business_owner_name:
              formData.business_owner_name,

            business_owner_email:
              formData.business_owner_email,

            business_owner_phone: Number(
              formData.business_owner_phone
            ),

            business_owner_pan:
              formData.business_owner_pan,

            business_ower_dob:
              formData.business_ower_dob,

            business_pan:
              formData.business_pan ||
              formData.business_owner_pan,

            business_name:
              formData.business_name,

            business_type:
              formData.business_type,

            business_age: Number(
              formData.business_age
            ),

            business_loan_purpose:
              formData.business_loan_purpose,

            annual_revenue: Number(
              formData.annual_revenue
            ),

            business_location:
              formData.business_location,

            business_loan_amount: Number(
              formData.business_loan_amount
            ),

            Udyam_Registration_Number:
              formData.Udyam_Registration_Number,

            gst_number:
              formData.gst_number,

            msme_registration_number:
              formData.msme_registration_number,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(
          "Business Loan Application Submitted Successfully"
        );

        localStorage.setItem(
          "businessLoanSubmitted",
          "true"
        );

        router.push("/businessloanlender");
      } else {
        alert(data.message || "Submission Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
   
  if (checkingAccess) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-200 via-white to-sky-200 flex justify-center items-center px-4 py-10">

      {showOtp && (
        <OtpPopup
          onClose={() => router.push("/")}
          onVerified={() => {
            const phone =
              localStorage.getItem("phone");

            setFormData((prev) => ({
              ...prev,
              business_owner_phone:
                phone || "",
            }));

            setShowOtp(false);
            setIsVerified(true);
          }}
        />
      )}

      <div className="w-full max-w-4xl">
        {isVerified && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h1 className="text-4xl font-bold text-center mb-8">
              Business Loan Form
            </h1>

            <h2 className="text-2xl font-semibold mb-5">
              Basic Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <input
                type="text"
                name="business_owner_name"
                placeholder="Full Name"
                value={
                  formData.business_owner_name
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="tel"
                name="business_owner_phone"
                placeholder="Mobile Number"
                value={
                  formData.business_owner_phone
                }
                readOnly
                onChange={handleChange}
                className="border p-3 rounded-lg bg-gray-100"
                required
              />

              <input
                type="email"
                name="business_owner_email"
                placeholder="Email Address"
                value={
                  formData.business_owner_email
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="business_owner_pan"
                placeholder="PAN Number"
                value={
                  formData.business_owner_pan
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="business_name"
                placeholder="Business name"
                value={
                  formData.business_name
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />
            </div>

            <h2 className="text-2xl font-semibold mb-5">
              Additional Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                name="business_pan"
                placeholder=" BUSINESS PAN Number"
                value={
                  formData.business_pan
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />
              <input
                type="date"
                name="business_ower_dob"
                value={
                  formData.business_ower_dob
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="business_type"
                placeholder="Business type"
                value={
                  formData.business_type
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="number"
                name="business_age"
                placeholder="Business Age (Years)"
                value={
                  formData.business_age
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />
  <input
                type="number"
                name="business_loan_amount"
                placeholder="Loan Amount"
                value={
                  formData.business_loan_amount
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />
              <input
                type="number"
                name="annual_revenue"
                placeholder="Annual Revenue"
                value={
                  formData.annual_revenue
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="business_location"
                placeholder="Business Location"
                value={
                  formData.business_location
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
                required
              />

              <input
                type="text"
                name="gst_number"
                placeholder="GST Number"
                value={formData.gst_number}
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="Udyam_Registration_Number"
                placeholder="Udyam Registration Number"
                value={
                  formData.Udyam_Registration_Number
                }
                onChange={handleChange}
                className="border p-3 rounded-lg"
              />

              <input
                type="text"
                name="msme_registration_number"
                placeholder="MSME Registration Number"
                value={
                  formData.msme_registration_number
                }
                onChange={handleChange}
                className="border p-3 rounded-lg md:col-span-2"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold"
            >
              {loading
                ? "Submitting..."
                : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}