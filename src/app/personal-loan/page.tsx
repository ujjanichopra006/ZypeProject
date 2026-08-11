"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import OtpPopup from "../popup/popup";
import toast from "react-hot-toast";
import {
  Box,
  Container,
  Stack,
  HStack,
  Heading,
  Input,
  Button,
  Spinner,
  Icon,
} from "@chakra-ui/react";

import {
  User,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  Wallet,
  BriefcaseBusiness,
  BadgeIndianRupee,
  CreditCard,
  Building,
} from "lucide-react";

interface FormDataState {
  person_name: string;
  person_phone: string;
  person_email: string;
  person_dob: string;
  person_pan: string;
  person_aadhar: string;
  person_name_as_per_aadhar: string;
  employment_type: string;
  person_age: string;
  loan_purpose: string;
  annual_income: string;
  person_location: string;
  personal_loan_amount: string;
}

interface FormFieldProps {
  icon: typeof User;
  name: keyof FormDataState;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
}

function FormField({
  icon,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  readOnly = false,
}: FormFieldProps) {
  return (
    <HStack
      gap={3}
      pb={3}
      borderBottom="1px solid"
      borderColor="gray.900"
      transition="border-color 0.2s ease"
      _focusWithin={{ borderColor: "#111525" }}
    >
      <Icon as={icon} color="gray.900" boxSize={5} flexShrink={0} />
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        variant="flushed"
        border="none"
        px={0}
        _focus={{ boxShadow: "none" }}
        bg="gray.50"
      />
    </HStack>
  );
}

export default function PersonalLoan() {
  const router = useRouter();

  const [showOtp, setShowOtp] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const [formData, setFormData] = useState<FormDataState>({
    person_name: "",
    person_phone: "",
    person_email: "",
    person_dob: "",
    person_pan: "",
    person_aadhar: "",
    person_name_as_per_aadhar: "",
    employment_type: "",
    person_age: "",
    loan_purpose: "",
    annual_income: "",
    person_location: "",
    personal_loan_amount: "",
  });

  // Check if all fields are filled
  useEffect(() => {
    const allFilled = Object.values(formData).every((value) => value !== "");
    setIsFormComplete(allFilled);
  }, [formData]);

  // Verify user access
  useEffect(() => {
    const phone = localStorage.getItem("phone");
    const isSubmitted = localStorage.getItem("personalLoanSubmitted");

    if (isSubmitted === "true") {
      router.replace("/personalloanlender");
      return;
    }

    if (!phone) {
      setShowOtp(true);
      setCheckingAccess(false);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      person_phone: phone,
    }));

    setIsVerified(true);
    getUserData(phone);
    setCheckingAccess(false);
  }, []);

  const getUserData = async (phone: string) => {
    try {
      const response = await fetch(
        `https://keshvacredit.onrender.com/api/personal-loan/get-user?person_phone=${phone}`
      );

      const data = await response.json();

      if (response.ok && data) {
        const user = data.data || data.user || data;

        const isAlreadySubmitted =
          user.person_name && user.person_email && user.person_pan && user.person_aadhar;

        if (isAlreadySubmitted) {
          localStorage.setItem("personalLoanSubmitted", "true");
          router.replace("/personalloanlender");
          return;
        }

        setFormData({
          person_name: user.person_name || "",
          person_phone: user.person_phone || phone,
          person_email: user.person_email || "",
          person_dob: user.person_dob || "",
          person_pan: user.person_pan || "",
          person_aadhar: user.person_aadhar || "",
          person_name_as_per_aadhar: user.person_name_as_per_aadhar || "",
          employment_type: user.employment_type || "",
          person_age: user.person_age?.toString() || "",
          loan_purpose: user.loan_purpose || "",
          annual_income: user.annual_income?.toString() || "",
          person_location: user.person_location || "",
          personal_loan_amount: user.personal_loan_amount?.toString() || "",
        });
      }
    } catch (error) {
      console.error("Get User Error:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormComplete) {
      toast.error("Please fill all the fields before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "https://keshvacredit.onrender.com/api/personal-loan/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            person_age: Number(formData.person_age),
            annual_income: Number(formData.annual_income),
            personal_loan_amount: Number(formData.personal_loan_amount),
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Personal Loan Application Submitted Successfully");
        localStorage.setItem("personalLoanSubmitted", "true");

        setFormData({
          person_name: "",
          person_phone: localStorage.getItem("phone") || "",
          person_email: "",
          person_dob: "",
          person_pan: "",
          person_aadhar: "",
          person_name_as_per_aadhar: "",
          employment_type: "",
          person_age: "",
          loan_purpose: "",
          annual_income: "",
          person_location: "",
          personal_loan_amount: "",
        });

        router.push("/personalloanlender");
      } else {
        toast.error(data.message || "Submission Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  if (checkingAccess) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="#111525" borderWidth="4px" />
      </Box>
    );
  }

  return (
    <>
      <Box
        minH="100vh"
        bg ="blue.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={4}
        py={10}
      >
        {showOtp && (
          <OtpPopup
            onClose={() => router.push("/")}
            onVerified={() => {
              const savedPhone = localStorage.getItem("phone");

              if (savedPhone) {
                setShowOtp(false);
                setIsVerified(true);

                setFormData((prev) => ({
                  ...prev,
                  person_phone: savedPhone,
                }));

                getUserData(savedPhone);
              }
            }}
          />
        )}

        <Container maxW="3xl" py={10} mt={10}>
          {isVerified && (
            <Box
              as="form"
              onSubmit={handleSubmit}
              bg="white"
              color="#111525"
              borderRadius="3xl"
              w="full"
              p={{ base: 6, md: 12 }}
              boxShadow="xl"
            >
              <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={10}>
                Personal Loan Form
              </Heading>

              <Stack gap={6} mb={8}>
                <FormField
                  icon={User}
                  name="person_name"
                  placeholder="Full Name"
                  value={formData.person_name}
                  onChange={handleChange}
                />

                <FormField
                  icon={Phone}
                  name="person_phone"
                  placeholder="Phone Number"
                  value={formData.person_phone}
                  onChange={handleChange}
                  readOnly
                />

                <FormField
                  icon={Mail}
                  name="person_email"
                  placeholder="Email Address"
                  value={formData.person_email}
                  onChange={handleChange}
                />

                <FormField
                  icon={CalendarDays}
                  name="person_dob"
                  placeholder="Date of Birth"
                  type="date"
                  value={formData.person_dob}
                  onChange={handleChange}
                />

                <FormField
                  icon={CreditCard}
                  name="person_pan"
                  placeholder="PAN Card Number"
                  value={formData.person_pan}
                  onChange={handleChange}
                />

                <FormField
                  icon={MapPin}
                  name="person_aadhar"
                  placeholder="Aadhar Card Number"
                  value={formData.person_aadhar}
                  onChange={handleChange}
                />

                <FormField
                  icon={BadgeIndianRupee}
                  name="annual_income"
                  placeholder="Annual Income (₹)"
                  value={formData.annual_income}
                  onChange={handleChange}
                />

                <FormField
                  icon={BriefcaseBusiness}
                  name="employment_type"
                  placeholder="Employment Type"
                  value={formData.employment_type}
                  onChange={handleChange}
                />

                <FormField
                  icon={User}
                  name="person_age"
                  placeholder="Age"
                  value={formData.person_age}
                  onChange={handleChange}
                />

                <FormField
                  icon={Wallet}
                  name="loan_purpose"
                  placeholder="Loan Purpose"
                  value={formData.loan_purpose}
                  onChange={handleChange}
                />

                <FormField
                  icon={Building}
                  name="person_location"
                  placeholder="City / Location"
                  value={formData.person_location}
                  onChange={handleChange}
                />

                <FormField
                  icon={BadgeIndianRupee}
                  name="personal_loan_amount"
                  placeholder="Loan Amount Required (₹)"
                  value={formData.personal_loan_amount}
                  onChange={handleChange}
                />

                <FormField
                  icon={User}
                  name="person_name_as_per_aadhar"
                  placeholder="Name as per Aadhar Card"
                  value={formData.person_name_as_per_aadhar}
                  onChange={handleChange}
                />
              </Stack>

              <Button
                type="submit"
                disabled={!isFormComplete}
                w="full"
                py={7}
                borderRadius="xl"
                fontSize="xl"
                fontWeight="bold"
                bg={isFormComplete ?  "#1a2038" : "#000000"}
                color={isFormComplete ? "white" : "white"}
                cursor={isFormComplete ? "pointer" : "not-allowed"}
                _hover={isFormComplete ? { bg: "#1a2038" } : {}}
                transition="all 0.25s ease"
              >
                {isFormComplete ? "Submit Application" : "Fill All Fields to Submit"}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}