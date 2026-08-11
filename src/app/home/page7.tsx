"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BriefcaseBusiness, Rocket, CheckCircle, ArrowRight, Clock, Percent, FileText, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  SimpleGrid,
  useBreakpointValue,
  HStack,
  VStack,
  Icon,
  Badge,
  Flex,
} from "@chakra-ui/react";

export default function Seventh() {
  const [activeTab, setActiveTab] = useState<"professional" | "self">("professional");
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [activeTab]);

  // Responsive values
  const headingSize = useBreakpointValue({ base: "2xl", md: "3xl", lg: "4xl" });
  const subTextSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const cardTitleSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const cardTextSize = useBreakpointValue({ base: "sm", md: "md" });
  const imageHeight = useBreakpointValue({ base: "220px", md: "300px", lg: "380px" });
  const containerMaxW = useBreakpointValue({ base: "100%", md: "900px", lg: "1000px" });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" }) as "sm" | "md" | "lg";

  const loanData = {
    professional: {
      title: "Professional Loans",
      subtitle: "For Salaried Individuals",
      badge: "Popular Choice",
      description: "Get instant financial support with minimal documentation and competitive rates.",
      image: "/loan Professionals.avif",
      benefits: [
        { icon: Clock, label: "30-Minute Approval", desc: "Quick decision making" },
        { icon: Percent, label: "Low Interest Rates", desc: "Starting from 10.99%" },
        { icon: Calendar, label: "Flexible Tenure", desc: "3-36 months" },
        { icon: FileText, label: "Minimal Docs", desc: "Only 2 documents needed" },
      ],
      features: ["No Collateral Required", "100% Digital Process", "Same Day Disbursement"],
    },
    self: {
      title: "Business & Self-Employed",
      subtitle: "For Entrepreneurs & Freelancers",
      badge: "Flexible Terms",
      description: "Tailored financing solutions for business growth, working capital, and personal needs.",
      image: "/self employe.jpg",
      benefits: [
        { icon: Clock, label: "Quick Processing", desc: "48-hour approval" },
        { icon: Percent, label: "Competitive Rates", desc: "Starting from 11.99%" },
        { icon: Calendar, label: "Flexible Repayment", desc: "6-48 months" },
        { icon: FileText, label: "Simplified Docs", desc: "Income proof & ITR" },
      ],
      features: ["No Collateral Required", "Business & Personal Use", "Flexible EMI Options"],
    },
  };

  const currentData = loanData[activeTab];

  const getBenefitIcon = (index: number) => {
    const icons = [Clock, Percent, Calendar, FileText];
    return icons[index] || Clock;
  };

  return (
    <Box bg="blue.50" py={{ base: 10, md: 12, lg: 20 }} overflow="hidden">
      <Container maxW={containerMaxW} px={{ base: 4, md: 6 }}>
        {/* Header */}
        <VStack gap={{ base: 3, md: 4 }} mb={{ base: 8, md: 10 }} data-aos="fade-down">
          <Badge
            colorScheme="blue"
            fontSize={{ base: "xs", md: "sm" }}
            px={{ base: 4, md: 6 }}
            py={{ base: 1.5, md: 2 }}
            borderRadius="full"
            bg="blue.600"
            color="white"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Loan Solutions
          </Badge>
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="bold"
            color="blue.900"
            textAlign="center"
            letterSpacing="-0.02em"
            lineHeight="1.2"
          >
            Quick Loans for Every Need
          </Heading>
          <Text fontSize={subTextSize} color="blue.700" textAlign="center" maxW="600px">
            Choose the loan type that fits your profile and get funds when you need them most
          </Text>
        </VStack>

        {/* Tabs */}
        <Box display="flex" justifyContent="center" mb={{ base: 8, md: 10 }} data-aos="zoom-in">
          <Flex
            bg="white"
            borderRadius="full"
            p={1.5}
            width="100%"
            maxW="440px"
            boxShadow="0 4px 20px rgba(30, 64, 175, 0.08)"
            border="1px solid"
            borderColor="blue.100"
            gap={1}
          >
            <Button
              onClick={() => setActiveTab("professional")}
              flex="1"
              size={buttonSize}
              borderRadius="full"
              py={{ base: 5, md: 6 }}
              px={{ base: 4, md: 6 }}
              bg={activeTab === "professional" ? "blue.600" : "transparent"}
              color={activeTab === "professional" ? "white" : "blue.700"}
              _hover={{
                bg: activeTab === "professional" ? "blue.700" : "blue.50",
                transform: "scale(1.02)",
              }}
              _active={{ transform: "scale(0.98)" }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              fontWeight="semibold"
              boxShadow={activeTab === "professional" ? "0 4px 12px rgba(37, 99, 235, 0.4)" : "none"}
            >
              <BriefcaseBusiness size={18} style={{ display: 'inline', marginRight: '8px' }} />
              Professionals
            </Button>

            <Button
              onClick={() => setActiveTab("self")}
              flex="1"
              size={buttonSize}
              borderRadius="full"
              py={{ base: 5, md: 6 }}
              px={{ base: 4, md: 6 }}
              bg={activeTab === "self" ? "blue.600" : "transparent"}
              color={activeTab === "self" ? "white" : "blue.700"}
              _hover={{
                bg: activeTab === "self" ? "blue.700" : "blue.50",
                transform: "scale(1.02)",
              }}
              _active={{ transform: "scale(0.98)" }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              fontWeight="semibold"
              boxShadow={activeTab === "self" ? "0 4px 12px rgba(37, 99, 235, 0.4)" : "none"}
            >
              <Rocket size={18} style={{ display: 'inline', marginRight: '8px' }} />
              Self-Employed
            </Button>
          </Flex>
        </Box>

        {/* Main Card */}
        <Box
          key={activeTab}
          bg="white"
          borderRadius="3xl"
          overflow="hidden"
          boxShadow="0 20px 60px rgba(30, 64, 175, 0.1)"
          border="1px solid"
          borderColor="blue.100"
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
          data-aos="fade-up"
          transition="all 0.5s ease"
        >
          {/* Left - Content */}
          <Box p={{ base: 6, md: 8, lg: 10 }} bg="white" data-aos="fade-right">
            <VStack align="start" gap={{ base: 4, md: 5 }} w="full">
              {/* Badge & Title */}
              <Flex w="full" justify="space-between" align="center">
                <Badge
                  colorScheme="blue"
                  fontSize="xs"
                  px={3}
                  py={1}
                  borderRadius="full"
                  bg="blue.50"
                  color="blue.600"
                  fontWeight="semibold"
                >
                  {currentData.badge}
                </Badge>
              </Flex>

              <VStack align="start" gap={1}>
                <Heading as="h3" fontSize={cardTitleSize} fontWeight="bold" color="blue.900" lineHeight="1.2">
                  {currentData.title}
                </Heading>
                <Text fontSize={{ base: "sm", md: "md" }} color="blue.600" fontWeight="medium">
                  {currentData.subtitle}
                </Text>
              </VStack>

              <Text fontSize={cardTextSize} color="blue.700" lineHeight="1.8">
                {currentData.description}
              </Text>

              {/* Benefits Grid */}
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3} w="full" pt={2}>
                {currentData.benefits.map((benefit, index) => {
                  const IconComponent = getBenefitIcon(index);
                  return (
                    <Box
                      key={index}
                      bg="blue.50"
                      p={3}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="blue.100"
                      _hover={{
                        bg: "blue.100",
                        borderColor: "blue.300",
                        transform: "translateY(-2px)",
                        boxShadow: "md",
                      }}
                      transition="all 0.3s ease"
                      cursor="default"
                    >
                      <HStack gap={2.5} align="start">
                        <Box bg="blue.200" p={1.5} borderRadius="lg">
                          <Icon as={IconComponent} w={4} h={4} color="blue.700" />
                        </Box>
                        <Box>
                          <Text fontWeight="bold" fontSize="sm" color="blue.900">
                            {benefit.label}
                          </Text>
                          <Text fontSize="xs" color="blue.600">
                            {benefit.desc}
                          </Text>
                        </Box>
                      </HStack>
                    </Box>
                  );
                })}
              </SimpleGrid>

              {/* Features */}
              <Flex wrap="wrap" gap={2} pt={2}>
                {currentData.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    borderColor="blue.200"
                    color="blue.700"
                    fontSize="xs"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    bg="blue.50"
                    fontWeight="medium"
                  >
                    <HStack gap={1}>
                      <CheckCircle size={12} />
                      <Text>{feature}</Text>
                    </HStack>
                  </Badge>
                ))}
              </Flex>

              {/* Action Buttons */}
              <HStack gap={3} pt={4} w="full">
                <Button
                  onClick={() => router.push("/quickLinks")}
                  bg="blue.600"
                  color="white"
                  size={buttonSize}
                  fontSize="sm"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 6, md: 7 }}
                  _hover={{
                    bg: "blue.700",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(37, 99, 235, 0.3)",
                  }}
                  _active={{ transform: "translateY(0)" }}
                  transition="all 0.3s ease"
                  flex={1}
                  borderRadius="lg"
                >
                  Apply Now <ArrowRight size={16} style={{ display: 'inline', marginLeft: '8px' }} />
                </Button>
              </HStack>
            </VStack>
          </Box>

          {/* Right - Image */}
          <Box position="relative" minHeight={imageHeight} data-aos="fade-left">
            <Image
              src={currentData.image}
              alt={currentData.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              height="40%"
              bgGradient="linear(to-t, rgba(30, 64, 175, 0.2), transparent)"
              display={{ base: "block", md: "none" }}
            />
            {/* Floating badge on image */}
            <Box
              position="absolute"
              top={{ base: 4, md: 6 }}
              right={{ base: 4, md: 6 }}
              bg="rgba(255,255,255,0.95)"
              backdropFilter="blur(10px)"
              px={3}
              py={1.5}
              borderRadius="full"
              boxShadow="0 8px 25px rgba(30, 64, 175, 0.15)"
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              gap={2}
            >
              <Box w={2} h={2} bg="green.500" borderRadius="full" />
              <Text fontSize="xs" fontWeight="bold" color="blue.800">
                Funds Available
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}