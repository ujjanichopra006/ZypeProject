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
  Badge,
  Flex,
  VStack,
  HStack,
  Grid,
  GridItem,
  Tag,
  TagLabel,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

// 📌 Replace this with your own animation file
import brainAnimation from "../../../animations/phone.json";

export default function PhoneBrainBlog() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const sections = [
    {
      title: "The Digital Age and Our Daily Lives",
      content:
        "Smartphones have become an essential part of modern life. From communication and education to entertainment and shopping, mobile apps help us stay connected and productive. However, constant connectivity also means our brains are exposed to an endless stream of information, notifications, and digital distractions throughout the day.",
    },
    {
      title: "How Notifications Capture Your Attention",
      content:
        "Every notification is designed to grab your attention immediately. Bright colors, sounds, vibrations, and badges trigger curiosity and encourage you to check your phone. Frequent interruptions can reduce focus and make it harder to concentrate on important tasks for long periods.",
    },
    {
      title: "The Science Behind the Reward System",
      content:
        "Many social media platforms and mobile apps are designed around reward-based experiences. Likes, comments, streaks, and achievements provide small moments of satisfaction that encourage repeated engagement. Over time, this can create habits where people instinctively check their phones even without receiving a notification.",
    },
    {
      title: "Impact on Focus and Productivity",
      content:
        "Switching between apps, messages, and notifications can interrupt deep thinking. Research suggests that frequent task-switching may reduce productivity and increase the time needed to complete work or study-related activities. Even a quick glance at a notification can break concentration.",
    },
    {
      title: "Effects on Sleep Quality",
      content:
        "Using smartphones late at night may affect sleep patterns. Bright screens and constant engagement can make it difficult for the mind to relax before bedtime. Reducing screen exposure and limiting notifications in the evening can help support healthier sleep habits.",
    },
    {
      title: "Social Media and Emotional Well-Being",
      content:
        "Social media allows people to connect and share experiences, but excessive use may also lead to comparison, information overload, and digital fatigue. Maintaining a balanced relationship with technology can contribute to a healthier online experience.",
    },
    {
      title: "Building Healthy Digital Habits",
      content:
        "Creating small boundaries can make a big difference. Turning off unnecessary notifications, setting app time limits, taking regular breaks, and scheduling screen-free moments during the day can help reduce distractions and improve overall well-being.",
    },
    {
      title: "Using Technology Mindfully",
      content:
        "Technology itself is not the problem—it is how we use it. Smartphones can be powerful tools for learning, communication, and creativity when used intentionally. Developing mindful digital habits allows us to enjoy the benefits of technology without letting it dominate our attention.",
    },
  ];

  const healthyHabits = [
    "📴 Turn off non-essential notifications.",
    "⏳ Set daily screen-time limits for social media apps.",
    "📚 Avoid checking your phone while studying or working.",
    "🌙 Reduce screen use 30–60 minutes before bedtime.",
    "🚶 Take short offline breaks during the day.",
    "👨‍👩‍👧 Spend quality time with family and friends without devices.",
  ];

  function useColorModeValue<T>(light: T, _dark: T): T {
    return light;
  }

  // Color mode values
  const bgColor = useColorModeValue("gray.50", "#0b1020");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const cardBg = useColorModeValue("white", "rgba(15, 23, 42, 0.9)");
  const borderColor = useColorModeValue("gray.200", "rgba(99, 102, 241, 0.1)");

  return (
    <Box minH="100vh" bg={"blue.50"} py={{ base: 5, md: 30 }} px={{ base: 4, md: 6 }} mt={20} >
      <Container maxW="6xl" mx="auto" mt="10">
        <Box
          overflow="hidden"
          borderRadius="32px"
          border="1px solid"
          borderColor={borderColor}
          bg={cardBg}
          backdropFilter="blur(12px)"
          shadow="2xl"
          position="relative"
        >
          {/* ================= HERO SECTION ================= */}
          <Box position="relative" px={{ base: 6, md: 10 }} py={{ base: 8, md: 12 }}>
            {/* Background Glow */}
            <Box
              position="absolute"
              top="-24"
              left="-20"
              h="80"
              w="80"
              borderRadius="full"
              bg="rgba(99, 102, 241, 0.1)"
              filter="blur(64px)"
              zIndex={0}
            />
            <Box
              position="absolute"
              bottom="-20"
              right="-16"
              h="80"
              w="80"
              borderRadius="full"
              bg="rgba(6, 182, 212, 0.1)"
              filter="blur(64px)"
              zIndex={0}
            />

            <Grid
              templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
              gap={10}
              alignItems="center"
              position="relative"
              zIndex={1}
            >
              {/* Left Content */}
              <Box data-aos="fade-right">
                <Badge
                  display="inline-flex"
                  alignItems="center"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="rgba(99, 102, 241, 0.2)"
                  bg="rgba(99, 102, 241, 0.1)"
                  px={4}
                  py={2}
                  fontSize="xs"
                  fontWeight="semibold"
                  letterSpacing="0.2em"
                  color="cyan.400"
                  textTransform="uppercase"
                >
                  📱 Digital Wellness Guide
                </Badge>

                <Heading
                  mt={6}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="black"
                  color="gray.700"
                >
                  How Your Phone
                  <br />
                  <Box as="span" color="indigo.400">
                    is Rewiring
                  </Box>
                  <br />
                  <Box as="span" color="cyan.400">
                    Your Brain
                  </Box>
                </Heading>

                <Text
                  mt={6}
                  maxW="xl"
                  fontSize="lg"
                  color="gray.800"
                >
                  Discover how mobile apps, notifications, and constant digital
                  interactions influence your attention, focus, sleep, and
                  everyday habits—and learn practical ways to build a healthier
                  relationship with technology.
                </Text>

                <HStack mt={8} gap={3} flexWrap="wrap">
                  <Tag.Root
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.1)"
                    bg="rgba(255,255,255,0.05)"
                    px={4}
                    py={2}
                    size="lg"
                  >
                    <TagLabel>📅 November 12, 2025</TagLabel>
                  </Tag.Root>

                  <Tag.Root
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.1)"
                    bg="rgba(255,255,255,0.05)"
                    px={4}
                    py={2}
                    size="lg"
                  >
                    <TagLabel>🧠 Mental Wellness</TagLabel>
                  </Tag.Root>

                  <Tag.Root
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.1)"
                    bg="rgba(255,255,255,0.05)"
                    px={4}
                    py={2}
                    size="lg"
                  >
                    <TagLabel>📱 Digital Lifestyle</TagLabel>
                  </Tag.Root>
                </HStack>
              </Box>

              {/* Right Animation */}
              <Flex
                data-aos="zoom-in"
                data-aos-delay="200"
                justify="center"
                align="center"
              >
                <Box
                  w={{ base: "190px", md: "280px" }}
                  h={{ base: "190px", md: "280px" }}
                  borderRadius="3xl"
                  border="1px solid"
                  borderColor="rgba(99, 102, 241, 0.2)"
                  bgGradient="linear(to-br, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))"
                  p={5}
                  transition="all 0.5s"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "0 0 35px rgba(99,102,241,0.2)",
                  }}
                >
                  <Lottie animationData={brainAnimation} loop={true} />
                </Box>
              </Flex>
            </Grid>
          </Box>

          {/* ================= INTRO CARD ================= */}
          <Box
            data-aos="fade-up"
            mx={{ base: 6, md: 10 }}
            borderRadius="3xl"
            border="1px solid"
            borderColor="rgba(99, 102, 241, 0.1)"
            bgGradient="linear(to-r, rgba(99, 102, 241, 0.05), rgba(30, 41, 59, 0.8), rgba(6, 182, 212, 0.05))"
            p={8}
          >
            <Heading as="h2" size="xl" color="black" mb={4}>
              Why Digital Awareness Matters
            </Heading>

            <Text color="gray.800">
              Smartphones have transformed the way we learn, work, and
              communicate. While these devices offer incredible convenience,
              constant notifications and endless scrolling can influence our
              attention patterns and daily routines. Understanding these effects
              can help us make more balanced and mindful technology choices.
            </Text>
          </Box>

          {/* ================= MAIN CONTENT ================= */}
          <Box px={{ base: 6, md: 10 }} py={{ base: 6, md: 12 }}>
            <VStack gap={4} align="stretch">
              {sections.map((section, index) => (
                <Box
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  borderRadius="3xl"
                  border="1px solid"
                  p={6}
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "rgba(99, 102, 241, 0.4)",
                    boxShadow: "0 0 30px rgba(99,102,241,0.15)",
                  }}
                >
                  <HStack gap={5} align="flex-start">
                    <Flex
                      h="48px"
                      w="48px"
                      flexShrink={0}
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="2xl"
                      border="1px solid"
                      borderColor="rgba(99, 102, 241, 0.2)"
                      bg="rgba(99, 102, 241, 0.1)"
                      color="rgba(165, 180, 252, 1)"
                      fontWeight="bold"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Flex>

                    <Box>
                      <Heading
                        as="h2"
                        size="lg"
                        color="black"
                        transition="color 0.3s"
                        _groupHover={{ color: "indigo.300" }}
                      >
                        {section.title}
                      </Heading>

                      <Text mt={4} color="black">
                        {section.content}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}
            </VStack>

            {/* ================= DIGITAL BALANCE BOX ================= */}
            <Box
              data-aos="zoom-in-up"
              mt={14}
              borderRadius="3xl"
              border="1px solid"
              borderColor="rgba(6, 182, 212, 0.2)"
              bg="rgba(6, 182, 212, 0.05)"
              p={8}
            >
              <Heading as="h2" size="xl" color="cyan.400" mb={4}>
                💡 The Goal Is Balance, Not Elimination
              </Heading>

              <Text color="gray.800">
                Smartphones and mobile apps are valuable tools that help us stay
                informed and connected. The objective is not to avoid technology
                completely, but to use it intentionally. Creating healthy
                boundaries allows you to enjoy the benefits of digital
                innovation while protecting your focus and well-being.
              </Text>
            </Box>

            {/* ================= HEALTHY HABITS ================= */}
            <Box mt={14}>
              <Heading
                as="h2"
                data-aos="fade-up"
                size="xl"
                color="cyan.400"
                mb={6}
              >
                ✔ Healthy Digital Habits
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
                {healthyHabits.map((habit, index) => (
                  <Box
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    borderRadius="2xl"
                    border="1px solid"
                    p={5}
                    transition="all 0.3s"
                    _hover={{
                      transform: "scale(1.03)",
                      bg: "rgba(99, 102, 241, 0.1)",
                    }}
                  >
                    {habit}
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* ================= CONCLUSION ================= */}
            <Box
              data-aos="fade-up"
              mt={16}
              borderRadius="28px"
              bgGradient="linear(to-r, rgba(99, 102, 241, 0.1), rgba(30, 41, 59, 0.8), rgba(6, 182, 212, 0.1))"
              p={10}
              textAlign="center"
            >
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="black"
                color="cyan.400"
              >
                Use Technology. Don't Let Technology Use You.
              </Heading>

              <Text
                maxW="3xl"
                mx="auto"
                mt={5}
                color="gray.700"
              >
                Small changes—such as limiting distractions, reducing screen
                time before bed, and taking regular offline breaks—can improve
                focus, support better sleep, and encourage healthier digital
                habits. Awareness is the first step toward building a more
                balanced relationship with your devices.
              </Text>
            </Box>

            {/* ================= DISCLAIMER ================= */}
            <Box
              mt={4}
              borderRadius="2xl"
              border="1px solid"
              p={5}
            >
              <Text fontSize="sm"color="black">
                <Box as="span" fontWeight="semibold">
                  Disclaimer:
                </Box>{" "}
                This article is intended for educational and informational
                purposes only. It provides general awareness about digital
                habits and technology use and should not be considered medical,
                psychological, or professional health advice.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}