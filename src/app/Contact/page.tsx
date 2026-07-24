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
      color: "blue.400",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "keshvacredit@gmail.com",
      delay: 100,
      color: "green.400",
    },
    {
      icon: FaPhone,
      title: "Call Us",
      content: "+91 93xxxxxxx5",
      delay: 200,
      color: "purple.400",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      content: "Mon - Fri: 09:00 AM - 05:00 PM\nSat - Sun: 09:00 AM - 01:00 PM",
      delay: 300,
      color: "orange.400",
    },
  ];

  const whyChooseItems = [
    {
      title: "🏦 Multiple Lenders",
      desc: "Get offers from multiple banks in one place.",
    },
    {
      title: " Best Rates",
      desc: "Compare interest rates instantly.",
    },
    {
      title: "⚡ Fast Process",
      desc: "Quick approval with minimal paperwork.",
    },
  ];

  return (
    <Box minH="100vh" bg="gray.900" color="white">
      <Container maxW="6xl" px={{ base: 4, md: 6 }} py={8}>
        {/* Navigation Tabs - FIXED WITH VISIBLE BUTTONS */}
        <Box
  as="section"
  pt={{ base: "100px", md: "120px" }} // Navbar se niche lane ke liye
  pb={10}
>
  <Container maxW="7xl">
    <Box
      mb={10}
      data-aos="fade-down"
      borderWidth="1px"
      borderColor="gray.700"
      borderRadius="full"
      p={2}
      bg="gray.800"
      maxW="700px"
      mx="auto"
      boxShadow="lg"
    >
      <HStack
        spacing={4}
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
            bg={pathname === "/contact" ? "blue.600" : "transparent"}
            color="white"
            border="2px solid"
            borderColor="blue.500"
            _hover={{
              bg: "blue.600",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(66,153,225,0.4)",
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
            bg={pathname === "/partner" ? "yellow.500" : "transparent"}
            color={pathname === "/partner" ? "black" : "yellow.400"}
            border="2px solid"
            borderColor="yellow.500"
            _hover={{
              bg: "yellow.500",
              color: "black",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(237,137,54,0.4)",
            }}
            transition="all .3s"
            cursor="pointer"
          >
            Register as Partner
          </Box>
        </Link>
      </HStack>
    </Box>
  </Container>
</Box>

        {/* Heading */}
        <VStack gap={3} mb={12} textAlign="center" data-aos="fade-up">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="extrabold"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Get in Touch
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} color="gray.300" maxW="xl" mx="auto">
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
              borderColor="gray.700"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              bg="gray.800"
              boxShadow="xl"
              data-aos="zoom-in"
              _hover={{ borderColor: "blue.500", transition: "all 0.3s" }}
            >
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                textAlign="center"
                mb={8}
                color="white"
              >
                📩 Contact Form
              </Heading>

              <form onSubmit={handleSubmit}>
                <VStack gap={5}>
                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.300">
                      Full Name *
                    </Text>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      bg="gray.700"
                      border="2px"
                      borderColor={errors.name ? "red.400" : "gray.600"}
                      borderRadius="lg"
                      height="50px"
                      px={4}
                      fontSize="sm"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _hover={{
                        borderColor: errors.name ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.name ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
                      }}
                    />
                    {errors.name && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                         {errors.name}
                      </Text>
                    )}
                  </Box>

                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.300">
                      Email Address *
                    </Text>
                    <Input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      bg="gray.700"
                      border="2px"
                      borderColor={errors.email ? "red.400" : "gray.600"}
                      borderRadius="lg"
                      height="50px"
                      px={4}
                      fontSize="sm"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _hover={{
                        borderColor: errors.email ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.email ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
                      }}
                    />
                    {errors.email && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                        ⚠ {errors.email}
                      </Text>
                    )}
                  </Box>

                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.300">
                      Phone Number *
                    </Text>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91 93xxxxxxx5"
                      value={formData.phone}
                      onChange={handleChange}
                      bg="gray.700"
                      border="2px"
                      borderColor={errors.phone ? "red.400" : "gray.600"}
                      borderRadius="lg"
                      height="50px"
                      px={4}
                      fontSize="sm"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      _hover={{
                        borderColor: errors.phone ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.phone ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
                      }}
                    />
                    {errors.phone && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                        ⚠ {errors.phone}
                      </Text>
                    )}
                  </Box>

                  <Box w="full">
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.300">
                      Your Message *
                    </Text>
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      bg="gray.700"
                      border="2px"
                      borderColor={errors.message ? "red.400" : "gray.600"}
                      borderRadius="lg"
                      px={4}
                      py={3}
                      fontSize="sm"
                      color="white"
                      _placeholder={{ color: "gray.400" }}
                      resize="none"
                      rows={5}
                      _hover={{
                        borderColor: errors.message ? "red.400" : "blue.400",
                      }}
                      _focus={{
                        borderColor: errors.message ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
                      }}
                    />
                    {errors.message && (
                      <Text fontSize="xs" color="red.400" mt={1}>
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
                      boxShadow: "0 8px 25px rgba(66, 153, 225, 0.4)",
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
    bg="gray.800"
    borderRadius="xl"
    p={{ base: 3, md: 4 }}
    w="full"
    border="1px"
    borderColor="gray.700"
    data-aos="fade-left"
    data-aos-delay={item.delay}
    _hover={{
      borderColor: item.color,
      transform: "translateY(-2px)",
      transition: "all 0.3s",
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
    }}
  >
    <HStack align="start" gap={3}>
      <Box
        bg="gray.700"
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
        <Heading as="h3" fontSize="md" fontWeight="bold" color="white">
          {item.title}
        </Heading>

        <Text
          fontSize="sm"
          color="white"
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
                bg="gray.800"
                borderRadius="2xl"
                overflow="hidden"
                border="1px"
                borderColor="gray.700"
                w="full"
                data-aos="zoom-in-up"
                _hover={{ borderColor: "blue.500", transition: "all 0.3s" }}
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
            <Text fontSize={{ base: "sm", md: "md" }} color="white" maxW="xl" mx="auto">
              Compare loans easily and choose the best offer instantly.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {whyChooseItems.map((item, index) => (
              <Box
                key={index}
                bgGradient="linear(to-br, #58B98C, #4CAF50)"
                color="white"
                borderRadius="2xl"
                p={6}
                textAlign="center"
                data-aos="flip-left"
                data-aos-delay={index * 100}
                _hover={{
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 20px 40px rgba(88, 185, 140, 0.3)",
                  transition: "all 0.3s",
                }}
                transition="all 0.3s"
              >
                <Heading
                  as="h3"
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                  mb={3}
                >
                  {item.title}
                </Heading>
                <Text fontSize="sm" color="white" opacity={0.9}>
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