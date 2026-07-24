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
    <Box bg="#111525" py={{ base: 6, md: 8, lg: 10 }} overflow="hidden">
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
            color="white"
            data-aos="zoom-in"
          >
            Periodic{" "}
            <Text as="span" color="blue.400">
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
            bg="linear-gradient(145deg, #1a2a67, #162055)"
            borderRadius="2xl"
            p={cardPadding}
            boxShadow="0 20px 60px rgba(26, 42, 103, 0.4)"
            data-aos="fade-right"
            position="relative"
            overflow="hidden"
          >
            {/* Decorative Element */}
            <Box
              position="absolute"
              top="-60px"
              right="-60px"
              width="150px"
              height="150px"
              borderRadius="full"
              bg="rgba(255,255,255,0.03)"
            />

            <Box position="relative" zIndex={1}>
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
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
                    color="gray.300"
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
                    bg="rgba(255,255,255,0.05)"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.2)"
                    color="white"
                    borderRadius="md"
                    px={3}
                    _hover={{
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                    _focus={{
                      borderColor: "blue.400",
                      boxShadow: "0 0 0 1px blue.400",
                    }}
                  />
                </Box>

                {/* Interest Rate */}
                <Box data-aos="fade-up" data-aos-delay="200">
                  <Text
                    as="label"
                    display="block"
                    color="gray.300"
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
                    bg="rgba(255,255,255,0.05)"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.2)"
                    color="white"
                    borderRadius="md"
                    px={3}
                    _hover={{
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                    _focus={{
                      borderColor: "blue.400",
                      boxShadow: "0 0 0 1px blue.400",
                    }}
                  />
                </Box>

                {/* Tenure */}
                <Box data-aos="fade-up" data-aos-delay="300">
                  <Text
                    as="label"
                    display="block"
                    color="gray.300"
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
                    bg="rgba(255,255,255,0.05)"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.2)"
                    color="white"
                    borderRadius="md"
                    px={3}
                    _hover={{
                      borderColor: "rgba(255,255,255,0.4)",
                    }}
                    _focus={{
                      borderColor: "blue.400",
                      boxShadow: "0 0 0 1px blue.400",
                    }}
                  />
                </Box>
              </VStack>

              {/* ✅ Divider replaced with Box */}
              <Box
                my={{ base: 4, md: 5 }}
                height="1px"
                bg="rgba(255,255,255,0.15)"
              />

              {/* Summary Cards */}
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
                <Box
                  bg="rgba(255,255,255,0.08)"
                  borderRadius="lg"
                  p={3}
                  data-aos="flip-left"
                  data-aos-delay="100"
                  backdropFilter="blur(10px)"
                >
                  <Text fontSize="xs" color="gray.400" fontWeight="medium">
                    Total Payment
                  </Text>
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="white"
                  >
                    ₹{emiData.totalPayment.toLocaleString("en-IN", {
                      maximumFractionDigits: 2,
                    })}
                  </Heading>
                </Box>

                <Box
                  bg="rgba(255,255,255,0.08)"
                  borderRadius="lg"
                  p={3}
                  data-aos="flip-right"
                  data-aos-delay="200"
                  backdropFilter="blur(10px)"
                >
                  <Text fontSize="xs" color="gray.400" fontWeight="medium">
                    Total Interest
                  </Text>
                  <Heading
                    as="h3"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="bold"
                    color="orange.300"
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
            bg="linear-gradient(145deg, #f8f9fa, #e9ecef)"
            borderRadius="2xl"
            p={cardPadding}
            boxShadow="0 20px 60px rgba(0,0,0,0.15)"
            data-aos="fade-left"
          >
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="gray.800"
            >
              EMI Result
            </Heading>

            {/* ✅ Divider replaced with Box */}
            <Box
              height="2px"
              bgGradient="linear(to-r, blue.500, blue.300)"
              mt={3}
              mb={4}
            />

            {/* Result Cards */}
            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3}>
              <Box
                bg="white"
                p={3}
                borderRadius="lg"
                boxShadow="sm"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Text fontSize="xs" color="gray.500" fontWeight="medium">
                  Monthly EMI
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color="#1a2a67"
                >
                  ₹{emiData.emi.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Heading>
              </Box>

              <Box
                bg="white"
                p={3}
                borderRadius="lg"
                boxShadow="sm"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Text fontSize="xs" color="gray.500" fontWeight="medium">
                  Total Payment
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color="#1a2a67"
                >
                  ₹{emiData.totalPayment.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </Heading>
              </Box>

              <Box
                bg="white"
                p={3}
                borderRadius="lg"
                boxShadow="sm"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Text fontSize="xs" color="gray.500" fontWeight="medium">
                  Total Interest
                </Text>
                <Heading
                  as="h3"
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  color="red.500"
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
                color="gray.700"
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
                      <Cell fill="#4CAF50" />
                      <Cell fill="#FF4D3D" />
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
                  <Box width="12px" height="12px" bg="green.500" borderRadius="full" />
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Principal: ₹{loanAmount.toLocaleString("en-IN")}
                  </Text>
                </HStack>

                <HStack gap={2}>
                  <Box width="12px" height="12px" bg="red.500" borderRadius="full" />
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
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