"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Credit Score Awareness in India (2026 Guide)",
    category: "Fintech",
    date: "Feb 23, 2026",
    link: "/Ourblogs/Blog1",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    description:
      "Understand how credit scores work in India, what affects your CIBIL score, and practical tips to improve it.",
  },
  {
    id: 2,
    title: "Is Crypto Still a Good Investment?",
    category: "Cryptocurrency",
    date: "December 13, 2025",
    link:"/Ourblogs/Blog2",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&q=80",
    description:
      "Explore the latest trends, risks, and expert insights on crypto investing.",
  },
  {
    id: 3,
    title: "Celebrating India's Colorful Festivals",
    category: "Festivals",
    date: "October 20, 2025",
    link:"/Ourblogs/Blog3",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80",
    description:
      "A glimpse into India's vibrant festivals, traditions, and celebrations.",
  },
  {
    id: 4,
    title: "Safety Awareness about Cyber Crime",
    category: "Cyber Security",
    date: "August 08, 2025",
    link:"/Ourblogs/Blog4",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    description:
      "Learn how to stay safe from phishing, hacking, and online fraud.",
  },
  {
    id: 5,
    title: "सर्वश्रेष्ठ पर्सनल लोन बैंक - 2024 गाइड",
    category: "Finance",
    date: "July 08, 2025",
    link:"/Ourblogs/Blog5",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    description:
      "2024 में सही पर्सनल लोन बैंक चुनने के लिए आसान गाइड।",
  },
  {
    id: 6,
    title: "How Your Phone is Rewiring Your Brain",
    category: "Lifestyle",
    date: "July 08, 2025",
    link:"/Ourblogs/Blog6",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    description:
      "Understand how mobile apps and notifications affect your brain.",
  },
 
];

export default function Ourblogs() {
  return (
    <section className="bg-[#051126] py-10">
      <div className="max-w-7xl mx-auto px-14">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl">✍️</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Latest Blog Posts
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-[180px] w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition duration-500"
                />

                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-medium">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[16px] font-bold text-[#0d223d] leading-6 mb-2 hover:text-blue-600 transition">
                  {blog.title}
                </h3>

                <p className="text-[13px] text-gray-600 leading-5 line-clamp-3 mb-4">
                  {blog.description}
                </p>

                <Link
                  href={blog.link}
                  className="inline-flex items-center text-blue-600 text-[13px] font-semibold hover:underline"
                >
                  Read More
                  <span className="ml-1">→</span>
                </Link>

                <p className="mt-2 text-[11px] text-gray-400">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}