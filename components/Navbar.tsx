import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Define the height of your Navbar here
  const navbarHeight = 60; // Adjust based on your Navbar height

  return (
    <Box
      as="nav"
      py={[2, 4]}
      boxShadow="md"
      bgColor={useColorModeValue("white", "black")}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
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
            <ScrollLink
              to="landing"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.600", "gray.300"),
                }}
              >
                Home
              </Text>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.600", "gray.300"),
                }}
              >
                About
              </Text>
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.600", "gray.300"),
                }}
              >
                Education
              </Text>
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.600", "gray.300"),
                }}
              >
                Skill
              </Text>
            </ScrollLink>
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.600", "gray.300"),
                }}
              >
                Project
              </Text>
            </ScrollLink>
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
            mr={20}
          />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} rounded="md" shadow="md" mt={2}>
          <Stack as="nav" spacing={4} p={4}>
            <ScrollLink
              to="landing"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.600"),
                  rounded: "md",
                  padding: 2,
                }}
              >
                Home
              </Text>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.600"),
                  rounded: "md",
                  padding: 2,
                }}
              >
                About
              </Text>
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.600"),
                  rounded: "md",
                  padding: 2,
                }}
              >
                Education
              </Text>
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.600"),
                  rounded: "md",
                  padding: 2,
                }}
              >
                Skill
              </Text>
            </ScrollLink>
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.600"),
                  rounded: "md",
                  padding: 2,
                }}
              >
                Project
              </Text>
            </ScrollLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
