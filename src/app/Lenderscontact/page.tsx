"use client";

const lenders = [
  { name: "LoanTap", link: "https://loantap.in/contact-us/" },
  { name: "CreditSea", link: "https://www.creditsea.com/contact-us" },
  { name: "TrustPaisa", link: "https://trustpaisa.com/" },
  { name: "Payme", link: "https://www.paymeindia.in/contact/" },
  { name: "Branch", link: "https://branch.co/in/contact-us" },
  { name: "Ram FinCorp", link: "https://www.ramfincorp.com/contact-us" },
  { name: "Zype", link: "https://www.getzype.com/contact-us/" },
  { name: "Moneyview", link: "https://moneyview.in/contact-us" },
  { name: "FatakPay", link: "https://www.fatakpay.com/contact-us" },
  { name: "mPokket", link: "https://www.mpokket.in/contact" },
  { name: "olyv", link: "https://www.olyv.co.in/contactus" },
  { name: "Kamakshi Money", link: "https://www.kamakshimoney.com/contact.html" },
  { name: "SalaryOnTime", link: "https://salaryontime.com/contact-salaryontime" },
  { name: "Instant Mudra", link: "https://www.instantmudra.com/contact.php" },
];

export default function Lendercontact() {
  return (
    <section className="w-full min-h-screen bg-[#020d24] py-8 px-3">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-white text-2xl md:text-3xl font-bold mb-10">
          Lender Contact
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenders.map((lender, index) => (
            <div
              key={index}
              className="bg-[#868992] border border-gray-300 rounded-2xl h-[110px] flex flex-col items-center justify-center"
            >
              {/* Lender Name */}
              <h2 className="text-white text-[16px] md:text-[17px] font-bold text-center mb-3 px-2">
                {lender.name}
              </h2>

              {/* Button */}
              <a
                href={lender.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white text-[12px] font-semibold px-5 py-1.5 rounded-full"
              >
                Contact Lender
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}