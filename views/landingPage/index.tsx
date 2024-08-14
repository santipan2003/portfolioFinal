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
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <LandingPageCard />
        </Box>
        <Box id="about" as="section" width="100%" overflowX="hidden">
          <AboutPageCard />
        </Box>
        <Box id="education" as="section" width="100%" overflowX="hidden">
          <EducationPageCard />
        </Box>
        <Box id="skills" as="section" width="100%" overflowX="hidden">
          <SkillPageCard />
        </Box>
        <Box id="project" as="section" width="100%" overflowX="hidden">
          <ProjectPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default LandingPage;
