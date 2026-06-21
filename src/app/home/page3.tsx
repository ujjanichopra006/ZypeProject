"use client";

export default function Third() {
  return (
    <>
      {/* Heading Section */}
      <div
        className="flex flex-col items-center justify-center overflow-hidden bg-slate-900 text-white py-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="max-w-3xl text-center">
          <h1
            className="text-2xl md:text-4xl font-bold py-5"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          >
            Our Certifications
          </h1>

          <p
            className="text-lg md:text-xl text-white leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
          >
            Trusted and certified by recognized authorities
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center bg-slate-900 px-6 md:px-20 py-10">
        
        {/* MSME Card */}
        <div
          className="w-full lg:w-[600px] min-h-[300px] bg-green-100 rounded-3xl flex flex-col md:flex-row items-center px-5 py-5 gap-5 shadow-lg hover:scale-105 transition-all duration-500"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          {/* Image */}
          <div
            className="w-[220px] h-[220px] bg-white rounded-3xl shadow-md flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src="https://5.imimg.com/data5/JK/ND/MY-20716531/msme-logo.png"
              alt="MSME"
              className="w-[170px] h-[170px] object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-black mb-5">
              MSME Registered
            </h1>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Officially recognized by the Ministry of Micro, Small & Medium
              Enterprises, Government of India under the Udyam Registration
              scheme.
            </p>

            <div className="space-y-3 text-lg text-gray-800">
              <p>✅ Udyam Registration Number</p>
              <p>✅ Government Verified</p>
            </div>
          </div>
        </div>

        {/* ISO Card */}
        <div
          className="w-full lg:w-[600px] min-h-[300px] bg-blue-100 rounded-3xl flex flex-col md:flex-row items-center px-5 py-5 gap-5 shadow-lg hover:scale-105 transition-all duration-500"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          {/* Image */}
          <div
            className="w-[220px] h-[220px] bg-white rounded-3xl shadow-md flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="350"
            data-aos-anchor-placement="top-bottom"
          >
            <img
              src="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png"
              alt="ISO"
              className="w-[170px] h-[170px] object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-black mb-5">
              ISO 270001 Certified
            </h1>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Internationally recognized quality management system certification
              ensuring consistent delivery of high-quality products and services.
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