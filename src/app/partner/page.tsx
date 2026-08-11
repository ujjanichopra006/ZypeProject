"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image"; // ✅ Added for Partner Logos
import AOS from "aos"; // ✅ Added for Animations
import "aos/dist/aos.css"; // ✅ Added for Animations

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Button,
  SimpleGrid,
  Grid,
  GridItem,
  Icon,
  Badge,
} from "@chakra-ui/react";

// FaCheck import kiya hai tick marks ke liye
import { FaHandshake, FaRocket, FaUsers, FaBuilding, FaChartLine, FaCheck } from "react-icons/fa";

export default function Partner() {
  const pathname = usePathname();

  const [view, setView] = useState("register");
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Initialize AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    designation: "",
    partnerType: "",
    businessType: "",
    companyProfile: "",
    website: "",
    products: "",
    volume: "",
    pincode: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contact: "",
    email: "",
    partnerType: "",
  });

  // ✅ LOAN PARTNERS DATA (Added Here)
  const partners = [
    { src: "/Zype.png", alt: "Zype", delay: 0 },
    { src: "/Moneyview.jpg", alt: "MoneyView", delay: 100 },
    { src: "/Ramfin.png", alt: "Ramfin", delay: 200 },
    { src: "/Fatakpay.jpg", alt: "FatakPay", delay: 300 },
    { src: "/olyv.png", alt: "Olyv", delay: 400 },
    { src: "/trustpaisa.png", alt: "trustPaisa", delay: 0 },
    { src: "/CreditSea.png", alt: "CreditSea", delay: 100 },
    { src: "/payme.png", alt: "Payme", delay: 200 },
    { src: "/capitalnow.png", alt: "Capitalnow", delay: 300 },
    { src: "/bajaj housing.jpg", alt: "Bajaj Housing", delay: 0 },
    { src: "/faircent.png", alt: "Faircent", delay: 0 },
    { src: "/protium.png", alt: "Protium", delay: 0 },
    { src: "/Muthoot fincorp.png", alt: "Muthoot Fincorp", delay: 0 },
    { src: "/branch.webp", alt: "Branch", delay: 0 },
    { src: "/kamakshi money.png", alt: "Kamakshi Money", delay: 0 },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { fullName: "", contact: "", email: "", partnerType: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.contact.replace(/\D/g, ""))) {
      newErrors.contact = "Contact must be 10 digits";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.partnerType) {
      newErrors.partnerType = "Partner Type is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix all errors");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Partnership request submitted successfully!");
      setFormData({
        fullName: "",
        contact: "",
        email: "",
        designation: "",
        partnerType: "",
        businessType: "",
        companyProfile: "",
        website: "",
        products: "",
        volume: "",
        pincode: "",
        location: "",
      });
      setSelectedType("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const partnerTypes = [
    {
      id: "DSA",
      title: "DSA Partners",
      subtitle: "Direct Selling Agents",
      icon: FaHandshake,
      color: "teal",
      benefits: [
        "Refer customers for loans",
        "Earn commission on approvals",
        "No minimum targets"
      ],
    },
    {
      id: "Aggregator",
      title: "Aggregators",
      subtitle: "Platform Partnerships",
      icon: FaUsers,
      color: "teal",
      benefits: [
        "API integration options",
        "Higher commission tiers",
        "Dedicated account manager"
      ],
    },
    {
      id: "Corporate",
      title: "Corporate Partners",
      subtitle: "Business Collaborations",
      icon: FaBuilding,
      color: "teal",
      benefits: [
        "Custom partnership programs",
        "Employee benefit programs",
        "Co-branding opportunities"
      ],
    },
  ];

  return (
    <Box minH="100vh" bg="blue.50" py={{ base: 8, md: 16 }} px={{ base: 4, md: 6 }}>
      <Container maxW="6xl">
        {/* Navigation Tabs */}
        <HStack mt={10} gap={3} justifyContent="center" mb={10} flexWrap="wrap"></HStack>

        {/* Hero Section */}
        <Box
          bg="white"
          borderRadius="3xl"
          py={{ base: 16, md: 20 }}
          px={{ base: 6, md: 10 }}
          textAlign="center"
          mb={12}
          position="relative"
          overflow="hidden"
        >
          <VStack gap={6} position="relative" zIndex={1}>
            <Icon as={FaHandshake} boxSize={16} color="pink.800" />
            <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="extrabold" color="black">
              Partner with{" "}
              <Text as="span" color="#F59E0B">
                KeshvaCredit
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
              Join our growing network of partners and unlock new opportunities in the financial services industry.
            </Text>

            <HStack gap={4} flexWrap="wrap" justifyContent="center">
              <Button
                onClick={() => setView("register")}
                size="lg"
                px={10}
                py={6}
                borderRadius="xl"
                bg={view === "register" ? "pink.800" : "transparent"}
                color={view === "register" ? "white" : "pink.800"}
                border={view === "register" ? "none" : "2px solid pink.800"}
                _hover={{
                  bg: view === "register" ? "teal.700" : "teal.50",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s"
                fontWeight="bold"
              >
                <Icon as={FaRocket} mr={2} />
                Register Now
              </Button>

              <Button
                onClick={() => setView("learn")}
                size="lg"
                px={10}
                py={6}
                borderRadius="xl"
                bg={view === "learn" ? "teal.600" : "transparent"}
                color={view === "learn" ? "white" : "black"}
                border={view === "learn" ? "none" : "2px solid black"}
                _hover={{
                  bg: view === "learn" ? "teal.700" : "gray.100",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s"
                fontWeight="bold"
              >
                <Icon as={FaChartLine} mr={2} />
                Learn More
              </Button>
            </HStack>
          </VStack>
        </Box>

        {/* Register Form */}
        {view === "register" && (
          <Box
            maxW="4xl"
            mx="auto"
            bg="white"
            p={{ base: 6, md: 10 }}
            borderRadius="2xl"
            boxShadow="xl"
            border="1px"
            borderColor="gray.200"
          >
            {selectedType && (
              <Badge colorScheme="teal" fontSize="md" px={4} py={2} borderRadius="full" mb={6}>
                Selected Partner Type: {selectedType}
              </Badge>
            )}

            <form onSubmit={handleSubmit}>
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Full Name *
                    </Text>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      bg="white"
                      border="2px"
                      borderColor={errors.fullName ? "red.400" : "gray.300"}
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: errors.fullName ? "red.400" : "teal.400" }}
                      _focus={{
                        borderColor: errors.fullName ? "red.400" : "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                    {errors.fullName && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                        {errors.fullName}
                      </Text>
                    )}
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Contact Number *
                    </Text>
                    <Input
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter contact number"
                      bg="white"
                      border="2px"
                      borderColor={errors.contact ? "red.400" : "gray.300"}
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: errors.contact ? "red.400" : "teal.400" }}
                      _focus={{
                        borderColor: errors.contact ? "red.400" : "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                    {errors.contact && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                        {errors.contact}
                      </Text>
                    )}
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Email *
                    </Text>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      bg="white"
                      border="2px"
                      borderColor={errors.email ? "red.400" : "gray.300"}
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: errors.email ? "red.400" : "teal.400" }}
                      _focus={{
                        borderColor: errors.email ? "red.400" : "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                    {errors.email && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                        {errors.email}
                      </Text>
                    )}
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Designation
                    </Text>
                    <Input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Your designation"
                      bg="white"
                      border="2px"
                      borderColor="gray.300"
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: "teal.400" }}
                      _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Partner Type *
                    </Text>
                    <select
                      name="partnerType"
                      value={selectedType}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setSelectedType(e.target.value);
                        handleChange(e);
                      }}
                      style={{
                        background: "white",
                        border: `2px solid ${errors.partnerType ? "#f56565" : "#e2e8f0"}`,
                        borderRadius: 12,
                        height: 50,
                        padding: "0 16px",
                        width: "100%",
                      }}
                    >
                      <option value="">Select Partner Type</option>
                      <option value="DSA">DSA</option>
                      <option value="Aggregator">Aggregator</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                    {errors.partnerType && (
                      <Text fontSize="xs" color="red.400" mt={1}>
                        {errors.partnerType}
                      </Text>
                    )}
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Business Type
                    </Text>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
                      style={{
                        background: "white",
                        border: "2px solid #e2e8f0",
                        borderRadius: 12,
                        height: 50,
                        padding: "0 16px",
                        width: "100%",
                      }}
                    >
                      <option value="">Select Business Type</option>
                      <option value="Loan">Loan</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Company Profile
                    </Text>
                    <Input
                      name="companyProfile"
                      value={formData.companyProfile}
                      onChange={handleChange}
                      placeholder="Company profile"
                      bg="white"
                      border="2px"
                      borderColor="gray.300"
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: "teal.400" }}
                      _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Website
                    </Text>
                    <Input
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website URL"
                      bg="white"
                      border="2px"
                      borderColor="gray.300"
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: "teal.400" }}
                      _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Products
                    </Text>
                    <select
                      name="products"
                      value={formData.products}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
                      style={{
                        background: "white",
                        border: "2px solid #e2e8f0",
                        borderRadius: 12,
                        height: 50,
                        padding: "0 16px",
                        width: "100%",
                      }}
                    >
                      <option value="">Select Products</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Gold Loan">Gold Loan</option>
                    </select>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Expected Business Volume
                    </Text>
                    <Input
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      placeholder="Monthly volume"
                      bg="white"
                      border="2px"
                      borderColor="gray.300"
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: "teal.400" }}
                      _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Pincode
                    </Text>
                    <Input
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      bg="white"
                      border="2px"
                      borderColor="gray.300"
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: "teal.400" }}
                      _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem colSpan={{ base: 1, md: 2 }}>
                  <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={1} color="gray.600">
                      Location
                    </Text>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City / State"
                      bg="white"
                      border="2px"
                      borderColor="gray.300"
                      borderRadius="xl"
                      height="50px"
                      px={4}
                      _hover={{ borderColor: "teal.400" }}
                      _focus={{
                        borderColor: "teal.500",
                        boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.2)",
                      }}
                    />
                  </Box>
                </GridItem>
              </Grid>

              <Button
                type="submit"
                w="full"
                mt={8}
                height="56px"
                bgGradient="linear(to-r, teal.500, teal.700)"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                borderRadius="xl"
                _hover={{
                  bgGradient: "linear(to-r, teal.600, teal.800)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(56, 178, 172, 0.4)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.3s"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                <Icon as={FaHandshake} mr={2} />
                {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
              </Button>
            </form>
          </Box>
        )}

        {/* Partnership Models Section */}
        {view === "register" && (
          <Box mt={20} mb={10} textAlign="center">
            <Heading as="h2" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="gray.800" mb={4}>
              Our Partnership Models
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={12}>
              Choose the partnership model that best fits your business and goals
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} px={{ base: 2, md: 0 }}>
              {partnerTypes.map((type, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="md"
                  border="1px"
                  borderColor="gray.100"
                  textAlign="left"
                  display="flex"
                  flexDirection="column"
                  transition="all 0.3s"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                >
                  {/* Card Header - Teal Background like image */}
                  <Box bg="pink.800" p={6} color="white">
                    <Heading as="h3" fontSize="xl" fontWeight="bold" mb={1}>
                      {type.title}
                    </Heading>
                    <Text fontSize="sm" opacity={0.9}>
                      {type.subtitle}
                    </Text>
                  </Box>

                  {/* Card Body */}
                  <Box p={6} flex="1" display="flex" flexDirection="column">
                    <VStack align="stretch" gap={4} mb={8} flex="1">
                      {type.benefits.map((benefit, i) => (
                        <HStack key={i} align="flex-start">
                          <Icon as={FaCheck} color="green.500" boxSize={5} mt={0.5} />
                          <Text color="gray.700" fontSize="sm">
                            {benefit}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    <Button
                      onClick={() => {
                        setSelectedType(type.id);
                        setFormData({ ...formData, partnerType: type.id });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        toast.success(`${type.title} selected! Please fill the form above.`);
                      }}
                      w="full"
                      bg="pink.800"
                      color="white"
                      py={6}
                      borderRadius="lg"
                      fontWeight="bold"
                      _hover={{ bg: "teal.700" }}
                    >
                      Apply Now
                    </Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        )}

        {/* Learn More Section */}
        {view === "learn" && (
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {partnerTypes.map((type, index) => (
              <Box
                key={index}
                bg="white"
                p={8}
                borderRadius="2xl"
                boxShadow="xl"
                border="1px"
                borderColor="gray.200"
                textAlign="center"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: "all 0.3s",
                }}
                transition="all 0.3s"
              >
                <Box display="inline-block" p={4} borderRadius="full" bg={`${type.color}.50`} mb={4}>
                  <Icon as={type.icon} boxSize={8} color={`${type.color}.600`} />
                </Box>

                <Heading as="h3" fontSize="xl" fontWeight="bold" color={`${type.color}.600`} mb={2}>
                  {type.title}
                </Heading>

                <Text color="gray.600" mb={4}>
                  {type.subtitle}
                </Text>

                <VStack gap={2} align="flex-start">
                  {type.benefits.map((benefit, i) => (
                    <Text key={i} color="green.600" fontSize="sm">
                      ✔ {benefit}
                    </Text>
                  ))}
                </VStack>

                <Button
                  onClick={() => {
                    setView("register");
                    setSelectedType(type.id);
                    setFormData({ ...formData, partnerType: type.id });
                  }}
                  mt={6}
                  w="full"
                  bg={`${type.color}.600`}
                  color="white"
                  py={6}
                  borderRadius="xl"
                  fontWeight="bold"
                  _hover={{
                    bg: `${type.color}.700`,
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  Apply Now
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        )}

        {/* ✅ NEW SECTION ADDED HERE: OUR LOAN PARTNERS */}
        <Box bg="gray.50" py={{ base: 8, md: 12 }} mt={20} borderRadius={{ base: "none", md: "2xl" }}>
          <Container maxW="7xl">
            <VStack gap={4} mb={12}>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="blue.800"
                textAlign="center"
                data-aos="fade-up"
              >
                Our Loan Partners
              </Heading>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                textAlign="center"
                maxW="2xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We work with partners who believe in "quality over quantity" and
                strive for excellence.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 2, md: 5 }} gap={4}>
              {partners.map((partner, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={4}
                  data-aos="zoom-in"
                  data-aos-delay={partner.delay}
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={100}
                    height={70}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.png";
                    }}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        {/* ✅ END OF NEW SECTION */}

      </Container>
    </Box>
  );
}