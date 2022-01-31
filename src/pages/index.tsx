import { Center, Divider, Flex, Grid, Spacer } from "@chakra-ui/react";
import type { NextPage } from "next";
import { FaBell } from "react-icons/fa";
import BlogPostWithImage from "../components/BlogPostWithImage";
import JobDescription from "../components/JobDescription";
import List from "../components/List";
import ProfileCard from "../components/ProfileCard";
import SearchBox from "../components/SearchBox";
import SideNav from "../components/SideNav";

const Home: NextPage = () => {
  return (
    <Flex maxW="2000px" direction="row" overflow="hidden">
      <SideNav />
      <Center my="10" mr="8">
        <Divider orientation="vertical" />
      </Center>
      <Flex direction="column" w="75%">
        <Flex direction="row" justify="space-between" my="10" align="center">
          <SearchBox />
          <Spacer />
          <FaBell size="2rem" color="#FCBA03" />
        </Flex>
        <ProfileCard />
        <Flex mt="4" mr="6">
          <Flex direction="column" w="30%" mx="auto">
            <BlogPostWithImage />
            <BlogPostWithImage />
          </Flex>
          <Flex direction="column" w="70%">
            <JobDescription />
            <List />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
