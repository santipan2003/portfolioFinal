import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";

const LandingPageCard = () => (
  <Flex
    mt="2rem"
    direction={["column", "column", "row", "row"]}
    alignItems="center"
    justifyContent="space-between"
  >
    <Box>
      <Heading fontSize={["4xl"]}>Hi! I'm Santipan Sunee 👋</Heading>
      <Text
        mt="1rem"
        fontSize="lg"
        mb="2rem"
        color={useColorModeValue("gray.500", "gray.300")}
      >
        I am a student at Walailak University,
        <br /> specializing in Computer Engineering and Artificial Intelligence.
        <br /> I have a strong interest in web development, particularly using
        Next.js.
      </Text>

      <HStack spacing="1rem">
        <Link href="https://www.facebook.com/santipan.sunee19" passHref>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} />
        </Link>

        <Link href="https://github.com/santipan2003" passHref>
          <IconButton aria-label="GitHub" icon={<FaGithub />} />
        </Link>

        <Link href="mailto:santipan.game@gmail.com" passHref>
          <IconButton aria-label="Email" icon={<FaEnvelope />} />
        </Link>
      </HStack>
    </Box>

    <Box
      mt={["1rem", "2rem", "0", "0"]}
      ml={["0", "0", "2rem", "2rem"]}
      w={["100%", "100%", "50%", "50%"]}
    >
      <Image
        src="https://img2.pic.in.th/pic/cute-man-playing-game-computer-cartoon-vector-icon-illustration-people-technology-icon-isolated.png"
        alt="Programmer Illustration"
        objectFit="contain"
      />
    </Box>
  </Flex>
);

export default LandingPageCard;
