"use client";

import Link from "next/link";
import {
  ShieldCheck,
  UserLock,
  FileText,
  Archive,
  Info,
  ArrowRight,
} from "lucide-react";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Badge,
  Button,
} from "@chakra-ui/react";

const policies = [
  {
    title: "Data Breach Policy",
    desc: "Outlines the steps we take to detect, respond to, and notify you in the event of a data breach.",
    icon: ShieldCheck,
    bg: "blue.500",
    lightBg: "blue.50",
    link: "/DataBreachPolicy",
  },
 
  {
    title: "Data Protection Policy",
    desc: "Details the security measures and compliance standards we follow to protect your data.",
    icon: FileText,
    bg: "red.500",
    lightBg: "red.50",
    link: "/DataPolicy/DataProtectionPolicy",
  },
  {
    title: "Data Retention & Deletion Policy",
    desc: "Clarifies how long we store your data and the process for safely deleting .",
    icon: Archive,
    bg: "purple.500",
    lightBg: "purple.50",
    link: "/DataPolicy/DataRetentionDeletionPolicy",
  },
  {
    title: "Information Security Policy",
    desc: "Covers the practices, tools, and protocols we use to ensure your data remains safe and secure.",
    icon: Info,
    bg: "orange.500",
    lightBg: "orange.50",
    link: "/DataPolicy/InformationSecurityPolicy",
  },
];

export default function DataPolicy() {
  // Add a new policy if needed (simulating 6th card for better grid)
  const allPolicies = [...policies];

  return (
    <Box bg="blue.50" minH="100vh" py={{ base: 12, md: 16 }} px={{ base: 4, md: 6 }} mt="10">
      <Container maxW="7xl">
        {/* Header Section */}
        <VStack gap={4} mb={12} textAlign="center">
          <Badge
            colorScheme="blue"
            fontSize="xs"
            px={4}
            py={2}
            borderRadius="full"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Trust & Security
          </Badge>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            color="blue.900"
            letterSpacing="tight"
          >
            Our Data Policies
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color="blue.700"
            maxW="2xl"
            mx="auto"
          >
            Learn about how we handle your data and keep it secure with
            industry-standard practices and protocols.
          </Text>
        </VStack>

        {/* Policy Cards Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
          {allPolicies.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <Box
                as="a"
                bg="white"
                borderRadius="2xl"
                p={6}
                minH="220px"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                boxShadow="0 10px 30px rgba(30, 64, 175, 0.08)"
                border="2px"
                borderColor="blue.100"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 50px rgba(30, 64, 175, 0.15)",
                  borderColor: item.bg,
                  transition: "all 0.3s ease",
                }}
                transition="all 0.3s ease"
                cursor="pointer"
                position="relative"
                overflow="hidden"
              >
                {/* Colored Accent Bar */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bg={item.bg}
                />

                {/* Icon with Circle Background */}
                <Box
                  display="inline-flex"
                  p={3}
                  borderRadius="xl"
                  bg={item.lightBg}
                  color={item.bg}
                  alignSelf="flex-start"
                  mb={3}
                >
                  <Icon as={item.icon} boxSize={6} />
                </Box>

                {/* Content */}
                <VStack align="flex-start" gap={2} flex="1">
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontWeight="bold"
                    color="blue.900"
                  >
                    {item.title}
                  </Heading>
                  <Text fontSize="sm" color="blue.700">
                    {item.desc}
                  </Text>
                </VStack>

                {/* Read More Link */}
                <HStack
                  mt={4}
                  gap={1}
                  color={item.bg}
                  fontWeight="semibold"
                  fontSize="sm"
                  _groupHover={{ gap: 2 }}
                >
                  <Text>Read More</Text>
                  <Icon as={ArrowRight} boxSize={4} />
                </HStack>
              </Box>
            </Link>
          ))}
        </SimpleGrid>

        {/* Footer Note */}
        <Box mt={16} textAlign="center">
          <VStack gap={2}>
            <HStack gap={2} justifyContent="center">
              <Badge colorScheme="green" variant="solid" borderRadius="full" px={3} py={1}>
                🔒 Secure
              </Badge>
              <Badge colorScheme="blue" variant="solid" borderRadius="full" px={3} py={1}>
                ✅ Compliant
              </Badge>
              <Badge colorScheme="purple" variant="solid" borderRadius="full" px={3} py={1}>
                📋 Updated
              </Badge>
            </HStack>
            <Text fontSize="xs" color="blue.600">
              All policies are reviewed and updated regularly to ensure compliance with the latest regulations.
            </Text>
          </VStack>
        </Box>
      </Container>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .group:hover .group-hover\\:gap-2 {
          gap: 0.5rem;
        }
      `}</style>
    </Box>
  );
}