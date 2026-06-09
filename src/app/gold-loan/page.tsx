"use client";

export default function GoldLoan() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/gold money.avif')",
      }}
    >
      <div className="bg-black/50 px-10 py-8 rounded-3xl text-center">
        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-4">
          Coming Soon
        </h1>

        <p className="text-lg md:text-2xl text-white">
          Gold Loan Service is launching soon.
        </p>
      </div>
    </div>
  );
}