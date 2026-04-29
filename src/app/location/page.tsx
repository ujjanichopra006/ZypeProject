"use client";

export default function LocationPage() {
  const locations = [
    "Mumbai", "Bangalore", "Delhi", "Kerala",
    "Chennai", "Hyderabad", "Noida", "Kanchipuram",
    "Kolkata", "Coimbatore", "Pune", "Ahmedabad",
    "Patna", "Jaipur", "Bhubaneswar", "Lucknow",
    "Nagpur", "Agra", "Kochi", "Indore"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-600 via-black to-green-900 flex flex-col items-center p-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10 text-center">
        Personal Loan By Location
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        
        {locations.map((city, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-xl text-center shadow-sm transform transition-all duration-300 cursor-pointer
            hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-white" 
          >
            <p className="text-gray-700">
              Personal Loan in
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-1">
              {city}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
}