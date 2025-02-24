import { Button, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "./ui/color-mode";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

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
              <Icon>
                <CiSquarePlus />
              </Icon>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <Icon>
                <IoMoon />
              </Icon>
            ) : (
              <Icon>
                <LuSun />
              </Icon>
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
