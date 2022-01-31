import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { BsNewspaper, BsPlusSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiDoorOpenLine, RiMailStarLine } from "react-icons/ri";
import { MdCheckCircle, MdSettings } from "react-icons/md";
import { NextPage } from "next";

const SideNav: NextPage = () => {
  return (
    <Flex w="20%" direction="column" align="center">
      <Flex direction="column" justify="space-between">
        <Flex mt="50" mb="100">
          <Image
            borderRadius="full"
            boxSize="60px"
            fallbackSrc="https://via.placeholder.com/150"
            alt="company image"
          />
          <Heading ml="3" fontWeight="800" fontSize="xl" alignItems="center">
            The Earth
          </Heading>
        </Flex>
        <Flex h="65vh" direction="column" justify="space-between">
          <Flex fontSize="xl" color="gray" align="center">
            <BsPlusSquare />
            <Text ml="3">Add Resume</Text>
            <Box></Box>
          </Flex>
          <Flex
            h="20vh"
            mb="32"
            direction="column"
            align="flex-start"
            justify="space-around"
          >
            <Flex direction="column">
              <Flex
                fontSize="2xl"
                color="gray"
                align="center"
                fontWeight="800"
                backgroundColor="ping.50"
                p="3"
                m="-3"
                rounded="full"
              >
                <CgProfile color="ping" />
                <Text ml="3">My Profile</Text>
              </Flex>
              <List spacing={3} pl="5" fontSize="xl" mt='3'>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  React
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Vue
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Angular
                </ListItem>
              </List>
            </Flex>

            <Flex fontSize="xl" color="gray" align="center">
              <BsNewspaper color="#63B3ED" />
              <Text ml="3">Jobs</Text>
            </Flex>
            <Flex fontSize="xl" color="gray" align="center">
              <RiMailStarLine color="#ECC94B" />
              <Text ml="3">Employee</Text>
            </Flex>
          </Flex>
          <Flex fontSize="2xl" mb="30" color="gray" align="center">
            <RiDoorOpenLine />
            <Text ml="3" fontSize="md">
              Log out
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideNav;
