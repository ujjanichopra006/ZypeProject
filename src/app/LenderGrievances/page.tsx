"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Link,
  VStack,
  HStack,
  Image,
  Icon,
} from "@chakra-ui/react";
import { User, Mail, Phone, MapPin } from "lucide-react";

const lenders = [
  {
    name: "Ram Fincorp",
    logo: "https://loans.ramfincorp.com/assets/logo-BpdDq2iL.png",
    officer: "Saourav Kumar",
    email: "info@ramfincorp.com",
    link: "mailto:info@ramfincorp.com",
  },
  {
    name: "zype",
    logo: "https://www.getzype.com/wp-content/uploads/2024/09/Zype_svg_black.svg",
    officer: "Vikas",
    email: "support@getzype.com",
    link: "mailto:support@getzype.com",
  },
  {
    name: "mPokket",
    logo: "https://web.mpokket.in/footer-revamp/fd4778f562d3177f3c72.svg",
    officer: "Ridham",
    email: "support@mpokket.com",
    link: "mailto:support@mpokket.com",
  },
  {
    name: "Olyv",
    logo: "/olyv.png",
    officer: "Moushumi Mukherjee",
    email: "grievance@smartcoin.co.in",
    link: "mailto:grievance@smartcoin.co.in",
  },
  {
    name: "TrustPaisa",
    logo: "https://static.trustpaisa.com/logos/full.svg",
    officer: "Sharath Kumar",
    email: "grievance@trustpaisa.com",
    link: "mailto:grievance@trustpaisa.com",
  },
  {
    name: "FDPL Finance Private Limited",
    logo: "https://www.fdplfinance.com/assets/images/logo/FatakLoans.svg",
    officer: "Ms. Anshika Gupta",
    email: "escalation@fdplfinance.com",
    link: "mailto:escalation@fdplfinance.com",
  },
  {
    name: "Moneyview",
    logo: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
    officer: "Rishov Bhattacharjee",
    email: "grievance@moneyview.in",
    phone: "080 6939 0476",
    address:
      "17/1, 1st and 2nd Floor, The Address Building, Outer Ring Road, Marathahalli, Kadubeesanahalli, Bangalore - 560103",
    link: "mailto:grievance@moneyview.in",
  },
];

export default function LenderGrievance() {
  return (
    <Box minH="100vh" bg="blue.50" py={8} px={{ base: 4, md: 8, lg: 40 }} mt={20}>
      <Container maxW="6xl" mx="auto">
        {/* Heading */}
        <VStack gap={1} mb={7}>
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="blue.900"
            textAlign="center"
          >
            Lender Grievance
          </Heading>
          <Text fontSize="sm" color="blue.700" textAlign="center">
            Direct contact for grievance resolution
          </Text>
        </VStack>

        {/* Cards Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 3 }}
          gap={4}
          justifyItems="center"
        >
          {lenders.map((item, index) => (
            <Card.Root
              key={index}
              w="full"
              maxW="290px"
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              borderColor="blue.100"
              borderWidth="1px"
              boxShadow="0 10px 30px rgba(30, 64, 175, 0.06)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 15px 40px rgba(30, 64, 175, 0.12)",
                borderColor: "blue.300",
              }}
            >
              {/* Logo */}
              <Box
                h="65px"
                borderBottom="1px"
                borderColor="blue.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={3}
                py={2}
                bg="blue.50"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  height="35px"
                  objectFit="contain"
                />
              </Box>

              {/* Card Content */}
              <Box p={3}>
                {/* Company Name */}
                <Text
                  fontSize="16px"
                  fontWeight="semibold"
                  color="blue.900"
                  textAlign="center"
                  mb={4}
                >
                  {item.name}
                </Text>

                {/* Officer */}
                <HStack align="flex-start" gap={2} mb={2.5}>
                  <Icon as={User} boxSize="14px" color="blue.500" mt={0.5} />
                  <Box>
                    <Text fontSize="11px" color="blue.600">
                      Grievance Officer
                    </Text>
                    <Text fontSize="13px" color="blue.900">
                      {item.officer}
                    </Text>
                  </Box>
                </HStack>

                {/* Email */}
                <HStack align="flex-start" gap={2} mb={2.5}>
                  <Icon as={Mail} boxSize="14px" color="blue.500" mt={0.5} />
                  <Box>
                    <Text fontSize="11px" color="blue.600">
                      Contact Email
                    </Text>
                    <Link
                      href={`mailto:${item.email}`}
                      color="blue.600"
                      fontSize="13px"
                      wordBreak="break-all"
                      fontWeight="medium"
                      _hover={{ textDecoration: "underline", color: "blue.700" }}
                    >
                      {item.email}
                    </Link>
                  </Box>
                </HStack>

                {/* Phone */}
                {item.phone && (
                  <HStack align="flex-start" gap={2} mb={2.5}>
                    <Icon as={Phone} boxSize="14px" color="blue.500" mt={0.5} />
                    <Box>
                      <Text fontSize="11px" color="blue.600">
                        Phone Number
                      </Text>
                      <Text fontSize="13px" color="blue.900">
                        {item.phone}
                      </Text>
                    </Box>
                  </HStack>
                )}

                {/* Address */}
                {item.address && (
                  <HStack align="flex-start" gap={2} mb={3}>
                    <Icon as={MapPin} boxSize="14px" color="blue.500" mt={0.5} />
                    <Box>
                      <Text fontSize="11px" color="blue.600">
                        Address
                      </Text>
                      <Text fontSize="12px" color="blue.800">
                        {item.address}
                      </Text>
                    </Box>
                  </HStack>
                )}

                {/* Button */}
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  display="block"
                  w="full"
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.200"
                  py={1.5}
                  textAlign="center"
                  fontSize="13px"
                  fontWeight="medium"
                  color="blue.700"
                  borderRadius="md"
                  transition="all 0.2s"
                  _hover={{
                    bg: "blue.600",
                    color: "white",
                    borderColor: "blue.600",
                    textDecoration: "none",
                  }}
                >
                  Contact Now
                </Link>
              </Box>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}