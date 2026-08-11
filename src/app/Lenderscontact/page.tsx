"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Link,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaHandshake, FaBuilding } from "react-icons/fa";

const lenders = [
  { name: "LoanTap", link: "https://loantap.in/contact-us/" },
  { name: "CreditSea", link: "https://www.creditsea.com/contact-us" },
  { name: "TrustPaisa", link: "https://trustpaisa.com/" },
  { name: "Payme", link: "https://www.paymeindia.in/contact/" },
  { name: "Branch", link: "https://branch.co/in/contact-us" },
  { name: "Ram FinCorp", link: "https://www.ramfincorp.com/contact-us" },
  { name: "Zype", link: "https://www.getzype.com/contact-us/" },
  { name: "Moneyview", link: "https://moneyview.in/contact-us" },
  { name: "FatakPay", link: "https://www.fatakpay.com/contact-us" },
  { name: "mPokket", link: "https://www.mpokket.in/contact" },
  { name: "olyv", link: "https://www.olyv.co.in/contactus" },
  { name: "Kamakshi Money", link: "https://www.kamakshimoney.com/contact.html" },
  { name: "SalaryOnTime", link: "https://salaryontime.com/contact-salaryontime" },
  { name: "Instant Mudra", link: "https://www.instantmudra.com/contact.php" },
];

export default function LenderContact() {
  // Professional color scheme
  // const bgGradient = useColorModeValue(
    // "linear(to-br, #0b1a33, #0d2847, #0b1a33)",
    // "linear(to-br, #0b1a33, #0d2847, #0b1a33)"
  // );
  // const cardBg = useColorModeValue("whiteAlpha.100", "whiteAlpha.50");
  // const cardBorder = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  // const headingColor = useColorModeValue("white", "white");
  // const textColor = useColorModeValue("gray.100", "gray.100");

  return (
    <Box
      w="full"
      mt={20}
      minH="100vh"
      bgGradient="linear(to-br, #0b1a33, #0d2847, #0b1a33)"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 6 }}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    >
      <Container maxW="6xl" position="relative" zIndex={1}>
        {/* Header Section */}
        <VStack mb={{ base: 10, md: 14 }} gap={3}>
          <HStack gap={3} mb={1}>
            <Icon as={FaHandshake} color="blue.400" boxSize={{ base: 6, md: 8 }} />
            <Heading
              as="h1"
              textAlign="center"
              color="gray.700"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              letterSpacing="tight"
              // bgGradient="linear(to-r, blue.300, purple.400)"
              // bgClip="text"
              // textShadow="0 0 40px rgba(59,130,246,0.15)"
            >
              Lender Contact
            </Heading>
          </HStack>
          <Text
            color="black"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            maxW="4xl"
            fontWeight="medium"
            letterSpacing="wide"
          >
            Connect directly with trusted lending partners
          </Text>
        </VStack>

        {/* Cards Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} gap={{ base: 5, md: 6 }}>
          {lenders.map((lender, index) => (
            <Card.Root
              key={index}
              bg="gray.100"
              borderColor="white-Alpha.300"
              borderWidth="1px"
              borderRadius="2xl"
              backdropFilter="blur(8px)"
              boxShadow="0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.05)"
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              _hover={{
                transform: "translateY(-6px) scale(1.02)",
                borderColor: "blue.400",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59,130,246,0.15)",
                bg: "whiteAlpha.150",
              }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={{ base: 5, md: 6 }}
              minH="130px"
              position="relative"
              overflow="hidden"
              _after={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                bgGradient: "linear(to-r, transparent, blue.400, purple.400, transparent)",
                opacity: 0,
                transition: "opacity 0.4s",
              }}
              
            >
              {/* Decorative icon */}
              <Box
                position="absolute"
                top={2}
                right={3}
                opacity={0.08}
                fontSize="3xl"
                color="white"
              >
                <Icon as={FaBuilding} />
              </Box>

              {/* Lender Name */}
              <Text
                color="gray.600"
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                textAlign="center"
                mb={4}
                px={2}
                letterSpacing="tight"
                textShadow="0 2px 4px rgba(0,0,0,0.2)"
              >
                {lender.name}
              </Text>

              {/* Contact Button */}
              <Link
                href={lender.link}
                target="_blank"
                rel="noopener noreferrer"
                bgGradient="linear(to-r, blue.500, blue.600)"
                color="blue.600"
                fontSize="xs"
                fontWeight="semibold"
                px={5}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wider"
                transition="all 0.3s"
                display="inline-flex"
                alignItems="center"
                gap={2}
                boxShadow="0 4px 14px rgba(59,130,246,0.25)"
                _hover={{
                  bgGradient: "linear(to-r, blue.600, blue.700)",
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 20px rgba(59,130,246,0.4)",
                  textDecoration: "none",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
              >
                <span>Contact</span>
                <Icon as={FaExternalLinkAlt} boxSize={2.5} opacity={0.8} />
              </Link>
            </Card.Root>
          ))}
        </SimpleGrid>

        {/* Footer note */}
        <Text
          textAlign="center"
          color="black"
          fontSize="xs"
          mt={12}
          opacity={0.7}
          letterSpacing="wide"
        >
          {lenders.length} trusted lending partners • Updated regularly
        </Text>
      </Container>
    </Box>
  );
}