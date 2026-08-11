"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";

import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhone } from "react-icons/fa";

export default function ContactPage() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix all errors");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://keshvacredit.onrender.com/api/usercontact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Message Sent Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data?.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const infoItems = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Address",
      content: "233, Thakar Basti, Bagichi Mohalla,\nDharamshala Road, Fatehabad",
      delay: 0,
      color: "blue.500",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "keshvacredit@gmail.com",
      delay: 100,
      color: "green.500",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      content: "+91 93xxxxxxx5",
      delay: 200,
      color: "purple.500",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      content: "Mon - Fri: 09:00 AM - 05:00 PM\nSat - Sun: 09:00 AM - 01:00 PM",
      delay: 300,
      color: "orange.500",
    },
  ];

  const whyChooseItems = [
    {
      title: "🏦 Multiple Lenders",
      desc: "Get offers from multiple banks in one place.",
    },
    {
      title: "💰 Best Rates",
      desc: "Compare interest rates instantly.",
    },
    {
      title: "⚡ Fast Process",
      desc: "Quick approval with minimal paperwork.",
    },
  ];

  return (
    <Box minH="100vh" bg="blue.50" color="blue.900">
      <Container maxW="6xl" px={{ base: 4, md: 6 }} py={8}>
        {/* Navigation Tabs */}
        <Box
          as="section"
          pt={{ base: "100px", md: "120px" }}
          pb={10}
        >
          <Container maxW="7xl">
            <HStack
              gap={4}
              justifyContent="center"
              flexWrap="wrap"
            >
              {/* Contact Button */}
              <Link href="/contact" passHref legacyBehavior>
                <Box
                  as="button"
                  px={8}
                  py={3}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  textAlign="center"
                  minW="160px"
                  bg={pathname === "/contact" ? "blue.600" : "white"}
                  color={pathname === "/contact" ? "white" : "blue.700"}
                  border="2px solid"
                  borderColor={pathname === "/contact" ? "blue.600" : "blue.300"}
                  boxShadow={pathname === "/contact" ? "0 4px 12px rgba(59, 130, 246, 0.3)" : "sm"}
                  _hover={{
                    bg: "blue.600",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                    borderColor: "blue.600",
                  }}
                  transition="all .3s"
                  cursor="pointer"
                >
                  Contact
                </Box>
              </Link>

              {/* Partner Button */}
              <Link href="/partner" passHref legacyBehavior>
                <Box
                  as="button"
                  px={8}
                  py={3}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  textAlign="center"
                  minW="220px"
                  bg={pathname === "/partner" ? "yellow.500" : "white"}
                  color={pathname === "/partner" ? "white" : "yellow.700"}
                  border="2px solid"
                  borderColor={pathname === "/partner" ? "yellow.500" : "yellow.400"}
                  boxShadow={pathname === "/partner" ? "0 4px 12px rgba(234, 179, 8, 0.3)" : "sm"}
                  _hover={{
                    bg: "yellow.500",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(234, 179, 8, 0.4)",
                    borderColor: "yellow.500",
                  }}
                  transition="all .3s"
                  cursor="pointer"
                >
                  Register as Partner
                </Box>
              </Link>
            </HStack>
          </Container>
        </Box>

        {/* Heading */}
        <VStack gap={1} mb={6} textAlign="center" data-aos="fade-up">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "2xl" }}
            fontWeight="extrabold"
            bgClip="text"
            color="blue.900"
          >
            Get in Touch
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color="blue.700" maxW="xl" mx="auto">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you soon.
          </Text>
        </VStack>

        {/* Main Grid */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, lg: 10 }}
        >
          {/* Form Section */}
          <GridItem>
            <Box
              border="1px"
              borderColor="blue.100"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              bg="white"
              boxShadow="0 15px 40px rgba(30, 64, 175, 0.08)"
              data-aos="zoom-in"
              _hover={{ borderColor: "blue.300", transition: "all 0.3s" }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                textAlign="center"
                mb={8}
                color="blue.900"
              >
                📩 Contact Form
              </Heading>

              <form onSubmit={handleSubmit}>
                <VStack gap={5}>
                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="blue.700">
                      Full Name *
                    </Text>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      bg="blue.50"
                      border="2px"
                      borderColor={errors.name ? "red.400" : "blue.200"}
                      borderRadius="lg"
                      height="50px"
                      px={4}
                      fontSize="sm"
                      color="blue.900"
                      _placeholder={{ color: "blue.400" }}
                      _hover={{
                        borderColor: errors.name ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.name ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)",
                        bg: "white",
                      }}
                    />
                    {errors.name && (
                      <Text fontSize="xs" color="red.500" mt={1}>
                         ⚠ {errors.name}
                      </Text>
                    )}
                  </Box>

                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="blue.700">
                      Email Address *
                    </Text>
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      bg="blue.50"
                      border="2px"
                      borderColor={errors.email ? "red.400" : "blue.200"}
                      borderRadius="lg"
                      height="50px"
                      px={4}
                      fontSize="sm"
                      color="blue.900"
                      _placeholder={{ color: "blue.400" }}
                      _hover={{
                        borderColor: errors.email ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.email ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)",
                        bg: "white",
                      }}
                    />
                    {errors.email && (
                      <Text fontSize="xs" color="red.500" mt={1}>
                        ⚠ {errors.email}
                      </Text>
                    )}
                  </Box>

                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="blue.700">
                      Phone Number *
                    </Text>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91 93xxxxxxx5"
                      value={formData.phone}
                      onChange={handleChange}
                      bg="blue.50"
                      border="2px"
                      borderColor={errors.phone ? "red.400" : "blue.200"}
                      borderRadius="lg"
                      height="50px"
                      px={4}
                      fontSize="sm"
                      color="blue.900"
                      _placeholder={{ color: "blue.400" }}
                      _hover={{
                        borderColor: errors.phone ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.phone ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)",
                        bg: "white",
                      }}
                    />
                    {errors.phone && (
                      <Text fontSize="xs" color="red.500" mt={1}>
                        ⚠ {errors.phone}
                      </Text>
                    )}
                  </Box>

                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="blue.700">
                      Your Message *
                    </Text>
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      bg="blue.50"
                      border="2px"
                      borderColor={errors.message ? "red.400" : "blue.200"}
                      borderRadius="lg"
                      px={4}
                      py={3}
                      fontSize="sm"
                      color="blue.900"
                      _placeholder={{ color: "blue.400" }}
                      resize="none"
                      rows={5}
                      _hover={{
                        borderColor: errors.message ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.message ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)",
                        bg: "white",
                      }}
                    />
                    {errors.message && (
                      <Text fontSize="xs" color="red.500" mt={1}>
                        ⚠ {errors.message}
                      </Text>
                    )}
                  </Box>

                  <Button
                    type="submit"
                    w="full"
                    h="50px"
                    borderRadius="lg"
                    bgGradient="linear(to-r, blue.500, purple.600)"
                    color="white"
                    fontSize="md"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(to-r, blue.600, purple.700)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                    }}
                    _active={{
                      transform: "translateY(0)",
                    }}
                    transition="all 0.3s"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </VStack>
              </form>
            </Box>
          </GridItem>

          {/* Info Section */}
          <GridItem>
            <VStack gap={5}>
             {infoItems.map((item, index) => (
  <Box
    key={index}
    bg="white"
    borderRadius="xl"
    p={{ base: 3, md: 4 }}
    w="full"
    border="1px"
    borderColor="blue.100"
    data-aos="fade-left"
    data-aos-delay={item.delay}
    boxShadow="0 8px 24px rgba(30, 64, 175, 0.05)"
    _hover={{
      borderColor: item.color,
      transform: "translateY(-2px)",
      transition: "all 0.3s",
      boxShadow: "0 15px 40px rgba(30, 64, 175, 0.12)",
    }}
  >
    <HStack align="start" gap={3}>
      <Box
        bg="blue.50"
        p={2}
        borderRadius="lg"
        border="1px"
        borderColor={item.color}
        minW="44px"
        h="44px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={item.icon} boxSize={4} color={item.color} />
      </Box>

      <VStack align="start" gap={1} flex="1">
        <Heading as="h3" fontSize="md" fontWeight="bold" color="blue.900">
          {item.title}
        </Heading>

        <Text
          fontSize="sm"
          color="blue.700"
          lineHeight="1.6"
          whiteSpace="pre-line"
        >
          {item.content}
        </Text>
      </VStack>
    </HStack>
  </Box>
))}

              {/* Map */}
              <Box
                bg="white"
                borderRadius="2xl"
                overflow="hidden"
                border="1px"
                borderColor="blue.100"
                w="full"
                data-aos="zoom-in-up"
                boxShadow="0 8px 24px rgba(30, 64, 175, 0.05)"
                _hover={{ borderColor: "blue.300", transition: "all 0.3s" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d75.456!3d29.506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391228e4e9f1f8b3%3A0x8e8c7c5c6e7f6d9a!2sFatehabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                  loading="lazy"
                  title="Location Map"
                  style={{ width: "100%", height: "250px", border: "0" }}
                  allowFullScreen
                />
              </Box>
            </VStack>
          </GridItem>
        </Grid>

        {/* Why Choose Us Section */}
        <Box mt={20}>
          <VStack gap={3} mb={10} textAlign="center" data-aos="fade-up">
            <Heading as="h2" fontSize="2xl" fontWeight="bold" color="blue.900">
              Why Choose KeshvaCredit?
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="blue.700" maxW="xl" mx="auto">
           As a leading loan aggregator platform in India, we connect you with a network of certified lenders to give you transparency, choices, and competitive interest rates.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {whyChooseItems.map((item, index) => (
              <Box
                key={index}
                bgGradient="linear(to-br, #58B98C, #4CAF50)"
                borderRadius="2xl"
                p={6}
                textAlign="center"
                data-aos="flip-left"
                data-aos-delay={index * 100}
                boxShadow="0 10px 30px rgba(76, 175, 80, 0.2)"
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(76, 175, 80, 0.35)",
                  transition: "all 0.3s",
                }}
                transition="all 0.3s"
              >
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color="gray.800"
                  mb={3}
                >
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="gray.600" opacity={0.95}>
                  {item.desc}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}