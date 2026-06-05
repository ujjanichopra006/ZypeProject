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

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(
          "https://keshvacredit.onrender.com/api/getuser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) return;

        const data = await res.json();

        setFormData({
          name: data.name || "",
          phone: data.phone || "",
          email: data.email || "",
          dob: data.dob || "",
          pan: data.pan || "",
          pincode: data.pincode || "",
          income: data.income || "",
          loan_amount: data.loan_amount || "",
          state: data.state || "",
          city: data.city || "",
          employment_type: data.employment_type || "" ,
        });
      } catch (err) {
        console.log(err);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
        employment_type: formData.employment_type .trim(),
          };

      const url = token
        ? "https://keshvacredit.onrender.com/api/updateuser"
        : "https://keshvacredit.onrender.com/api/createuser";

      const method = token ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!token && data.token) {
        localStorage.setItem("token", data.token);
      }

      if (res.ok) {
        alert(token ? "Updated Successfully ✅" : "Created Successfully ✅");
      
      router.push("/quickLinks");
      } else {
        alert(data.message || "Please enter all required details ❌");
      }
    } catch (err) {
      alert("Server Error ❌");
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
            <InputBox icon={<Building/>} name="employment_type" placeholder="Employee Type" value={formData.employment_type} onChange={handleChange}/>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
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
      <span className="text-gray-300">{icon}</span>

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