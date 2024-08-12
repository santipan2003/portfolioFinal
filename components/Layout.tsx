import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useColorModeValue } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Santipan Sunee | Portfolio" }: Props) => (
  <Flex direction="column" minH="100vh">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Box position="fixed" top="0" left="0" width="100%" zIndex="1000">
      <Navbar />
    </Box>
    <Box bgColor={useColorModeValue("white", "black")} flex="1" mt="60px">
      {" "}
      {/* Adjust margin-top based on Navbar height */}
      <Box
        as="main"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6, lg: 8 }}
        py={{ base: 4, md: 6 }}
        width="100%"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </Flex>
);

export default Layout;
