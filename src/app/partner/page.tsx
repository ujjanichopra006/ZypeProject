"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

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

import { FaHandshake, FaRocket, FaUsers, FaBuilding, FaChartLine } from "react-icons/fa";

export default function Partner() {
  const pathname = usePathname();

  const [view, setView] = useState("register");
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      color: "blue",
      benefits: ["✔ High commission earnings", "✔ Easy onboarding"],
    },
    {
      id: "Aggregator",
      title: "Aggregators",
      subtitle: "Platform Partnerships",
      icon: FaUsers,
      color: "purple",
      benefits: ["✔ API support", "✔ Bulk leads"],
    },
    {
      id: "Corporate",
      title: "Corporate Partners",
      subtitle: "Business Collaborations",
      icon: FaBuilding,
      color: "pink",
      benefits: ["✔ Enterprise solutions", "✔ Priority support"],
    },
  ];

  return (
    <Box minH="100vh" bg="#0f172a" py={{ base: 8, md: 16 }} px={{ base: 4, md: 6 }}>
      <Container maxW="6xl">
        {/* Navigation Tabs - FIXED */}
        <HStack
  mt={10}
  gap={3}
  justifyContent="center"
  mb={10}
  flexWrap="wrap"
>
  {/* Contact Button */}
  <Link href="/Contact" passHref legacyBehavior>
    <Box
      as="a"
      px={6}
      py={2.5}
      borderRadius="full"
      fontSize="sm"
      fontWeight="medium"
      textAlign="center"
      transition="all 0.3s"
      bg={pathname === "/Contact" ? "blue.600" : "transparent"}
      color="white"
      border={
        pathname === "/Contact"
          ? "2px solid blue.600"
          : "2px solid blue.500"
      }
      _hover={{
        bg: pathname === "/Contact" ? "blue.700" : "blue.600",
        borderColor: pathname === "/Contact" ? "blue.700" : "blue.600",
        color: "white",
        transform: "translateY(-2px)",
      }}
      cursor="pointer"
    >
      Contact
    </Box>
  </Link>

  {/* Partner Button */}
  <Link href="/partner" passHref legacyBehavior>
    <Box
      as="a"
      px={6}
      py={2.5}
      borderRadius="full"
      fontSize="sm"
      fontWeight="medium"
      textAlign="center"
      transition="all 0.3s"
      bg={pathname === "/partner" ? "yellow.500" : "transparent"}
      color={pathname === "/partner" ? "black" : "yellow.400"}
      border="2px solid yellow.500"
      _hover={{
        bg: "yellow.500",
        color: "black",
        borderColor: "yellow.500",
        transform: "translateY(-2px)",
      }}
      cursor="pointer"
    >
      Register as Partner
    </Box>
  </Link>
</HStack>

        {/* Hero Section */}
        <Box
          bg="gray.200"
          borderRadius="3xl"
          py={{ base: 16, md: 20 }}
          px={{ base: 6, md: 10 }}
          textAlign="center"
          mb={12}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="-50%"
            right="-10%"
            w="300px"
            h="300px"
            bg="blue.100"
            borderRadius="full"
            opacity={0.3}
          />
          <Box
            position="absolute"
            bottom="-30%"
            left="-5%"
            w="200px"
            h="200px"
            bg="purple.100"
            borderRadius="full"
            opacity={0.3}
          />

          <VStack gap={6} position="relative" zIndex={1}>
            <Icon as={FaHandshake} boxSize={16} color="blue.600" />
            <Heading
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              color="black"
            >
              Partner with{" "}
              <Text as="span" color="blue.600">
                KeshvaCredit
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="2xl">
              Join our growing network of partners and unlock new opportunities
              in the financial services industry.
            </Text>

            <HStack gap={4} flexWrap="wrap" justifyContent="center">
              <Button
                onClick={() => setView("register")}
                size="lg"
                px={10}
                py={6}
                borderRadius="xl"
                bg={view === "register" ? "blue.600" : "transparent"}
                color={view === "register" ? "white" : "blue.600"}
                border={view === "register" ? "none" : "2px solid blue.600"}
                _hover={{
                  bg: view === "register" ? "blue.700" : "blue.50",
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
                bg={view === "learn" ? "blue.600" : "transparent"}
                color={view === "learn" ? "white" : "black"}
                border={view === "learn" ? "none" : "2px solid black"}
                _hover={{
                  bg: view === "learn" ? "blue.700" : "gray.100",
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
              <Badge
                colorScheme="blue"
                fontSize="md"
                px={4}
                py={2}
                borderRadius="full"
                mb={6}
              >
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
                      _hover={{ borderColor: errors.fullName ? "red.400" : "blue.400" }}
                      _focus={{
                        borderColor: errors.fullName ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: errors.contact ? "red.400" : "blue.400" }}
                      _focus={{
                        borderColor: errors.contact ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: errors.email ? "red.400" : "blue.400" }}
                      _focus={{
                        borderColor: errors.email ? "red.400" : "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
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
                bgGradient="linear(to-r, blue.500, purple.600)"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                borderRadius="xl"
                _hover={{
                  bgGradient: "linear(to-r, blue.600, purple.700)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(66, 153, 225, 0.4)",
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
                <Box
                  display="inline-block"
                  p={4}
                  borderRadius="full"
                  bg={`${type.color}.50`}
                  mb={4}
                >
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
                      {benefit}
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
      </Container>
    </Box>
  );
}