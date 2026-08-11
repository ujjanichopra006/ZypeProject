"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  Star,
  Users,
  Handshake,
  Landmark,
  Clock3,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  useBreakpointValue,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";

const steps = [
  {
    id: 1,
    title: "Fill Basic Details",
    desc: "Provide your personal and financial details to help us find the best loan options.",
    img: "/fill details.png",
  },
  {
    id: 2,
    title: "Choose an Offer",
    desc: "Browse through loan offers and select the one that fits your requirements.",
    img: "/an offer.png",
  },
  {
    id: 3,
    title: "Get Instant Approval",
    desc: "Submit your documents online and receive money directly in your bank account.",
    img: "/approval.png",
  },
];

const testimonials = [
  {
    name: "Simran Kaur",
    letter: "S",
    text: "Instant loan approval and timely disbursement. Transparent process and professional support team.",
  },
  {
    name: "Vikas Jha",
    letter: "V",
    text: "Very happy with their service. The loan process was simple and completely hassle-free from start to finish.",
  },
  {
    name: "Ananya Gupta",
    letter: "A",
    text: "Clear instructions, minimal paperwork, and professional guidance. Loan was credited within the same day.",
  },
  {
    name: "Parveen Chouhan",
    letter: "P",
    text: "Loan disbursement in less than 24 hours is not what I had expected but this is amazing. Thank you very much, KeshvaCredit team.",
  },
  {
    name: "Pardeep 80B",
    letter: "P",
    text: "Highly satisfied with overall loan disbursement experience. Haven't seen any platform giving so many choices to cater to financial needs. Highly recommended!",
  },
  {
    name: "Aryan Verma",
    letter: "A",
    text: "The process was smooth and quick. Minimal paperwork and clear instructions made it hassle-free.",
  },
];

export default function Eighth() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const subTextSize = useBreakpointValue({ base: "xs", md: "sm" });
  const stepTitleSize = useBreakpointValue({ base: "sm", md: "base" });
  const stepDescSize = useBreakpointValue({ base: "2xs", md: "xs" });
  const testimonialWidth = useBreakpointValue({ base: "200px", md: "220px" });

  return (
    <Box bg="blue.50" color="blue.900" py={{ base: 3, md: 2, lg: 3 }} overflow="hidden">
      <Container maxW="1200px" px={{ base: 3, md: 5, lg: 6 }}>
        
        {/* ============================================ */}
        {/* HOW IT WORKS - HEADING */}
        {/* ============================================ */}
        <Box textAlign="center" data-aos="fade-up">
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="bold"
            color="blue.900"
          >
            How It Works
          </Heading>

          <Text
            fontSize={subTextSize}
            color="blue.700"
            mt={1}
          >
            Get your loan in just 3 simple steps.
          </Text>
        </Box>

        {/* ============================================ */}
        {/* TIMELINE - Desktop */}
        {/* ============================================ */}
        <Box
          position="relative"
          mt={5}
          display={{ base: "none", lg: "block" }}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Box
            position="absolute"
            top="12px"
            left={0}
            width="100%"
            height="2px"
            bg="blue.500"
            borderRadius="full"
          />

          <Flex justify="space-between" position="relative" zIndex={10}>
            {[1, 2, 3].map((num) => (
              <Box
                key={num}
                width="32px"
                height="32px"
                borderRadius="full"
                bg="blue.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="xs"
                fontWeight="bold"
                color="white"
              >
                {num}
              </Box>
            ))}
          </Flex>
        </Box>

        {/* ============================================ */}
        {/* STEP CARDS */}
        {/* ============================================ */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={3}
          mt={5}
        >
          {steps.map((item, index) => (
            <Box
              key={index}
              bg="white"
              border="1px solid"
              borderColor="green.200"
              borderRadius="lg"
              p={3}
              textAlign="center"
              boxShadow="0 10px 30px rgba(30, 64, 175, 0.08)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 20px 50px rgba(30, 64, 175, 0.15)",
                borderColor: "green.400",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <Flex justify="center" mb={4}>
                <Box
                  width="50px"
                  height="50px"
                  position="relative"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </Box>
              </Flex>

              <Heading
                as="h3"
                fontSize={stepTitleSize}
                fontWeight="bold"
                color="blue.900"
              >
                {item.title}
              </Heading>

              <Text
                fontSize={stepDescSize}
                color="blue.700"
                mt={2}
                lineHeight="1.6"
              >
                {item.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* ============================================ */}
        {/* TESTIMONIALS */}
        {/* ============================================ */}
        <Box
          mt={10}
          overflow="hidden"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <style>{`
            @keyframes scrollTestimonials {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            .testimonial-track {
              display: flex;
              gap: 12px;
              width: max-content;
              animation: scrollTestimonials 30s linear infinite;
            }
            
            .testimonial-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <Box className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <Box
                key={index}
                width={testimonialWidth}
                flexShrink={0}
                border="1px solid"
                borderColor="blue.200"
                borderRadius="xl"
                p={3}
                bg="white"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  borderColor: "blue.400",
                  boxShadow: "0 15px 40px rgba(30, 64, 175, 0.12)",
                }}
              >
                {/* Stars */}
                <HStack gap={1} mb={3} color="yellow.500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </HStack>

                <Text
                  fontSize="sm"
                  lineHeight="1.6"
                  color="blue.800"
                  minHeight="85px"
                >
                  {item.text}
                </Text>

                <Box
                  borderTop="1px solid"
                  borderColor="blue.100"
                  mt={3}
                  pt={3}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  <Box
                    width="32px"
                    height="32px"
                    borderRadius="full"
                    bg="blue.500"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xs"
                    fontWeight="bold"
                    color="white"
                  >
                    {item.letter}
                  </Box>

                  <Text fontSize="sm" fontWeight="semibold" color="blue.900">
                    {item.name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}