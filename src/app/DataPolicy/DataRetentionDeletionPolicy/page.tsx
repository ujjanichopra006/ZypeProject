"use client";

import { type ReactNode } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  FaCheckCircle,
  FaShieldAlt,
  FaDatabase,
  FaTrashAlt,
  FaClock,
  FaExclamationTriangle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function PolicyList({ children, ...props }: { children: ReactNode } & any) {
  return (
    <VStack as="ul" align="stretch" gap={2} listStyleType="none" {...props}>
      {children}
    </VStack>
  );
}

function PolicyListItem({
  icon,
  children,
  textProps,
  ...props
}: { icon: any; children: ReactNode; textProps?: any } & any) {
  return (
    <HStack as="li" align="flex-start" gap={3} {...props}>
      <Icon as={icon} boxSize={4} color="green.400" mt="4px" flexShrink={0} />
      <Text flex="1" {...textProps}>
        {children}
      </Text>
    </HStack>
  );
}

export default function DataRetentionDeletionPolicy() {
  const bgColor = "#020f26";
  const textColor = "white";
  const textColorSecondary = "gray.200";
  const textColorMuted = "gray.300";
  const cardBg = "#081a3d";
  const borderColor = "blue.500";
  const headingColor = "blue.400";
  const dividerColor = "gray.700";

  const sections = [
    {
      id: "purpose",
      title: "1. Purpose",
      icon: FaShieldAlt,
      content: (
        <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
          The purpose of this policy is to define how KeshvaCredit Services Pvt. Ltd.
          ("Company", "we", "our") retains, manages, and deletes customer, employee,
          and business data in compliance with applicable legal, regulatory, and
          contractual requirements while ensuring data protection and privacy.
        </Text>
      ),
    },
    {
      id: "scope",
      title: "2. Scope",
      icon: FaDatabase,
      content: (
        <PolicyList pl={{ base: 4, md: 6 }}>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            All personal, financial, transactional, and technical data.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            Employees, contractors, and third-party service providers.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            All digital and physical storage systems used by the company.
          </PolicyListItem>
        </PolicyList>
      ),
    },
    {
      id: "retention",
      title: "3. Data Retention Guidelines",
      icon: FaClock,
      content: (
        <PolicyList pl={{ base: 4, md: 6 }}>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }}  color={textColorMuted}>
            <Text as="span" fontWeight="semibold">KYC & Regulatory Records:</Text> Retained 5–10 years as per
            RBI/DCA or legal requirements.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Financial Transactions:</Text> Retained 7–10 years for audit,
            compliance, and dispute resolution.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Customer Communications:</Text> Retained up to 3 years unless
            longer required.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Employee Records:</Text> Retained during employment + statutory period.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }}color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Technical / Log Data:</Text> Retained up to 2 years for security
            and troubleshooting.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Marketing Data:</Text> Retained until consent is withdrawn.
          </PolicyListItem>
        </PolicyList>
      ),
    },
    {
      id: "deletion",
      title: "4. Data Deletion & Disposal",
      icon: FaTrashAlt,
      content: (
        <PolicyList pl={{ base: 4, md: 6 }}>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }}  color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Secure Digital Deletion:</Text> Data is permanently erased using
            industry-standard wiping methods.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Physical Records:</Text> Paper documents are shredded or destroyed securely.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Third-Party Systems:</Text> Vendors must follow strict deletion protocols.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Customer Requests:</Text> Data is deleted upon verified request,
            subject to legal requirements.
          </PolicyListItem>
        </PolicyList>
      ),
    },
    {
      id: "exceptions",
      title: "5. Exceptions",
      icon: FaExclamationTriangle,
      content: (
        <PolicyList pl={{ base: 4, md: 6 }}>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            Legal or regulatory obligations.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            Court orders or government directives.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            Fraud prevention or ongoing investigations.
          </PolicyListItem>
          <PolicyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            Legitimate business interests under applicable law.
          </PolicyListItem>
        </PolicyList>
      ),
    },
    {
      id: "review",
      title: "6. Policy Review & Updates",
      icon: FaClock,
      content: (
        <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
          This policy is reviewed at least annually or whenever required due to
          regulatory, operational, or technological changes.
        </Text>
      ),
    },
  ];

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={{ base: 8, md: 12 }}>
      <Container maxW="5xl" px={{ base: 5, md: 8 }}>
        {/* Header Section */}
        <VStack align="stretch" gap={2} mb={8}>
          <HStack gap={3}>
            <Icon as={FaDatabase} boxSize={8} color="blue.400" />
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Data Retention & Deletion Policy
            </Heading>
          </HStack>

          <Text fontSize="sm" fontWeight="semibold" color={textColorSecondary}>
            KeshvaCredit Services Pvt. Ltd.
          </Text>

          <HStack gap={2} fontSize="xs" color="gray.400" flexWrap="wrap">
            <Badge colorScheme="blue" variant="subtle" px={3} py={1} borderRadius="full">
              Effective Date: Aug 18, 2025
            </Badge>
            <Text>|</Text>
            <Badge colorScheme="purple" variant="subtle" px={3} py={1} borderRadius="full">
              Version: 1.0
            </Badge>
          </HStack>

          <Box h="1px" bg={dividerColor} />
        </VStack>

        {/* Content Sections */}
        <VStack gap={8} align="stretch">
          {sections.map((section, index) => (
            <Box
              key={index}
              id={section.id}
              borderLeft="4px"
              borderLeftColor={headingColor}
              pl={{ base: 3, md: 4 }}
              _hover={{
                borderLeftColor: "blue.300",
                transition: "all 0.3s",
              }}
            >
              <HStack gap={3} mb={2}>
                <Icon as={section.icon} boxSize={5} color={headingColor} />
                <Heading
                  as="h2"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="semibold"
                  color={headingColor}
                >
                  {section.title}
                </Heading>
              </HStack>
              <Box>{section.content}</Box>
            </Box>
          ))}

          {/* Contact Section - Special Styling */}
          <Box
            id="contact"
            borderLeft="4px"
            borderLeftColor={headingColor}
            pl={{ base: 3, md: 4 }}
          >
            <HStack gap={3} mb={2}>
              <Icon as={FaEnvelope} boxSize={5} color={headingColor} />
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="semibold"
                color={headingColor}
              >
                7. Contact Information
              </Heading>
            </HStack>

            <Box
              bg={cardBg}
              border="1px"
              borderColor={`${borderColor}30`}
              borderRadius="lg"
              p={5}
              mt={3}
            >
              <VStack align="stretch" gap={2}>
                <Text fontWeight="bold" color="white">
                  Data Protection Officer (DPO)
                </Text>
                <Text fontSize="sm" color={textColorMuted}>
                  KeshvaCredit Services Pvt. Ltd.
                </Text>
                <HStack gap={2} fontSize="sm" color={textColorMuted}>
                  <Icon as={FaEnvelope} boxSize={4} color="blue.400" />
                  <ChakraLink
                    href="mailto:info@keshvacredit.in"
                    color="blue.400"
                    _hover={{ textDecoration: "underline" }}
                  >
                    info@keshvacredit.in
                  </ChakraLink>
                </HStack>
                <HStack gap={2} fontSize="sm" color={textColorMuted}>
                  <Icon as={FaPhone} boxSize={4} color="blue.400" />
                  <ChakraLink
                    href="tel:8901229195"
                    color="blue.400"
                    _hover={{ textDecoration: "underline" }}
                  >
                    8901229195
                  </ChakraLink>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}