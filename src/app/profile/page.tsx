"use client";

import { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Wallet,
  BadgeIndianRupee,
  CreditCard,
  Building,
} from "lucide-react";

export default function Home() {
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
    employment_type: "",
  });

  const [profile, setProfile] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const phone = localStorage.getItem("phone") || "";

    const fetchUser = async () => {
      if (!token) {
        setFormData((prev) => ({
          ...prev,
          phone,
        }));

        setShowForm(true);
        return;
      }

      try {
        const res = await fetch(
          "https://keshvacredit.onrender.com/api/getuser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          setFormData((prev) => ({
            ...prev,
            phone,
          }));

          setShowForm(true);
          return;
        }

        const data = await res.json();

        if (data && data.name) {
          setProfile(data);

          setFormData({
            name: data.name || "",
            phone: data.phone || phone,
            email: data.email || "",
            dob: data.dob || "",
            pan: data.pan || "",
            pincode: data.pincode || "",
            income: String(data.income || ""),
            loan_amount: String(data.loan_amount || ""),
            state: data.state || "",
            city: data.city || "",
            employment_type: data.employment_type || "",
          });

          setUserExists(true);
          setShowForm(false);
        } else {
          setFormData((prev) => ({
            ...prev,
            phone,
          }));

          setShowForm(true);
        }
      } catch (error) {
        console.log(error);

        setFormData((prev) => ({
          ...prev,
          phone,
        }));

        setShowForm(true);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleEdit = () => {
  if (!profile) return;

  setFormData({
    name: profile.name || "",
    phone: profile.phone || "",
    email: profile.email || "",
    dob: profile.dob || "",
    pan: profile.pan || "",
    pincode: profile.pincode || "",
    income: String(profile.income || ""),
    loan_amount: String(profile.loan_amount || ""),
    state: profile.state || "",
    city: profile.city || "",
    employment_type: profile.employment_type || "",
  });

  setIsEditing(true);

  // IMPORTANT
  setShowForm(false);
};
  const handleSubmit = async (e?: any) => {
  e?.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        dob: formData.dob,
        pan: formData.pan.trim(),
        pincode: formData.pincode.trim(),
        income: Number(formData.income),
        loan_amount: Number(formData.loan_amount),
        state: formData.state.trim(),
        city: formData.city.trim(),
        employment_type: formData.employment_type.trim(),
      };

      let url = "";
      let method = "";

      if (isEditing) {
        url =
          "https://keshvacredit.onrender.com/api/updateuser";
        method = "PUT";
      } else {
        url =
          "https://keshvacredit.onrender.com/api/createuser";
        method = "POST";
      }

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (res.ok) {
        setProfile(payload);

        localStorage.setItem(
          "profileData",
          JSON.stringify(payload)
        );

        setShowForm(false);
        setIsEditing(false);
        setUserExists(true);

        alert(
          isEditing
            ? "Profile Updated Successfully ✅"
            : "Profile Created Successfully ✅"
        );
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          Basic Information
        </h1>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f172a] border border-gray-700 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputBox icon={<User />} name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
              <InputBox icon={<Phone />} name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
              <InputBox icon={<Mail />} name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <InputBox icon={<CalendarDays />} name="dob" type="date" value={formData.dob} onChange={handleChange} />
              <InputBox icon={<CreditCard />} name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} />
              <InputBox icon={<MapPin />} name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} />
              <InputBox icon={<BadgeIndianRupee />} name="income" placeholder="Income" value={formData.income} onChange={handleChange} />
              <InputBox icon={<Wallet />} name="loan_amount" placeholder="Loan Amount" value={formData.loan_amount} onChange={handleChange} />
              <InputBox icon={<MapPin />} name="state" placeholder="State" value={formData.state} onChange={handleChange} />
              <InputBox icon={<Building />} name="city" placeholder="City" value={formData.city} onChange={handleChange} />
              <InputBox icon={<Building />} name="employment_type" placeholder="Employment Type" value={formData.employment_type} onChange={handleChange} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
            >
              {loading
                ? "Please Wait..."
                : isEditing
                  ? "Update Profile"
                  : "Submit"}
            </button>
          </form>
        )}

        {profile && !showForm && (
          <div className="mt-10 bg-white text-black p-8 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6 border-b pb-3">
              <h2 className="text-3xl font-bold">
                My Profile
              </h2>

              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Save Changes
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <p>
                <strong>Name:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.name
                )}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.phone
                )}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.email
                )}
              </p>
              <p>
                <strong>DOB:</strong>{" "}
                {isEditing ? (
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.dob
                )}
              </p>

              <p>
                <strong>PAN:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.pan
                )}
              </p>

              <p>
                <strong>Pincode:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.pincode
                )}
              </p>

              <p>
                <strong>Income:</strong>{" "}
                {isEditing ? (
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.income
                )}
              </p>

              <p>
                <strong>Loan Amount:</strong>{" "}
                {isEditing ? (
                  <input
                    type="number"
                    name="loan_amount"
                    value={formData.loan_amount}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.loan_amount
                )}
              </p>

              <p>
                <strong>State:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.state
                )}
              </p>

              <p>
                <strong>City:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.city
                )}
              </p>

              <p>
                <strong>Employment:</strong>{" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="employment_type"
                    value={formData.employment_type}
                    onChange={handleChange}
                    className="border px-2 py-1 rounded"
                  />
                ) : (
                  profile.employment_type
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InputBox({
  icon,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: any) {
  return (
    <div className="flex items-center gap-3 border-b border-gray-600 pb-2">
      <span>{icon}</span>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-white"
      />
    </div>
  );
}