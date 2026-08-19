"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  Button,
  Circle,
  SimpleGrid,
  Flex,
  Separator,
} from "@chakra-ui/react";
import { 
  FaCheckCircle, 
  FaArrowLeft, 
  FaRocket, 
  FaShieldAlt, 
  FaFileAlt,
  FaHandshake,
  FaMoneyBillWave,
} from "react-icons/fa";
import Profile from "../../profile/page";

// Helper function to capitalize state name
const capitalizeState = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function LoanPage() {
  const bgColor = "gray.50";
  const textColor = "gray.700";
  const headingColor = "gray.800";
  const cardBg = "white";
  const cardBorder = "gray.200";
  const stepBg = "green.50";
  const stepBorder = "green.200";

  const [id, setId] = React.useState<string>("");
  const stateName = capitalizeState(id);

  React.useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split("/");
    const loanId = parts[parts.length - 1] || "";
    setId(loanId);
  }, []);

  if (!id) {
    return (
      <Box minH="100vh" bg={bgColor} display="flex" alignItems="center" justifyContent="center">
        <Text>Loading...</Text>
      </Box>
    );
  }

  return (
    <Box 
      minH="100vh" 
      bg={bgColor} 
      mt={20}
      py={12} 
      px={{ base: 4, md: 8, lg: 16 }}
    >
      <Container maxW="container.xl">
        {/* Main Title */}
        <VStack gap={4} mb={12}>
          <Text 
            fontSize="sm" 
            px={4} 
            py={2} 
            borderRadius="full"
            bg="blue.100"
            color="blue.700"
          >
            Personal Loans
          </Text>
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color={headingColor}
            fontWeight="bold"
          >
            Personal Loans in{" "}
            <Text as="span" color="blue.500">
              {stateName}
            </Text>
          </Heading>
          <Text color={textColor} fontSize="lg" textAlign="center" maxW="2xl">
            Get quick and easy personal loans with competitive rates in {stateName}
          </Text>
        </VStack>

        {/* Loan Options Section */}
        <VStack align="stretch" gap={6} mb={12}>
          <Heading as="h2" size="xl" color={headingColor}>
            Loan Options in {stateName}
          </Heading>
          <Text color={textColor} fontSize="md" maxW="3xl">
            Looking for a personal loan in {stateName}? We offer competitive loan
            options tailored to your needs.
          </Text>

          {/* Two Cards */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            {/* Quick Personal Loans Card */}
            <Box
              bg={cardBg}
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={cardBorder}
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md", transform: "translateY(-4px)" }}
            >
              <VStack align="stretch" gap={4}>
                <HStack gap={3}>
                  <Box as="span" boxSize={6} color="blue.500">
                    <FaRocket />
                  </Box>
                  <Heading as="h3" size="md" color={headingColor}>
                    Quick Personal Loans
                  </Heading>
                </HStack>
                <List.Root gap={3}>
                  {["Fast approval process", "Competitive interest rates", "Flexible repayment terms", "Minimal documentation"].map(
                    (item, index) => (
                      <List.Item key={index} display="flex" alignItems="center" color={textColor}>
                        <Box as="span" color="green.500" mr={2}>
                          <FaCheckCircle />
                        </Box>
                        {item}
                      </List.Item>
                    )
                  )}
                </List.Root>
              </VStack>
            </Box>

            {/* Why Choose Us Card */}
            <Box
              bg={cardBg}
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={cardBorder}
              shadow="sm"
              transition="all 0.3s"
              _hover={{ shadow: "md", transform: "translateY(-4px)" }}
            >
              <VStack align="stretch" gap={4}>
                <HStack gap={3}>
                  <Box as="span" boxSize={6} color="green.500">
                    <FaShieldAlt />
                  </Box>
                  <Heading as="h3" size="md" color={headingColor}>
                    Why Choose Us
                  </Heading>
                </HStack>
                <List.Root gap={3}>
                  {[
                    `Trusted by thousands in ${stateName}`,
                    "24/7 customer support",
                    "Secure and confidential process",
                    "No hidden charges"
                  ].map((item, index) => (
                    <List.Item key={index} display="flex" alignItems="center" color={textColor}>
                      <Box as="span" color="green.500" mr={2}>
                        <FaCheckCircle />
                      </Box>
                      {item}
                    </List.Item>
                  ))}
                </List.Root>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>

        {/* Form Section - Imported from profile/page */}
        <Box 
          mt={20} 
          bg="gray.100"
          borderRadius="2xl" 
          overflow="hidden"
          shadow="lg"
        >
          <Profile />
        </Box>

        {/* How It Works Section */}
        <Box mt={20}>
          <VStack gap={4} mb={12}>
            <Text 
              fontSize="sm" 
              px={4} 
              py={2} 
              borderRadius="full"
              bg="green.100"
              color="green.700"
            >
              Simple Process
            </Text>
            <Heading as="h2" size="xl" color={headingColor} textAlign="center">
              How It Works
            </Heading>
            <Text color={textColor} fontSize="lg" textAlign="center">
              Get your loan in just 3 simple steps.
            </Text>
          </VStack>

          {/* Timeline */}
          <Box position="relative" mb={12}>
            <Box 
              position="absolute" 
              top="24px" 
              left="0" 
              right="0" 
              display={{ base: "none", md: "block" }}
            >
              <Separator borderColor="gray.300" />
            </Box>
            <Flex justify="space-between" position="relative" zIndex={1}>
              {[1, 2, 3].map((step) => (
                <VStack key={step} gap={3} align="center" flex={1}>
                  <Circle
                    size="48px"
                    bg={step === 1 ? "blue.500" : "gray.300"}
                    color={step === 1 ? "white" : "gray.700"}
                    fontSize="xl"
                    fontWeight="bold"
                    shadow="lg"
                  >
                    {step}
                  </Circle>
                </VStack>
              ))}
            </Flex>
          </Box>

          {/* Steps Cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {/* Step 1 */}
            <Box
              bg={stepBg}
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={stepBorder}
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
            >
              <VStack gap={4}>
                <Box as="span" boxSize={12} color="blue.500">
                  <FaFileAlt />
                </Box>
                <Heading as="h3" size="md" color={headingColor} textAlign="center">
                  Fill Basic Details
                </Heading>
                <Text color={textColor} textAlign="center" fontSize="sm">
                  Provide your personal and financial details to help us find the best loan options.
                </Text>
              </VStack>
            </Box>

            {/* Step 2 */}
            <Box
              bg={stepBg}
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={stepBorder}
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
            >
              <VStack gap={4}>
                <Box as="span" boxSize={12} color="purple.500">
                  <FaHandshake />
                </Box>
                <Heading as="h3" size="md" color={headingColor} textAlign="center">
                  Choose an Offer
                </Heading>
                <Text color={textColor} textAlign="center" fontSize="sm">
                  Browse through loan offers and select the one that fits your requirements.
                </Text>
              </VStack>
            </Box>

            {/* Step 3 */}
            <Box
              bg={stepBg}
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor={stepBorder}
              transition="all 0.3s"
              _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
            >
              <VStack gap={4}>
                <Box as="span" boxSize={12} color="green.500">
                  <FaMoneyBillWave />
                </Box>
                <Heading as="h3" size="md" color={headingColor} textAlign="center">
                  Get Instant Approval
                </Heading>
                <Text color={textColor} textAlign="center" fontSize="sm">
                  Submit your documents online and receive money directly in your bank account.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Breadcrumb / Back Link */}
        <Box mt={12} textAlign="center">
          <Link href="/">
            <Button
              colorScheme="blue"
              variant="ghost"
              size="md"
            >
              <FaArrowLeft style={{ marginRight: "8px" }} />
              Back to Home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
