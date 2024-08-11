import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import ForceDirectedTree from "./../utills/chart";

const SkillPageCard = () => (
  <Box maxW="100%" mx="auto" p={5}>
    <Box
      textAlign="center"
      mb={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src="https://img5.pic.in.th/file/secure-sv1/skill_8385245.png"
        alt="Skill Icon"
        boxSize="30"
        mr={2}
      />
      <Heading as="h2" size="lg" mb={0} lineHeight="30px">
        Skills
      </Heading>
    </Box>
    <Box
      textAlign="center"
      mb={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ForceDirectedTree />
    </Box>
  </Box>
);

export default SkillPageCard;
