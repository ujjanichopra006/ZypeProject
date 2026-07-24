"use client";

import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationPage() {
  const locations = [
    "Mumbai", "Bangalore", "Delhi", "Kerala",
    "Chennai", "Hyderabad", "Noida", "Kanchipuram",
    "Kolkata", "Coimbatore", "Pune", "Ahmedabad",
    "Patna", "Jaipur", "Bhubaneswar", "Lucknow",
    "Nagpur", "Agra", "Kochi", "Indore"
  ];

  // Hardcoded dark theme values (Chakra v3; app uses dark theme)
  const bgGradient = "linear(to-r, gray.600, black, green.900)";
  const cardBg = "gray.700";
  const cardHoverBg = "gray.600";
  const textColor = "gray.300";
  const headingColor = "white";

  return (
    <Box
      minH="100vh"
      bgGradient={bgGradient}
      py={8}
      px={4}
    >
      <Container maxW="container.xl">
        {/* Heading Section */}
        <VStack gap={2} mb={10}>
          <Icon as={FaMapMarkerAlt} boxSize={10} color="green.300" />
          <Heading
            as="h1"
            size="2xl"
            color="white"
            textAlign="center"
            fontWeight="bold"
            letterSpacing="wide"
            textShadow="2px 2px 4px rgba(0,0,0,0.3)"
          >
            Personal Loan By Location
          </Heading>
          <Text color="gray.300" fontSize="md" textAlign="center">
            Find the best personal loan options in your city
          </Text>
        </VStack>

        {/* Grid Section */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
          width="100%"
        >
          {locations.map((city, index) => (
            <GridItem key={index}>
              <Box
                bg={cardBg}
                p={6}
                borderRadius="xl"
                textAlign="center"
                boxShadow="sm"
                transition="all 0.3s ease"
                cursor="pointer"
                _hover={{
                  transform: "scale(1.05) translateY(-8px)",
                  boxShadow: "xl",
                  bg: cardHoverBg,
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
                borderWidth="1px"
                borderColor="transparent"
              >
                <Text
                  fontSize="sm"
                  color={textColor}
                  fontWeight="medium"
                  mb={1}
                >
                  Personal Loan in
                </Text>
                <Heading
                  as="h2"
                  size="md"
                  color={headingColor}
                  fontWeight="semibold"
                  mt={1}
                >
                  {city}
                </Heading>
                <Box
                  mt={3}
                  h="2px"
                  w="40px"
                  bg="green.400"
                  mx="auto"
                  borderRadius="full"
                  opacity={0}
                  _groupHover={{ opacity: 1 }}
                  transition="opacity 0.3s ease"
                />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
