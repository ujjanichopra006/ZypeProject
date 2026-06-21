"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Robot from "../../animations/Robot.json";

export default function IntroLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

 if (loading) {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-900 px-4">
      
      <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
        <Lottie
          animationData={Robot}
          loop={true}
        />
      </div>

      <div className="max-w-xl text-center -mt-8">
       <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
  Empowering Financial Freedom
</h1>

<div className="w-20 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full mx-auto mt-3"></div>

<p className="mt-4 text-slate-400 text-sm md:text-base leading-7 max-w-lg mx-auto">
  Discover personalized loan solutions designed around your goals.
  Quick approvals, transparent processes, and complete peace of mind.
</p>

<div className="mt-5 flex items-center justify-center gap-2">
  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
  <span className="text-slate-500 text-xs md:text-sm tracking-wide">
    Preparing your experience...
  </span>
</div>
      </div>

    </div>
  );
}

  return <>{children}</>;
}