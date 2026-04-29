"use client";
export default function page3(){
    return(
<>
 <div className="flex flex-col-2 bg-gradient-to-r from-gray-600 via-black to-green-900">
<div className=" md:w-1/2">
    <h1 className="justify-center text-center font-bold text-white text-4xl">How to Calculate your Personal Loan EMI on ₹12,000 Loan?</h1>
     <ul className="mt-8 space-y-5 text-lg text-gray-800">
            <li className="flex items-center px-12 text-white gap-3">
              An Equated Monthly Installment (EMI) calculator is a vital tool that helps you plan your personal loan effectively by estimating your monthly repayment burden. It is crucial before you apply for an instant personal loan.
            </li>
            <li className="flex items-center px-12 text-white font-bold gap-3"> 
             How the EMI Calculator Helps You
            </li>
            <li className="flex items-center px-12 text-white gap-3">
             The calculator uses a simple formula to determine your EMI:
            </li>
            <li className="flex items-center  px-12 text-white gap-3">
            E = P × R × (1+R)N / ((1+R)N − 1)
            </li>
<li className="flex items-center  px-12 text-white gap-3">
        . E = Monthly EMI payment <br />
  . P = Principal Loan Amount <br />
 . R = Monthly Interest Rate (Annual Rate / 12 / 100) <br />
 . N = Loan Tenure in Months <br />
 By adjusting the loan amount, interest rate, and <br /> tenure, you can:
            </li>
<li className="flex items-center  px-12 text-white gap-3">
           . Determine Affordability: Instantly see if the resulting <br /> EMI fits within your monthly <br />
. Compare Options: Easily compare how different tenures affect your total <br /> interest outgo. A longer tenure lowers the EMI but increases the total interest <br />
. Plan Responsibly: Helps you borrow within your means and  <br />avoid over-borrowing, ensuring a hassle-free repayment journey.
            </li>
</ul> </div>
<div className="justify-center">
<img src="https://media.istockphoto.com/id/2187991365/photo/financial-investment-and-success-market-stock-technology-currency-report-money-business.jpg?s=612x612&w=0&k=20&c=q95u6uenSAQiwS0SgFV7KxF7M03oPIHMSkgRmtm88UE="
  className="w-100 h-100 md:w-auto md:h-[400px] object-cover shadow-2xl border-4 border-white mt-50 mr-100  rounded-full" />
</div>
</div>
<div className="bg-gradient-to-r from-gray-600 via-black to-green-900">
      <h1 className="text-4xl text-white font-bold text-center mb-14">
        Common Use Cases for an Instant Personal Loan
      </h1>

    
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        
        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
          <img
            src="/icons/money.png"
            alt="Debt"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h2 className="text-xl  text-black font-semibold mb-4">
            Debt Consolidation
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Use the loan to pay off multiple high-interest debts, such as credit card dues, simplifying your repayment into a single, lower-interest EMI.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
          <img
            src="/icons/ambulance.png"
            alt="Medical"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h2 className="text-xl  text-black font-semibold mb-4">
            Medical Emergencies
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cover urgent healthcare expenses, hospital bills, or medical treatments when insurance coverage is insufficient.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md text-center">
          <img
            src="/icons/home.png"
            alt="Home"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h2 className="text-xl  text-black font-semibold mb-4">
            Home Renovation/Repair
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fund essential repairs, upgrades, or redesigns of your living space without dipping into your core savings.
          </p>
        </div>

      </div>
    </div>
</>
    );
}