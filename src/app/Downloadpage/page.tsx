"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";
import { Check } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";
import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    useBreakpointValue,
    VStack,
    HStack,
} from "@chakra-ui/react";

export default function download() {
    useEffect(() => {
        // AOS Init
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
            offset: 60,
        });

        const timer = setTimeout(() => {
            window.location.href =
                "https://play.google.com/store/apps/details?id=com.keshvacredit.loan";
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
    const textSize = useBreakpointValue({ base: "md", md: "lg" });

    const features = [
        "Compare Multiple Lenders",
        "Quick & Easy Applications",
        "Real-Time Application Tracking",
        "100% Secure Process",
    ];

    return (
        <Box
            bg="blue.50"
            py={{ base: 10, md: 16, lg: 20 }}
            overflow="hidden"
            position="relative"
        >
            <Container maxW="1200px" px={{ base: 4, md: 6 }}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    align="center"
                    justify="space-between"
                >

                    {/* ================= LEFT CONTENT ================= */}
                    <Box flex={1} data-aos="fade-right" mt="10">
                        <VStack align="start" gap={6}>
                            <Heading as="h1" fontSize={headingSize} fontWeight="extrabold" lineHeight="1.1">
                                <Text as="span" color="gray.800" display="block">Find the Right Loan</Text>
                                <Text as="span" color="gray.800" display="block">
                                    Faster & Smarter
                                </Text>
                            </Heading>

                            <Text fontSize={textSize} color="gray.700" lineHeight="1.6" maxW="500px">
                                Compare loan offers from multiple trusted lenders, apply online, track your application status,
                                and get the best financing solution tailored to your needs — all from one app.
                            </Text>

                            <SimpleGrid columns={{ base: 1, sm: 2 }} gap={2}>
                                {features.map((feature, index) => (
                                    <HStack key={index} gap={0}>
                                        <Box w="24px" h="24px" borderRadius="full" bg="green.100" alignItems="center" justifyContent="center" flexShrink={0}>
                                            <Check size={14} color="#16A34A" strokeWidth={3} />
                                        </Box>
                                        <Text fontSize="sm" color="gray.800" fontWeight="medium">{feature}</Text>
                                    </HStack>
                                ))}
                            </SimpleGrid>

                            <VStack align="start" gap={3} pt={4}>
                                <Link
                                    href="https://play.google.com/store/apps/details?id=com.keshvacredit.loan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: "inline-block" }}
                                >
                                    <Box
                                        display="inline-flex"
                                        alignItems="center"
                                        gap={3}
                                        bg="black"
                                        color="white"
                                        px={{ base: 6, md: 7 }}
                                        py={{ base: 3.5, md: 4 }}
                                        borderRadius="xl"
                                        fontWeight="bold"
                                        fontSize={{ base: "sm", md: "md" }}
                                        transition="all 0.3s ease"
                                        cursor="pointer"
                                        _hover={{
                                            transform: "scale(1.08) translateY(-4px)",
                                            bg: "gray.800",
                                            boxShadow: "0 20px 60px rgba(37, 99, 235, 0.5)",
                                        }}
                                    >
                                        {/* Google Play Icon */}
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            w="28px"
                                            h="28px"
                                        >
                                            <FaGooglePlay size={24} color="white" />
                                        </Box>

                                        {/* Text */}
                                        <Box textAlign="left">
                                            <Text fontSize="xs" opacity={0.6}>
                                                GET IT ON
                                            </Text>
                                            <Text fontSize="md" fontWeight="bold">
                                                Google Play
                                            </Text>
                                        </Box>
                                    </Box>
                                </Link>

                                <HStack gap={2} cursor="pointer" _hover={{ opacity: 0.8 }}>
                                    <Text fontSize="sm">🚀</Text>
                                    <Text fontSize="sm" fontWeight="bold" color="green.500">
                                        Click Now & Get Started
                                    </Text>
                                </HStack>
                            </VStack>
                        </VStack>
                    </Box>

                    {/* ================= RIGHT MOBILE IMAGE ================= */}
                    <Box
                        flex={1}
                        w="full"
                        mt="8"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        data-aos="fade-left"
                        minH={{ base: "200px", md: "250px", lg: "300px" }}
                    >
                        {/* Soft background glow */}
                        <Box
                            position="absolute"
                            w={{ base: "220px", md: "300px", lg: "360px" }}
                            h={{ base: "150px", md: "200px", lg: "300px" }}
                            borderRadius="full"
                            bg="teal.100"
                            filter="blur(70px)"
                            opacity={0.45}
                        />

                        {/* Phone */}
                        <Box
                            position="relative"
                            zIndex={2}
                            w={{
                                base: "200px",
                                sm: "220px",
                                md: "250px",
                                lg: "280px"
                            }}
                            h={{
                                base: "300px",
                                sm: "350px",
                                md: "450px",
                                lg: "500px"
                            }}
                            bg="gray.950"
                            borderRadius={{
                                base: "28px",
                                md: "36px"
                            }}
                            p={{
                                base: "4px",
                                md: "5px"
                            }}
                            boxShadow="
                                0 30px 70px rgba(0,0,0,0.30),
                                0 10px 30px rgba(20,184,166,0.20)
                            "
                        >
                            {/* Mobile Screen */}
                            <Box
                                position="relative"
                                w="full"
                                h="full"
                                borderRadius={{
                                    base: "24px",
                                    md: "31px"
                                }}
                                overflow="hidden"
                                bg="white"
                            >
                                <Image
                                    src="/mobile-screeshot 2.jpg"
                                    alt="KeshvaCredit Dashboard"
                                    fill
                                    priority
                                    sizes="(max-width: 700px) 200px, (max-width: 1100px) 200px, 240px"
                                    style={{
                                        objectFit: "cover",
                                        // ✅ FIX: Status bar hide karne ke liye position change ki gayi hai
                                        objectPosition: "center 15%",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* ================= LEFT FLOATING CARD ================= */}
                        <Box
                            position="absolute"
                            top="15%"
                            left={{
                                base: "0%",
                                md: "5%",
                                lg: "8%"
                            }}
                            bg="white"
                            px={4}
                            py={3}
                            borderRadius="xl"
                            boxShadow="0 15px 35px rgba(0,0,0,0.12)"
                            zIndex={5}
                            display={{
                                base: "none",
                                md: "block"
                            }}
                        >
                            <Text fontSize="xs" color="gray.500" mb={1}>
                                Loan Approved
                            </Text>
                            <Text fontSize="lg" fontWeight="bold" color="teal.600">
                                ₹5,00,000
                            </Text>
                        </Box>

                        {/* ================= RIGHT FLOATING CARD ================= */}
                        <Box
                            position="absolute"
                            bottom="15%"
                            right={{
                                base: "0%",
                                md: "4%",
                                lg: "6%"
                            }}
                            bg="white"
                            px={4}
                            py={3}
                            borderRadius="xl"
                            boxShadow="0 15px 35px rgba(0,0,0,0.12)"
                            zIndex={5}
                            display={{
                                base: "none",
                                md: "block"
                            }}
                        >
                            <Text fontSize="xs" color="gray.500" mb={1}>
                                Processing Time
                            </Text>
                            <Text fontSize="lg" fontWeight="bold" color="teal.600">
                                2 Min
                            </Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}