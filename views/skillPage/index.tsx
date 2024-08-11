import { NextPage } from "next";
import Layout from "../../components/Layout";
import SkillPageCard from "./components/SkillCard";

export const SkillPage: NextPage = () => {
  return (
    <Layout>
      <SkillPageCard />
    </Layout>
  );
};
