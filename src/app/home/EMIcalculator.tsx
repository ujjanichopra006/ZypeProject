"use client";

import { useState, useMemo, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  SimpleGrid,
  Flex,
  useBreakpointValue,
  VStack,
  HStack,
} from "@chakra-ui/react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const emiData = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure;

    const emi =
      (P * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
      emi: isNaN(emi) ? 0 : emi,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
    };
  }, [loanAmount, interestRate, tenure]);

  const chartData = [
    {
      name: "Principal",
      value: loanAmount,
    },
    {
      name: "Interest",
      value: emiData.totalInterest,
    },
  ];

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });
  const cardPadding = useBreakpointValue({ base: 4, md: 5, lg: 6 });
  const inputHeight = useBreakpointValue({ base: "40px", md: "44px" });

  return (
    <Box bg="blue.50" py={{ base: 6, md: 8, lg: 10 }} overflow="hidden">
      <Container maxW="1280px" px={{ base: 3, md: 5, lg: 6 }}>
        
        {/* ========== HEADING ========== */}
        <Box
          textAlign="center"
          mb={{ base: 5, md: 6, lg: 8 }}
          data-aos="fade-up"
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            fontWeight="extrabold"
            color="blue.900"
            data-aos="zoom-in"
          >
            Periodic{" "}
            <Text as="span" color="blue.600">
              Loan EMI
            </Text>{" "}
            Calculator
          </Heading>
        </Box>

        {/* ========== MAIN GRID ========== */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 4, md: 5, lg: 6 }}
          px={{ base: 0, md: 2 }}
        >
          
          {/* ============================================ */}
          {/* LEFT - EMI CALCULATOR FORM */}
          {/* ============================================ */}
          <Box
            bg="white"
            border="1px solid"
            borderColor="blue.100"
            borderRadius="2xl"
            p={cardPadding}
            boxShadow="0 20px 60px rgba(30, 64, 175, 0.08)"
            data-aos="fade-right"
            position="relative"
            overflow="hidden"
          >
          
            <Box position="relative" zIndex={1}>
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="blue.900"
                mb={{ base: 4, md: 5 }}
              >
                EMI Calculator
              </Heading>

              <VStack gap={{ base: 3, md: 4 }} align="stretch">
                {/* Loan Amount */}
                <Box data-aos="fade-up" data-aos-delay="100">
                  <Text
                    as="label"
                    display="block"
                    color="blue.700"
                    fontWeight="medium"
                    fontSize="sm"
                    mb={1}
                  >
                    Loan Amount (₹)
                  </Text>
                  <Input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    height={inputHeight}
                    bg="blue.50"
                    border="1px solid"
                    borderColor="blue.200"
                    color="blue.900"
                    borderRadius="md"
                    px={3}
                    _hover={{
                      borderColor: "blue.300",
                    }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 1px blue.500",
                      bg: "white",
                    }}
                  />
                </Box>

                {/* Interest Rate */}
                <Box data-aos="fade-up" data-aos-delay="200">
                  <Text
                    as="label"
                    display="block"
                    color="blue.700"
                    fontWeight="medium"
                    fontSize="sm"
                    mb={1}
                  >
                    Interest Rate (%)
                  </Text>
                  <Input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    height={inputHeight}
                    bg="blue.50"
                    border="1px solid"
                    borderColor="blue.200"
                    color="blue.900"
                    borderRadius="md"
                    px={3}
                    _hover={{
                      borderColor: "blue.300",
                    }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 1px blue.500",
                      bg: "white",
                    }}
                  />
                </Box>

                {/* Tenure */}
                <Box data-aos="fade-up" data-aos-delay="300">
                  <Text
                    as="label"
                    display="block"
                    color="blue.700"
                    fontWeight="medium"
                    fontSize="sm"
                    mb={1}
                  >
                    Loan Tenure (Months)
                  </Text>
                  <Input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    height={inputHeight}
                    bg="blue.50"
                    border="1px solid"
                    borderColor="blue.200"
                    color="blue.900"
                    borderRadius="md"
                    px={3}
                    _hover={{
                      borderColor: "blue.300",
                    }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 1px blue.500",
                      bg: "white",
                    }}
                  />
                </Box>
              </VStack>

              {/* Divider */}
              <Box
                my={{ base: 4, md: 5 }}
                height="1px"
                bg="blue.100"
              />

              {/* Summary Cards */}
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                <Box
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.200"
                  borderRadius="lg"
                  p={3}
                  data-aos="flip-left"
                  data-aos-delay="100"
                >
                  <Text fontSize="xs" color="blue.600" fontWeight="medium">
                    Total Payment
                  </Text>
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="blue.900"
                  >
                    ₹{emiData.totalPayment.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </Heading>
                </Box>

                <Box
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.200"
                  borderRadius="lg"
                  p={3}
                  data-aos="flip-right"
                  data-aos-delay="200"
                >
                  <Text fontSize="xs" color="blue.600" fontWeight="medium">
                    Total Interest
                  </Text>
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="orange.600"
                  >
                    ₹{emiData.totalInterest.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </Heading>
                </Box>
              </SimpleGrid>
            </Box>
          </Box>

          {/* ============================================ */}
          {/* RIGHT - EMI RESULT */}
          {/* ============================================ */}
          <Box
            bg="white"
            border="1px solid"
            borderColor="blue.100"
            borderRadius="2xl"
            p={cardPadding}
            boxShadow="0 20px 60px rgba(30, 64, 175, 0.08)"
            data-aos="fade-left"
          >
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="blue.900"
            >
              EMI Result
            </Heading>

            {/* Divider */}
            <Box
              height="2px"
              bgGradient="linear(to-r, blue.500, blue.300)"
              mt={3}
              mb={4}
            />

            {/* Result Cards */}
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3}>
              <Box
                bg="blue.50"
                border="1px solid"
                borderColor="blue.200"
                p={3}
                borderRadius="lg"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Text fontSize="xs" color="blue.600" fontWeight="medium">
                  Monthly EMI
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color="blue.900"
                >
                  ₹{emiData.emi.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Heading>
              </Box>

              <Box
                bg="blue.50"
                border="1px solid"
                borderColor="blue.200"
                p={3}
                borderRadius="lg"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Text fontSize="xs" color="blue.600" fontWeight="medium">
                  Total Payment
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color="blue.900"
                >
                  ₹{emiData.totalPayment.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Heading>
              </Box>

              <Box
                bg="blue.50"
                border="1px solid"
                borderColor="blue.200"
                p={3}
                borderRadius="lg"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Text fontSize="xs" color="blue.600" fontWeight="medium">
                  Total Interest
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color="red.600"
                >
                  ₹{emiData.totalInterest.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Heading>
              </Box>
            </SimpleGrid>

            {/* Chart */}
            <Box mt={4}>
              <Heading
                as="h3"
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                color="blue.800"
                textAlign="center"
                mb={2}
                data-aos="fade-up"
              >
                EMI Breakdown
              </Heading>

              <Box
                height={{ base: "200px", md: "220px" }}
                data-aos="zoom-in-up"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={70}
                      dataKey="value"
                      labelLine={true}
                      label={({ name, value }) =>
                        `${name}: ₹${Number(value).toLocaleString("en-IN")}`
                      }
                    >
                      <Cell fill="#3b82f6" />
                      <Cell fill="#ef4444" />
                    </Pie>
                    <Tooltip
                      formatter={(value) =>
                        `₹${Number(value).toLocaleString("en-IN")}`
                      }
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>

              {/* Legend */}
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="center"
                align="center"
                gap={{ base: 2, md: 4 }}
                mt={2}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <HStack gap={2}>
                  <Box width="12px" height="12px" bg="blue.500" borderRadius="full" />
                  <Text fontSize="sm" fontWeight="medium" color="blue.800">
                    Principal: ₹{loanAmount.toLocaleString("en-IN")}
                  </Text>
                </HStack>

                <HStack gap={2}>
                  <Box width="12px" height="12px" bg="red.500" borderRadius="full" />
                  <Text fontSize="sm" fontWeight="medium" color="blue.800">
                    Interest: ₹{emiData.totalInterest.toLocaleString("en-IN", {
                      maximumFractionDigits: 0,
                    })}
                  </Text>
                </HStack>
              </Flex>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}