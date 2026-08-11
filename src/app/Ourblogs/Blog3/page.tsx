"use client";

import Lottie from "lottie-react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import festivalAnimation from "../../../animations/rangoli.json";

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
    <Box bg="blue.50" px={4} py={10} minH="100vh">
      <Container maxW="5xl">
        <Box
          bg="white"
          border="1px"
          borderColor="blue.100"
          borderRadius="2xl"
          boxShadow="0 20px 50px rgba(30, 64, 175, 0.08)"
          p={{ base: 6, md: 10 }}
        >
          {/* Top Lottie Animation */}
          <Flex justify="center" mb={8}>
            <Box w={{ base: "200px", sm: "250px", md: "300px" }}>
              <Lottie animationData={festivalAnimation} loop={true} />
            </Box>
          </Flex>

          {/* Blog Header */}
          <VStack gap={4} mb={10} textAlign="center">
            <Heading
              as="h1"
              size={{ base: "xl", md: "3xl" }}
              color="blue.900"
            >
              Celebrating India's Colorful Festivals
            </Heading>
            <Text color="emerald.600" fontSize="lg" fontWeight="medium">
              A Journey Through Cultural Diversity
            </Text>

            <HStack
              gap={4}
              mt={2}
              color="blue.600"
              fontSize="sm"
              flexWrap="wrap"
              justify="center"
            >
              <Text>📅 October 20, 2025</Text>
              <Text>•</Text>
              <Text>🏷️ Indian Culture & Festivals</Text>
            </HStack>
          </VStack>

          {/* Intro */}
          <Text fontSize="sm" color="blue.800" mb={8}>
            India is a land of celebrations, where every season brings a new
            festival filled with joy, colors, and traditions. Festivals in India
            are not just special days—they are moments of togetherness, family
            bonding, and cultural expression that unite the world's largest
            democracy.
          </Text>

          {/* Festival Sections */}
          <VStack gap={10} align="stretch" mt={6}>
            {festivals.map((festival, index) => (
              <Box key={index}>
                <Heading
                  as="h2"
                  size={{ base: "lg", md: "xl" }}
                  color="blue.900"
                  mb={4}
                >
                  {festival.title}
                </Heading>
                <Text fontSize="sm" color="blue.800">
                  {festival.content}
                </Text>
                {index < festivals.length - 1 && (
                  <Box mt={8} borderTopWidth="1px" borderColor="blue.200" />
                )}
              </Box>
            ))}
          </VStack>

          {/* Conclusion */}
          <Box mt={12}>
            <Heading
              as="h2"
              size={{ base: "lg", md: "xl" }}
              color="blue.900"
              mb={4}
            >
              The Cultural Tapestry of India
            </Heading>

            <Text fontSize="sm" color="blue.800">
              India's festivals represent the country's incredible diversity,
              unity, and rich cultural heritage. Each festival, with its unique
              traditions and significance, contributes to the vibrant tapestry
              of Indian society.
            </Text>

            <Text fontSize="sm" color="blue.800" mt={4}>
              These celebrations preserve ancient customs while adapting to
              modern times, bringing people together across religions, regions,
              and communities. The spirit of sharing, joy, and togetherness
              truly reflects the soul of India.
            </Text>
          </Box>

          {/* Disclaimer */}
          <Box mt={10} borderTopWidth="1px" borderColor="blue.200" />
          <Box pt={6}>
            <Text
              fontSize="xs"
              color="blue.600"
              fontStyle="italic"
            >
              <strong>Disclaimer:</strong> This article is for educational and
              cultural awareness purposes only. Festival traditions and customs
              may vary across different regions and communities of India.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}