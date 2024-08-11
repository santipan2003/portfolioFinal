import { NextPage } from "next";
import Layout from "../../components/Layout";
import ProjectPageCard from "./components/ProjectCard";

export const ProjectPage: NextPage = () => {
  return (
    <Layout>
      <ProjectPageCard />
    </Layout>
  );
};
