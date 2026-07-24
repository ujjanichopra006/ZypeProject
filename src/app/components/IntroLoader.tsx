"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Circle,
  Container,
  Spinner,
} from "@chakra-ui/react";
import RobotAnimation from "../../animations/Robot.json";

export default function IntroLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const bgColor = "#111525";
  const textColor = "gray.100";
  const headingGradient = "linear(to-r, blue.400, cyan.300, blue.500)";
  const dotColor = "cyan.400";
  const subtitleColor = "gray.500";

  if (loading && isMounted) {
    return (
      <Box
        position="fixed"
        top="60px"
        left="0"
        right="0"
        bottom="0"
        zIndex="9999"
        bg={bgColor}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        transition="all 0.3s ease"
      >
        <Container maxW="container.md" centerContent>
          <VStack gap={2} align="center" width="100%">
            {/* Lottie Animation Container */}
            <Box
              width={{ base: "200px", md: "300px" }}
              height={{ base: "200px", md: "300px" }}
              position="relative"
            >
              <Lottie
                animationData={RobotAnimation}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />

              {/* Decorative ring */}
              <Circle
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                size={{ base: "220px", md: "320px" }}
                border="2px"
                borderColor="blue.200"
                opacity="0.2"
                borderRadius="full"
              />
            </Box>

            {/* Content */}
            <VStack gap={4} align="center" width="100%">
              {/* Main Heading with Gradient */}
              <Box position="relative" textAlign="center">
                <Heading
                  as="h1"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  bgGradient={headingGradient}
                  bgClip="text"
                >
                  Empowering Financial Freedom
                </Heading>

                {/* Decorative underline */}
                <Box
                  width="80px"
                  height="3px"
                  bgGradient="linear(to-r, blue.500, cyan.400, blue.500)"
                  borderRadius="full"
                  mx="auto"
                  mt={3}
                />
              </Box>

              {/* Description */}
              <Text
                color={textColor}
                fontSize={{ base: "sm", md: "md" }}
                maxW="lg"
                textAlign="center"
              >
                Discover personalized loan solutions designed around your goals.
                Quick approvals, transparent processes, and complete peace of mind.
              </Text>

              {/* Loading Indicator */}
              <Flex align="center" justify="center" gap={2} mt={2}>
                <Circle
                  size="8px"
                  bg={dotColor}
                />
                <Text
                  color={subtitleColor}
                  fontSize={{ base: "xs", md: "sm" }}
                  letterSpacing="wide"
                  fontWeight="medium"
                >
                  Preparing your experience...
                </Text>
                <Spinner
                  size="xs"
                  color={dotColor}
                />
              </Flex>

              {/* Progress dots */}
              <Flex gap={2} mt={4}>
                {[0, 1, 2, 3].map((index) => (
                  <Circle
                    key={index}
                    size="6px"
                    bg={index === 0 ? "blue.400" : "gray.300"}
                    opacity={index === 0 ? 1 : 0.3}
                    transition="all 0.3s ease"
                  />
                ))}
              </Flex>
            </VStack>
          </VStack>
        </Container>
      </Box>
    );
  }

  return <>{children}</>;
}
