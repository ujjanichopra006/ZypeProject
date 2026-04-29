"use client";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loanData from "../../animations/Credit Card and Loans.json"
import Second from "../../app/send-analyzer/page2";
import Third from "../../app/send-analyzer/page3";
import Forth from "../../app/send-analyzer/page4";

export default function SendAnalyser() {
    return (

        <>
            <div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 flex items-center justify-center relative overflow-hidden">

                <motion.div
                    data-aos="slide-right"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute left-0 top-60  h-100 w-70 opacity-90"
                >
                    <Lottie animationData={loanData} loop={true} />
                </motion.div>

                <motion.div
                    data-aos="slide-left"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute right-0 top-5  h-100 w-70 opacity-90"
                >
                    <Lottie animationData={loanData} loop={true} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-3xl px-4"
                >

                    <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
                        Make the Most Out <br />
                        <span className="relative text-blue-600">
                        </span>
                        of Your Money

                    </h1>

                    <p data-aos="fade-down" className="text-gray-700 text-lg mb-8">
                        Managing your personal finance has never been easier!
                        Effortlessly track budget goals on Zype app.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg"
                    >
                        Apply Now
                    </motion.button>

                    <div className="flex justify-center item-center gap-6 mt-8">
                        <div className="h-14 w-40 flex items-center justify-center bg-black rounded-lg">
                            <img src="https://i.postimg.cc/jS6n1Md8/pngtree-google-play-app-icon-vector-png-image-12256664.png"
                                className="h-12 w-30" />
                        </div>
                        <div className="h-14 w-40 flex items-center justify-center bg-black rounded-lg">

                            <img src="https://i.postimg.cc/sg1DYKGS/png-clipart-app-store-apple-google-play-iphone-mid-autumn-lantern-text-logo-removebg-preview.png"
                                className="h-12 w-30" />
                        </div>
                    </div>

                </motion.div>
            </div>

            <Second />
            <Third />
            <Forth />

        </>

    );
}           