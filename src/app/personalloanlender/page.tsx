"use client";

import Image from "next/image";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Button,
  Flex,
} from "@chakra-ui/react";

const personalLoanLenders = [
  {
    name: "Olyv",
    logo: "/olyv.png",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
    link: "https://www.olyv.co.in/",
  },
  {
    name: "payme",
    logo: "/payme.png",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
    link: "https://www.paymeindia.in/",
  },
  {
    name: "Hero fincorp",
    logo: "/Hero fincorp.jpg",
    rate: "19% to 29% per annum",
    max: "₹50,000 - ₹5,00,000",
    link: "https://www.herofincorp.com/",
  },
  {
    name: "NEXI Loans",
    logo: "/NEXT Loans.png",
    rate: "Up to 20% per annum",
    max: "Up to ₹1 Lakh",
    link: "https://nexiloans.com/",
  },
  {
    name: "capitalnow",
    logo: "/capitalnow.png",
    rate: "18% to 36% per annum",
    max: "Up to ₹3 Lakhs",
    link: "https://www.capitalnow.in/",
  },
  {
    name: "Zype",
    logo: "/Zype.png",
    rate: "Up to 1.5% per month",
    max: "Up to ₹3 Lakhs",
    link: "https://www.getzype.com/",
  },
  {
    name: "RamFin",
    logo: "/Ramfin.png",
    rate: "0.35% to 0.80% per day",
    max: "Up to ₹5 Lakhs",
    link: "https://www.ramfincorp.com/",
  },
  {
    name: "Fatakpay",
    logo: "/Fatakpay.jpg",
    rate: "12% to 35.95% per annum",
    max: "Up to ₹5 Lakhs",
    link: "https://www.fatakpay.com/",
  },
  {
    name: "CreditSea",
    logo: "/CreditSea.png",
    rate: "14% to 36% per annum",
    max: "Up to ₹5 Lakhs",
    link: "https://www.creditsea.com/",
  },
  {
    name: "trustpaisa",
    logo: "/trustpaisa.png",
    rate: "18.25% to 36% per annum",
    max: "Up to ₹1 Lakh",
    link: "https://trustpaisa.com/",
  },
];

export default function PersonalLoanLenders() {
  return (
    <Box minH="100vh" bg="blue.50" px={{ base: 4, md: 6 }} py={{ base: 10, md: 12 }} mt={10}>
      <Container maxW="6xl">
        {/* Header Section */}
        <Box
          borderRadius="2xl"
          bgGradient="linear(to-r, green.500, cyan.500, blue.600)"
          p={{ base: 8, md: 10 }}
          textAlign="center"
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="black"
          >
            Personal Loan Lenders
          </Heading>
          <Text
            mt={4}
            fontSize={{ base: "sm", md: "md" }}
            color="blackAlpha.800"
          >
            Choose the best Personal Loan lender for your needs.
          </Text>
        </Box>

        {/* Lenders Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          mt={10}
        >
          {personalLoanLenders.map((loan, index) => (
            <GridItem key={index}>
              <Box
                borderRadius="2xl"
                border="1px"
                borderColor="whiteAlpha.200"
                bg="#0f172a"
                p={6}
                boxShadow="lg"
                _hover={{
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                  transition: "all 0.3s ease",
                }}
                transition="all 0.3s ease"
              >
                <Flex gap={4} alignItems="center">
                  {/* Logo */}
                  <Box flexShrink={0}>
                    <Image
                      src={loan.logo}
                      alt={loan.name}
                      width={60}
                      height={60}
                      className="object-contain rounded"
                    />
                  </Box>

                  {/* Lender Details */}
                  <Box flex="1">
                    <Heading as="h2" fontSize="xl" fontWeight="bold" mb={2} color="white">
                      {loan.name}
                    </Heading>
                    <Text fontSize="sm" color="whiteAlpha.800">
                      • Interest Rate: {loan.rate}
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.800" mt={1}>
                      • Max Loan: {loan.max}
                    </Text>
                  </Box>
                </Flex>

                {/* Feature Badge */}
                <Box
                  mt={4}
                  bg="whiteAlpha.100"
                  p={3}
                  borderRadius="lg"
                >
                  <Text fontSize="sm" color="whiteAlpha.800">
                    ⚡ Fast approval with minimal documents
                  </Text>
                </Box>

                {/* Apply Button */}
                <Button
                  onClick={() => window.open(loan.link, "_blank")}
                  mt={5}
                  w="full"
                  bg="blue.600"
                  color="white"
                  _hover={{
                    bg: "blue.700",
                    transform: "scale(1.02)",
                  }}
                  _active={{
                    bg: "blue.800",
                  }}
                  borderRadius="lg"
                  fontWeight="medium"
                  py={6}
                  transition="all 0.2s ease"
                >
                  Apply Now
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}