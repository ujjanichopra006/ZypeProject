"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import homeLoanAnimation from "@/animations/homeLoan.json";
import Second from "../../app/About/page2";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box w="full" minH="100vh" bg="#0b1220" color="white">
      {/* Hero Section */}
      <Box
        position="relative"
        w="full"
        h={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        bgImage="url('/loan marketplace.jpg')"
        bgSize="cover"
       
        bgRepeat="no-repeat"
      >
        <Box position="absolute" inset={0} bg="blackAlpha.700" />
        
        <Box position="relative" zIndex={1} maxW="5xl" px={4}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            lineHeight="tight"
          >
            1ST Loan{" "}
            <Text as="span" color="orange.500">
              Marketplace
            </Text>{" "}
            – Simplifying Your{" "}
            <Text as="span" color="orange.500">
              Loan Journey
            </Text>
          </Heading>

          <Text
            mt={6}
            color="gray.200"
            fontSize={{ base: "sm", md: "lg" }}
            maxW="2xl"
            mx="auto"
          >
            Simplifying the Borrowing Experience with Instant Approvals, Best Interest Rates,
            and Trusted Lenders for Personal, Business, and Emergency Loans.
            Unlock Your Loan Options. India's Top Lender Compared
          </Text>
        </Box>
      </Box>

      {/* Who We Are Section */}
      <Box bg="white" color="black" py={{ base: 16, md: 20 }}>
        <Container maxW="6xl">
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            gap={{ base: 10, md: 0 }}
          >
            <Box flex="1" pr={{ md: 10 }} data-aos="fade-right">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={6}
              >
                Who We Are
              </Heading>

              <Text
                color="gray.600"
                lineHeight="relaxed"
                fontSize={{ base: "sm", md: "base" }}
              >
                At KeshvaCredit, we revolutionize the lending experience by connecting borrowers with trusted lenders.
                We make securing a loan fast and stress-free. Our platform is designed to simplify the entire loan journey,
                offering a seamless, transparent, and secure experience for every user. Whether you're looking for a personal loan,
                business loan, home loan, or gold loan, we help you compare trusted lending partners and choose the best option
                based on your needs. With a customer-first approach, quick approvals, minimal paperwork, and reliable support,
                KeshvaCredit is committed to making financing easier, faster, and more accessible for everyone.
              </Text>
            </Box>

            <Box flex="1" display="flex" justifyContent="center" data-aos="fade-left">
              <Box
                w={{ base: "200px", md: "300px" }}
                maxW="400px"
              >
                <Lottie
                  animationData={homeLoanAnimation}
                  loop
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* What Makes Us Special Section */}
      <Box bg="#0f172a" py={{ base: 16, md: 20 }} px={4} textAlign="center">
        <Container maxW="4xl">
          <Heading
            as="h2"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            mb={6}
            color="white"
            data-aos="fade-up"
          >
            What Makes Us Special
          </Heading>

          <Text
            color="gray.300"
            lineHeight="relaxed"
            fontSize={{ base: "sm", md: "base" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At KeshvaCredit, we believe financial solutions should be simple, transparent,
            and tailored. We empower you with seamless digital experiences and peace of mind.
            Compare Loans, Get More. Your Best Rates, All in One Place.
          </Text>
        </Container>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={4}
          maxW="4xl"
          mx="auto"
          mt={10}
          px={{ base: 4, md: 0 }}
        >
          {[
            { src: "/fast approval.jpg", alt: "Fast Approval", delay: 0 },
            { src: "/quick disbursal.png", alt: "Quick Disbursal", delay: 100 },
            { src: "/100% paperless.png", alt: "100% Paperless", delay: 200 },
            { src: "/wide product range.png", alt: "Wide Product Range", delay: 300 },
            { src: "/hassle free docs.png", alt: "Hassle Free Docs", delay: 400 },
            { src: "/safe data ecosystem.png", alt: "Safe Data Ecosystem", delay: 500 },
          ].map((item, index) => (
            <GridItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={4}
              data-aos="zoom-in"
              data-aos-delay={item.delay}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={100}
                height={70}
                className="object-contain"
              />
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Second />
    </Box>
  );
}
