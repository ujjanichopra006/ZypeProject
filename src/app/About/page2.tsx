"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Button,
} from "@chakra-ui/react";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const partners = [
    { src: "/Zype.png", alt: "Zype", delay: 0 },
    { src: "/Moneyview.jpg", alt: "MoneyView", delay: 100 },
    { src: "/Ramfin.png", alt: "Ramfin", delay: 200 },
    { src: "/Fatakpay.jpg", alt: "FatakPay", delay: 300 },
    { src: "/olyv.png", alt: "Olyv", delay: 400 },
    { src: "/trustpaisa.png", alt: "trustPaisa", delay: 0 },
    { src: "/CreditSea.png", alt: "CreditSea", delay: 100 },
    { src: "/payme.png", alt: "Payme", delay: 200 },
    { src: "/capitalnow.png", alt: "Capitalnow", delay: 300 },
    { src: "/bajaj housing.jpg", alt: "Bajaj Housing", delay: 0 },
    { src: "/faircent.png", alt: "Faircent", delay: 0 },
    { src: "/protium.png", alt: "Protium", delay: 0 },
    { src: "/Muthoot fincorp.png", alt: "Muthoot Fincorp", delay: 0 },
    { src: "/branch.webp", alt: "Branch", delay: 0 },
    { src: "/kamakshi money.png", alt: "Kamakshi Money", delay: 0 },
  ];

  const steps = [
    {
      image: "/select loan.png",
      title: "Select Loan",
      description: "Your Dream Loan is Just a Click Away. Compare & Conquer.",
      delay: 0,
    },
    {
      image: "/instant approval.jpg",
      title: "Instant Approval",
      description: "Apply online and get instant approval from lenders.",
      delay: 150,
    },
    {
      image: "/receive funds.jpg",
      title: "Receive Funds",
      description: "Funds disbursed to your account quickly and securely.",
      delay: 300,
    },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // Gradient colors for partner cards
  const gradientColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  ];

  return (
    <Box>
      {/* Loan Partners Section - Enhanced */}
      <Box
        bg="linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)"
        py={{ base: 4, md: 10 }}
        position="relative"
        overflow="hidden"
      >
        {/* Decorative Background Elements */}
        <Box
          position="absolute"
          top="-20%"
          right="-10%"
          w="300px"
          h="300px"
          bg="blue.200"
          borderRadius="full"
          filter="blur(100px)"
          opacity="0.3"
        />
     

        <Container maxW="7xl" position="relative" zIndex={1}>
          <VStack gap={4} mb={12}>
            <Badge
              bg="blue.600"
              color="white"
              px={4}
              py={1.5}
              borderRadius="full"
              fontSize="sm"
              data-aos="fade-up"
            >
              Trusted Partners
            </Badge>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              color="black"
              textAlign="center"
              data-aos="fade-up"
              data-aos-delay="100"
              letterSpacing="tight"
            >
              Our <Box as="span" color="blue.600">Loan Partners</Box>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              textAlign="center"
              maxW="2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We work with partners who believe in <Box as="span" fontWeight="bold" color="blue.600">"quality over quantity"</Box> and
              strive for excellence.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} gap={10}>
            {partners.map((partner, index) => {
              const gradientIndex = index % gradientColors.length;
              return (
                <Box
                  key={index}
                  position="relative"
                  data-aos="flip-up"
                  data-aos-delay={partner.delay || index * 50}
                  transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  _hover={{
                    transform: "translateY(-8px) scale(1.02)",
                    zIndex: 10,
                  }}
                  cursor="pointer"
                >
                  {/* Glowing border effect */}
            

                  <Box
                    bg="white"
                    borderRadius="2xl"
                    p={6}
                    boxShadow="lg"
                    border="1px solid"
                    borderColor="gray.100"
                    transition="all 0.4s ease"
                    position="relative"
                    _hover={{
                      boxShadow: "2xl",
                      borderColor: "blue.200",
                    }}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minH="120px"
                  >
                    {/* Hover shine effect */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)"
                      opacity="0"
                      transition="opacity 0.6s ease"
                      _groupHover={{ opacity: 1 }}
                      borderRadius="2xl"
                      pointerEvents="none"
                    />

                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={100}
                      height={50}
                      className="object-contain"
                      style={{
                        filter: "grayscale(0%)",
                        transition: "all 0.3s ease",
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.png";
                      }}
                    />
                  </Box>
                </Box>
              );
            })}
          </SimpleGrid>

          {/* Trust indicator */}
          <Box
            mt={12}
            textAlign="center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <HStack
              justify="center"
              gap={6}
              flexWrap="wrap"
              bg="white"
              px={8}
              py={4}
              borderRadius="full"
              boxShadow="sm"
              maxW="xl"
              mx="auto"
            >
              <HStack gap={1}>
                <Box as="span" fontSize="lg">⭐</Box>
                <Text fontSize="sm" color="gray.600">4.8/5 Rating</Text>
              </HStack>
              <Box w="1px" h="6" bg="gray.200" />
              <HStack gap={1}>
                <Box as="span" fontSize="lg">🏆</Box>
                <Text fontSize="sm" color="gray.600">15+ Awards</Text>
              </HStack>
              <Box w="1px" h="6" bg="gray.200" />
              <HStack gap={1}>
                <Box as="span" fontSize="lg">👥</Box>
                <Text fontSize="sm" color="gray.600">50K+ Customers</Text>
              </HStack>
            </HStack>
          </Box>
        </Container>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
        `}</style>
      </Box>

      {/* How It Works Section */}
      <Box bg="white" py={{ base: 8, md: 12 }}>
        <Container maxW="6xl">
          <VStack gap={4} mb={8}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="black"
              textAlign="center"
            >
              How It Works
            </Heading>
            <Text color="gray.600" textAlign="center" maxW="2xl">
              Our simple three-step process gets you from application to approval—fast.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} mt={8}>
            {steps.map((step, index) => (
              <Box
                key={index}
                textAlign="center"
                border="1px"
                borderColor="gray.300"
                borderRadius="xl"
                p={6}
                transition="all 0.3s ease"
                _hover={{
                  boxShadow: "lg",
                  transform: "translateY(-4px)",
                }}
                data-aos="fade-up"
                data-aos-delay={step.delay}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  data-aos="zoom-in"
                  data-aos-delay={step.delay}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={200}
                    height={130}
                    className="object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png";
                    }}
                  />
                </Box>
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="semibold"
                  mt={4}
                  color="black"
                >
                  {step.title}
                </Heading>
                <Text color="gray.600" mt={2}>
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        position="relative"
        w="full"
        minH="600px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        {/* Background Image */}
        <Box
          position="absolute"
          inset={0}
          bgImage="url('/fintech.avif')"
          bgSize="cover"
          bgRepeat="no-repeat"
        />

        {/* Overlay */}
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.500"
        />

        {/* Content */}
        <Container
          position="relative"
          zIndex={10}
          maxW="3xl"
          px={4}
          textAlign="center"
        >
          {/* Top Badge - Fixed Link */}
          <HStack
            gap={2}
            bg="whiteAlpha.900"
            px={4}
            py={2}
            borderRadius="full"
            mb={6}
            display="inline-flex"
            boxShadow="md"
          >
            <Link href="/Contact" passHref legacyBehavior>
              <Badge
                as="a"
                bg="blue.600"
                color="white"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                cursor="pointer"
                _hover={{
                  bg: "blue.700",
                }}
              >
                New
              </Badge>
            </Link>
            <Link href="/Contact" passHref legacyBehavior>
              <Text
                as="a"
                color="black"
                fontSize="sm"
                cursor="pointer"
                _hover={{
                  color: "blue.600",
                }}
              >
                Any Query? Contact us. We're here 24/7 →
              </Text>
            </Link>
          </HStack>

          {/* Heading */}
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="white"
            lineHeight="tight"
          >
            Empowering Dreams, Financing the Future
          </Heading>

          {/* Paragraph */}
          <Text
            mt={2}
            color="white"
            fontSize={{ base: "md", md: "lg" }}
          >
            At KeshvaCredit, we connect borrowers with the right lenders, using
            technology and innovation to unlock financial opportunities and growth.
          </Text>

          {/* CTA Button - Fixed Navigation */}
          <Button
            mt={6}
            bg="blue.600"
            color="white"
            size="lg"
            _hover={{
              bg: "blue.700",
              transform: "scale(1.05)",
            }}
            transition="all 0.3s ease"
            onClick={() => handleNavigation("/Contact")}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
}