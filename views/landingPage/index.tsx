import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import LandingPageCard from "./components/LandingCard";
import AboutPageCard from "../aboutPage/components/AboutCard";
import EducationPageCard from "../educationPage/components/EducationCard";
import SkillPageCard from "../skillPage/components/SkillCard";
import ProjectPageCard from "../projectPage/components/ProjectCard";

export const LandingPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%">
        <Box id="landing" as="section" width="100%">
          <LandingPageCard />
        </Box>
        <Box id="about" as="section" width="100%">
          <AboutPageCard />
        </Box>
        <Box id="education" as="section" width="100%">
          <EducationPageCard />
        </Box>
        <Box id="skills" as="section" width="100%">
          <SkillPageCard />
        </Box>
        <Box id="skills" as="section" width="100%">
          <ProjectPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default LandingPage;
