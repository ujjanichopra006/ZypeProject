"use client";
import Second from "../home/page2";
import Third  from "../home/page3";
import Forth from "../home/page4";
export default function Home() {
    return (
        <>
        <div className="relative min-h-screen flex items-center justify-center text-white">
            <img
                src="https://images.unsplash.com/photo-1557869737-514ed88cb747?w=600&auto=format&fit=crop&q=60"
                alt="loan image"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/60 text-center">.
                <p className="text-lg text-2xl mb-4 text-gray-300">
                    Paiso ka tension kyu lena... 
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 no-underline ">
                    KC hai na!
                </h1>
                <div className="w-40 h-1 bg-white mx-auto mb-6"></div>

                <p className="text-lg text-2xl mb-2">
                    Get Instant Personal Loan up to
                </p>

                <h2 className="text-3xl text-5xl font-bold text-white mb-4">
                    ₹5 Lakhs in 10 minutes
                </h2>


                <p className="text-sm text-base text-gray-300 mb-8">
                    Approval in 60 Seconds | 100% Digital Process | Instant Disbursal
                </p>


                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-samibold transition mb-8">
                    Apply Now
                </button>

                <div className="flex flex-col flex-row items-center justify-center gap-4">

                    <div className="border border-white px-6 py-3 rounded-lg">
                        Get it on Google Play
                    </div>

                    <div className="border border-white px-6 py-3 rounded-lg">
                        Download on App Store
                    </div>

                </div>

            </div>

        </div>
        <Second/>
        <Third/>
        <Forth/>
        </>
    );
}