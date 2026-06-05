"use client";

import { useState } from "react";

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

export default function HomeLoan() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    pan: "",
    pincode: "",
    income: "",
    loan_amount: "",
    state: "",
    city: "",
    gender: "",
    employment_type: ""
  });

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
      !formData.name ||
      !formData.phone ||
      !formData.email
    ) {
      alert("Please fill all required fields");
      return;

    }
    
    try {

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("Form Submitted Successfully");

        setFormData({
          name: "",
          phone: "",
          email: "",
          dob: "",
          pan: "",
          pincode: "",
          income: "",
          loan_amount: "",
          state: "",
          city: "",
          gender: "",
          employment_type: ""

        });
      } else {
        alert("Something went wrong");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">

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
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Phone className="text-black" />

              <input
                type="text"
                name="phone"
                placeholder="0000000000"
                value={formData.phone}
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
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <CalendarDays className="text-black" />

              <input
                type="date"
                name="dob"
                value={formData.dob}
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
                name="pan"
                placeholder="PAN NUMBER"
                value={formData.pan}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <MapPin className="text-black" />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
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
                name="income"
                placeholder="Monthly Salary (₹)"
                value={formData.income}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Wallet className="text-black" />

              <input
                type="text"
                name="loan_amount"
                placeholder="Loan Amount (₹)"
                value={formData.loan_amount}
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
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <Building className="text-black" />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
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
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder:text-gray-500"
              />
            </div>

            <div className="flex items-center border-b-2 border-gray-400 pb-3 gap-3">
              <BriefcaseBusiness className="text-black" />

              <input
                type="text"
                name="employment_type"
                placeholder="Employment Type"
                value={formData.employment_type}
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
  );
}