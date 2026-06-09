"use client";

export default function Second() {

  return (

    <>

      <div className="flex flex-col items-center justify-center overflow-hidden bg-gray-100 text-black ">

        <div className="max-w-3xl text-center">

          <h1 className="text-2xl md:text-4xl font-black py-5">
            🚀 Our Trusted Partners
          </h1>

          <p className="text-lg md:text-xl text-black leading-relaxed">

            We collaborate with leading financial partners
            who believe in quality

            <span className="text-blue-600">
              {" "}over quantity and deliver excellence.
            </span>

          </p>

        </div>

       
        <div className="overflow-hidden w-full py-7">
     <style>
            {`
              .slider-track {
                display: flex;
                align-items: center;
                gap: 60px;
                width: max-content;
                animation: scroll 10s linear infinite;
              }

              .slider-img {
                height: 40px;
                object-fit: contain;
              }

              @keyframes scroll {
                0% {
                  transform: translateX(100%);
                }

                100% {
                  transform: translateX(-100%);
                }
              }
            `}
          </style>

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
              alt="Inc42"
              className="slider-img"
            />

            <img
              src="https://www.getzype.com/wp-content/uploads/2024/08/Group-852775727.png"
              alt="LiveMint"
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

      </div>

    </>

  );
}