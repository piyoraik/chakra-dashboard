import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import sampleImg from "../../public/350x200.png";

const BlogPostWithImage: NextPage = () => {
  return (
    <Flex py="6" w="full" maxW="350px">
      <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden">
        <Box h="230px" mt="-6" mx="-6" pos="relative">
          <Image src="" fallbackSrc={sampleImg.src} layout="full" alt="" />
        </Box>
        <Stack>
          <Text
            color="blue.500"
            fontWeight="800"
            fontSize="xs"
            letterSpacing="wide"
          >
            Blog
          </Text>
          <Heading color="gray.700" fontSize="lg" fontFamily="body">
            Next.js + ChakraUI Dashboard
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Chakra UI is a simple, modular and accessible component library that
            gives you the building blocks you need to build your React
            applications.
          </Text>
        </Stack>
        <Stack mt="6" direction="row" spacing="4" align="center">
          <Avatar
            src="https://gravatar.com/avatar/456e6f4841d1935a5383bd73a77a5a16?s=400&d=robohash&r=x"
            alt="Author"
          />
          <Stack direction="column" spacing="0" fontSize="sm">
            <Text fontWeight="bold">Daisuke</Text>
            <Text color="gray.500">Aug 12, 2021 · 15min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};

export default BlogPostWithImage;
