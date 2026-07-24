"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Icon,
  Flex,
  Badge,
  useDisclosure,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import {
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
// import { BsRobot } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

type Message = { type: "text"; sender: "user" | "bot"; text: string };

export default function FloatingChat() {
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { open, onToggle, onClose } = useDisclosure();

  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "text",
      sender: "bot",
      text: "👋 Welcome to KeshvaCredit!\n\nWhat's your name?",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    pan: "",
    pincode: "",
    employment_type: "",
    income: "",
    loantype: "",
    loan_amount: "",
    city: "",
    state: "",
  });

  const loanTypes = ["Personal Loan", "Business Loan", "Home Loan", "Gold Loan"];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text: string) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "text", sender: "bot", text }]);
    }, 400);
  };

  const submitUserData = async (data: Record<string, string>) => {
    try {
      const res = await fetch("https://keshvacredit.onrender.com/api/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      console.error("API Error:", err);
      return null;
    }
  };

  const resetChat = () => {
    setMessages([
      {
        type: "text",
        sender: "bot",
        text: "👋 Welcome to KeshvaCredit!\n\nWhat's your name?",
      },
    ]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      dob: "",
      pan: "",
      pincode: "",
      employment_type: "",
      income: "",
      loantype: "",
      loan_amount: "",
      city: "",
      state: "",
    });
    setInput("");
    setStep(0);
    onClose();
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const value = input.trim();

    setMessages((prev) => [...prev, { type: "text", sender: "user", text: value }]);

    if (step === 0) {
      setFormData((p) => ({ ...p, name: value }));
      addBotMessage("📱 Enter your mobile number");
      setStep(1);
    } else if (step === 1) {
      setFormData((p) => ({ ...p, phone: value }));
      addBotMessage("📧 Enter your email address");
      setStep(2);
    } else if (step === 2) {
      setFormData((p) => ({ ...p, email: value }));
      addBotMessage("🎂 Enter your Date of Birth (DD/MM/YYYY)");
      setStep(3);
    } else if (step === 3) {
      setFormData((p) => ({ ...p, dob: value }));
      addBotMessage("🆔 Enter your PAN Card number");
      setStep(4);
    } else if (step === 4) {
      setFormData((p) => ({ ...p, pan: value }));
      addBotMessage("📍 Enter your Pincode");
      setStep(5);
    } else if (step === 5) {
      setFormData((p) => ({ ...p, pincode: value }));
      addBotMessage("💼 What's your Employment Type?");
      setStep(6);
    } else if (step === 6) {
      setFormData((p) => ({ ...p, employment_type: value }));
      addBotMessage("💰 What's your monthly income?");
      setStep(7);
    } else if (step === 7) {
      setFormData((p) => ({ ...p, income: value }));
      addBotMessage("🏦 Select your Loan Type");
      setStep(8);
    } else if (step === 8) {
      setFormData((p) => ({ ...p, loantype: value.trim() }));
      addBotMessage("💵 Enter the loan amount you need");
      setStep(9);
    } else if (step === 9) {
      setFormData((p) => ({ ...p, loan_amount: value }));
      addBotMessage("🏙️ Enter your City");
      setStep(10);
    } else if (step === 10) {
      setFormData((p) => ({ ...p, city: value }));
      addBotMessage("🗺️ Enter your State");
      setStep(11);
    } else if (step === 11) {
      const updated = { ...formData, state: value };
      setFormData(updated);
      setIsSubmitting(true);

      const response = await submitUserData(updated);
      setIsSubmitting(false);

      if (response) {
        const selectedLoan = updated.loantype?.trim().toLowerCase();

        if (selectedLoan === "personal loan")
          localStorage.setItem("personalLoanSubmitted", "true");
        else if (selectedLoan === "business loan")
          localStorage.setItem("businessLoanSubmitted", "true");
        else if (selectedLoan === "home loan")
          localStorage.setItem("homeLoanSubmitted", "true");
        else if (selectedLoan === "gold loan")
          localStorage.setItem("goldLoanSubmitted", "true");

        toast.success("Form submitted successfully!");
        addBotMessage("✅ Form submitted successfully!");
      } else {
        toast.error("Submission failed. Please try again.");
        addBotMessage("❌ Submission failed. Please try again.");
      }
      setStep(12);
    }

    setInput("");
  };

  const handleViewLenders = () => {
    const loan = formData.loantype?.trim().toLowerCase();
    resetChat();

    if (loan === "personal loan") router.push("/personalloanlender");
    else if (loan === "business loan") router.push("/businessloanlender");
    else if (loan === "home loan") router.push("/homeloanlender");
    else if (loan === "gold loan") router.push("/gold-loan");
  };

  return (
    <>
      {/* Floating Buttons */}
    <Box position="fixed" bottom="6" right="6" zIndex="9999">
  <HStack gap="3" align="flex-end">
    {/* WhatsApp Button - Now a Full Circle */}
    <a
      href="https://wa.me/918901229195"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="green.500"
        color="white"
        w="12"   
        h="12"     
        borderRadius="full"
        shadow="lg"
        _hover={{
          transform: "scale(1.05)",
          bg: "green.600",
          shadow: "xl",
        }}
        transition="all 0.2s"
      >
        <Icon as={FaWhatsapp} w="8" h="8" />  {/* Larger icon */}
      </Box>
    </a>

    {/* Chat Toggle Button */}
    <Box
      as="button"
      onClick={onToggle}
      bg="blue.500"
      color="white"
      w="12"
      h="12"
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="2xl"
      _hover={{
        transform: "scale(1.08)",
        shadow: "xl",
      }}
      _active={{ transform: "scale(0.95)" }}
      transition="all 0.2s"
      position="relative"
    >
      {open ? (
        <Icon as={IoClose} w="8" h="8" />
      ) : (
        <>
          <Icon as={HiChatBubbleLeftRight} w="8" h="8" />
          <Badge
            position="absolute"
            top="-1"
            right="-1"
            colorScheme="red"
            borderRadius="full"
            px="2"
            py="0.5"
            fontSize="xs"
          >
            1
          </Badge>
        </>
      )}
    </Box>
  </HStack>
</Box>

      {/* Chat Window */}
      {open && (
        <Box
          position="fixed"
          bottom="28"
          right="6"
          width={{ base: "95%", sm: "400px" }}
          maxW="100%"
          bg="white"
          borderRadius="2xl"
          shadow="2xl"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.200"
          zIndex="9998"
        >
          {/* Header */}
          <Box
            bgGradient="linear(to-r, blue.700, blue.900)"
            color="white"
            p="4"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack gap="3">
              <Box
                w="8"
                h="8"
                bg="white"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
            
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize="md">
                  KeshvaCredit Assistant
                </Text>
                <Text fontSize="xs" color="blue.200">
                  Online • Usually replies instantly
                </Text>
              </Box>
            </HStack>
            <IconButton
              aria-label="Close chat"
              variant="ghost"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={onClose}
              size="sm"
            >
              <Icon as={IoClose} />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            h="96"
            overflowY="auto"
            p="4"
            bg="gray.50"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#CBD5E0",
                borderRadius: "full",
              },
            }}
          >
            <VStack gap="3" align="stretch">
              {messages.map((m, i) => (
                <Flex
                  key={i}
                  justify={m.sender === "user" ? "flex-end" : "flex-start"}
                >
                  <Box
                    maxW="85%"
                    p="3"
                    borderRadius="xl"
                    bg={m.sender === "user" ? "blue.600" : "white"}
                    color={m.sender === "user" ? "white" : "gray.800"}
                    shadow={m.sender === "user" ? "none" : "sm"}
                    borderWidth={m.sender === "user" ? "0" : "1px"}
                    borderColor="gray.200"
                    whiteSpace="pre-wrap"
                    fontSize="sm"
                  >
                    {m.text}
                  </Box>
                </Flex>
              ))}

              {/* Typing Indicator */}
              {isSubmitting && (
                <Flex justify="flex-start">
                  <Box
                    bg="white"
                    p="3"
                    borderRadius="xl"
                    shadow="sm"
                    borderWidth="1px"
                    borderColor="gray.200"
                  >
                    <HStack gap="2">
                      <Box
                        w="2"
                        h="2"
                        bg="blue.500"
                        borderRadius="full"
                        animation="bounce 1s infinite"
                      />
                      <Box
                        w="2"
                        h="2"
                        bg="blue.500"
                        borderRadius="full"
                        animation="bounce 1s infinite 0.2s"
                      />
                      <Box
                        w="2"
                        h="2"
                        bg="blue.500"
                        borderRadius="full"
                        animation="bounce 1s infinite 0.4s"
                      />
                    </HStack>
                  </Box>
                </Flex>
              )}

              <div ref={messagesEndRef} />
            </VStack>
          </Box>

          {/* Loan Type Buttons */}
          {step === 8 && (
            <Box p="3" bg="gray.50" borderTopWidth="1px" borderColor="gray.200">
              <Wrap gap="2" justify="center">
                {loanTypes.map((l) => (
                  <WrapItem key={l}>
                    <Button
                      size="sm"
                      onClick={() => {
                        setInput(l);
                        setTimeout(() => handleSend(), 50);
                      }}
                      bg="blue.50"
                      color="blue.700"
                      _hover={{ bg: "blue.100", transform: "scale(1.05)" }}
                      borderRadius="full"
                      borderWidth="1px"
                      borderColor="blue.200"
                      fontSize="xs"
                      px="4"
                    >
                      {l}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          )}

          {/* Input Area */}
          {step !== 12 && (
            <Box
              p="3"
              bg="white"
              borderTopWidth="1px"
              borderColor="gray.200"
              display="flex"
              gap="2"
              alignItems="center"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your answer..."
                borderRadius="full"
                bg="gray.50"
                flex="1"
                _focus={{
                  bg: "white",
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 3px rgba(66,153,225,0.2)",
                }}
                borderColor="gray.300"
              />
              <IconButton
                aria-label="Send message"
                colorScheme="blue"
                size="sm"
                borderRadius="full"
                onClick={handleSend}
                disabled={!input.trim()}
              >
                <Icon as={FaPaperPlane} />
              </IconButton>
            </Box>
          )}

          {/* View Lenders Button */}
          {step === 12 && (
            <Box p="4" bg="white" borderTopWidth="1px" borderColor="gray.200">
              <Button
                w="full"
                bgGradient="linear(to-r, green.500, green.600)"
                color="white"
                fontWeight="bold"
                py="6"
                borderRadius="xl"
                _hover={{
                  transform: "scale(1.02)",
                  shadow: "lg",
                }}
                _active={{ transform: "scale(0.98)" }}
                transition="all 0.2s"
                onClick={handleViewLenders}
              >
                View Matching Lenders
              </Button>
            </Box>
          )}
        </Box>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
