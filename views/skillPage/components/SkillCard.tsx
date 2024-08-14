import { Box, Heading, Image } from "@chakra-ui/react";
import ForceDirectedTree from "../utills/chart";
import { motion } from "framer-motion";

const SkillPageCard = () => (
  <Box maxW="100%" mx="auto" p={[4, 6, 8]} overflow="hidden">
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
        flexDirection="column"
      >
        <Image
          src="https://img5.pic.in.th/file/secure-sv1/skill_8385245.png"
          alt="Skill Icon"
          boxSize={{ base: "25px", md: "30px" }}
          mb={2}
        />
        <Heading as="h2" size={{ base: "md", md: "lg" }} lineHeight="30px">
          Skills
        </Heading>
      </Box>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <Box height={{ base: "500px", md: "500px" }} width="100%">
        <ForceDirectedTree />
      </Box>
    </motion.div>
  </Box>
);

export default SkillPageCard;
