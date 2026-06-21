"use client";

export default function Hero() {
  return (
    <>
    <section className="bg-[#0b1220] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
        
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[65%]">
          {/* Top Label */}
          <p className="text-green-400 text-[10px] sm:text-xs tracking-[0.18em] mb-3 flex items-center gap-2 font-medium">
            📊 FINTECH AWARENESS • 2026
          </p>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Credit Score Awareness in India{" "}
            <span className="text-emerald-400">Why It Matters</span>{" "}
            <span className="text-cyan-400">More Than Ever</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-xs sm:text-sm md:text-[15px] leading-6 max-w-xl">
            Your credit score is your financial reputation. In 2026, digital
            lending decisions happen in seconds — and your score decides whether
            you get approved, rejected, or charged higher interest. 🔍
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="bg-white/10 px-3 py-1 rounded-full text-[11px]">
              ⏱ 6–8 min read
            </span>

            <span className="bg-white/10 px-3 py-1 rounded-full text-[11px]">
              🧠 Beginner-Friendly
            </span>

            <span className="bg-white/10 px-3 py-1 rounded-full text-[11px]">
              🇮🇳 India Focused
            </span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full lg:w-[300px]">
          <div className="bg-gradient-to-br from-[#0f2a3a] to-[#0b1b2a] border border-teal-500/30 rounded-2xl p-4 shadow-lg">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">
                Score Snapshot
              </h3>

              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full">
                300 – 900
              </span>
            </div>

            {/* Score Items */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  Excellent (750+)
                </span>
                <span className="text-green-400 font-medium">
                  High Approval
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  Average (650–749)
                </span>
                <span className="text-yellow-400 font-medium">
                  Moderate Risk
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  Below 650
                </span>
                <span className="text-red-400 font-medium">
                  High Risk
                </span>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-4 text-[11px] text-gray-400 leading-5">
              A strong credit score can save you lakhs in interest over time.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section className="bg-[#0b1220] text-gray-300 px-4 pb-14">
  <div className="max-w-5xl mx-auto">
    <div
      className="bg-[#111827] border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg space-y-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p
        className="text-sm leading-7"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        In today’s digital-first India, your credit score plays a crucial
        role in determining your financial opportunities. Whether you
        apply for a personal loan, credit card, or home loan, lenders
        assess your credit profile before making a decision.
      </p>

      <p
        className="text-sm leading-7"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Regulated under the guidelines of the Reserve Bank of India (RBI),
        digital lending platforms now rely heavily on automated credit
        assessments.
      </p>

      {/* What is Credit Score */}~
      <div data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          What Is a Credit Score?
        </h2>

        <p className="text-sm leading-7">
          A credit score is a three-digit number ranging from 300 to 900
          that represents your creditworthiness. In India, one of the most
          widely used scores is issued by TransUnion CIBIL.
        </p>

        <p className="text-sm leading-7 mt-3">
          Generally, a score of 750 or above is considered excellent and
          improves your chances of quick approval and lower interest
          rates.
        </p>
      </div>

      {/* Importance */}
      <div data-aos="fade-up" data-aos-delay="250">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Why Credit Score Awareness Is Important in 2026
        </h2>

        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Instant digital loan approvals</li>
          <li>AI-based underwriting models</li>
          <li>Risk-based interest pricing</li>
          <li>UPI-linked credit lines and BNPL growth</li>
        </ul>

        <p className="mt-4 text-sm leading-7">
          A higher score means better financial flexibility and lower
          borrowing costs.
        </p>
      </div>

      {/* Factors */}
      <div data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
          Factors That Affect Your Credit Score
        </h2>

        <div className="space-y-5">
          <div data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-base font-semibold text-emerald-400">
              1️⃣ Payment History
            </h3>
            <p className="text-sm mt-1 leading-7">
              Late EMI or credit card payments significantly reduce your
              score. Timely payments build trust with lenders.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="150">
            <h3 className="text-base font-semibold text-emerald-400">
              2️⃣ Credit Utilisation Ratio
            </h3>
            <p className="text-sm mt-1 leading-7">
              Using more than 30–40% of your credit limit may negatively
              impact your score.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-base font-semibold text-emerald-400">
              3️⃣ Length of Credit History
            </h3>
            <p className="text-sm mt-1 leading-7">
              Older credit accounts demonstrate stability and improve your
              score.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="250">
            <h3 className="text-base font-semibold text-emerald-400">
              4️⃣ Credit Mix
            </h3>
            <p className="text-sm mt-1 leading-7">
              A balanced mix of secured and unsecured loans strengthens
              your credit profile.
            </p>
          </div>

          <div data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-base font-semibold text-emerald-400">
              5️⃣ Hard Inquiries
            </h3>
            <p className="text-sm mt-1 leading-7">
              Applying for multiple loans within a short period can lower
              your score.
            </p>
          </div>
        </div>
      </div>

      {/* Improve Score */}
      <div data-aos="fade-up" data-aos-delay="350">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          How to Improve Your Credit Score
        </h2>

        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Pay EMIs and credit card bills on time.</li>
          <li>Keep credit utilisation below 30%.</li>
          <li>Avoid unnecessary loan applications.</li>
          <li>Check your credit report regularly.</li>
          <li>Maintain older credit accounts responsibly.</li>
        </ul>
      </div>

      {/* Myths */}
      <div data-aos="fade-up" data-aos-delay="400">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Common Myths About Credit Scores
        </h2>

        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>❌ Checking your own credit score reduces it (False)</li>
          <li>❌ High salary guarantees approval (False)</li>
          <li>
            ❌ Closing old accounts always improves score (Not always)
          </li>
        </ul>
      </div>

      {/* Final Thoughts */}
      <div data-aos="fade-up" data-aos-delay="450">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Final Thoughts
        </h2>

        <p className="text-sm leading-7">
          Credit score awareness is not optional anymore — it is
          essential. In 2026, financial institutions rely heavily on
          digital credit evaluation systems.
        </p>

        <p className="text-sm leading-7 mt-3">
          Building a strong credit profile today can help you secure
          better loan terms, faster approvals, and greater financial
          freedom in the future.
        </p>
      </div>

      {/* Disclaimer */}
      <div
        className="border-t border-white/10 pt-5"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p className="text-xs text-gray-400 italic leading-6">
          <strong>Disclaimer:</strong> This article is for educational
          purposes only and does not constitute financial advice. Please
          consult a financial professional before making credit decisions.
        </p>
      </div>
    </div>
  </div>
</section>
</>
  );
}