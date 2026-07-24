"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  HStack,
  Card,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box bg="#0b1220" color="white">
      {/* ================= HERO SECTION ================= */}
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
                Is Crypto Still a Good{" "}
                <Text as="span" color="emerald.400">
                  Investment in 2026? A
                </Text>{" "}
                <Text as="span" color="cyan.400">
                  Realistic Breakdown
                </Text>
              </Heading>

              {/* Description */}
              <Text
                mt={4}
                color="gray.300"
                fontSize="sm"
                maxW="xl"
              >
                No hype. No blind shilling. Just an honest look at whether
                Bitcoin, Ethereum, and the broader crypto market still
                make sense for investors in 2026. 🔍
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
                  ⏱ 7–9 min read
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
                  ⚠️ Not Financial Advice
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
                    Market Snapshot
                  </Text>

                  <Badge
                    bg="teal.500/20"
                    color="teal.700"
                    px={2.5}
                    py={1}
                    borderRadius="full"
                    fontSize="10px"
                  >
                    2026
                  </Badge>
                </HStack>

                {/* Market Items */}
                <VStack gap={3} alignItems="stretch" fontSize="xs">
                  <HStack justifyContent="space-between">
                    <Text color="gray.700">🟡 Bitcoin (BTC)</Text>
                    <Text color="green.700" fontWeight="medium">
                      Volatile
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text color="gray.700">🟣 Ethereum (ETH)</Text>
                    <Text color="yellow.700" fontWeight="medium">
                      Growing
                    </Text>
                  </HStack>

                  <HStack justifyContent="space-between">
                    <Text color="gray.700">🟢 Altcoins</Text>
                    <Text color="red.700" fontWeight="medium">
                      High Risk
                    </Text>
                  </HStack>
                </VStack>

                {/* Footer */}
                <Text mt={4} fontSize="11px" color="gray.700">
                  Crypto can still be powerful in a diversified portfolio — if
                  you understand the risks and play the long game. 🧭
                </Text>
              </Card.Root>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= BLOG CONTENT ================= */}
      <Box as="section" bg="#0b1220" color="gray.300" px={4} pb={14}>
        <Container maxW="5xl" mx="auto">
          <Card.Root
            bg="#111827"
            borderColor="whiteAlpha.200"
            borderWidth="1px"
            borderRadius="2xl"
            p={{ base: 6, md: 8 }}
            boxShadow="lg"
          >
            <VStack gap={8} alignItems="stretch">
              <Text fontSize="sm" color="white">
                Cryptocurrency has been one of the most talked-about investment
                options of the last decade. From creating overnight millionaires to
                causing massive losses, crypto has seen extreme highs and painful
                lows.
              </Text>

              <Text fontSize="sm"  color="white">
                So the big question in 2026 is: <Text as="strong">Is crypto still a good
                investment, or has the opportunity already passed?</Text>
              </Text>

              <Text fontSize="sm"  color="white">
                Let's break it down honestly — without hype.
              </Text>

              {/* What is Cryptocurrency */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  What Is Cryptocurrency?
                </Heading>

                <Text fontSize="sm" color="white">
                  Cryptocurrency is a digital asset built on blockchain technology.
                  It operates without a central authority like banks or governments.
                </Text>

                <Box as="ul" pl={5} mt={4}  color="white">
                  <Box as="li" mb={2} fontSize="sm">
                    <Text as="strong">Bitcoin (BTC)</Text> – Often referred to as digital
                    gold.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    <Text as="strong">Ethereum (ETH)</Text> – Powers smart contracts and
                    decentralized applications.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    <Text as="strong">Solana & Polygon</Text> – High-speed blockchain
                    platforms.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    <Text as="strong">Stablecoins</Text> – Assets like USDT and USDC designed
                    to maintain stable value.
                  </Box>
                </Box>
              </Box>

              {/* State of Crypto */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  The State of Crypto in 2026
                </Heading>

                <Text fontSize="sm" color="white">
                  Crypto is no longer a new experiment. Today, it is more regulated,
                  institutionally adopted, and integrated into global finance than
                  ever before.
                </Text>

                <Box as="ul" pl={5} mt={4}  color="white">
                  <Box as="li" mb={2} fontSize="sm">
                    Institutional investors hold Bitcoin.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Governments impose crypto regulations and taxes.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Blockchain technology is being used beyond trading.
                  </Box>
                </Box>
              </Box>

              {/* Reasons */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={5}
                >
                  Reasons Crypto Can Still Be a Good Investment
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
                      1️⃣ Long-Term Growth Potential
                    </Heading>
                    <Text fontSize="sm" color="white">
                      Bitcoin has a fixed supply of 21 million coins. Scarcity,
                      combined with increasing demand, makes it attractive as a
                      long-term store of value.
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
                      2️⃣ Institutional Adoption
                    </Heading>
                    <Text fontSize="sm" color="white">
                      Large banks, hedge funds, and payment companies are now part of
                      the crypto ecosystem, adding credibility and liquidity.
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
                      3️⃣ Real-World Use Cases
                    </Heading>
                    <Text fontSize="sm" color="white">
                      Crypto powers decentralized finance (DeFi), utility-based NFTs,
                      cross-border payments, and smart contracts that reduce the need
                      for intermediaries.
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
                      4️⃣ High Return Potential
                    </Heading>
                    <Text fontSize="sm" color="white">
                      Despite volatility, cryptocurrency has historically
                      outperformed many traditional asset classes during strong market
                      cycles.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Risks */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={5}
                >
                  Risks You Must Consider
                </Heading>

                <VStack gap={5} alignItems="stretch">
                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="red.400"
                      mb={1}
                    >
                      1️⃣ High Volatility
                    </Heading>
                    <Text fontSize="sm" color="white">
                      Crypto prices can rise or fall dramatically within weeks,
                      making it unsuitable for short-term or emotional investors.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="red.400"
                      mb={1}
                    >
                      2️⃣ Regulations
                    </Heading>
                    <Text fontSize="sm" color="white">
                      Governments around the world are tightening crypto regulations,
                      which can improve safety but may also impact market growth.
                    </Text>
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="base"
                      fontWeight="semibold"
                      color="red.400"
                      mb={1}
                    >
                      3️⃣ Scams and Weak Projects
                    </Heading>
                    <Text fontSize="sm"color="white">
                      Many crypto projects fail or turn out to be fraudulent.
                      Investing without proper research can lead to a complete loss of
                      funds.
                    </Text>
                  </Box>
                </VStack>
              </Box>

              {/* Who Should Invest */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  Who Should Invest in Crypto?
                </Heading>

                <Text fontSize="sm"  color="white">
                  Cryptocurrency may be suitable if you:
                </Text>

                <Box as="ul" pl={5} mt={4}>
                  <Box as="li" mb={2} fontSize="sm">
                    Have a long-term investment mindset (3–5+ years).
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Can tolerate market volatility.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Invest only what you can afford to lose.
                  </Box>
                </Box>

                <Text mt={4} fontSize="sm" color="white">
                  Crypto is generally not ideal if you are looking for guaranteed or
                  short-term returns.
                </Text>
              </Box>

              {/* Strategy */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  Smart Crypto Investment Strategy for 2026
                </Heading>

                <Box as="ul" pl={5}>
                  <Box as="li" mb={2} fontSize="sm">
                    Focus on established projects like Bitcoin and Ethereum.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Use Dollar-Cost Averaging (DCA) to reduce market timing risk.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Store long-term holdings securely using hardware wallets.
                  </Box>
                  <Box as="li" mb={2} fontSize="sm">
                    Diversify your portfolio instead of relying only on crypto.
                  </Box>
                </Box>
              </Box>

              {/* Final Verdict */}
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  Final Verdict
                </Heading>

                <Text fontSize="sm" color="white">
                  Crypto can still be a good investment in 2026 — but only for
                  informed and disciplined investors. The market has matured, but
                  opportunities remain for those who understand the risks and take a
                  long-term approach.
                </Text>

                <Text fontSize="sm" mt={3}>
                  Investors who treat cryptocurrency as a long-term technology
                  investment, rather than a get-rich-quick scheme, may continue to
                  benefit from the growth of the digital asset ecosystem.
                </Text>
              </Box>

              {/* Disclaimer */}
              <Box as="hr" borderColor="whiteAlpha.200" borderWidth="1px" opacity={0.3} mt={5} />
              <Text fontSize="xs" color="gray.400" fontStyle="italic" mt={4}>
                <Text as="strong">Disclaimer:</Text> This article is for educational
                purposes only and does not constitute financial or investment
                advice. Cryptocurrency investments involve market risk. Always do
                your own research and consult a qualified financial advisor before
                making any investment decisions.
              </Text>
            </VStack>
          </Card.Root>
        </Container>
      </Box>
    </Box>
  );
}