"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BriefcaseBusiness, Rocket } from "lucide-react";
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
} from "@chakra-ui/react";

export default function Seventh() {
  const [activeTab, setActiveTab] = useState("professional");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" });
  const subTextSize = useBreakpointValue({ base: "xs", md: "sm" });
  const cardTitleSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const cardTextSize = useBreakpointValue({ base: "xs", md: "sm" });
  const imageHeight = useBreakpointValue({ base: "180px", md: "240px", lg: "300px" });
  
  const buttonHeight = useBreakpointValue({ base: "34px", md: "38px" });
  const buttonFontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const buttonPadding = useBreakpointValue({ base: "10px 14px", md: "14px 20px" });

  const professionalData = {
    title: "Quick Loans for Professionals",
    description:
      "As a working professional, managing personal expenses, home renovations, or urgent financial needs can be challenging. mPokket provides quick loan disbursements with fast approvals, flexible repayment options, and competitive interest rates.",
    image: "/loan Professionals.avif",
  };

  const selfEmployedData = {
    title: "Quick Loans for Self Employed",
    description:
      "Our loans are designed for freelancers, entrepreneurs, and business owners. Get working capital, manage cash flow, or meet personal needs with quick approvals, low interest rates, and flexible repayment plans.",
    image: "/self employe.jpg",
  };

  const data = activeTab === "professional" ? professionalData : selfEmployedData;

  return (
    <Box bg="#111525" py={{ base: 0, md: 0, lg: 0 }} px={{ base: 0, md: 0, lg: 0 }} overflow="hidden">
      {/* ✅ Container width - Balance (700px se 800px) */}
      <Container maxW="800px" px={{ base:0, md: 0, lg: 0 }}>
        
        {/* ============================================ */}
        {/* HEADING */}
        {/* ============================================ */}
        <Box
          textAlign="center"
          mb={{ base: 4, md: 5, lg: 6 }}
          pt={{ base: 0, md: 0, lg: 0 }} // ✅ Upar ki padding 0
          data-aos="fade-down"
        >
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="bold"
            color="white"
          >
            Tailored Loan Solutions
          </Heading>

          <Text
            fontSize={subTextSize}
            color="gray.300"
            mt={1}
          >
            Financial support designed for your unique needs
          </Text>
        </Box>

        {/* ============================================ */}
        {/* TABS */}
        {/* ============================================ */}
        <Box
          display="flex"
          justifyContent="center"
          mb={{ base: 4, md: 5, lg: 6 }}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <Box
            bg="white"
            borderRadius="full"
            p={1}
            display="flex"
            width="100%"
            maxW="380px"
            boxShadow="md"
          >
            <Button
              onClick={() => setActiveTab("professional")}
              flex="1"
              height={buttonHeight}
              fontSize={buttonFontSize}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1.5}
              transition="all 0.3s ease"
              bg={activeTab === "professional" ? "blue.600" : "transparent"}
              color={activeTab === "professional" ? "white" : "gray.700"}
              _hover={{
                bg: activeTab === "professional" ? "blue.700" : "gray.100",
              }}
            >
              <BriefcaseBusiness size={14} />
              Working Professionals
            </Button>

            <Button
              onClick={() => setActiveTab("self")}
              flex="1"
              height={buttonHeight}
              fontSize={buttonFontSize}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1.5}
              transition="all 0.3s ease"
              bg={activeTab === "self" ? "blue.600" : "transparent"}
              color={activeTab === "self" ? "white" : "gray.700"}
              _hover={{
                bg: activeTab === "self" ? "blue.700" : "gray.100",
              }}
            >
              <Rocket size={14} />
              Self Employed
            </Button>
          </Box>
        </Box>

        {/* ============================================ */}
        {/* CARD - Balanced Width */}
        {/* ============================================ */}
        <Box
          key={activeTab}
          bg="white"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="0 20px 60px rgba(0,0,0,0.15)"
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* ========== LEFT SIDE ========== */}
          <Box
            p={{ base: 4, md: 5, lg: 6 }}
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <Heading
              as="h3"
              fontSize={cardTitleSize}
              fontWeight="bold"
              color="#0A2342"
              mb={{ base: 2, md: 3 }}
            >
              {data.title}
            </Heading>

            <Text
              fontSize={cardTextSize}
              color="gray.600"
              lineHeight="1.8"
            >
              {data.description}
            </Text>

            {/* Buttons */}
            <HStack gap={2} mt={{ base: 3, md: 4 }}>
              <Button
                onClick={() => router.push("/quickLinks")}
                bg="blue.600"
                color="white"
                height={buttonHeight}
                px={buttonPadding}
                fontSize={buttonFontSize}
                fontWeight="medium"
                borderRadius="md"
                _hover={{
                  bg: "blue.700",
                  transform: "scale(1.05)",
                }}
                transition="all 0.2s ease"
              >
                Apply Now
              </Button>

              <Button
                onClick={() => router.push("/quickLinks")}
                variant="outline"
                borderColor="blue.600"
                color="blue.600"
                height={buttonHeight}
                px={buttonPadding}
                fontSize={buttonFontSize}
                fontWeight="medium"
                borderRadius="md"
                _hover={{
                  bg: "blue.50",
                  transform: "scale(1.05)",
                }}
                transition="all 0.2s ease"
              >
                Learn More
              </Button>
            </HStack>

            {/* Benefits */}
            <Box
              borderTop="1px solid"
              borderColor="gray.200"
              mt={{ base: 4, md: 5 }}
              pt={{ base: 3, md: 4 }}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Heading
                as="h4"
                fontSize={{ base: "sm", md: "base" }}
                fontWeight="bold"
                color="black"
                mb={2}
              >
                Key Benefits
              </Heading>

              <SimpleGrid columns={2} gap={{ base: 1, md: 2 }}>
                <Text fontSize={{ base: "2xs", md: "xs" }} color="black">
                  ✓ Quick Approval
                </Text>
                <Text fontSize={{ base: "2xs", md: "xs" }} color="black">
                  ✓ Low Interest Rates
                </Text>
                <Text fontSize={{ base: "2xs", md: "xs" }} color="black">
                  ✓ Flexible Repayment
                </Text>
                <Text fontSize={{ base: "2xs", md: "xs" }} color="black">
                  ✓ Minimal Documentation
                </Text>
              </SimpleGrid>
            </Box>
          </Box>

          {/* ========== RIGHT SIDE ========== */}
          <Box
            position="relative"
            minHeight={imageHeight}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
              onError={(e: any) => {
                e.target.style.display = "none";
              }}
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              height="40%"
              bgGradient="linear(to-t, rgba(0,0,0,0.3), transparent)"
              display={{ base: "block", md: "none" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}