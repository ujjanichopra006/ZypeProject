"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  ChakraProvider,
  
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

// Simple theme
const theme = {
  styles: {
    global: {
      body: {
        bg: "linear-gradient(180deg, #03112b 0%, #050b1a 50%, #020817 100%)",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      },
    },
  },
};

// Custom hook for color mode values
function useColorModeValue(light: any, dark: any) {
  // const { colorMode } = useColorMode();
  // return colorMode === "light" ? light : dark;
}

function EmiCalculatorsContent() {
  const cards = [
    {
      title: "Personal Loan Calculator",
      desc: "Instantly calculate EMI and plan your personal loan get clear monthly breakdown so you always know exactly what you need to pay.",
      image: "/personal icon.png",
      link: "/emicalculators/personalloancalculator",
    },
    {
      title: "Home Loan Calculator",
      desc: "Plan your dream home with accurate EMI breakdown and interest details understand your monthly payment before you take any loan decision.",
      image: "/home icon.png",
      link: "/emicalculators/homeloancalculator",
    },
    {
      title: "Business Loan Calculator",
      desc: "Smart EMI planning for your business growth and investments track your monthly payments easily and keep your cash flow stable.",
      image: "/business icon.png",
      link: "/emicalculators/businessloancalculator",
    },
    {
      title: "Gold Loan Calculator",
      desc: "Manage your gold loan EMI with simple and accurate calculations get a clear breakdown of monthly payments, interest, and total repayment.",
      image: "/gold icon.png",
      link: "/emicalculators/goldloancalculator",
    },
  ];

  // Color mode values using custom hook
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.100", "gray.600");
  const titleColor = useColorModeValue("#0b1b3a", "white");
  const descColor = useColorModeValue("gray.600", "gray.300");
  const iconBg = useColorModeValue("blue.50", "blue.900");
  const buttonBg = useColorModeValue("blue.600", "blue.500");
  const buttonHoverBg = useColorModeValue("blue.700", "blue.600");

  return (
    <Box
      bgGradient="linear(to-b, #03112b, #050b1a, #020817)"
      py={{ base: 10, md: 14 }}
      px={{ base: 4, md: 6 }}
      minH="100vh"
      width="100%"
    >
      <Container maxW="7xl" mx="auto" px={{ base: 4, md: 6 }}>
        <Heading
          as="h1"
          textAlign="center"
          color="white"
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={{ base: 8, md: 12 }}
          letterSpacing="wide"
        >
          EMI Calculators
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: 6, md: 8 }}
          justifyItems="center"
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              width="100%"
              maxW="280px"
              height="280px"
              borderRadius="2xl"
              boxShadow="md"
              border="1px solid"
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              transition="all 0.3s ease-in-out"
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-8px)",
                borderColor: "blue.400",
              }}
            >
              <VStack align="flex-start" gap={3} flex="1">
                <HStack gap={4} align="center" width="100%">
                  <Box
                    width="48px"
                    height="48px"
                    borderRadius="xl"
                    // bg={iconBg}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="sm"
                    transition="all 0.3s ease-in-out"
                    flexShrink={0}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={28}
                      height={28}
                      className="object-contain"
                      style={{ width: 28, height: 28 }}
                    />
                  </Box>

                  <Heading
                    as="h2"
                    fontSize="16px"
                    fontWeight="bold"
                    flex="1"
                  >
                    {card.title}
                  </Heading>
                </HStack>

                <Text
                  fontSize="xs"
                  mt={1}
                  flex="1"
                >
                  {card.desc}
                </Text>
              </VStack>

              <Link href={card.link} passHref legacyBehavior>
                <Button
                  as="a"
                  width="100%"
                  // bg={buttonBg}
                  color="white"
                  fontSize="sm"
                  fontWeight="semibold"
                  py={2.5}
                  borderRadius="xl"
                  _hover={{
                    // bg: buttonHoverBg,
                    transform: "scale(0.95)",
                  }}
                  transition="all 0.3s ease-in-out"
                  // rightIcon={<FiArrowRight />}
                >
                  Check Now
                </Button>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default function EmiCalculators() {
  return (
    // <ChakraProvider theme={theme}>
      <EmiCalculatorsContent />
    // </ChakraProvider>
  );
}