import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { BsImages } from "react-icons/bs";

const BlogPostWithImage: NextPage = () => {
  return (
    <Flex py="6" w="full" maxW="350px">
      <Box bg="white" boxShadow="xl" rounded="xl" p="6" overflow="hidden">
        <Box h="230px" mt="-6" mx="-6" pos="relative">
          <Image
            src=""
            fallbackSrc="https://via.placeholder.com/300x200"
            layout="full"
            alt=""
          />
        </Box>
        <Stack>
          <Text
            color="blue.500"
            fontWeight="800"
            fontSize="xs"
            letterSpacing='wide'
          >
            Blog
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default BlogPostWithImage;
