"use client";

import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Icon,
} from "@chakra-ui/react";
import { Home, IndianRupee, TrendingUp, Clock } from "lucide-react";

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(3000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const emiData = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;

    const emi =
      loanAmount > 0
        ? (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : 0;

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Box
      minH="100vh"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 6 }}
      bgGradient="linear(to-br, #071739, #0B1F4D, #102A63)"
    >
      <Container maxW="4xl" mx="auto" p={0} mt={20}>
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
            <HStack gap={3} mb={2}>
              <Box
                w={10}
                h={10}
                rounded="xl"
                bg="#2563EB"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={Home} w={5} h={5} color="white" />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="extrabold"
                color="#071739"
                letterSpacing="tight"
              >
                Home Loan EMI Calculator
              </Heading>
            </HStack>

            <Text color="gray.600" fontSize="sm" mb={6}>
              Calculate your monthly EMI instantly and plan your dream home
              smartly.
            </Text>

            {/* Loan Amount */}
            <Box mb={6}>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="semibold" color="#071739">
                  <Icon as={IndianRupee} w={4} h={4} mr={1} />
                  Loan Amount
                </Text>
                <Text fontWeight="bold" color="#2563EB" fontSize="lg">
                  {formatCurrency(loanAmount)}
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() =>
                    setLoanAmount((prev) => Math.max(100000, prev - 50000))
                  }
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
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  textAlign="center"
                  width="140px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "#2563EB",
                    boxShadow: "0 0 0 3px rgba(37,99,235,0.2)",
                  }}
                  borderRadius="full"
                  fontWeight="semibold"
                />
                <Button
                  size="sm"
                  onClick={() =>
                    setLoanAmount((prev) => Math.min(10000000, prev + 50000))
                  }
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
                  <Icon as={TrendingUp} w={4} h={4} mr={1} />
                  Interest Rate
                </Text>
                <Text fontWeight="bold" color="#2563EB" fontSize="lg">
                  {interestRate}%
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() =>
                    setInterestRate((prev) => Math.max(5, prev - 0.5))
                  }
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
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  textAlign="center"
                  width="140px"
                  borderColor="gray.300"
                  _focus={{
                    borderColor: "#2563EB",
                    boxShadow: "0 0 0 3px rgba(37,99,235,0.2)",
                  }}
                  borderRadius="full"
                  fontWeight="semibold"
                />
                <Button
                  size="sm"
                  onClick={() =>
                    setInterestRate((prev) => Math.min(15, prev + 0.5))
                  }
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
                  <Icon as={Clock} w={4} h={4} mr={1} />
                  Loan Tenure
                </Text>
                <Text fontWeight="bold" color="#2563EB" fontSize="lg">
                  {tenure} Years
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() => setTenure((prev) => Math.max(1, prev - 1))}
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
                  _focus={{
                    borderColor: "#2563EB",
                    boxShadow: "0 0 0 3px rgba(37,99,235,0.2)",
                  }}
                  borderRadius="full"
                  fontWeight="semibold"
                />
                <Button
                  size="sm"
                  onClick={() => setTenure((prev) => Math.min(30, prev + 1))}
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
              <HStack gap={2} mb={6}>
                <Box
                  w={8}
                  h={8}
                  bg="yellow.400/20"
                  rounded="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={IndianRupee} w={4} h={4} color="yellow.400" />
                </Box>
                <Heading as="h3" color="yellow.400" fontSize="2xl" fontWeight="bold">
                  Loan Summary
                </Heading>
              </HStack>

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
                  <Heading
                    as="h2"
                    fontSize="4xl"
                    fontWeight="bold"
                    mt={2}
                    color="#FBBF24"
                  >
                    <Icon as={IndianRupee} w={8} h={8} mr={1} />
                    {emiData.emi.toLocaleString("en-IN")}
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
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt={1} color="#67E8F9">
                    {formatCurrency(emiData.totalInterest)}
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
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt={1} color="white">
                    {formatCurrency(emiData.totalPayment)}
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
                Apply for Home Loan
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
