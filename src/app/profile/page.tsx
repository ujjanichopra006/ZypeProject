"use client";

import {
  UserRound,
  Mail,
  Phone,
  CreditCard,
  Calendar,
  MapPin,
  Briefcase,
  Target,
  IndianRupee,
  TrendingUp,
  User,
  Edit3,
  Save,
  X,
  Shield,
  Sparkles,
} from "lucide-react";
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
  Flex,
  Badge,
  Progress,
  Group,
  InputElement,
  Separator,
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

  const fetchUser = async () => {
    try {
      const phone =
        typeof window !== "undefined" ? localStorage.getItem("phone") || "" : "";

      if (!phone) {
        setIsEmpty(true);
        setLoading(false);
        return;
      }

      const res = await axios.post(
        "https://keshvacredit.onrender.com/api/personal-loan/get-user",
        { person_phone: phone }
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
      await axios.put(
        "https://keshvacredit.onrender.com/api/personal-loan/update-user",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

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
        [name]:
          name === "person_age" ||
          name === "personal_loan_amount" ||
          name === "annual_income"
            ? Number(value)
            : value,
      };
    });
  };

  // Profile completion calculation
  const calculateCompletion = () => {
    if (!data) return 0;
    const fields = [
      data.person_name,
      data.person_email,
      data.person_phone,
      data.person_pan,
      data.person_dob,
      data.person_aadhar,
      data.employment_type,
      data.person_age,
      data.person_location,
      data.loan_purpose,
      data.personal_loan_amount,
      data.annual_income,
    ];
    const filled = fields.filter((f) => f && f !== "" && f !== 0).length;
    return Math.round((filled / fields.length) * 100);
  };

  // ============ LOADING ============
  if (loading) {
    return (
      <Center minH="100vh" bg="gray.50">
        <VStack gap={6}>
          <Box position="relative">
            <Spinner
              size="xl"
              color="blue.500"
            />
            <Icon
              as={UserRound}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              boxSize={6}
              color="blue.500"
            />
          </Box>
          <VStack gap={1}>
            <Text color="gray.800" fontWeight="bold" fontSize="lg">
              Loading your profile
            </Text>
            <Text color="gray.500" fontSize="sm">
              Please wait a moment...
            </Text>
          </VStack>
        </VStack>
      </Center>
    );
  }

  // ============ EMPTY STATE ============
  if (isEmpty || !data) {
    return (
      <Center minH="100vh" bg="gray.50" px={4}>
        <Box
          maxW="500px"
          w="full"
          bg="white"
          borderRadius="3xl"
          p={{ base: 8, md: 12 }}
          boxShadow="2xl"
          textAlign="center"
        >
          <Flex
            w="100px"
            h="100px"
            bg="linear-gradient(135deg, #FF9933 0%, #f97316 100%)"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mb={6}
            boxShadow="0 10px 30px rgba(255, 153, 51, 0.3)"
          >
            <Icon as={UserRound} boxSize={12} color="white" />
          </Flex>

          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="black"
            color="gray.800"
            mb={3}
          >
            Complete Your Profile
          </Heading>

          <Text color="gray.500" fontSize="md" mb={8} maxW="sm" mx="auto">
            Please fill in your details to get personalized loan offers and
            faster approvals.
          </Text>

          <Button
            onClick={() => router.push("/personal-loan")}
            size="lg"
            w="full"
            bg="linear-gradient(135deg, #FF9933 0%, #f97316 100%)"
            color="white"
            fontSize="lg"
            fontWeight="bold"
            borderRadius="xl"
            py={7}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 10px 30px rgba(255, 153, 51, 0.4)",
            }}
            transition="all 0.3s"
          >
            Complete Profile
          </Button>
        </Box>
      </Center>
    );
  }

  // ============ MAIN PROFILE UI ============
  const completion = calculateCompletion();

  // Grouped fields with icons
  const personalInfo = [
    { label: "Full Name", name: "person_name", type: "text", value: data.person_name, icon: User, color: "blue" },
    { label: "Date of Birth", name: "person_dob", type: "date", value: data.person_dob?.split("T")[0], icon: Calendar, color: "purple" },
    { label: "Age", name: "person_age", type: "number", value: data.person_age, icon: Sparkles, color: "pink" },
    { label: "PAN Number", name: "person_pan", type: "text", value: data.person_pan, icon: CreditCard, color: "orange" },
    { label: "Aadhar Number", name: "person_aadhar", type: "text", value: data.person_aadhar, icon: Shield, color: "green" },
  ];

  const contactInfo = [
    { label: "Email Address", name: "person_email", type: "email", value: data.person_email, icon: Mail, color: "red" },
    { label: "Phone Number", name: "person_phone", type: "text", value: data.person_phone, icon: Phone, color: "teal", disabled: true },
    { label: "Location", name: "person_location", type: "text", value: data.person_location, icon: MapPin, color: "cyan" },
  ];

  const loanInfo = [
    { label: "Employment Type", name: "employment_type", type: "text", value: data.employment_type, icon: Briefcase, color: "indigo" },
    { label: "Annual Income", name: "annual_income", type: "number", value: data.annual_income, icon: TrendingUp, color: "green" },
    { label: "Loan Purpose", name: "loan_purpose", type: "text", value: data.loan_purpose, icon: Target, color: "yellow" },
    { label: "Loan Amount", name: "personal_loan_amount", type: "number", value: data.personal_loan_amount, icon: IndianRupee, color: "emerald" },
  ];

  const renderField = (field: any, index: number) => {
    const IconComponent = field.icon;
    return (
      <GridItem key={index}>
        <Text
          color="gray.600"
          fontWeight="semibold"
          fontSize="xs"
          mb={2}
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {field.label}
        </Text>
        <Group>
          <InputElement pointerEvents="none" h="50px">
            <Icon as={IconComponent} color={`${field.color}.500`} boxSize={5} />
          </InputElement>
          <Input
            name={field.name}
            type={field.type}
            value={field.value || ""}
            onChange={handleInputChange}
            disabled={!isEditing || field.disabled}
            bg={field.disabled ? "gray.50" : "white"}
            border="2px"
            borderColor="gray.200"
            borderRadius="xl"
            height="50px"
            pl={12}
            pr={4}
            fontSize="sm"
            color="gray.800"
            fontWeight="medium"
            _disabled={{
              opacity: 0.8,
              cursor: "not-allowed",
            }}
            _hover={{
              borderColor: isEditing && !field.disabled ? `${field.color}.300` : "gray.200",
            }}
            _focus={{
              borderColor: `${field.color}.500`,
              boxShadow: `0 0 0 3px rgba(66, 153, 225, 0.15)`,
            }}
          />
        </Group>
      </GridItem>
    );
  };

  const SectionCard = ({
    title,
    subtitle,
    icon,
    gradient,
    children,
  }: {
    title: string;
    subtitle: string;
    icon: any;
    gradient: string;
    children: React.ReactNode;
  }) => (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="lg"
      border="1px"
      borderColor="gray.100"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ boxShadow: "xl" }}
    >
      {/* Section Header */}
      <Box bg={gradient} p={5} color="white">
        <Flex align="center" gap={3}>
          <Flex
            w="40px"
            h="40px"
            bg="rgba(255,255,255,0.2)"
            borderRadius="lg"
            alignItems="center"
            justifyContent="center"
            backdropFilter="blur(10px)"
          >
            <Icon as={icon} boxSize={5} />
          </Flex>
          <Box>
            <Heading fontSize="lg" fontWeight="bold">
              {title}
            </Heading>
            <Text fontSize="xs" opacity={0.9}>
              {subtitle}
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Section Content */}
      <Box p={{ base: 5, md: 6 }}>{children}</Box>
    </Box>
  );

  return (
    <Box minH="100vh" bg="gray.50" py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }} mt={20}>
      <Container maxW="6xl">
        {/* ============ PROFILE HEADER ============ */}
        <Box
          bg="white"
          borderRadius="2xl"
          boxShadow="xl"
          border="1px"
          borderColor="gray.100"
          p={{ base: 6, md: 8 }}
          mb={6}
          position="relative"
          overflow="hidden"
        >
          {/* Decorative background */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="3px"
            bg="linear-gradient(90deg, #FF9933, #FFFFFF, #138808)"
          />

          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            gap={6}
          >
            {/* Avatar */}
            <Flex
              w={{ base: "80px", md: "100px" }}
              h={{ base: "80px", md: "100px" }}
              bg="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              borderRadius="2xl"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
              boxShadow="0 10px 30px rgba(102, 126, 234, 0.3)"
              position="relative"
            >
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="black" color="black">
                {data.person_name?.charAt(0)?.toUpperCase() || "U"}
              </Text>
              <Box
                position="absolute"
                bottom="-4px"
                right="-4px"
                w="28px"
                h="28px"
                bg="green.500"
                borderRadius="full"
                border="3px solid white"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box w="8px" h="8px" bg="white" borderRadius="full" />
              </Box>
            </Flex>

            {/* User Info */}
            <Box flex="1" w="full">
              <HStack mb={2} flexWrap="wrap" gap={2}>
                <Heading
                  as="h1"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="black"
                  color="gray.800"
                >
                  {data.person_name}
                </Heading>
                <Badge
                  colorScheme="green"
                  fontSize="xs"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontWeight="bold"
                >
                  ✓ VERIFIED
                </Badge>
              </HStack>

              <HStack color="gray.500" fontSize="sm" mb={3} flexWrap="wrap" gap={3}>
                <HStack gap={1}>
                  <Icon as={Mail} boxSize={4} />
                  <Text>{data.person_email}</Text>
                </HStack>
                <HStack gap={1}>
                  <Icon as={Phone} boxSize={4} />
                  <Text>{data.person_phone}</Text>
                </HStack>
              </HStack>

              {/* Profile Completion */}
              <Box>
                <Flex justify="space-between" mb={1}>
                  <Text fontSize="xs" fontWeight="semibold" color="gray.600">
                    Profile Completion
                  </Text>
                  <Text fontSize="xs" fontWeight="bold" color="green.600">
                    {completion}%
                  </Text>
                </Flex>
                <Progress.Root
                  value={completion}
                  size="sm"
                  borderRadius="full"
                  bg="gray.100"
                  css={{
                    "& > div": {
                      bg: completion === 100
                        ? "linear-gradient(90deg, #138808, #22c55e)"
                        : "linear-gradient(90deg, #FF9933, #f97316)",
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Action Button */}
            <Box flexShrink={0}>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  bg="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                  color="white"
                  size="lg"
                  px={6}
                  borderRadius="xl"
                  fontWeight="bold"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(255, 153, 51, 0.3)",
                  }}
                  transition="all 0.3s"
                >
                  Edit Profile
                </Button>
              ) : (
                <HStack gap={2}>
                  <Button
                    onClick={updateUser}
                    colorScheme="green"
                    size="lg"
                    px={5}
                    borderRadius="xl"
                    fontWeight="bold"
                    disabled={isSubmitting}
                    _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                    transition="all 0.3s"
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </Button>
                  <Button
                    onClick={() => {
                      setIsEditing(false);
                      fetchUser();
                    }}
                  
                    variant="outline"
                    size="lg"
                    px={5}
                    borderRadius="xl"
                    fontWeight="bold"
                    _hover={{ transform: "translateY(-2px)" }}
                    transition="all 0.3s"
                  >
                    Cancel
                  </Button>
                </HStack>
              )}
            </Box>
          </Flex>

          {/* Edit Mode Alert */}
          {isEditing && (
            <Box
              mt={6}
              bg="blue.50"
              border="1px"
              borderColor="blue.200"
              borderRadius="xl"
              p={4}
            >
              <Flex align="center" gap={3}>
                <Flex
                  w="36px"
                  h="36px"
                  bg="blue.500"
                  borderRadius="lg"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={Edit3} color="white" boxSize={4} />
                </Flex>
                <Box>
                  <Text fontSize="sm" fontWeight="bold" color="blue.800">
                    Edit Mode Active
                  </Text>
                  <Text fontSize="xs" color="blue.700">
                    You can now update your information. Click "Save" when done.
                  </Text>
                </Box>
              </Flex>
            </Box>
          )}
        </Box>

        {/* ============ SECTIONS GRID ============ */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={6}
          mb={6}
        >
          {/* Personal Information */}
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <SectionCard
              title="Personal Information"
              subtitle="Your basic identity details"
              icon={UserRound}
              gradient="linear-gradient(135deg,  #4facfe 0%, #00f2fe 100%)"
            >
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={5}>
                {personalInfo.map((field, index) => renderField(field, index))}
              </Grid>
            </SectionCard>
          </GridItem>

          {/* Contact Information */}
          <SectionCard
            title="Contact Details"
            subtitle="How we can reach you"
            icon={Mail}
            gradient="linear-gradient(135deg,  #4facfe 0%, #00f2fe 100%)"
          >
            <VStack gap={5} align="stretch">
              {contactInfo.map((field, index) => renderField(field, index))}
            </VStack>
          </SectionCard>

          {/* Employment & Loan */}
          <SectionCard
            title="Employment & Loan"
            subtitle="Financial & loan preferences"
            icon={Briefcase}
            gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          >
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
              {loanInfo.map((field, index) => renderField(field, index))}
            </Grid>
          </SectionCard>
        </Grid>

        {/* ============ FOOTER INFO ============ */}
        <Box
          bg="white"
          borderRadius="xl"
          p={5}
          border="1px"
          borderColor="gray.100"
          textAlign="center"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            gap={{ base: 2, md: 4 }}
            color="gray.500"
            fontSize="sm"
          >
            <HStack gap={2}>
              <Icon as={Shield} boxSize={4} color="green.500" />
              <Text>Your data is secured with bank-grade encryption</Text>
            </HStack>
            <Separator
              orientation="vertical"
              h="16px"
              borderColor="gray.300"
              display={{ base: "none", md: "block" }}
            />
            <Text>🔒 Last updated: {new Date().toLocaleDateString()}</Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}