import { Button, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";

const NavBar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="cyan.200"
          bgClip="text"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack wordSpacing={2} alignItems="center">
          <Link to="/create">
            <Button>
              <Icon fontSize={20}>
                <CiSquarePlus />
              </Icon>
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
