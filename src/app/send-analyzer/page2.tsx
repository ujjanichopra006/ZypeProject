"use client";
import { motion } from "framer-motion";

export default function Second() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 flex item-center relative overflow-hidden">
               <div className=" border-2 text-gray-400 h-100 w-270 px-6 mt-5 flex flex-row mb-5 ml-18 rounded-2xl shadow-2xl">
                <div className=" w-1/2 px-10 mt-5">
                    < motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                         <img src=" https://plus.unsplash.com/premium_photo-1681819806412-418bb52f8cc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlZGl0fGVufDB8fDB8fHww"
                            className="rounded-xl mb-15 h-90 w-90" />

                    </motion.div>
                </div>

                <div className="w-1/2 px-10 mt-5">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                     <h1 className="text-black font-bold text-4xl md:text-5xl px-10 mb-10">
                                Credit Just Got <br /> Transparent
                            </h1>

                            <p className="text-black mt-5 px-10">
                                Get a free, detailed credit report in seconds and gain complete clarity over your financial health.
                                Effortlessly track your credit profile, monitor score changes, and stay updated with all your active credit accounts.
                                Make smarter financial decisions with real-time insights, personalized tips, and full control over your credit journey.
                            </p>
                    </motion.div>
                </div>
</div>
            </div>

        </>
    );
}