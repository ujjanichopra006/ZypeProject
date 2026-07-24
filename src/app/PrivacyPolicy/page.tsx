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
} from "@chakra-ui/react";

import { FaCheckCircle, FaShieldAlt, FaUserSecret, FaLock } from "react-icons/fa";

type PrivacyListProps = ComponentProps<typeof Box> & {
  spacing?: number | string;
};

type PrivacyListItemProps = ComponentProps<typeof Box>;

type PrivacyListIconProps = ComponentProps<typeof Icon>;

function PrivacyList({ spacing, ...props }: PrivacyListProps) {
  return <Box as="ul" display="grid" rowGap={spacing} listStyleType="none" m={0} p={0} {...props} />;
}

function PrivacyListItem(props: PrivacyListItemProps) {
  return <Box as="li" display="flex" alignItems="flex-start" gap={2} {...props} />;
}

function PrivacyListIcon(props: PrivacyListIconProps) {
  return <Icon flexShrink={0} mt="2px" {...props} />;
}

function PrivacyDivider(props: PrivacyListItemProps) {
  return <Box as="hr" border={0} h="1px" w="full" bg={props.bg ?? props.borderColor ?? "currentcolor"} {...props} />;
}

function useColorModeValue<T>(light: T, _dark: T) {
  return light;
}

export default function PrivacyPolicy() {
  const bgColor = useColorModeValue("#020f26", "#020f26");
  const textColor = useColorModeValue("white", "white");
  const textColorSecondary = useColorModeValue("gray.200", "gray.200");
  const textColorMuted = useColorModeValue("gray.100", "gray.100");
  const dividerColor = useColorModeValue("gray.600", "gray.600");
  const cardBg = useColorModeValue("whiteAlpha.50", "whiteAlpha.50");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={{ base: 8, md: 12 }}>
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        {/* Header Section */}
        <VStack align="stretch" gap={4} mb={8}>
          <HStack gap={3}>
            <Icon as={FaShieldAlt} boxSize={8} color="blue.400" />
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
            >
              Privacy Policy
            </Heading>
          </HStack>
          <Text fontSize="sm" fontWeight="semibold" color={textColorSecondary}>
            KeshvaCredit
          </Text>
          <PrivacyDivider borderColor={dividerColor} />
          <Badge
            colorScheme="blue"
            fontSize="xs"
            px={3}
            py={1}
            borderRadius="full"
            alignSelf="flex-start"
          >
            Last Updated: May 01, 2025
          </Badge>
        </VStack>

        {/* Intro Section */}
        <Box
          bg={cardBg}
          borderRadius="xl"
          p={{ base: 4, md: 6 }}
          mb={8}
          border="1px"
          borderColor="whiteAlpha.100"
        >
          <VStack gap={4} align="stretch">
            <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
              This Privacy Policy ("Policy") outlines how KeshvaCredit Services
              Private Limited and its affiliates, successors, and assigns
              ("KeshvaCredit", "We", "Us", or "Our") collect, use, store, and
              disclose your personal information. This Policy applies to our
              website and the KeshvaCredit mobile application (together, the
              "Platform").
            </Text>

            <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
              By accessing or using the Platform, you ("User", "You", "Your")
              consent to the terms of this Policy, including how We collect and
              use your data in accordance with the Information Technology Act,
              2000, IT Rules 2011, and relevant RBI guidelines. If you disagree
              with any part of this Policy, please do not use the Platform.
            </Text>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              lineHeight="7"
              color="yellow.300"
              fontWeight="medium"
            >
              ⚠ This Company is a loan marketplace and does not directly provide
              loans. We only suggest RBI-registered NBFCs and banks as per user
              eligibility.
            </Text>
          </VStack>
        </Box>

        {/* Section 1 */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            1. Scope and Application
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            This Policy applies to Users who visit, access, or transact through
            the Platform. It excludes third-party websites and applications
            linked to the Platform, which are governed by their own privacy
            policies.
          </Text>
        </Box>

        {/* Section 2 - Services */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={4}>
            2. Services We Provide
          </Heading>

          {/* Credit Reports */}
          <Box mb={6}>
            <Heading as="h3" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={2} color="blue.300">
              a. Credit Reports
            </Heading>
            <PrivacyList spacing={2} pl={{ base: 4, md: 6 }}>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Data Collected:</Text> Your name, address, email,
                mobile number, PAN, gender, age, and date of birth.
              </PrivacyListItem>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Purpose:</Text> To obtain your credit report from
                authorized credit bureaus with your explicit consent and offer
                insights into your financial health.
              </PrivacyListItem>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Sharing:</Text> We do not share your credit report with
                any unauthorized third party.
              </PrivacyListItem>
            </PrivacyList>
          </Box>

          {/* Loans */}
          <Box mb={6}>
            <Heading as="h3" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={2} color="green.300">
              b. Loans and Credit Cards
            </Heading>
            <PrivacyList spacing={2} pl={{ base: 4, md: 6 }}>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }}color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Partnerships:</Text> We connect Users with our Lending
                Partners (Banks and NBFCs).
              </PrivacyListItem>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Data Collected:</Text> Information such as Aadhaar,
                salary details, employment history, KYC documents, and banking
                information is collected with your consent for loan and credit
                card application processing.
              </PrivacyListItem>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }}color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Sharing:</Text> We share the required information with
                Lending Partners to facilitate your loan or credit card
                application.
              </PrivacyListItem>
            </PrivacyList>
          </Box>

          {/* Marketing */}
          <Box mb={6}>
            <Heading as="h3" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={2} color="purple.300">
              c. Marketing and Promotional Campaigns
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted} mb={3}>
              By using the Platform and furnishing information about the Services,
              You agree that You are interested in receiving information about
              various products, services, offers, and campaigns displayed by
              KeshvaCredit.
            </Text>
            <PrivacyList spacing={2} pl={{ base: 4, md: 6 }}>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Information We Collect:</Text> Information detailed
                above, including employment-related information.
              </PrivacyListItem>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Sharing of Information:</Text> We may share your
                information with third parties and our network of Lending Partners
                to help provide relevant offers and services.
              </PrivacyListItem>
            </PrivacyList>
          </Box>

          {/* Customer Support */}
          <Box>
            <Heading as="h3" fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" mb={2} color="orange.300">
              d. Customer Support
            </Heading>
            <PrivacyList spacing={2} pl={{ base: 4, md: 6 }}>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Data Collected:</Text> Information you provide during
                interactions with customer support, including recorded calls.
              </PrivacyListItem>
              <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                <PrivacyListIcon as={FaCheckCircle} color="green.400" />
                <Text as="span" fontWeight="semibold">Purpose:</Text> To improve our services and address your
                concerns effectively.
              </PrivacyListItem>
            </PrivacyList>
          </Box>
        </Box>

        {/* Section 3 - Cookies */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            3. Cookies
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            We use cookies to identify users, enhance user experience, and
            provide relevant content. You can disable cookies through your
            browser settings, though this may affect some Platform features.
          </Text>
        </Box>

        {/* Section 4 - Your Rights */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            4. Your Rights
          </Heading>
          <PrivacyList spacing={3} pl={{ base: 4, md: 6 }}>
            <PrivacyListItem fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
              <PrivacyListIcon as={FaLock} color="blue.400" />
              <Text as="span" fontWeight="semibold">Right to Deny or Withdraw Consent:</Text> You may refuse
              to provide personal data or withdraw consent at any time.
            </PrivacyListItem>
            <PrivacyListItem fontSize={{ base: "sm", md: "md" }}  color={textColorMuted}>
              <PrivacyListIcon as={FaLock} color="blue.400" />
              <Text as="span" fontWeight="semibold">Right To Be Forgotten:</Text> You may request deletion
              of your data unless retention is required by law.
            </PrivacyListItem>
            <PrivacyListItem fontSize={{ base: "sm", md: "md" }}color={textColorMuted}>
              <PrivacyListIcon as={FaLock} color="blue.400" />
              <Text as="span" fontWeight="semibold">Right To Rectify:</Text> You may request correction of
              inaccurate or incomplete information.
            </PrivacyListItem>
          </PrivacyList>
        </Box>

        {/* Section 5 - Data Storage */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            5. Data Storage and Security
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            We store your information on secure servers in India and follow
            reasonable security practices to safeguard your data. However, no
            internet transmission method is completely secure.
          </Text>
        </Box>

        {/* Section 6 - Confidentiality */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            6. Confidentiality Agreements
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            We ensure that third parties with whom we share your information are
            bound by confidentiality obligations and are not permitted to use
            your data for unauthorized purposes.
          </Text>
        </Box>

        {/* Section 7 - Grievance Redressal */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            7. Grievance Redressal
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted} mb={4}>
            For any issues regarding your data, contact our Grievance
            Redressal Officer:
          </Text>

          <Box
            bg={cardBg}
            borderRadius="xl"
            p={{ base: 4, md: 6 }}
            border="1px"
            borderColor="whiteAlpha.100"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} columnGap={2}>
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                  <Text as="span" fontWeight="semibold" color={textColor}>Name:</Text> Vishal Grewal
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                  <Text as="span" fontWeight="semibold" color={textColor}>Email:</Text> keshvacredit@gmail.com
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                  <Text as="span" fontWeight="semibold" color={textColor}>Phone:</Text> +91 8901229195
                </Text>
              </Box>
              <Box>
                <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
                  <Text as="span" fontWeight="semibold" color={textColor}>Address:</Text> KeshvaCredit Services Pvt. Ltd., 233,
                  Thakar Basti, Bagichi Mohalla, Dharamshala Road,
                  Fatehabad-125050, Haryana, India.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted} mt={4}>
            We will respond to your requests within 48 hours.
          </Text>
        </Box>

        {/* Section 8 - Phishing */}
        <Box mb={8}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            8. Phishing Protection
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="yellow.300"
            fontWeight="medium"
          >
            ⚠ We will never ask for your payment details, usernames, passwords,
            OTPs, or banking credentials through email, SMS, or phone calls.
            Any communication requesting such information may be a phishing
            attempt and should not be trusted.
          </Text>
        </Box>

        {/* Section 9 - Legal */}
        <Box mb={4}>
          <Heading as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" mb={3}>
            9. Legal and Governing Law
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color={textColorMuted}>
            This Privacy Policy is governed by the laws of India. Any disputes
            arising out of or relating to this Policy shall be subject to the
            jurisdiction and provisions outlined in our Terms &amp; Conditions.
          </Text>
        </Box>

        {/* Footer */}
        <PrivacyDivider borderColor={dividerColor} mt={8} mb={4} />
        <HStack gap={2} justify="center">
          <Icon as={FaUserSecret} color="blue.400" boxSize={4} />
          <Text fontSize="xs" color={textColorSecondary} textAlign="center">
            Your privacy matters. We are committed to protecting your data.
          </Text>
        </HStack>
      </Container>
    </Box>
  );
}