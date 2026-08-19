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
  Badge,
  HStack
} from "@chakra-ui/react";

import {
  FaUser,
  FaHome,
  FaBuilding,
  FaCoins,
} from "react-icons/fa";

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

  // ✨ BLINK ANIMATION STYLES (Sirf text ke liye)
  const blinkTextStyle = {
    sx: {
      "@keyframes blinkText": {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0.3 },
      },
      animation: "blinkText 1.5s ease-in-out infinite",
    },
  };

  return (
    // 🎨 MAIN BG CHANGED TO BLUE-50
    <Box width="100%" overflowX="hidden" bg="blue.50">

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <Box
        minHeight={{ base: "auto", md: "90vh", lg: "90vh" }}
        display="flex"
        mt={10}
        alignItems="center"
        justifyContent="center"
        bg="blue.50"
        color="blue.900"
        px={{ base: 4, md: 10, lg: 8 }}
        py={{ base: 6, md: 8, lg: 20 }}
      >
        <Container maxWidth="1280px" px={{ base: 2, md: 4, lg: 8 }}>
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
                color="blue.900"
              >
                Empowering Every Indian with
                <Text as="span" color="blue.600" fontWeight="bold" display="block">
                  Instant Loans
                </Text>
              </Heading>

              <Text
                fontSize={textSize}
                mt={{ base: 4, md: 6 }}
                lineHeight={{ base: "1.7", md: "1.8" }}
                color="blue.800"
                maxWidth={{ base: "100%", lg: "90%" }}
              >
                Get the funds you need with quick approvals,
                minimal paperwork, and fast disbursals. Whether
                it's a small expense or a big dream, our hassle-free loan solutions are
                <Text as="span" color="blue.700" fontWeight="semibold">
                  {" "}designed to fit your needs.
                </Text>
                We are innovators, problem solvers, and trusted partners
                making borrowing simple.
              </Text>

              {/* ✨ LOAN BUTTONS WITH BLINKING TEXT ✨ */}
              <SimpleGrid
                columns={{ base: 2, sm: 2 }}
                gap={{ base: 3, md: 4 }}
                maxWidth={{ base: "100%", lg: "500px" }}
                mt={5}
                mx={{ base: "auto", lg: 0 }}
              >
                {/* Personal Loan */}
                <Button
                  onClick={handlePersonalLoanClick}
                  bg="green.500"
                  color="white"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "50px", md: "60px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "green.600",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  <Image
                    src="/2.png"
                    alt="Personal Loan"
                    width={10}
                    height={10}
                  />
                  <span className="blink-text">
                    Personal Loan
                  </span>
                </Button>

                {/* Business Loan */}
                <Button
                  onClick={handleBusinessLoanClick}
                  bg="red.500"
                  color="white"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "50px", md: "60px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "red.600",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  <Image
                    src="/3.png"
                    alt="Business Loan"
                    width={10}
                    height={10}
                  />
                  <span className="blink-text">
                    Business Loan
                  </span>
                </Button>

                {/* Home Loan */}
                <Button
                  onClick={handleHomeLoanClick}
                  bg="yellow.400"
                  color="white"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "50px", md: "60px" }}
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
                  <Image
                    src="/4.png"
                    alt="Home Loan"
                    width={10}
                    height={10}
                  />
                  <span className="blink-text">
                    Home Loan
                  </span>
                </Button>

                {/* Gold Loan */}
                <Button
                  onClick={handleGoldLoanClick}
                  bg="blue.600"
                  color="white"
                  borderRadius="xl"
                  py={{ base: 4, md: 6 }}
                  height={{ base: "50px", md: "60px" }}
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  _hover={{
                    bg: "blue.700",
                    transform: "scale(1.05)",
                    boxShadow: "lg",
                  }}
                  _active={{ transform: "scale(0.95)" }}
                  transition="all 0.2s ease"
                  boxShadow="md"
                >
                  <Image
                    src="/5.png"
                    alt="Gold Loan"
                    width={10}
                    height={10}
                  />
                  <span className="blink-text">
                    Gold Loan
                  </span>
                </Button>
              </SimpleGrid>
            </Box>

            {/* RIGHT ANIMATION */}
            <Box
              width={{ base: "100%", sm: "350px", md: "400px", lg: "450px" }}
              // maxWidth="450px"
              // height={animationHeight}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src="/loans-instant3"
                alt="Instant Loan"
                w="100"
                h="100"
                borderRadius="24px"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* ============================================ */}
      {/* FEATURE CARDS */}
      {/* ============================================ */}
      <Box bg="blue.50" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 5, md: 7, lg: 8 }}>
        <Container maxW="1280px">
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={{ base: 4, md: 6, lg: 8 }}
          >
            {features.map((feature, idx) => (
              <Box
                key={idx}
                bg="white"
                border="1px solid"
                borderColor="blue.100"
                borderRadius="xl"
                boxShadow="md"
                p={4}
                minHeight={{ base: "140px", md: "160px" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "2xl",
                  borderColor: "blue.300",
                }}
              >
                <Text fontSize={{ base: "2xl", md: "3xl" }} mb={2}>
                  {feature.icon}
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="bold"
                  color="blue.900"
                  mb={1}
                >
                  {feature.title}
                </Heading>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color="blue.800"
                  opacity={0.9}
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
      {/* BANNER SECTION */}
      {/* ============================================ */}
      <Box
        position="relative"
        py={{ base: 10, md: 15, lg: 25 }}
        overflow="hidden"
        bg="blue.50"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          bgGradient: "linear(to-br, blue.50 via-white to-purple.50)",
          zIndex: 0,
        }}
      >
        {/* Decorative Background Blobs */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          w={{ base: "300px", lg: "600px" }}
          h={{ base: "300px", lg: "600px" }}
          bg="radial-gradient(circle, rgba(99,179,237,0.15) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(40px)"
          zIndex={0}
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          w={{ base: "250px", lg: "500px" }}
          h={{ base: "250px", lg: "500px" }}
          bg="radial-gradient(circle, rgba(183,148,244,0.12) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(40px)"
          zIndex={0}
        />

        <Container maxW="1200px" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column-reverse", lg: "row" }}
            align="center"
            gap={{ base: 8, lg: 10 }}
          >
          </Flex>
        </Container>
      </Box>
      {/* ============================================ */}
      {/* OTHER SECTIONS */}
      {/* ============================================ */}
      <Box as="section" width="100%" py={{ base: 2, md: 3, lg: 2 }}>
        <Second />
      </Box>
      <Box as="section" width="100%" py={{ base: 2, md: 3, lg: 2 }}>
        <Third />
      </Box>
      <Box as="section" width="100%" py={{ base: 2, md: 3, lg: 2 }}>
        <Forth />
      </Box>
      <Box as="section" width="100%" py={{ base: 2, md: 3, lg: 2 }}>
        <Fifth />
      </Box>
      <Box as="section" width="100%" py={{ base: 2, md: 3, lg: 2 }}>
        <EMICalculator />
      </Box>
      <Box as="section" width="100%" py={{ base: 2, md: 3, lg: 2 }}>
        <Sixth />
      </Box>
      <Box as="section" width="100%" py={{ base: 1, md: 1, lg: 2 }}>
        <Seventh />
      </Box>
      <Box as="section" width="100%" py={{ base: 2, md: 1, lg: 2 }}>
        <Eighth />
      </Box>
    </Box>
  );
}