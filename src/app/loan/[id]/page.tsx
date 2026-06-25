import { Metadata } from "next";
import Link from "next/link";
import Home from "../../profile/page";

// Helper function to capitalize state name
const capitalizeState = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const stateName = capitalizeState(id);

  return {
    title: `Personal Loans in ${stateName} | Keshva Credit`,
    description: `Looking for a personal loan in ${stateName}? Get competitive interest rates, fast approval, and flexible repayment terms from trusted NBFCs.`,
    keywords: `personal loan ${stateName}, loan in ${stateName}, best personal loan ${stateName}, NBFC loan ${stateName}`,
  };
}

export default async function LoanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stateName = capitalizeState(id);

  return (
    <main className="bg-slate-900 text-white min-h-screen py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Personal Loans in{" "}
          <span className="text-blue-500">{stateName}</span>
        </h1>

        {/* Loan Options Section */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Loan Options in {stateName}
        </h2>

        <p className="text-gray-300 text-[15px] leading-7 mb-8">
          Looking for a personal loan in {stateName}? We offer competitive loan
          options tailored to your needs.
        </p>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Personal Loans Card */}
          <div className="border border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Quick Personal Loans
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-[15px]">
              <li>Fast approval process</li>
              <li>Competitive interest rates</li>
              <li>Flexible repayment terms</li>
              <li>Minimal documentation</li>
            </ul>
          </div>

          {/* Why Choose Us Card */}
          <div className="border border-gray-600 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-[15px]">
              <li>Trusted by thousands in {stateName}</li>
              <li>24/7 customer support</li>
              <li>Secure and confidential process</li>
              <li>No hidden charges</li>
            </ul>
          </div>
        </div>

        {/* Form Section - Imported from profile/page */}
        <section className="mt-20">
          <Home />
        </section>

        {/* How It Works Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
            <p className="text-gray-300 text-[16px]">
              Get your loan in just 3 simple steps.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-600"></div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold z-10">
                  1
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-slate-900 z-10">
                  2
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-slate-900 z-10">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="border border-gray-600 rounded-lg p-6 bg-gradient-to-b from-green-500/20 to-green-600/10">
              <div className="flex justify-center mb-4">
                <svg className="w-20 h-20" viewBox="0 0 200 200" fill="none">
                  <rect x="50" y="40" width="100" height="120" rx="8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="3"/>
                  <rect x="65" y="55" width="70" height="8" rx="2" fill="#0284C7"/>
                  <rect x="65" y="70" width="70" height="8" rx="2" fill="#0284C7" opacity="0.6"/>
                  <rect x="65" y="85" width="70" height="8" rx="2" fill="#0284C7" opacity="0.6"/>
                  <rect x="65" y="100" width="50" height="8" rx="2" fill="#0284C7" opacity="0.6"/>
                  <circle cx="135" cy="60" r="15" fill="#3B82F6"/>
                  <text x="135" y="65" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">+</text>
                  <rect x="40" y="140" width="20" height="20" rx="4" fill="#10B981"/>
                  <text x="50" y="154" textAnchor="middle" fill="white" fontSize="10">✓</text>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Fill Basic Details</h3>
              <p className="text-gray-300 text-center text-[14px] leading-6">
                Provide your personal and financial details to help us find the best loan options.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-600 rounded-lg p-6 bg-gradient-to-b from-green-500/20 to-green-600/10">
              <div className="flex justify-center mb-4">
                <svg className="w-20 h-20" viewBox="0 0 200 200" fill="none">
                  <circle cx="70" cy="90" r="25" fill="#3B82F6" opacity="0.3"/>
                  <circle cx="100" cy="70" r="25" fill="#3B82F6" opacity="0.6"/>
                  <circle cx="130" cy="90" r="25" fill="#3B82F6" opacity="0.3"/>
                  <text x="70" y="95" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">A</text>
                  <text x="100" y="75" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">B</text>
                  <text x="130" y="95" textAnchor="middle" fill="#3B82F6" fontSize="14" fontWeight="bold">C</text>
                  <rect x="95" y="110" width="10" height="30" fill="#1E293B"/>
                  <circle cx="100" cy="105" r="8" fill="#1E293B"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Choose an Offer</h3>
              <p className="text-gray-300 text-center text-[14px] leading-6">
                Browse through loan offers and select the one that fits your requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-600 rounded-lg p-6 bg-gradient-to-b from-green-500/20 to-green-600/10">
              <div className="flex justify-center mb-4">
                <svg className="w-20 h-20" viewBox="0 0 200 200" fill="none">
                  <path d="M60 160 Q40 140 40 110 Q40 70 70 50 Q100 30 130 50 Q160 70 160 110 Q160 140 140 160" fill="#E0E7FF" stroke="#818CF8" strokeWidth="2"/>
                  <rect x="75" y="60" width="50" height="80" rx="4" fill="#6366F1" stroke="#4F46E5" strokeWidth="2"/>
                  <rect x="80" y="70" width="40" height="6" rx="2" fill="white" opacity="0.8"/>
                  <rect x="80" y="82" width="40" height="6" rx="2" fill="white" opacity="0.8"/>
                  <rect x="80" y="94" width="40" height="6" rx="2" fill="white" opacity="0.8"/>
                  <rect x="80" y="106" width="40" height="6" rx="2" fill="white" opacity="0.8"/>
                  <rect x="90" y="120" width="20" height="12" rx="2" fill="#10B981"/>
                  <text x="100" y="129" textAnchor="middle" fill="white" fontSize="8">OK</text>
                  <rect x="50" y="130" width="20" height="25" fill="#1E293B"/>
                  <circle cx="60" cy="125" r="6" fill="#1E293B"/>
                  <rect x="62" y="135" width="8" height="12" fill="#3B82F6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Get Instant Approval</h3>
              <p className="text-gray-300 text-center text-[14px] leading-6">
                Submit your documents online and receive money directly in your bank account.
              </p>
            </div>
          </div>
        </section>

        {/* Rating & Reviews Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center gap-2">
              <span className="text-yellow-400">⭐</span> Rating & Reviews
            </h2>
            <p className="text-gray-300 text-[16px]">
              India's Top Loan Aggregator – Trusted by Thousands Nationwide.
            </p>
            <p className="text-gray-300 text-[16px]">
              See what our happy customers have to say.
            </p>
          </div>

          {/* Reviews Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="border border-gray-600 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-[14px] leading-6 mb-6">
                I was amazed at how fast my loan was approved. Very convenient and easy to use platform.
              </p>
              <div className="border-t border-gray-700 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <span className="font-medium">Rahul Mehta</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="border border-gray-600 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-[14px] leading-6 mb-6">
                Straightforward process with no hidden charges. The quick response time made the experience even better.
              </p>
              <div className="border-t border-gray-700 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="font-medium">Sneha Kapoor</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="border border-gray-600 rounded-lg p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-[14px] leading-6 mb-6">
                Very reliable loan service with competitive rates. They made the whole experience very smooth.
              </p>
              <div className="border-t border-gray-700 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="font-medium">Sahil Arora</span>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb / Back Link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors text-[14px]"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}