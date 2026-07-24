"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  Button,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FaGooglePlay } from "react-icons/fa";

export default function Forth() {
  const loanData = {
    personal: {
      eligibility: [
        "Minimum age: 21 years",
        "Maximum age: 60 years at loan maturity",
        "Minimum income: ₹15,000 per month (salaried), ₹2 lakh p.a. (self-employed)",
        "Credit score: 650 or above preferred",
        "Employment: Minimum 1 year with current employer",
      ],
      documents: [
        "Identity Proof (Aadhaar/PAN)",
        "Address Proof (Aadhaar/Utility Bill)",
        "Income Proof (Salary Slips or Bank Statement)",
        "Selfie with ID (For Verification)",
      ],
    },

    home: {
      eligibility: [
        "Minimum age: 21 years",
        "Maximum age: 65 years at loan maturity",
        "Minimum income: ₹25,000 per month (salaried), ₹3 lakh p.a. (self-employed)",
        "Property value: Minimum ₹20 lakh",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Income Proof (Bank Statement or Salary Slips)",
        "Property Documents (Sale Agreement, Title Deed)",
        "Selfie with ID (For Verification)",
      ],
    },

    business: {
      eligibility: [
        "Business vintage: Minimum 3 years",
        "Annual turnover: Minimum ₹10 lakh",
        "Profitability: Should be profitable for last 2 years",
        "Credit score: 700 or above preferred",
        "Existing loans: EMI/NMI ratio below 50%",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Bank Statements for last 6-12 months",
        "Business Registration Proof (GST/MSME)",
        "Selfie with ID (For Verification)",
      ],
    },

    credit: {
      eligibility: [
        "Minimum age: 18 years (21 for premium cards)",
        "Minimum income: ₹12,000 per month",
        "Credit score: 650 or above",
        "Employment: Stable income source for last 6 months",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Income Proof (Salary Slips or Bank Statement)",
        "Selfie with ID (For Verification)",
      ],
    },
  };

  const [activeLoan, setActiveLoan] = useState<keyof typeof loanData>("personal");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);
    return () => clearTimeout(timer);
  }, [activeLoan]);

  const handleLoanChange = (loan: keyof typeof loanData) => {
    setActiveLoan(loan);
  };

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const subTextSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const appHeadingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const appTextSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const mobileImageSize = useBreakpointValue({ base: "180px", sm: "220px", md: "260px", lg: "300px" });
  const cardPadding = useBreakpointValue({ base: 5, md: 6, lg: 8 });
  const buttonWidth = useBreakpointValue({ base: "130px", sm: "140px", md: "155px", lg: "170px" });

  const tabs = [
    { key: "personal", label: "Personal Loan", icon: "🏦" },
    { key: "home", label: "Home Loan", icon: "🏠" },
    { key: "business", label: "Business Loan", icon: "💼" },
    { key: "credit", label: "Credit Card", icon: "💳" },
  ];

  return (
    <Box bg="#111525" py={{ base: 6, md: 8, lg: 10 }} px={{ base: 3, md: 5, lg: 8 }} overflow="hidden">
      <Container maxW="1280px" px={{ base: 2, md: 4 }}>
        
        {/* ============================================ */}
        {/* APP DOWNLOAD SECTION */}
        {/* ============================================ */}
        <Box
          bg="linear-gradient(135deg, #86efac 0%, #4ade80 100%)"
          borderRadius="3xl"
          boxShadow="0 20px 60px rgba(74, 222, 128, 0.3)"
          px={{ base: 5, md: 8, lg: 12 }}
          py={{ base: 8, md: 10, lg: 12 }}
          mx="auto"
          mb={{ base: 8, md: 12 }}
          position="relative"
          overflow="hidden"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          {/* Decorative Circles */}
          <Box
            position="absolute"
            top="-100px"
            right="-100px"
            width="300px"
            height="300px"
            borderRadius="full"
            bg="rgba(255,255,255,0.1)"
          />
          <Box
            position="absolute"
            bottom="-80px"
            left="-80px"
            width="200px"
            height="200px"
            borderRadius="full"
            bg="rgba(255,255,255,0.08)"
          />

          <Flex
            direction={{ base: "column", lg: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 8, md: 10, lg: 12 }}
            position="relative"
            zIndex={1}
          >
            {/* Left Content */}
            <Box
              flex="1"
              textAlign={{ base: "center", lg: "left" }}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Heading
                as="h1"
                fontSize={appHeadingSize}
                fontWeight="extrabold"
                color="gray.900"
                lineHeight="1.2"
              >
                Get the <br />
                <Text as="span" color="gray.800" fontSize={appHeadingSize}>
                  KeshvaCredit App Today!
                </Text>
              </Heading>

              <Text
                fontSize={appTextSize}
                color="gray.700"
                py={{ base: 4, md: 5 }}
                lineHeight="1.8"
                fontWeight="medium"
              >
                Discover and compare the best loan offers from
                <Box as="span" display={{ base: "none", md: "inline" }}> </Box>
                <Box as="span" display={{ base: "inline", md: "none" }}><br /></Box>
                multiple trusted lenders, check your eligibility,
                <Box as="span" display={{ base: "none", md: "inline" }}> </Box>
                <Box as="span" display={{ base: "inline", md: "none" }}><br /></Box>
                apply instantly, and manage everything seamlessly
                <Box as="span" display={{ base: "none", md: "inline" }}> </Box>
                <Box as="span" display={{ base: "inline", md: "none" }}><br /></Box>
                within one app.
              </Text>

              <Link
                href="https://play.google.com/store/apps/details?id=com.keshvacredit.loan&pcampaignid=web_share"
                target="_blank"
                passHref
              >
                <Box
                
                  display="inline-flex"
                  alignItems="center"
                  gap={3}
                  bg="gray.900"
                  color="white"
                  px={{ base: 5, md: 6 }}
                  py={{ base: 3, md: 4 }}
                  borderRadius="xl"
                  fontWeight="bold"
                  fontSize={{ base: "sm", md: "md" }}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "xl",
                    bg: "gray.800",
                  }}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <FaGooglePlay size={24} />
                  <Box textAlign="left">
                    <Text fontSize="xs" opacity={0.7}>GET IT ON</Text>
                    <Text fontSize="md" fontWeight="bold">Google Play</Text>
                  </Box>
                </Box>
              </Link>
            </Box>

            {/* Mobile Image */}
            <Box
              flex="1"
              display="flex"
              justifyContent="center"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <Box
                position="relative"
                _hover={{
                  transform: "scale(1.03)",
                  transition: "all 0.4s ease",
                }}
              >
                <Image
                  src="/ss.webp"
                  alt="App Screenshot"
                  width={mobileImageSize}
                  height="auto"
                  borderRadius="2xl"
                  boxShadow="0 20px 60px rgba(0,0,0,0.3)"
                />
                <Box
                  position="absolute"
                  bottom="-20px"
                  left="50%"
                  transform="translateX(-50%)"
                  width="80%"
                  height="30px"
                  bg="rgba(0,0,0,0.2)"
                  filter="blur(20px)"
                  borderRadius="full"
                />
              </Box>
            </Box>
          </Flex>
        </Box>

        {/* ============================================ */}
        {/* HEADING */}
        {/* ============================================ */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={{ base: 4, md: 6 }}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            fontWeight="extrabold"
            bgGradient="linear(to-r, #60a5fa, #93c5fd)"
            bgClip="text"
            textAlign="center"
          >
            Financial Products Eligibility
          </Heading>

          <Text
            fontSize={subTextSize}
            color="gray.300"
            textAlign="center"
            mt={{ base: 3, md: 4 }}
            maxW="2xl"
          >
            Check eligibility criteria and documents required for various financial products
          </Text>
        </Box>

        {/* ============================================ */}
        {/* TABS */}
        {/* ============================================ */}
        <Flex
          justify="center"
          gap={{ base: 2, sm: 3, md: 4 }}
          py={{ base: 4, md: 6 }}
          flexWrap="wrap"
          data-aos="fade-up"
        >
          {tabs.map((item, index) => (
            <Button
              key={item.key}
              onClick={() => handleLoanChange(item.key as keyof typeof loanData)}
              width={buttonWidth}
              height={{ base: "48px", md: "52px", lg: "56px" }}
              borderRadius="xl"
              fontSize={{ base: "xs", sm: "sm", md: "md" }}
              fontWeight="bold"
              color={activeLoan === item.key ? "white" : "gray.800"}
              bg={activeLoan === item.key ? "blue.500" : "gray.200"}
              _hover={{
                bg: activeLoan === item.key ? "blue.600" : "blue.400",
                color: "white",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              _active={{
                transform: "scale(0.95)",
              }}
              transition="all 0.3s ease"
              boxShadow={activeLoan === item.key ? "0 8px 25px rgba(59, 130, 246, 0.4)" : "md"}
              data-aos="flip-up"
              data-aos-delay={index * 80}
            >
              <Text as="span" mr={2} fontSize={{ base: "md", md: "lg" }}>
                {item.icon}
              </Text>
              {item.label}
            </Button>
          ))}
        </Flex>

        {/* ============================================ */}
        {/* ELIGIBILITY & DOCUMENTS - WIDTH KAM, HEIGHT ZYADA */}
        {/* ============================================ */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 5, md: 6, lg: 8 }}
          px={{ base: 0, md: 2 }}
          py={{ base: 4, md: 6 }}
          maxW="4xl" // ✅ Width kam kiya (6xl se 4xl)
          mx="auto"
          justify="center"
        >
          {/* Eligibility Card */}
          <Box
            key={`${activeLoan}-eligibility`}
            flex="1"
            maxW={{ base: "100%", md: "400px" }} // ✅ Width limit
            minHeight={{ base: "320px", md: "400px" }} // ✅ Height badhaya
            bg="linear-gradient(145deg, #f0fdf4, #dcfce7)"
            borderRadius="2xl"
            boxShadow="0 10px 40px rgba(74, 222, 128, 0.15)"
            p={cardPadding}
            transition="all 0.4s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "0 20px 60px rgba(74, 222, 128, 0.25)",
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <Flex align="center" gap={3} mb={{ base: 4, md: 5 }}>
              <Box
                bg="green.500"
                borderRadius="full"
                p={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xl">✅</Text>
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // ✅ Chota heading
                fontWeight="bold"
                color="gray.800"
              >
                Eligibility Criteria
              </Heading>
            </Flex>

            <VStack gap={{ base: 3, md: 4 }} align="flex-start" width="100%">
              {loanData[activeLoan].eligibility.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="flex-start"
                  gap={2}
                  width="100%"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <Text color="green.600" fontSize={{ base: "xs", md: "sm" }} mt={0.5}>
                    ◆
                  </Text>
                  <Text
                    fontSize={{ base: "xs", sm: "xs", md: "sm" }} // ✅ Chota text
                    color="gray.700"
                    lineHeight="1.6"
                  >
                    {item}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Documents Card */}
          <Box
            key={`${activeLoan}-documents`}
            flex="1"
            maxW={{ base: "100%", md: "400px" }} // ✅ Width limit
            minHeight={{ base: "320px", md: "400px" }} // ✅ Height badhaya
            bg="linear-gradient(145deg, #eff6ff, #dbeafe)"
            borderRadius="2xl"
            boxShadow="0 10px 40px rgba(59, 130, 246, 0.15)"
            p={cardPadding}
            transition="all 0.4s ease"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "0 20px 60px rgba(59, 130, 246, 0.25)",
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <Flex align="center" gap={3} mb={{ base: 4, md: 5 }}>
              <Box
                bg="blue.500"
                borderRadius="full"
                p={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="xl">📋</Text>
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // ✅ Chota heading
                fontWeight="bold"
                color="gray.800"
              >
                Documents Required
              </Heading>
            </Flex>

            <VStack gap={{ base: 3, md: 4 }} align="flex-start" width="100%">
              {loanData[activeLoan].documents.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="flex-start"
                  gap={2}
                  width="100%"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <Text color="blue.600" fontSize={{ base: "xs", md: "sm" }} mt={0.5}>
                    ◆
                  </Text>
                  <Text
                    fontSize={{ base: "xs", sm: "xs", md: "sm" }} // ✅ Chota text
                    color="gray.700"
                    lineHeight="1.6"
                  >
                    {item}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}