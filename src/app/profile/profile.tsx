"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("profileData");

    if (data) {
      setProfile(JSON.parse(data));
    }
  }, []);

  if (!profile) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow">

        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6 border rounded-lg p-6">

          <div>
            <p className="text-gray-500">Name</p>
            <p>{profile.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Date Of Birth</p>
            <p>{profile.dob}</p>
          </div>

          <div>
            <p className="text-gray-500">Income</p>
            <p>{profile.income}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p>{profile.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p>{profile.phone}</p>
          </div>

          <div>
            <p className="text-gray-500">PAN</p>
            <p>{profile.pan}</p>
          </div>

          <div>
            <p className="text-gray-500">Employment Type</p>
            <p>{profile.employment_type}</p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Residential Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6 border rounded-lg p-6">

          <div>
            <p className="text-gray-500">State</p>
            <p>{profile.state}</p>
          </div>

          <div>
            <p className="text-gray-500">City</p>
            <p>{profile.city}</p>
          </div>

          <div>
            <p className="text-gray-500">Pincode</p>
            <p>{profile.pincode}</p>
          </div>

        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Loan Information
        </h2>

        <div className="border rounded-lg p-6">
          <p className="text-gray-500">Loan Amount</p>
          <p>{profile.loan_amount}</p>
        </div>

      </div>
    </div>
  );
}