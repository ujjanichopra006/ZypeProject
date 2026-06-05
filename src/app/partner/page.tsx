"use client";

import { useState } from "react";

export default function PartnerPage() {
  const [view, setView] = useState("register");
  const [selectedType, setSelectedType] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    designation: "",
    partnerType: "",
    businessType: "",
    companyProfile: "",
    website: "",
    products: "",
    volume: "",
    pincode: "",
    location: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full border rounded-xl px-4 py-3 text-black bg-white outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="min-h-screen bg-[#0f172a] py-16 px-4">
      <div className="max-w-6xl mx-auto">

       
        <div className="bg-gray-200 rounded-[30px] py-20 px-6 text-center mb-12">
          <h1 className="text-5xl font-bold text-black">
            Partner with <span className="text-blue-600">KeshvaCredit</span>
          </h1>

          <div className="flex justify-center gap-4 mt-10">

            <button
              onClick={() => setView("register")}
              className={`px-10 py-4 rounded-xl font-semibold ${
                view === "register"
                  ? "bg-blue-600 text-black"
                  : "border border-blue-600 text-blue-600"
              }`}
            >
              Register Now
            </button>

            <button
              onClick={() => setView("learn")}
              className={`px-10 py-4 rounded-xl font-semibold ${
                view === "learn"
                  ? "bg-blue-600 text-black"
                  : "border border-blue-600 text-black"
              }`}
            >
              Learn More
            </button>

          </div>
        </div>

        
        {view === "register" && (
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">

          
            {selectedType && (
              <div className="mb-5">
                <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Selected Partner Type: {selectedType}
                </span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">

              <input name="fullName" onChange={handleChange} placeholder="Full Name" className={inputClass} />
              <input name="contact" onChange={handleChange} placeholder="Contact Number" className={inputClass} />

              <input name="email" onChange={handleChange} placeholder="Email" className={inputClass} />
              <input name="designation" onChange={handleChange} placeholder="Designation" className={inputClass} />

           
              <select
                name="partnerType"
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  handleChange(e);
                }}
                className={inputClass}
              >
                <option value="">Select Partner Type</option>
                <option value="DSA">DSA</option>
                <option value="Aggregator">Aggregator</option>
                <option value="Corporate">Corporate</option>
              </select>

              <select name="businessType" onChange={handleChange} className={inputClass}>
                <option value="">Select Business Type</option>
                <option>Loan</option>
                <option>Credit Card</option>
                <option>Insurance</option>
              </select>

              <input name="companyProfile" onChange={handleChange} placeholder="Company Profile" className={inputClass} />
              <input name="website" onChange={handleChange} placeholder="Website" className={inputClass} />

              <div className="md:col-span-2">
                <select name="products" onChange={handleChange} className={inputClass}>
                  <option value="">Select Products</option>
                  <option>Personal Loan</option>
                  <option>Business Loan</option>
                  <option>Credit Card</option>
                </select>
              </div>

              <input name="volume" onChange={handleChange} placeholder="Expected Business Volume" className={inputClass} />
              <input name="pincode" onChange={handleChange} placeholder="Pincode" className={inputClass} />

              <div className="md:col-span-2">
                <input name="location" onChange={handleChange} placeholder="Location" className={inputClass} />
              </div>

            </div>

            <button className="w-full mt-6 h-14 bg-blue-600 text-white rounded-xl font-semibold">
              Submit Partnership Request
            </button>

          </div>
        )}

        
        {view === "learn" && (
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-blue-600 font-bold text-xl mb-2">DSA Partners</h3>
              <p className="text-gray-600 mb-4">Direct Selling Agents</p>

              <p className="text-green-600">✔ High commission earnings</p>
              <p className="text-green-600">✔ Easy onboarding</p>

              <button
                onClick={() => {
                  setView("register");
                  setSelectedType("DSA");
                }}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-purple-600 font-bold text-xl mb-2">Aggregators</h3>
              <p className="text-gray-600 mb-4">Platform Partnerships</p>

              <p className="text-green-600">✔ API support</p>
              <p className="text-green-600">✔ Bulk leads</p>

              <button
                onClick={() => {
                  setView("register");
                  setSelectedType("Aggregator");
                }}
                className="mt-6 w-full bg-purple-600 text-white py-3 rounded-xl"
              >
                Apply Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-pink-600 font-bold text-xl mb-2">Corporate Partners</h3>
              <p className="text-gray-600 mb-4">Business Collaborations</p>

              <p className="text-green-600">✔ Enterprise solutions</p>
              <p className="text-green-600">✔ Priority support</p>

              <button
                onClick={() => {
                  setView("register");
                  setSelectedType("Corporate");
                }}
                className="mt-6 w-full bg-pink-600 text-white py-3 rounded-xl"
              >
                Apply Now
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}