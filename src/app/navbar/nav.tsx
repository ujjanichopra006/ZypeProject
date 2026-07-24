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
} from "@chakra-ui/react";

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
         bg="#111525"
        color="white"
        boxShadow="sm"
        position="fixed"
        w="100%"
        top={0}
        zIndex={1000}
        transition="all 0.3s ease"
        _dark={{
          bg: "gray.900",
          color: "white",
        }}
      >
        <Container maxW="7xl">
          <Flex
            h={{ base: "70px", md: "80px" }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Logo */}
            <Box flexShrink={0}>
              <Image
                src="/keshvacredit"
                alt="KeshvaCredit Logo"
                height={{ base: "35px", md: "45px" }}
                objectFit="contain"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src = "/default-logo.png"; // Fallback image
                }}

              />
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
                  _hover={{
                    color: "blue.500",
                    bg: "gray.50",
                  }}
                  _dark={{
                    _hover: {
                      color: "blue.400",
                      bg: "whiteAlpha.100",
                    },
                  }}
                  transition="all 0.2s"
                >
                  Home
                </Text>
              </Link>

              {/* Our Project Dropdown - Manual */}
              <Box position="relative">
                <Flex
                  align="center"
                  cursor="pointer"
                  px={3}
                  py={2}
                  borderRadius="md"
                  _hover={{
                    color: "blue.500",
                    bg: "gray.50",
                  }}
                  _dark={{
                    _hover: {
                      color: "blue.400",
                      bg: "whiteAlpha.100",
                    },
                  }}
                  transition="all 0.2s"
                  gap={1}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <Text fontSize="md" fontWeight="medium">
                    Our Project
                  </Text>
                  <ChevronDown size={16} />
                </Flex>

                {dropdownOpen && (
                  <Box
                    position="absolute"
                    top="100%"
                    left={0}
                    mt={2}
                    width="250px"
                    bg="#111525"
                    boxShadow="xl"
                    borderRadius="lg"
                    border="none"
                    zIndex={100}
                    _dark={{
                      bg: "gray.800",
                    }}
                  >
                    <Stack gap={1} py={2}>
                      <Link href="/personal-loan" passHref>
                        <Box
                          as="a"
                          px={4}
                          py={2}
                          borderRadius="md"
                          cursor="pointer"
                          _hover={{
                            bg: "gray.100",
                          }}
                          _dark={{
                            _hover: {
                              bg: "gray.700",
                            },
                          }}
                          transition="all 0.2s"
                        >
                          Personal Loan
                        </Box>
                      </Link>
                      <Link href="/business-loan" passHref>
                        <Box
                          as="a"
                          px={4}
                          py={2}
                          borderRadius="md"
                          cursor="pointer"
                          _hover={{
                            bg: "gray.100",
                          }}
                          _dark={{
                            _hover: {
                              bg: "gray.700",
                            },
                          }}
                          transition="all 0.2s"
                        >
                          Business Loan
                        </Box>
                      </Link>
                      <Link href="/home-loan" passHref>
                        <Box
                          as="a"
                          px={4}
                          py={2}
                          borderRadius="md"
                          cursor="pointer"
                          _hover={{
                            bg: "gray.100",
                          }}
                          _dark={{
                            _hover: {
                              bg: "gray.700",
                            },
                          }}
                          transition="all 0.2s"
                        >
                          Home Loan
                        </Box>
                      </Link>
                      <Link href="/gold-loan" passHref>
                        <Box
                          as="a"
                          px={4}
                          py={2}
                          borderRadius="md"
                          cursor="pointer"
                          _hover={{
                            bg: "gray.100",
                          }}
                          _dark={{
                            _hover: {
                              bg: "gray.700",
                            },
                          }}
                          transition="all 0.2s"
                        >
                          Gold Loan
                        </Box>
                      </Link>
                    </Stack>
                  </Box>
                )}
              </Box>

              <Link href="/About" passHref>
                <Text
                  as="span"
                  fontSize="md"
                  fontWeight="medium"
                  cursor="pointer"
                  px={3}
                  py={2}
                  borderRadius="md"
                  _hover={{
                    color: "blue.500",
                    bg: "gray.50",
                  }}
                  _dark={{
                    _hover: {
                      color: "blue.400",
                      bg: "whiteAlpha.100",
                    },
                  }}
                  transition="all 0.2s"
                >
                  About
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
                  _hover={{
                    color: "blue.500",
                    bg: "gray.50",
                  }}
                  _dark={{
                    _hover: {
                      color: "blue.400",
                      bg: "whiteAlpha.100",
                    },
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
                  _hover={{
                    color: "blue.500",
                    bg: "gray.50",
                  }}
                  _dark={{
                    _hover: {
                      color: "blue.400",
                      bg: "whiteAlpha.100",
                    },
                  }}
                  transition="all 0.2s"
                >
                  Quick Links
                </Text>
              </Link>
            </Flex>

            {/* ========== RIGHT SIDE ACTIONS ========== */}
            <Flex alignItems="center" gap={{ base: 2, md: 4 }}>
              <Link href="/profile" passHref>
                <Button
                  aria-label="Profile"
                  variant="ghost"
                  size="md"
                  borderRadius="full"
                  p={2}
                  minW="auto"
                  color="white" 
                  _hover={{
                    bg: "gray.100",
                    transform: "scale(1.1)",
                  }}
                  _dark={{
                    _hover: {
                      bg: "whiteAlpha.200",
                    },
                  }}
                  transition="all 0.2s"
                >
                  <User size={20} />
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
                    boxShadow: "lg",
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
                    boxShadow: "lg",
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
                p={2}
                minW="auto"
                _hover={{
                  bg: "gray.100",
                }}
                _dark={{
                  _hover: {
                    bg: "whiteAlpha.200",
                  },
                }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* ========== MOBILE MENU ========== */}
      {menuOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          bg="white"
          color="black"
          boxShadow="lg"
          py={4}
          px={6}
          _dark={{
            bg: "gray.800",
            color: "white",
          }}
        >
          <Stack gap={3}>
            <Link href="/" passHref>
              <Text
                as="span"
                fontSize="lg"
                fontWeight="medium"
                cursor="pointer"
                py={2}
                px={3}
                borderRadius="md"
                _hover={{
                  bg: "gray.100",
                  color: "blue.500",
                }}
                _dark={{
                  _hover: {
                    bg: "whiteAlpha.100",
                    color: "blue.400",
                  },
                }}
                transition="all 0.2s"
              >
                Home
              </Text>
            </Link>

            <Box h="1px" bg="gray.200" _dark={{ bg: "gray.600" }} opacity={0.3} />

            <Box>
              <Text
                fontSize="md"
                fontWeight="bold"
                color="gray.600"
                px={3}
                py={1}
                _dark={{
                  color: "gray.400",
                }}
              >
                Our Projects
              </Text>
              <Stack gap={1} pl={4} mt={1}>
                <Link href="/personal-loan" passHref>
                  <Text
                    as="span"
                    cursor="pointer"
                    py={2}
                    px={3}
                    borderRadius="md"
                    _hover={{
                      bg: "gray.100",
                      color: "blue.500",
                    }}
                    _dark={{
                      _hover: {
                        bg: "whiteAlpha.100",
                        color: "blue.400",
                      },
                    }}
                    transition="all 0.2s"
                  >
                    Personal Loan
                  </Text>
                </Link>
                <Link href="/business-loan" passHref>
                  <Text
                    as="span"
                    cursor="pointer"
                    py={2}
                    px={3}
                    borderRadius="md"
                    _hover={{
                      bg: "gray.100",
                      color: "blue.500",
                    }}
                    _dark={{
                      _hover: {
                        bg: "whiteAlpha.100",
                        color: "blue.400",
                      },
                    }}
                    transition="all 0.2s"
                  >
                    Business Loan
                  </Text>
                </Link>
                <Link href="/home-loan" passHref>
                  <Text
                    as="span"
                    cursor="pointer"
                    py={2}
                    px={3}
                    borderRadius="md"
                    _hover={{
                      bg: "gray.100",
                      color: "blue.500",
                    }}
                    _dark={{
                      _hover: {
                        bg: "whiteAlpha.100",
                        color: "blue.400",
                      },
                    }}
                    transition="all 0.2s"
                  >
                    Home Loan
                  </Text>
                </Link>
                <Link href="/gold-loan" passHref>
                  <Text
                    as="span"
                    cursor="pointer"
                    py={2}
                    px={3}
                    borderRadius="md"
                    _hover={{
                      bg: "gray.100",
                      color: "blue.500",
                    }}
                    _dark={{
                      _hover: {
                        bg: "whiteAlpha.100",
                        color: "blue.400",
                      },
                    }}
                    transition="all 0.2s"
                  >
                    Gold Loan
                  </Text>
                </Link>
              </Stack>
            </Box>

            <Box h="1px" bg="gray.200" _dark={{ bg: "gray.600" }} opacity={0.3} />

            <Link href="/About" passHref>
              <Text
                as="span"
                fontSize="lg"
                fontWeight="medium"
                cursor="pointer"
                py={2}
                px={3}
                borderRadius="md"
                _hover={{
                  bg: "gray.100",
                  color: "blue.500",
                }}
                _dark={{
                  _hover: {
                    bg: "whiteAlpha.100",
                    color: "blue.400",
                  },
                }}
                transition="all 0.2s"
              >
                About
              </Text>
            </Link>

            <Link href="/Contact" passHref>
              <Text
                as="span"
                fontSize="lg"
                fontWeight="medium"
                cursor="pointer"
                py={2}
                px={3}
                borderRadius="md"
                _hover={{
                  bg: "gray.100",
                  color: "blue.500",
                }}
                _dark={{
                  _hover: {
                    bg: "whiteAlpha.100",
                    color: "blue.400",
                  },
                }}
                transition="all 0.2s"
              >
                Contact
              </Text>
            </Link>

            <Link href="/quickLinks" passHref>
              <Text
                as="span"
                fontSize="lg"
                fontWeight="medium"
                cursor="pointer"
                py={2}
                px={3}
                borderRadius="md"
                _hover={{
                  bg: "gray.100",
                  color: "blue.500",
                }}
                _dark={{
                  _hover: {
                    bg: "whiteAlpha.100",
                    color: "blue.400",
                  },
                }}
                transition="all 0.2s"
              >
                Quick Links
              </Text>
            </Link>
          </Stack>
        </Box>
      )}

      {/* ========== OTP POPUP ========== */}
      {isOpen && <OtpPopup onClose={() => setIsOpen(false)} />}
    </Box>
  );
}