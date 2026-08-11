"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";

function PersonalLoanCalculatorContent() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(5);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;

  const emi =
    amount > 0
      ? (amount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

  const totalPayment = emi * months;
  const totalInterest = totalPayment - amount;

  return (
    <Box
      minH="100vh"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 6 }}
      bgGradient="linear(to-br, #071739, #0B1F4D, #102A63)"
      mt={20}
    >
      <Container maxW="5xl" mx="auto" p={0}>
        <Box
          bg="white"
          borderRadius="32px"
          boxShadow="0 25px 80px rgba(0,0,0,0.35)"
          overflow="hidden"
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "45% 55%" }}
        >
          {/* LEFT SIDE */}
          <Box p={{ base: 6, lg: 8 }}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", lg: "4xl" }}
              fontWeight="extrabold"
              color="#071739"
              mb={2}
            >
              Personal Loan EMI Calculator
            </Heading>

            <Text color="gray.600" fontSize="sm" mb={6}>
              Calculate your monthly EMI instantly and plan your finances smartly.
            </Text>

            {/* Loan Amount */}
            <Box mb={6}>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="semibold" color="#071739">
                  Loan Amount
                </Text>
                <Text fontWeight="bold" color="#2563EB" fontSize="lg">
                  ₹ {amount.toLocaleString("en-IN")}
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() => setAmount(prev => Math.max(50000, prev - 10000))}
                  bg="#2563EB"
                  color="white"
                  _hover={{ bg: "#1D4ED8" }}
                  borderRadius="full"
                  px={6}
                >
                  −
                </Button>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  textAlign="center"
                  width="140px"
                  borderColor="gray.300"
                  _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 3px rgba(37,99,235,0.2)" }}
                  borderRadius="full"
                  fontWeight="semibold"
                />
                <Button
                  size="sm"
                  onClick={() => setAmount(prev => Math.min(5000000, prev + 10000))}
                  bg="#2563EB"
                  color="white"
                  _hover={{ bg: "#1D4ED8" }}
                  borderRadius="full"
                  px={6}
                >
                  +
                </Button>
              </HStack>
            </Box>

            {/* Interest Rate */}
            <Box mb={6}>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="semibold" color="#071739">
                  Interest Rate
                </Text>
                <Text fontWeight="bold" color="#2563EB" fontSize="lg">
                  {rate}%
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() => setRate(prev => Math.max(5, prev - 0.5))}
                  bg="#2563EB"
                  color="white"
                  _hover={{ bg: "#1D4ED8" }}
                  borderRadius="full"
                  px={6}
                >
                  −
                </Button>
                <Input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  textAlign="center"
                  width="140px"
                  borderColor="gray.300"
                  _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 3px rgba(37,99,235,0.2)" }}
                  borderRadius="full"
                  fontWeight="semibold"
                />
                <Button
                  size="sm"
                  onClick={() => setRate(prev => Math.min(30, prev + 0.5))}
                  bg="#2563EB"
                  color="white"
                  _hover={{ bg: "#1D4ED8" }}
                  borderRadius="full"
                  px={6}
                >
                  +
                </Button>
              </HStack>
            </Box>

            {/* Loan Tenure */}
            <Box>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="semibold" color="#071739">
                  Loan Tenure
                </Text>
                <Text fontWeight="bold" color="#2563EB" fontSize="lg">
                  {tenure} Years
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() => setTenure(prev => Math.max(1, prev - 1))}
                  bg="#2563EB"
                  color="white"
                  _hover={{ bg: "#1D4ED8" }}
                  borderRadius="full"
                  px={6}
                >
                  −
                </Button>
                <Input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  textAlign="center"
                  width="140px"
                  borderColor="gray.300"
                  _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 3px rgba(37,99,235,0.2)" }}
                  borderRadius="full"
                  fontWeight="semibold"
                />
                <Button
                  size="sm"
                  onClick={() => setTenure(prev => Math.min(10, prev + 1))}
                  bg="#2563EB"
                  color="white"
                  _hover={{ bg: "#1D4ED8" }}
                  borderRadius="full"
                  px={6}
                >
                  +
                </Button>
              </HStack>
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            bgGradient="linear(to-br, #071739, #0B1F4D, #1E3A8A)"
            color="white"
            p={{ base: 6, lg: 8 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box>
              <Heading
                as="h3"
                color="#FBBF24"
                fontSize="2xl"
                fontWeight="bold"
                mb={6}
              >
                Loan Summary
              </Heading>

              <VStack gap={4} align="stretch">
                {/* EMI */}
                <Box
                  bg="rgba(255,255,255,0.12)"
                  backdropFilter="blur(16px)"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.15)"
                  borderRadius="2xl"
                  p={5}
                >
                  <Text color="#93C5FD" fontSize="sm" fontWeight="medium">
                    Monthly EMI
                  </Text>
                  <Heading as="h2" fontSize="4xl" fontWeight="bold" mt={2} color="#FBBF24">
                    ₹{" "}
                    {emi.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </Heading>
                </Box>

                {/* Total Interest */}
                <Box
                  bg="rgba(255,255,255,0.12)"
                  backdropFilter="blur(16px)"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.15)"
                  borderRadius="2xl"
                  p={4}
                >
                  <Text color="#93C5FD" fontSize="sm" fontWeight="medium">
                    Total Interest
                  </Text>
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt={1} color="#FBBF24">
                    ₹{" "}
                    {totalInterest.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </Heading>
                </Box>

                {/* Total Payment */}
                <Box
                  bg="rgba(255,255,255,0.12)"
                  backdropFilter="blur(16px)"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.15)"
                  borderRadius="2xl"
                  p={4}
                >
                  <Text color="#93C5FD" fontSize="sm" fontWeight="medium">
                    Total Payment
                  </Text>
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt={1} color="#FBBF24">
                    ₹{" "}
                    {totalPayment.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </Heading>
                </Box>
              </VStack>

              {/* Apply Now Button */}
              <Button
                width="100%"
                mt={6}
                bg="#FBBF24"
                color="#071739"
                fontWeight="bold"
                py={7}
                borderRadius="xl"
                boxShadow="0 8px 25px rgba(251,191,36,0.3)"
                _hover={{ bg: "#F59E0B" }}
                fontSize="md"
              >
                🚀 Apply Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Export as default
export default PersonalLoanCalculatorContent;