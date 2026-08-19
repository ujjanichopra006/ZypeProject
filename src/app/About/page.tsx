"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import mobileAppsAnimation from "@/../public/mobile-apps.json";
import Second from "../../app/About/page2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box w="full" minH="70vh" bg="#0b1220" color="blue.50" overflow="hidden">

      {/* 🌟 1. HERO SECTION - High Contrast Text */}
      <Box
        position="relative"
        w="full"
        h={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      
        backgroundPosition="center"
        bgRepeat="no-repeat"
     
      >
        {/* Darker Gradient Overlay for maximum text readability */}
        <Box position="absolute" inset={0} bg="blue.50" />

        <Box position="relative" zIndex={1} maxW="4xl" px={6} data-aos="fade-up">
          <Text
            color="blue.600"
            fontWeight="bold"
            letterSpacing="widest"
            fontSize="sm"
            textTransform="uppercase"
            mb={0}
          >
            India's Elite Loan Ecosystem
          </Text>

          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="extrabold"
            lineHeight="1.1"
            mb={2}
            color="black"
            textShadow="0 2px 20px rgba(0,0,0,0.5)" // Subtle shadow for pop
          >
           Simplifying Your {" "}
            <Text as="span" color="blue.800">
              Financial Journey
            </Text>
            {/* <br /> */}
          </Heading>

          <Text
            mt={4}
            color="blue.400"
            fontSize={{ base: "md", md: "xl" }}
            maxW="2xl"
            mx="auto"
            lineHeight="1.6"
          >
            We simplify borrowing by matching your profile with top RBI-regulated lenders. Compare terms, secure competitive rates, and unlock instant approvals—all in one secure place.

          </Text>

        </Box>
      </Box>

      {/* 🌟 2. WHO WE ARE SECTION - Light Theme (Perfect Contrast) */}
      <Box bg="white" color="gray.800" py={{ base: 6, md: 8 }} position="relative">
        {/* Subtle background glow */}
        <Box position="absolute" top="0" left="50%" transform="translateX(-50%)" w="600px" h="500px" bg="orange.50" filter="blur(100px)" zIndex={0} opacity={0.6} />

        <Container maxW="6xl" position="relative" zIndex={1}>
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            gap={{ base: 6, md: 10 }}
          >
            {/* Left Content */}
            <Box flex="1.2" data-aos="fade-right">
              <Text color="orange.600" fontWeight="bold" letterSpacing="wide" fontSize="sm" textTransform="uppercase" mb={0}>
                Who We Are
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                mb={6}
                color="gray.900" // Darkest gray for main heading on white
                lineHeight="1.2"
              >
                Need Funds Fast? <br />
                <Text as="span" color="orange.500">We've Got You Covered.</Text>
              </Heading>

              <Text color="gray.700" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }} mb={8}>
                Financial emergencies or big dreams? Don't let funds stop you! At <strong style={{ color: "#1a202c" }}>KeshvaCredit</strong>, we make getting a loan as easy as ordering food online. We connect you directly with top-rated, trusted lenders to get you the money you need, exactly when you need it.
              </Text>

              {/* Loans For Every Need - Pill Badges */}
              <Box mb={8}>
                <Text fontWeight="bold" color="gray.900" mb={4} fontSize="lg">💼 Loans for Every Need:</Text>
                <Flex wrap="wrap" gap={3}>
                  {["Personal Loans", "Business Loans", "Home Loans", "Gold Loans"].map((loan, i) => (
                    <Box
                      key={i}
                      px={4} py={2}
                      bg="orange.50"
                      color="orange.700" // Darker orange text for better readability on light orange bg
                      borderRadius="full"
                      fontWeight="semibold"
                      fontSize="sm"
                      border="1px solid"
                      borderColor="orange.200"
                    >
                      ✔️ {loan}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>

            {/* Right Animation with Glow */}
            <Box flex="1" display="flex" justifyContent="center" alignItems="center" position="relative" data-aos="fade-left">
              <Box position="absolute" w="80%" h="80%" bgGradient="linear(to-tr, orange.100, blue.50)" filter="blur(60px)" borderRadius="full" zIndex={0} />
              <Lottie
                animationData={mobileAppsAnimation}
                loop
                style={{ width: "100%", maxWidth: "500px", height: "auto", position: "relative", zIndex: 1 }}
              />
            </Box>

          </Stack>
        </Container>
      </Box>

      {/* 🌟 3. WHAT MAKES US SPECIAL - Dark Theme (Fixed Visibility) */}
      <Box bg="blue.50"
        py={{ base: 10, md: 19 }} px={4} textAlign="center">
        <Container maxW="5xl">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="extrabold"
            mb={4}
            color="pink.600"
            data-aos="fade-up"
          >
            What Makes Us <Text as="span" color="orange.800">Special</Text>
          </Heading>

          <Text
            color="purple.600" // Light gray for dark bg
            lineHeight="relaxed"
            fontSize={{ base: "md", md: "lg" }}
            maxW="2xl"
            mx="auto"
            mb={16}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We believe financial solutions should be simple, transparent, and tailored. Empowering you with seamless digital experiences and peace of mind.
          </Text>

          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
            gap={6}
            maxW="5xl"
            mx="auto"
          >
            {[
              { src: "/deadline.png", alt: "Fast Approval", text: "Fast Approval", delay: 0 },
              { src: "/quick disbursal.png", alt: "Quick Disbursal", text: "Quick Disbursal", delay: 100 },
              { src: "/paperless.png", alt: "Paperless", text: "100% Paperless", delay: 200 },
              { src: "/color.png", alt: "Wide Range", text: "Wide Range", delay: 300 },
              { src: "/hassle free docs.png", alt: "Hassle Free Docs", text: "Hassle Free Docs", delay: 400 },
              { src: "/safe data ecosystem.png", alt: "Safe Data Ecosystem", text: "Safe Ecosystem", delay: 500 },
            ].map((item, index) => (
              <GridItem
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={8}
                bg="whiteAlpha.50"
                backdropFilter="blur(10px)"
                borderRadius="2xl"
                border="1px solid"
                borderColor="whiteAlpha.100"
                _hover={{
                  bg: "whiteAlpha.100",
                  transform: "translateY(-5px)",
                  borderColor: "orange.400",
                  transition: "all 0.3s ease"
                }}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                cursor="pointer"
              >
                {/* Fixed Icon Container for Dark Theme */}
                <Box
                  bgGradient="linear(to-br, gray.700, gray.800)"
                  p={4}
                  borderRadius="2xl"
                  mb={4}
                  boxShadow="0 4px 15px rgba(0,0,0,0.3)"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={40}
                    height={40}
                    className="object-contain"
                  // Yahan se filter hata diya gaya hai taaki colorful images apne asli roop mein dikhein
                  />
                </Box>
                <Text fontSize="md" fontWeight="bold" color="gray.600" letterSpacing="wide">
                  {item.text}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      <Second />
    </Box>
  );
}