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
import { EducationData } from "../../../utils/sample-data";

const EducationPageCard = () => (
  <Box maxW="100%" mx="auto" p={5}>
    <Box
      textAlign="center"
      mb={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        src="https://img2.pic.in.th/pic/books_4011055.png"
        alt="Education Icon"
        boxSize="30px"
        mr={3}
      />
      <Heading as="h2" size="lg" mb={0} lineHeight="30px">
        Educations
      </Heading>
    </Box>

    {EducationData.map((education, index) => (
      <Box key={index} borderBottom="1px solid" borderColor="gray.200" py={4}>
        <SimpleGrid columns={12} spacing={4}>
          <Box gridColumn="span 10">
            <Heading as="h3" size="md" mb={1}>
              {education.degree}
            </Heading>
            <Text color="gray.500" mb={1}>
              {education.title}
            </Text>
          </Box>
          <Box gridColumn="span 2" textAlign="right">
            <Text fontWeight="bold">GPAX : {education.gpax}</Text>
            <Text color="gray.500">{education.period}</Text>
          </Box>
        </SimpleGrid>
      </Box>
    ))}
  </Box>
);

export default EducationPageCard;
