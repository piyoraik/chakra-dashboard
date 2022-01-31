import { Flex, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";

interface Props {
  title: string;
  text: string;
  icon: string;
  bgColor: string;
}

const Feature: NextPage<Props> = (props) => {
  const { title, text, icon, bgColor } = props;
  return (
    <Stack align="center" shadow="md" p="5" rounded="md" bg={bgColor}>
      <Flex
        w="16"
        h="16"
        align="center"
        justify="center"
        rounded="full"
        bg="gray.100"
        mb="1"
      >
        {icon}
      </Flex>
      <Text fontWeight="600">{title}</Text>
      <Text color="gray.600" textAlign="justify" fontSize="xs" p="2">
        {text}
      </Text>
    </Stack>
  );
};

export default Feature;
