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

  return (
    <Box>
      {/* Loan Partners Section */}
      <Box bg="blue.50" py={{ base: 8, md: 6 }}>
        <Container maxW="7xl">
          <VStack gap={4} mb={12}>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="black"
              textAlign="center"
              data-aos="fade-up"
            >
              Our Loan Partners
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.800"
              textAlign="center"
              maxW="2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We work with partners who believe in "quality over quantity" and
              strive for excellence.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 2, md: 5 }} gap={4}>
            {partners.map((partner, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={4}
                data-aos="zoom-in"
                data-aos-delay={partner.delay}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={100}
                  height={70}
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.png";
                  }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
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