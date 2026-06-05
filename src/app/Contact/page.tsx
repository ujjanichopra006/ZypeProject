"use client";

import { useState } from "react";
import Link from "next/link";
export default function ContactPage() {
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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message Sent Successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen px-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

<div className="flex flex-col sm:flex-row justify-center gap-5 mb-10">
  <Link
  href="/contact"
  className="border border-blue-500 px-8 py-4 rounded-full font-semibold text-lg"
>
  Contact
</Link>

<Link
  href="/partner"
  className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg"
>
  Register as Partner
</Link>
</div>

       
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>

          <p className="text-gray-300 text-lg">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you soon.
          </p>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-10">

         
          <div className="border border-gray-300 rounded-3xl p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Ready to Get Started?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-14 px-5 rounded-xl bg-transparent border border-gray-300 text-white outline-none"
                required
              />

              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full h-14 px-5 rounded-xl bg-transparent border border-gray-300 text-white outline-none"
                required
              />

              <input
                type="tel"
                placeholder="+91 93xxxxxxx5"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full h-14 px-5 rounded-xl bg-transparent border border-gray-300 text-white outline-none"
                required
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-5 rounded-xl bg-transparent border border-gray-300 text-white outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-slate-600 hover:bg-slate-500 text-white text-xl font-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">

            <div className="bg-gray-700 w-100 h-45 rounded-3xl p-6">
              <h3 className="text-3xl font-bold mb-3">Our Address</h3>
              <p className="text-lg leading-8">
                233, Thakar Basti, Bagichi Mohalla,
                <br />
                Dharamshala Road,
                <br />
                Fatehabad-125050
              </p>
            </div>

            <div className="bg-gray-700 w-100 rounded-3xl p-6">
              <h3 className="text-3xl font-bold mb-3">Contact</h3>
              <p className="text-lg">keshvacredit@gmail.com</p>
            </div>

            <div className="bg-gray-700 w-100 h-40 rounded-3xl p-6">
              <h3 className="text-3xl font-bold mb-3">Working Hours</h3>
              <p className="text-lg leading-8">
                Mon - Fri: 09:00 AM - 05:00 PM
                <br />
                Sat - Sun: 09:00 AM - 01:00 PM
              </p>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=Fatehabad%20Haryana&t=&z=13&output=embed"
              loading="lazy"
              className="w-100 h-40 rounded-3xl border border-gray-300"
            />
          </div>
        </div>
        
        <div className="mt-24">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Why Choose KeshvaCredit?
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              As a trusted loan aggregator, we connect you with multiple
              lenders, so you can compare offers, get the best rates, and
              secure financing that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#58B98C] border border-blue-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                ✓ Multiple Lender Options
              </h3>

              <p className="text-black text-lg leading-relaxed">
                Access loans from a wide network of trusted banks and NBFCs —
                all in one place.
              </p>
            </div>

            <div className="bg-[#58B98C] border border-blue-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                ✓ Best Rate Comparison
              </h3>

              <p className="text-black text-lg leading-relaxed">
                Compare interest rates, processing fees, and terms instantly
                to find the most affordable option.
              </p>
            </div>

            <div className="bg-[#58B98C] border border-blue-400 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                ✓ Quick & Hassle-Free
              </h3>

              <p className="text-black text-lg leading-relaxed">
                Apply once and get matched with multiple offers — no need to
                approach each lender individually.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}