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
  Avatar,
  Progress,
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import {
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaBriefcase,
  FaHome,
  FaCoins,
  FaRobot,
} from "react-icons/fa";
import { IoClose, IoSend } from "react-icons/io5";
import { HiChatBubbleLeftRight, HiSparkles } from "react-icons/hi2";
import { MdArrowForward } from "react-icons/md";

type Message = { type: "text"; sender: "user" | "bot"; text: string };

export default function FloatingChat() {
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { open, onToggle, onClose } = useDisclosure();

  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 12;

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "text",
      sender: "bot",
      text: "👋 Welcome to KeshvaCredit!\n\nLet's get you started. What's your name?",
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

  const loanTypes = [
    { name: "Personal Loan", icon: FaUser, color: "purple" },
    { name: "Business Loan", icon: FaBriefcase, color: "orange" },
    { name: "Home Loan", icon: FaHome, color: "green" },
    { name: "Gold Loan", icon: FaCoins, color: "yellow" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text: string) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "text", sender: "bot", text }]);
    }, 500);
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
        text: "👋 Welcome to KeshvaCredit!\n\nLet's get you started. What's your name?",
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
      addBotMessage(`Nice to meet you, ${value}! 📱\n\nNow, what's your mobile number?`);
      setStep(1);
    } else if (step === 1) {
      setFormData((p) => ({ ...p, phone: value }));
      addBotMessage("Perfect! 📧\n\nWhat's your email address?");
      setStep(2);
    } else if (step === 2) {
      setFormData((p) => ({ ...p, email: value }));
      addBotMessage("🎂 When's your birthday? (DD/MM/YYYY)");
      setStep(3);
    } else if (step === 3) {
      setFormData((p) => ({ ...p, dob: value }));
      addBotMessage("🆔 Please enter your PAN Card number");
      setStep(4);
    } else if (step === 4) {
      setFormData((p) => ({ ...p, pan: value }));
      addBotMessage("📍 What's your area pincode?");
      setStep(5);
    } else if (step === 5) {
      setFormData((p) => ({ ...p, pincode: value }));
      addBotMessage("💼 What's your employment type?\n(Salaried / Self-employed / Business)");
      setStep(6);
    } else if (step === 6) {
      setFormData((p) => ({ ...p, employment_type: value }));
      addBotMessage("💰 What's your monthly income? (₹)");
      setStep(7);
    } else if (step === 7) {
      setFormData((p) => ({ ...p, income: value }));
      addBotMessage("🏦 Great! Which loan type are you looking for?\nTap any option below ⬇️");
      setStep(8);
    } else if (step === 8) {
      setFormData((p) => ({ ...p, loantype: value.trim() }));
      addBotMessage("💵 How much loan amount do you need? (₹)");
      setStep(9);
    } else if (step === 9) {
      setFormData((p) => ({ ...p, loan_amount: value }));
      addBotMessage("🏙️ Which city are you from?");
      setStep(10);
    } else if (step === 10) {
      setFormData((p) => ({ ...p, city: value }));
      addBotMessage("🗺️ And your state?");
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
        addBotMessage("🎉 All done!\n\nYour application has been submitted. Click below to see matching lenders!");
      } else {
        toast.error("Submission failed. Please try again.");
        addBotMessage("❌ Oops! Something went wrong. Please try again.");
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

  const progressPercent = (step / totalSteps) * 100;

  return (
    <>
      {/* ============ FLOATING BUTTONS ============ */}
      <Box position="fixed" bottom="6" right="6" zIndex="9999">
        <HStack gap="3" align="flex-end">
          {/* WhatsApp Button with Pulse */}
          <a
            href="https://wa.me/918901229195"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box position="relative">
              {/* Pulse Animation Ring */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="green.400"
                borderRadius="full"
                animation="pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite"
                opacity="0.6"
              />
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                color="white"
                w="14"
                h="14"
                borderRadius="full"
                shadow="0 8px 24px rgba(37, 211, 102, 0.4)"
                _hover={{
                  transform: "scale(1.1)",
                  shadow: "0 12px 32px rgba(37, 211, 102, 0.5)",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                position="relative"
                zIndex={1}
              >
                <Icon as={FaWhatsapp} w="7" h="7" />
              </Box>
            </Box>
          </a>

          {/* Chat Toggle Button */}
          <Box
            as="button"
            onClick={onToggle}
            bg="linear-gradient(135deg, #4299E1 0%, #2B6CB0 100%)"
            color="white"
            w="14"
            h="14"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            shadow="0 8px 24px rgba(66, 153, 225, 0.4)"
            _hover={{
              transform: "scale(1.1)",
              shadow: "0 12px 32px rgba(66, 153, 225, 0.5)",
            }}
            _active={{ transform: "scale(0.95)" }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            position="relative"
          >
            {open ? (
              <Icon as={IoClose} w="7" h="7" />
            ) : (
              <>
                <Icon as={HiChatBubbleLeftRight} w="7" h="7" />
                {/* Animated Notification Badge */}
                <Box
                  position="absolute"
                  top="-1"
                  right="-1"
                  animation="badgePop 2s infinite"
                >
                  <Badge
                    bg="red.500"
                    color="white"
                    borderRadius="full"
                    px="2"
                    py="0.5"
                    fontSize="xs"
                    fontWeight="bold"
                    border="2px solid white"
                    shadow="md"
                  >
                    1
                  </Badge>
                </Box>
              </>
            )}
          </Box>
        </HStack>
      </Box>

      {/* ============ CHAT WINDOW ============ */}
      {open && (
        <Box
          position="fixed"
          bottom="28"
          right={{ base: "3", sm: "6" }}
          width={{ base: "calc(100% - 24px)", sm: "420px" }}
          maxW="420px"
          maxH="calc(100vh - 140px)"
          bg="white"
          borderRadius="3xl"
          shadow="0 25px 60px rgba(0, 0, 0, 0.2)"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.100"
          zIndex="9998"
          animation="slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
          display="flex"
          flexDirection="column"
        >
          {/* ============ HEADER ============ */}
          <Box
            bg="linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #312e81 100%)"
            color="white"
            p="4"
            position="relative"
            overflow="hidden"
            flexShrink={0}
          >
            {/* Decorative circles */}
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              w="80px"
              h="80px"
              bg="whiteAlpha.100"
              borderRadius="full"
            />
            <Box
              position="absolute"
              bottom="-30px"
              right="40px"
              w="60px"
              h="60px"
              bg="whiteAlpha.100"
              borderRadius="full"
            />

            <Flex justify="space-between" align="center" position="relative" zIndex={1}>
              <HStack gap="3">
                <Box
                  w="12"
                  h="12"
                  bg="white"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow="lg"
                  position="relative"
                >
                  <Icon as={FaRobot} color="#1e40af" boxSize={6} />
                  {/* Online dot */}
                  <Box
                    position="absolute"
                    bottom="0"
                    right="0"
                    w="3"
                    h="3"
                    bg="green.400"
                    borderRadius="full"
                    border="2px solid white"
                    animation="onlinePulse 2s infinite"
                  />
                </Box>
                <Box>
                  <HStack gap="1">
                    <Text fontWeight="bold" fontSize="md">
                      KeshvaCredit AI
                    </Text>
                    <Icon as={HiSparkles} color="yellow.300" boxSize={4} />
                  </HStack>
                  <Text fontSize="xs" color="blue.200" fontWeight="medium">
                    ● Online • Instant replies
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
                borderRadius="full"
              >
                <Icon as={IoClose} boxSize={5} />
              </IconButton>
            </Flex>

            {/* Progress Bar */}
            {step > 0 && step < 12 && (
              <Box mt="3" position="relative" zIndex={1}>
                <Flex justify="space-between" mb="1">
                  <Text fontSize="xs" color="blue.200" fontWeight="medium">
                    Step {step} of {totalSteps}
                  </Text>
                  <Text fontSize="xs" color="white" fontWeight="bold">
                    {Math.round(progressPercent)}%
                  </Text>
                </Flex>
                <Box
                  h="2"
                  bg="whiteAlpha.200"
                  borderRadius="full"
                  overflow="hidden"
                >
                  <Box
                    h="full"
                    bg="linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)"
                    bgSize="200% 100%"
                    w={`${progressPercent}%`}
                    transition="width 0.5s ease"
                    animation="shimmer 2s linear infinite"
                    borderRadius="full"
                  />
                </Box>
              </Box>
            )}
          </Box>

          {/* ============ MESSAGES ============ */}
          <Box
            flex="1"
            minH="0"
            overflowY="auto"
            p="4"
            bg="linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%)"
            css={{
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-track": { background: "transparent" },
              "&::-webkit-scrollbar-thumb": {
                background: "linear-gradient(180deg, #cbd5e0, #a0aec0)",
                borderRadius: "10px",
              },
            }}
          >
            <VStack gap="4" align="stretch">
              {messages.map((m, i) => (
                <Flex
                  key={i}
                  justify={m.sender === "user" ? "flex-end" : "flex-start"}
                  gap="2"
                  animation="messageSlide 0.3s ease-out"
                >
                  {m.sender === "bot" && (
                    <Box
                      w="8"
                      h="8"
                      bg="linear-gradient(135deg, #4299E1, #2B6CB0)"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      shadow="md"
                    >
                      <Icon as={FaRobot} color="white" boxSize={3} />
                    </Box>
                  )}

                  <Box
                    maxW="75%"
                    p="3"
                    borderRadius={
                      m.sender === "user" ? "2xl 2xl 4px 2xl" : "2xl 2xl 2xl 4px"
                    }
                    bg={
                      m.sender === "user"
                        ? "linear-gradient(135deg, #4299E1 0%, #2B6CB0 100%)"
                        : "white"
                    }
                    color={m.sender === "user" ? "white" : "gray.800"}
                    shadow={m.sender === "user" ? "0 4px 12px rgba(66, 153, 225, 0.3)" : "sm"}
                    borderWidth={m.sender === "user" ? "0" : "1px"}
                    borderColor="gray.100"
                    whiteSpace="pre-wrap"
                    fontSize="sm"
                    lineHeight="1.5"
                    fontWeight={m.sender === "user" ? "semibold" : "medium"}
                  >
                    {i === 0 && m.sender === "bot" ? (
                      <Box>
                        <Box
                          bg="linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
                          p="3"
                          borderRadius="xl"
                          mb="2"
                          textAlign="center"
                          border="1px solid"
                          borderColor="yellow.200"
                        >
                          <Text fontSize="lg" fontWeight="bold" color="#92400e">
                            🎉 Welcome!
                          </Text>
                        </Box>
                        <Text>{m.text}</Text>
                      </Box>
                    ) : (
                      m.text
                    )}
                  </Box>
                </Flex>
              ))}

              {/* ============ TYPING INDICATOR ============ */}
              {isSubmitting && (
                <Flex justify="flex-start" gap="2" animation="messageSlide 0.3s ease-out">
                  <Box
                    w="8"
                    h="8"
                    bg="linear-gradient(135deg, #4299E1, #2B6CB0)"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                    shadow="md"
                  >
                    <Icon as={FaRobot} color="white" boxSize={3} />
                  </Box>
                  <Box
                    bg="white"
                    p="4"
                    borderRadius="2xl 2xl 2xl 4px"
                    shadow="sm"
                    borderWidth="1px"
                    borderColor="gray.100"
                  >
                    <HStack gap="1.5">
                      <Box
                        w="2"
                        h="2"
                        bg="blue.500"
                        borderRadius="full"
                        animation="typingBounce 1.4s infinite ease-in-out"
                      />
                      <Box
                        w="2"
                        h="2"
                        bg="blue.500"
                        borderRadius="full"
                        animation="typingBounce 1.4s infinite ease-in-out 0.2s"
                      />
                      <Box
                        w="2"
                        h="2"
                        bg="blue.500"
                        borderRadius="full"
                        animation="typingBounce 1.4s infinite ease-in-out 0.4s"
                      />
                    </HStack>
                  </Box>
                </Flex>
              )}

              <div ref={messagesEndRef} />
            </VStack>
          </Box>

          {/* ============ LOAN TYPE BUTTONS ============ */}
          {step === 8 && (
            <Box p="3" bg="white" borderTopWidth="1px" borderColor="gray.100" flexShrink={0}>
              <Text fontSize="xs" fontWeight="bold" color="gray.500" mb="2" textAlign="center" textTransform="uppercase" letterSpacing="wide">
                Choose your loan type
              </Text>
              <Wrap gap="2" justify="center">
                {loanTypes.map((l) => {
                  const LoanIcon = l.icon;
                  return (
                    <WrapItem key={l.name}>
                      <Button
                        size="sm"
                        onClick={() => {
                          setInput(l.name);
                          setTimeout(() => handleSend(), 50);
                        }}
                        bg={`${l.color}.50`}
                        color={`${l.color}.700`}
                        _hover={{
                          bg: `${l.color}.100`,
                          transform: "translateY(-2px)",
                          shadow: "md",
                        }}
                        borderRadius="xl"
                        borderWidth="1px"
                        borderColor={`${l.color}.200`}
                        fontSize="xs"
                        fontWeight="bold"
                        px="3"
                        py="4"
                        transition="all 0.2s"
                      >
                        {l.name}
                      </Button>
                    </WrapItem>
                  );
                })}
              </Wrap>
            </Box>
          )}

          {/* ============ INPUT AREA ============ */}
          {step !== 12 && (
            <Box
              p="3"
              bg="white"
              borderTopWidth="1px"
              borderColor="gray.100"
              display="flex"
              gap="2"
              alignItems="center"
              flexShrink={0}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={
                  step === 8 ? "Or select above..." : "Type your answer..."
                }
                borderRadius="full"
                bg="gray.50"
                flex="1"
                fontSize="sm"
                _focus={{
                  bg: "white",
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 3px rgba(66,153,225,0.15)",
                }}
                borderColor="gray.200"
                borderWidth="2px"
              />
              <IconButton
                aria-label="Send message"
                bg={input.trim() ? "linear-gradient(135deg, #4299E1, #2B6CB0)" : "gray.300"}
                color="white"
                size="md"
                borderRadius="full"
                onClick={handleSend}
                disabled={!input.trim()}
                shadow={input.trim() ? "0 4px 12px rgba(66, 153, 225, 0.3)" : "none"}
                _hover={{
                  transform: input.trim() ? "scale(1.1)" : "none",
                  shadow: input.trim() ? "0 6px 16px rgba(66, 153, 225, 0.4)" : "none",
                }}
                transition="all 0.2s"
              >
                <Icon as={IoSend} boxSize={4} />
              </IconButton>
            </Box>
          )}

          {/* ============ VIEW LENDERS BUTTON ============ */}
          {step === 12 && (
            <Box p="4" bg="white" borderTopWidth="1px" borderColor="gray.100" flexShrink={0}>
              <Button
                w="full"
                bg="linear-gradient(135deg, #10b981 0%, #059669 100%)"
                color="white"
                fontWeight="bold"
                py="6"
                borderRadius="xl"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.3s"
                onClick={handleViewLenders}
                size="lg"
              >
                View Matching Lenders
              </Button>
              <Text fontSize="xs" color="gray.500" textAlign="center" mt="2">
                ✨ We found the best lenders for you!
              </Text>
            </Box>
          )}
        </Box>
      )}

      {/* ============ CSS ANIMATIONS ============ */}
      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        @keyframes onlinePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes badgePop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typingBounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}