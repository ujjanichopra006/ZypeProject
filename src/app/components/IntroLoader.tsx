"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  Container,
} from "@chakra-ui/react";

// Confetti Particle Component - Enhanced
const ConfettiParticle = ({ delay, left, color, size, duration, shape }: any) => (
  <motion.div
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{
      y: 1500,
      opacity: [0, 1, 1, 0],
      rotate: [0, 360],
      x: [0, Math.sin(delay * 8) * 60, -Math.sin(delay * 8) * 30, 0],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      left: `${left}%`,
      top: "-20px",
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      borderRadius: shape === "circle" ? "50%" : "2px",
      zIndex: 1,
      pointerEvents: "none",
    }}
  />
);

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/India.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Confetti generation
  const confettiParticles = useMemo(() => {
    const confettiColors = ["#FF9933", "#FFFFFF", "#138808", "#000080", "#FFD700"];
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: (i % 15) * 0.25,
      left: (i * 7) % 100,
      color: confettiColors[i % confettiColors.length],
      size: 5 + (i % 6),
      duration: 4 + (i % 4),
      shape: i % 2 === 0 ? "circle" : "square",
    }));
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Box
            position="fixed"
            top={{ base: "70px", md: "80px" }}
            left="0"
            right="0"
            bottom="0"
            zIndex="999"
            bg="linear-gradient(180deg, #E8EAF0 0%, #F5F7FA 100%)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
          >
            {/* Confetti Background */}
            {confettiParticles.map((particle) => (
              <ConfettiParticle
                key={particle.id}
                delay={particle.delay}
                left={particle.left}
                color={particle.color}
                size={particle.size}
                duration={particle.duration}
                shape={particle.shape}
              />
            ))}

            {/* Main Content - No Scroll */}
            <Container
              maxW="container.lg"
              centerContent
              position="relative"
              zIndex={10}
              p={0}
              m={0}
            >
              <VStack
                gap={{ base: 4, sm: 5, md: 6 }}
                align="center"
                justify="center"
                width="100%"
                height="100%"
                py={0}
                px={4}
              >
                {/* 🇮🇳 India Lottie Animation - HORIZONTAL FORMAT */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: -20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 15 }}
                  style={{ width: "100%", maxWidth: "600px" }}
                >
                  <Box
                    width="100%"
                    height={{ base: "140px", sm: "180px", md: "220px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    mx="auto"
                  >
                    {animationData ? (
                      <motion.div
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Lottie
                          animationData={animationData}
                          loop={true}
                          style={{ 
                            width: "100%", 
                            height: "100%",
                            objectFit: "contain"
                          }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{
                          rotate: [0, 2, -2, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <Box
                          width="100%"
                          height="100%"
                          bg="white"
                          borderRadius="2xl"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                          color="black"
                          fontWeight="black"
                          boxShadow="lg"
                          letterSpacing="wide"
                        >
                          🇮🇳 INDIA
                        </Box>
                      </motion.div>
                    )}
                  </Box>
                </motion.div>

                {/* Main Heading - Tighter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Heading
                    as="h1"
                    fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
                    fontWeight="black"
                    color="#1a1a1a"
                    textAlign="center"
                    lineHeight="1.2"
                    px={2}
                    mx="auto"
                    maxW="100%"
                  >
                    Celebrating Financial Freedom
                  </Heading>
                </motion.div>

                {/* Description - Compact */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Text
                    color="#4a5568"
                    fontSize={{ base: "xs", sm: "sm", md: "md" }}
                    maxW="lg"
                    textAlign="center"
                    fontWeight="medium"
                    lineHeight="1.5"
                    px={3}
                    mx="auto"
                  >
                    Empowering your dreams with independence. Thank you for choosing{" "}
                    <Text as="span" color="#FF9933" fontWeight="bold">
                      KeshvaCredit
                    </Text>{" "}
                    as your trusted partner for financial growth and liberty. 🥳✨
                  </Text>
                </motion.div>

                {/* Loading Indicator - Compact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Flex
                    align="center"
                    justify="center"
                    gap={2}
                    mt={1}
                    flexWrap="nowrap"
                    px={3}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    >
                      <Box w="6px" h="6px" bg="#FF9933" borderRadius="full" />
                    </motion.div>
                    <Text
                      color="#718096"
                      fontSize={{ base: "xs", sm: "sm" }}
                      letterSpacing="wide"
                      fontWeight="medium"
                      textAlign="center"
                      whiteSpace="nowrap"
                    >
                      Preparing your celebration...
                    </Text>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Box
                        w="14px"
                        h="14px"
                        border="2px solid #FF9933"
                        borderTopColor="transparent"
                        borderRadius="full"
                      />
                    </motion.div>
                  </Flex>
                </motion.div>

                {/* Progress dots - Smaller */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Flex gap={2} mt={2} justify="center">
                    {[0, 1, 2, 3].map((index) => (
                      <motion.div
                        key={index}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          repeat: Infinity,
                        }}
                      >
                        <Box
                          w="6px"
                          h="6px"
                          bg={index === 0 ? "#FF9933" : "#CBD5E0"}
                          borderRadius="full"
                        />
                      </motion.div>
                    ))}
                  </Flex>
                </motion.div>
              </VStack>
            </Container>
          </Box>
        </motion.div>
      </AnimatePresence>
    );
  }

  return <>{children}</>;
}