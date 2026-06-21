"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://keshvacredit.onrender.com/api/usercontact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message Sent Successfully");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Top Buttons */}
       {/* Top Buttons */}
<div
  className="flex flex-col sm:flex-row justify-center gap-3 mb-8"
  data-aos="fade-down"
>
  <Link
    href="/Contact"
    className={`px-5 py-2 rounded-full text-sm text-center border transition-all duration-300 ${
      pathname === "/Contact"
        ? "bg-blue-600 border-blue-600 text-white"
        : "border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600"
    }`}
  >
    Contact
  </Link>

  <Link
    href="/partner"
    className={`px-5 py-2 rounded-full text-sm text-center transition-all duration-300 ${
      pathname === "/partner"
        ? "bg-yellow-500 text-black"
        : "border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
    }`}
  >
    Register as Partner
  </Link>
</div>

        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Get in Touch
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            We'd love to hear from you. Fill out the form below and we’ll get back to you soon.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* FORM */}
          <div
            className="border border-gray-300 rounded-2xl p-4 md:p-6"
            data-aos="zoom-in"
          >
            <h2 className="text-lg md:text-xl font-bold text-center mb-6">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-10 px-3 rounded-lg bg-transparent border border-gray-300 text-sm outline-none"
                required
              />

              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full h-10 px-3 rounded-lg bg-transparent border border-gray-300 text-sm outline-none"
                required
              />

              <input
                type="tel"
                placeholder="+91 93xxxxxxx5"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full h-10 px-3 rounded-lg bg-transparent border border-gray-300 text-sm outline-none"
                required
              />

              <textarea
                rows={4}
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-transparent border border-gray-300 text-sm outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="w-full h-10 rounded-lg bg-slate-600 hover:bg-slate-500 text-sm font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-4">

            <div
              className="bg-gray-700 rounded-2xl p-4"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-bold mb-1">Address</h3>
              <p className="text-sm leading-6">
                233, Thakar Basti, Bagichi Mohalla,
                <br />
                Dharamshala Road, Fatehabad
              </p>
            </div>

            <div
              className="bg-gray-700 rounded-2xl p-4"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h3 className="text-lg font-bold mb-1">Contact</h3>
              <p className="text-sm">keshvacredit@gmail.com</p>
            </div>

            <div
              className="bg-gray-700 rounded-2xl p-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-lg font-bold mb-1">Working Hours</h3>
              <p className="text-sm leading-6">
                Mon - Fri: 09:00 AM - 05:00 PM
                <br />
                Sat - Sun: 09:00 AM - 01:00 PM
              </p>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Fatehabad%20Haryana&t=&z=13&output=embed"
              loading="lazy"
              className="w-full h-36 rounded-2xl border border-gray-300"
              data-aos="zoom-in-up"
            />
          </div>
        </div>

        {/* WHY CHOOSE */}
        <div className="mt-16">

          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Why Choose Us
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto">
              Compare loans easily and choose best offer instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">

            <div
              className="bg-[#58B98C] rounded-xl p-4"
              data-aos="flip-left"
            >
              <h3 className="text-base font-bold text-black mb-2">
                Multiple Lenders
              </h3>
              <p className="text-sm text-black">
                Get offers from multiple banks in one place.
              </p>
            </div>

            <div
              className="bg-[#58B98C] rounded-xl p-4"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <h3 className="text-base font-bold text-black mb-2">
                Best Rates
              </h3>
              <p className="text-sm text-black">
                Compare interest rates instantly.
              </p>
            </div>

            <div
              className="bg-[#58B98C] rounded-xl p-4"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <h3 className="text-base font-bold text-black mb-2">
                Fast Process
              </h3>
              <p className="text-sm text-black">
                Quick approval with minimal paperwork.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}