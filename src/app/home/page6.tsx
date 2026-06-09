import {
  Users,
  BadgeCheck,
  FileText,
  DollarSign,
  HandCoins,
  Clock3,
} from "lucide-react";

export default function Sixth() {
  return (
    <section className="bg-[#03112d] py-12">
      <div className="max-w-[1700px] mx-auto px-6">

        {/* Top Line */}
        <div className="flex items-center mb-14">
          <div className="flex-1 h-px bg-gray-500"></div>

          <h2 className="px-6 text-white text-xl md:text-2xl font-medium">
            ॐ Keshvacredit ॐ
          </h2>

          <div className="flex-1 h-px bg-gray-500"></div>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-center">

          {/* Left Mobile Image */}
          <div className="flex justify-center">
            <img
              src="/mobile application.png"
              alt="mobile application"
              className="w-[230px] md:w-[280px]"
            />
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#11a5a8] rounded-3xl border border-white p-7 h-[190px] flex flex-col items-center text-center">
              <div className="w-14 h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <Users className="text-white w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-black mt-3">
                Happy Customers
              </h3>

              <p className="text-gray-700 text-sm leading-5 mt-2">
                Trusted by over five lakh users! Enjoy smooth, secure service
                and great financial rewards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#11a5a8] rounded-3xl border border-white p-7 h-[190px] flex flex-col items-center text-center">
              <div className="w-14 h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <BadgeCheck className="text-white w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-black mt-3">
                Instant Approval
              </h3>

              <p className="text-gray-700 text-sm leading-5 mt-2">
                Get online loan approval in just 48 hours with minimum paperwork
                and fast fund access.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#11a5a8] rounded-3xl border border-white p-7 h-[190px] flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <FileText className="text-white w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-black mt-3">
                100% Paperless
              </h3>

              <p className="text-gray-700 text-sm leading-5 mt-2">
                Apply entirely online — quick, safe, and hassle-free from the
                comfort of home.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#11a5a8] rounded-3xl border border-white p-7 h-[190px] flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <DollarSign className="text-white w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-black mt-3">
                No Hidden Charges
              </h3>

              <p className="text-gray-700 text-sm leading-5 mt-2">
                Enjoy complete transparency — no surprise fees or costs,
                guaranteed.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#11a5a8] rounded-3xl border border-white p-7 h-[190px] flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <HandCoins className="text-white w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-black mt-3">
                Loans Disbursed
              </h3>

              <p className="text-gray-700 text-sm leading-5 mt-2">
                Over ₹1000 crore disbursed swiftly with secure, simple
                approvals.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#11a5a8] rounded-3xl border border-white p-7 h-[190px] flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center">
                <Clock3 className="text-white w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-black mt-3">
                Flexible Loan Options
              </h3>

              <p className="text-gray-700 text-sm leading-5 mt-2">
                Choose loans from ₹1,000 to ₹1,00,000 with terms from 3 to 24

              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}