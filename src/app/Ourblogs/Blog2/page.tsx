"use client";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
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
              Is Crypto Still a Good{" "}
              <span className="text-emerald-400">
               Investment in 2026? A
              </span>{" "}
              <span className="text-cyan-400">
                Realistic Breakdown
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-gray-300 text-sm leading-7 max-w-xl">
             No hype. No blind shilling. Just an honest look at whether
             Bitcoin, Ethereum, and the broader crypto market still
             make sense for investors in 2026. 🔍
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-white/10 px-3 py-1 rounded-full text-[11px]">
                ⏱ 7–9 min read
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-[11px]">
                🧠 Beginner-Friendly
              </span>

              <span className="bg-white/10 px-3 py-1 rounded-full text-[11px]">
               ⚠️ Not Financial Advice
              </span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full lg:w-[300px]">
            <div className="bg-gradient-to-br from-[#0f2a3a] to-[#0b1b2a] border border-teal-500/30 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold">
                 Market snapshot
                </h3>

                <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-full">
                  2026
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                   🟡 Bitcoin (BTC)
                  </span>
                  <span className="text-green-400 font-medium">
                   Volatile
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                   🟣 Ethereum (ETH)
                  </span>
                  <span className="text-yellow-400 font-medium">
                   Growing
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">
                    🟢 Altcoins
                  </span>
                  <span className="text-red-400 font-medium">
                    High Risk
                  </span>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-400 leading-5">
               Crypto can still be powerful in a diversified portfolio — if you understand the risks and play the long game. 🧭
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOG CONTENT ================= */}
      <section className="bg-[#0b1220] text-gray-300 px-4 pb-14">
  <div className="max-w-5xl mx-auto">
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg space-y-8">
      <p className="text-sm leading-7">
        Cryptocurrency has been one of the most talked-about investment
        options of the last decade. From creating overnight millionaires to
        causing massive losses, crypto has seen extreme highs and painful
        lows.
      </p>

      <p className="text-sm leading-7">
        So the big question in 2026 is: <strong>Is crypto still a good
        investment, or has the opportunity already passed?</strong>
      </p>

      <p className="text-sm leading-7">
        Let’s break it down honestly — without hype.
      </p>

      {/* What is Cryptocurrency */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          What Is Cryptocurrency?
        </h2>

        <p className="text-sm leading-7">
          Cryptocurrency is a digital asset built on blockchain technology.
          It operates without a central authority like banks or governments.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm mt-4">
          <li>
            <strong>Bitcoin (BTC)</strong> – Often referred to as digital
            gold.
          </li>
          <li>
            <strong>Ethereum (ETH)</strong> – Powers smart contracts and
            decentralized applications.
          </li>
          <li>
            <strong>Solana & Polygon</strong> – High-speed blockchain
            platforms.
          </li>
          <li>
            <strong>Stablecoins</strong> – Assets like USDT and USDC designed
            to maintain stable value.
          </li>
        </ul>
      </div>

      {/* State of Crypto */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          The State of Crypto in 2026
        </h2>

        <p className="text-sm leading-7">
          Crypto is no longer a new experiment. Today, it is more regulated,
          institutionally adopted, and integrated into global finance than
          ever before.
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm mt-4">
          <li>Institutional investors hold Bitcoin.</li>
          <li>Governments impose crypto regulations and taxes.</li>
          <li>Blockchain technology is being used beyond trading.</li>
        </ul>
      </div>

      {/* Reasons */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
          Reasons Crypto Can Still Be a Good Investment
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-base font-semibold text-emerald-400">
              1️⃣ Long-Term Growth Potential
            </h3>
            <p className="text-sm mt-1 leading-7">
              Bitcoin has a fixed supply of 21 million coins. Scarcity,
              combined with increasing demand, makes it attractive as a
              long-term store of value.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-emerald-400">
              2️⃣ Institutional Adoption
            </h3>
            <p className="text-sm mt-1 leading-7">
              Large banks, hedge funds, and payment companies are now part of
              the crypto ecosystem, adding credibility and liquidity.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-emerald-400">
              3️⃣ Real-World Use Cases
            </h3>
            <p className="text-sm mt-1 leading-7">
              Crypto powers decentralized finance (DeFi), utility-based NFTs,
              cross-border payments, and smart contracts that reduce the need
              for intermediaries.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-emerald-400">
              4️⃣ High Return Potential
            </h3>
            <p className="text-sm mt-1 leading-7">
              Despite volatility, cryptocurrency has historically
              outperformed many traditional asset classes during strong market
              cycles.
            </p>
          </div>
        </div>
      </div>

      {/* Risks */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-5">
          Risks You Must Consider
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="text-base font-semibold text-red-400">
              1️⃣ High Volatility
            </h3>
            <p className="text-sm mt-1 leading-7">
              Crypto prices can rise or fall dramatically within weeks,
              making it unsuitable for short-term or emotional investors.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-red-400">
              2️⃣ Regulations
            </h3>
            <p className="text-sm mt-1 leading-7">
              Governments around the world are tightening crypto regulations,
              which can improve safety but may also impact market growth.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-red-400">
              3️⃣ Scams and Weak Projects
            </h3>
            <p className="text-sm mt-1 leading-7">
              Many crypto projects fail or turn out to be fraudulent.
              Investing without proper research can lead to a complete loss of
              funds.
            </p>
          </div>
        </div>
      </div>

      {/* Who Should Invest */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Who Should Invest in Crypto?
        </h2>

        <p className="text-sm leading-7">
          Cryptocurrency may be suitable if you:
        </p>

        <ul className="list-disc list-inside space-y-2 text-sm mt-4">
          <li>Have a long-term investment mindset (3–5+ years).</li>
          <li>Can tolerate market volatility.</li>
          <li>Invest only what you can afford to lose.</li>
        </ul>

        <p className="mt-4 text-sm leading-7">
          Crypto is generally not ideal if you are looking for guaranteed or
          short-term returns.
        </p>
      </div>

      {/* Strategy */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Smart Crypto Investment Strategy for 2026
        </h2>

        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Focus on established projects like Bitcoin and Ethereum.</li>
          <li>Use Dollar-Cost Averaging (DCA) to reduce market timing risk.</li>
          <li>Store long-term holdings securely using hardware wallets.</li>
          <li>Diversify your portfolio instead of relying only on crypto.</li>
        </ul>
      </div>

      {/* Final Verdict */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
          Final Verdict
        </h2>

        <p className="text-sm leading-7">
          Crypto can still be a good investment in 2026 — but only for
          informed and disciplined investors. The market has matured, but
          opportunities remain for those who understand the risks and take a
          long-term approach.
        </p>

        <p className="text-sm leading-7 mt-3">
          Investors who treat cryptocurrency as a long-term technology
          investment, rather than a get-rich-quick scheme, may continue to
          benefit from the growth of the digital asset ecosystem.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10 pt-5">
        <p className="text-xs text-gray-400 italic leading-6">
          <strong>Disclaimer:</strong> This article is for educational
          purposes only and does not constitute financial or investment
          advice. Cryptocurrency investments involve market risk. Always do
          your own research and consult a qualified financial advisor before
          making any investment decisions.
        </p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}