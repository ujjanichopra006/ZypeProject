"use client";
import toast from "react-hot-toast";
import { useState, useEffect, type ComponentProps } from "react";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";

import {
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  BadgeIndianRupee,
  CreditCard,
  Home,
} from "lucide-react";

import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  InputGroup,
  Button,
  Spinner,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

// Chakra UI v3 no longer exports FormControl or InputLeftElement. These
// wrappers retain the v2-style layout used throughout this form.
function FormControl({ children, ...props }: ComponentProps<typeof Box>) {
  return (
    <Box position="relative" {...props}>
      {children}
    </Box>
  );
}

function InputLeftElement({ children, ...props }: ComponentProps<typeof Box>) {
  return (
    <Box
      position="absolute"
      insetStart={3}
      top="50%"
      transform="translateY(-50%)"
      {...props}
    >
      {children}
    </Box>
  );
}

export default function HomeLoan() {
  const router = useRouter();

  const [showOtp, setShowOtp] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState({
    applicant_name: "",
    applicant_email: "",
    applicant_phone: "",
    applicant_pan: "",
    applicant_aadhar: "",
    applicant_dob: "",
    applicant_age: "",
    employment_type: "",
    applicant_location: "",
    annual_income: "",
    work_experience_years: "",
    property_type: "",
    property_address: "",
    property_city: "",
    property_state: "",
    property_pincode: "",
    property_area_sqft: "",
    property_value: "",
    loan_amount_requested: "",
    loan_purpose: "",
    loan_tenure_years: "",
    down_payment: "",
  });

  // Check if all fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setIsFormComplete(allFilled);
  }, [formData]);

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    const isSubmitted = localStorage.getItem("homeLoanSubmitted");

    if (isSubmitted === "true") {
      router.replace("/homeloanlender");
      return;
    }

    if (!phone) {
      setShowOtp(true);
      setCheckingAccess(false);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      applicant_phone: phone,
    }));

    setIsVerified(true);
    setCheckingAccess(false);
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) {
      toast.error("Please fill all fields before submitting");
      return;
    }

    try {
      const response = await fetch(
        "https://keshvacredit.onrender.com/api/home-loan/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            applicant_name: formData.applicant_name,
            applicant_email: formData.applicant_email,
            applicant_phone: formData.applicant_phone,
            applicant_pan: formData.applicant_pan,
            applicant_aadhar: formData.applicant_aadhar,
            applicant_dob: formData.applicant_dob,
            applicant_age: Number(formData.applicant_age),
            employment_type: formData.employment_type,
            applicant_location: formData.applicant_location,
            annual_income: Number(formData.annual_income),
            work_experience_years: Number(formData.work_experience_years),
            property_type: formData.property_type,
            property_address: formData.property_address,
            property_city: formData.property_city,
            property_state: formData.property_state,
            property_pincode: formData.property_pincode,
            property_area_sqft: Number(formData.property_area_sqft),
            property_value: Number(formData.property_value),
            loan_amount_requested: Number(formData.loan_amount_requested),
            loan_purpose: formData.loan_purpose,
            loan_tenure_years: Number(formData.loan_tenure_years),
            down_payment: Number(formData.down_payment),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Form Submitted Successfully");
        localStorage.setItem("homeLoanSubmitted", "true");

        setFormData({
          applicant_name: "",
          applicant_email: "",
          applicant_phone: localStorage.getItem("phone") || "",
          applicant_pan: "",
          applicant_aadhar: "",
          applicant_dob: "",
          applicant_age: "",
          employment_type: "",
          applicant_location: "",
          annual_income: "",
          work_experience_years: "",
          property_type: "",
          property_address: "",
          property_city: "",
          property_state: "",
          property_pincode: "",
          property_area_sqft: "",
          property_value: "",
          loan_amount_requested: "",
          loan_purpose: "",
          loan_tenure_years: "",
          down_payment: "",
        });

        router.push("/homeloanlender");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  if (checkingAccess) {
    return (
      <Center minH="100vh">
        <Spinner
          size="xl"
          animationDuration="0.65s"
          color="blue.500"
        />
      </Center>
    );
  }

  return (
   <Box
      minH="100vh"
      bg="blue.100"
      py={{ base: 10, md: 12 }}
      px={{ base: 4, md: 6 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {showOtp && (
        <OtpPopup
          onClose={() => router.push("/")}
          onVerified={() => {
            const savedPhone = localStorage.getItem("phone");
            setFormData((prev) => ({
              ...prev,
              applicant_phone: savedPhone || "",
            }));
            setShowOtp(false);
            setIsVerified(true);
          }}
        />
      )}

      {isVerified && (
        <Container maxW="5xl" px={{ base: 0, md: 4 }}>
          {/* Header Section */}
          <VStack gap={6} mb={10} textAlign="center">
            <HStack gap={3} flexWrap="wrap" justifyContent="center">
              <Home size={40} color="black" />
              <Heading
                as="h1"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                fontWeight="extrabold"
                color="black"
                lineHeight="tight"
              >
                Home Loans starting at{" "}
                <Text as="span" color="black">
                  8.50%*
                </Text>{" "}
                Interest Rates
              </Heading>
            </HStack>
            <Text
              color="black"
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight="relaxed"
              maxW="3xl"
            >
              Get the best home loan offers with low interest rates and quick
              approval process.
            </Text>
          </VStack>

          {/* Form Section */}
          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            border="1px"
            borderColor="gray.300"
            borderRadius="3xl"
            p={{ base: 6, md: 8, lg: 12 }}
            boxShadow="xl"
            w="full"
          >
            {/* Applicant Details */}
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              textAlign="center"
              mb={8}
            >
              Applicant Details
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              mb={10}
            >
              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <User size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="applicant_name"
                      placeholder="Applicant Name"
                      value={formData.applicant_name}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <Phone size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="applicant_phone"
                      placeholder="Mobile Number"
                      value={formData.applicant_phone}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      bg="gray.100"
                      readOnly
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <Mail size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="email"
                      name="applicant_email"
                      placeholder="Email Address"
                      value={formData.applicant_email}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <CalendarDays size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="date"
                      name="applicant_dob"
                      value={formData.applicant_dob}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <CreditCard size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="applicant_pan"
                      placeholder="PAN Number"
                      value={formData.applicant_pan}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <CreditCard size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="applicant_aadhar"
                      placeholder="Aadhaar Number"
                      value={formData.applicant_aadhar}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <User size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="applicant_age"
                      placeholder="Age"
                      value={formData.applicant_age}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="applicant_location"
                      placeholder="Location"
                      value={formData.applicant_location}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>
            </Grid>

            {/* Employment Details */}
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              textAlign="center"
              mb={8}
            >
              Employment Details
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              mb={10}
            >
              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <BriefcaseBusiness size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="employment_type"
                      placeholder="Employment Type"
                      value={formData.employment_type}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <BadgeIndianRupee size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="annual_income"
                      placeholder="Annual Income"
                      value={formData.annual_income}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <BriefcaseBusiness size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="work_experience_years"
                      placeholder="Work Experience (Years)"
                      value={formData.work_experience_years}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>
            </Grid>

            {/* Property Details */}
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              textAlign="center"
              mb={8}
            >
              Property Details
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              mb={10}
            >
              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="property_type"
                      placeholder="Property Type"
                      value={formData.property_type}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="property_address"
                      placeholder="Property Address"
                      value={formData.property_address}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="property_city"
                      placeholder="City"
                      value={formData.property_city}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="property_state"
                      placeholder="State"
                      value={formData.property_state}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="property_pincode"
                      placeholder="Pincode"
                      value={formData.property_pincode}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <MapPin size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="property_area_sqft"
                      placeholder="Area (Sq Ft)"
                      value={formData.property_area_sqft}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <BadgeIndianRupee size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="property_value"
                      placeholder="Property Value"
                      value={formData.property_value}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>
            </Grid>

            {/* Loan Details */}
            <Heading
              as="h2"
              fontSize="3xl"
              fontWeight="bold"
              color="black"
              textAlign="center"
              mb={8}
            >
              Loan Details
            </Heading>

            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              mb={10}
            >
              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <BadgeIndianRupee size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="loan_amount_requested"
                      placeholder="Loan Amount"
                      value={formData.loan_amount_requested}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <BriefcaseBusiness size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      name="loan_purpose"
                      placeholder="Loan Purpose"
                      value={formData.loan_purpose}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  {/* <InputGroup> */}
                    <InputLeftElement pointerEvents="none">
                      <CalendarDays size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="loan_tenure_years"
                      placeholder="Loan Tenure (Years)"
                      value={formData.loan_tenure_years}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                  {/* </InputGroup> */}
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl>
                  
                    <InputLeftElement pointerEvents="none">
                      <BadgeIndianRupee size={20} color="#718096" />
                    </InputLeftElement>
                    <Input
                      type="number"
                      name="down_payment"
                      placeholder="Down Payment"
                      value={formData.down_payment}
                      onChange={handleChange}
                      pl={10}
                      py={6}
                      borderRadius="xl"
                      borderColor="gray.300"
                      _hover={{ borderColor: "blue.400" }}
                      _focus={{
                        borderColor: "blue.500",
                        boxShadow: "0 0 0 1px blue.500",
                      }}
                      required
                    />
                 
                </FormControl>
              </GridItem>
            </Grid>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isFormComplete}
              w="full"
              h="64px"
              fontSize="xl"
              fontWeight="bold"
              borderRadius="xl"
              bg={isFormComplete ? "black" : "gray.300"}
              color={isFormComplete ? "white" : "gray.500"}
              _hover={isFormComplete ? { bg: "gray.800" } : {}}
              _disabled={{
                opacity: 1,
                cursor: "not-allowed",
              }}
              transition="all 0.3s"
              mt={4}
            >
              {isFormComplete
                ? "Submit Application"
                : "Fill All Fields to Submit"}
            </Button>
          </Box>
        </Container>
      )}
    </Box>
  );
}
