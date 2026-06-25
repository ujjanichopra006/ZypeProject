"use client";

import { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Wallet,
  CreditCard,
  LogOut,
  Pencil,
} from "lucide-react";

/**
 * UI MODEL
 */
interface UserProfile {
  name?: string;
  phone?: string;
  email?: string;
  dob?: string;
  pan?: string;
  city?: string;
  income?: number;
  loan_amount?: number;
  employment_type?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    pan: "",
    city: "",
    income: "",
    loan_amount: "",
    employment_type: "",
  });

  /**
   * LOAD FROM LOCALSTORAGE (NO GET API)
   */
  useEffect(() => {
    const stored = localStorage.getItem("profileData");

    if (stored) {
      setProfile(JSON.parse(stored));
      setShowForm(false);
    } else {
      setShowForm(true);
    }

    setLoading(false);
  }, []);

  /**
   * CREATE USER
   */
  const createUser = async () => {
    const token = localStorage.getItem("token");

    const payload = {
      ...formData,
      income: Number(formData.income),
      loan_amount: Number(formData.loan_amount),
    };

    const res = await fetch(
      "https://keshvacredit.onrender.com/api/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    return await res.json();
  };

  /**
   * UPDATE USER
   */
  const updateUser = async () => {
    const token = localStorage.getItem("token");

    const payload = {
      ...formData,
      income: Number(formData.income),
      loan_amount: Number(formData.loan_amount),
    };

    const res = await fetch(
      "https://keshvacredit.onrender.com/api/updateuser",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    return await res.json();
  };

  /**
   * SUBMIT (CREATE / UPDATE)
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = isEditing
        ? await updateUser()
        : await createUser();

      const apiData = result?.data || result;

      // normalize UI data
      const uiData: UserProfile = {
        name: apiData.name || formData.name,
        phone: apiData.phone || formData.phone,
        email: apiData.email || formData.email,
        dob: apiData.dob || formData.dob,
        pan: apiData.pan || formData.pan,
        city: apiData.city || formData.city,
        income: apiData.income || Number(formData.income),
        loan_amount: apiData.loan_amount || Number(formData.loan_amount),
        employment_type: apiData.employment_type || formData.employment_type,
      };

      setProfile(uiData);
      localStorage.setItem("profileData", JSON.stringify(uiData));

      setShowForm(false);
      setIsEditing(false);

      alert(
        isEditing
          ? "Profile Updated Successfully"
          : "Profile Created Successfully"
      );
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /**
   * EDIT
   */
  const handleEdit = () => {
    if (!profile) return;

    setFormData({
      name: profile.name || "",
      phone: profile.phone || "",
      email: profile.email || "",
      dob: profile.dob || "",
      pan: profile.pan || "",
      city: profile.city || "",
      income: String(profile.income || ""),
      loan_amount: String(profile.loan_amount || ""),
      employment_type: profile.employment_type || "",
    });

    setShowForm(true);
    setIsEditing(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0b1220]">
        Loading...
      </div>
    );
  }

  /**
   * FORM UI
   */
  if (showForm) {
    return (
      <div className="min-h-screen p-6 bg-[#0b1220]">
        <div className="max-w-2xl mx-auto bg-[#111827] p-6 rounded-2xl">
          <h2 className="text-white text-xl mb-4">
            {isEditing ? "Update Profile" : "Create Profile"}
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-4">
            {Object.keys(formData).map((key) => (
              <input
                key={key}
                className="p-3 bg-gray-800 text-white rounded"
                placeholder={key}
                value={formData[key as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [key]: e.target.value,
                  })
                }
              />
            ))}

            <button className="bg-blue-600 text-white py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  /**
   * PROFILE UI
   */
  return (
    <div className="min-h-screen bg-[#0b1220] text-white p-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-2xl flex justify-between">
          <div>
            <h1 className="text-2xl">{profile?.name}</h1>
            <p>{profile?.email}</p>
            <p>{profile?.phone}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleEdit}
              className="bg-white text-black px-4 py-2 rounded flex items-center gap-2"
            >
              <Pencil size={16} />
              Edit
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">

          <Card icon={<User />} title="Name" value={profile?.name} />
          <Card icon={<Phone />} title="Phone" value={profile?.phone} />
          <Card icon={<Mail />} title="Email" value={profile?.email} />
          <Card icon={<MapPin />} title="City" value={profile?.city} />
          <Card icon={<Wallet />} title="Income" value={profile?.income} />
          <Card icon={<CreditCard />} title="Loan" value={profile?.loan_amount} />

        </div>
      </div>
    </div>
  );
}

/**
 * CARD COMPONENT
 */
function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value?: string | number;
}) {
  return (
    <div className="bg-[#111827] p-4 rounded-xl border border-gray-700">
      <div className="flex gap-2 items-center text-blue-400">
        {icon}
        <span>{title}</span>
      </div>
      <p className="text-white mt-2">{value || "-"}</p>
    </div>
  );
}