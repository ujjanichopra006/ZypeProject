"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
  Card,
  HStack,
} from "@chakra-ui/react";

export default function DataBreachPolicy() {
  return (
    <Box bg="blue.50" minH="100vh" py={10}>
      <Container maxW="5xl" px={{ base: 5, lg: 8 }} mt="20">
        {/* Heading */}
        <Heading as="h1" fontSize="3xl" color="blue.700" mb={2} fontWeight="bold">
          Data Breach Policy
        </Heading>

        <Text color="blue.800" fontSize="sm" fontWeight="medium">
          <strong>KeshvaCredit Services Pvt. Ltd.</strong>
        </Text>

        <HStack color="blue.600" fontSize="xs" mt={1} mb={8} gap={2}>
          <Text>Effective Date: Aug 18, 2025</Text>
          <Text>|</Text>
          <Text>Version: 1.0</Text>
        </HStack>

        <VStack gap={6} align="stretch" fontSize={{ base: "sm", md: "md" }}>
          {/* Section 1 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              1. Purpose
            </Heading>
            <Text color="blue.800">
              This policy outlines the process for identifying, reporting, and responding to
              incidents that may affect the confidentiality, integrity, or availability of
              company or customer data. KeshvaCredit Services Pvt. Ltd. is committed to
              managing data breaches responsibly and in compliance with applicable laws.
            </Text>
          </Box>

          {/* Section 2 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              2. Scope
            </Heading>
            <Text color="blue.800" mb={2}>
              This policy applies to:
            </Text>
            <Box as="ul" pl={5} color="blue.800">
              <Box as="li" mb={1}>
                Employees, contractors, and third-party service providers.
              </Box>
              <Box as="li" mb={1}>
                Personal, financial, technical, and operational data.
              </Box>
              <Box as="li" mb={1}>
                All systems, applications, networks, and physical records.
              </Box>
            </Box>
          </Box>

          {/* Section 3 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              3. What is a Data Breach?
            </Heading>
            <Text color="blue.800" mb={2}>
              A data breach is any suspected or confirmed incident involving unauthorized
              access, disclosure, alteration, or loss of data.
            </Text>

            <Box as="ul" pl={5} color="blue.800" mb={3}>
              <Box as="li" mb={1}>
                Customer personal or financial information.
              </Box>
              <Box as="li" mb={1}>
                Confidential business data.
              </Box>
              <Box as="li" mb={1}>
                Critical IT systems and networks.
              </Box>
            </Box>

            <Text color="blue.800" mb={2}>
              Examples:
            </Text>

            <Box as="ul" pl={5} color="blue.800">
              <Box as="li" mb={1}>
                Unauthorized system access.
              </Box>
              <Box as="li" mb={1}>
                Loss or theft of devices.
              </Box>
              <Box as="li" mb={1}>
                Accidental sharing of customer data.
              </Box>
              <Box as="li" mb={1}>
                Malware, ransomware, or cyberattacks.
              </Box>
            </Box>
          </Box>

          {/* Section 4 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              4. Roles & Responsibilities
            </Heading>
            <Box as="ul" pl={5} color="blue.800">
              <Box as="li" mb={1}>
                <strong>Employees:</strong> Report suspected or actual breaches immediately.
              </Box>
              <Box as="li" mb={1}>
                <strong>Information Security Officer:</strong> Lead investigation and response.
              </Box>
              <Box as="li" mb={1}>
                <strong>Incident Response Team:</strong> Handle containment and recovery.
              </Box>
              <Box as="li" mb={1}>
                <strong>Management:</strong> Ensure oversight and regulatory compliance.
              </Box>
              <Box as="li" mb={1}>
                <strong>Third Parties:</strong> Report breaches involving shared data without delay.
              </Box>
            </Box>
          </Box>

          {/* Section 5 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              5. Breach Response Procedure
            </Heading>
            <Box as="ol" pl={5} color="blue.800">
              <Box as="li" mb={2}>
                <strong>Identification:</strong> Detect or report the incident.
              </Box>
              <Box as="li" mb={2}>
                <strong>Containment:</strong> Isolate affected systems and stop further impact.
              </Box>
              <Box as="li" mb={2}>
                <strong>Assessment:</strong> Evaluate the extent and impact.
              </Box>
              <Box as="li" mb={2}>
                <strong>Notification:</strong> Inform management, regulators, and affected
                customers where required.
              </Box>
              <Box as="li" mb={2}>
                <strong>Recovery:</strong> Remove threats and restore systems.
              </Box>
              <Box as="li" mb={2}>
                <strong>Review:</strong> Analyze root cause and improve safeguards.
              </Box>
            </Box>
          </Box>

          {/* Section 6 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              6. Data Breach Notification
            </Heading>
            <Box as="ul" pl={5} color="blue.800">
              <Box as="li" mb={1}>
                Affected customers will be informed transparently when required.
              </Box>
              <Box as="li" mb={1}>
                Notifications will explain the breach, impact, and recommended actions.
              </Box>
              <Box as="li" mb={1}>
                All communications will comply with applicable legal and regulatory obligations.
              </Box>
            </Box>
          </Box>

          {/* Section 7 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              7. Prevention & Preparedness
            </Heading>
            <Box as="ul" pl={5} color="blue.800">
              <Box as="li" mb={1}>
                Regular security audits and testing.
              </Box>
              <Box as="li" mb={1}>
                Employee awareness and phishing training.
              </Box>
              <Box as="li" mb={1}>
                Encryption, access controls, and monitoring tools.
              </Box>
              <Box as="li" mb={1}>
                Periodic testing of business continuity plans.
              </Box>
            </Box>
          </Box>

          {/* Section 8 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              8. Policy Review
            </Heading>
            <Text color="blue.800">
              This policy is reviewed annually or whenever significant changes occur in
              technology, regulations, or business operations.
            </Text>
          </Box>

          {/* Section 9 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.600" mb={2} fontWeight="semibold">
              9. Contact Information
            </Heading>

            <Card.Root
              bg="white"
              borderColor="blue.200"
              borderWidth="1px"
              borderRadius="lg"
              p={5}
              mt={3}
              boxShadow="0 10px 30px rgba(30, 64, 175, 0.08)"
            >
              <Text fontSize="base" fontWeight="semibold" color="blue.900" mb={2}>
                Data Protection Officer (DPO)
              </Text>

              <Text color="blue.800" fontSize="sm" mb={1}>
                KeshvaCredit Services Pvt. Ltd.
              </Text>

              <Text color="blue.800" fontSize="sm" mb={1}>
                ✉ <Box as="span" color="blue.600" fontWeight="medium">
                  info@keshvacredit.in
                </Box>
              </Text>

              <Text color="blue.800" fontSize="sm">
                📞 <Box as="span" color="blue.600" fontWeight="medium">
                  8901229195
                </Box>
              </Text>
            </Card.Root>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}