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

const stats = [
  {
    icon: Users,
    value: "60,000+",
    title: "Happy Customers",
    color: "blue.500",
  },
  {
    icon: Handshake,
    value: "50+",
    title: "Relationships",
    color: "purple.500",
  },
  {
    icon: Landmark,
    value: "30+",
    title: "Partner NBFCs",
    color: "green.500",
  },
  {
    icon: Clock3,
    value: "Under 24h",
    title: "Fast Disbursement",
    color: "orange.500",
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
    <Box bg="#111525" color="white" py={{ base: 6, md: 8, lg: 10 }} overflow="hidden">
      <Container maxW="1200px" px={{ base: 3, md: 5, lg: 6 }}>
        
        {/* ============================================ */}
        {/* HOW IT WORKS - HEADING */}
        {/* ============================================ */}
        <Box textAlign="center" data-aos="fade-up">
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="bold"
            color="white"
          >
            How It Works
          </Heading>

          <Text
            fontSize={subTextSize}
            color="gray.300"
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
              bg="#4ca77f"
              border="1px solid"
              borderColor="yellow.400"
              borderRadius="lg"
              p={3}
              textAlign="center"
              boxShadow="lg"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "xl",
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
                color="black"
              >
                {item.title}
              </Heading>

              <Text
                fontSize={stepDescSize}
                color="black"
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
                borderColor="gray.600"
                borderRadius="xl"
                p={3}
                bg="transparent"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  borderColor: "yellow.400",
                }}
              >
                {/* Stars */}
                <HStack gap={1} mb={3} color="yellow.400">
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
                  color="gray.200"
                  minHeight="85px"
                >
                  {item.text}
                </Text>

                <Box
                  borderTop="1px solid"
                  borderColor="gray.600"
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
                    bg="yellow.500"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="xs"
                    fontWeight="bold"
                    color="black"
                  >
                    {item.letter}
                  </Box>

                  <Text fontSize="sm" fontWeight="semibold" color="white">
                    {item.name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ============================================ */}
        {/* STATISTICS - HEADING */}
        {/* ============================================ */}
        <Box
          textAlign="center"
          mt={10}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="bold"
            color="white"
          >
            Our <Text as="span" color="blue.500">Impressive</Text> Statistics
          </Heading>

          <Text
            fontSize={subTextSize}
            color="gray.300"
            mt={1}
          >
            Trusted by thousands, delivering excellence every day
          </Text>
        </Box>

        {/* ============================================ */}
        {/* STATISTICS - CARDS */}
        {/* ============================================ */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={3}
          mt={5}
        >
          {stats.map((item, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="xl"
              p={3}
              minHeight="180px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "lg",
              }}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <Box
                width="40px"
                height="40px"
                borderRadius="full"
                bg="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={item.icon} boxSize={6} color={item.color} />
              </Box>

              <Box>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color={item.color}
                >
                  {item.value}
                </Heading>

                <Text fontSize="xs" color="gray.600" mt={1}>
                  {item.title}
                </Text>
              </Box>

              <Box
                width="40px"
                height="4px"
                borderRadius="full"
                bg="orange.300"
                mt={1}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}