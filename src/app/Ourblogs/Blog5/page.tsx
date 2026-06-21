"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";

// 👉 Replace this with your own Lottie JSON file
import financeAnimation from "../../../animations/Easy loan.json";

export default function PersonalLoanGuide() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const loanTopics = [
    {
      title: "Understanding Personal Loans",
      content:
        "A personal loan is an unsecured loan that allows individuals to borrow money without providing collateral. It can be used for a variety of purposes, including medical emergencies, home renovation, education expenses, travel, weddings, or consolidating existing debts.",
    },
    {
      title: "Compare Interest Rates Carefully",
      content:
        "Interest rates have a direct impact on the total amount you repay. Before applying, compare offers from multiple banks and financial institutions. Even a small difference in the interest rate can save you a significant amount over the loan tenure.",
    },
    {
      title: "Check Processing Fees & Hidden Charges",
      content:
        "In addition to the interest rate, review processing fees, prepayment charges, foreclosure fees, and late payment penalties. Understanding the complete cost structure helps you avoid unexpected expenses later.",
    },
    {
      title: "Review Eligibility Requirements",
      content:
        "Banks evaluate factors such as age, monthly income, employment status, work experience, and credit history before approving a loan. Checking eligibility in advance can improve your approval chances.",
    },
    {
      title: "Importance of a Good Credit Score",
      content:
        "A strong credit score reflects responsible financial behavior. Higher credit scores often increase the likelihood of loan approval and may help you qualify for better interest rates and flexible repayment terms.",
    },
    {
      title: "Choose the Right Loan Tenure",
      content:
        "A longer repayment period may reduce your monthly EMI but increase the overall interest paid. A shorter tenure may save money on interest but result in higher monthly installments. Select an option that fits your financial situation.",
    },
    {
      title: "Benefits of Online Loan Applications",
      content:
        "Many banks now provide fully digital application processes. Online applications offer convenience, quick document uploads, faster eligibility checks, and often quicker approval and disbursement times.",
    },
    {
      title: "Read All Terms & Conditions",
      content:
        "Always review the complete loan agreement before accepting an offer. Pay attention to repayment schedules, foreclosure rules, penalty charges, and any additional clauses that may affect your obligations.",
    },
    {
      title: "Borrow Responsibly",
      content:
        "Only borrow the amount you genuinely need and make sure the monthly EMI comfortably fits your budget. Responsible borrowing helps maintain financial stability and reduces the risk of future debt stress.",
    },
  ];

  const quickTips = [
    "Compare offers from multiple banks before applying.",
    "Maintain a healthy credit score for better rates.",
    "Check processing fees and hidden charges.",
    "Read the complete terms and conditions carefully.",
    "Choose an EMI that matches your monthly income.",
    "Borrow only the amount you actually need.",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-10 px-4 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden rounded-[32px] border border-emerald-500/10 bg-slate-900/80 backdrop-blur-md shadow-2xl">

          {/* Hero Section */}
          <div className="relative px-6 md:px-10 py-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div data-aos="fade-right">
                <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.25em] font-semibold text-emerald-300">
                  💰 Finance & Banking Guide
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight text-white">
                  Best Personal
                  <br />
                  <span className="text-emerald-400">
                    Loan Banks
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl text-gray-300">
                    2024 Guide
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                  A practical guide to choosing the right personal loan bank in
                  2024. Learn how to compare interest rates, eligibility,
                  processing fees, loan tenure, and repayment options before
                  making a financial decision.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    📅 January 15, 2024
                  </span>

                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    💳 Personal Loans
                  </span>

                  <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm">
                    📚 Finance & Banking
                  </span>
                </div>
              </div>

              {/* Lottie Animation */}
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex justify-center"
              >
                <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-3xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 p-5 hover:scale-105 transition-all duration-500">
                  <Lottie
                    animationData={financeAnimation}
                    loop={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div
            data-aos="fade-up"
            className="mx-6 md:mx-10 rounded-3xl border border-emerald-500/10 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choosing the Right Personal Loan Matters
            </h2>

            <p className="text-gray-300 leading-8">
              Personal loans can help you manage important life events and
              unexpected expenses without liquidating your savings. However,
              selecting the wrong lender may result in higher costs, hidden
              charges, and repayment challenges. Understanding how banks
              evaluate applications and comparing available options can help you
              make a more informed and financially responsible choice.
            </p>
          </div>

          {/* Main Content */}
          <div className="px-6 md:px-10 py-12">
            <div className="grid gap-6">
              {loanTopics.map((topic, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  className="group rounded-3xl border border-slate-700 bg-slate-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {topic.title}
                      </h2>

                      <p className="mt-4 leading-8 text-gray-400">
                        {topic.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Tips */}
            <div
              data-aos="zoom-in-up"
              className="mt-14 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                ✔ Quick Tips Before Applying
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {quickTips.map((tip, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 transition-all duration-300 hover:bg-emerald-500/10 hover:scale-[1.02]"
                  >
                    <span className="text-emerald-400 mr-2">✔</span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Box */}
            <div
              data-aos="fade-up"
              className="mt-14 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-slate-800 to-blue-500/10 p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                💡 Smart Borrowing Advice
              </h3>

              <p className="leading-8 text-gray-300">
                The lowest interest rate is not always the only factor to
                consider. Evaluate the complete loan package, including fees,
                repayment flexibility, customer service, and your own repayment
                capacity. Responsible borrowing and careful comparison can help
                you avoid unnecessary financial pressure in the future.
              </p>
            </div>

            {/* Conclusion */}
            <div
              data-aos="fade-up"
              className="mt-14 border-t border-white/10 pt-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Make Informed Financial Decisions
              </h2>

              <p className="max-w-3xl mx-auto mt-5 text-gray-300 leading-8">
                Choosing the best personal loan bank is about finding a balance
                between affordability, flexibility, and reliability. By
                comparing multiple lenders, maintaining a good credit profile,
                and understanding the complete loan agreement, you can make a
                decision that supports your long-term financial well-being.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800/50 p-5">
              <p className="text-sm leading-7 text-gray-400">
                <span className="font-semibold text-emerald-400">
                  Disclaimer:
                </span>{" "}
                This article is intended for general informational and
                educational purposes only. Loan products, interest rates,
                eligibility criteria, and fees may vary between banks and
                financial institutions and are subject to change. Readers should
                verify the latest information directly with the respective
                lender before making any financial decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}