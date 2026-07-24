"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import {
  Users,
  BadgeCheck,
  FileText,
  DollarSign,
  HandCoins,
  Clock3,
} from "lucide-react";

export default function Sixth() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const cardPadding = useBreakpointValue({ base: 4, md: 5, lg: 6 });
  const imageSize = useBreakpointValue({ base: "160px", md: "200px", lg: "220px" });
  const iconSize = useBreakpointValue({ base: 16, md: 18, lg: 20 }); // ✅ Chota icon (20 se 16)
  const iconContainerSize = useBreakpointValue({ base: "40px", md: "44px", lg: "48px" }); // ✅ Chota container (56px se 48px)

  const cards = [
    {
      icon: Users,
      title: "Happy Customers",
      description:
        "Trusted by over five lakh users! Enjoy smooth, secure service and great financial rewards.",
      color: "blue.400",
    },
    {
      icon: BadgeCheck,
      title: "Instant Approval",
      description:
        "Get online loan approval in just 48 hours with minimum paperwork and fast fund access.",
      color: "green.400",
    },
    {
      icon: FileText,
      title: "100% Paperless",
      description:
        "Apply entirely online — quick, safe, and hassle-free from the comfort of your home.",
      color: "purple.400",
    },
    {
      icon: DollarSign,
      title: "No Hidden Charges",
      description:
        "Enjoy complete transparency with no surprise fees or hidden costs.",
      color: "orange.400",
    },
    {
      icon: HandCoins,
      title: "Loans Disbursed",
      description:
        "Over ₹1000 crore disbursed swiftly with secure and simple approvals.",
      color: "pink.400",
    },
    {
      icon: Clock3,
      title: "Flexible Loan Options",
      description:
        "Choose loans from ₹1,000 to ₹1,00,000 with flexible repayment terms from 3 to 24 months.",
      color: "teal.400",
    },
  ];

  return (
    <Box bg="#111525" py={{ base: 0, md: 0, lg: 0 }} overflow="hidden">
      <Container maxW="1700px" px={{ base: 3, md: 5, lg: 8 }}>
        
        {/* ============================================ */}
        {/* TOP LINE WITH OM */}
        {/* ============================================ */}
        <Box
          display="flex"
          alignItems="center"
          mb={{ base: 6, md: 8, lg: 10 }}
          data-aos="fade-down"
        >
          <Box flex="1" height="1px" bg="gray.600" />

          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="medium"
            color="yellow.300"
            px={{ base: 3, md: 4, lg: 6 }}
            whiteSpace="nowrap"
          >
            ॐ KeshvaCredit ॐ
          </Heading>

          <Box flex="1" height="1px" bg="gray.600" />
        </Box>

        {/* ============================================ */}
        {/* MAIN LAYOUT */}
        {/* ============================================ */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 6, md: 8, lg: 10 }}
          align="center"
        >
          {/* ============================================ */}
          {/* LEFT - MOBILE IMAGE */}
          {/* ============================================ */}
          <Box
            flexShrink={0}
            width={{ base: "100%", lg: "auto" }}
            display="flex"
            justifyContent="center"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <Box
              position="relative"
              _hover={{
                transform: "scale(1.05)",
                transition: "all 0.4s ease",
              }}
            >
              <Image
                src="/mobile application.png"
                alt="Mobile Application"
                width={imageSize}
                height="auto"
                objectFit="contain"
                onError={(e: any) => {
                  e.target.style.display = "none";
                }}
              />
              {/* Glow Effect */}
              <Box
                position="absolute"
                bottom="-20px"
                left="50%"
                transform="translateX(-50%)"
                width="80%"
                height="30px"
                bg="rgba(17, 165, 168, 0.2)"
                filter="blur(25px)"
                borderRadius="full"
              />
            </Box>
          </Box>

          {/* ============================================ */}
          {/* RIGHT - CARDS GRID */}
          {/* ============================================ */}
          <Box flex="1" width="100%">
            <SimpleGrid
              columns={{ base: 1, sm: 2, xl: 3 }}
              gap={{ base: 3, md: 4, lg: 5 }}
            >
              {cards.map((card, index) => (
                <Box
                  key={index}
                  bg="#11a5a8"
                  borderRadius="2xl"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.1)"
                  p={cardPadding}
                  minHeight={{ base: "170px", md: "180px", lg: "190px" }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  textAlign="center"
                  boxShadow="0 10px 40px rgba(17, 165, 168, 0.2)"
                  transition="all 0.4s ease"
                  _hover={{
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 60px rgba(17, 165, 168, 0.35)",
                  }}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >
                  {/* ✅ Icon Container - Chota */}
                  <Box
                    width={iconContainerSize}
                    height={iconContainerSize}
                    borderRadius="xl"
                    bgGradient={`linear(to-r, ${card.color}, ${card.color}.600)`}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 8px 25px rgba(0,0,0,0.2)"
                    flexShrink={0}
                  >
                    {/* ✅ Icon - Chota */}
                    <Icon as={card.icon} boxSize={iconSize} color="white" strokeWidth={2} />
                  </Box>

                  {/* Title - Chota */}
                  <Heading
                    as="h3"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="black"
                    mt={3}
                    mb={1.5}
                  >
                    {card.title}
                  </Heading>

                  {/* Description - Chota */}
                  <Text
                    fontSize={{ base: "2xs", sm: "2xs", md: "xs" }}
                    color="gray.800"
                    lineHeight="1.5"
                  >
                    {card.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}