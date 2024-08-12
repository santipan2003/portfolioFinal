import Link from "next/link";
import {
  Box,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import { InterestType } from "../../../interfaces";
import { InterestData } from "../../../utils/sample-data";

const AboutPageCard = () => {
  return (
    <Box maxW="100%" mx="auto" p={[4, 6, 8]}>
      <SimpleGrid columns={{ base: 1, md: 12 }} spacing={8}>
        {/* Left side with the image */}
        <Box
          gridColumn={{ base: "span 12", md: "span 4" }}
          mb={{ base: 6, md: 0 }}
        >
          <Image
            src="https://img5.pic.in.th/file/secure-sv1/IMG_1927.jpeg"
            alt="Profile Image"
            borderRadius="lg"
            objectFit="cover"
            width="100%"
            height={{ base: "auto", md: "100%" }}
          />
        </Box>

        {/* Right side with the content */}
        <Box gridColumn={{ base: "span 12", md: "span 8" }}>
          <Heading as="h2" size={{ base: "md", md: "lg" }} mb={4}>
            About Me
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
            &nbsp;&nbsp;&nbsp;&nbsp; I am a Computer Engineering student with a
            strong passion for web development and mobile app development. Eager
            to leverage my technical skills and creativity to build innovative
            and user-centric solutions for the digital world. Committed to
            continuous learning and staying up-to-date with the latest
            technologies in these fields.
          </Text>
          <UnorderedList mt={12} ml={0} styleType="none">
            <Heading as="h3" size={{ base: "sm", md: "md" }} mb={2}>
              Contact
            </Heading>
            <ListItem display="flex" alignItems="center" mb={2}>
              <Image
                src="https://img2.pic.in.th/pic/id-card_1406558.png"
                alt="Name Icon"
                boxSize="25px"
                mr={2}
              />
              <Text fontSize={{ base: "sm", md: "md" }}>Santipan Sunee</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/telephone_719703.png"
                alt="Phone Icon"
                boxSize="25px"
                mr={2}
              />
              <Text fontSize={{ base: "sm", md: "md" }}>091-845-6138</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" mb={2}>
              <Image
                src="https://img5.pic.in.th/file/secure-sv1/gmail_888903.png"
                alt="Email Icon"
                boxSize="25px"
                mr={2}
              />
              <Text fontSize={{ base: "sm", md: "md" }}>
                santipan.game@gmail.com
              </Text>
            </ListItem>
          </UnorderedList>
          <Box mt={16}>
            <Heading as="h3" size={{ base: "sm", md: "md" }} mb={2}>
              My Interests
            </Heading>
            <Flex wrap="wrap" gap={4}>
              {InterestData.map((item) => (
                <Box key={item.id} display="flex" alignItems="center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    boxSize="25px"
                    mr={2}
                  />
                  <Text fontSize={{ base: "sm", md: "md" }}>{item.title}</Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AboutPageCard;
