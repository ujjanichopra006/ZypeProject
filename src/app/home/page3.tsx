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
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export default function Third() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  // ✅ Responsive values - SMALLER SIZES
  const headingSize = useBreakpointValue({ base: "xl", md: "3xl" });
  const subTextSize = useBreakpointValue({ base: "sm", md: "lg" });
  const cardWidth = useBreakpointValue({ base: "100%", lg: "480px" }); // ✅ 600px se 480px
  const imageSize = useBreakpointValue({ base: "120px", md: "80px", lg: "100px" }); // ✅ Choti image
  const cardPadding = useBreakpointValue({ base: 3, md: 1 }); // ✅ Kam padding

  return (
    <Box bg="#111525" color="white" py={{ base: 0}} px={{  }}>
      <Container maxW="1270px">
        {/* ========== HEADING SECTION ========== */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          mb={{ base: 2, md: 1 }}
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            fontWeight="bold"
            color="white"
            py={{ base: 0, md: 0 }}
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          >
            Our Certifications
          </Heading>

          <Text
            fontSize={subTextSize}
            color="white"
            lineHeight="relaxed"
            mt={{ base: 1, md: 2 }}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
          >
            Trusted and certified by recognized authorities
          </Text>
        </Box>

        {/* ========== CARDS SECTION ========== */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 4, md: 3, lg: 8 }} // ✅ Kam gap
          justifyContent="center"
          alignItems="center"
          px={{ base: 0, md: 2 }}
        >
          
          {/* ========== MSME CARD ========== */}
          <Box
            width={cardWidth}
            minHeight={{ base: "220px", md: "240px" }} // ✅ 300px se 240px
            bg="green.100"
            borderRadius="2xl" // ✅ 3xl se 2xl
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            px={cardPadding}
            py={{ base: 3, md: 4 }} // ✅ Kam padding
            gap={{ base: 3, md: 4 }} // ✅ Kam gap
            boxShadow="lg"
            transition="all 0.5s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "2xl",
            }}
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
          >
            {/* Image Container */}
            <Box
              width={imageSize}
              height={imageSize}
              bg="white"
              borderRadius="2xl"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              data-aos="zoom-in"
              data-aos-delay="250"
              data-aos-anchor-placement="top-bottom"
            >
              <Image
                src="https://5.imimg.com/data5/JK/ND/MY-20716531/msme-logo.png"
                alt="MSME"
                width={{ base: "90px", md: "110px", lg: "130px" }} // ✅ Choti image
                height={{ base: "90px", md: "110px", lg: "130px" }}
                objectFit="contain"
                onError={(e: any) => {
                  e.target.style.display = "none";
                }}
              />
            </Box>

            {/* Content */}
            <Box flex="1" textAlign={{ base: "center", md: "left" }}>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }} // ✅ Chota heading
                fontWeight="bold"
                color="black"
                mb={{ base: 1, md: 2 }}
              >
                MSME Registered
              </Heading>

              <Text
                fontSize={{ base: "xs", sm: "xs", md: "sm" }} // ✅ Chota text
                color="gray.700"
                lineHeight="relaxed"
                mb={{ base: 2, md: 3 }}
              >
                Officially recognized by the Ministry of Micro, Small & Medium
                Enterprises, Government of India under the Udyam Registration
                scheme.
              </Text>

              <VStack gap={{ base: 0.5, md: 1 }} align={{ base: "center", md: "flex-start" }}>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.800" fontWeight="medium">
                  ✅ Udyam Registration Number
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.800" fontWeight="medium">
                  ✅ Government Verified
                </Text>
              </VStack>
            </Box>
          </Box>

          {/* ========== ISO CARD ========== */}
          <Box
            width={cardWidth}
            minHeight={{ base: "220px", md: "240px" }} // ✅ 300px se 240px
            bg="blue.100"
            borderRadius="2xl" // ✅ 3xl se 2xl
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            px={cardPadding}
            py={{ base: 3, md: 4 }} // ✅ Kam padding
            gap={{ base: 3, md: 4 }} // ✅ Kam gap
            boxShadow="lg"
            transition="all 0.5s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "2xl",
            }}
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-anchor-placement="top-bottom"
          >
            {/* Image Container */}
            <Box
              width={imageSize}
              height={imageSize}
              bg="white"
              borderRadius="2xl"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              data-aos="zoom-in"
              data-aos-delay="350"
              data-aos-anchor-placement="top-bottom"
            >
              <Image
                src="https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png"
                alt="ISO"
                width={{ base: "90px", md: "110px", lg: "130px" }} // ✅ Choti image
                height={{ base: "90px", md: "110px", lg: "130px" }}
                objectFit="contain"
                onError={(e: any) => {
                  e.target.style.display = "none";
                }}
              />
            </Box>

            {/* Content */}
            <Box flex="1" textAlign={{ base: "center", md: "left" }}>
              <Heading
                as="h2"
                fontSize={{ base: "lg", md: "xl" }} // ✅ Chota heading
                fontWeight="bold"
                color="black"
                mb={{ base: 1, md: 2 }}
              >
                ISO 270001 Certified
              </Heading>

              <Text
                fontSize={{ base: "xs", sm: "xs", md: "sm" }} // ✅ Chota text
                color="gray.700"
                lineHeight="relaxed"
                mb={{ base: 2, md: 3 }}
              >
                Internationally recognized quality management system certification
                ensuring consistent delivery of high-quality products and services.
              </Text>

              <VStack gap={{ base: 0.5, md: 1 }} align={{ base: "center", md: "flex-start" }}>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.800" fontWeight="medium">
                  ✅ Quality Management System
                </Text>
                <Text fontSize={{ base: "xs", md: "sm" }} color="gray.800" fontWeight="medium">
                  ✅ International Standards
                </Text>
              </VStack>
            </Box>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
}