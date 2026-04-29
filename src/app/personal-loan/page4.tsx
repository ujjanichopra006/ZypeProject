"use client";
import Link from "next/link";
import { Wallet, IndianRupee, MapPin} from "lucide-react";

export default function page4(){
    return(
<>
<div className="min-h-screen bg-gradient-to-r from-gray-600 via-black to-green-900 flex flex-col items-center justify-center p-6">
      
      <h1 className=" text-white text-3xl font-bold mb-10 text-center">
        Find a Personal Loan Based on Your Need
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        
       
        <div className="bg-white p-6 rounded-xl shadow text-center">
             <div className="w-16 h-16 mx-auto mb-4 flex  text-black items-center justify-center rounded-full border border-gray-300">
    <Wallet size={28} className="text-black" />
  </div>

          <h2 className=" text-black text-xl mb-4">Amount</h2>
          <Link href="/amount">
            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Explore
            </button>
          </Link>
        </div>

      
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-black flex items-center justify-center rounded-full border">
            <IndianRupee size={28} />
          </div>
          <h2 className=" text-black text-xl mb-4">Salary</h2>
          <Link href="/salary">
            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Explore
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-16 h-16 mx-auto mb-4 text-black flex items-center justify-center rounded-full border">
            <MapPin size={28} />
          </div>

          <h2 className=" text-black text-xl mb-4">Location</h2>
          <Link href="/location">
            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Explore
            </button>
          </Link>
        </div>

      </div>
    </div>


</>
    )
}