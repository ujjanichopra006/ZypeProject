"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  SimpleGrid,
  GridItem,
  Icon,
  VStack,
} from "@chakra-ui/react";

import { FaBolt, FaArrowRight } from "react-icons/fa";

export default QuickLinksContent;
const tabs = ["Personal Loan", "Business Loan", "Home Loan", "Gold Loan"];

const loans = [
  {
    name: "Olyv",
    logo: "/olyv.png",
    category: "Personal Loan",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
    website: "https://www.olyv.co.in",
  },
  {
    name: "PayMe",
    logo: "/payme.png",
    category: "Personal Loan",
    rate: "Starting 1.5% per month",
    max: "Up to ₹4 Lakhs",
    website: "https://paymeindia.in",
  },
  {
    name: "Hero Fincorp",
    logo: "/Hero fincorp.jpg",
    category: "Personal Loan",
    rate: "19% to 29% per annum",
    max: "₹50,000 - ₹5,00,000",
    website: "https://www.herofincorp.com",
  },
  {
    name: "NEXI Loans",
    logo: "/NEXT Loans.png",
    category: "Personal Loan",
    rate: "Up to 20% per annum",
    max: "Up to ₹1 Lakh",
    website: "https://www.nexiloans.com",
  },
  {
    name: "CapitalNow",
    logo: "/capitalnow.png",
    category: "Personal Loan",
    rate: "18% to 36% per annum",
    max: "Up to ₹3 Lakhs",
    website: "https://capitalnow.in",
  },
  {
    name: "Zype",
    logo: "/Zype.png",
    category: "Personal Loan",
    rate: "Up to 1.5% per month",
    max: "Up to ₹3 Lakhs",
    website: "https://www.zype.in",
  },
  {
    name: "RamFin",
    logo: "/Ramfin.png",
    category: "Personal Loan",
    rate: "0.35% to 0.80% per day",
    max: "Up to ₹5 Lakhs",
    website: "https://ramfincorp.com",
  },
  {
    name: "Fatakpay",
    logo: "/Fatakpay.jpg",
    category: "Personal Loan",
    rate: "12% to 35.95% per annum",
    max: "Up to ₹5 Lakhs",
    website: "https://fatakpay.com",
  },
  {
    name: "CreditSea",
    logo: "/CreditSea.png",
    category: "Personal Loan",
    rate: "14% to 36% per annum",
    max: "Up to ₹5 Lakhs",
    website: "https://creditsea.com",
  },
  {
    name: "TrustPaisa",
    logo: "/trustpaisa.png",
    category: "Personal Loan",
    rate: "18.25% to 36% per annum",
    max: "Up to ₹1 Lakh",
    website: "https://trustpaisa.com",
  },
  {
    name: "Protium",
    logo: "/protium.png",
    category: "Business Loan",
    rate: "10.5% to 30% per annum",
    max: "Up to ₹5 Crores",
    website: "https://protium.co.in",
  },
  {
    name: "Muthoot FinCorp",
    logo: "/Muthoot fincorp.png",
    category: "Business Loan",
    rate: "11% to 15% per annum",
    max: "Up to ₹5 Crores",
    website: "https://www.muthootfincorp.com",
  },
  {
    name: "Faircent",
    logo: "/faircent.png",
    category: "Business Loan",
    rate: "12% per annum",
    max: "Up to ₹2 Crores",
    website: "https://www.faircent.com",
  },
  {
    name: "FlexiLoans",
    logo: "/flexiloans.png",
    category: "Business Loan",
    rate: "12% to 18% per annum",
    max: "Up to ₹1 Crore",
    website: "https://flexiloans.com",
  },
  {
    name: "Bajaj Housing Finance",
    logo: "/bajaj housing.jpg",
    category: "Home Loan",
    rate: "7.49% per annum",
    max: "Up to ₹5 Crores",
    website: "https://www.bajajhousingfinance.in",
  },
  {
    name: "Dvara Money",
    logo: "/Dvara Money.jpg",
    category: "Gold Loan",
    rate: "24% to 27% per annum",
    max: "Up to ₹5 Lakhs",
    website: "https://dvaramoney.com",
  },
];

function QuickLinksContent() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState("Personal Loan");

  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(decodeURIComponent(tabFromUrl));
    }
  }, [tabFromUrl]);

  const filteredLoans = loans.filter((loan) => loan.category === activeTab);

  return (
    <Box minH="100vh" bg="blue.50" px={{ base: 4, md: 6 }} py={{ base: 8, md: 10 }} mt={20}>
      <Container maxW="6xl">
        {/* Header Section */}
        <Box
          borderRadius="2xl"
          bgGradient="linear(to-r, blue.600, purple.600, pink.500)"
          p={{ base: 8, md: 10 }}
          textAlign="center"
          position="relative"
          overflow="hidden"
          boxShadow="0 20px 60px rgba(59, 130, 246, 0.2)"
        >
          {/* Decorative Shapes */}
          <Box
            position="absolute"
            top="-50%"
            right="-20%"
            w="300px"
            h="300px"
            bg="whiteAlpha.200"
            borderRadius="full"
          />
          <Box
            position="absolute"
            bottom="-40%"
            left="-10%"
            w="200px"
            h="200px"
            bg="whiteAlpha.100"
            borderRadius="full"
          />

          <Box position="relative" zIndex={1}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "4xl",}}
              fontWeight="bold"
              color="blue.800"
            >
              Quick Links
            </Heading>
            <Text
              mt={4}
              fontSize={{ base: "sm", md: "md" }}
              maxW="2xl"
              mx="auto"
              color="blue.600"
            >
              Financial Freedom Starts with the Right Loan. We Help You Find It.
            </Text>
          </Box>
        </Box>

        {/* Tabs */}
        <HStack
          gap={3}
          justifyContent="center"
          mt={8}
          mb={10}
          flexWrap="wrap"
        >
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              px={6}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
              bg={activeTab === tab ? "blue.600" : "white"}
              color={activeTab === tab ? "white" : "blue.700"}
              border="2px"
              borderColor={activeTab === tab ? "blue.600" : "blue.200"}
              boxShadow={activeTab === tab ? "0 4px 12px rgba(59, 130, 246, 0.3)" : "sm"}
              _hover={{
                bg: activeTab === tab ? "blue.700" : "blue.50",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
                borderColor: activeTab === tab ? "blue.700" : "blue.400",
              }}
              transition="all 0.3s"
              size="md"
              minW="120px"
            >
              {tab}
            </Button>
          ))}
        </HStack>

        {/* Loan Cards Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={6}>
          {filteredLoans.length > 0 ? (
            filteredLoans.map((loan) => (
              <Box
                key={loan.name}
                borderRadius="2xl"
                border="1px"
                borderColor="blue.100"
                bg="white"
                p={6}
                boxShadow="0 10px 30px rgba(30, 64, 175, 0.06)"
                _hover={{
                  boxShadow: "0 20px 50px rgba(59, 130, 246, 0.15)",
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease",
                  borderColor: "blue.300",
                }}
                transition="all 0.3s ease"
              >
                <HStack gap={4} alignItems="center">
                  {/* Logo */}
                  <Box 
                    flexShrink={0}
                    bg="blue.50"
                    p={2}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="blue.100"
                  >
                    <Image
                      src={loan.logo}
                      alt={loan.name}
                      width={60}
                      height={60}
                      className="object-contain rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.png";
                      }}
                    />
                  </Box>

                  {/* Loan Details */}
                  <Box flex="1">
                    <Heading as="h2" fontSize="xl" fontWeight="bold" color="blue.900" mb={2}>
                      {loan.name}
                    </Heading>
                    <Text fontSize="sm" color="blue.700">
                      • Interest Rate: {loan.rate}
                    </Text>
                    <Text fontSize="sm" color="blue.700" mt={1}>
                      • Max Loan: {loan.max}
                    </Text>
                  </Box>
                </HStack>

                {/* Feature Badge */}
                <Box mt={4} bg="blue.50" p={3} borderRadius="lg" border="1px solid" borderColor="blue.100">
                  <HStack gap={2}>
                    <Icon as={FaBolt} color="orange.500" boxSize={4} />
                    <Text fontSize="sm" color="blue.800" fontWeight="medium">
                      Fast approval with minimal documents
                    </Text>
                  </HStack>
                </Box>

                {/* Apply Button */}
                <a
                  href={loan.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", textDecoration: "none" }}
                >
                  <Button
                    mt={5}
                    w="full"
                    bg="blue.600"
                    color="white"
                    _hover={{
                      bg: "blue.700",
                      transform: "scale(1.02)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                    }}
                    _active={{
                      bg: "blue.800",
                    }}
                    borderRadius="lg"
                    fontWeight="medium"
                    py={6}
                    transition="all 0.2s ease"
                  >
                    <HStack gap={2} justify="center" width="full">
                      <Text>Apply Now</Text>
                      <Icon as={FaArrowRight} boxSize={4} />
                    </HStack>
                  </Button>
                </a>
              </Box>
            ))
          ) : (
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Box 
                textAlign="center" 
                py={10}
                bg="white"
                borderRadius="2xl"
                border="1px solid"
                borderColor="blue.100"
                boxShadow="0 10px 30px rgba(30, 64, 175, 0.06)"
              >
                <VStack gap={3}>
                  <Text fontSize="lg" color="blue.700" fontWeight="medium">
                    🚧 No lenders available for this category yet
                  </Text>
                  <Text fontSize="sm" color="blue.600">
                    Please check back later for more options.
                  </Text>
                </VStack>
              </Box>
            </GridItem>
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}