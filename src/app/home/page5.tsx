"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  SimpleGrid,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";
import { FaRocket, FaHandHoldingUsd, FaHome, FaCreditCard, FaBuilding } from "react-icons/fa";

export default function Fifth() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      offset: 80,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl", lg: "3xl" });
  const textSize = useBreakpointValue({ base: "xs", md: "sm", lg: "sm" });
  const cardPadding = useBreakpointValue({ base: 2, md: 2.5, lg: 3 });
  const imageSize = useBreakpointValue({ base: "45px", md: "55px", lg: "65px" });

  const loanCards = [
    {
      image: "/personal loan",
      alt: "Personal Loan",
      title: "Personal Loan",
      icon: FaHandHoldingUsd,
      description:
        "Get instant personal loans with KeshvaCredit at competitive rates. Minimal docs, quick approval & RBI-regulated partners.",
    },
    {
      image: "/home loan",
      alt: "Home Loan",
      title: "Home Loan",
      icon: FaHome,
      description:
        "Affordable home loans at competitive interest rates with quick approval and flexible options.",
    },
    {
      image: "/credit loan",
      alt: "Credit Card",
      title: "Credit Card",
      icon: FaCreditCard,
      description:
        "Borrow up to your limit for purchases or bills with flexible repayment options.",
    },
    {
      image: "/business loan",
      alt: "Business Loan",
      title: "Business Loan",
      icon: FaBuilding,
      description:
        "Grow your business with easy financing, low interest rates, and quick approvals.",
    },
  ];

  return (
    <Box 
      bg="#111525" 
      py={{ base: 0.5, md: 1, lg: 1.5 }} // ✅ Bahar ki padding aur kam (1 se 0.5)
      overflow="hidden"
    >
      <Container 
        maxW="1200px"
        px={{ base: 0.5, md: 1, lg: 1.5 }} // ✅ Container ki padding aur kam
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 1.5, md: 2, lg: 2.5 }} // ✅ Gap kam (2 se 1.5)
          align="center"
          justify="center"
        >
          {/* ============================================ */}
          {/* LEFT CONTENT - Featured Card */}
          {/* ============================================ */}
          <Box
            width={{ base: "100%", lg: "28%" }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Box
              bg="linear-gradient(145deg, #2dd4bf, #14b8a6)"
              p={{ base: 2.5, md: 3, lg: 3.5 }} // ✅ Andar ki padding thodi kam
              borderRadius="2xl"
              boxShadow="0 15px 40px rgba(45, 212, 191, 0.25)"
              transition="all 0.4s ease"
              minHeight={{ base: "200px", md: "250px", lg: "300px" }}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 20px 50px rgba(45, 212, 191, 0.35)",
              }}
              position="relative"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box
                position="absolute"
                top="-40px"
                right="-40px"
                width="100px"
                height="100px"
                borderRadius="full"
                bg="rgba(255,255,255,0.1)"
              />
              <Box
                position="absolute"
                bottom="-20px"
                left="-20px"
                width="70px"
                height="70px"
                borderRadius="full"
                bg="rgba(255,255,255,0.08)"
              />

              <Box position="relative" zIndex={1}>
                <Flex align="center" gap={1.5} mb={2}>
                  <Box
                    bg="rgba(255,255,255,0.2)"
                    borderRadius="full"
                    p={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <FaRocket size={14} color="white" />
                  </Box>
                  <Text color="white" fontWeight="bold" fontSize="xs" textTransform="uppercase" letterSpacing="wider">
                    Featured
                  </Text>
                </Flex>

                <Heading
                  as="h2"
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight="extrabold"
                  color="gray.900"
                  lineHeight="1.2"
                  mb={2}
                >
                  Instant Funds,
                  <br />
                  <Text as="span" color="white">
                    Endless Possibilities
                  </Text>
                </Heading>

                <Text
                  fontSize={{ base: "xs", md: "xs", lg: "sm" }}
                  color="gray.800"
                  lineHeight="1.5"
                  fontWeight="medium"
                >
                  Get quick access to funds whenever you need them! Fast
                  approvals, hassle-free processing, and secure transactions.
                </Text>

                <Flex
                  gap={{ base: 2, md: 3 }}
                  mt={3}
                  pt={2}
                  borderTop="2px solid"
                  borderColor="rgba(255,255,255,0.2)"
                >
                  <Box>
                    <Text fontSize="md" fontWeight="bold" color="white">50K+</Text>
                    <Text fontSize="xs" color="gray.800" fontWeight="medium">Customers</Text>
                  </Box>
                  <Box>
                    <Text fontSize="md" fontWeight="bold" color="white">₹500Cr+</Text>
                    <Text fontSize="xs" color="gray.800" fontWeight="medium">Disbursed</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>

          {/* ============================================ */}
          {/* RIGHT CONTENT - Loan Cards Grid */}
          {/* ============================================ */}
          <Box
            width={{ base: "100%", lg: "68%" }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={{ base: 1, md: 1.5 }} // ✅ Grid gap aur kam (1.5 se 1)
            >
              {loanCards.map((card, index) => (
                <Box
                  key={index}
                  bg="linear-gradient(145deg, #2dd4bf, #14b8a6)"
                  borderRadius="xl"
                  p={{ base: 1.5, md: 2, lg: 2.5 }} // ✅ Andar ki padding kam
                  boxShadow="sm"
                  minHeight={{ base: "100px", md: "120px", lg: "140px" }}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-3px) scale(1.01)",
                    boxShadow: "lg",
                  }}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1000"
                  display="flex"
                  alignItems="center"
                  gap={{ base: 1.5, md: 2 }} // ✅ Gap kam
                >
                  {/* Image/Icon */}
                  <Box
                    flexShrink={0}
                    width={imageSize}
                    height={imageSize}
                    bg="rgba(255,255,255,0.2)"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "scale(1.1)",
                      bg: "rgba(255,255,255,0.3)",
                    }}
                  >
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={card.alt}
                        width={imageSize}
                        height={imageSize}
                        objectFit="contain"
                        p={1}
                        borderRadius="lg"
                        onError={(e: any) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <Icon as={card.icon} boxSize={5} color="white" />
                    )}
                  </Box>

                  {/* Content */}
                  <Box flex="1">
                    <Heading
                      as="h3"
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="bold"
                      color="gray.900"
                      mb={0.5}
                    >
                      {card.title}
                    </Heading>

                    <Text
                      fontSize={{ base: "xs", sm: "xs", md: "sm" }}
                      color="gray.800"
                      lineHeight="1.4"
                      overflow="hidden"
                      display="-webkit-box"
                      style={{
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {card.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}