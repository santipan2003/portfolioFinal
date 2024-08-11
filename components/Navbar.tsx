import {
  Box,
  Flex,
  Text,
  Link,
  HStack,
  Button,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" py={4} bgColor={useColorModeValue("white", "black")}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={5}
        justify="space-between"
        align="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          Portfolio | Santipan Sunee
        </Text>
        <HStack spacing={4}>
          <Link href="/" _hover={{ textDecoration: "none", color: "gray.500" }}>
            Home
          </Link>
          <Link
            href="/aboutPage"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            About
          </Link>
          <Link
            href="/educationPage"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Education
          </Link>
          <Link
            href="/skillPage"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Skill
          </Link>
          <Link
            href="/projectPage"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Project
          </Link>

          {/* <Link
            href="/users"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Educations
          </Link>
          <Link
            href="/api/users"
            _hover={{ textDecoration: "none", color: "gray.500" }}
          >
            Skills
          </Link> */}
          <Flex alignItems="center" display={["none", "none", "none", "flex"]}>
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle color mode"
            />
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
