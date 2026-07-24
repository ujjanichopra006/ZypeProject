"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaCoins } from "react-icons/fa";

export default function GoldLoan() {
  return (
    <Box
      minH="100vh"
      bgImage="url('/gold money.avif')"
      bgSize="cover"
      
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "blackAlpha.600",
        zIndex: 0,
      }}
    >
      <Box
        position="relative"
        zIndex={1}
        bg="blackAlpha.700"
        px={{ base: 6, md: 10 }}
        py={{ base: 6, md: 8 }}
        borderRadius="3xl"
        textAlign="center"
        backdropFilter="blur(20px)"
        border="2px"
        borderColor="yellow.400"
        boxShadow="0 0 40px rgba(255, 215, 0, 0.2)"
        maxW="2xl"
        w="full"
        mx={4}
      >
        <VStack gap={5}>
          {/* Gold Icon */}
          <Icon
            as={FaCoins}
            boxSize={{ base: 12, md: 16 }}
            color="yellow.400"
            animation="bounce 2s infinite"
          />

          <Text
            fontSize={{ base: "md", md: "2xl" }}
            color="whiteAlpha.900"
            fontWeight="medium"
          >
            Gold Loan Service is launching soon.
          </Text>

          <Box
            w="full"
            maxW="300px"
            h="3px"
            bg="whiteAlpha.200"
            borderRadius="full"
            mt={2}
          >
            <Box
              w="60%"
              h="full"
              bgGradient="linear(to-r, yellow.400, orange.500)"
              borderRadius="full"
              animation="pulse 2s infinite"
            />
          </Box>

          <Text
            fontSize="sm"
            color="yellow.300"
            fontWeight="bold"
          >
            ✦ Get ready to unlock the value of your gold ✦
          </Text>
        </VStack>
      </Box>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Box>
  );
}