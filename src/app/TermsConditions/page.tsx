"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function TermsConditions() {
  return (
    <Box bg="blue.50" color="blue.900" minH="100vh" py={12}>
      <Container maxW="4xl" px={{ base: 6, lg: 10 }} mt={20}>
        {/* Heading */}
        <Heading
          as="h1"
          fontSize="3xl"
          color="blue.700"
          fontWeight="bold"
          mb={4}
        >
          Terms & Conditions
        </Heading>

        <Text
          fontSize={{ base: "sm", md: "base" }}
          color="blue.700"
          mb={8}
        >
          Please read these Terms & Conditions carefully before using the
          KeshvaCredit website or mobile application. By accessing or using
          our Platform, you agree to comply with these terms.
        </Text>

        <VStack
          gap={7}
          align="stretch"
          fontSize={{ base: "sm", md: "base" }}
          color="blue.800"
        >
          {/* Section 1 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              1. Introduction
            </Heading>
            <Text>
              KeshvaCredit Services Private Limited (hereinafter referred to as
              <Text as="strong" fontWeight="bold">
                {" "}KeshvaCredit, Company, We, or Us
              </Text>
              ) is a company incorporated under Indian law with its registered
              office at
              <Text as="strong" fontWeight="bold">
                {" "}233, Thakar Basti, Bagichi Mohalla, Dharamshala Road,
                Fatehabad – 125050
              </Text>
              .
            </Text>
            <Text mt={3}>
              We operate the website and mobile application under the brand name
              <Text as="strong" fontWeight="bold">
                {" "}KeshvaCredit
              </Text>
              (collectively referred to as the
              <Text as="strong" fontWeight="bold">
                {" "}Platform
              </Text>
              ).
            </Text>
            <Text mt={3}>
              By using the Platform, you agree to these Terms & Conditions and
              our Privacy Policy. If you do not agree with any part of these
              terms, you should discontinue using the Platform. The Platform
              enables Users to access financial products offered by our
              financial partners, including loans, credit cards, and insurance.
            </Text>
          </Box>

          {/* Section 2 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              2. General Information
            </Heading>
            <Text>
              KeshvaCredit acts solely as a facilitator between Users seeking
              financial products and banks or NBFCs willing to provide those
              products. The Company does not directly provide financial
              services. The final decision regarding any financial transaction
              rests solely between the User and the respective financial
              partner.
            </Text>
          </Box>

          {/* Section 3 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              3. Services Provided
            </Heading>
            <Text>KeshvaCredit may provide services including but not limited to:</Text>

            <Box as="ul" pl={5} mt={3} style={{ listStyleType: "disc" }}>
              <Box as="li" mb={2}>
                Connecting users with lenders for loans, credit cards, and
                other financial products.
              </Box>
              <Box as="li" mb={2}>
                Facilitating access to credit reports through authorized
                agencies.
              </Box>
              <Box as="li" mb={2}>Providing spend analysis using bank SMS data.</Box>
              <Box as="li" mb={2}>
                Offering social score analysis based on linked social media
                accounts.
              </Box>
              <Box as="li">Providing other related services and features available on the Platform.</Box>
            </Box>
          </Box>

          {/* Section 4 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              4. User Eligibility
            </Heading>
            <Text>
              You must be at least 18 years of age and legally capable of
              entering into a binding contract under Indian law. By registering
              on the Platform, you confirm that you satisfy these eligibility
              requirements. KeshvaCredit reserves the right to suspend or
              terminate your account if these conditions are violated.
            </Text>
          </Box>

          {/* Section 5 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              5. Acceptance of Terms
            </Heading>
            <Text>
              By accessing or using the Platform, you acknowledge that you have
              read, understood, and agreed to these Terms & Conditions.
              KeshvaCredit may revise or update these terms at any time without
              prior notice. Continued use of the Platform constitutes acceptance
              of such modifications.
            </Text>
          </Box>

          {/* Section 6 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              6. User Accounts
            </Heading>
            <Text>
              To use our services, you may be required to create an account and
              provide accurate and complete information. You are responsible for
              maintaining the confidentiality of your login credentials and for
              all activities conducted through your account.
            </Text>
            <Text mt={3}>
              You must notify us immediately if you suspect unauthorized access
              or any security breach. KeshvaCredit reserves the right to suspend
              or terminate accounts containing inaccurate or misleading
              information.
            </Text>
          </Box>

          {/* Section 7 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              7. Privacy
            </Heading>
            <Text>
              Your personal information is collected, processed, and shared in
              accordance with our Privacy Policy. By using the Platform, you
              consent to the collection and sharing of your information with our
              financial partners as required to provide services.
            </Text>
          </Box>

          {/* Section 8 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              8. License to Use the Platform
            </Heading>
            <Text>
              KeshvaCredit grants you a limited, non-exclusive,
              non-transferable license to access and use the Platform for
              personal and lawful purposes only.
            </Text>
            <Text mt={3}>
              Unauthorized activities such as reverse engineering, copying,
              modifying, scraping, or commercially exploiting the Platform are
              strictly prohibited without prior written consent.
            </Text>
          </Box>

          {/* Section 9 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              9. Monitoring of Platform
            </Heading>
            <Text>
              KeshvaCredit reserves the right to monitor the Platform and its
              usage to ensure compliance with these Terms & Conditions. We may
              remove objectionable content or disclose information to legal or
              regulatory authorities when required by applicable law.
            </Text>
          </Box>

          {/* Section 10 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              10. Service Suspension
            </Heading>
            <Text>
              KeshvaCredit reserves the right to suspend, discontinue, or
              terminate any part of the Platform or its services at any time,
              with or without prior notice. Upon termination, your right to
              access and use the Platform will cease immediately.
            </Text>
          </Box>

          {/* Section 11 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              11. Limitation of Liability
            </Heading>
            <Text>
              KeshvaCredit shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the
              Platform. We do not guarantee the accuracy, reliability, or
              completeness of information available on the Platform.
            </Text>
            <Text mt={3}>
              Any agreement regarding a financial product is solely between the
              User and the respective financial partner.
            </Text>
          </Box>

          {/* Section 12 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              12. Indemnity
            </Heading>
            <Text>
              You agree to indemnify and hold harmless KeshvaCredit, its
              directors, employees, affiliates, and partners from any claims,
              liabilities, damages, losses, or expenses arising out of your use
              of the Platform or violation of these Terms & Conditions.
            </Text>
          </Box>

          {/* Section 13 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              13. Advertisements & Third-Party Links
            </Heading>
            <Text>
              The Platform may display advertisements or contain links to
              third-party websites. KeshvaCredit does not control, endorse, or
              assume responsibility for the content, services, or practices of
              these external websites.
            </Text>
          </Box>

          {/* Section 14 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              14. Acknowledgements
            </Heading>
            <Text>
              You acknowledge that KeshvaCredit acts only as a facilitator and
              does not guarantee the approval, quality, or performance of any
              financial products offered by partner institutions. Any disputes
              or claims relating to such products should be addressed directly
              with the concerned financial partner.
            </Text>
          </Box>

          {/* Section 15 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              15. Governing Law
            </Heading>
            <Text>
              These Terms & Conditions shall be governed and interpreted in
              accordance with the laws of India. Any disputes arising out of or
              relating to these terms shall be subject to the exclusive
              jurisdiction of the courts located in Delhi, India.
            </Text>
          </Box>

          {/* Section 16 */}
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="semibold"
              color="blue.600"
              mb={2}
            >
              16. Grievance Redressal
            </Heading>
            <Text>
              If you have any complaints, concerns, or feedback regarding the
              Platform or our services, you may contact us in writing or via
              email at:
            </Text>

            <Box
              mt={4}
              p={4}
              borderRadius="xl"
              border="1px solid"
              borderColor="blue.200"
              bg="white"
              boxShadow="0 10px 30px rgba(30, 64, 175, 0.06)"
            >
              <Text fontSize={{ base: "sm", md: "base" }} color="blue.800">
                <Text as="span" fontWeight="semibold" color="blue.600">
                  Email:
                </Text>{" "}
                keshvacredit@gmail.com
              </Text>
            </Box>

            <Text mt={4}>
              We will make reasonable efforts to review and resolve your
              concerns in a timely manner.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}