"use client";

import { useState, type ComponentProps } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  Flex,
  Badge,
} from "@chakra-ui/react";

import { FaPhone, FaKey, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

type OtpPopupProps = {
  onClose: () => void;
  onVerified?: () => void;
};

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

export default function OtpPopup({ onClose, onVerified }: OtpPopupProps) {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"info" | "success" | "error">("info");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = async () => {
    const cleanPhone = phone.trim();

    if (cleanPhone.length !== 10) {
      setToastMessage("Enter valid 10 digit number");
      setToastType("error");
      return;
    }

    try {
      setLoading(true);
      setToastMessage("");

      const res = await fetch(
        "https://keshvacredit.onrender.com/api/send-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: cleanPhone }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setToastMessage("OTP sent successfully!");
        setToastType("success");
        setOtpSent(true);
      } else {
        setToastMessage(data.message || "Failed to send OTP");
        setToastType("error");
      }
    } catch {
      setToastMessage("Network Error");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      setToastMessage("Enter valid 6 digit OTP");
      setToastType("error");
      return;
    }

    try {
      setLoading(true);
      setToastMessage("");

      const res = await fetch(
        "https://keshvacredit.onrender.com/api/verify-otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setToastMessage("OTP Verified Successfully!");
        setToastType("success");

        localStorage.setItem("phone", phone);
        window.dispatchEvent(new Event("authChange"));

        setTimeout(() => {
          onVerified?.();
          onClose();
        }, 800);
      } else {
        setToastMessage(data.message || "Invalid OTP");
        setToastType("error");
      }
    } catch {
      setToastMessage("Network Error");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
   <Box as="section" position="fixed" inset={0} zIndex={9999} bg="blackAlpha.600" backdropFilter="blur(8px)" display="flex" alignItems="center" justifyContent="center" p={{ base: 2, md: 4 }} animation="fadeIn 0.3s ease-out">
  <Box
    bg="white"
    borderRadius="2xl"
    width="full"
    maxW="xs"
    position="relative"
    boxShadow="0 20px 60px rgba(0,0,0,0.3)"
    overflow="hidden"
    animation="slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
  >
    {/* Decorative Header Gradient - Smaller */}
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      h="80px"
      bg="linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #312e81 100%)"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="-15px"
        right="-30px"
        w="80px"
        h="35px"
        bg="whiteAlpha.100"
        borderRadius="full"
      />
    </Box>

    {/* Close Button - Smaller */}
    <Button
      position="absolute"
      top={2}
      right={2}
      size="xs"
      variant="ghost"
      color="white"
      onClick={onClose}
      _hover={{
        bg: "whiteAlpha.200",
        transform: "rotate(90deg)",
      }}
      transition="all 0.3s"
      borderRadius="full"
      zIndex={10}
      minW="8"
      h="8"
      p={0}
    >
      <Icon as={X} boxSize={4} />
    </Button>

    {/* Content - Smaller padding */}
    <Box position="relative" zIndex={1} pt={6} pb={4} px={{ base: 4, md: 6 }}>
      {/* Header Icon - Smaller */}
      <Flex justify="center" mb={2}>
        <Box
          w="14"
          h="14"
          bg="white"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 8px 25px rgba(0,0,0,0.15)"
          position="relative"
        >
          <Icon
            as={otpSent ? FaCheckCircle : FaShieldAlt}
            color={otpSent ? "green.500" : "blue.600"}
            boxSize={6}
          />
          <Box
            position="absolute"
            inset="0"
            borderRadius="full"
            bg={otpSent ? "green.400" : "blue.400"}
            opacity="0.2"
            animation="pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite"
          />
        </Box>
      </Flex>

      {/* Title - Smaller */}
      <VStack gap={1} mb={3}>
        <Heading
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="black"
          textAlign="center"
          color="gray.800"
        >
          {otpSent ? "Verify OTP" : "Login"}
        </Heading>
        <Text
          fontSize="xs"
          color="gray.500"
          textAlign="center"
          maxW="xs"
          lineHeight="1.4"
        >
          {otpSent
            ? `OTP sent to +91 ${phone}`
            : "Enter mobile number"}
        </Text>
      </VStack>

      {/* Step Indicator - Smaller */}
      <HStack justify="center" gap={2} mb={4}>
        <Badge
          px={2}
          py={1}
          borderRadius="full"
          bg={!otpSent ? "blue.500" : "green.500"}
          color="white"
          fontSize="2xs"
          fontWeight="bold"
        >
          Step 1
        </Badge>
        <Box w="16px" h="1.5px" bg={!otpSent ? "gray.300" : "green.500"} />
        <Badge
          px={2}
          py={1}
          borderRadius="full"
          bg={otpSent ? "blue.500" : "gray.200"}
          color={otpSent ? "white" : "gray.500"}
          fontSize="2xs"
          fontWeight="bold"
        >
          Step 2
        </Badge>
      </HStack>

      {/* Form - Compact */}
      <VStack gap={3} align="stretch">
        {!otpSent ? (
          <>
            <FormControl>
              <Text fontSize="xs" fontWeight="semibold" color="gray.700" mb={1}>
                Mobile Number
              </Text>
              <Box position="relative">
                <InputLeftElement pointerEvents="none" h="full">
                  <Box
                    w="6"
                    h="6"
                    bg="blue.50"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={MdPhoneInTalk} color="blue.500" boxSize={3} />
                  </Box>
                </InputLeftElement>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                  maxLength={10}
                  placeholder="Enter 10 digit"
                  borderRadius="lg"
                  border="2px"
                  borderColor="gray.200"
                  bg="gray.50"
                  height="44px"
                  pl={10}
                  pr={3}
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.800"
                  _placeholder={{ color: "gray.400", fontSize: "xs" }}
                  _hover={{
                    borderColor: "blue.300",
                    bg: "white",
                  }}
                  _focus={{
                    borderColor: "blue.500",
                    bg: "white",
                    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.15)",
                  }}
                  transition="all 0.2s"
                />
              </Box>
              {phone.length > 0 && phone.length < 10 && (
                <Text fontSize="2xs" color="red.500" mt={0.5}>
                  {10 - phone.length} digits remaining
                </Text>
              )}
              {phone.length === 10 && (
                <HStack gap={0.5} mt={0.5}>
                  <Icon as={FaCheckCircle} color="green.500" boxSize={2.5} />
                  <Text fontSize="2xs" color="green.600" fontWeight="medium">
                    Valid number
                  </Text>
                </HStack>
              )}
            </FormControl>

            <Button
              onClick={sendOtp}
              loading={loading}
              loadingText="Sending..."
              bg="linear-gradient(135deg, #10b981 0%, #059669 100%)"
              color="white"
              size="md"
              height="44px"
              borderRadius="lg"
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                transform: "translateY(-1px)",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.3)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              transition="all 0.3s"
              disabled={phone.length !== 10}
              opacity={phone.length === 10 ? 1 : 0.5}
            >
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <FormControl>
              <Text fontSize="xs" fontWeight="semibold" color="gray.700" mb={1}>
                Enter OTP
              </Text>
              <Box position="relative">
                <InputLeftElement pointerEvents="none" h="full">
                  <Box
                    w="6"
                    h="6"
                    bg="blue.50"
                    borderRadius="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaKey} color="blue.500" boxSize={3} />
                  </Box>
                </InputLeftElement>
                <Input
                  type="text"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, ""))
                  }
                  maxLength={6}
                  placeholder="Enter 6 digit"
                  borderRadius="lg"
                  border="2px"
                  borderColor="gray.200"
                  bg="gray.50"
                  height="44px"
                  pl={10}
                  pr={3}
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.800"
                  letterSpacing="0.3em"
                  textAlign="center"
                  _placeholder={{ color: "gray.400", letterSpacing: "normal", textAlign: "left", fontSize: "xs" }}
                  _hover={{
                    borderColor: "blue.300",
                    bg: "white",
                  }}
                  _focus={{
                    borderColor: "blue.500",
                    bg: "white",
                    boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.15)",
                  }}
                  transition="all 0.2s"
                />
              </Box>
              {otp.length > 0 && otp.length < 6 && (
                <Text fontSize="2xs" color="orange.500" mt={0.5}>
                  {6 - otp.length} digits remaining
                </Text>
              )}
              {otp.length === 6 && (
                <HStack gap={0.5} mt={0.5}>
                  <Icon as={FaCheckCircle} color="green.500" boxSize={2.5} />
                  <Text fontSize="2xs" color="green.600" fontWeight="medium">
                    OTP complete
                  </Text>
                </HStack>
              )}
            </FormControl>

            <Button
              onClick={verifyOtp}
              loading={loading}
              loadingText="Verifying..."
              bg="linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
              color="white"
              size="md"
              height="44px"
              borderRadius="lg"
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                transform: "translateY(-1px)",
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
              }}
              _active={{
                transform: "translateY(0)",
              }}
              transition="all 0.3s"
              disabled={otp.length !== 6}
              opacity={otp.length === 6 ? 1 : 0.5}
            >
              Verify OTP
            </Button>

            <Button
              variant="ghost"
              color="blue.500"
              fontSize="xs"
              fontWeight="semibold"
              _hover={{
                bg: "blue.50",
                color: "blue.600",
              }}
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setToastMessage("");
              }}
              transition="all 0.2s"
              h="32px"
            >
              ← Change Number
            </Button>
          </>
        )}

        {/* Toast Message - Compact */}
        {toastMessage && (
          <Box
            borderRadius="lg"
            py={2}
            px={3}
            border="1px"
            borderColor={
              toastType === "success"
                ? "green.200"
                : toastType === "error"
                ? "red.200"
                : "blue.200"
            }
            bg={
              toastType === "success"
                ? "green.50"
                : toastType === "error"
                ? "red.50"
                : "blue.50"
            }
            animation="slideIn 0.3s ease-out"
          >
            <HStack gap={1.5}>
              <Icon
                as={
                  toastType === "success"
                    ? FaCheckCircle
                    : toastType === "error"
                    ? X
                    : FaShieldAlt
                }
                color={
                  toastType === "success"
                    ? "green.500"
                    : toastType === "error"
                    ? "red.500"
                    : "blue.500"
                }
                boxSize={3}
              />
              <Text fontSize="xs" fontWeight="semibold" color="gray.800">
                {toastMessage}
              </Text>
            </HStack>
          </Box>
        )}
      </VStack>

      {/* Footer - Compact */}
      <Box mt={4} pt={3} borderTopWidth="1px" borderColor="gray.100">
        <Text fontSize="2xs" color="gray.400" textAlign="center" lineHeight="1.4">
          🔒 Secure & encrypted
        </Text>
      </Box>
    </Box>
  </Box>

  {/* CSS Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.2;
      }
      50% {
        transform: scale(1.2);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

    @keyframes slideIn {
      from {
        transform: translateY(-8px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}</style>
</Box>
  );
}