import { Box, Grid, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import { NextPage } from "next";
import Feature from "./Feature";
import { FcAssistant, FcBullish, FcCommandLine } from "react-icons/fc";

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
    >
      <Heading mt="2" mb="5" fontSize="xl">
        Job Description
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Feature
          icon={<Icon as={FcAssistant} w="10" h="10" />}
          title="Customer Success"
          text="This is a position where you will work with customers who have implemented Canly to help them implement,
                 utilize, and create successful experiences, as well as solve problems. "
          bgColor="red.50"
        />
        <Feature
          icon={<Icon as={FcBullish} w="10" h="10" />}
          title="Marketing"
          text="This is a marketing position that will be responsible for generating leads for our company,
                which is rapidly growing in terms of users, and is in the phase of creating a marketing system from scratch with a focus on web marketing. "
          bgColor="cyan.50"
        />
        <Feature
          icon={<Icon as={FcCommandLine} w="10" h="10" />}
          title="Development"
          text="We are rebuilding our website into a SPA structure using Next.js. Along with that, we will be changing the server-side language from Laravel to Go.
                There will temporarily be two systems, one old and one new, but we are looking for someone to drive ..."
          bgColor="orange.50"
        />
      </Grid>
    </Box>
  );
};

export default JobDescription;
