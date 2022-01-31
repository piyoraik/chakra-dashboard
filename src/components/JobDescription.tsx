import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

const JobDescription: NextPage = () => {
  return (
    <Box
      w="full"
      mt="6"
      ml="5"
      p="6"
      boxShadow="xl"
      rounded="md"
      border="1px"
      borderColor="gray.50"
    ></Box>
  );
};

export default JobDescription;
