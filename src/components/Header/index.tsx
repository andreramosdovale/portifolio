import NextLink from "next/link";
import { Flex, Text, Switch, Link } from "@chakra-ui/react";
import { ptBr, en } from "./content.data";

interface IHeader {
  path: string;
}

const Header = ({ path }: IHeader) => {
  const content = ptBr;

  return (
    <>
      <Flex
        margin="0 30%"
        alignItems="center"
        justifyContent="space-between"
        height="10vh"
      >
        <Link as={NextLink} href="/">
          <Text fontSize="xl">{content.home}</Text>
        </Link>
        <Link as={NextLink} href="/about">
          <Text fontSize="xl">{content.about}</Text>
        </Link>
        <Link as={NextLink} href="/experience">
          <Text fontSize="xl">{content.experience}</Text>
        </Link>
        <Link as={NextLink} href="/projects">
          <Text fontSize="xl">{content.projects}</Text>
        </Link>
        <Link as={NextLink} href="/education">
          <Text fontSize="xl">{content.education}</Text>
        </Link>
        <Flex>
          <Text fontSize="xl" marginRight="10px">
            Português
          </Text>
          <Switch size="lg" />
          <Text fontSize="xl" marginLeft="10px">
            English
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
