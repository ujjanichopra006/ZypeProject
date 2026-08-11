"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Separator,
  Icon,
  Table,
} from "@chakra-ui/react";
import { useState } from "react";

// Icons (simple SVG components)
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>
);

// Animated Background Components - Light Theme
const StarField = () => {
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <Box position="absolute" top="0" left="0" w="100%" h="100%" mt="40" py="40" zIndex={0} overflow="hidden" >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "50%",
            background: "#93c5fd",
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
};

// Step Card Component - Light Theme
type StepCardProps = {
  step: string | number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const StepCard = ({
  step,
  title,
  description,
  icon,
  delay,
}: StepCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Flex
      p={6}
      borderRadius="20px"
      bg="white"
      border="1px solid"
      borderColor="blue.100"
      boxShadow="0 10px 30px rgba(30, 64, 175, 0.06)"
      gap={4}
      align="flex-start"
      h="full"
      position="relative"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        borderColor: "blue.300",
        transform: "translateY(-4px)",
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.12)",
      }}
    >
      {/* Step Number */}
      <Box
        position="absolute"
        top="-10px"
        right="-10px"
        w="80px"
        h="80px"
        borderRadius="full"
        bgGradient="linear(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08))"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="3xl"
        fontWeight="900"
        color="rgba(99, 102, 241, 0.12)"
      >
        {step}
      </Box>

      <Flex
        w="50px"
        h="50px"
        borderRadius="14px"
        bgGradient="linear(135deg, #3B82F6, #8B5CF6)"
        align="center"
        justify="center"
        color="white"
        flexShrink={0}
        boxShadow="0 8px 20px rgba(59, 130, 246, 0.25)"
      >
        {icon}
      </Flex>

      <Box flex={1}>
        <Heading size="sm" color="blue.900" mb={2}>
          {title}
        </Heading>

        <Text fontSize="sm" color="blue.700" >
          {description}
        </Text>
      </Box>
    </Flex>
  </motion.div>
);

// Escalation Level Card - Light Theme
type EscalationCardProps = {
  level: string;
  authority: string;
  contact: {
    email?: string;
    phone?: string;
    text?: string;
  };
  purpose: string;
  color: string;
  delay: number;
};

const EscalationCard = ({
  level,
  authority,
  contact,
  purpose,
  color,
  delay,
}: EscalationCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <Flex
      p={6}
      borderRadius="20px"
      bg="white"
      border="1px solid"
      borderColor="blue.100"
      boxShadow="0 10px 30px rgba(30, 64, 175, 0.06)"
      gap={5}
      align={{ base: "flex-start", md: "center" }}
      direction={{ base: "column", md: "row" }}
      position="relative"
      overflow="hidden"
      _hover={{
        borderColor: `${color}60`,
        transform: "translateY(-2px)",
        boxShadow: "0 15px 40px rgba(30, 64, 175, 0.1)",
      }}
      transition="all .3s ease"
    >
      <Box
        w={{ base: "100%", md: "80px" }}
        h={{ base: "4px", md: "80px" }}
        borderRadius="full"
        bgGradient={`linear(${color}, ${color}80)`}
        flexShrink={0}
        position={{ base: "absolute", md: "relative" }}
        top="0"
        left="0"
      />

      <VStack align="flex-start" gap={1} flex={1}>
        <Badge
          px={3}
          py={1}
          borderRadius="full"
          bg={`${color}15`}
          color={color}
          border={`1px solid ${color}40`}
          fontSize="xs"
          fontWeight="700"
        >
          {level}
        </Badge>

        <Heading size="sm" color="blue.900">
          {authority}
        </Heading>

        <Text fontSize="sm" color="blue.700">
          {purpose}
        </Text>
      </VStack>

      <VStack
        align={{ base: "flex-start", md: "flex-end" }}
        gap={1}
        flexShrink={0}
      >
        {contact.email && (
          <Text fontSize="sm" color="blue.600" fontWeight="medium">
            📧 {contact.email}
          </Text>
        )}

        {contact.phone && (
          <Text fontSize="sm" color="blue.600" fontWeight="medium">
            📞 {contact.phone}
          </Text>
        )}

        {!contact.email && !contact.phone && (
          <Text fontSize="sm" color="blue.600" fontStyle="italic">
            {contact.text}
          </Text>
        )}
      </VStack>
    </Flex>
  </motion.div>
);

export default function GrievanceRedressal() {
  const [copied, setCopied] = useState("");

 const handleCopy = async (text: string, type: string) => {
  try {
    await navigator.clipboard.writeText(text);

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  } catch (error) {
    console.error("Copy failed:", error);
  }
};
  const steps = [
    {
      title: "Submit Your Complaint",
      description: "Your experience matters to us. If you have any grievances or need assistance, please reach out to our official support keshvacredit@gmail.com.",
      icon: <MailIcon />,
    },
    {
      title: "Complaint Review",
      description: "Our Grievance Redressal Officer will review the complaint and may contact you if additional information or clarification is required.",
      icon: <ShieldIcon />,
    },
    {
      title: "Resolution",
      description: "After reviewing the matter, we will communicate the appropriate response or resolution through the contact details provided by you.",
      icon: <CheckIcon />,
    },
    {
      title: "Escalation",
      description: "If your grievance remains unresolved or you are not satisfied with the response, you may escalate the matter according to the escalation matrix.",
      icon: <ArrowUpIcon />,
    },
  ];

  const escalationLevels = [
    {
      level: "Level 1",
      authority: "Customer Support",
      contact: { text: "Official Customer Support Channels" },
      purpose: "Initial complaint or customer concern",
      color: "#3B82F6",
    },
    {
      level: "Level 2",
      authority: "Grievance Redressal Officer",
      contact: { email: "keshvacredit@gmail.com", phone: "8901229195" },
      purpose: "Escalation of unresolved complaints",
      color: "#8B5CF6",
    },
    {
      level: "Level 3",
      authority: "Senior Management",
      contact: { text: "Through the Grievance Redressal Officer" },
      purpose: "Further escalation for unresolved grievances",
      color: "#EC4899",
    },
  ];

  return (
    <Box
      minH="100vh"
      bg="blue.50"
      position="relative"
      overflow="hidden"
      py={{ base: 10, md: 16}}
      px={4}
    >
      {/* --- Background Elements --- */}
      <StarField />
      
      {/* Grid Pattern - Light */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex={0}
        opacity={0.04}
        bgImage={`
          linear-gradient(#3b82f6 1px, transparent 1px),
          linear-gradient(90deg, #3b82f6 1px, transparent 1px)
        `}
        bgSize="60px 60px"
      />

      {/* Animated Orbs - Light Theme */}
      <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex={0} overflow="hidden">
        <motion.div
          animate={{ 
            x: [0, 100, -50, 0], 
            y: [0, -80, 60, 0], 
            scale: [1, 1.2, 0.9, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-15%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <motion.div
          animate={{ 
            x: [0, -80, 60, 0], 
            y: [0, 100, -50, 0], 
            scale: [1, 1.1, 0.85, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={2}>
        
        {/* --- Hero Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack gap={6} textAlign="center" mt={16}>
            {/* Shield Icon Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Flex
                w="80px"
                h="80px"
                borderRadius="24px"
                bgGradient="linear(135deg, #3B82F6, #8B5CF6)"
                alignItems="center"
                justifyContent="center"
                color="black"
                boxShadow="0 20px 50px rgba(59, 130, 246, 0.3)"
              >
                <ShieldIcon />
              </Flex>
            </motion.div>

            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg="blue.100"
              border="1px solid"
              borderColor="blue.200"
              color="blue.700"
              fontSize="sm"
              fontWeight="600"
              letterSpacing="wider"
            >
              CUSTOMER FIRST
            </Badge>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "3xl", lg: "3xl" }}
              fontWeight="800"
              color="blue.900"
            >
              Grievance
              <br />
              <Text
                as="span"
                bgGradient="linear(to-r, #3B82F6, #8B5CF6, #EC4899)"
                bgClip="text"
              >
                Redressal
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="blue.700"
              maxW="700px"
            >
              KeshvaCredit is committed to addressing customer concerns and grievances 
              in a <Text as="span" color="pink.600" fontWeight="600">fair, transparent, and timely manner</Text>.
            </Text>
          </VStack>
        </motion.div>

        {/* --- Introduction Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            p={{ base: 6, md: 10 }}
            borderRadius="24px"
            bg="white"
            border="1px solid"
            borderColor="blue.100"
            boxShadow="0 25px 50px rgba(30, 64, 175, 0.08)"
            mb={16}
            position="relative"
            overflow="hidden"
          >
            {/* Top Shine */}
            <Box
              position="absolute"
              top="0"
              left="10%"
              right="10%"
              h="2px"
              bgGradient="linear(to-r, transparent, blue.300, transparent)"
            />

            <VStack align="flex-start" gap={5}>
              <Heading as="h2" size="lg" color="blue.900" fontWeight="700">
                Customer Grievance Redressal
              </Heading>
              <Text fontSize="md" color="blue.800">
                If you have any complaint, concern, or grievance regarding our services, 
                your personal information, loan application assistance, communication, 
                or any other matter related to KeshvaCredit, you may contact our 
                <Text as="span" color="blue.600" fontWeight="600"> Grievance Redressal Officer </Text>
                using the details provided below.
              </Text>
              <Text fontSize="md" color="blue.800">
                We request you to provide complete details of your complaint, including your 
                <Text as="span" color="pink.600" fontWeight="500"> name, registered mobile number or email address, 
                application details (if applicable), and a description of the grievance </Text>
                so that we can investigate and resolve the matter effectively.
              </Text>
            </VStack>
          </Box>
        </motion.div>

        {/* --- Officer Details Card (Hero Card) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            p={{ base: 6, md: 10 }}
            borderRadius="32px"
            bg="white"
            border="1px solid"
            borderColor="blue.200"
            boxShadow="0 30px 60px rgba(30, 64, 175, 0.1)"
            mb={16}
            position="relative"
            overflow="hidden"
          >
            {/* Glow effect */}
            <Box
              position="absolute"
              right="-20%"
              w="60%"
              h="150%"
              bg="radial-gradient(circle, rgba(59, 130, 246, 0.06))"
              filter="blur(80px)"
              pointerEvents="none"
            />

            <VStack align="flex-start" gap={3} position="relative">
              <Badge
                px={4}
                borderRadius="full"
                bg="green.50"
                border="1px solid"
                borderColor="green.200"
                color="green.700"
                fontSize="sm"
                fontWeight="700"
                letterSpacing="wider"
              >
                ✓ GRIEVANCE REDRESSAL OFFICER
              </Badge>

              <Flex 
                gap={8} 
                align={{ base: "flex-start", md: "center" }} 
                direction={{ base: "column", md: "row" }}
                w="full"
              >
                {/* Avatar */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Flex
                    w="100px"
                    h="100px"
                    borderRadius="24px"
                    bgGradient="linear(135deg, #3B82F6, #8B5CF6)"
                    alignItems="center"
                    justifyContent="center"
                    color="green.500"
                    fontSize="4xl"
                    fontWeight="800"
                    boxShadow="0 20px 40px rgba(59, 130, 246, 0.3)"
                    flexShrink={0}
                  >
                    MP
                  </Flex>
                </motion.div>

                <VStack align="flex-start" gap={1} flex={1}>
                  <Heading as="h3" size="xl" color="blue.900" fontWeight="800">
                    Mandeep Phulia
                  </Heading>
                  <Text fontSize="md" color="blue.600" fontWeight="600">
                    Grievance Redressal Officer
                  </Text>
                  <Text fontSize="sm" color="blue.700" mt={1}>
                    KeshvaCredit Services Pvt. Ltd.
                  </Text>
                </VStack>
              </Flex>

              <Separator borderColor="blue.100" />

              {/* Contact Details Grid */}
              <VStack gap={4} w="full" align="stretch">
                
                {/* Email */}
                <Flex
                  p={5}
                  borderRadius="16px"
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.100"
                  align="center"
                  justify="space-between"
                  gap={4}
                  direction={{ base: "column", sm: "row" }}
                  _hover={{ borderColor: "blue.300", bg: "blue.100" }}
                  transition="all 0.3s"
                  w="full"
                >
                  <HStack gap={4}>
                    <Flex
                      w="44px"
                      h="44px"
                      borderRadius="12px"
                      bg="blue.100"
                      border="1px solid"
                      borderColor="blue.200"
                      alignItems="center"
                      justifyContent="center"
                      color="blue.600"
                    >
                      <MailIcon />
                    </Flex>
                    <VStack align="flex-start" gap={0}>
                      <Text fontSize="xs" color="blue.500" fontWeight="600" textTransform="uppercase" letterSpacing="wider">
                        Email
                      </Text>
                      <Text fontSize="md" color="blue.900" fontWeight="600">
                        keshvacredit@gmail.com
                      </Text>
                    </VStack>
                  </HStack>
                 <Button
                  size="sm"
                  variant="outline"
                  borderColor="blue.200"
                  color="blue.600"
                  onClick={() => handleCopy("keshvacredit@gmail.com", "Email")}
                  _hover={{ bg: "blue.100", borderColor: "blue.300" }}
                >
                  <HStack gap={2}>
                    {copied === "Email" ? <CheckIcon /> : <CopyIcon />}
                    <Text>{copied === "Email" ? "Copied" : "Copy"}</Text>
                  </HStack>
                </Button>
                </Flex>

                {/* Phone */}
                <Flex
                  p={5}
                  borderRadius="16px"
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.100"
                  align="center"
                  justify="space-between"
                  gap={4}
                  direction={{ base: "column", sm: "row" }}
                  _hover={{ borderColor: "purple.300", bg: "purple.50" }}
                  transition="all 0.3s"
                  w="full"
                >
                  <HStack gap={4}>
                    <Flex
                      w="44px"
                      h="44px"
                      borderRadius="12px"
                      bg="purple.50"
                      border="1px solid"
                      borderColor="purple.200"
                      alignItems="center"
                      justifyContent="center"
                      color="purple.600"
                    >
                      <PhoneIcon />
                    </Flex>
                    <VStack align="flex-start" gap={0}>
                      <Text fontSize="xs" color="blue.500" fontWeight="600" textTransform="uppercase" letterSpacing="wider">
                        Contact Number
                      </Text>
                      <Text fontSize="md" color="blue.900" fontWeight="600">
                        +91 8901229195
                      </Text>
                    </VStack>
                  </HStack>
                  <Button
                    size="sm"
                    variant="outline"
                    borderColor="purple.200"
                    color="purple.600"
                    onClick={() => handleCopy("8901229195", "Phone")}
                    _hover={{ bg: "purple.50", borderColor: "purple.300" }}
                  >
                    {copied === "Phone" ? "Copied" : "Copy"}
                  </Button>
                </Flex>

                {/* Address */}
                <Flex
                  p={5}
                  borderRadius="16px"
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.100"
                  align="flex-start"
                  gap={4}
                  _hover={{ borderColor: "pink.300", bg: "pink.50" }}
                  transition="all 0.3s"
                >
                  <Flex
                    w="44px"
                    h="44px"
                    borderRadius="12px"
                    bg="pink.50"
                    border="1px solid"
                    borderColor="pink.200"
                    alignItems="center"
                    justifyContent="center"
                    color="pink.600"
                    flexShrink={0}
                  >
                    <LocationIcon />
                  </Flex>
                  <VStack align="flex-start" gap={1}>
                    <Text fontSize="xs" color="blue.500" fontWeight="600" textTransform="uppercase" letterSpacing="wider">
                      Address
                    </Text>
                    <Text fontSize="md" color="blue.900" fontWeight="500">
                      KeshvaCredit Services Pvt. Ltd.<br />
                      233, Thakar Basti, Bagichi Mohalla,<br />
                      Dharamshala Road,<br />
                      Fatehabad - 125050, Haryana, India.
                    </Text>
                  </VStack>
                </Flex>
              </VStack>

              {/* Quick Action Buttons */}
             <HStack gap={3} pt={4} w="full" flexWrap="wrap">
              <Link href="mailto:keshvacredit@gmail.com">
                <Button
                  size="lg"
                  bgGradient="linear(135deg, #3B82F6, #8B5CF6)"
                  color="white"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  borderRadius="full"
                  px={8}
                  fontWeight="600"
                >
                  <HStack gap={2}>
                    <MailIcon />
                    <Text>Send Email</Text>
                  </HStack>
                </Button>
              </Link>

              <Link href="tel:+918901229195">
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="blue.200"
                  color="blue.700"
                  _hover={{
                    bg: "blue.50",
                    borderColor: "blue.400",
                  }}
                  borderRadius="full"
                  px={8}
                  fontWeight="600"
                >
                  <HStack gap={2}>
                    <PhoneIcon />
                    <Text>Call Now</Text>
                  </HStack>
                </Button>
              </Link>
            </HStack>
            </VStack>
          </Box>
        </motion.div>

        {/* --- How to Raise a Grievance Section --- */}
        <Box mb={16}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack gap={4} textAlign="center" mb={10}>
              <Badge
                px={4}
                py={2}
                borderRadius="full"
                bg="purple.50"
                border="1px solid"
                borderColor="purple.200"
                color="purple.700"
                fontSize="sm"
                fontWeight="600"
                letterSpacing="wider"
              >
                PROCESS
              </Badge>
              <Heading as="h2" size="xl" color="blue.900" fontWeight="800">
                How to Raise a{" "}
                <Text as="span" color="purple.600">
                  Grievance
                </Text>
              </Heading>
              <Text color="blue.700" maxW="600px" fontSize="md">
                Follow these simple steps to submit and track your grievance
              </Text>
            </VStack>
          </motion.div>

          <Flex
            direction={{ base: "column", md: "row" }}
            gap={3}
            flexWrap={{ md: "wrap" }}
            justify="center"

          >
            {steps.map((step, index) => (
              <Box key={index} flex={{ base: "1", md: "1  calc(10px)", lg: "1 calc(20px)" }} minW="200px">
                <StepCard
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  delay={index * 0.1} step={""}                />
              </Box>
            ))}
          </Flex>
        </Box>

        {/* --- Escalation Matrix Section --- */}
        <Box mb={16}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VStack gap={4} textAlign="center" mb={10}>
              <Badge
                px={4}
                py={2}
                borderRadius="full"
                bg="pink.50"
                border="1px solid"
                borderColor="pink.200"
                color="pink.700"
                fontSize="sm"
                fontWeight="600"
                letterSpacing="wider"
              >
                ESCALATION
              </Badge>
              <Heading as="h2" size="xl" color="blue.900" fontWeight="800">
                Grievance{" "}
                <Text as="span" color="pink.600">
                  Escalation Matrix
                </Text>
              </Heading>
              <Text color="blue.700" maxW="600px" fontSize="md">
                Customers may escalate their grievance through the following escalation levels
              </Text>
            </VStack>
          </motion.div>

          <VStack gap={4} align="stretch">
            {escalationLevels.map((level, index) => (
              <EscalationCard
                key={index}
                level={level.level}
                authority={level.authority}
                contact={level.contact}
                purpose={level.purpose}
                color={level.color}
                delay={index * 0.15}
              />
            ))}
          </VStack>
        </Box>

        {/* --- Timeline & Important Info (Two Column) --- */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={6}
          mb={16}
        >
          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Box
              p={8}
              borderRadius="24px"
              bg="white"
              border="1px solid"
              borderColor="blue.100"
              boxShadow="0 20px 40px rgba(30, 64, 175, 0.06)"
              h="full"
              position="relative"
              overflow="hidden"
            >
              <Flex
                position="absolute"
                top="-30px"
                right="-30px"
                w="120px"
                h="120px"
                bg="radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)"
                filter="blur(40px)"
              />

              <VStack align="flex-start" gap={5}>
                <Flex
                  w="56px"
                  h="56px"
                  borderRadius="16px"
                  bg="blue.50"
                  border="1px solid"
                  borderColor="blue.200"
                  alignItems="center"
                  justifyContent="center"
                  color="blue.600"
                >
                  <ClockIcon />
                </Flex>

                <Heading as="h3" size="md" color="blue.900" fontWeight="700">
                  Grievance Handling Timeline
                </Heading>

                <VStack align="flex-start" gap={4}>
                  <Text fontSize="sm" color="blue.700" >
                    We aim to acknowledge customer grievances <Text as="span" color="blue.900" fontWeight="600">promptly</Text> and 
                    process them within the timelines prescribed under applicable laws, 
                    regulations, and our internal grievance redressal procedures.
                  </Text>
                  <Text fontSize="sm" color="blue.700">
                    The time required to resolve a grievance may depend on the 
                    <Text as="span" color="blue.900" fontWeight="600"> nature and complexity </Text>
                    of the complaint and whether additional information is required from 
                    the customer or any third party.
                  </Text>
                </VStack>

                {/* Timeline Stats */}
                <HStack gap={4} w="full" flexWrap="wrap" pt={2}>
                  <Box
                    flex="1"
                    minW="120px"
                    p={4}
                    borderRadius="12px"
                    bg="green.50"
                    border="1px solid"
                    borderColor="green.200"
                    textAlign="center"
                  >
                    <Text fontSize="2xl" fontWeight="800" color="green.600">
                      24h
                    </Text>
                    <Text fontSize="xs" color="blue.700">Acknowledgment</Text>
                  </Box>
                  <Box
                    flex="1"
                    minW="120px"
                    p={4}
                    borderRadius="12px"
                    bg="blue.50"
                    border="1px solid"
                    borderColor="blue.200"
                    textAlign="center"
                  >
                    <Text fontSize="2xl" fontWeight="800" color="blue.600">
                      7-15
                    </Text>
                    <Text fontSize="xs" color="blue.700">Days Resolution</Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>
          </motion.div>

          {/* Important Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1 }}
          >
            <Box
              p={8}
              borderRadius="24px"
              bg="white"
              border="1px solid"
              borderColor="pink.200"
              boxShadow="0 20px 40px rgba(30, 64, 175, 0.06)"
              h="full"
              position="relative"
              overflow="hidden"
            >
              <Flex
                position="absolute"
                top="-30px"
                right="-30px"
                w="120px"
                h="120px"
                bg="radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)"
                filter="blur(40px)"
              />

              <VStack align="flex-start" gap={5}>
                <Flex
                  w="56px"
                  h="56px"
                  borderRadius="16px"
                  bg="pink.50"
                  border="1px solid"
                  borderColor="pink.200"
                  alignItems="center"
                  justifyContent="center"
                  color="pink.600"
                  fontSize="xl"
                >
                  ⚠️
                </Flex>

                <Heading as="h3" size="md" color="blue.900" fontWeight="700">
                  Important Information
                </Heading>

                <Text fontSize="sm" color="blue.700">
                  KeshvaCredit operates as a <Text as="span" color="blue.900" fontWeight="600">loan marketplace</Text> and 
                  facilitates connections between customers and third-party financial 
                  institutions and lending partners.
                </Text>

                <Box
                  p={4}
                  borderRadius="12px"
                  bg="pink.50"
                  border="1px solid"
                  borderColor="pink.200"
                >
                  <Text fontSize="sm" color="blue.800">
                    Matters relating to <Text as="span" color="pink.600" fontWeight="600">loan sanction, disbursement, 
                    interest rates, repayment, or other services</Text> directly provided by a 
                    particular lender may also be subject to the grievance redressal 
                    mechanism of the respective lender.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </motion.div>
        </Flex>

        {/* --- CTA Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            p={{ base: 8, md: 12 }}
            borderRadius="32px"
            bg="white"
            border="1px solid"
            borderColor="blue.200"
            boxShadow="0 30px 60px rgba(30, 64, 175, 0.08)"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              h="2px"
              bgGradient="linear(to-r, transparent, blue.400, purple.400, transparent)"
            />

            <VStack gap={6}>
              <Heading as="h3" size="lg" color="blue.900" fontWeight="800">
                Need Immediate Assistance?
              </Heading>
              <Text color="blue.700" maxW="500px" fontSize="md">
                Our team is here to help you resolve your concerns quickly and efficiently
              </Text>
              <HStack gap={4} flexWrap="wrap" justify="center">
                <Link href="mailto:keshvacredit@gmail.com">
                  <Button
                    size="lg"
                    bgGradient="linear(135deg, #3B82F6, #8B5CF6)"
                    color="white"
                    borderRadius="full"
                    px={8}
                    fontWeight="600"
                    _hover={{
                      transform: "translateY(-3px)",
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    <HStack gap={2}>
                      <MailIcon />
                      <Text>Email Us Now</Text>
                    </HStack>
                  </Button>
                </Link>

                <Link href="tel:+918901229195">
                  <Button
                    size="lg"
                    variant="outline"
                    borderColor="blue.200"
                    color="blue.700"
                    borderRadius="full"
                    px={8}
                    fontWeight="600"
                    _hover={{
                      bg: "blue.50",
                      transform: "translateY(-3px)",
                      borderColor: "blue.400",
                    }}
                  >
                    <HStack gap={2}>
                      <PhoneIcon />
                      <Text>Call Support</Text>
                    </HStack>
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </Box>
        </motion.div>

        {/* --- Footer Decorative --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Flex justify="center" mt={12}>
            <HStack gap={6} color="blue.400">
              <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring" }}>
                <Text fontSize="xl" cursor="pointer">✦</Text>
              </motion.div>
              <Text fontSize="xs" letterSpacing="wider" color="blue.600" textAlign="center">
                COMMITTED TO TRANSPARENCY & CUSTOMER SATISFACTION
              </Text>
              <motion.div whileHover={{ scale: 1.2, rotate: -15 }} transition={{ type: "spring" }}>
                <Text fontSize="xl" cursor="pointer">✦</Text>
              </motion.div>
            </HStack>
          </Flex>
        </motion.div>

      </Container>
    </Box>
  );
}