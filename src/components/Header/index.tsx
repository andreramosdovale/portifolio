import NextLink from "next/link";
import { Flex, Text, Switch, Link, Box } from "@chakra-ui/react";
import { ptBr, en } from "./content.data";

interface IHeader {
  path: string;
}

const Header = ({ path }: IHeader) => {
  const content = ptBr;

  return (
    <>
      <Box
        margin={{
          "3xl": "0 25%",
          "2xl": "0 20%",
          xl: "0 20%",
          md: "0 15%",
          sm: "0 5%",
          xs: "0 2%",
        }}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          height="10vh"
          max-width="100vw"
        >
          <Link as={NextLink} href="/">
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
            >
              {content.home}
            </Text>
          </Link>
          <Link as={NextLink} href="/about">
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
            >
              {content.about}
            </Text>
          </Link>
          <Link as={NextLink} href="/experience">
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
            >
              {content.experience}
            </Text>
          </Link>
          <Link as={NextLink} href="/projects">
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
            >
              {content.projects}
            </Text>
          </Link>
          <Link as={NextLink} href="/education">
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
            >
              {content.education}
            </Text>
          </Link>
          <Flex marginRight={{ sm: "10px" }}>
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
              marginRight={{ xl: "10px", md: "10px", sm: "10px", xs: "1px" }}
            >
              Português
            </Text>
            <Switch
              size={{ xl: "md", md: "sm", sm: "sm", xs: "sm" }}
              alignSelf="center"
            />
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
              }}
              marginLeft={{ xl: "10px", md: "10px", sm: "10px", xs: "1px" }}
            >
              English
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
