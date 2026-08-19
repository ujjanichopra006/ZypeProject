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
  VStack,
  Icon,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";

export default function Third() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <Box bg="blue.50" py={{ base: 10, md: 16 }} position="relative" overflow="hidden">
      {/* Decorative Background Blob */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        bg="blue.200"
        borderRadius="full"
        filter="blur(80px)"
        opacity={0.4}
        zIndex={0}
        pointerEvents="none"
      />

      <Container maxW="1270px" position="relative" zIndex={1}>

        {/* ========== HEADING SECTION ========== */}
        <VStack gap={3} textAlign="center" mb={{ base: 12, md: 16 }} data-aos="fade-up">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            color="blue.700"
          >
            Our Certifications
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="blue.800"
            maxW="600px"
            lineHeight="tall"
            opacity={0.9}
          >
            Trusted and certified by recognized authorities to deliver excellence
          </Text>
        </VStack>

        {/* ========== CARDS SECTION ========== */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 6, lg: 4 }}
          justifyContent="center"
          alignItems="stretch"
          px={{ base: 1, md: 2}}
        >
          {/* MSME Card */}
          <CertificationCard
            title="MSME Registered"
            description="Officially recognized by the Ministry of Micro, Small & Medium Enterprises, Government of India under the Udyam Registration scheme."
            logoSrc="https://5.imimg.com/data5/JK/ND/MY-20716531/msme-logo.png"
            points={["Udyam Registration Number", "Government Verified"]} colorScheme={""}            
          />

          {/* ISO Card */}
          <CertificationCard
            title="ISO 27001 Certified"
            description="Internationally recognized information security management system certification ensuring consistent delivery of high-quality products and services."
            logoSrc="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png"
            points={["Quality Management System", "International Standards"]} colorScheme={""}          
          />
        </Flex>
      </Container>
    </Box>
  );
}

// Reusable Premium Card Component
interface CertificationCardProps {
  title: string;
  description: string;
  logoSrc: string;
  points: string[];
  colorScheme: string;
  aosDelay?: number;
}

const CertificationCard = ({
  title,
  description,
  logoSrc,
  points,
  colorScheme,
  aosDelay,
}: CertificationCardProps) => {
  const isGreen = colorScheme === "green";
  const borderColor = isGreen ? "green.100" : "blue.100";
  const hoverBorderColor = isGreen ? "green.300" : "blue.300";
  const headingColor = isGreen ? "green.700" : "blue.700";
  const iconColor = isGreen ? "green.500" : "blue.500";
  const hoverShadow = isGreen
    ? "0 20px 50px -10px rgba(16, 185, 129, 0.25)"
    : "0 20px 50px -10px rgba(59, 130, 246, 0.25)";
  const badgeBorder = isGreen ? "#f0fff4" : "#ebf8ff";
  const dividerGradient = isGreen
    ? "linear(to-r, green.400, transparent)"
    : "linear(to-r, blue.400, transparent)";

  return (
    <Box
      flex="1"
      maxW={{ base: "100%", lg: "500px" }}
      position="relative"
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(10px)"
      borderRadius="24px"
      p={8}
      pt={14}
      border="1px solid"
      borderColor={borderColor}
      boxShadow="0 10px 40px -10px rgba(0,0,0,0.06)"
      transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      _hover={{
        transform: "translateY(-12px)",
        boxShadow: hoverShadow,
        borderColor: hoverBorderColor,
      }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Floating Logo Badge */}
      <Box
        position="absolute"
        top="-35px"
        left="50%"
        transform="translateX(-50%)"
        w="90px"
        h="90px"
        bg="white"
        borderRadius="full"
        boxShadow="0 8px 30px rgba(0,0,0,0.12)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="4px solid"
        borderColor={badgeBorder}
        zIndex={2}
      >
        <Image
          src={logoSrc}
          alt={title}
          boxSize="60px"
          objectFit="contain"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
          }}
        />
      </Box>

      {/* Content */}
      <VStack gap={4} align="center" textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color={headingColor}
          mt={2}
        >
          {title}
        </Heading>

        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.600"
          lineHeight="relaxed"
          px={0}
        >
          {description}
        </Text>

        {/* Gradient Divider */}
        <Box
          w="50px"
          h="3px"
          bgGradient={dividerGradient}
          borderRadius="full"
          my={0}
          mt={-6}
        />

        {/* Feature Points */}
        <VStack gap={3} align="center" w="full" pt={1}>
          {points.map((point: string, idx: number) => (
            <Flex key={idx} align="center" gap={1} justify="center">
              <CheckCircle
                size={20}
                color={"green"}
              />
              <Text fontSize="sm" fontWeight="medium" color="blue.700">
                {point}
              </Text>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};