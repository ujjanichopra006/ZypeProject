"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import OtpPopup from "../popup/popup";
import { User, ChevronDown, X, Menu } from "lucide-react";

import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Stack,
  Image,
  Container,
  VStack,
  HStack,
} from "@chakra-ui/react";

// ✅ CIRCULAR TRICOLOR FLAG ICON
const TricolorCircle = () => (
  <Box
    w="18px"
    h="18px"
    borderRadius="full"
    bg="conic-gradient(from 0deg, #FF9933 0deg 120deg, #FFFFFF 120deg 240deg, #138808 240deg 360deg)"
    border="1.5px solid white"
    boxShadow="0 0 0 1px rgba(0,0,0,0.08)"
    flexShrink={0}
    position="relative"
    _after={{
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      w: "5px",
      h: "5px",
      borderRadius: "full",
      bg: "#000080", // Ashoka Chakra blue center
    }}
  />
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Auth sync
  useEffect(() => {
    const syncAuth = () => {
      const phone = localStorage.getItem("phone");
      setIsloggedIn(!!phone);
    };

    syncAuth();

    window.addEventListener("authChange", syncAuth);

    return () => {
      window.removeEventListener("authChange", syncAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("phone");
    localStorage.removeItem("personalLoanSubmitted");
    localStorage.removeItem("businessLoanSubmitted");
    localStorage.removeItem("homeLoanSubmitted");
    localStorage.removeItem("goldLoanSubmitted");

    setIsloggedIn(false);
    window.dispatchEvent(new Event("authChange"));
  };

  return (
    <Box>
      {/* ========== MAIN NAVBAR ========== */}
      <Box
        bg="gray.50"
        color="blue.900"
        boxShadow="0 2px 15px rgba(30, 64, 175, 0.08)"
        position="fixed"
        w="100%"
        top={0}
        zIndex={1000}
        transition="all 0.3s ease"
        borderBottom="1px solid"
        borderColor="blue.100"
      >
        <Flex
          h={{ base: "70px", md: "80px" }}
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 4, md: 6 }}
        >
          {/* ========== LOGO SECTION ========== */}
          <Box flexShrink={0}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <VStack gap={0} align="flex-start">
                {/* 🏢 Company Logo - BILKUL SAME RAHEGA */}
                <Image
                  src="/keshvacredit"
                  alt="KeshvaCredit Logo"
                  height={{ base: "35px", md: "45px" }}
                  objectFit="contain"
                  // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  //   e.currentTarget.src = "/satyamev-jayte.jpg";
                  // }}
                />

                {/* 🇮🇳 Tricolor Circle Icon + Wish Text */}
                <HStack
                  gap={1.5}
                  align="center"
                  mt="3px"
                  display="flex"
                >
                  {/* <TricolorCircle /> */}
                   <Image
                  src="/satyamev-jayte.jpg"
                  alt="Ashoka Satambh"
                  height={{ base: "15px", md: "25px" }}
                  objectFit="contain"
                  // onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  //   e.currentTarget.src = "/satyamev-jayte.jpg";
                  // }}
                />
                  <Text
                    fontSize="13px"
                    fontWeight="bold"
                    background="linear-gradient(90deg, #d56f08 0%, #138808 100%)"
                    backgroundClip="text"
                    color="transparent"
                  >
                    Celebrating 79 Years of Freedom
                  </Text>
                </HStack>
              </VStack>
            </Link>
          </Box>

          {/* ========== DESKTOP NAV ========== */}
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap={6}
          >
            <Link href="/" passHref>
              <Text
                as="span"
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                color="blue.900"
                _hover={{
                  color: "blue.600",
                  bg: "blue.50",
                }}
                transition="all 0.2s"
              >
                Home
              </Text>
            </Link>

            <Link href="/loans" passHref>
              <Text
                as="span"
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                color="blue.900"
                _hover={{
                  color: "blue.600",
                  bg: "blue.50",
                }}
                transition="all 0.2s"
              >
                Loans
              </Text>
            </Link>

            <Link href="/About" passHref>
              <Text
                as="span"
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                color="blue.900"
                _hover={{
                  color: "blue.600",
                  bg: "blue.50",
                }}
                transition="all 0.2s"
              >
                About
              </Text>
            </Link>

            <Link href="/partner" passHref>
              <Text
                as="span"
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                color="blue.900"
                _hover={{
                  color: "blue.600",
                  bg: "blue.50",
                }}
                transition="all 0.2s"
              >
                Partner
              </Text>
            </Link>

            <Link href="/Contact" passHref>
              <Text
                as="span"
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                color="blue.900"
                _hover={{
                  color: "blue.600",
                  bg: "blue.50",
                }}
                transition="all 0.2s"
              >
                Contact
              </Text>
            </Link>

            <Link href="/quickLinks" passHref>
              <Text
                as="span"
                fontSize="md"
                fontWeight="medium"
                cursor="pointer"
                px={3}
                py={2}
                borderRadius="md"
                color="blue.900"
                _hover={{
                  color: "blue.600",
                  bg: "blue.50",
                }}
                transition="all 0.2s"
              >
                Quick Links
              </Text>
            </Link>
          </Flex>

          {/* ========== RIGHT SIDE ACTIONS ========== */}
          <Flex gap={{ base: 0, md: 0 }} align="center">
            <Link href="/profile" passHref>
              <Button
                mx={4}
                variant="outline"
                bg="white"
                color="blue.700"
                border="1px solid"
                borderColor="blue.200"
                borderRadius="16px"
                px={2}
                py={3}
                _hover={{
                  bg: "blue.50",
                  borderColor: "blue.400",
                  color: "blue.600",
                }}
              >
                <Flex align="center" gap={1}>
                  <User size={5} />
                  <Text fontSize="16px" fontWeight="300">
                    Profile
                  </Text>
                </Flex>
              </Button>
            </Link>

            {isloggedIn ? (
              <Button
                onClick={handleLogout}
                bg="red.500"
                color="white"
                size={{ base: "sm", md: "md" }}
                px={{ base: 3, md: 5 }}
                borderRadius="lg"
                _hover={{
                  bg: "red.600",
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)",
                }}
                _active={{ transform: "scale(0.95)" }}
                transition="all 0.2s"
                fontWeight="semibold"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => setIsOpen(true)}
                bg="green.500"
                color="white"
                size={{ base: "sm", md: "md" }}
                px={{ base: 3, md: 5 }}
                borderRadius="lg"
                _hover={{
                  bg: "green.600",
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(34, 197, 94, 0.3)",
                }}
                _active={{ transform: "scale(0.95)" }}
                transition="all 0.2s"
                fontWeight="semibold"
              >
                Sign In
              </Button>
            )}

            <Button
              display={{ base: "flex", md: "none" }}
              onClick={() => setMenuOpen(!menuOpen)}
              variant="ghost"
              aria-label="Toggle Navigation"
              size="md"
              color="blue.900"
              p={2}
              minW="auto"
              _hover={{
                bg: "blue.50",
                color: "blue.600",
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* ========== MOBILE MENU ========== */}
      {menuOpen && (
  <Box
   
    position="fixed"
    top="60px"
    right={0}
    w="280px"
    h="calc(70vh - 70px)"
    bg="blue.50"
    boxShadow="-5px 0 30px rgba(30, 64, 175, 0.15)"
    zIndex={999}
    overflowY="auto"
    borderRadius="2xl"
    borderTopRightRadius="0"
    borderBottomRightRadius="0"
    animation="slideInRight 0.3s ease-out"
    css={{
      "@keyframes slideInRight": {
        from: { transform: "translateX(100%)", opacity: 0 },
        to: { transform: "translateX(0)", opacity: 1 },
      },
    }}
  >
    {/* Close Button */}
    <Flex justify="flex-end" pb={2}>
      <Button
        onClick={() => setMenuOpen(false)}
        variant="ghost"
        size="sm"
        color="gray.500"
        _hover={{ bg: "gray.100", color: "red.500" }}
        borderRadius="full"
      >
        <X size={20} />
      </Button>
    </Flex>

    <Stack gap={1} px={4} pb={3}>
      {/* Home */}
      <Link href="/" passHref onClick={() => setMenuOpen(false)}>
        <Flex
          align="center"
          gap={1}
          py={1}
          px={1}
          borderRadius="xl"
        >
          <Box w="8px" h="8px" flexShrink={0} />
          <Text fontSize="md" fontWeight="semibold">
            Home
          </Text>
        </Flex>
      </Link>

      <Box h="1px" bg="gray.100" mx={4} />

      {/* Loan */}
      <Link href="/loans" passHref onClick={() => setMenuOpen(false)}>
        <Flex
          align="center"
          gap={1}
          py={1}
          px={1}
          borderRadius="xl"
        >
          <Box w="8px" h="8px" flexShrink={0} />
          <Text fontSize="md" fontWeight="semibold">
            Loans
          </Text>
        </Flex>
      </Link>

      <Box h="1px" bg="gray.100" mx={4} />

  
      <Link href="/About" passHref onClick={() => setMenuOpen(false)}>
        <Flex
          align="center"
          gap={1}
          py={1}
          px={1}
          borderRadius="xl"
          
        >
          <Box w="8px" h="8px"flexShrink={0} />
          <Text fontSize="md" fontWeight="semibold" >
            About
          </Text>
        </Flex>
      </Link>

      
      <Link href="/Contact" passHref onClick={() => setMenuOpen(false)}>
        <Flex
          align="center"
          gap={1}
          py={1}
          px={1}
          borderRadius="xl"
        
        >
          <Box w="8px" h="8px"flexShrink={0} />
          <Text fontSize="md" fontWeight="semibold" >
            Contact
          </Text>
        </Flex>
      </Link>

      
      <Link href="/quickLinks" passHref onClick={() => setMenuOpen(false)}>
        <Flex
          align="center"
          gap={1}
          py={1}
          px={1}
          borderRadius="xl"
          
        >
          <Box w="8px" h="8px"flexShrink={0} />
          <Text fontSize="md" fontWeight="semibold" >
            Quick Links
          </Text>
        </Flex>
      </Link>
    </Stack>

    {/* Bottom Branding */}
    <Box
      mt="auto"
      borderTop="1px solid"
      borderColor="gray.100"
      textAlign="center"
    >
      <Text fontSize="xs" color="gray.700" fontWeight="medium">
        © 2025 KeshvaCredit
      </Text>
    </Box>
  </Box>
)}

      {/* ========== OTP POPUP ========== */}
      {isOpen && <OtpPopup onClose={() => setIsOpen(false)} />}
    </Box>
  );
}