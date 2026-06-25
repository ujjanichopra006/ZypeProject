"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Second() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Har baar scroll par animation chalega
      mirror: true, // Scroll up karne par bhi animation chalega
      easing: "ease-in-out",
    });

    // Refresh AOS after page load
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
  <section className="flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white pt-2 md:pt-4 pb-4 md:pb-3 px-4">
  {/* Heading */}
  <div
    className="max-w-3xl text-center"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
   <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
      🚀 Our Trusted Partners
    </h1>

   <p className="text-sm sm:text-base md:text-xl p-2 md:p-3 text-white leading-relaxed">
      We collaborate with leading financial partners who believe in quality
      <span className="text-blue-400">
        {" "}
        over quantity and deliver excellence.
      </span>
    </p>
  </div>
      {/* Logo Slider */}
      <div
       className="overflow-hidden w-full py-4 md:py-4"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1200"
      >
        <style jsx>{`
          .slider-track {
            display: flex;
            align-items: center;
            gap: 30px;
            width: max-content;
            animation: scroll 18s linear infinite;
          }

          .slider-track:hover {
            animation-play-state: paused;
          }

          .slider-img {
            height: 28px;
            width: auto;
            object-fit: contain;
            flex-shrink: 0;
          }

          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>

        <div className="slider-track">
          <img
            src="https://web.mpokket.in/footer-revamp/fd4778f562d3177f3c72.svg"
            alt="mpokket"
            className="slider-img"
          />

          <img
            src="https://salaryontime.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0.6s.cduoj.x9.png&w=384&q=75"
            alt="salaryontime"
            className="slider-img"
          />

          <img
            src="https://www.getzype.com/wp-content/uploads/2024/08/Group-7.png"
            alt="zype"
            className="slider-img"
          />

          <img
            src="https://www.getzype.com/wp-content/uploads/2024/08/Group-852775727.png"
            alt="zype-partner"
            className="slider-img"
          />

          <img
            src="https://web.olyv.co.in/images/app/olyv_registered_logo.png"
            alt="olyv"
            className="slider-img"
          />

          <img
            src="https://static.trustpaisa.com/logos/full.svg"
            alt="trustpaisa"
            className="slider-img"
          />

          <img
            src="https://moneyview.in/images/mv-green-logo-v3Compressed.svg"
            alt="moneyview"
            className="slider-img"
          />
        </div>
      </div>
    </section>
  );
}