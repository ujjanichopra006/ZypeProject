"use client";
export default function Fifth() {
    return (

        <>
            <div className="relative flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gray-100 text-black py-6 md:px-10">
                <div className=" p-6 rounded-2xl shadow-lg flex gap-6">

                    <div className="w-1/3 bg-teal-600  p-11 rounded-xl">
                        <h2 className="text-xl text-black font-bold">Instant Funds, Endless Possibilities</h2>
                        <p>Get quick access to funds whenever you need them! <br />Fast approvals, hassle-free processing, <br />and secure transactions make fulfilling your financial needs easier than ever.</p>
                    </div>
                    <div className="w-2/3 bg-gray-100 p-4 rounded-xl">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-teal-600  text-black p-4 rounded-lg shadow flex items-center gap-4">
                                <img
                                    src="/personal loan"
                                    alt="Personal Loan"
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                <div>
                                    Get instant personal loans with KeshvaCredit at competitive rates. minimal docs, quick approval & RBI-regulated
                                    <br />
                                    <strong>personal Loan</strong>
                                </div>
                            </div>

                            <div className="bg-teal-600  text-black p-4 rounded-lg shadow flex items-center gap-4">
                                <img
                                    src="/home loan"
                                    alt="Home Loan"
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                <div>
                                    Affordable home loans at competitive interest rates. Quick approval,
                                    minimal paperwork, flexible options, and RBI-backed partners.
                                    <br />
                                    <strong>Home Loan</strong>
                                </div>
                            </div>

                            <div className="bg-teal-600 text-black p-4 rounded-lg shadow flex items-center gap-4">
                                <img
                                    src="/credit loan"
                                    alt="Credit Card"
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                <div>
                                    Borrow up to your limit for purchases or bills. Repay monthly.
                                    Flexible and secure credit tool for all needs.
                                    <br />
                                    <strong>Credit Card</strong>
                                </div>
                            </div>

                            <div className="bg-teal-600 text-black p-4 rounded-lg shadow flex items-center gap-4">
                                <img
                                    src="/business loan"
                                    alt="Business Loan"
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                <div>
                                    Enjoy smooth transactions, premium perks, cashback, and secure
                                    RBI-backed loan services. Low interest, high rewards.
                                    <br />
                                    <strong>Business Loan</strong>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}