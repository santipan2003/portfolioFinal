import { Box, Flex, Text, VStack, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        px={5}
      >
        <VStack align="start">
          <Text fontWeight="bold" fontSize="lg">
            Santipan Sunee (Palm)
          </Text>
          <Text>Computer Engineering and Artificial Intelligence</Text>
          <Text>Walailak University</Text>
        </VStack>
        <HStack spacing={5} mt={{ base: 5, md: 0 }}>
          <Link href="/" _hover={{ textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/about" _hover={{ textDecoration: "none" }}>
            About
          </Link>
          <Link href="/contact" _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
