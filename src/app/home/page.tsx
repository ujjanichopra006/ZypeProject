"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loans1 from "../../animations/loans.json";
import loans2 from "../../animations/Credit tracker Animation (1).json";
import loans3 from "../../animations/content writing.json";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Second from "../../app/home/page2";
import Third from "../../app/home/page3";
import Forth from "../../app/home/page4";
import Fifth from "../../app/home/page5";
import EMICalculator from "./EMIcalculator";
import Sixth from "../../app/home/page6";
import Seventh from "../../app/home/page7";
import Eighth from "../../app/home/page8";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Image,
  Flex,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  // ✅ Animation setup
  const animations = [loans1, loans2, loans3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % animations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Handlers
  const handlePersonalLoanClick = () => {
    const isSubmitted =
      localStorage.getItem("personalLoanSubmitted") === "true";

    if (isSubmitted) {
      router.push("/personalloanlender");
    } else {
      router.push("/personal-loan");
    }
  };

  const handleBusinessLoanClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      router.push("/businessloanlender");
    } else {
      router.push("/business-loan");
    }
  };

  const handleHomeLoanClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      router.push("/homeloanlender");
    } else {
      router.push("/home-loan");
    }
  };

  const handleGoldLoanClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
      router.push("/gold-loan");
    } else {
      router.push("/gold-loan");
    }
  };

  // ✅ AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });

    const refreshAOS = () => {
      AOS.refreshHard();
    };

    window.addEventListener("load", refreshAOS);

    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 500);

    return () => {
      window.removeEventListener("load", refreshAOS);
      clearTimeout(timer);
    };
  }, []);

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "2xl", sm: "3xl", md: "4xl" });
  const textSize = useBreakpointValue({ base: "sm", md: "lg" });
  const animationHeight = index === 0 
    ? useBreakpointValue({ base: "200px", sm: "220px", md: "280px" })
    : useBreakpointValue({ base: "250px", sm: "280px", md: "350px" });

  // Feature cards data
  const features = [
    {
      title: "Your Trust Is Our Strength",
      description: "Get instant access to hassle-free credit with no collateral required. Simple and transparent financial support made easy for you.",
      icon: "🛡️",
    },
    {
      title: "Fast Support",
      description: "Need help? Contact us anytime at keshvacredit@gmail.com. We're available 24/7 for quick assistance.",
      icon: "⚡",
    },
    {
      title: "Unlimited Access",
      description: "Apply once and enjoy continuous access to funds anytime with complete flexibility and convenience.",
      icon: "♾️",
    },
    {
      title: "Safe & Secure",
      description: "Your data is protected with high-level security standards to ensure complete privacy and safety.",
      icon: "🔒",
    },
  ];

  return (
    <Box width="100%" overflowX="hidden" bg="#111525">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <Box
        minHeight={{ base: "auto", md: "90vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#111525"
        color="white"
        px={{ base: 4, md: 10, lg: 8 }}
        py={{ base: 6, md: 8, lg: 20 }}
      >
        <Container maxWidth="1280px" px={{ base: 2, md: 4 }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 6, md: 8, lg: 10 }}
          >
            {/* LEFT TEXT */}
            <Box 
              flex="1" 
              textAlign={{ base: "center", lg: "left" }} 
              data-aos="fade-right"
              width="100%"
            >
              <Heading
                as="h1"
                fontSize={headingSize}
                fontWeight="extrabold"
                lineHeight={{ base: "1.3", md: "1.4" }}
                letterSpacing="tight"
              >
                Empowering Every Indian with
                <Text as="span" color="yellow.400" fontWeight="bold" display="block">
                  Instant Loans
                </Text>
              </Heading>

              <Text
                fontSize={textSize}
                mt={{ base: 4, md: 6 }}
                lineHeight={{ base: "1.7", md: "1.8" }}
                color="gray.300"
                maxWidth={{ base: "100%", lg: "90%" }}
              >
                Get the funds you need with quick approvals,
                minimal paperwork, and fast disbursals. Whether
                it's a small expense or a big dream, our hassle-free loan solutions are
                <Text as="span" color="red.400" fontWeight="semibold">
                  {" "}designed to fit your needs.
                </Text>
                We are innovators, problem solvers, and trusted partners
                making borrowing simple.
              </Text>

              {/* LOAN BUTTONS */}
              <SimpleGrid
                columns={{ base: 2, sm: 2 }}
                gap={{ base: 3, md: 4 }}
                maxWidth={{ base: "100%", lg: "500px" }}
                mt={5}
                mx={{ base: "auto", lg: 0 }}
              >
                <Button
                  onClick={handlePersonalLoanClick}
                  bg="green.400"
                  color="black"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "48px", md: "56px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "green.500",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  Personal Loan
                </Button>

                <Button
                  onClick={handleBusinessLoanClick}
                  bg="red.400"
                  color="black"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "48px", md: "56px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "red.500",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  Business Loan
                </Button>

                <Button
                  onClick={handleHomeLoanClick}
                  bg="yellow.400"
                  color="black"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "48px", md: "56px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "yellow.500",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  Home Loan
                </Button>

                <Button
                  onClick={handleGoldLoanClick}
                  bg="blue.400"
                  color="black"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "48px", md: "56px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "blue.500",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  Gold Loan
                </Button>
              </SimpleGrid>
            </Box>

            {/* RIGHT ANIMATION */}
            <Box 
              flex="1" 
              display="flex" 
              justifyContent="center" 
              alignItems="center"
              data-aos="zoom-in"
              width="100%"
            >
              <Box
                width={{ base: "100%", sm: "350px", md: "400px", lg: "450px" }}
                maxWidth="450px"
                height={animationHeight}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Lottie
                  animationData={animations[index]}
                  loop
                  style={{
                    height: "100%",
                    width: "100%",
                    transition: "all 0.6s ease-in-out",
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ============================================ */}
      {/* FEATURE CARDS */}
      {/* ============================================ */}
      <Box bg="#111525" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 5, md: 7, lg: 8 }}>
        <Container maxW="1280px">
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={{ base: 4, md: 6, lg: 8 }}
          >
            {features.map((feature, idx) => (
              <Box
                key={idx}
                bg="green.300"
                borderRadius="xl"
                boxShadow="lg"
                p={4}
                minHeight={{ base: "140px", md: "160px" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "2xl",
                }}
              >
                <Text fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
                  {feature.icon}
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  color="black"
                  mb={1}
                >
                  {feature.title}
                </Heading>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color="black"
                  opacity={0.8}
                  lineHeight="tall"
                >
                  {feature.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ============================================ */}
      {/* BANNER SECTION - FIXED IMAGE */}
      {/* ============================================ */}
      <Box 
        bg="#111525" 
        px={{ base: 0, md: 0, lg: 0 }} 
        py={{ base: 0, md: 0, lg: 0 }}
      >
        <Container maxW="1280px">
          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            gap={{ base: 5, md: 6, lg: 8 }}
          >
            {/* Image with Error Handling */}
            <Box 
              flex="1" 
              display="flex" 
              justifyContent="center"
              data-aos="fade-right"
              width="100%"
            >
              {imageError ? (
                // ✅ Fallback when image fails to load
                <Box
                  width={{ base: "280px", sm: "320px", md: "350px", lg: "400px" }}
                  height={{ base: "280px", sm: "320px", md: "350px", lg: "400px" }}
                  bg="gray.700"
                  borderRadius="3xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="2xl"
                  flexDirection="column"
                >
                  <Text fontSize="5xl" mb={2}>🏠</Text>
                  <Text color="gray.400" fontSize="sm" fontWeight="medium">
                    Image Not Found
                  </Text>
                </Box>
              ) : (
                <Image
                  src="/sell car.jpg"
                  alt="KeshvaCredit - Sell Car"
                  width={{ base: "280px", sm: "320px", md: "350px", lg: "400px" }}
                  height={{ base: "280px", sm: "320px", md: "350px", lg: "400px" }}
                  objectFit="cover"
                  borderRadius="3xl"
                  boxShadow="2xl"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "scale(1.03)",
                    boxShadow: "dark-lg",
                  }}
                  onError={() => setImageError(true)}
                />
              )}
            </Box>

            {/* Content */}
            <Box 
              flex="1" 
              textAlign={{ base: "center", lg: "left" }} 
              data-aos="fade-left"
              width="100%"
            >
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="white"
                lineHeight={{ base: "1.3", md: "1.4" }}
              >
                Avail Loans from ₹2,000 to ₹20 Lakhs
                <Text as="span" color="yellow.400" display="block" mt={1}>
                  Quick, Hassle-Free, Secure 🚀
                </Text>
              </Heading>

              <Text
                mt={{ base: 4, md: 6 }}
                color="blue.300"
                fontWeight="medium"
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                lineHeight={{ base: "1.7", md: "1.8" }}
              >
                With KeshvaCredit, achieve your financial goals effortlessly.
                We're on a mission to make financial inclusion a reality for
                every Indian by providing fast, secure, and hassle-free loan
                solutions. Whether you need funds for personal needs, business
                growth, education, or emergencies, we've got you covered.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ============================================ */}
      {/* OTHER SECTIONS */}
      {/* ============================================ */}
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Second />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Third />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Forth />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Fifth />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <EMICalculator />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Sixth />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Seventh />
      </Box>
      <Box as="section" width="100%" py={{ base: 4, md: 4, lg: 16 }}>
        <Eighth />
        </Box>
    </Box>
  );
}
