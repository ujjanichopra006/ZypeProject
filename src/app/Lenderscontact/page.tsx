"use client";

import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Link,
} from "@chakra-ui/react";

const lenders = [
  { name: "LoanTap", link: "https://loantap.in/contact-us/" },
  { name: "CreditSea", link: "https://www.creditsea.com/contact-us" },
  { name: "TrustPaisa", link: "https://trustpaisa.com/" },
  { name: "Payme", link: "https://www.paymeindia.in/contact/" },
  { name: "Branch", link: "https://branch.co/in/contact-us" },
  { name: "Ram FinCorp", link: "https://www.ramfincorp.com/contact-us" },
  { name: "Zype", link: "https://www.getzype.com/contact-us/" },
  { name: "Moneyview", link: "https://moneyview.in/contact-us" },
  { name: "FatakPay", link: "https://www.fatakpay.com/contact-us" },
  { name: "mPokket", link: "https://www.mpokket.in/contact" },
  { name: "olyv", link: "https://www.olyv.co.in/contactus" },
  { name: "Kamakshi Money", link: "https://www.kamakshimoney.com/contact.html" },
  { name: "SalaryOnTime", link: "https://salaryontime.com/contact-salaryontime" },
  { name: "Instant Mudra", link: "https://www.instantmudra.com/contact.php" },
];

export default function LenderContact() {
  return (
    <Box w="full" minH="100vh" bg="#020d24" py={8} px={3}>
      <Container maxW="5xl" mx="auto">
        {/* Heading */}
        <Heading
          as="h1"
          textAlign="center"
          color="white"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb={10}
        >
          Lender Contact
        </Heading>

        {/* Cards Grid */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
          {lenders.map((lender, index) => (
            <Card.Root
              key={index}
              bg="#868992"
              borderColor="gray.300"
              borderWidth="1px"
              borderRadius="2xl"
              h="110px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={4}
            >
              {/* Lender Name */}
              <Text
                color="white"
                fontSize={{ base: "16px", md: "17px" }}
                fontWeight="bold"
                textAlign="center"
                mb={3}
                px={2}
              >
                {lender.name}
              </Text>

              {/* Button */}
              <Link
                href={lender.link}
                target="_blank"
                rel="noopener noreferrer"
                bg="blue.600"
                color="white"
                fontSize="12px"
                fontWeight="semibold"
                px={5}
                py={1.5}
                borderRadius="full"
                _hover={{
                  bg: "blue.700",
                  textDecoration: "none",
                }}
                transition="all 0.3s"
                display="inline-block"
              >
                Contact Lender
              </Link>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}