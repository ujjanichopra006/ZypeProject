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
      image: "/digital.png",
      alt: "Instant digital payout",
      title: "Instant digital payout",
      icon: FaHandHoldingUsd,
      description:
        "Skip long lines. Once approved by our partner NBFC, funds arrive in your account swiftly.",
    },
    {
      image: "/online.png",
      alt: "100% Online Flow",
      title: "100% online flow",
      icon: FaHome,
      description:
        "No physical visits or signed paper stacks needed. Complete verification from your smartphone.`",
    },
    {
      image: "/repayment.png",
      alt: "Flexible Repayment",
      title: "Flexible Repayment",
      icon: FaCreditCard,
      description:
        "Tailored monthly schedules that align with your paycheck or business sales cycles.",
    },
    {
      image: "/NBFC.png ",
      alt: "Regulated NBFC Partners",
      title: "Regulated NBFC Partners",
      icon: FaBuilding,
      description:
        "All loan matches are backed by RBI-regulated lenders keeping you compliant and secure.",
    },
  ];

  return (
    <Box 
      bg="blue.50"
      py={{ base: 0.5, md: 1, lg: 1.5 }}
      overflow="hidden"
    >
      <Container 
        maxW="1200px"
        px={{ base: 0.5, md: 1, lg: 1.5 }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 3, md: 5, lg: 10 }}
          align="center"
          justify="center"
        >
          {/* LEFT SIDE IMAGE */}
          <Box
            width={{ base: "100%", lg: "32%" }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              src="/girl.png"
              alt="Loan Banner"
              w="100%"
              h={{ base: "600px", md: "400px", lg: "600px" }}
              objectFit="cover"
              borderRadius="2xl"
              boxShadow="0 25px 50px rgba(30, 64, 175, 0.15)"
            />
          </Box>

          {/* ============================================ */}
          {/* RIGHT CONTENT - Loan Cards Grid */}
          {/* ============================================ */}
          <Box
            width={{ base: "100%", lg: "68%" }}
            mt={{ base: 8, md: 10, lg: 14 }} 
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Box mb={8} textAlign={{ base: "center", lg: "left" }}>
              <Text
                color="blue.600"
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="2px"
                mb={2}
              >
                PREMIUM STANDARDS
              </Text>

              <Heading
                color="blue.900"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="extrabold"
                lineHeight="1.2"
                mb={3}
              >
                Borrow Wisely, 
                <Text as="span" color="blue.600">
                  {" "}Succeed Fater
                </Text>
              </Heading>

              <Text
                color="blue.800"
                maxW="650px"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1.8"
              >
                Accessing digital cash shouldn't take days. Our platform aligns with your lifestyle.
              </Text>
            </Box>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              gap={{ base: 2, md: 5 }}
            >
              {loanCards.map((card, index) => (
                <Box
                  key={index}
                  bg="white"
                  border="1px solid"
                  borderColor="blue.100"
                  borderRadius="xl"
                  p={{ base: 1.5, md: 2, lg: 2.5 }}
                  boxShadow="sm"
                  minHeight={{ base: "100px", md: "120px", lg: "140px" }}
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-3px) scale(1.01)",
                    boxShadow: "0 15px 40px rgba(30, 64, 175, 0.12)",
                    borderColor: "blue.300",
                  }}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="1000"
                  display="flex"
                  alignItems="center"
                  gap={{ base: 1.5, md: 2 }}
                >
                  {/* Image/Icon Container */}
                  <Box
                    flexShrink={0}
                    width={imageSize}
                    height={imageSize}
                    bg="blue.50"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "scale(1.1)",
                      bg: "blue.100",
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
                      <Icon as={card.icon} boxSize={5} color="blue.600" />
                    )}
                  </Box>

                  {/* Content */}
                  <Box flex="1">
                    <Heading
                      as="h3"
                      fontSize={{ base: "sm", md: "md" }}
                      fontWeight="bold"
                      color="blue.900"
                      mb={0.5}
                    >
                      {card.title}
                    </Heading>

                    <Text
                      fontSize={{ base: "xs", sm: "xs", md: "sm" }}
                      color="blue.700"
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