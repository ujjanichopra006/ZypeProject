"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { keyframes } from "@emotion/react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  useBreakpointValue,
  VStack,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaGooglePlay } from "react-icons/fa";
import { 
  CheckCircle, 
  FileText, 
  Users, 
  Home, 
  Briefcase, 
  CreditCard,
  Star,
  Sparkles,
  Shield,
  Clock,
  Zap,
  TrendingUp,
  Wallet,
  Gift
} from "lucide-react";

// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.4); }
  100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export default function Forth() {
  const loanData = {
    personal: {
      icon: Users,
      label: "Personal Loan",
      color: "teal",
      gradient: "linear-gradient(135deg, #dbf3ee 0%, #9afaf7 100%)",
      bgGradient: "linear-gradient(135deg, #dbf3ee, #9afaf7)",
      eligibility: [
        "Minimum age: 21 years",
        "Maximum age: 60 years at loan maturity",
        "Minimum income: ₹15,000/per month (salaried), ₹2L p.a. (self-employed)",
        "Credit score: 650 or above preferred",
        "Employment: Minimum 1 year with current employer (salaried) or 2 years in business (self-employed) ",
      ],
      documents: [
        "Identity Proof (Aadhaar/PAN)",
        "Address Proof (Aadhaar/Utility Bill)",
        "Income Proof (Salary Slips or Bank Statement)",
        "Selfie with ID (For Verification)",
      ],
    },
    home: {
      icon: Home,
      label: "Home Loan",
      color: "blue",
      gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      bgGradient: "linear-gradient(135deg, #3b92f6, #2563eb)",
      eligibility: [
        "Minimum age: 21 years",
        "Maximum age: 65 years at loan maturity",
        "Minimum income: ₹25,000/per month (salaried), ₹3L p.a. (self-employed)",
        "Property value: Minimum ₹20 lakh",
        "own contribution: 10-20% of property value",
      ],
      documents: [
        "Identity & Address Proof (Aadhaar/PAN)",
        "Income Proof (Bank Statement or Salary Slips)",
        "Property Documents (Sale Agreement, Title Deed)",
        "Selfie with ID (For Verification)",
      ],
    },
    business: {
      icon: Briefcase,
      label: "Business Loan",
      color: "purple",
      gradient: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)",
      bgGradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      eligibility: [
        "Business vintage: Minimum 3 years",
        "Annual turnover: Minimum ₹10 lakh",
        "Profitability: should be profitable for last 2 years",
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
      icon: CreditCard,
      label: "Credit Card",
      color: "orange",
      gradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
      bgGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      eligibility: [
        "Minimum age: 18 years (21 for premium cards)",
        "Minimum income: ₹12,000 per month (varies by card type)",
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror:false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeLoan]);

  // Responsive values
  const headingSize = useBreakpointValue({ base: "3xl", md: "2xl", lg: "3xl" });
  const subTextSize = useBreakpointValue({ base: "md", md: "lg" });
  const appHeadingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const appTextSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const mobileImageSize = useBreakpointValue({ base: "160px", sm: "200px", md: "240px", lg: "280px" });
  const cardPadding = useBreakpointValue({ base: 6, md: 7, lg: 8 });
  const buttonWidth = useBreakpointValue({ base: "130px", sm: "145px", md: "160px", lg: "175px" });

  const tabs = [
    { key: "personal", label: "Personal", icon: Users, emoji: "💳" },
    { key: "home", label: "Home", icon: Home, emoji: "🏠" },
    { key: "business", label: "Business", icon: Briefcase, emoji: "💼" },
    { key: "credit", label: "Credit Card", icon: CreditCard, emoji: "💎" },
  ];

  const currentData = loanData[activeLoan];

  return (
    <Box bg="blue.50" py={{ base: 5, md: 13, lg: 15 }} overflow="hidden" position="relative">
      {/* Animated Background Particles - Adjusted for Light Theme */}
      <Box position="absolute" top={0} left={0} right={0} bottom={0} overflow="hidden" pointerEvents="none">
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            w={2}
            h={2}
            bg="blue.100"
            borderRadius="full"
            opacity={0.3}
            animation={`${floatAnimation} ${3 + i * 0.5}s infinite ease-in-out ${i * 0.2}s`}
            left={`${Math.random() * 100}%`}
            top={`${Math.random() * 100}%`}
          />
        ))}
      </Box>

      <Container maxW="1000px" px={{ base: 2, md: 3 }} position="relative" zIndex={1}>
        
        {/* ============================================ */}
        {/* APP DOWNLOAD SECTION */}
        {/* ============================================ */}
        <Box
            mt={10}
            bg="linear-gradient(135deg, #64648c 0%, #454954 50%, #4b6079 100%)"
            borderRadius="3xl"
            boxShadow="0 30px 80px rgba(37, 99, 235, 0.3)"
            px={{ base: 4, md: 6, lg: 8 }}
            py={{ base: 6, md: 8, lg: 10 }}
            mx={{ base: 0, md: 10, lg: 20 }}
            mb={{ base: 12, md: 16 }}
            position="relative"
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.1)"
            _hover={{ transform: 'scale(1.01)', transition: 'all 0.5s ease' }}
          >
            {/* Animated Gradient Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)"
              backgroundSize="200% 100%"
              animation={`${shimmer} 3s infinite`}
            />

            {/* Decorative Glow Orbs */}
            <Box
              position="absolute"
              top="-200px"
              right="-100px"
              width="400px"
              height="400px"
              borderRadius="full"
              bg="rgba(37, 99, 235, 0.15)"
              filter="blur(80px)"
              animation={`${floatAnimation} 6s infinite ease-in-out`}
            />
            <Box
              position="absolute"
              bottom="-100px"
              left="-100px"
              width="300px"
              height="300px"
              borderRadius="full"
              bg="rgba(189, 166, 241, 0.1)"
              filter="blur(80px)"
              animation={`${floatAnimation} 8s infinite ease-in-out reverse`}
            />

            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 8, md: 10, lg: 12 }}
              position="relative"
              zIndex={2}
            >
              {/* Left Content */}
              <Box
                flex="1"
                textAlign={{ base: "center", lg: "left" }}
              >
                
                <Heading
                  as="h1"
                  fontSize="2xl"
                  fontWeight="extrabold"
                  lineHeight="1.2"
                  bgGradient="linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)"
                  bgClip="text"
                >
                  Get the{" "}
                  <Text as="span" bgGradient="linear-gradient(135deg, #669bf0, #b79afa, #eb97c1)" bgClip="text">
                    KeshvaCredit
                  </Text>
                  <br />
                  <Text as="span" fontSize="2xl" color="white">
                    App Today!
                  </Text>
                </Heading>

                <Text
                  fontSize="sm"
                  color="gray.100"
                  py={{ base: 4, md: 5 }}
                  lineHeight="1.8"
                  maxW="lg"
                  mx={{ base: "auto", lg: 0 }}
                >
                  Discover and compare the best loan offers from multiple trusted lenders,
                  check your eligibility, apply instantly, and manage everything seamlessly
                  within one app.
                </Text>

                <HStack gap={4} justify={{ base: "center", lg: "flex-start" }} flexWrap="wrap" mt={2}>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.keshvacredit.loan&pcampaignid=web_share"
                    target="_blank"
                    passHref
                  >
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      gap={3}
                      bg="white"
                      color="gray.900"
                      px={{ base: 6, md: 7 }}
                      py={{ base: 3.5, md: 4 }}
                      borderRadius="xl"
                      fontWeight="bold"
                      fontSize={{ base: "sm", md: "md" }}
                      transition="all 0.3s ease"
                      cursor="pointer"
                      _hover={{
                        transform: "scale(1.08) translateY(-4px)",
                        boxShadow: "0 20px 60px rgba(37, 99, 235, 0.5)",
                      }}
                      border="1px solid rgba(255,255,255,0.2)"
                    >
                      <FaGooglePlay size={20} />
                      <Box textAlign="left">
                        <Text fontSize="xs" opacity={0.6}>GET IT ON</Text>
                        <Text fontSize="md" fontWeight="bold">Google Play</Text>
                      </Box>
                    </Box>
                  </Link>

                  
                </HStack>
              </Box>

              {/* Mobile Image - Fixed without fallbackSrc */}
              <Box
                flex="1"
                display="flex"
                justifyContent="center"
              >
                <Box
                  position="relative"
                  transition="all 0.5s ease"
                  animation={`${floatAnimation} 4s ease-in-out infinite`}
                  _hover={{
                    transform: "scale(1.08) rotate(-3deg)",
                  }}
                >
                  <Image
                    src="/ss.webp"
                    alt="App Screenshot"
                    width="250px"
                    height="auto"
                    borderRadius="2xl"
                    boxShadow="0 30px 80px rgba(0,0,0,0.5)"
                    border="2px solid rgba(255,255,255,0.1)"
                    onError={(e: any) => {
                      e.target.src = 'https://via.placeholder.com/250x500/1a1a2e/FFFFFF?text=App+Screenshot';
                    }}
                  />
                </Box>
              </Box>
            </Flex>
          </Box>

        {/* ============================================ */}
        {/* HEADING SECTION */}
        {/* ============================================ */}
        <VStack
          gap={{ base: 3, md: 4 }}
          mb={{ base: 8, md: 10 }}
          data-aos="fade-down"
        >
          <Heading
            as="h1"
            fontSize="30"
            fontWeight="extrabold"
            textAlign="center"
            letterSpacing="-0.02em"
            color="blue.900"
          >
           Financial Products Eligibility
          </Heading>

          <Text
            fontSize={subTextSize}
            color="blue.800"
            textAlign="center"
            maxW="2xl"
          >
            Check eligibility criteria and documents required for various financial products
          </Text>
        </VStack>

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
          {tabs.map((item, index) => {
            const isActive = activeLoan === item.key;
            const color = loanData[item.key as keyof typeof loanData].color;
            return (
              <Button
                key={item.key}
                onClick={() => setActiveLoan(item.key as keyof typeof loanData)}
                width={buttonWidth}
                height={{ base: "50px", md: "54px", lg: "58px" }}
                borderRadius="xl"
                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                fontWeight="bold"
                color={isActive ? "white" : "blue.700"}
                bg={isActive ? `${color}.500` : "white"}
                border={isActive ? "none" : "1px solid"}
                borderColor={isActive ? "transparent" : "blue.200"}
                _hover={{
                  bg: isActive ? `${color}.600` : "blue.50",
                  color: isActive ? "white" : "blue.900",
                  transform: "translateY(-4px) scale(1.02)",
                  boxShadow: isActive ? `0 12px 35px rgba(59, 130, 246, 0.3)` : "0 8px 25px rgba(0,0,0,0.08)",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                boxShadow={isActive ? `0 12px 35px rgba(59, 130, 246, 0.3)` : "sm"}
                
              >
                <Text as="span" mr={1}>{item.emoji}</Text>
                {item.label}
              </Button>
            );
          })}
        </Flex>

        {/* ============================================ */}
        {/* CARDS */}
        {/* ============================================ */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 7, lg: 8 }}
          px={{ base: 0, md: 2 }}
          py={{ base: 2, md: 4 }}
          maxW="5xl"
          mx="auto"
          justify="center"
          align="stretch"
        >
          {/* Eligibility Card */}
          <Box
            key={`${activeLoan}-eligibility`}
            flex="1"
            maxW={{ base: "100%", md: "420px" }}
            minHeight={{ base: "320px", md: "400px" }}
            bg={currentData.gradient}
            borderRadius="3xl"
            boxShadow="0 20px 60px rgba(0,0,0,0.08)"
            border="1px solid"
            borderColor={`${currentData.color}.100`}
            p={cardPadding}
            transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "translateY(-12px) scale(1.02)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={() => setHoveredCard("eligibility")}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-right"
            data-aos-duration="800"
            position="relative"
            overflow="hidden"
          >
            {/* Glow Effect */}
            <Box
              position="absolute"
              top={-50}
              right={-50}
              width={200}
              height={200}
              borderRadius="full"
              bg={`${currentData.color}.300`}
              opacity={0.3}
              filter="blur(60px)"
            />

            <Flex align="center" gap={3} mb={{ base: 5, md: 6 }}>
              <Box
                bg={currentData.bgGradient}
                borderRadius="full"
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow={`0 8px 25px rgba(0, 0, 0, 0.15)`}
              >
                <Icon as={CheckCircle} w={6} h={6} color="white" />
              </Box>
              <VStack align="start" gap={0}>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color={`${currentData.color}.900`}
                >
                  Eligibility Criteria
                </Heading>
                <Badge colorScheme={currentData.color} fontSize="xs" px={2} py={0.5} borderRadius="full">
                  <HStack gap={1}>
                    <TrendingUp size={12} />
                    <Text>5 Criteria</Text>
                  </HStack>
                </Badge>
              </VStack>
            </Flex>

            <VStack gap={{ base: 3, md: 3.5 }} align="flex-start" width="100%">
              {currentData.eligibility.map((item, index) => (
                <HStack
                  key={index}
                  gap={2.5}
                  width="100%"
                  align="start"
                  bg={hoveredCard === "eligibility" ? "rgba(255,255,255,0.6)" : "transparent"}
                  p={2}
                  borderRadius="lg"
                  transition="all 0.3s ease"
                  _hover={{ bg: "rgba(255,255,255,0.8)", transform: "translateX(4px)" }}
                >
                  <Box
                    minW="20px"
                    mt={0.5}
                    color={`${currentData.color}.600`}
                  >
                    <CheckCircle size={16} />
                  </Box>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color={`${currentData.color}.900`}
                    lineHeight="1.6"
                    fontWeight={index === 0 ? "bold" : "medium"}
                  >
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Documents Card */}
          <Box
            key={`${activeLoan}-documents`}
            flex="1"
            maxW={{ base: "100%", md: "420px" }}
            minHeight={{ base: "320px", md: "400px" }}
            bg={currentData.gradient}
            borderRadius="3xl"
            boxShadow="0 20px 60px rgba(0,0,0,0.08)"
            border="1px solid"
            borderColor={`${currentData.color}.100`}
            p={cardPadding}
            transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{
              transform: "translateY(-12px) scale(1.02)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
            }}
            onMouseEnter={() => setHoveredCard("documents")}
            onMouseLeave={() => setHoveredCard(null)}
            data-aos="fade-left"
            data-aos-duration="800"
            position="relative"
            overflow="hidden"
          >
            {/* Glow Effect */}
            <Box
              position="absolute"
              bottom={-50}
              left={-50}
              width={200}
              height={200}
              borderRadius="full"
              bg={`${currentData.color}.300`}
              opacity={0.3}
              filter="blur(60px)"
            />

            <Flex align="center" gap={3} mb={{ base: 5, md: 6 }}>
              <Box
                bg={currentData.bgGradient}
                borderRadius="full"
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow={`0 8px 25px rgba(0, 0, 0, 0.15)`}
              >
                <Icon as={FileText} w={6} h={6} color="white" />
              </Box>
              <VStack align="start" gap={0}>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color={`${currentData.color}.900`}
                >
                  Documents Required
                </Heading>
                <Badge colorScheme={currentData.color} fontSize="xs" px={2} py={0.5} borderRadius="full">
                  <HStack gap={1}>
                    <FileText size={12} />
                    <Text>{currentData.documents.length} Documents</Text>
                  </HStack>
                </Badge>
              </VStack>
            </Flex>

            <VStack gap={{ base: 3, md: 3.5 }} align="flex-start" width="100%">
              {currentData.documents.map((item, index) => (
                <HStack
                  key={index}
                  gap={2.5}
                  width="100%"
                  align="start"
                  bg={hoveredCard === "documents" ? "rgba(255,255,255,0.6)" : "transparent"}
                  p={2}
                  borderRadius="lg"
                  transition="all 0.3s ease"
                  _hover={{ bg: "rgba(255,255,255,0.8)", transform: "translateX(4px)" }}
                >
                  <Box
                    minW="20px"
                    mt={0.5}
                    color={`${currentData.color}.600`}
                  >
                    <FileText size={16} />
                  </Box>
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color={`${currentData.color}.900`}
                    lineHeight="1.6"
                  >
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </Flex>

        {/* ============================================ */}
        {/* CTA BUTTON */}
        {/* ============================================ */}
        <Flex justify="center" mt={{ base: 8, md: 10 }} data-aos="fade-up">
          <Button
            onClick={() => window.location.href = "/quickLinks"}
            bg="linear-gradient(135deg, #3b82f6, #2563eb)"
            color="white"
            size="lg"
            px={{ base: 10, md: 14 }}
            py={{ base: 7, md: 8 }}
            borderRadius="xl"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold"
            _hover={{
              transform: "translateY(-4px) scale(1.03)",
              boxShadow: "0 20px 50px rgba(59, 130, 246, 0.4)",
            }}
            _active={{
              transform: "scale(0.97)",
            }}
            transition="all 0.3s ease"
            boxShadow="0 12px 35px rgba(59, 130, 246, 0.3)"
          >
            <HStack gap={2}>
              <Wallet size={20} />
              <Text> APPLY NOW</Text>
            </HStack>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}