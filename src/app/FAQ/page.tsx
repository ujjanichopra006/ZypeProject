"use client";

import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  Icon,
  HStack,
  SimpleGrid,
  Badge,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaQuestionCircle, FaBuilding, FaHandshake, FaLightbulb } from "react-icons/fa";

type FAQItem = { q: string; a: string; image?: string };

// Custom component for each FAQ item with image
const FAQAccordionItem = ({ item, index, type, borderColor, iconColor }: any) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  return (
    <Accordion.Item
      key={index}
      value={`${type}-${index}`}
      border="1px solid"
      borderRadius="2xl"
      mb={4}
      overflow="hidden"
      backdropFilter="blur(8px)"
      boxShadow="0 4px 20px rgba(0,0,0,0.15)"
      transition="all 0.3s ease"
      _hover={{
        borderColor: borderColor,
        boxShadow: "0 8px 30px rgba(0,0,0,0.25), 0 0 20px rgba(59,130,246,0.05)",
      }}
    >
      <Accordion.ItemTrigger
        px={{ base: 5, md: 6 }}
        py={{ base: 4, md: 5 }}
        bg="transparent"
        _hover={{
          bg: "whiteAlpha.50",
        }}
        _expanded={{
          bg: "whiteAlpha.50",
          borderBottom: "1px solid",
          borderColor: "whiteAlpha.100",
        }}
        transition="all 0.3s"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <HStack flex="1" gap={4}>
          <Icon
            as={FaLightbulb}
            color={iconColor}
            boxSize={4}
            opacity={0.7}
          />
          <Text
            flex="1"
            textAlign="left"
            fontWeight="semibold"
            color="black"
            fontSize={{ base: "sm", md: "md" }}
            letterSpacing="tight"
          >
            {item.q}
          </Text>
        </HStack>
        <Accordion.ItemIndicator
          color={iconColor}
          fontSize="lg"
        />
      </Accordion.ItemTrigger>

      <Accordion.ItemContent
        px={{ base: 5, md: 6 }}
        pb={{ base: 5, md: 6 }}
        pt={4}
        bg="transparent"
      >
        <Flex 
          gap={{ base: 4, md: 6 }} 
          align="flex-start"
          direction={{ base: "column", sm: "row" }}
        >
          {/* Character Image - Only show if image exists */}
          {item.image && (
            <Box
              flexShrink={0}
              w={{ base: "60px", sm: "80px", md: "100px" }}
              h={{ base: "60px", sm: "80px", md: "100px" }}
              borderRadius="full"
              overflow="hidden"
              border="3px solid"
              borderColor={borderColor}
              boxShadow="0 4px 15px rgba(0,0,0,0.2)"
              bg="white"
              mx={{ base: "auto", sm: 0 }}
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05) rotate(-3deg)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
              }}
            >
              {!imgError ? (
                <Image
                  src={item.image}
                  alt="Character answering"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                // Fallback when image fails to load
                <Box
                  w="100%"
                  h="100%"
                  bgGradient="linear(to-br, blue.400, purple.500)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                >
                  {type === 'personal' ? '👨' : '👩'}
                </Box>
              )}
            </Box>
          )}
          
          {/* Answer Text */}
          <Text
            color="black"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="relaxed"
            letterSpacing="wide"
            flex="1"
            pl={{ base: 0, md: item.image ? 0 : 8 }}
            textAlign={{ base: "center", sm: "left" }}
          >
            {item.a}
          </Text>
        </Flex>
        
        {/* Small indicator showing who answered */}
        {item.image && (
          <Text
            fontSize="xs"
            color="gray.500"
            mt={3}
            textAlign={{ base: "center", sm: "right" }}
            fontStyle="italic"
          >
            👤 Expert answered
          </Text>
        )}
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};

export default function FAQContent() {
  const personalLoanFaqs: FAQItem[] = [
    { 
      q: "What is personal loan?", 
      a: "A personal loan is an unsecured loan you can take for needs like home repairs, education, or debt consolidation. You receive a lump sum and repay it in fixed EMIs over a set period.", 
      image: "/faqboy.jpeg"
    },
    { 
      q: "What are typical interest rates?", 
      a: "Rates usually range from 10% to 20% per annum in India. Your exact rate depends on your credit score, income, and lender's policy.", 
      image: "/faqboy.jpeg" 
    },
    { 
      q: "How long can I repay?", 
      a: "Repayment tenures generally span from 12 months to 60 months (1–5 years). Longer tenures lower your EMI but increase total interest paid.", 
      image: "/faqboy.jpeg" 
    },
    { 
      q: "How much can I borrow?", 
      a: "Most banks and NBFCs lend anywhere between ₹20,000 up to ₹25 lakh, depending on your eligibility and income.", 
      image: "/faqboy.jpeg"
    },
    { 
      q: "Are there any processing fees?", 
      a: "Yes—lenders may charge a processing fee of 1%–3% of the loan amount, which is usually deducted from your disbursal.", 
      image: "/faqboy.jpeg" 
    },
    { 
      q: "Can I prepay my loan?", 
      a: "Yes, partial or full prepayment is allowed by most lenders, often without penalty. Always confirm prepayment rules with your bank.", 
      image: "/faqboy.jpeg" 
    },
  ];

  const businessLoanFaqs: FAQItem[] = [
    { 
      q: "What is business loan?", 
      a: "A business loan provides funds for working capital, equipment purchases, or expansion. It can be secured (with collateral) or unsecured.", 
      image: "/faqgirl.jpeg"
    },
    { 
      q: "What's the loan amount range?", 
      a: "You can typically borrow between ₹50,000 and ₹50 lakh, depending on your business turnover, credit history, and lender guidelines.", 
      image: "/faqgirl.jpeg"
    },
    { 
      q: "What interest rates apply?", 
      a: "Business loan rates in India vary from 12% to 18% per annum. Your rate depends on your credit score, business vintage, and financials.", 
      image: "/faqgirl.jpeg" 
    },
    { 
      q: "What documents are needed?", 
      a: "Commonly required documents include bank statements (6–12 months), profit & loss statements, GST returns, and identity/address proofs.", 
      image: "/faqgirl.jpeg" 
    },
    { 
      q: "How do I apply?", 
      a: "You can apply online via a bank or NBFC website by uploading documents and filling out an application form. Approval usually takes 2–5 business days.", 
      image: "/faqgirl.jpeg" 
    },
    { 
      q: "Is collateral required?", 
      a: "Unsecured business loans don't need collateral but come at higher rates. Secured loans (against property or machinery) often offer lower interest.", 
      image: "/faqgirl.jpeg" 
    },
  ];

  return (
    <Box
      w="full"
      mt={20}
      minH="100vh"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 6 }}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "radial-gradient(circle at 10% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%), radial-gradient(circle at 90% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    >
      <Container maxW="5xl" position="relative" zIndex={1}>
        {/* Header Section */}
        <VStack mb={{ base: 12, md: 16 }} gap={4}>
          <HStack gap={3}>
            <Icon as={FaQuestionCircle} color="blue.400" boxSize={{ base: 7, md: 9 }} />
            <Heading
              as="h1"
              textAlign="center"
              color="black"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textShadow="0 0 40px rgba(59,130,246,0.15)"
            >
              Frequently Asked Questions
            </Heading>
          </HStack>
          <Text
            color="gray.600"
            fontSize={{ base: "sm", md: "md" }}
            textAlign="center"
            maxW="2xl"
            fontWeight="medium"
            letterSpacing="wide"
          >
            Find answers to the most common questions about personal and business loans
          </Text>
        </VStack>

        <VStack gap={12} align="stretch">
          {/* Personal Loan FAQs Section */}
          <Box>
            <HStack mb={6} gap={3} justify="center">
              <Icon as={FaHandshake} color="blue.400" boxSize={6} />
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                color="black"
                fontWeight="bold"
                textAlign="center"
                letterSpacing="tight"
              >
                Personal Loan FAQs
              </Heading>
              <Badge
                bg="red.600"
                color="white"
                fontSize="xs"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight="medium"
              >
                {personalLoanFaqs.length} Questions
              </Badge>
            </HStack>

            <Accordion.Root
              collapsible
              defaultValue={["personal-0"]}
              variant="enclosed"
            >
              {personalLoanFaqs.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  item={item}
                  index={index}
                  type="personal"
                  borderColor="blue.400"
                  iconColor="blue.400"
                />
              ))}
            </Accordion.Root>
          </Box>

          {/* Business Loan FAQs Section */}
          <Box>
            <HStack mb={6} gap={3} justify="center">
              <Icon as={FaBuilding} color="purple.400" boxSize={6} />
              <Heading
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                color="black"
                fontWeight="bold"
                textAlign="center"
                letterSpacing="tight"
              >
                Business Loan FAQs
              </Heading>
              <Badge
                bg="purple.500"
                color="white"
                fontSize="xs"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight="medium"
              >
                {businessLoanFaqs.length} Questions
              </Badge>
            </HStack>

            <Accordion.Root
              collapsible
              defaultValue={["business-0"]}
              variant="enclosed"
            >
              {businessLoanFaqs.map((item, index) => (
                <FAQAccordionItem
                  key={index}
                  item={item}
                  index={index}
                  type="business"
                  borderColor="purple.400"
                  iconColor="purple.400"
                />
              ))}
            </Accordion.Root>
          </Box>
        </VStack>

        {/* Footer Note */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={12} pt={8} borderTop="1px solid" borderColor="whiteAlpha.100">
          <Box textAlign="center">
            <Text color="gray.800" fontSize="xl" opacity={0.6}>
              💼 {personalLoanFaqs.length + businessLoanFaqs.length} Total Questions
            </Text>
          </Box>
          <Box textAlign="center">
            <Text color="gray.800" fontSize="xl" opacity={0.6}>
              📋 Updated Regularly
            </Text>
          </Box>
          <Box textAlign="center">
            <Text color="gray.800" fontSize="xl" opacity={0.6}>
              🔍 Find Your Answers
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}