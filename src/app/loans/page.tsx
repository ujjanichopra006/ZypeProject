"use client";
import Link from "next/link";
import React from "react";
import { keyframes } from "@emotion/react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Stack,
  Badge,
  HStack,
  Icon,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { FaGooglePlay } from "react-icons/fa";
import { 
  CheckCircle, 
  FileText, 
  Users, 
  Home, 
  Briefcase, 
  CreditCard,
  Star,
  Sparkles,
  Shield,
  Clock,
  Zap,
  TrendingUp,
  Wallet,
  Gift,
  Bluetooth
} from "lucide-react";

const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
  50% { box-shadow: 0 0 40px rgba(37, 99, 235, 0.6); }
  100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.3); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export default function HeroSection() {
  // Hero Section Colors
  const bgColor = "blue.50";
  const textColor = "gray.800";
  const subTextColor = "gray.600";
  const buttonBg = "blue.500";
  const buttonHoverBg = "blue.600";
  const borderColor = "gray.300";
  const badgeBg = "blue.50";
  const badgeTextColor = "blue.700";
  const featureIconColor = "green.500";
  const starColor = "yellow.400";

  // Loan Products Section Colors
  const cardBg = "white";
  const cardBorder = "gray.200";
  const loanButtonBg = "blue.50";
  const loanButtonColor = "blue.600";
  const cardHoverBorder = "blue.400";
  const loanButtonHoverBg = "blue.500";
  const loanButtonHoverColor = "white";

  // Smart Way Section Colors
  const smartBg = "gray.50";
  const smartIconBg = "blue.100";
  const smartIconColor = "blue.600";

  const loanProducts = [
    {
      title: "Personal Loan",
      amount: "₹40 LAKHS",
      icon: "💰",
    },
    {
      title: "Short-Term Loan",
      amount: "₹5 LAKHS",
      icon: "⚡",
    },
    {
      title: "Business Loan",
      amount: "₹75 LAKHS",
      icon: "🏢",
    },
    {
      title: "Gold Loan",
      amount: "₹50 LAKHS",
      icon: "🥇",
    },
  ];

  const smartFeatures = [
    {
      image: "/workflow.png",
      title: "Instant Approvals",
      description: "Smart eligibility matching parameters calculate active offers within seconds.",
    },
    {
      image: "/paperless.png",
      title: "Paperless Onboarding",
      description: "Smart eligibility matching parameters calculate active offers within seconds,",
    },
    {
      image: "/secure.png", 
      title: "Secure Security",
      description: "Your personal datasets and identity parameters are protected by bank-level.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        w="full"
        minH="90vh"
        display="flex"
        alignItems="center"
        bg={bgColor}
        position="relative"
        overflow="hidden"
        py={{ base: 12, md: 0 }}
        mt={10}
      >
        {/* Background Decorative Elements */}
        <Box
          position="absolute"
          top="-20%"
          right="-10%"
          w="600px"
          h="600px"
          borderRadius="full"
          bg="blue.50"
          opacity="0.3"
          filter="blur(100px)"
          display={{ base: "none", lg: "block" }}
        />
        <Box
          position="absolute"
          bottom="-30%"
          left="-10%"
          w="500px"
          h="500px"
          borderRadius="full"
          bg="purple.50"
          opacity="0.2"
          filter="blur(100px)"
          display={{ base: "none", lg: "block" }}
        />

        <Container maxW="7xl" position="relative" zIndex={1}>
          <Flex
            align="center"
            justify="space-between"
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, lg: 12 }}
          >
            {/* Left Side - Content */}
            <Stack
              flex="1"
              gap={{ base: 4, md: 6 }}
              maxW={{ base: "100%", lg: "55%" }}
              textAlign={{ base: "center", lg: "left" }}
              ml={5}
            >
              {/* Trust Badge */}
              <HStack
                gap={2}
                align="center"
                justify={{ base: "center", lg: "flex-start" }}
                bg={badgeBg}
                px={4}
                py={2}
                borderRadius="full"
                w="fit-content"
                mx={{ base: "auto", lg: 0 }}
                mt={0}
              >
                <Icon as={Star} color="blue.500" boxSize={4} />
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color={badgeTextColor}
                >
                  Trusted Financial Marketplace
                </Text>
              </HStack>

              {/* Main Heading */}
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "2xl", md: "3xl", lg: "3xl" }}
                fontWeight="extrabold"
                lineHeight="1.1"
                color={textColor}
                letterSpacing="tight"
              >
                Compare & Apply for
                <Box
                  as="span"
                  color="blue.500"
                  display="block"
                >
                  Instant Loans Online
                </Box>
              </Heading>

              {/* Description */}
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color={subTextColor}
                lineHeight="tall"
                maxW="lg"
                mx={{ base: "auto", lg: 0 }}
              >
                Access top-tier interest rates, paperless applications, and under 24-hour disbursal
                periods from certified RBI-regulated partners.
              </Text>

              {/* Features Grid */}
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                gap={3}
                pt={2}
                w="full"
              >
                {[
                  { icon: CheckCircle, text: "100% Paperless Process" },
                  { icon: Clock, text: "24-Hour Disbursal" },
                  { icon: Star, text: "Easy Online Application" },
                  { icon: Star, text: "RBI Regulated Partners" },
                ].map((feature, index) => (
                  <HStack
                    key={index}
                    gap={2}
                    justify={{ base: "center", lg: "flex-start" }}
                  >
                    <Icon as={feature.icon} color={featureIconColor} boxSize={4} />
                    <Text fontSize="sm" color={subTextColor} fontWeight="medium">
                      {feature.text}
                    </Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </Stack>

            {/* Right Side - Image */}
            <Box
              flex="1"
              maxW={{ base: "100%", lg: "45%" }}
              w="full"
              position="relative"
            >
              <Box
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="2xl"
                bg="gray.100"
                aspectRatio={4 / 3}
                w="full"
              >
                <Image
                  src="/loancompare.png"
                  alt="Instant Loans Online"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  onError={(e: any) => {
                    e.target.src = 'https://via.placeholder.com/800x600/4A90E2/FFFFFF?text=Your+Trusted+Loan+Partner';
                  }}
                />
              </Box>

              {/* Floating Badge - Top */}
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                bg="blue.500"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                boxShadow="lg"
                display={{ base: "none", md: "flex" }}
                alignItems="center"
                gap={2}
              >
                <Icon as={Clock} />
                <Text fontSize="sm" fontWeight="bold">
                  Under 24 Hrs
                </Text>
              </Box>

              {/* Floating Badge - Bottom */}
              <Box
                position="absolute"
                bottom="-20px"
                left="-20px"
                bg="green.500"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                boxShadow="lg"
                display={{ base: "none", md: "flex" }}
                alignItems="center"
                gap={2}
              >
                <Icon as={CheckCircle} />
                <Text fontSize="sm" fontWeight="bold">
                  No Hidden Charges
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Loan Products Section */}
      <Box
        w="full"
        py={{ base: 8, md: 5 }}
        bg={bgColor}
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <Container maxW="7xl">
          {/* Header Section */}
          <VStack gap={3} align="center" mb={5}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              color={textColor}
              textAlign="center"
            >
              Choose Your Loan Product
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={subTextColor}
              textAlign="center"
              maxW="2xl"
            >
              Tailored lending options designed to match your specific requirements instantly.
            </Text>
          </VStack>

          {/* Loan Products Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            gap={{ base: 4, md: 6 }}
            w="full"
          >
            {loanProducts.map((product, index) => (
              <Box
                key={index}
                bg={cardBg}
                borderWidth="1px"
                borderColor={cardBorder}
                borderRadius="2xl"
                p={6}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "xl",
                  borderColor: cardHoverBorder,
                }}
                position="relative"
                overflow="hidden"
              >
                {/* Icon/Emoji */}
                <Text fontSize="3xl" mb={3}>
                  {product.icon}
                </Text>

                {/* Product Title */}
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="semibold"
                  color={textColor}
                  mb={2}
                >
                  {product.title}
                </Heading>

                {/* Amount */}
                <HStack gap={1} mb={4}>
                  <Icon as={Star} color="blue.500" boxSize={4} />
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="blue.500"
                    letterSpacing="tight"
                  >
                    {product.amount}
                  </Text>
                </HStack>

                {/* Get Offers Button */}
                <Button
                  bg={loanButtonBg}
                  color={loanButtonColor}
                  _hover={{
                    bg: loanButtonHoverBg,
                    color: loanButtonHoverColor,
                    transform: "scale(1.02)",
                  }}
                  _active={{
                    transform: "scale(0.98)",
                  }}
                  variant="solid"
                  w="full"
                  borderRadius="lg"
                  fontWeight="semibold"
                  transition="all 0.2s"
                >
                  Get Offers →
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Smart Way to Borrow Section */}
      <Box
        w="full"
        py={{ base: 8, md: 10 }}
        px={{ base: 4, md: 6, lg: 8 }}
        bg="blue.50"
      >
        <Container maxW="7xl">
          {/* Header */}
          <VStack gap={4} align="center" mb={6}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              color="blue.800"              
              textAlign="center"
            >
              The Smart Way to Borrow
            </Heading>
          </VStack>

          {/* Features Grid - Fixed fallback issue */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={{ base: 6, md: 8 }}
            w="full"
            mt="1"
          >
            {smartFeatures.map((feature, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                textAlign="center"
                p={6}
                bg="white"
                borderRadius="2xl"
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                }}
              >
                {/* Image Circle - Fixed without fallbackSrc */}
                <Box
                  w="80px"
                  h="80px"
                  borderRadius="full"
                  bg={smartIconBg}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={4}
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    w="50px"
                    h="50px"
                    objectFit="contain"
                    onError={(e: any) => {
                      e.target.src = 'https://via.placeholder.com/50x50/4A90E2/FFFFFF?text=Icon';
                    }}
                  />
                </Box>

                {/* Title */}
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color={textColor}
                  mb={3}
                >
                  {feature.title}
                </Heading>

                {/* Description */}
                <Text
                  fontSize="md"
                  color={subTextColor}
                  lineHeight="tall"
                >
                  {feature.description}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>

          {/* App Download Section */}
          <Box
            mt={10}
            bg="linear-gradient(135deg, #64648c 0%, #454954 50%, #4b6079 100%)"
            borderRadius="3xl"
            boxShadow="0 30px 80px rgba(37, 99, 235, 0.3)"
            px={{ base: 4, md: 6, lg: 8 }}
            py={{ base: 6, md: 8, lg: 10 }}
            mx={{ base: 0, md: 10, lg: 20 }}
            mb={{ base: 12, md: 16 }}
            position="relative"
            overflow="hidden"
            border="1px solid rgba(255,255,255,0.1)"
            _hover={{ transform: 'scale(1.01)', transition: 'all 0.5s ease' }}
          >
            {/* Animated Gradient Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.1), transparent)"
              backgroundSize="200% 100%"
              animation={`${shimmer} 3s infinite`}
            />

            {/* Decorative Glow Orbs */}
            <Box
              position="absolute"
              top="-150px"
              right="-100px"
              width="400px"
              height="400px"
              borderRadius="full"
              bg="rgba(37, 99, 235, 0.15)"
              filter="blur(80px)"
              animation={`${floatAnimation} 6s infinite ease-in-out`}
            />
            <Box
              position="absolute"
              bottom="-100px"
              left="-100px"
              width="300px"
              height="300px"
              borderRadius="full"
              bg="rgba(189, 166, 241, 0.1)"
              filter="blur(80px)"
              animation={`${floatAnimation} 8s infinite ease-in-out reverse`}
            />

            <Flex
              direction={{ base: "column", lg: "row" }}
              align="center"
              justify="space-between"
              gap={{ base: 8, md: 10, lg: 12 }}
              position="relative"
              zIndex={2}
            >
              {/* Left Content */}
              <Box
                flex="1"
                textAlign={{ base: "center", lg: "left" }}
              >
                <HStack gap={3} mb={4} justify={{ base: "center", lg: "flex-start" }}>
                  <Badge
                    fontSize="xs"
                    px={4}
                    py={2}
                    borderRadius="full"
                    bg="linear-gradient(135deg, #3b82f6, #8b5cf6)"
                    color="white"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    animation={`${pulseGlow} 2s infinite`}
                  >
                    <HStack gap={2}>
                      <Sparkles size={14} />
                      <Text>Limited Time Offer</Text>
                    </HStack>
                  </Badge>
                  <Badge
                    fontSize="xs"
                    px={3}
                    py={2}
                    borderRadius="full"
                    bg="rgba(255,255,255,0.1)"
                    color="white"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255,255,255,0.2)"
                  >
                    ⚡ 5M+ Downloads
                  </Badge>
                </HStack>

                <Heading
                  as="h1"
                  fontSize="2xl"
                  fontWeight="extrabold"
                  lineHeight="1.2"
                  bgGradient="linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)"
                  bgClip="text"
                >
                  Get the{" "}
                  <Text as="span" bgGradient="linear-gradient(135deg, #669bf0, #b79afa, #eb97c1)" bgClip="text">
                    KeshvaCredit
                  </Text>
                  <br />
                  <Text as="span" fontSize="2xl" color="white">
                    App Today!
                  </Text>
                </Heading>

                <Text
                  fontSize="sm"
                  color="gray.100"
                  py={{ base: 4, md: 5 }}
                  lineHeight="1.8"
                  maxW="lg"
                  mx={{ base: "auto", lg: 0 }}
                >
                  Discover and compare the best loan offers from multiple trusted lenders,
                  check your eligibility, apply instantly, and manage everything seamlessly
                  within one app.
                </Text>

                <HStack gap={4} justify={{ base: "center", lg: "flex-start" }} flexWrap="wrap" mt={2}>
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.keshvacredit.loan&pcampaignid=web_share"
                    target="_blank"
                    passHref
                  >
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      gap={3}
                      bg="white"
                      color="gray.900"
                      px={{ base: 6, md: 7 }}
                      py={{ base: 3.5, md: 4 }}
                      borderRadius="xl"
                      fontWeight="bold"
                      fontSize={{ base: "sm", md: "md" }}
                      transition="all 0.3s ease"
                      cursor="pointer"
                      _hover={{
                        transform: "scale(1.08) translateY(-4px)",
                        boxShadow: "0 20px 60px rgba(37, 99, 235, 0.5)",
                      }}
                      border="1px solid rgba(255,255,255,0.2)"
                    >
                      <FaGooglePlay size={20} />
                      <Box textAlign="left">
                        <Text fontSize="xs" opacity={0.6}>GET IT ON</Text>
                        <Text fontSize="md" fontWeight="bold">Google Play</Text>
                      </Box>
                    </Box>
                  </Link>

                  
                </HStack>
              </Box>

              {/* Mobile Image - Fixed without fallbackSrc */}
              <Box
                flex="1"
                display="flex"
                justifyContent="center"
              >
                <Box
                  position="relative"
                  transition="all 0.5s ease"
                  animation={`${floatAnimation} 4s ease-in-out infinite`}
                  _hover={{
                    transform: "scale(1.08) rotate(-3deg)",
                  }}
                >
                  <Image
                    src="/ss.webp"
                    alt="App Screenshot"
                    width="250px"
                    height="auto"
                    borderRadius="2xl"
                    boxShadow="0 30px 80px rgba(0,0,0,0.5)"
                    border="2px solid rgba(255,255,255,0.1)"
                    onError={(e: any) => {
                      e.target.src = 'https://via.placeholder.com/250x500/1a1a2e/FFFFFF?text=App+Screenshot';
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom="-20px"
                    left="50%"
                    transform="translateX(-50%)"
                    width="80%"
                    height="30px"
                    bg="rgba(37, 99, 235, 0.2)"
                    filter="blur(30px)"
                    borderRadius="full"
                  />
                  {/* Floating Badge on Image */}
                  <Box
                    position="absolute"
                    top={-4}
                    right={-4}
                    bg="linear-gradient(135deg, #22c55e, #16a34a)"
                    px={3}
                    py={2}
                    borderRadius="full"
                    boxShadow="0 10px 30px rgba(34, 197, 94, 0.4)"
                    animation={`${pulseGlow} 2s infinite`}
                  >
                    <HStack gap={1}>
                      <Zap size={14} color="white" />
                      <Text fontSize="xs" fontWeight="bold" color="white">Live</Text>
                    </HStack>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </>
  );
}