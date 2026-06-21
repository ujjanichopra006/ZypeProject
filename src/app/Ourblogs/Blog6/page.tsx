"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 📌 Replace this with your own animation file
import brainAnimation from "../../../animations/phone.json";

export default function PhoneBrainBlog() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const sections = [
    {
      title: "The Digital Age and Our Daily Lives",
      content:
        "Smartphones have become an essential part of modern life. From communication and education to entertainment and shopping, mobile apps help us stay connected and productive. However, constant connectivity also means our brains are exposed to an endless stream of information, notifications, and digital distractions throughout the day.",
    },
    {
      title: "How Notifications Capture Your Attention",
      content:
        "Every notification is designed to grab your attention immediately. Bright colors, sounds, vibrations, and badges trigger curiosity and encourage you to check your phone. Frequent interruptions can reduce focus and make it harder to concentrate on important tasks for long periods.",
    },
    {
      title: "The Science Behind the Reward System",
      content:
        "Many social media platforms and mobile apps are designed around reward-based experiences. Likes, comments, streaks, and achievements provide small moments of satisfaction that encourage repeated engagement. Over time, this can create habits where people instinctively check their phones even without receiving a notification.",
    },
    {
      title: "Impact on Focus and Productivity",
      content:
        "Switching between apps, messages, and notifications can interrupt deep thinking. Research suggests that frequent task-switching may reduce productivity and increase the time needed to complete work or study-related activities. Even a quick glance at a notification can break concentration.",
    },
    {
      title: "Effects on Sleep Quality",
      content:
        "Using smartphones late at night may affect sleep patterns. Bright screens and constant engagement can make it difficult for the mind to relax before bedtime. Reducing screen exposure and limiting notifications in the evening can help support healthier sleep habits.",
    },
    {
      title: "Social Media and Emotional Well-Being",
      content:
        "Social media allows people to connect and share experiences, but excessive use may also lead to comparison, information overload, and digital fatigue. Maintaining a balanced relationship with technology can contribute to a healthier online experience.",
    },
    {
      title: "Building Healthy Digital Habits",
      content:
        "Creating small boundaries can make a big difference. Turning off unnecessary notifications, setting app time limits, taking regular breaks, and scheduling screen-free moments during the day can help reduce distractions and improve overall well-being.",
    },
    {
      title: "Using Technology Mindfully",
      content:
        "Technology itself is not the problem—it is how we use it. Smartphones can be powerful tools for learning, communication, and creativity when used intentionally. Developing mindful digital habits allows us to enjoy the benefits of technology without letting it dominate our attention.",
    },
  ];

  const healthyHabits = [
    "📴 Turn off non-essential notifications.",
    "⏳ Set daily screen-time limits for social media apps.",
    "📚 Avoid checking your phone while studying or working.",
    "🌙 Reduce screen use 30–60 minutes before bedtime.",
    "🚶 Take short offline breaks during the day.",
    "👨‍👩‍👧 Spend quality time with family and friends without devices.",
  ];

  return (
    <section className="min-h-screen bg-[#0b1020] py-10 px-4 text-gray-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-[32px] border border-indigo-500/10 bg-slate-900/90 backdrop-blur-lg shadow-2xl">

          {/* ================= HERO SECTION ================= */}
          <div className="relative px-6 md:px-10 py-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div data-aos="fade-right">
                <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  📱 Digital Wellness Guide
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight text-white">
                  How Your Phone
                  <br />
                  <span className="text-indigo-400">
                    is Rewiring
                  </span>
                  <br />
                  <span className="text-cyan-400">
                    Your Brain
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                  Discover how mobile apps, notifications, and constant digital
                  interactions influence your attention, focus, sleep, and
                  everyday habits—and learn practical ways to build a healthier
                  relationship with technology.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    📅 November 12, 2025
                  </span>

                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    🧠 Mental Wellness
                  </span>

                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    📱 Digital Lifestyle
                  </span>
                </div>
              </div>

              {/* Right Animation */}
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex justify-center"
              >
                <div className="w-[190px] h-[190px] md:w-[280px] md:h-[280px] rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-5 hover:scale-105 transition-all duration-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.2)]">
                  <Lottie
                    animationData={brainAnimation}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= INTRO CARD ================= */}
          <div
            data-aos="fade-up"
            className="mx-6 md:mx-10 rounded-3xl border border-indigo-500/10 bg-gradient-to-r from-indigo-500/5 via-slate-800 to-cyan-500/5 p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Digital Awareness Matters
            </h2>

            <p className="leading-8 text-gray-300">
              Smartphones have transformed the way we learn, work, and
              communicate. While these devices offer incredible convenience,
              constant notifications and endless scrolling can influence our
              attention patterns and daily routines. Understanding these effects
              can help us make more balanced and mindful technology choices.
            </p>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="px-6 md:px-10 py-12">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className="group rounded-3xl border border-slate-700 bg-slate-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {section.title}
                      </h2>

                      <p className="mt-4 text-gray-400 leading-8">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= DIGITAL BALANCE BOX ================= */}
            <div
              data-aos="zoom-in-up"
              className="mt-14 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                💡 The Goal Is Balance, Not Elimination
              </h2>

              <p className="leading-8 text-gray-300">
                Smartphones and mobile apps are valuable tools that help us stay
                informed and connected. The objective is not to avoid technology
                completely, but to use it intentionally. Creating healthy
                boundaries allows you to enjoy the benefits of digital
                innovation while protecting your focus and well-being.
              </p>
            </div>

            {/* ================= HEALTHY HABITS ================= */}
            <div className="mt-14">
              <h2
                data-aos="fade-up"
                className="text-3xl font-bold text-white mb-6"
              >
                ✔ Healthy Digital Habits
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {healthyHabits.map((habit, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="rounded-2xl border border-white/10 bg-slate-800/50 p-5 transition-all duration-300 hover:scale-[1.03] hover:bg-indigo-500/10"
                  >
                    {habit}
                  </div>
                ))}
              </div>
            </div>

            {/* ================= CONCLUSION ================= */}
            <div
              data-aos="fade-up"
              className="mt-16 rounded-[28px] bg-gradient-to-r from-indigo-500/10 via-slate-800 to-cyan-500/10 p-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Use Technology. Don't Let Technology Use You.
              </h2>

              <p className="max-w-3xl mx-auto mt-5 leading-8 text-gray-300">
                Small changes—such as limiting distractions, reducing screen
                time before bed, and taking regular offline breaks—can improve
                focus, support better sleep, and encourage healthier digital
                habits. Awareness is the first step toward building a more
                balanced relationship with your devices.
              </p>
            </div>

            {/* ================= DISCLAIMER ================= */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-5">
              <p className="text-sm leading-7 text-gray-400">
                <span className="font-semibold text-indigo-400">
                  Disclaimer:
                </span>{" "}
                This article is intended for educational and informational
                purposes only. It provides general awareness about digital
                habits and technology use and should not be considered medical,
                psychological, or professional health advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}