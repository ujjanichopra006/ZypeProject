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
        fontSize="xs"
        color="gray.200"
        py={1}
        cursor="pointer"
        transition="all 0.2s ease"
        transform="scale(1)"
        transformOrigin="left center"
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
        size="xs"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wide"
        color="gray.100"
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
  const [learnOpen, setLearnOpen] = useState<boolean>(false); // 👈 State for toggle

  return (
    <Box as="footer" borderTop="1px" borderColor="gray.300" bg="#111525">
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
              fontSize="xs"
              color="white"         
              lineHeight="relaxed"
              maxW="xs"
              textAlign="justify"
            >
              Discover smarter borrowing with our trusted loan aggregation platform.
              Instantly compare offers from leading NBFCs, enjoy competitive interest rates,
              and experience quick, hassle-free approvals — all backed by advanced data protection and complete transparency.
            </Text>
          </Box>

          {/* Footer Links Grid - Shifted Right by 5% on medium+ screens */}
          <SimpleGrid 
            columns={{ base: 2, sm: 4 }} 
            gap={6} 
            flex="2" 
            ml={{ base: 0, md: "5%" }}
          >
            {/* Resources Section */}
            <FooterSection title="Resources">
              <Button
                fontSize="xs"
                justifyContent="flex-start"
                p={0}
                h="auto"
                fontWeight="normal"
                transition="all 0.2s ease"
                transform="scale(1)"
              >
                Personal Loan
              </Button>
              <Button
                fontSize="xs"
                justifyContent="flex-start"
                p={0}
                h="auto"
                fontWeight="normal"
                transition="all 0.2s ease"
                transform="scale(1)"
              >
                Business Loan
              </Button>
              <Button
                fontSize="xs"
                justifyContent="flex-start"
                p={0}
                h="auto"
                fontWeight="normal"
                transition="all 0.2s ease"
                transform="scale(1)"
              >
                Gold Loan
              </Button>
              <Button
                fontSize="xs"
                justifyContent="flex-start"
                p={0}
                h="auto"
                fontWeight="normal"
                transition="all 0.2s ease"
                transform="scale(1)"
              >
                Short Term Loan
              </Button>
            </FooterSection>

            {/* Social Section */}
            <FooterSection title="Follow Us">
              <FooterLink href="https://www.linkedin.com/company/keshvacredit/" isExternal>
                LinkedIn
              </FooterLink>
              <FooterLink href="https://www.facebook.com/share/1ATVmsgGNK/" isExternal>
                Facebook
              </FooterLink>
              <FooterLink href="https://www.instagram.com/keshva_credit" isExternal>
                Instagram
              </FooterLink>
              <FooterLink href="https://whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19" isExternal>
                WhatsApp
              </FooterLink>
              <FooterLink href="https://www.youtube.com/@keshvacredit" isExternal>
                YouTube
              </FooterLink>
              <FooterLink href="https://x.com/KeshvaCredit?s=09" isExternal>
                X (Twitter)
              </FooterLink>
            </FooterSection>

            {/* Legal Section */}
            <FooterSection title="Legal">
              <FooterLink href="/Privacy">Privacy Policy</FooterLink>
              <FooterLink href="/datapolicy">Data Policy</FooterLink>
              <FooterLink href="/Lendercontact">Lender Contacts</FooterLink>
              <FooterLink href="/grivience">Lender Grievances</FooterLink>
              <FooterLink href="/delete_my_account">Delete My Account</FooterLink>
              <FooterLink href="/terms">Terms & Conditions</FooterLink>
            </FooterSection>

            {/* Other Links Section */}
            <FooterSection title="Other">
              <FooterLink href="/blog">Our Blogs</FooterLink>
              <FooterLink href="/Careers">Register as Partner</FooterLink>
              <FooterLink href="/Contact">Contact Us</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/allcalculators">EMI Calculator</FooterLink>
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
          <Text fontSize="xs" color="gray.100" textAlign="center">
            © {new Date().getFullYear()} Keshvacredit Services Private Limited. All Rights Reserved -
            CIN:{" "}
            <Text as="span" fontWeight="medium">
              U70200HR2025PTC129612
            </Text>
          </Text>

          {/* Toggle Button for State-wise Loans */}
          <Button
            variant="ghost"
            size="xl"
            onClick={() => setLearnOpen(!learnOpen)} // 👈 Toggle state on click
            color="blue.300"
            _hover={{ color: "teal.600" }}
            fontWeight="bold"
          >
            Click for more loan options
          </Button>

          {/* Expanded State Links - Only show when learnOpen is true */}
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
                    fontSize="2xs"
                    color="gray.100"
                    transition="all 0.2s"
                    _hover={{
                      color: "teal.600",
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