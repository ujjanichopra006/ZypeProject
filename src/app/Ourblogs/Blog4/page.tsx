"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Flex,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";

// ⚠️ Apni JSON file ka sahi path yahan do
import cyberAnimation from "../../../animations/Networking flow.json";

const topics = [
  {
    title: "What is Cyber Crime?",
    content:
      "Cyber crime includes illegal activities performed through computers, smartphones, or the internet. It covers hacking, phishing, identity theft, malware attacks, data theft, and online financial fraud.",
  },
  {
    title: "Beware of Phishing Scams",
    content:
      "Fake emails, SMS messages, WhatsApp texts, and websites are often designed to steal your passwords, OTPs, and banking information. Always verify links before clicking.",
  },
  {
    title: "Create Strong Passwords",
    content:
      "Use a unique password for every account with a mix of letters, numbers, and symbols. Enable Two-Factor Authentication (2FA) whenever available.",
  },
  {
    title: "Stay Safe During Online Payments",
    content:
      "Never share your OTP, UPI PIN, ATM PIN, CVV, or internet banking password with anyone. Trusted banks never ask for these details over calls or messages.",
  },
  {
    title: "Identify Fake Websites & Apps",
    content:
      "Check the website URL carefully and make sure it starts with https://. Download apps only from official app stores and trusted developers.",
  },
  {
    title: "Protect Your Social Media Accounts",
    content:
      "Avoid oversharing personal information online. Accept friend requests only from people you know and regularly review your privacy settings.",
  },
  {
    title: "Keep Your Devices Updated",
    content:
      "Install software updates and use trusted antivirus protection. Security updates help protect your devices from newly discovered threats.",
  },
  {
    title: "What to Do If You Are Scammed",
    content:
      "Immediately change passwords, contact your bank, block compromised accounts, and report the incident to the appropriate cyber crime authorities.",
  },
];

export default function CyberSafetyBlog() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Box minH="100vh" bg="blue.50" py={20} mt={30} px={4} overflow="hidden">
      <Container maxW="6xl">
        {/* Main Card */}
        <Box
          rounded="3xl"
          border="1px"
          borderColor="blue.100"
          bg="white"
          overflow="hidden"
          boxShadow="0 25px 50px rgba(30, 64, 175, 0.1)"
        >
          {/* Hero Section */}
          <Box position="relative" px={{ base: 6, md: 10 }} py={12} borderBottom="1px" borderColor="blue.100">
            {/* Background Glow Effects */}
            <Box
              position="absolute"
              top="-20"
              right="-20"
              w="72"
              h="72"
              rounded="full"
              bg="cyan.100"
              filter="blur(48px)"
              opacity={0.6}
            />
            <Box
              position="absolute"
              bottom="-20"
              left="-20"
              w="72"
              h="72"
              rounded="full"
              bg="blue.100"
              filter="blur(48px)"
              opacity={0.6}
            />

            <Grid
              position="relative"
              zIndex={10}
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={10}
              alignItems="center"
            >
              {/* Left Content */}
              <Box data-aos="fade-right">
                <Badge
                  rounded="full"
                  border="1px"
                  borderColor="cyan.200"
                  bg="cyan.50"
                  px={4}
                  py={2}
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  color="cyan.700"
                >
                  Cyber Security Guide
                </Badge>

                <Heading
                  as="h1"
                  mt={6}
                  mb={4}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="black"
                  color="blue.900"
                >
                  Safety Awareness
                  <br />
                  <Text as="span" color="cyan.600">
                    about Cyber Crime
                  </Text>
                </Heading>

                <Text mt={6} color="blue.700" maxW="xl">
                  Learn how to stay safe from phishing, hacking, identity theft,
                  fake websites, online shopping scams, and digital payment
                  fraud with practical cybersecurity awareness.
                </Text>

                <HStack mt={8} gap={3} flexWrap="wrap">
                  <Badge
                    rounded="xl"
                    bg="blue.50"
                    border="1px"
                    borderColor="blue.200"
                    px={4}
                    py={2}
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.800"
                  >
                    📅 October 25, 2025
                  </Badge>
                  <Badge
                    rounded="xl"
                    bg="blue.50"
                    border="1px"
                    borderColor="blue.200"
                    px={4}
                    py={2}
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.800"
                  >
                    🛡️ Cyber Awareness
                  </Badge>
                  <Badge
                    rounded="xl"
                    bg="blue.50"
                    border="1px"
                    borderColor="blue.200"
                    px={4}
                    py={2}
                    fontSize="sm"
                    fontWeight="normal"
                    color="blue.800"
                  >
                    ⏱️ 5 Min Read
                  </Badge>
                </HStack>
              </Box>

              {/* Right Animation */}
              <Flex
                data-aos="zoom-in"
                data-aos-delay="300"
                justify="center"
                align="center"
              >
                <Box w="full" maxW="400px">
                  <Lottie animationData={cyberAnimation} loop />
                </Box>
              </Flex>
            </Grid>
          </Box>

          {/* Quote Section */}
          <Box
            data-aos="flip-up"
            mx={{ base: 6, md: 10 }}
            mt={10}
            rounded="3xl"
            borderLeft="4px"
            borderLeftColor="cyan.500"
            bg="cyan.50"
            p={6}
            border="1px solid"
            borderColor="cyan.100"
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              fontStyle="italic"
              color="blue.900"
            >
              "Cyber security is not just about technology — it is about making
              safe choices every time you go online."
            </Text>
          </Box>

          {/* Timeline Topics */}
          <Box px={{ base: 6, md: 10 }} py={12}>
            <Box position="relative" borderLeft="2px" borderColor="blue.200" ml={3}>
              {topics.map((topic, index) => (
                <Box
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  position="relative"
                  pl={10}
                  mb={8}
                >
                  {/* Timeline Dot */}
                  <Box
                    position="absolute"
                    left="-12px"
                    top={2}
                    w={5}
                    h={5}
                    rounded="full"
                    bg="cyan.500"
                    border="4px"
                    borderColor="white"
                    boxShadow="0 0 0 2px rgba(6, 182, 212, 0.3)"
                  />

                  {/* Topic Card */}
                  <Box
                    rounded="2xl"
                    border="1px"
                    borderColor="blue.100"
                    bg="blue.50"
                    p={6}
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-4px)",
                      borderColor: "cyan.300",
                      boxShadow: "0 15px 40px rgba(6, 182, 212, 0.1)",
                      bg: "white",
                    }}
                  >
                    <Text
                      fontSize="xs"
                      textTransform="uppercase"
                      letterSpacing="0.2em"
                      color="cyan.600"
                      fontWeight="semibold"
                    >
                      Topic {String(index + 1).padStart(2, "0")}
                    </Text>

                    <Heading as="h2" mt={2} fontSize="2xl" fontWeight="bold" color="blue.900">
                      {topic.title}
                    </Heading>

                    <Text mt={4} color="blue.700">
                      {topic.content}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Warning Box */}
            <Box
              data-aos="zoom-in-up"
              mt={12}
              rounded="3xl"
              border="1px"
              borderColor="red.200"
              bg="red.50"
              p={6}
            >
              <Heading as="h3" fontSize="2xl" fontWeight="bold" color="red.700" mb={3}>
                ⚠️ Important Warning
              </Heading>

              <Text color="red.900" fontWeight="medium">
                Never share your OTP, UPI PIN, CVV, ATM PIN, passwords, or
                banking details with anyone. Genuine banks and government
                agencies never ask for confidential information through phone
                calls, emails, or social media messages.
              </Text>
            </Box>

            {/* Safety Checklist */}
            <Box mt={14}>
              <Heading
                as="h2"
                data-aos="fade-up"
                fontSize="3xl"
                fontWeight="bold"
                color="blue.900"
                mb={6}
              >
                ✔ Quick Safety Checklist
              </Heading>

              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
                {[
                  "🔐 Use strong and unique passwords.",
                  "📲 Enable Two-Factor Authentication (2FA).",
                  "🚫 Never share OTP or UPI PIN.",
                  "🌐 Verify website URLs before logging in.",
                  "🛍️ Shop only from trusted platforms.",
                  "🛡️ Keep software and antivirus updated.",
                ].map((item, i) => (
                  <GridItem key={i}>
                    <Box
                      data-aos="zoom-in"
                      data-aos-delay={i * 100}
                      rounded="2xl"
                      border="1px"
                      borderColor="blue.100"
                      bg="white"
                      p={5}
                      color="blue.800"
                      fontWeight="medium"
                      transition="all 0.3s"
                      _hover={{
                        transform: "scale(1.03)",
                        bg: "cyan.50",
                        borderColor: "cyan.200",
                        boxShadow: "0 10px 30px rgba(6, 182, 212, 0.08)",
                      }}
                    >
                      {item}
                    </Box>
                  </GridItem>
                ))}
              </Grid>
            </Box>

            {/* Bottom Banner */}
            <Box
              data-aos="fade-up"
              mt={14}
              rounded="28px"
              bgGradient="linear(to-r, cyan.50, blue.50, cyan.50)"
              border="1px solid"
              borderColor="cyan.200"
              p={10}
              textAlign="center"
            >
              <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} fontWeight="black" color="blue.900">
                Think Before You Click.
              </Heading>

              <Text maxW="3xl" mx="auto" mt={5} color="blue.800" fontWeight="medium">
                A few seconds of verification can save you from identity theft,
                financial loss, and online fraud. Awareness and caution are your
                strongest digital defenses.
              </Text>
            </Box>

            {/* Disclaimer */}
            <Box mt={10} borderTop="1px" borderColor="blue.200" borderStyle="dashed" pt={6}>
              <Text textAlign="center" fontSize="sm" color="blue.600">
                <Text as="span" color="cyan.700" fontWeight="semibold">
                  Disclaimer:
                </Text>{" "}
                This article is intended for educational and awareness purposes
                only. Cyber threats evolve continuously, so always follow
                official security recommendations and report suspicious
                activities to the appropriate authorities.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}