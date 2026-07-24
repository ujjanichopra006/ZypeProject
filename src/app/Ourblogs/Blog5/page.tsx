"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  Flex,
  Grid,
  HStack,
  Tag,
  TagLabel,
  Card,
  Circle,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

// 👉 Replace this with your own Lottie JSON file
import financeAnimation from "../../../animations/Easy loan.json";

export default function PersonalLoanGuide() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const loanTopics = [
    {
      title: "Understanding Personal Loans",
      content:
        "A personal loan is an unsecured loan that allows individuals to borrow money without providing collateral. It can be used for a variety of purposes, including medical emergencies, home renovation, education expenses, travel, weddings, or consolidating existing debts.",
    },
    {
      title: "Compare Interest Rates Carefully",
      content:
        "Interest rates have a direct impact on the total amount you repay. Before applying, compare offers from multiple banks and financial institutions. Even a small difference in the interest rate can save you a significant amount over the loan tenure.",
    },
    {
      title: "Check Processing Fees & Hidden Charges",
      content:
        "In addition to the interest rate, review processing fees, prepayment charges, foreclosure fees, and late payment penalties. Understanding the complete cost structure helps you avoid unexpected expenses later.",
    },
    {
      title: "Review Eligibility Requirements",
      content:
        "Banks evaluate factors such as age, monthly income, employment status, work experience, and credit history before approving a loan. Checking eligibility in advance can improve your approval chances.",
    },
    {
      title: "Importance of a Good Credit Score",
      content:
        "A strong credit score reflects responsible financial behavior. Higher credit scores often increase the likelihood of loan approval and may help you qualify for better interest rates and flexible repayment terms.",
    },
    {
      title: "Choose the Right Loan Tenure",
      content:
        "A longer repayment period may reduce your monthly EMI but increase the overall interest paid. A shorter tenure may save money on interest but result in higher monthly installments. Select an option that fits your financial situation.",
    },
    {
      title: "Benefits of Online Loan Applications",
      content:
        "Many banks now provide fully digital application processes. Online applications offer convenience, quick document uploads, faster eligibility checks, and often quicker approval and disbursement times.",
    },
    {
      title: "Read All Terms & Conditions",
      content:
        "Always review the complete loan agreement before accepting an offer. Pay attention to repayment schedules, foreclosure rules, penalty charges, and any additional clauses that may affect your obligations.",
    },
    {
      title: "Borrow Responsibly",
      content:
        "Only borrow the amount you genuinely need and make sure the monthly EMI comfortably fits your budget. Responsible borrowing helps maintain financial stability and reduces the risk of future debt stress.",
    },
  ];

  const quickTips = [
    "Compare offers from multiple banks before applying.",
    "Maintain a healthy credit score for better rates.",
    "Check processing fees and hidden charges.",
    "Read the complete terms and conditions carefully.",
    "Choose an EMI that matches your monthly income.",
    "Borrow only the amount you actually need.",
  ];

  return (
    <Box minH="100vh" bg="gray.900" py={10} px={4}>
      <Container maxW="container.xl">
        <Box
          borderRadius="2xl"
          borderWidth="1px"
          borderColor="green.700"
          bg="gray.800"
          boxShadow="2xl"
          overflow="hidden"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "288px",
            height: "288px",
            borderRadius: "full",
            bg: "green.900",
            opacity: 0.3,
            filter: "blur(80px)",
            zIndex: 0,
          }}
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "288px",
            height: "288px",
            borderRadius: "full",
            bg: "blue.900",
            opacity: 0.3,
            filter: "blur(80px)",
            zIndex: 0,
          }}
        >
          {/* Hero Section */}
          <Box position="relative" zIndex={1} px={{ base: 6, md: 10 }} py={12}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10} alignItems="center">
              {/* Left Content */}
              <Box data-aos="fade-right">
                <Badge
                  colorScheme="green"
                  variant="subtle"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize="xs"
                  textTransform="uppercase"
                  letterSpacing="0.25em"
                  fontWeight="semibold"
                  bg="green.900"
                  color="green.300"
                >
                  💰 Finance & Banking Guide
                </Badge>

                <Heading
                  as="h1"
                  mt={6}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="black"
                  color="white"
                >
                  Best Personal
                  <br />
                  <Text as="span" color="green.400">
                    Loan Banks
                  </Text>
                  <br />
                  <Text 
                    as="span" 
                    fontSize={{ base: "2xl", md: "2xl" }} 
                    color="gray.300"
                  >
                    2024 Guide
                  </Text>
                </Heading>

                <Text mt={6} maxW="xl" fontSize="lg" color="gray.300">
                  A practical guide to choosing the right personal loan bank in
                  2024. Learn how to compare interest rates, eligibility,
                  processing fees, loan tenure, and repayment options before
                  making a financial decision.
                </Text>

                <HStack mt={8} gap={3} flexWrap="wrap">
                  <Tag.Root
                    size="lg"
                    borderRadius="xl"
                    variant="subtle"
                    colorScheme="gray"
                    bg="whiteAlpha.100"
                    color="white"
                  >
                    <TagLabel>📅 January 15, 2024</TagLabel>
                  </Tag.Root>

                  <Tag.Root
                    size="lg"
                    borderRadius="xl"
                    variant="subtle"
                    colorScheme="gray"
                    bg="whiteAlpha.100"
                    color="white"
                  >
                    <TagLabel>💳 Personal Loans</TagLabel>
                  </Tag.Root>

                  <Tag.Root
                    size="lg"
                    borderRadius="xl"
                    variant="subtle"
                    colorScheme="gray"
                    bg="whiteAlpha.100"
                    color="white"
                  >
                    <TagLabel>📚 Finance & Banking</TagLabel>
                  </Tag.Root>
                </HStack>
              </Box>

              {/* Lottie Animation */}
              <Box
                data-aos="zoom-in"
                data-aos-delay="200"
                display="flex"
                justifyContent="center"
              >
                <Box
                  w={{ base: "200px", md: "280px" }}
                  h={{ base: "200px", md: "280px" }}
                  borderRadius="2xl"
                  bgGradient="linear(to-br, green.900, blue.900)"
                  borderWidth="1px"
                  borderColor="green.700"
                  p={5}
                  transition="all 0.5s"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                >
                  <Lottie animationData={financeAnimation} loop={true} />
                </Box>
              </Box>
            </Grid>
          </Box>

          {/* Introduction */}
          <Box
            data-aos="fade-up"
            mx={{ base: 6, md: 10 }}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor="green.700"
            bgGradient="linear(to-r, green.900, blue.900)"
            p={8}
            position="relative"
            zIndex={1}
          >
            <Heading as="h2" size="xl" color="white" mb={4}>
              Why Choosing the Right Personal Loan Matters
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Personal loans can help you manage important life events and
              unexpected expenses without liquidating your savings. However,
              selecting the wrong lender may result in higher costs, hidden
              charges, and repayment challenges. Understanding how banks
              evaluate applications and comparing available options can help you
              make a more informed and financially responsible choice.
            </Text>
          </Box>

          {/* Main Content */}
          <Box px={{ base: 6, md: 10 }} py={12} position="relative" zIndex={1}>
            <Stack gap={6}>
              {loanTopics.map((topic, index) => (
                <Card.Root
                  key={index}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                  bg="gray.700"
                  borderRadius="2xl"
                  borderWidth="1px"
                  borderColor="gray.600"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-4px)",
                    borderColor: "green.500",
                    boxShadow: "0 0 30px rgba(52, 211, 153, 0.15)",
                  }}
                >
                  <Card.Body>
                    <Flex gap={5}>
                      <Circle
                        size="48px"
                        bg="green.900"
                        borderWidth="1px"
                        borderColor="green.700"
                        color="green.400"
                        fontWeight="bold"
                        flexShrink={0}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Circle>

                      <Box flex="1">
                        <Heading
                          as="h2"
                          size="lg"
                          color="white"
                          transition="color 0.3s"
                          _hover={{ color: "green.400" }}
                        >
                          {topic.title}
                        </Heading>
                        <Text mt={4} fontSize="lg" color="gray.300">
                          {topic.content}
                        </Text>
                      </Box>
                    </Flex>
                  </Card.Body>
                </Card.Root>
              ))}
            </Stack>

            {/* Quick Tips */}
            <Box
              data-aos="zoom-in-up"
              mt={14}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="green.700"
              bg="green.900"
              p={8}
            >
              <Heading as="h2" size="xl" color="white" mb={6}>
                ✔ Quick Tips Before Applying
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                {quickTips.map((tip, index) => (
                  <Box
                    key={index}
                    borderRadius="2xl"
                    borderWidth="1px"
                    borderColor="whiteAlpha.200"
                    bg="gray.700"
                    p={4}
                    transition="all 0.3s"
                    _hover={{
                      bg: "green.800",
                      transform: "scale(1.02)",
                    }}
                  >
                    <Text color="gray.200">
                      <Text as="span" color="green.400" mr={2}>
                        ✔
                      </Text>
                      {tip}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Highlight Box */}
            <Box
              data-aos="fade-up"
              mt={14}
              borderRadius="2xl"
              bgGradient="linear(to-r, green.900, gray.700, blue.900)"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              p={8}
            >
              <Heading as="h3" size="lg" color="white" mb={4}>
                💡 Smart Borrowing Advice
              </Heading>
              <Text fontSize="lg" color="gray.300">
                The lowest interest rate is not always the only factor to
                consider. Evaluate the complete loan package, including fees,
                repayment flexibility, customer service, and your own repayment
                capacity. Responsible borrowing and careful comparison can help
                you avoid unnecessary financial pressure in the future.
              </Text>
            </Box>

            {/* Conclusion */}
            <Box
              data-aos="fade-up"
              mt={14}
              pt={10}
              borderTopWidth="1px"
              borderColor="whiteAlpha.200"
              textAlign="center"
            >
              <Heading as="h2" size="2xl" fontWeight="black" color="white">
                Make Informed Financial Decisions
              </Heading>

              <Text maxW="3xl" mx="auto" mt={5} fontSize="lg" color="gray.300">
                Choosing the best personal loan bank is about finding a balance
                between affordability, flexibility, and reliability. By
                comparing multiple lenders, maintaining a good credit profile,
                and understanding the complete loan agreement, you can make a
                decision that supports your long-term financial well-being.
              </Text>
            </Box>

            {/* Disclaimer */}
            <Box
              mt={10}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="gray.600"
              bg="gray.700"
              p={5}
            >
              <Text fontSize="sm" color="gray.400">
                <Text as="span" color="green.400">
                  Disclaimer:
                </Text>{" "}
                This article is intended for general informational and
                educational purposes only. Loan products, interest rates,
                eligibility criteria, and fees may vary between banks and
                financial institutions and are subject to change. Readers should
                verify the latest information directly with the respective
                lender before making any financial decision.
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}