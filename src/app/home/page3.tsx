"use client";

export default function Third() {

  return (

    <>


      <div className="flex flex-col items-center justify-center overflow-hidden bg-gray-100 text-black py-10">

        <div className="max-w-3xl text-center">

          <h1 className="text-2xl md:text-4xl font-black py-5">
            Our Certifications
          </h1>

          <p className="text-lg md:text-xl text-black leading-relaxed">
            Trusted and certified by recognized authorities
          </p>

        </div>

      </div>


      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center bg-gray-100 px-6 py-10">


        <div className="w-full lg:w-[700px] h-[350px] bg-green-100 rounded-3xl flex flex-row items-center px-8  gap-8 shadow-lg">

         

          <div className="w-[240px] h-[240px] bg-white rounded-3xl shadow-md flex items-center justify-center">

            <img
              src="https://5.imimg.com/data5/JK/ND/MY-20716531/msme-logo.png"
              alt="MSME"
              className="w-[180px] h-[180px] object-contain"
            />

          </div>

        

          <div className="flex-1">

            <h1 className="text-2xl font-bold text-black mb-5">
              MSME Registered
            </h1>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">

              Officially recognized by the Ministry of
              Micro, Small & Medium Enterprises,
              Government of India under the Udyam
              Registration scheme.

            </p>

            <div className="space-y-3 text-lg text-gray-800">

              <p>✅ Udyam Registration Number</p>

              <p>✅ Government Verified</p>

            </div>

          </div>

        </div>

        

        <div className="w-full lg:w-[700px] h-[350px] bg-blue-100 rounded-3xl flex flex-row items-center px-8 gap-8 shadow-lg">

          

          <div className="w-[240px] h-[240px] bg-white rounded-3xl shadow-md flex items-center justify-center">

            <img
              src="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png"
              alt="ISO"
              className="w-[180px] h-[180px] object-contain"
            />

          </div>

      

          <div className="flex-1">

            <h1 className="text-2xl font-bold text-black mb-5">
              ISO 270001 Certified
            </h1>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">

              Internationally recognized quality
              management system certification
              ensuring consistent delivery of
              high-quality products and services.

            </p>

            <div className="space-y-3 text-lg text-gray-800">

              <p>✅ Quality Management System</p>

              <p>✅ International Standards</p>

            </div>

          </div>

        </div>

      </div>

    </>

  );
}