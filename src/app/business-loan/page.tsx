"use client";

import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import OtpPopup from "../popup/popup";
import toast from "react-hot-toast";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Input,
  Button,
  Spinner,
  chakra,
} from "@chakra-ui/react";

const Form = chakra("form");

interface BusinessFormData {
  business_owner_name: string;
  business_owner_phone: string;
  business_owner_email: string;
  business_owner_pan: string;
  business_ower_dob: string;
  business_name: string;
  business_type: string;
  business_age: string;
  annual_revenue: string;
  business_location: string;
  business_loan_amount: string;
  gst_number: string;
  Udyam_Registration_Number: string;
  msme_registration_number: string;
  business_pan: string;
  business_loan_purpose: string;
}

const inputStyles = {
  border: "1px solid",
  borderColor: "gray.200",
  borderRadius: "lg",
  p: 3,
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  _focus: { borderColor: "#111525", boxShadow: "0 0 0 1px #111525" },
  _placeholder: { color: "gray.400" },
};

export default function BusinessLoan() {
  const router = useRouter();

  const [showOtp, setShowOtp] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [formData, setFormData] = useState<BusinessFormData>({
    business_owner_name: "",
    business_owner_phone: "",
    business_owner_email: "",
    business_owner_pan: "",
    business_ower_dob: "",

    business_name: "",
    business_type: "",
    business_age: "",

    annual_revenue: "",
    business_location: "",
    business_loan_amount: "",

    gst_number: "",
    Udyam_Registration_Number: "",
    msme_registration_number: "",

    business_pan: "",
    business_loan_purpose: "Business Expansion",
  });

  useEffect(() => {
    const phone = localStorage.getItem("phone");
    const isSubmitted = localStorage.getItem("businessLoanSubmitted");

    if (isSubmitted === "true") {
      router.replace("/businessloanlender");
      return;
    }

    if (!phone) {
      setShowOtp(true);
      setCheckingAccess(false);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      business_owner_phone: phone,
    }));

    setIsVerified(true);
    setCheckingAccess(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/business/createbusinessman",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            business_owner_name: formData.business_owner_name,
            business_owner_email: formData.business_owner_email,
            business_owner_phone: Number(formData.business_owner_phone),
            business_owner_pan: formData.business_owner_pan,
            business_ower_dob: formData.business_ower_dob,
            business_pan: formData.business_pan || formData.business_owner_pan,
            business_name: formData.business_name,
            business_type: formData.business_type,
            business_age: Number(formData.business_age),
            business_loan_purpose: formData.business_loan_purpose,
            annual_revenue: Number(formData.annual_revenue),
            business_location: formData.business_location,
            business_loan_amount: Number(formData.business_loan_amount),
            Udyam_Registration_Number: formData.Udyam_Registration_Number,
            gst_number: formData.gst_number,
            msme_registration_number: formData.msme_registration_number,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Business Loan Application Submitted Successfully");
        localStorage.setItem("businessLoanSubmitted", "true");
        router.push("/businessloanlender");
      } else {
        toast.error(data.message || "Submission Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
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
        bg="blue.100"
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
              const phone = localStorage.getItem("phone");

              setFormData((prev) => ({
                ...prev,
                business_owner_phone: phone || "",
              }));

              setShowOtp(false);
              setIsVerified(true);
            }}
          />
        )}

        <Container maxW="4xl" py={10} mt={10}>
          {isVerified && (
            <Form
              onSubmit={handleSubmit}
              bg="white"
              borderRadius="3xl"
              boxShadow="xl"
              p={{ base: 6, md: 8 }}
            >
              <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={8} color="#111525">
                Business Loan Form
              </Heading>

              <Heading as="h2" fontSize="xl" fontWeight="semibold" mb={5} color="#111525">
                Basic Details
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={10}>
                <Input
                  type="text"
                  name="business_owner_name"
                  placeholder="Full Name"
                  value={formData.business_owner_name}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="tel"
                  name="business_owner_phone"
                  placeholder="Mobile Number"
                  value={formData.business_owner_phone}
                  readOnly
                  onChange={handleChange}
                  required
                  bg="gray.50"
                  {...inputStyles}
                />

                <Input
                  type="email"
                  name="business_owner_email"
                  placeholder="Email Address"
                  value={formData.business_owner_email}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="business_owner_pan"
                  placeholder="PAN Number"
                  value={formData.business_owner_pan}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="business_name"
                  placeholder="Business Name"
                  value={formData.business_name}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />
              </SimpleGrid>

              <Heading as="h2" fontSize="xl" fontWeight="semibold" mb={5} color="#111525">
                Additional Details
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <Input
                  type="text"
                  name="business_pan"
                  placeholder="Business PAN Number"
                  value={formData.business_pan}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="date"
                  name="business_ower_dob"
                  value={formData.business_ower_dob}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="business_type"
                  placeholder="Business Type"
                  value={formData.business_type}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="number"
                  name="business_age"
                  placeholder="Business Age (Years)"
                  value={formData.business_age}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="number"
                  name="business_loan_amount"
                  placeholder="Loan Amount"
                  value={formData.business_loan_amount}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="number"
                  name="annual_revenue"
                  placeholder="Annual Revenue"
                  value={formData.annual_revenue}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="business_location"
                  placeholder="Business Location"
                  value={formData.business_location}
                  onChange={handleChange}
                  required
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="gst_number"
                  placeholder="GST Number"
                  value={formData.gst_number}
                  onChange={handleChange}
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="Udyam_Registration_Number"
                  placeholder="Udyam Registration Number"
                  value={formData.Udyam_Registration_Number}
                  onChange={handleChange}
                  {...inputStyles}
                />

                <Input
                  type="text"
                  name="msme_registration_number"
                  placeholder="MSME Registration Number"
                  value={formData.msme_registration_number}
                  onChange={handleChange}
                  gridColumn={{ md: "span 2" }}
                  {...inputStyles}
                />
              </SimpleGrid>

              <Button
                type="submit"
                disabled={loading}
                w="full"
                mt={10}
                py={7}
                borderRadius="xl"
                fontWeight="bold"
                fontSize="lg"
                bg="#111525"
                color="white"
                _hover={{ bg: "#1a2038" }}
                _disabled={{ opacity: 0.7, cursor: "not-allowed" }}
                transition="all 0.25s ease"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </Form>
          )}
        </Container>
      </Box>
    </>
  );
}