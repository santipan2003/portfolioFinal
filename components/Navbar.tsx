import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      py={[2, 4]}
      boxShadow="md"
      bgColor={useColorModeValue("white", "black")}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={5}
        justify="space-between"
        align="center"
      >
        <Text
          fontSize={["lg", "xl", "2xl"]}
          fontWeight="bold"
          color={useColorModeValue("gray.800", "white")}
        >
          Portfolio | Santipan Sunee
        </Text>
        <Flex
          alignItems="center"
          justify="flex-end"
          flex="1"
          display={{ base: "none", md: "flex" }}
        >
          <HStack as="nav" spacing={4} mr={2}>
            <Link
              href="/"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.600", "gray.300"),
              }}
            >
              Home
            </Link>
            <Link
              href="/aboutPage"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.600", "gray.300"),
              }}
            >
              About
            </Link>
            <Link
              href="/educationPage"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.600", "gray.300"),
              }}
            >
              Education
            </Link>
            <Link
              href="/skillPage"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.600", "gray.300"),
              }}
            >
              Skill
            </Link>
            <Link
              href="/projectPage"
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.600", "gray.300"),
              }}
            >
              Project
            </Link>
          </HStack>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle color mode"
          />
        </Flex>
        <Flex alignItems="center" display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle color mode"
            mr={2}
          />
          <IconButton
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle navigation"
          />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} rounded="md" shadow="md" mt={2}>
          <Stack as="nav" spacing={4} p={4}>
            <Link
              href="/"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.600"),
                rounded: "md",
                padding: 2,
              }}
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/aboutPage"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.600"),
                rounded: "md",
                padding: 2,
              }}
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/educationPage"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.600"),
                rounded: "md",
                padding: 2,
              }}
              onClick={onClose}
            >
              Education
            </Link>
            <Link
              href="/skillPage"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.600"),
                rounded: "md",
                padding: 2,
              }}
              onClick={onClose}
            >
              Skill
            </Link>
            <Link
              href="/projectPage"
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.600"),
                rounded: "md",
                padding: 2,
              }}
              onClick={onClose}
            >
              Project
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
