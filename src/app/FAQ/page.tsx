"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
} from "@chakra-ui/react";

type FAQItem = { q: string; a: string };

export default function FAQContent() {
  const personalLoanFaqs: FAQItem[] = [
    { q: "What is personal loan?", a: "A personal loan is an unsecured loan you can take for needs like home repairs, education, or debt consolidation. You receive a lump sum and repay it in fixed EMIs over a set period." },
    { q: "What are typical interest rates?", a: "Rates usually range from 10% to 20% per annum in India. Your exact rate depends on your credit score, income, and lender's policy." },
    { q: "How long can I repay?", a: "Repayment tenures generally span from 12 months to 60 months (1–5 years). Longer tenures lower your EMI but increase total interest paid." },
    { q: "How much can I borrow?", a: "Most banks and NBFCs lend anywhere between ₹20,000 up to ₹25 lakh, depending on your eligibility and income." },
    { q: "Are there any processing fees?", a: "Yes—lenders may charge a processing fee of 1%–3% of the loan amount, which is usually deducted from your disbursal." },
    { q: "Can I prepay my loan?", a: "Yes, partial or full prepayment is allowed by most lenders, often without penalty. Always confirm prepayment rules with your bank." },
  ];

  const businessLoanFaqs: FAQItem[] = [
    { q: "What is business loan?", a: "A business loan provides funds for working capital, equipment purchases, or expansion. It can be secured (with collateral) or unsecured." },
    { q: "What's the loan amount range?", a: "You can typically borrow between ₹50,000 and ₹50 lakh, depending on your business turnover, credit history, and lender guidelines." },
    { q: "What interest rates apply?", a: "Business loan rates in India vary from 12% to 18% per annum. Your rate depends on your credit score, business vintage, and financials." },
    { q: "What documents are needed?", a: "Commonly required documents include bank statements (6–12 months), profit & loss statements, GST returns, and identity/address proofs." },
    { q: "How do I apply?", a: "You can apply online via a bank or NBFC website by uploading documents and filling out an application form. Approval usually takes 2–5 business days." },
    { q: "Is collateral required?", a: "Unsecured business loans don't need collateral but come at higher rates. Secured loans (against property or machinery) often offer lower interest." },
  ];

  function useColorModeValue<T>(light: T, _dark: T): T {
    return light;
  }

  const cardBg = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("gray.100", "gray.700");
  const buttonHoverBg = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("blue.500", "blue.300");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box width="100%" minH="100vh" bgGradient="linear(to-b, blue.200, white, blue.200)" px={{ base: 4, md: 6 }} py={10}>
      <Container maxW="4xl" mx="auto">
        <VStack gap={10} align="stretch">
          <Box>
            <Heading as="h2" fontSize="2xl" color={headingColor} fontWeight="bold" textAlign="center" mb={4}>
              Personal Loan FAQs
            </Heading>

            <Accordion.Root>
              {personalLoanFaqs.map((item, index) => (
                <Accordion.Item key={index} value={`personal-${index}`} border="1px solid" borderColor={borderColor} borderRadius="lg" mb={4} overflow="hidden" boxShadow="sm" bg={cardBg}>
                  <Accordion.ItemTrigger px={4} py={3} bg={buttonBg} _hover={{ bg: buttonHoverBg }} _expanded={{ bg: buttonHoverBg }}>
                    <Box as="span" flex="1" textAlign="left" fontWeight="medium">{item.q}</Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>

                  <Accordion.ItemContent pb={4} px={4}>
                    <Text color={textColor}>{item.a}</Text>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>

          <Box>
            <Heading as="h2" fontSize="2xl" color={headingColor} fontWeight="bold" textAlign="center" mb={4}>
              Business Loan FAQs
            </Heading>

            <Accordion.Root>
              {businessLoanFaqs.map((item, index) => (
                <Accordion.Item key={index} value={`business-${index}`} border="1px solid" borderColor={borderColor} borderRadius="lg" mb={4} overflow="hidden" boxShadow="sm" bg={cardBg}>
                  <Accordion.ItemTrigger px={4} py={3} bg={buttonBg} _hover={{ bg: buttonHoverBg }} _expanded={{ bg: buttonHoverBg }}>
                    <Box as="span" flex="1" textAlign="left" fontWeight="medium">{item.q}</Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>

                  <Accordion.ItemContent pb={4} px={4}>
                    <Text color={textColor}>{item.a}</Text>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
