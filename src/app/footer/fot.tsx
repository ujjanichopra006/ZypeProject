"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Separator,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Ladakh",
  "Chandigarh",
];

const formatStateForUrl = (stateName: string): string =>
  stateName.toLowerCase().replace(/\s+/g, "-");

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  isExternal,
}) => {
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ textDecoration: "none", display: "inline-block" }}
    >
      <Text
        fontSize="sm"  // ✅ Changed from "xs" to "sm"
        color="gray.700"
        py={1}
        cursor="pointer"
        transition="all 0.2s ease"
        transform="scale(1)"
        transformOrigin="left center"
        _hover={{
          color: "blue.600",
          transform: "scale(1.03)",
        }}
      >
        {children}
      </Text>
    </Link>
  );
};

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <VStack align="start" gap={2}>
      <Heading
        as="h3"
        size="md"  // ✅ Changed from "xl" to "md" for better balance
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wide"
        color="black"
        mb={1}
        textDecoration="none"
        cursor="pointer"
        transition="color 0.2s"
        style={{
          textDecoration: "none",
        }}
      >
        {title}
      </Heading>
      <VStack align="start" gap={1}>
        {children}
      </VStack>
    </VStack>
  );
};

function Footer() {
  const [learnOpen, setLearnOpen] = useState<boolean>(false);

  return (
    <Box as="footer" borderTop="1px" borderColor="gray.300" bg="gray.100">
      <Container maxW="container.xl" py={6} px={4}>
        {/* Main Footer Content */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          gap={12}
          mb={4}
        >
          {/* Logo and Description */}
          <Box flex="1" maxW={{ base: "100%", md: "400px" }}>
            <Link href="/" style={{ display: "inline-block", marginBottom: 4 }}>
              <Image
                src="/keshvacredit"
                alt="Keshva Credit Logo"
                width={180}
                height={200}
                style={{ height: "auto", maxWidth: "100%" }}
                priority
              />
            </Link>
            <Text
              fontSize="md"  // ✅ Changed from "mx" (typo) to "md"
              color="gray.800"
              lineHeight="relaxed"
              maxW="xs"
              textAlign="justify"
            >
              Discover smarter borrowing with our trusted loan aggregation platform.
              Instantly compare offers from leading NBFCs, enjoy competitive interest rates,
              and experience quick, hassle-free approvals — all backed by advanced data protection and complete transparency.
            </Text>
          </Box>

          {/* Footer Links Grid */}
          <SimpleGrid
            columns={{ base: 2, sm: 4 }}
            gap={6}
            flex="2"
            ml={{ base: 0, md: "15%" }}
          >
            {/* Resources Section */}
            <FooterSection title="Resources">
              <FooterLink href="/personal-loan">
                <Button
                  variant="plain"
                  fontSize="sm"  // ✅ Changed from "mx" to "sm"
                  justifyContent="flex-start"
                  p={0}
                  h="auto"
                  fontWeight="normal"
                  color="gray.700"
                  transition="all 0.2s ease"
                  transform="scale(1)"
                  _hover={{ color: "blue.600" }}
                >
                  Personal Loan
                </Button></FooterLink>
              <FooterLink href="/business-loan">
                <Button
                  variant="plain"
                  fontSize="sm"  // ✅ Changed from "mx" to "sm"
                  justifyContent="flex-start"
                  p={0}
                  h="auto"
                  fontWeight="normal"
                  color="gray.700"
                  transition="all 0.2s ease"
                  transform="scale(1)"
                  _hover={{ color: "blue.600" }}
                >
                  Business Loan
                </Button></FooterLink>
              <FooterLink href="/gold-loan">
                <Button
                  variant="plain"
                  fontSize="sm"  // ✅ Changed from "mx" to "sm"
                  justifyContent="flex-start"
                  p={0}
                  h="auto"
                  fontWeight="normal"
                  color="gray.700"
                  transition="all 0.2s ease"
                  transform="scale(1)"
                  _hover={{ color: "blue.600" }}
                >
                  Gold Loan
                </Button></FooterLink>
              <FooterLink href="/home-loan">
                <Button
                  variant="plain"
                  fontSize="sm"  // ✅ Changed from "mx" to "sm"
                  justifyContent="flex-start"
                  p={0}
                  h="auto"
                  fontWeight="normal"
                  color="gray.700"
                  transition="all 0.2s ease"
                  transform="scale(1)"
                  _hover={{ color: "blue.600" }}
                >
                  Home Loan
                </Button></FooterLink>
            </FooterSection>

            {/* Social Section */}
            <FooterSection title="Follow Us">
              <Text fontSize="md">
                <FooterLink href="https://www.linkedin.com/company/keshvacredit/" isExternal>
                  LinkedIn
                </FooterLink>
              </Text>

              <Text fontSize="md">
                <FooterLink href="https://www.facebook.com/share/1ATVmsgGNK/" isExternal>
                  Facebook
                </FooterLink>
              </Text>

              <Text fontSize="md">
                <FooterLink href="https://www.instagram.com/keshva_credit" isExternal>
                  Instagram
                </FooterLink>
              </Text>

              <Text fontSize="md">
                <FooterLink href="https://whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19" isExternal>
                  WhatsApp
                </FooterLink>
              </Text>

              <Text fontSize="md">
                <FooterLink href="https://www.youtube.com/@keshvacredit" isExternal>
                  YouTube
                </FooterLink>
              </Text>

              <Text fontSize="md">
                <FooterLink href="https://x.com/KeshvaCredit?s=09" isExternal>
                  X (Twitter)
                </FooterLink>
              </Text>
            </FooterSection>
            {/* Legal Section */}
            <FooterSection title="Legal">
              <FooterLink href="/PrivacyPolicy">Privacy Policy</FooterLink>
              <FooterLink href="/DataPolicy">Data Policy</FooterLink>
              <FooterLink href="/Lenderscontact">Lender Contacts</FooterLink>
              <FooterLink href="/LenderGrievances">Lender Grievances</FooterLink>
              <FooterLink href="/DeleteAccount">Delete My Account</FooterLink>
              <FooterLink href="/Grievance-Redressal">Grievance Redressal</FooterLink>
              <FooterLink href="/TermsConditions">Terms & Conditions</FooterLink>
            </FooterSection>

            {/* Other Links Section */}
            <FooterSection title="Other">
              <FooterLink href="/Ourblogs">Our Blogs</FooterLink>
              <FooterLink href="/partner">Register as Partner</FooterLink>
              <FooterLink href="/Contact">Contact Us</FooterLink>
              <FooterLink href="/FAQ">FAQ</FooterLink>
              <FooterLink href="/emicalculators">EMI Calculator</FooterLink>
              <FooterLink href="https://sachet.rbi.org.in/" isExternal>
                RBI Sachet
              </FooterLink>
            </FooterSection>
          </SimpleGrid>
        </Flex>

        <Separator borderColor="gray.300" my={2} />

        {/* Bottom Section */}
        <VStack gap={2} align="center">
          {/* Copyright */}
          <Text fontSize="sm" color="gray.800" textAlign="center">  {/* ✅ Changed from "xs" to "sm" */}
            © {new Date().getFullYear()} Keshvacredit Services Private Limited. All Rights Reserved -
            CIN:{" "}
            <Text as="span" fontWeight="medium" color="black">
              U70200HR2025PTC129612
            </Text>
          </Text>

          {/* Toggle Button for State-wise Loans */}
          <Button
            variant="ghost"
            size="xl"
            onClick={() => setLearnOpen(!learnOpen)}
            color="blue.600"
            _hover={{ color: "blue.800", bg: "gray.200" }}
            fontWeight="bold"
          >
            Click for more loan options
          </Button>

          {/* Expanded State Links */}
          {learnOpen && (
            <Flex
              wrap="wrap"
              justify="center"
              columnGap={3}
              rowGap={2}
              mt={2}
            >
              {states.map((stateName) => (
                <Link
                  key={stateName}
                  href={`/loan/${formatStateForUrl(stateName)}`}
                  style={{ textDecoration: "none" }}
                >
                  <Text
                    fontSize="xs"  // ✅ Changed from "2xs" to "xs"
                    color="gray.700"
                    transition="all 0.2s"
                    _hover={{
                      color: "blue.600",
                      transform: "scale(1.03)",
                      fontWeight: "medium",
                    }}
                  >
                    ‖ Personal Loan in {stateName} ‖
                  </Text>
                </Link>
              ))}
            </Flex>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;