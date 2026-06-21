"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// ⚠️ Apni JSON file ka sahi path yahan do
import cyberAnimation from "../../../animations/Networking flow.json";

const topics = [
  {
    title: "What is Cyber Crime?",
    content:
      "Cyber crime includes illegal activities performed through computers, smartphones, or the internet. It covers hacking, phishing, identity theft, malware attacks, data theft, and online financial fraud.",
  },
  {
    title: "Beware of Phishing Scams",
    content:
      "Fake emails, SMS messages, WhatsApp texts, and websites are often designed to steal your passwords, OTPs, and banking information. Always verify links before clicking.",
  },
  {
    title: "Create Strong Passwords",
    content:
      "Use a unique password for every account with a mix of letters, numbers, and symbols. Enable Two-Factor Authentication (2FA) whenever available.",
  },
  {
    title: "Stay Safe During Online Payments",
    content:
      "Never share your OTP, UPI PIN, ATM PIN, CVV, or internet banking password with anyone. Trusted banks never ask for these details over calls or messages.",
  },
  {
    title: "Identify Fake Websites & Apps",
    content:
      "Check the website URL carefully and make sure it starts with https://. Download apps only from official app stores and trusted developers.",
  },
  {
    title: "Protect Your Social Media Accounts",
    content:
      "Avoid oversharing personal information online. Accept friend requests only from people you know and regularly review your privacy settings.",
  },
  {
    title: "Keep Your Devices Updated",
    content:
      "Install software updates and use trusted antivirus protection. Security updates help protect your devices from newly discovered threats.",
  },
  {
    title: "What to Do If You Are Scammed",
    content:
      "Immediately change passwords, contact your bank, block compromised accounts, and report the incident to the appropriate cyber crime authorities.",
  },
];

export default function CyberSafetyBlog() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="min-h-screen bg-[#08111f] py-10 px-4 text-gray-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="rounded-[30px] border border-cyan-500/10 bg-[#101827]/90 backdrop-blur-lg overflow-hidden shadow-2xl">

          {/* Hero */}
          <div className="relative px-6 md:px-10 py-12 border-b border-white/10">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div data-aos="fade-right">
                <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 animate-pulse">
                  Cyber Security Guide
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight text-white">
                  Safety Awareness
                  <br />
                  <span className="text-cyan-400">
                    about Cyber Crime
                  </span>
                </h1>

                <p className="mt-6 text-gray-400 leading-8 max-w-xl">
                  Learn how to stay safe from phishing, hacking, identity theft,
                  fake websites, online shopping scams, and digital payment
                  fraud with practical cybersecurity awareness.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm">
                    📅 October 25, 2025
                  </span>
                  <span className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm">
                    🛡️ Cyber Awareness
                  </span>
                  <span className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm">
                    ⏱️ 5 Min Read
                  </span>
                </div>
              </div>

              {/* Right Animation */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex justify-center"
              >
                  <Lottie animationData={cyberAnimation} loop />
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div
            data-aos="flip-up"
            className="mx-6 md:mx-10 mt-10 rounded-3xl border-l-4 border-cyan-400 bg-cyan-500/5 p-6"
          >
            <p className="text-xl md:text-2xl font-semibold italic text-white leading-10">
              "Cyber security is not just about technology — it is about making
              safe choices every time you go online."
            </p>
          </div>

          {/* Timeline Topics */}
          <div className="px-6 md:px-10 py-12">
            <div className="relative border-l border-slate-700 ml-3 space-y-8">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-cyan-400 border-4 border-[#101827] animate-pulse"></div>

                  {/* Card */}
                  <div className="rounded-2xl border border-white/5 bg-slate-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                    <span className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                      Topic {String(index + 1).padStart(2, "0")}
                    </span>

                    <h2 className="mt-2 text-2xl font-bold text-white">
                      {topic.title}
                    </h2>

                    <p className="mt-4 leading-8 text-gray-400">
                      {topic.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Warning Box */}
            <div
              data-aos="zoom-in-up"
              className="mt-12 rounded-3xl border border-red-500/20 bg-red-500/10 p-6"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-3">
                ⚠️ Important Warning
              </h3>

              <p className="leading-8 text-gray-300">
                Never share your OTP, UPI PIN, CVV, ATM PIN, passwords, or
                banking details with anyone. Genuine banks and government
                agencies never ask for confidential information through phone
                calls, emails, or social media messages.
              </p>
            </div>

            {/* Safety Checklist */}
            <div className="mt-14">
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold text-white mb-6"
              >
                ✔ Quick Safety Checklist
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  "🔐 Use strong and unique passwords.",
                  "📲 Enable Two-Factor Authentication (2FA).",
                  "🚫 Never share OTP or UPI PIN.",
                  "🌐 Verify website URLs before logging in.",
                  "🛍️ Shop only from trusted platforms.",
                  "🛡️ Keep software and antivirus updated.",
                ].map((item, i) => (
                  <div
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                    className="rounded-2xl border border-white/5 bg-slate-800/40 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-500/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Banner */}
            <div
              data-aos="fade-up"
              className="mt-14 rounded-[28px] bg-gradient-to-r from-cyan-500/10 via-slate-800 to-cyan-500/10 p-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Think Before You Click.
              </h2>

              <p className="max-w-3xl mx-auto mt-5 text-gray-300 leading-8">
                A few seconds of verification can save you from identity theft,
                financial loss, and online fraud. Awareness and caution are your
                strongest digital defenses.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 border-t border-dashed border-slate-700 pt-6">
              <p className="text-center text-sm text-gray-500 leading-7">
                <span className="text-cyan-400 font-semibold">
                  Disclaimer:
                </span>{" "}
                This article is intended for educational and awareness purposes
                only. Cyber threats evolve continuously, so always follow
                official security recommendations and report suspicious
                activities to the appropriate authorities.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}