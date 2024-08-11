import { NextPage } from "next";
import Layout from "../../components/Layout";
import EducationPageCard from "./components/EducationCard";

export const EducationPage: NextPage = () => {
  return (
    <Layout>
      <EducationPageCard />
    </Layout>
  );
};
