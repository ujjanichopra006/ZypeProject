"use client";

import Link from "next/link";
import {
  ShieldCheck,
  UserLock,
  FileText,
  Archive,
  Info,
} from "lucide-react";

const policies = [
  {
    title: "Data Breach Policy",
    desc: "Outlines the steps we take to detect, respond to, and notify you in the event of a data breach.",
    icon: <ShieldCheck size={28} />,
    bg: "bg-blue-500",
    link: "/DataBreachPolicy",
  },
  {
    title: "Data Privacy Policy",
    desc: "Explains how we collect, use, and safeguard your personal information to protect your privacy.",
    icon: <UserLock size={28} />,
    bg: "bg-green-500",
    link: "/DataPrivacyPolicy",
  },
  {
    title: "Data Protection Policy",
    desc: "Details the security measures and compliance standards we follow to protect your data.",
    icon: <FileText size={28} />,
    bg: "bg-red-500",
    link: "/DataProtectionPolicy",
  },
  {
    title: "Data Retention & Deletion Policy",
    desc: "Clarifies how long we store your data and the process for safely deleting it when no longer needed.",
    icon: <Archive size={28} />,
    bg: "bg-gradient-to-r from-purple-500 to-fuchsia-500",
    link: "/DataRetentionDeletionPolicy",
  },
  {
    title: "Information Security Policy",
    desc: "Covers the practices, tools, and protocols we use to ensure your data remains safe and secure.",
    icon: <Info size={28} />,
    bg: "bg-yellow-500",
    link: "/InformationSecurityPolicy",
  },
];

export default function DataPolicy() {
  return (
    <section className="min-h-screen bg-[#020f26] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Data Policies
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-300">
            Learn about how we handle your data and keep it secure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((item, index) => (
            <Link key={index} href={item.link}>
              <div
                className={`${item.bg} rounded-3xl p-5 h-[180px] flex flex-col items-center justify-center text-center text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <div className="mb-2">{item.icon}</div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold leading-tight mb-1">
                  {item.title}
                </h3>

                {/* Blinking Click Text */}
                <p className="text-[10px] text-white/80 mb-2 animate-pulse font-semibold tracking-wider uppercase">
                  Click to View
                </p>

                {/* Description */}
                <p className="text-xs leading-5 text-white/90 max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}