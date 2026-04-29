"usi client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
export default function page4() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
<div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 p-8">

                <h1  data-aos="fade-down"className="text-center text-black font-bold text-4xl md:text-6xl mb-12">
                    Blogs to Enhance Your Knowledge
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    <div data-aos="fade-up" className="bg-teal-100  p-10 rounded-xl shadow-md hover:shadow-2xl hover:bg-pink-100 transition cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1467991521834-fb8e202c7074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHR2fGVufDB8fDB8fHww"
                            className="rounded-xl mb-3 w-full" />
                        <p className="text-gray-500 text-sm">Other</p>
                        <h2 className="text-black font-semibold">
                            Top TV Brands in India: Which One Should You Choose?
                        </h2>
                    </div>


                    <div  data-aos="fade-up" className="bg-pink-100 p-10  rounded-xl shadow-md hover:shadow-2xl hover:bg-teal-100 transition cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1621839846410-79d498777ff7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5hY2V8ZW58MHx8MHx8fDA%3D"
                            className="rounded-xl mb-3 w-full" />
                        <p className="text-gray-500 text-sm">Finance</p>
                        <h2 className="text-black font-semibold">
                            What is Lien Amount? Meaning, Reasons & How to Remove It
                        </h2>
                    </div>
                    <div data-aos="fade-up" className="bg-pink-100 p-10 rounded-xl shadow-md hover:shadow-2xl hover:bg-teal-100 transition cursor-pointer">
                        <img src="https://media.istockphoto.com/id/2212166509/photo/millennial-and-gen-z-new-investing-using-ai-finanace-interact-with-an-ai-data-finance.webp?a=1&b=1&s=612x612&w=0&k=20&c=09D1h7LTnppOUABhXJK7B2vtlTBpfJL4jFvy6XoKYro="
                            className="rounded-xl mb-3 w-full" />
                        <p className="text-gray-500 text-sm">Finance</p>
                        <h2 className="text-black font-semibold">
                            Pradhan Mantri Marriage Loan: Everything You Need to Know
                        </h2>
                    </div>
                    <div data-aos="fade-up" className="bg-teal-100 p-10 rounded-xl shadow-md hover:shadow-2xl  hover:bg-pink-100  transition cursor-pointer">
                        <img src="https://plus.unsplash.com/premium_photo-1733306583396-8621f2906a82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9hbnMlMjAlNUN8ZW58MHx8MHx8fDA%3D"
                            className="rounded-xl mb-3 w-full" />
                        <p className="text-gray-500 text-sm">Other</p>
                        <h2 className="text-black font-semibold">
                            Top Instant Loan Apps for Students in India
                        </h2>
                    </div>

                </div>
            </div>
        </>
    );
}
