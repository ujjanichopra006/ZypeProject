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
import { Diamond, IndianRupee, TrendingUp, Clock } from "lucide-react";

export default function GoldLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(9);
  const [tenure, setTenure] = useState(36);

  const emiData = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenure;

    const emi =
      loanAmount > 0 && monthlyRate > 0
        ? (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
        : loanAmount / totalMonths;

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  // Format currency
 // Format currency - FIXED
// Format currency - TypeScript fixed
const formatCurrency = (value: number): string => {
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
      bgGradient="linear(to-br, gray.50, yellow.50, amber.50)"
    >
      <Container maxW="4xl" mx="auto" p={0} mt={20}>
        <Box
          bg="white"
          borderRadius="32px"
          boxShadow="0 25px 80px rgba(0,0,0,0.35)"
          overflow="hidden"
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "45% 55%" }}
          borderWidth="1px"
          borderColor="gray.200"
        >
          {/* LEFT SIDE */}
          <Box p={{ base: 6, lg: 8 }}>
            <HStack gap={3} mb={2}>
              <Box
                w={10}
                h={10}
                rounded="xl"
                bgGradient="linear(to-br, yellow.500, amber.600)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={Diamond} w={5} h={5} color="white" />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", lg: "3xl" }}
                fontWeight="extrabold"
                color="gray.900"
                letterSpacing="tight"
              >
                Gold Loan EMI Calculator
              </Heading>
            </HStack>

            <Text color="gray.600" fontSize="sm" mb={6}>
              Calculate your monthly EMI instantly and unlock the value of your
              gold assets.
            </Text>

            {/* Loan Amount */}
            <Box mb={6}>
              <HStack justify="space-between" mb={2}>
                <Text fontWeight="semibold" color="gray.900">
                  <Icon as={IndianRupee} w={4} h={4} mr={1} />
                  Loan Amount
                </Text>
                <Text fontWeight="bold" color="yellow.600" fontSize="lg">
                  {formatCurrency(loanAmount)}
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() =>
                    setLoanAmount((prev) => Math.max(50000, prev - 10000))
                  }
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: "yellow.600" }}
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
                    borderColor: "yellow.500",
                    boxShadow: "0 0 0 3px rgba(234,179,8,0.2)",
                  }}
                  borderRadius="full"
                  fontWeight="semibold"
                  color="gray.900"
                />
                <Button
                  size="sm"
                  onClick={() =>
                    setLoanAmount((prev) => Math.min(5000000, prev + 10000))
                  }
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: "yellow.600" }}
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
                <Text fontWeight="semibold" color="gray.900">
                  <Icon as={TrendingUp} w={4} h={4} mr={1} />
                  Interest Rate
                </Text>
                <Text fontWeight="bold" color="yellow.600" fontSize="lg">
                  {interestRate}%
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() =>
                    setInterestRate((prev) => Math.max(6, prev - 0.5))
                  }
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: "yellow.600" }}
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
                    borderColor: "yellow.500",
                    boxShadow: "0 0 0 3px rgba(234,179,8,0.2)",
                  }}
                  borderRadius="full"
                  fontWeight="semibold"
                  color="gray.900"
                />
                <Button
                  size="sm"
                  onClick={() =>
                    setInterestRate((prev) => Math.min(18, prev + 0.5))
                  }
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: "yellow.600" }}
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
                <Text fontWeight="semibold" color="gray.900">
                  <Icon as={Clock} w={4} h={4} mr={1} />
                  Loan Tenure
                </Text>
                <Text fontWeight="bold" color="yellow.600" fontSize="lg">
                  {tenure} Months
                </Text>
              </HStack>

              <HStack gap={4} justify="center">
                <Button
                  size="sm"
                  onClick={() => setTenure((prev) => Math.max(6, prev - 1))}
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: "yellow.600" }}
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
                    borderColor: "yellow.500",
                    boxShadow: "0 0 0 3px rgba(234,179,8,0.2)",
                  }}
                  borderRadius="full"
                  fontWeight="semibold"
                  color="gray.900"
                />
                <Button
                  size="sm"
                  onClick={() => setTenure((prev) => Math.min(84, prev + 1))}
                  bg="yellow.500"
                  color="white"
                  _hover={{ bg: "yellow.600" }}
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
            bgGradient="linear(to-br, gray.900, yellow.900, amber.900)"
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
                  transition="all 0.3s"
                  _hover={{ bg: "rgba(255,255,255,0.18)" }}
                >
                  <Text color="yellow.300" fontSize="sm" fontWeight="medium">
                    Monthly EMI
                  </Text>
                  <Heading
                    as="h2"
                    fontSize="4xl"
                    fontWeight="bold"
                    mt={2}
                    color="yellow.400"
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
                  transition="all 0.3s"
                  _hover={{ bg: "rgba(255,255,255,0.18)" }}
                >
                  <Text color="yellow.300" fontSize="sm" fontWeight="medium">
                    Total Interest
                  </Text>
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt={1} color="yellow.400">
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
                  transition="all 0.3s"
                  _hover={{ bg: "rgba(255,255,255,0.18)" }}
                >
                  <Text color="yellow.300" fontSize="sm" fontWeight="medium">
                    Total Payment
                  </Text>
                  <Heading as="h3" fontSize="2xl" fontWeight="semibold" mt={1} color="yellow.400f">
                    {formatCurrency(emiData.totalPayment)}
                  </Heading>
                </Box>
              </VStack>

              {/* Apply Now Button */}
              <Button
                width="100%"
                mt={6}
                bgGradient="linear(to-r, yellow.400, yellow.500)"
                color="white"
                fontWeight="bold"
                py={7}
                borderRadius="xl"
                boxShadow="0 8px 25px rgba(251,191,36,0.3)"
                _hover={{
                  bgGradient: "linear(to-r, yellow.500, yellow.600)",
                  transform: "scale(1.02)",
                  boxShadow: "0 12px 35px rgba(251,191,36,0.4)",
                }}
                _active={{ transform: "scale(0.98)" }}
                transition="all 0.3s"
                fontSize="md"
              >
                Apply for Gold Loan
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}