"use client";
export default function page2() {
    return (
        <section className="bg-gradient-to-r from-gray-600 via-black to-green-900 py-12 px-6">

            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">

                <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-black">
                    As Featured On:
                </h2>


                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">

                    <img
                        src="https://www.getzype.com/wp-content/uploads/2024/08/Group-6.png"
                        alt="Times of India"
                        className="h-2 md:h-4 object-contain"
                    />

                    <img
                        src="https://www.getzype.com/wp-content/uploads/2024/08/Group-852775725.png"
                        alt="Moneycontrol"
                        className="h-8 md:h-10 object-contain"
                    />

                    <img
                        src="https://www.getzype.com/wp-content/uploads/2024/08/Group-7.png"
                        alt="Inc42"
                        className="h-8 md:h-10 object-contain"
                    />

                    <img
                        src="https://www.getzype.com/wp-content/uploads/2024/08/Group-852775727.png"
                        alt="LiveMint"
                        className="h-8 md:h-10 object-contain"
                    />

                </div>
            </div>
            <div className=" text-center text-white font-bold text-4xl mt-10">Advantages of Our KC Personal Loan App</div>

            <div className="grid grid-cols-3 gap-4 p-6">

                <div className="bg-white text-black p-6 text-center rounded-lg"><h1 className="text-2xl font-bold">Lower Interest Rates</h1><p>Get personal loan on rates as low as 1.5% per month</p></div>
                <div className="bg-white text-black p-6 text-center rounded-lg"><h1 className="text-2xl font-bold">Fast Processing and Disbursal</h1><p>Fast Processing and Disbursal</p></div>
                <div className="bg-white text-black p-6 text-center rounded-lg"><h1 className="text-2xl font-bold">Easy Repayment Options</h1><p>Flexible repayment plans of 6, 9, 12 or 18 to manage your budget easily</p></div>

                <div className="bg-white text-black p-6 text-center rounded-lg"><h1 className="text-2xl font-bold ">100% Paperless</h1><p>No paperwork. Just apply, sign, and get funds online</p></div>
                <div className="bg-white text-black p-6 text-center rounded-lg"><h1 className="text-2xl font-bold">Safe, Secure and Transparen</h1><p>Your data safe, your terms are clear. No surprises</p></div>
                <div className="bg-white text-black p-6 text-center rounded-lg"><h1 className="text-2xl font-bold">Collateral Free</h1><p>Get the funds you need, no need to pledge any asset or security</p></div>

            </div>
            <div className="bg-white text-black px-6 py-6 rounded-lg max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">

                <div className="md:w-1/2">
                    <h1 className="font-bold text-3xl md:text-4xl mb-4">
                        A Smarter Way to Borrow
                    </h1>

                    <p className="text-base leading-relaxed">
                        Get approved for an instant personal loan of up to Rs 5 lakhs through our instant loan app!
                        Enjoy a flexible loan limit that’s always at your fingertips using KC.
                        Transfer the amount you need directly to your bank account and pay interest only on the borrowed amount.
                    </p>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://www.getzype.com/wp-content/uploads/2026/04/1703202317.webp"
                        alt="mobile phone"
                        className="h-60 md:h-72 object-contain"
                    />
                </div>

            </div>

            <div className="w-full py-10">

                <h1 className="text-2xl text-white font-bold text-center mb-10">
                    🚀 Get Your Loan Approved in Just Few Clicks
                </h1>


                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">


                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-blue-500 hover:bg-green-500 hover:scale text-white flex items-center justify-center text-xl font-bold  hover:shadow-lg ;">
                            1
                        </div>
                        <div className="mt-5 bg-white shadow-md rounded-2xl p-5 w-full">

                            <h2 className="text-lg  text-black font-semibold mb-2 underline">
                                Download & Sign Up
                            </h2>

                            <p className="text-sm text-gray-600">
                                Create your account in minutes by entering your basic details. Start your journey with a simple and quick registration process.
                            </p>

                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center">

                        <div className="w-20 h-20 rounded-full bg-green-500 hover:bg-red-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                            2
                        </div>

                        <div className="mt-5 bg-white shadow-md rounded-2xl p-5 w-full">

                            <h2 className="text-lg text-black font-semibold mb-2 underline">
                                Check Eligibility & Apply
                            </h2>

                            <p className="text-sm text-gray-600">
                                Enter PAN details and check eligibility instantly.Apply for a personal loan with a smooth and hassle-free process.
                            </p>

                        </div>
                    </div>


                    <div className="flex flex-col items-center text-center">

                        <div className="w-20 h-20 rounded-full bg-purple-500 hover:bg-gray-500 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                            3
                        </div>

                        <div className="mt-5 bg-white shadow-md rounded-2xl p-5 w-full">

                            <h2 className="text-lg text-black font-semibold mb-2 underline">
                                Verify KYC & Get Funds
                            </h2>

                            <p className="text-sm text-gray-600">
                                Complete KYC and receive money directly in your bank account.Fast, secure, and reliable disbursal within minutes.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}