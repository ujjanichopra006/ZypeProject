"use client";

import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Input,
  Button,
  VStack,
  HStack,
  Icon,
  Spinner,
  Center,
} from "@chakra-ui/react";

interface UserData {
  person_name: string;
  person_email: string;
  person_phone: string;
  person_pan: string;
  person_dob: string;
  person_aadhar: string;
  person_name_as_per_aadhar: string;
  employment_type: string;
  person_age: number;
  loan_purpose: string;
  annual_income: number;
  person_location: string;
  personal_loan_amount: number;
}

export default function Profile() {
  const router = useRouter();

  const [data, setData] = useState<UserData | null>(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bgColor = "gray.50";
  const cardBg = "white";
  const borderColor = "gray.200";
  const textColor = "gray.800";
  const labelColor = "gray.700";
  const inputBg = "white";

  const fetchUser = async () => {
    try {
      const phone = typeof window !== "undefined" ? localStorage.getItem("phone") || "" : "";

      if (!phone) {
        setIsEmpty(true);
        setLoading(false);
        return;
      }

      const res = await axios.post(
        "https://keshvacredit.onrender.com/api/personal-loan/get-user",
        {
          person_phone: phone,
        }
      );

      const user = res.data?.data || res.data?.user || res.data;

      if (!user || Object.keys(user).length === 0) {
        setIsEmpty(true);
        setData(null);
      } else {
        setData(user);
        setIsEmpty(false);
      }
    } catch (err) {
      console.error(err);
      setIsEmpty(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateUser = async () => {
    if (!data) {
      toast.error("No profile data found");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.put(
        "https://keshvacredit.onrender.com/api/personal-loan/update-user",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Update Response:", response.data);

      toast.success("Profile Updated Successfully");

      setIsEditing(false);

      await fetchUser();
    } catch (error: any) {
      console.error(error.response?.data || error);

      toast.error(error.response?.data?.message || "Profile Update Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]: name === "person_age" || name === "personal_loan_amount" || name === "annual_income"
          ? Number(value)
          : value,
      };
    });
  };

  // LOADING
  if (loading) {
    return (
      <Center minH="100vh" bg={bgColor}>
        <VStack gap={4}>
          <Spinner
            size="xl"
            color="blue.500"
          />
          <Text color="gray.500" fontSize="sm">
            Loading profile...
          </Text>
        </VStack>
      </Center>
    );
  }

  // EMPTY STATE
  if (isEmpty || !data) {
    return (
      <Center minH="100vh" bg={bgColor}>
        <VStack gap={6} textAlign="center">
          <Icon as={UserRound} boxSize={16} color="gray.400" />
          <Heading as="h1" fontSize="3xl" fontWeight="bold" color={textColor}>
            Complete Your Profile
          </Heading>
          <Text color="gray.500" fontSize="md">
            No profile found. Please fill your details.
          </Text>
          <Button
            onClick={() => router.push("/personal-loan")}
            colorScheme="blue"
            size="lg"
            px={8}
            borderRadius="xl"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            transition="all 0.3s"
          >
            Complete Profile
          </Button>
        </VStack>
      </Center>
    );
  }

  // ✅ MAIN PROFILE UI
  const profileFields = [
    { label: "Name", name: "person_name", type: "text", value: data.person_name },
    { label: "Email", name: "person_email", type: "email", value: data.person_email },
    { label: "Phone", name: "person_phone", type: "text", value: data.person_phone, disabled: true },
    { label: "PAN", name: "person_pan", type: "text", value: data.person_pan },
    { label: "Aadhar", name: "person_aadhar", type: "text", value: data.person_aadhar },
    { label: "Date of Birth", name: "person_dob", type: "date", value: data.person_dob?.split("T")[0] },
    { label: "Employment Type", name: "employment_type", type: "text", value: data.employment_type },
    { label: "Age", name: "person_age", type: "number", value: data.person_age },
    { label: "Location", name: "person_location", type: "text", value: data.person_location },
    { label: "Loan Purpose", name: "loan_purpose", type: "text", value: data.loan_purpose },
    { label: "Loan Amount", name: "personal_loan_amount", type: "number", value: data.personal_loan_amount },
    { label: "Annual Income", name: "annual_income", type: "number", value: data.annual_income },
  ];

  return (
    <Box minH="100vh" bg={bgColor} py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }}>
      <Container maxW="6xl">
        {/* Header */}
        <VStack gap={2} mb={8} align="flex-start">
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={textColor}>
            Welcome {data.person_name}
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Manage your profile information
          </Text>
        </VStack>

        {/* Profile Card */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="xl"
          border="1px"
          borderColor={borderColor}
          p={{ base: 4, md: 8 }}
        >
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
            {profileFields.map((field, index) => (
              <GridItem key={index}>
              <Box>
                <Text color={labelColor} fontWeight="semibold" fontSize="sm" mb={2}>
                  {field.label}
                </Text>
                <Input
                  name={field.name}
                  type={field.type}
                  value={field.value || ""}
                  onChange={handleInputChange}
                  disabled={!isEditing || field.disabled}
                  bg={inputBg}
                  border="2px"
                  borderColor={borderColor}
                  borderRadius="xl"
                  height="50px"
                  px={4}
                  fontSize="sm"
                  color={textColor}
                  _disabled={{
                    opacity: 0.7,
                    cursor: "not-allowed",
                    bg: inputBg,
                  }}
                  _hover={{
                    borderColor: isEditing && !field.disabled ? "blue.400" : borderColor,
                  }}
                  _focus={{
                    borderColor: isEditing && !field.disabled ? "blue.500" : borderColor,
                    boxShadow: isEditing && !field.disabled ? "0 0 0 3px rgba(66, 153, 225, 0.2)" : "none",
                  }}
                />
              </Box>
            </GridItem>
            ))}
          </Grid>

          {/* Action Buttons */}
          <HStack gap={4} mt={8} flexWrap="wrap">
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                colorScheme="blue"
                size="lg"
                px={8}
                borderRadius="xl"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s"
              >
                Edit Profile
              </Button>
            ) : (
              <>
                <Button
                  onClick={updateUser}
                  colorScheme="green"
                  size="lg"
                  px={8}
                  borderRadius="xl"
                  disabled={isSubmitting}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.3s"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>

                <Button
                  onClick={() => {
                    setIsEditing(false);
                    fetchUser();
                  }}
                  colorScheme="gray"
                  size="lg"
                  px={8}
                  borderRadius="xl"
                  _hover={{
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  Cancel
                </Button>
              </>
            )}
          </HStack>

          {/* Info Alert */}
          {isEditing && (
            <Box
              borderRadius="xl"
              mt={6}
              bg="blue.50"
              color="blue.700"
              border="1px"
              borderColor="blue.200"
              p={4}
            >
              <Text fontSize="sm" fontWeight="bold" mb={1}>
                Edit Mode
              </Text>
              <Text fontSize="xs">
                You are currently editing your profile. Click "Save Changes" when you're done.
              </Text>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}