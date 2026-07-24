"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Second() {
  // ✅ State for logo errors
  const [logoErrors, setLogoErrors] = useState<{ [key: number]: boolean }>({});

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

  // ✅ Responsive values
  const headingSize = useBreakpointValue({ base: "xl", sm: "2xl", md: "3xl" });
  const textSize = useBreakpointValue({ base: "sm", sm: "base", md: "xl" });
  const logoHeight = useBreakpointValue({ base: "24px", sm: "28px", md: "32px" });

  // ✅ Partner logos data
  const partners = [
    {
      src: "https://web.mpokket.in/footer-revamp/fd4778f562d3177f3c72.svg",
      alt: "mpokket",
    },
    {
      src: "https://salaryontime.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0.6s.cduoj.x9.png&w=384&q=75",
      alt: "salaryontime",
    },
    {
      src: "https://www.getzype.com/wp-content/uploads/2024/08/Group-7.png",
      alt: "zype",
    },
    {
      src: "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775727.png",
      alt: "zype-partner",
    },
    {
      src: "https://web.olyv.co.in/images/app/olyv_registered_logo.png",
      alt: "olyv",
    },
    {
      src: "https://static.trustpaisa.com/logos/full.svg",
      alt: "trustpaisa",
    },
    {
      src: "https://moneyview.in/images/mv-green-logo-v3Compressed.svg",
      alt: "moneyview",
    },
  ];

  // ✅ Handle image error
  const handleImageError = (index: number) => {
    setLogoErrors((prev) => ({ ...prev, [index]: true }));
  };

  // ✅ Duplicate logos for seamless infinite scroll
  const allLogos = [...partners, ...partners, ...partners];

  // ✅ CSS for animation (inline style)
  const scrollStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    animation: "scroll 20s linear infinite",
  };

  return (
    <Box
      as="section"
      bg="#111525"
      color="white"
      py={{ base: 0, md: 0 }}
      px={{ base:0, md: 0}}
      overflow="hidden"
      width="100%"
    >
      {/* ✅ Global styles for animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .slider-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
        
        .slider-track:hover {
          animation-play-state: paused;
        }
        
        .logo-item {
          flex-shrink: 0;
          margin: 0 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0.8;
        }
        
        .logo-item:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        
        @media (min-width: 768px) {
          .logo-item {
            margin: 0 5px;
          }
        }
        
        @media (min-width: 1024px) {
          .logo-item {
            margin: 0 5px;
          }
        }

          @keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333%);
  }
}

.slider-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: scroll 28s linear infinite;
}

.slider-track:hover {
  animation-play-state: paused;
}
      `}</style>

      <Container maxW="1280px" centerContent>
        {/* HEADING */}
        <Box
          maxW="3xl"
          textAlign="center"
          data-aos="fade-up"
          data-aos-duration="1200"
          mb={{ base: 2, md: 3 }}
          mt="0"
        >
          <Heading
            as="h1"
            fontSize={headingSize}
            fontWeight="bold"
            color="white"
          >
            🚀 Our Trusted Partners
          </Heading>

          <Text
            fontSize={textSize}
            color="white"
            mt={{ base: 1, md: 2 }}
            px={{ base: 2, md: 3 }}
            lineHeight="relaxed"
          >
            We collaborate with leading financial partners who believe in quality
            <Text as="span" color="blue.400" fontWeight="semibold">
              {" "}over quantity and deliver excellence.
            </Text>
          </Text>
        </Box>

       {/* LOGO SLIDER */}
<Box
  mt={10}
  w="100%"
  position="relative"
  overflow="hidden"
  borderRadius="28px"
  borderColor="gray.200"
  py={10}
  boxShadow="0 20px 60px rgba(0,0,0,.08)"
>
  {/* Left Gradient */}
  <Box
    position="absolute"
    left={0}
    top={0}
    h="100%"
    w="120px"
    bgGradient="linear(to-r, white, transparent)"
    zIndex={5}
  />

  {/* Right Gradient */}
  <Box
    position="absolute"
    right={0}
    top={0}
    h="100%"
    w="120px"
    bgGradient="linear(to-l, white, transparent)"
    zIndex={5}
  />

  <Box className="slider-track">
    {allLogos.map((partner, idx) => {
      const originalIndex = idx % partners.length;
      const hasError = logoErrors[originalIndex];

      return (
        <Box
          key={idx}
          mx={4}
          minW={{ base: "100px", md: "150px" }}
          h={{ base: "90px", md: "90px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
          borderRadius="24px"
          border="1px solid"
          borderColor="gray.100"
          boxShadow="0 8px 30px rgba(0,0,0,.06)"
          transition=".35s"
          _hover={{
            transform: "translateY(-8px)",
            boxShadow: "0 20px 45px rgba(0,0,0,.15)",
          }}
        >
          {hasError ? (
            <Text
              color="gray.500"
              fontWeight="bold"
              fontSize="sm"
            >
              {partner.alt}
            </Text>
          ) : (
            <Image
              src={partner.src}
              alt={partner.alt}
              maxH="55px"
              maxW="120px"
              objectFit="contain"
              loading="lazy"
              onError={() => handleImageError(originalIndex)}
              transition=".3s"
              _hover={{
                filter: "grayscale(0%)",
                transform: "scale(1.08)",
              }}
            />
          )}
        </Box>
      );
    })}
  </Box>
</Box>
      </Container>
    </Box>
  );
}