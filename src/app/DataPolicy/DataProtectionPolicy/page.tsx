"use client";

import { type ComponentProps } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  SimpleGrid,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  FaCheckCircle,
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaServer,
  FaUsers,
  FaClock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function PrivacyList({ children, ...props }: ComponentProps<typeof VStack>) {
  return (
    <VStack align="stretch" gap={2} {...props}>
      {children}
    </VStack>
  );
}

function PrivacyListItem({
  icon,
  children,
  fontSize,
  lineHeight,
  color,
  ...props
}: ComponentProps<typeof HStack> & {
  icon: ComponentProps<typeof Icon>["as"];
  fontSize?: ComponentProps<typeof Text>["fontSize"];
  lineHeight?: ComponentProps<typeof Text>["lineHeight"];
  color?: ComponentProps<typeof Text>["color"];
}) {
  return (
    <HStack align="flex-start" gap={3} {...props}>
      <Icon as={icon} boxSize={4} color="green.400" mt="4px" flexShrink={0} />
      <Text flex="1" fontSize={fontSize} lineHeight={lineHeight} color={color}>
        {children}
      </Text>
    </HStack>
  );
}

export default function DataProtectionPolicy() {
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
        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
          The purpose of this Data Protection Policy is to ensure that personal,
          financial, and confidential data handled by KeshvaCredit Services Pvt. Ltd.
          ("Company", "we", "our") is collected, processed, stored, and disposed of
          in a secure and lawful manner in line with applicable laws, RBI/DCA guidelines,
          and industry best practices.
        </Text>
      ),
    },
    {
      id: "scope",
      title: "2. Scope",
      icon: FaServer,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Employees, contractors, vendors, and third-party partners.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Electronic, paper-based, and verbal data forms.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            All systems, applications, and platforms used for data processing.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "data-we-protect",
      title: "3. Data We Protect",
      icon: FaDatabase,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Personal Data</Text> – Name, address, DOB, phone, email.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">KYC & Financial Data</Text> – PAN, Aadhaar, bank details, credit history.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Transactional Data</Text> – Loans, repayments, disbursals.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Employment Data</Text> – HR, payroll, employee records.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Technical Data</Text> – IP address, device info, logs.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "principles",
      title: "4. Data Protection Principles",
      icon: FaUserLock,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Lawfulness & Transparency:</Text> Data collected with consent.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Purpose Limitation:</Text> Used only for business/regulatory needs.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Data Minimization:</Text> Only necessary data is collected.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Accuracy:</Text> Data is kept updated.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Storage Limitation:</Text> Retained only as required.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Integrity & Confidentiality:</Text> Strong security controls.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            <Text as="span" fontWeight="semibold">Accountability:</Text> Employees are responsible for compliance.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "security",
      title: "5. Security Measures",
      icon: FaShieldAlt,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Encryption of sensitive data (at rest & in transit).
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Multi-factor authentication & role-based access control.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Regular security patching & vulnerability testing.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Secure cloud/storage providers.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Continuous system monitoring.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Physical office security controls.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "sharing",
      title: "6. Data Sharing & Third Parties",
      icon: FaUsers,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Shared only with NBFCs, banks, and credit bureaus.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Third parties must sign confidentiality agreements.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            No selling or misuse of personal data.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "retention",
      title: "7. Data Retention & Deletion",
      icon: FaClock,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Data retained only as long as required legally or operationally.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Secure deletion or anonymization after expiry.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Users may request deletion where permitted by law.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "employee",
      title: "8. Employee Responsibilities",
      icon: FaUsers,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Use data only for authorized purposes.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Report security incidents immediately.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Maintain confidentiality even after leaving company.
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "customer",
      title: "9. Customer Rights",
      icon: FaUserLock,
      content: (
        <PrivacyList pl={{ base: 4, md: 6 }}>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Access personal data.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Request corrections.
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Withdraw consent (subject to law).
          </PrivacyListItem>
          <PrivacyListItem icon={FaCheckCircle} fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
            Request deletion (where applicable).
          </PrivacyListItem>
        </PrivacyList>
      ),
    },
    {
      id: "breach",
      title: "10. Breach Management",
      icon: FaShieldAlt,
      content: (
        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
          Any data breach will be handled as per the Data Breach Policy.
          Affected users and regulators will be notified where required by law.
        </Text>
      ),
    },
    {
      id: "review",
      title: "11. Review & Updates",
      icon: FaClock,
      content: (
        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="7" color={textColorMuted}>
          This policy is reviewed annually or whenever required due to legal,
          technical, or operational changes.
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
            <Icon as={FaShieldAlt} boxSize={8} color="blue.400" />
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              color={headingColor}
            >
              Data Protection Policy
            </Heading>
          </HStack>

          <Text fontSize="sm" fontWeight="semibold" color={textColorSecondary}>
            KeshvaCredit Services Pvt. Ltd.
          </Text>

          <HStack gap={2} fontSize="xs" color="gray.400">
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
                12. Contact Us
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

        {/* Footer */}
        <Box h="1px" bg={dividerColor} mt={10} mb={4} />
        <HStack gap={2} justify="center">
          <Icon as={FaShieldAlt} color="blue.400" boxSize={4} />
          <Text fontSize="xs" color="gray.500" textAlign="center">
            Your data security is our priority. This policy is regularly updated.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}