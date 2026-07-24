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

export default function InformationSecurityPolicy() {
  return (
    <Box bg="#020f26" minH="100vh" py={10}>
      <Container maxW="5xl" px={{ base: 5, lg: 8 }}>
        {/* Heading */}
        <Heading as="h1" fontSize="3xl" color="blue.500" mb={2} fontWeight="bold">
          Information Security Policy
        </Heading>

        <Text color="gray.300" fontSize="sm" fontWeight="medium">
          <strong>KeshvaCredit Services Pvt. Ltd.</strong>
        </Text>

        <HStack color="gray.400" fontSize="xs" mt={1} mb={8} gap={2}>
          <Text>Effective Date: Aug 18, 2025</Text>
          <Text>|</Text>
          <Text>Version: 1.0</Text>
        </HStack>

        <VStack gap={6} align="stretch" fontSize={{ base: "sm", md: "md" }}>
          {/* Section 1 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              1. Purpose
            </Heading>
            <Text color="gray.200">
              This policy establishes the framework for protecting information
              assets, customer data, and technology resources. It ensures
              adherence to applicable legal, regulatory, and contractual
              requirements while maintaining the highest standards of
              confidentiality, integrity, and availability.
            </Text>
          </Box>

          {/* Section 2 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              2. Scope
            </Heading>
            <Box as="ul" pl={5} color="gray.200">
              <Box as="li" mb={2}>
                All employees, contractors, and authorized third parties.
              </Box>
              <Box as="li" mb={2}>
                All systems, networks, applications, and cloud environments
                used for business operations.
              </Box>
              <Box as="li" mb={2}>
                All forms of information, whether digital, printed, or verbal.
              </Box>
            </Box>
          </Box>

          {/* Section 3 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              3. Principles of Information Security
            </Heading>
            <Box as="ul" pl={5} color="gray.200">
              <Box as="li" mb={2}>
                <strong>Confidentiality:</strong> Access to information is
                restricted to authorized individuals only.
              </Box>
              <Box as="li" mb={2}>
                <strong>Integrity:</strong> Information must remain accurate,
                reliable, and protected against unauthorized modification.
              </Box>
              <Box as="li" mb={2}>
                <strong>Availability:</strong> Information and systems must
                remain accessible for authorized use when required.
              </Box>
            </Box>
          </Box>

          {/* Section 4 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              4. Roles & Responsibilities
            </Heading>
            <Box as="ul" pl={5} color="gray.200">
              <Box as="li" mb={2}>
                <strong>Management:</strong> Ensure implementation and
                compliance with this policy.
              </Box>
              <Box as="li" mb={2}>
                <strong>Information Security Officer (ISO):</strong> Oversee
                security operations, monitor risks, and maintain controls.
              </Box>
              <Box as="li" mb={2}>
                <strong>Employees & Contractors:</strong> Protect information
                assets, follow security guidelines, and report incidents.
              </Box>
              <Box as="li" mb={2}>
                <strong>Third-Party Vendors:</strong> Must comply with the
                company's security requirements through contractual obligations.
              </Box>
            </Box>
          </Box>

          {/* Section 5 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              5. Security Controls
            </Heading>
            <Box as="ul" pl={5} color="gray.200">
              <Box as="li" mb={2}>
                <strong>Access Management:</strong> Role-based access,
                multi-factor authentication, and regular reviews.
              </Box>
              <Box as="li" mb={2}>
                <strong>Data Security:</strong> Encryption of sensitive data at
                rest and in transit, data masking, and secure storage.
              </Box>
              <Box as="li" mb={2}>
                <strong>Endpoint Protection:</strong> Antivirus, firewalls, and
                timely patching of devices.
              </Box>
              <Box as="li" mb={2}>
                <strong>Network Security:</strong> Intrusion prevention,
                monitoring, and VPN-controlled remote access.
              </Box>
              <Box as="li" mb={2}>
                <strong>Cloud Security:</strong> Use of secure and certified
                cloud service providers.
              </Box>
              <Box as="li" mb={2}>
                <strong>Incident Management:</strong> Defined process for
                identification, reporting, and resolution of incidents.
              </Box>
              <Box as="li" mb={2}>
                <strong>Business Continuity:</strong> Regular data backups and
                disaster recovery planning.
              </Box>
              <Box as="li" mb={2}>
                <strong>Physical Security:</strong> Restricted office access,
                surveillance, and secure handling of paper records.
              </Box>
            </Box>
          </Box>

          {/* Section 6 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              6. Data Privacy & Compliance
            </Heading>
            <Box as="ul" pl={5} color="gray.200">
              <Box as="li" mb={2}>
                Compliance with applicable regulatory guidelines, data
                protection laws, and industry standards.
              </Box>
              <Box as="li" mb={2}>
                Personal and financial information is collected, processed, and
                stored only for legitimate business purposes.
              </Box>
              <Box as="li" mb={2}>
                No unauthorized disclosure or misuse of customer data.
              </Box>
            </Box>
          </Box>

          {/* Section 7 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              7. Training & Awareness
            </Heading>
            <Box as="ul" pl={5} color="gray.200">
              <Box as="li" mb={2}>
                All employees receive regular training on information security
                and data privacy.
              </Box>
              <Box as="li" mb={2}>
                Awareness sessions cover phishing, password security, and safe
                handling of customer data.
              </Box>
            </Box>
          </Box>

          {/* Section 8 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              8. Review & Updates
            </Heading>
            <Text color="gray.200">
              This policy will be reviewed annually or whenever significant
              changes occur in business, technology, or regulatory
              requirements.
            </Text>
          </Box>

          {/* Section 9 */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              9. Enforcement
            </Heading>
            <Text color="gray.200">
              All employees, contractors, and partners are required to comply
              with this policy. Any violation will be addressed in accordance
              with company rules and contractual obligations.
            </Text>
          </Box>

          {/* Contact Information */}
          <Box>
            <Heading as="h2" fontSize="xl" color="blue.400" mb={2} fontWeight="semibold">
              Contact Information
            </Heading>

            <Card.Root
              bg="#081a3d"
              borderColor="blue.500/30"
              borderWidth="1px"
              borderRadius="lg"
              p={5}
              mt={3}
            >
              <Text fontSize="base" fontWeight="semibold" color="white" mb={2}>
                Information Security Officer (ISO)
              </Text>

              <Text color="gray.200" fontSize="sm" mb={1}>
                KeshvaCredit Services Pvt. Ltd.
              </Text>

              <Text color="gray.200" fontSize="sm" mb={1}>
                ✉ <Box as="span" color="blue.400">
                  info@keshvacredit.in
                </Box>
              </Text>

              <Text color="gray.200" fontSize="sm">
                📞 <Box as="span" color="blue.400">
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