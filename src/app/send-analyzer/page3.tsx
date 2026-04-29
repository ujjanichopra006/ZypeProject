"use client";

import { motion } from "framer-motion";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Third () {

     useEffect(() => {
            AOS.init({
                duration: 1000
            });
        }, []);

    return (

        <>
     <div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 flex item-center relative overflow-hidden">
               <div  data-aos="fade-down"className=" border-2 text-gray-400 h-100 w-270 px-6 mt-5 flex flex-row mb-5 ml-18 rounded-2xl shadow-2xl">
                <div className=" w-1/2 px-10 mt-5">
                    < motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-black font-bold text-4xl md:text-5xl  px-10 mb-10">
                            Your Money at a Glance
                        </h1>
                        <p  data-aos="fade-down"className="text-black mt-5 px-10 ">
                           View all your spends in one place. Get a clearer view of your finances, set a monthly budget and always stay on top of it.
                           Take full control of your finances by viewing all your spending in one simple place. Easily track where your money goes,
                            gain a clearer understanding of your financial habits, set personalized monthly budgets.” </p>
                    </motion.div>
                    </div>


                     <div data-aos="fade-up" className="w-1/2 px-10 mt-5">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8fDA%3D"
                            className="rounded-xl mb-15 h-90 w-90" />
                    </motion.div>
                </div>
                    </div>
                    
                </div>
        </>
    );
}