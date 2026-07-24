"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  Box,
  Container,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function DeleteAccount() {
  const [showInfoModal, setShowInfoModal] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPhone = localStorage.getItem("phone");

    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  const handleConfirmDelete = async () => {
    if (!email.trim() || !phone.trim()) {
      toast.error("Please fill in both Email and Phone Number.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://keshvacredit.onrender.com/api/delete-account",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, phone }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Your account deletion request has been submitted.");
        setEmail("");
        setPhone("");
        setShowConfirmModal(false);
        setShowInfoModal(true);
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="container.lg" py={8} bg="blue.200">
      {showInfoModal && (
        <Box as="section" display="flex" justifyContent="center" minH="60vh">
          <Box
            role="region"
            aria-labelledby="delete-info-heading"
            bg="#0f1f3a"
            color="blue.100"
            borderRadius="3xl"
            border="2px solid"
            borderColor="emerald.400"
            p={{ base: 5, md: 8 }}
            maxW="2xl"
            width="100%"
            boxShadow="2xl"
          >
            <Text id="delete-info-heading" fontSize={{ base: "14px", md: "16px" }}>
              You can request the deletion of your information from{' '}
              <Text as="span" fontWeight="bold">
                KeshvaCredit
              </Text>{' '}
              at any stage. This data retention and deletion policy is in line with applicable laws and guidelines of the RBI.
            </Text>

            <Text mt={5} fontSize={{ base: "14px", md: "16px" }} fontWeight="medium">
              You have two ways to request account deletion:
            </Text>

            <Box as="ul" mt={4} pl={5} fontSize={{ base: "13px", md: "15px" }} style={{ listStyleType: 'disc' }}>
              <Box as="li" mb={2}>
                Send an email to our customer support team at{' '}
                <Text as="span" fontWeight="semibold" color="blue.400">keshvacredit@gmail.com</Text>{' '}
                from your registered email address with the subject{' '}
                <Text as="span" fontStyle="italic" fontWeight="medium">"Delete my account"</Text>. Please also mention your registered mobile number.
              </Box>

              <Box as="li">
                Or, you can directly submit a deletion request by clicking the{' '}
                <Text as="span" fontWeight="semibold">Delete My Account</Text>{' '}
                button below.
              </Box>
            </Box>

            <Box mt={6} display="flex" justifyContent="center">
              <Button
                onClick={() => {
                  setShowInfoModal(false);
                  setShowConfirmModal(true);
                }}
                bg="red.600"
                color="white"
                px={8}
                py={3}
                borderRadius="2xl"
                fontSize={{ base: "sm", md: "base" }}
                fontWeight="bold"
                _hover={{ bg: "red.700" }}
                transition="all 0.3s"
                minW="200px"
              >
                Delete My Account
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {showConfirmModal && (
        <Box as="section" display="flex" justifyContent="center" minH="60vh">
          <Box role="region" aria-labelledby="confirm-heading" bg="blue.100" borderRadius="3xl" p={{ base: 5, md: 8 }} maxW="md" width="100%" boxShadow="2xl">
            <Heading id="confirm-heading" textAlign="center" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="red.600" mb={6}>
              Confirm Account Deletion
            </Heading>

            <VStack gap={4}>
              <Box width="100%">
                <Text mb={2} fontSize="sm" fontWeight="medium" color="black">Email Address</Text>
                <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} bg="white" borderRadius="2xl" borderColor="yellow.400" borderWidth="1px" px={4} py={3} fontSize="sm" _focus={{ boxShadow: "0 0 0 2px #ecc94b", borderColor: "yellow.400" }} />
              </Box>

              <Box width="100%">
                <Text mb={2} fontSize="sm" fontWeight="medium" color="black">Phone Number</Text>
                <Input type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} bg="white" borderRadius="2xl" borderColor="yellow.400" borderWidth="1px" px={4} py={3} fontSize="sm" _focus={{ boxShadow: "0 0 0 2px #ecc94b", borderColor: "yellow.400" }} />
              </Box>
            </VStack>

            <HStack gap={3} w="full" mt={6}>
              <Button onClick={() => { setShowConfirmModal(false); setShowInfoModal(true); setEmail(""); setPhone(""); }} disabled={loading} bg="gray.400" color="white" flex={1} borderRadius="xl" px={4} py={2.5} fontSize="sm" fontWeight="semibold" _hover={{ bg: "gray.500" }}>
                Cancel
              </Button>

              <Button onClick={handleConfirmDelete} disabled={loading} bg={loading ? "red.400" : "red.600"} color="white" flex={1} borderRadius="xl" px={4} py={2.5} fontSize="sm" fontWeight="bold" _hover={{ bg: loading ? "red.400" : "red.700" }} cursor={loading ? "not-allowed" : "pointer"}>
                {loading ? "Submitting..." : "Confirm & Delete"}
              </Button>
            </HStack>
          </Box>
        </Box>
      )}
    </Container>
  );
}
