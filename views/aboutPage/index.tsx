import { NextPage } from "next";
import Layout from "../../components/Layout";
import AboutPageCard from "./components/AboutCard";

export const AboutPage: NextPage = () => {
  return (
    <Layout>
      <AboutPageCard />
    </Layout>
  );
};
