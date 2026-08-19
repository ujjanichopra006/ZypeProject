"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  useBreakpointValue,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";

// Updated testimonials to match the image exactly
const testimonials = [
  {
    name: "Aryan Verma",
    letter: "A",
    text: "The process was smooth and quick. Minimal paperwork and clear instructions made it hassle-free.",
    rating: 5,
  },
  {
    name: "Karan Singh",
    letter: "K",
    text: "Reliable and easy-to-use platform! Smooth application, helpful customer support, and flexible repayment plans.",
    rating: 4,
  },
  {
    name: "Neha Malhotra",
    letter: "N",
    text: "Seamless loan process with quick approval. Clear communication and transparent terms made it stress-free.",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    letter: "S",
    text: "Instant loan approval and timely disbursement. Transparent process and professional support team.",
    rating: 5,
  },
  {
    name: "Vikas Jha",
    letter: "V",
    text: "Very happy with their service. The loan process was simple and completely hassle-free from start to finish.",
    rating: 5,
  },
];

export default function Eighth() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  // Responsive values
  const cardsToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });
  const subTextSize = useBreakpointValue({ base: "sm", md: "md" });

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <Box bg="blue.50" py={{ base: 8, md: 12 }} overflow="hidden">
      <Container maxW="1100px" px={{ base: 4, md: 6 }}>
        
        {/* Header Section */}
        <VStack gap={2} mb={10} data-aos="fade-down">
          <HStack gap={2}>
            <Star size={28} fill="#FBBF24" color="#FBBF24" strokeWidth={0} />
            <Heading
              as="h2"
              fontSize={headingSize}
              fontWeight="bold"
              color="gray.900"
              textAlign="center"
            >
              Rating & Reviews
            </Heading>
          </HStack>
          <Text fontSize={subTextSize} color="gray.500" textAlign="center" maxW="600px">
            India's Top Loan Aggregator – Trusted by Thousands Nationwide.
            <br />
            See what our happy customers have to say.
          </Text>
        </VStack>

        {/* Slider Section */}
        <Box position="relative" data-aos="fade-up">
          {/* Cards Container */}
          <Box overflow="hidden" px={{ base: 0, md: 2 }}>
            <Flex
              transition="transform 0.5s ease-in-out"
              transform={`translateX(-${currentIndex * (100 / cardsToShow)}%)`}
              gap={6}
            >
              {testimonials.map((review, index) => (
                <Box
                  key={index}
                  flex={`0 0 calc(${100 / cardsToShow}% - ${cardsToShow > 1 ? '16px' : '0px'})`}
                  bg="white"
                  borderRadius="xl"
                  p={6}
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.04)"
                  border="1px solid"
                  borderColor="gray.100"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  minH="220px"
                >
                  {/* Stars */}
                  <HStack gap={1} mb={4}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        fill={star <= review.rating ? "#FBBF24" : "none"}
                        color={star <= review.rating ? "#FBBF24" : "#E2E8F0"}
                        strokeWidth={2}
                      />
                    ))}
                  </HStack>

                  {/* Review Text */}
                  <Text fontSize="sm" color="gray.600" lineHeight="1.7" mb={6} flex={1}>
                    {review.text}
                  </Text>

                  {/* Divider */}
                  <Box w="full" h="1px" bg="gray.100" mb={4} />

                  {/* User Info */}
                  <HStack gap={3}>
                    <Box
                      w="32px"
                      h="32px"
                      borderRadius="full"
                      bg="teal.500"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontWeight="bold"
                      fontSize="sm"
                    >
                      {review.letter}
                    </Box>
                    <Text fontSize="sm" fontWeight="bold" color="gray.900">
                      {review.name}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </Flex>
          </Box>

          {/* Mobile Dots Indicator */}
          <HStack justify="center" gap={2} mt={6} display={{ base: "flex", md: "none" }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <Box
                key={index}
                w={index === currentIndex ? "20px" : "8px"}
                h="8px"
                borderRadius="full"
                bg={index === currentIndex ? "teal.500" : "gray.300"}
                cursor="pointer"
                transition="all 0.3s ease"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </HStack>

        </Box>
      </Container>
    </Box>
  );
}