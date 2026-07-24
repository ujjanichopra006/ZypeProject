"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  SimpleGrid,
  Card,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box bg="#0b1220" color="white">
      {/* Hero Section */}
      <Box as="section" py={12} px={4}>
        <Container maxW="5xl" mx="auto">
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            alignItems="flex-start"
            justifyContent="space-between"
            gap={8}
          >
            {/* LEFT SIDE */}
            <Box w="full" maxW={{ lg: "65%" }}>
              {/* Top Label */}
              <Text
                color="green.400"
                fontSize={{ base: "10px", sm: "xs" }}
                letterSpacing="0.18em"
                mb={3}
                display="flex"
                alignItems="center"
                gap={2}
                fontWeight="medium"
              >
                📊 FINTECH AWARENESS • 2026
              </Text>

              {/* Heading */}
              <Heading
                as="h1"
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                lineHeight="1.2"
              >
                Credit Score Awareness in India{" "}
                <Text as="span" color="emerald.400">
                  Why It Matters
                </Text>{" "}
                <Text as="span" color="cyan.400">
                  More Than Ever
                </Text>
              </Heading>

              {/* Description */}
              <Text
                mt={4}
                color="gray.300"
                fontSize={{ base: "xs", sm: "sm", md: "15px" }}
                maxW="xl"
              >
                Your credit score is your financial reputation. In 2026, digital
                lending decisions happen in seconds — and your score decides whether
                you get approved, rejected, or charged higher interest. 🔍
              </Text>

              {/* Tags */}
              <HStack gap={2} mt={5} flexWrap="wrap">
                <Badge
                  bg="whiteAlpha.200"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="11px"
                  fontWeight="normal"
                >
                  ⏱ 6–8 min read
                </Badge>

                <Badge
                  bg="whiteAlpha.200"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="11px"
                  fontWeight="normal"
                >
                  🧠 Beginner-Friendly
                </Badge>

                <Badge
                  bg="whiteAlpha.200"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="11px"
                  fontWeight="normal"
                >
                  🇮🇳 India Focused
                </Badge>
              </HStack>
            </Box>

            {/* RIGHT CARD */}
            <Box w="full" maxW={{ lg: "300px" }}>
              <Card.Root
                bgGradient="linear(to-br, #0f2a3a, #0b1b2a)"
                borderColor="teal.500/30"
                borderWidth="1px"
                borderRadius="2xl"
                p={4}
                boxShadow="lg"
              >
                {/* Header */}
                <HStack justifyContent="space-between" mb={4}>
                  <Text fontSize="sm" fontWeight="semibold" color="black">
                    Score Snapshot
                  </Text>

                  <Badge
                    bg="teal.500/20"
                    color="teal.700"
                    px={2.5}
                    py={1}
                    borderRadius="full"
                    fontSize="10px"
                  >
                    300 – 900
                  </Badge>
                </HStack>

                {/* Score Items */}
                <VStack gap={3} alignItems="stretch" fontSize="xs">
                  <HStack justifyContent="space-between">
                    <Text color="gray.700">Excellent (750+)</Text>
                    <Text color="green.700" fontWeight="medium">
                      High Approval
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text color="gray.700">Average (650–749)</Text>
                    <Text color="yellow.600" fontWeight="medium">
                      Moderate Risk
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text color="gray.700">Below 650</Text>
                    <Text color="red.700" fontWeight="medium">
                      High Risk
                    </Text>
                  </HStack>
                </VStack>

                {/* Footer */}
                <Text mt={4} fontSize="11px" color="gray.700" lineHeight="5">
                  A strong credit score can save you lakhs in interest over time.
                </Text>
              </Card.Root>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Box as="section" bg="#0b1220" color="gray.100" px={4} pb={14}>
        <Container maxW="5xl" mx="auto">
          <Card.Root
            bg="#111827"
            borderColor="white.200"
            borderWidth="1px"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            boxShadow="lg"
          >
            <VStack gap={8} alignItems="stretch" color="white">
              <Text fontSize="sm" 
              >
                In today's digital-first India, your credit score plays a crucial
                role in determining your financial opportunities. Whether you
                apply for a personal loan, credit card, or home loan, lenders
                assess your credit profile before making a decision.
              </Text>

              <Text fontSize="sm" >

                Regulated under the guidelines of the Reserve Bank of India (RBI),
                digital lending platforms now rely heavily on automated credit
                assessments.
              </Text>

              {/* What is Credit Score */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  What Is a Credit Score?
                </Heading>

                <Text fontSize="sm" >
                  A credit score is a three-digit number ranging from 300 to 900
                  that represents your creditworthiness. In India, one of the most
                  widely used scores is issued by TransUnion CIBIL.
                </Text>

                <Text fontSize="sm" mt={3}>
                  Generally, a score of 750 or above is considered excellent and
                  improves your chances of quick approval and lower interest
                  rates.
                </Text>
              </Box>

              {/* Importance */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  Why Credit Score Awareness Is Important in 2026
                </Heading>

                <Box as="ul" pl={5}>
                  <Box as="li" mb={2} fontSize="sm">
                    Instant digital loan approvals
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    AI-based underwriting models
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Risk-based interest pricing
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    UPI-linked credit lines and BNPL growth
                  </Box>
                </Box>

                <Text mt={4} fontSize="sm">
                  A higher score means better financial flexibility and lower
                  borrowing costs.
                </Text>
              </Box>

              {/* Factors */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={5}
                >
                  Factors That Affect Your Credit Score
                </Heading>

                <VStack gap={5} alignItems="stretch">
                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="emerald.400"
                      mb={1}
                    >
                      1️⃣ Payment History
                    </Heading>
                    <Text fontSize="sm">
                      Late EMI or credit card payments significantly reduce your
                      score. Timely payments build trust with lenders.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="emerald.400"
                      mb={1}
                    >
                      2️⃣ Credit Utilisation Ratio
                    </Heading>
                    <Text fontSize="sm">
                      Using more than 30–40% of your credit limit may negatively
                      impact your score.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="emerald.400"
                      mb={1}
                    >
                      3️⃣ Length of Credit History
                    </Heading>
                    <Text fontSize="sm" lineHeight="7">
                      Older credit accounts demonstrate stability and improve your
                      score.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="emerald.400"
                      mb={1}
                    >
                      4️⃣ Credit Mix
                    </Heading>
                    <Text fontSize="sm">
                      A balanced mix of secured and unsecured loans strengthens
                      your credit profile.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="emerald.400"
                      mb={1}
                    >
                      5️⃣ Hard Inquiries
                    </Heading>
                    <Text fontSize="sm" >
                      Applying for multiple loans within a short period can lower
                      your score.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Improve Score */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  How to Improve Your Credit Score
                </Heading>

                <Box as="ul" pl={5}>
                  <Box as="li" mb={2} fontSize="sm">
                    Pay EMIs and credit card bills on time.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Keep credit utilisation below 30%.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Avoid unnecessary loan applications.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Check your credit report regularly.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Maintain older credit accounts responsibly.
                  </Box>
                </Box>
              </Box>

              {/* Myths */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  Common Myths About Credit Scores
                </Heading>

                <Box as="ul" pl={5}>
                  <Box as="li" mb={2} fontSize="sm">
                    ❌ Checking your own credit score reduces it (False)
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    ❌ High salary guarantees approval (False)
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    ❌ Closing old accounts always improves score (Not always)
                  </Box>
                </Box>
              </Box>

              {/* Final Thoughts */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  Final Thoughts
                </Heading>

                <Text fontSize="sm" >
                  Credit score awareness is not optional anymore — it is
                  essential. In 2026, financial institutions rely heavily on
                  digital credit evaluation systems.
                </Text>

                <Text fontSize="sm" mt={3}>
                  Building a strong credit profile today can help you secure
                  better loan terms, faster approvals, and greater financial
                  freedom in the future.
                </Text>
              </Box>

              {/* Disclaimer */}
              <Box as="hr" borderColor="whiteAlpha.200" borderWidth="1px" opacity={0.3} mt={5} />
              <Text fontSize="xs" color="gray.400" fontStyle="italic" mt={4}>
                <Text as="strong">Disclaimer:</Text> This article is for educational
                purposes only and does not constitute financial advice. Please
                consult a financial professional before making credit decisions.
              </Text>
            </VStack>
          </Card.Root>
        </Container>
      </Box>
    </Box>
  );
}