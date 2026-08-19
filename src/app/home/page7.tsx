"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Briefcase, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  useBreakpointValue,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";

export default function Seventh() {
  const [activeTab, setActiveTab] = useState<"professional" | "self">("professional");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  // Responsive values - EXTRA COMPACT SIZES
  const headingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const subTextSize = useBreakpointValue({ base: "xs", md: "xs", lg: "sm" });
  const cardTitleSize = useBreakpointValue({ base: "md", md: "lg" });
  const cardTextSize = useBreakpointValue({ base: "xs", md: "xs" });
  const imageHeight = useBreakpointValue({ base: "180px", md: "260px", lg: "300px" });
  const containerMaxW = useBreakpointValue({ base: "100%", md: "750px", lg: "850px" });

  const loanData = {
    professional: {
      title: "Quick Loans for Professionals",
      description:
        "As a working professional, managing personal expenses, home renovations, or urgent financial needs can be challenging. mPokket provides quick loan disbursements to help professionals cover a wide range of expenses, including medical bills, household renovations, or even a financial cushion in case of emergencies. With competitive interest rates, fast approvals, and flexible repayment options, we ensure that your financial needs are met in a timely and hassle-free manner.",
      image: "/loan Professionals.avif",
      benefits: [
        "Quick Approval",
        "Low Interest Rates",
        "Flexible Repayment",
        "Minimal Documentation",
      ],
    },
    self: {
      title: "Loans for Self-Employed",
      description:
        "Tailored financing solutions for business growth, working capital, and personal needs. Get instant financial support with minimal documentation and competitive rates designed for entrepreneurs and freelancers.",
      image: "/self employe.jpg",
      benefits: [
        "Quick Processing",
        "Competitive Rates",
        "Flexible Repayment",
        "Simplified Docs",
      ],
    },
  };

  const currentData = loanData[activeTab];

  return (
    <Box bg="blue.50" py={{ base: 4, md: 6 }} overflow="hidden">
      <Container maxW={containerMaxW} px={{ base: 4, md: 6 }}>
        
        {/* Header Section */}
        <VStack gap={1} mb={4} data-aos="fade-down">
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="bold"
            color="gray.900"
            textAlign="center"
          >
            Tailored Loan Solutions
          </Heading>
          <Text fontSize={subTextSize} color="gray.500" textAlign="center">
            Financial support designed for your unique needs
          </Text>
        </VStack>

        {/* Tabs Section */}
        <Box display="flex" justifyContent="center" mb={4} data-aos="zoom-in">
          <Flex
            bg="gray.100"
            borderRadius="full"
            p={1}
            width="100%"
            maxW="360px"
            gap={1}
          >
            <Button
              onClick={() => setActiveTab("professional")}
              flex="1"
              size="xs"
              borderRadius="full"
              py={4}
              bg={activeTab === "professional" ? "white" : "transparent"}
              color={activeTab === "professional" ? "teal.600" : "gray.600"}
              _hover={{ bg: activeTab === "professional" ? "white" : "gray.200" }}
              boxShadow={activeTab === "professional" ? "sm" : "none"}
              transition="all 0.2s"
              fontWeight="semibold"
              fontSize="xs"
            >
              Working Professionals
            </Button>

            <Button
              onClick={() => setActiveTab("self")}
              flex="1"
              size="xs"
              borderRadius="full"
              py={4}
              bg={activeTab === "self" ? "white" : "transparent"}
              color={activeTab === "self" ? "teal.600" : "gray.600"}
              _hover={{ bg: activeTab === "self" ? "white" : "gray.200" }}
              boxShadow={activeTab === "self" ? "sm" : "none"}
              transition="all 0.2s"
              fontWeight="semibold"
              fontSize="xs"
            >
              Self Employed
            </Button>
          </Flex>
        </Box>

        {/* Main Card */}
        <Box
          key={activeTab}
          bg="white"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="0 8px 30px rgba(0, 0, 0, 0.05)"
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          data-aos="fade-up"
          minH={{ base: "auto", md: "300px" }}
        >
          {/* Left - Content */}
          <Box p={{ base: 4, md: 6, lg: 7 }} display="flex" flexDirection="column" justifyContent="center">
            <VStack align="start" gap={3} w="full">
              
              {/* Title with Icon */}
              <HStack gap={2}>
                <Box bg="gray.100" p={1} borderRadius="md">
                   <Briefcase size={14} color="#8B4513" />
                </Box>
                <Heading as="h3" fontSize={cardTitleSize} fontWeight="bold" color="gray.900">
                  {currentData.title}
                </Heading>
              </HStack>

              {/* Description */}
              <Text fontSize={cardTextSize} color="gray.600" lineHeight="1.6">
                {currentData.description}
              </Text>

              {/* Divider */}
              <Box w="full" h="1px" bg="gray.100" />

              {/* Key Benefits Section */}
              <VStack align="start" gap={2} w="full">
                <Text fontWeight="bold" color="gray.900" fontSize="xs">
                  Key Benefits:
                </Text>
                
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={2} w="full">
                  {currentData.benefits.map((benefit, index) => (
                    <HStack key={index} gap={1.5} align="center">
                      <Check size={12} color="green.500" strokeWidth={3} />
                      <Text fontSize="xs" color="gray.600" fontWeight="medium">
                        {benefit}
                      </Text>
                    </HStack>
                  ))}
                </SimpleGrid>
              </VStack>

            </VStack>
          </Box>

          {/* Right - Image */}
          <Box position="relative" minHeight={imageHeight} w="full" h="full">
            <Image
              src={currentData.image}
              alt={currentData.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}