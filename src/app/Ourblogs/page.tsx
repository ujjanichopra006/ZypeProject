"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  Badge,
  VStack,
  HStack,
} from "@chakra-ui/react";

const blogs = [
  {
    id: 1,
    title: "Credit Score Awareness in India (2026 Guide)",
    category: "Fintech",
    date: "Feb 23, 2026",
    link: "/Ourblogs/Blog1",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
    description:
      "Understand how credit scores work in India, what affects your CIBIL score, and practical tips to improve it.",
  },
  {
    id: 2,
    title: "Is Crypto Still a Good Investment?",
    category: "Cryptocurrency",
    date: "December 13, 2025",
    link: "/Ourblogs/Blog2",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&q=80",
    description:
      "Explore the latest trends, risks, and expert insights on crypto investing.",
  },
  {
    id: 3,
    title: "Celebrating India's Colorful Festivals",
    category: "Festivals",
    date: "October 20, 2025",
    link: "/Ourblogs/Blog3",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&q=80",
    description:
      "A glimpse into India's vibrant festivals, traditions, and celebrations.",
  },
  {
    id: 4,
    title: "Safety Awareness about Cyber Crime",
    category: "Cyber Security",
    date: "August 08, 2025",
    link: "/Ourblogs/Blog4",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    description:
      "Learn how to stay safe from phishing, hacking, and online fraud.",
  },
  {
    id: 5,
    title: "सर्वश्रेष्ठ पर्सनल लोन बैंक - 2024 गाइड",
    category: "personal loan guide",
    date: "July 08, 2025",
    link: "/Ourblogs/Blog5",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&q=80",
    description:
      "2024 में सही पर्सनल लोन बैंक चुनने के लिए आसान गाइड।",
  },
  {
    id: 6,
    title: "How Your Phone is Rewiring Your Brain",
    category: "Lifestyle",
    date: "July 08, 2025",
    link: "/Ourblogs/Blog6",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    description:
      "Understand how mobile apps and notifications affect your brain.",
  },
];

export default function Ourblogs() {
  return (
    <Box bg="#051126" py={10}>
      <Container maxW="7xl" px={{ base: 4, md: 8, lg: 14 }}>
        {/* Heading */}
        <HStack gap={2} justifyContent="center" mb={8}>
          <Text fontSize="2xl">✍️</Text>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="white"
          >
            Latest Blog Posts
          </Heading>
        </HStack>

        {/* Blog Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {blogs.map((blog) => (
            <Card.Root
              key={blog.id}
              bg="white"
              borderRadius="24px"
              overflow="hidden"
              borderColor="gray.200"
              borderWidth="1px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-4px)",
              }}
            >
              {/* Image Container */}
              <Box position="relative" h="180px" w="full" overflow="hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                  className="transition duration-500 hover:scale-105"
                />

                <Badge
                  position="absolute"
                  top={3}
                  left={3}
                  bg="blue.600"
                  color="white"
                  fontSize="10px"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontWeight="medium"
                >
                  {blog.category}
                </Badge>
              </Box>

              {/* Content */}
              <Box p={4}>
                <Heading
                  as="h3"
                  fontSize="16px"
                  fontWeight="bold"
                  color="#0d223d"
                  mb={2}
                  _hover={{ color: "blue.600" }}
                  transition="color 0.2s"
                >
                  {blog.title}
                </Heading>

                <Text
                  fontSize="13px"
                  color="gray.600"
                  mb={4}
                >
                  {blog.description}
                </Text>

                <Link href={blog.link} passHref legacyBehavior>
                  <Text
                    as="a"
                    color="blue.600"
                    fontSize="13px"
                    fontWeight="semibold"
                    _hover={{ textDecoration: "underline" }}
                    display="inline-flex"
                    alignItems="center"
                  >
                    Read More
                    <Box as="span" ml={1}>
                      →
                    </Box>
                  </Text>
                </Link>

                <Text fontSize="11px" color="gray.400" mt={2}>
                  {blog.date}
                </Text>
              </Box>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}