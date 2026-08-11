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

const homeloanlender = [
  {
    name: "Bajaj Housing Finance",
    logo: "/bajaj housing.jpg",
    category: "Home Loan",
    rate: "7.49% per annum",
    max: "Up to ₹5 Crores",
    link: "https://www.bajajhousingfinance.in/home-loan",
  },
];

export default function BusinessLoanLender() {
  return (
    <Box minH="100vh" bg="blue.50" px={{ base: 4, md: 6 }} py={{ base: 10, md: 12 }} mt={10} >
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
            Home Loan Lenders
          </Heading>
          <Text
            mt={4}
            fontSize={{ base: "sm", md: "md" }}
            color="blackAlpha.800"
          >
            Choose the best Home Loan lender for your needs.
          </Text>
        </Box>

        {/* Lenders Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          mt={10}
        >
          {homeloanlender.map((loan, index) => (
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