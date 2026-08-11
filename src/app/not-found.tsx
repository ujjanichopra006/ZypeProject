"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function NotFound() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      minH="100vh"
      bg="#0B0F19" // Premium dark background
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={10}
      mt={10}
    >
      {/* --- Animated Background Orbs --- */}
      <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex={0} overflow="hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0) 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, -60, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)",
            filter: "blur(80px)",
          }}
        />
      </Box>

      {/* --- Main Content Container --- */}
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={{ base: 8, md: 16 }}
            p={{ base: 6, md: 10 }}
            borderRadius="40px"
            bg="rgba(255, 255, 255, 0.03)"
            backdropFilter="blur(24px)"
            border="1px solid rgba(255, 255, 255, 0.08)"
            boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            position="relative"
            overflow="hidden"
          >
            {/* Subtle top border shine */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="1px"
              bgGradient="linear(to-r, transparent, rgba(255,255,255,0.3), transparent)"
            />

            {/* --- Left Side: Attractive Image with Glow --- */}
            <Flex flex={1} justify="center" align="center" position="relative" w="full">
              {/* Glowing backdrop behind image */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ zIndex: 1, width: "100%", maxWidth: "400px" }}
              >
                <Box
                  borderRadius="30px"
                  overflow="hidden"
                  border="2px solid rgba(255, 255, 255, 0.1)"
                  boxShadow="0 20px 40px rgba(0, 0, 0, 0.4)"
                  position="relative"
                >
                  <Image
                    src="/404note-found.png" // <-- Apni image ka path yahan daalein
                    alt="Elegant 404 Illustration"
                    width={500}
                    height={600}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  {/* Image overlay gradient for text readability if needed */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    h="30%"
                    bgGradient="to-t"
                  />
                </Box>
              </motion.div>
            </Flex>

            {/* --- Right Side: Content --- */}
            <Flex flex={1} direction="column" align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }} w="full">
              {/* 404 Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Box
                  display="inline-block"
                  px={4}
                  py={1}
                  borderRadius="full"
                  bg="rgba(37, 99, 235, 0.15)"
                  border="1px solid rgba(37, 99, 235, 0.3)"
                  mb={3}
                >
                  <Text fontSize="sm" fontWeight="bold" color="#60A5FA" letterSpacing="wider">
                    ERROR 404
                  </Text>
                </Box>
              </motion.div>

              <Heading
                as="h2"
                size="xl"
                color="white"
                mb={4}
                fontWeight="700"
              >
                Oops! You've wandered off
              </Heading>

              <Text
                fontSize="sm"
                color="gray.100"
                maxW="450px"
                mb={8}
              >
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable. Let's get you back to safety.
              </Text>

              {/* Action Buttons */}
              <HStack gap={4} flexDirection={{ base: "column", sm: "row" }} w="full" justify={{ base: "center", md: "flex-start" }}>
                <Link href="/" passHref style={{ width: "100%", maxWidth: "200px" }}>
                  <Button
                    as="a"
                    w="full"
                    size="lg"
                    bgGradient="linear(to-r, #2563EB, #7C3AED)"
                    color="white"
                    _hover={{
                      bgGradient: "linear(to-r, #1D4ED8, #6D28D9)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.5)",
                    }}
                    transition="all 0.3s ease"
                    borderRadius="full"
                    px={8}
                    fontWeight="600"
                  >
                    Go to Home
                  </Button>
                </Link>
              </HStack>

              {/* Fun Footer */}
              <Text mt={10} fontSize="sm" color="gray.300" fontStyle="italic">
                Lost in the digital universe? We've got you. 🌌
              </Text>
            </Flex>
          </Flex>
        </motion.div>
      </Container>
    </Box>
  );
}