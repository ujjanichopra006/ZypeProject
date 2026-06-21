"use client";

import Lottie from "lottie-react";
import festivalAnimation from "../../../animations/rangoli.json"; // path apne folder ke hisab se adjust kar lena

export default function FestivalBlog() {
  const festivals = [
    {
      title: "Diwali – The Festival of Lights",
      content:
        "Diwali, known as the Festival of Lights, is one of the most widely celebrated festivals in India spanning five days of celebration. Homes are decorated with beautiful oil lamps (diyas), intricate rangoli patterns, and sparkling lights symbolizing the victory of light over darkness. Families exchange sweets and gifts while performing Lakshmi Puja to welcome prosperity.",
    },
    {
      title: "Holi – The Festival of Colors",
      content:
        "Holi marks the vibrant arrival of spring and the triumph of good over evil. People throw colorful gulal, dance to traditional music, and enjoy festive treats like gujiya and thandai. Holi brings communities together and spreads happiness everywhere.",
    },
    {
      title: "Navratri – Nine Nights of Celebration",
      content:
        "Navratri is celebrated with great devotion across India. Each night is dedicated to a different form of Goddess Durga. Garba, Dandiya, fasting, and grand pujas create an atmosphere full of energy and spirituality.",
    },
    {
      title: "Dussehra – Triumph of Good Over Evil",
      content:
        "Dussehra celebrates the victory of Lord Rama over Ravana and Goddess Durga over Mahishasura. Ramleela performances and the burning of Ravana effigies symbolize the victory of righteousness.",
    },
    {
      title: "Ganesh Chaturthi – Welcoming the Elephant-Headed Deity",
      content:
        "Ganesh Chaturthi honors Lord Ganesha, the remover of obstacles. Beautiful idols are installed in homes and public pandals, followed by daily prayers and the grand Visarjan procession.",
    },
    {
      title: "Christmas – Celebrating the Birth of Jesus Christ",
      content:
        "Christmas in India is celebrated with decorated churches, midnight masses, Christmas trees, and festive sweets. It beautifully reflects India's religious diversity and harmony.",
    },
    {
      title: "Pongal / Makar Sankranti – Harvest Festivals",
      content:
        "Pongal and Makar Sankranti celebrate the harvest season and gratitude towards nature. The festivals include kite flying, bonfires, traditional dishes, and family gatherings.",
    },
    {
      title: "Onam – The Harvest Festival of Kerala",
      content:
        "Onam celebrates the annual visit of King Mahabali and is famous for Pookalam, Onam Sadhya, Vallamkali boat races, and colorful cultural performances.",
    },
    {
      title: "Raksha Bandhan – Celebrating Sibling Bonds",
      content:
        "Raksha Bandhan symbolizes the love and lifelong bond between brothers and sisters. Sisters tie rakhi while brothers promise protection and exchange gifts.",
    },
    {
      title: "Janmashtami – Celebrating Lord Krishna's Birth",
      content:
        "Janmashtami commemorates the birth of Lord Krishna with devotional songs, midnight celebrations, and the famous Dahi Handi festival.",
    },
    {
      title: "Durga Puja – Worship of the Divine Mother",
      content:
        "Durga Puja is the grand festival of West Bengal, featuring magnificent pandals, artistic idols, cultural programs, and the celebration of feminine power.",
    },
  ];

  return (
    <section className="bg-[#0b1220] text-gray-300 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#111827] border border-white/10 rounded-3xl shadow-xl p-6 md:p-10">

          {/* Top Lottie Animation */}
          <div className="w-full flex justify-center mb-8">
            <div className="w-70 max-w-sm md:max-w-md">
              <Lottie
                animationData={festivalAnimation}
                loop={true}
              />
            </div>
          </div>

          {/* Blog Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Celebrating India’s Colorful Festivals
            </h1>
            <p className="text-emerald-400 mt-4 text-lg">
              A Journey Through Cultural Diversity
            </p>

            <div className="flex justify-center gap-4 mt-5 text-sm text-gray-400 flex-wrap">
              <span>📅 October 20, 2025</span>
              <span>•</span>
              <span>🏷️ Indian Culture & Festivals</span>
            </div>
          </div>

          {/* Intro */}
          <div className="space-y-5 text-sm leading-7">
            <p>
              India is a land of celebrations, where every season brings a new
              festival filled with joy, colors, and traditions. Festivals in    
              India are not just special days—they are moments of togetherness,
              family bonding, and cultural expression that unite the world's
              largest democracy.
            </p>
          </div>

          {/* Festival Sections */}
          <div className="mt-10 space-y-10">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className="border-b border-white/10 pb-8 last:border-none"
              >
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {festival.title}
                </h2>

                <p className="text-sm leading-7">
                  {festival.content}
                </p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              The Cultural Tapestry of India
            </h2>

            <p className="text-sm leading-7">
              India's festivals represent the country's incredible diversity,
              unity, and rich cultural heritage. Each festival, with its unique
              traditions and significance, contributes to the vibrant tapestry
              of Indian society.
            </p>

            <p className="text-sm leading-7 mt-4">
              These celebrations preserve ancient customs while adapting to
              modern times, bringing people together across religions, regions,
              and communities. The spirit of sharing, joy, and togetherness
              truly reflects the soul of India.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/10 mt-10 pt-6">
            <p className="text-xs text-gray-400 italic leading-6">
              <strong>Disclaimer:</strong> This article is for educational and
              cultural awareness purposes only. Festival traditions and customs
              may vary across different regions and communities of India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}