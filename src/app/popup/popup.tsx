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
} from "@chakra-ui/react";

import { FaPhone, FaKey } from "react-icons/fa";

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

  const bgColor = "white";
  const textColor = "gray.800";
  const borderColor = "gray.200";
  const labelColor = "gray.600";

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
      setToastMessage("Enter valid OTP");
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
        setToastMessage("OTP Verified Successfully");
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
    <Box
      as="section"
      position="fixed"
      inset={0}
      zIndex={9999}
      bg="blackAlpha.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={{ base: 4, md: 6 }}
    >
      <Box
        bg={bgColor}
        borderRadius="2xl"
        p={{ base: 4, md: 6 }}
        width="full"
        maxW="md"
        position="relative"
        boxShadow="0 20px 60px rgba(0,0,0,0.3)"
        border="1px"
        borderColor="whiteAlpha.200"
        animation="scaleUp 0.3s ease-out"
      >
        <Button
          position="absolute"
          top={3}
          right={3}
          size="sm"
          variant="ghost"
          color="gray.400"
          onClick={onClose}
          _hover={{
            bg: "gray.100",
            color: "gray.600",
            transform: "rotate(90deg)",
          }}
          transition="all 0.3s"
        >
          <Icon as={X} boxSize={5} />
        </Button>

        <Heading
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          pb={2}
          pt={2}
          color={textColor}
        >
          🔐 Login with OTP
        </Heading>

        <Box pb={4}>
          <VStack gap ={5} align="stretch">
            {!otpSent ? (
              <>
                <FormControl _required={{ color: "red.500" }}>
                  <Text fontSize="sm" fontWeight="medium" color={labelColor} mb={2}>
                    Mobile Number
                  </Text>
                  <InputLeftElement pointerEvents="none" h="full">
                    <Icon as={FaPhone} color="gray.400" boxSize={5} />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    maxLength={10}
                    placeholder="Enter 10 digit mobile number"
                    borderRadius="xl"
                    border="2px"
                    borderColor={borderColor}
                    bg="transparent"
                    height="52px"
                    pl={12}
                    fontSize="md"
                    color={textColor}
                    _placeholder={{ color: "gray.400" }}
                    _hover={{
                      borderColor: "blue.400",
                    }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
                    }}
                  />
                </FormControl>

                <Button
                  onClick={sendOtp}
                  loading={loading}
                  loadingText="Sending..."
                  colorScheme="green"
                  size="lg"
                  height="52px"
                  borderRadius="xl"
                  fontSize="md"
                  fontWeight="bold"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(72, 187, 120, 0.4)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.3s"
                >
                  Send OTP
                </Button>
              </>
            ) : (
              <>
                <FormControl _required={{ color: "red.500" }}>
                  <Text fontSize="sm" fontWeight="medium" color={labelColor} mb={2}>
                    Enter OTP
                  </Text>
                  <InputLeftElement pointerEvents="none" h="full">
                    <Icon as={FaKey} color="gray.400" boxSize={5} />
                  </InputLeftElement>
                  <Input
                    type="text"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ""))
                    }
                    maxLength={6}
                    placeholder="Enter 6 digit OTP"
                    borderRadius="xl"
                    border="2px"
                    borderColor={borderColor}
                    bg="transparent"
                    height="52px"
                    pl={12}
                    fontSize="md"
                    color={textColor}
                    _placeholder={{ color: "gray.400" }}
                    _hover={{
                      borderColor: "blue.400",
                    }}
                    _focus={{
                      borderColor: "blue.500",
                      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.2)",
                    }}
                  />
                </FormControl>

                <Button
                  onClick={verifyOtp}
                  loading={loading}
                  loadingText="Verifying..."
                  colorScheme="blue"
                  size="lg"
                  height="52px"
                  borderRadius="xl"
                  fontSize="md"
                  fontWeight="bold"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(66, 153, 225, 0.4)",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.3s"
                >
                  Verify OTP
                </Button>

                <Text
                  textAlign="center"
                  fontSize="sm"
                  color="blue.500"
                  cursor="pointer"
                  fontWeight="medium"
                  _hover={{
                    color: "blue.600",
                    textDecoration: "underline",
                  }}
                  transition="all 0.2s"
                  onClick={() => {
                    setOtpSent(false);
                    setOtp("");
                    setToastMessage("");
                  }}
                >
                  Didn't receive OTP? Resend
                </Text>
              </>
            )}

            {toastMessage && (
              <Box
                borderRadius="xl"
                fontSize="sm"
                py={3}
                px={4}
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
                animation="fadeIn 0.3s ease-out"
              >
                <Text fontWeight="medium" color={textColor}>{toastMessage}</Text>
              </Box>
            )}
          </VStack>
        </Box>
      </Box>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes scaleUp {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}