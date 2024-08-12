import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { EducationData } from "../../../utils/sample-data";
import { motion } from "framer-motion";

const EducationPageCard = () => (
  <Box maxW="100%" mx="auto" p={[4, 6, 8]}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
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
          boxSize={{ base: "25px", md: "30px" }}
          mr={3}
        />
        <Heading
          as="h2"
          size={{ base: "md", md: "lg" }}
          mb={0}
          lineHeight="30px"
        >
          Education
        </Heading>
      </Box>
    </motion.div>

    {EducationData.map((education, index) => (
      <Box
        key={index}
        borderBottom="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.600")}
        py={[3, 4]}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SimpleGrid columns={{ base: 1, md: 12 }} spacing={4}>
            <Box gridColumn={{ base: "span 12", md: "span 10" }}>
              <Heading as="h3" size={{ base: "sm", md: "md" }} mb={1}>
                {education.degree}
              </Heading>
              <Text color={useColorModeValue("gray.500", "gray.400")} mb={1}>
                {education.title}
              </Text>
            </Box>
            <Box
              gridColumn={{ base: "span 12", md: "span 2" }}
              textAlign={{ base: "left", md: "right" }}
            >
              <Text fontWeight="bold">GPAX: {education.gpax}</Text>
              <Text color={useColorModeValue("gray.500", "gray.400")}>
                {education.period}
              </Text>
            </Box>
          </SimpleGrid>
        </motion.div>
      </Box>
    ))}
  </Box>
);

export default EducationPageCard;
