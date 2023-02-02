import NextLink from "next/link";
import { Flex, Text, Switch, Link, Box } from "@chakra-ui/react";
import { ptBr, en } from "./content.data";
import { US, BR } from "country-flag-icons/react/3x2";

interface IHeader {
  path: string;
}

const Header = ({ path }: IHeader) => {
  const content = ptBr;

  return (
    <>
      <Box
        margin={{
          "4xl": "0 35%",
          "3xl": "0 25%",
          "2xl": "0 20%",
          xl: "0 20%",
          md: "0 20%",
          sm: "0 15%",
          xs: "0 10%",
          xxs: "0 5%",
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
                xxs: "xs",
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
                xxs: "xs",
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
                xxs: "xs",
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
                xxs: "xs",
              }}
            >
              {content.projects}
            </Text>
          </Link>
          <Flex>
            <Box
              width={{
                xl: "50px",
                md: "40px",
                sm: "30px",
                xs: "25px",
                xxs: "25px",
              }}
              height="100%"
              marginRight={{
                xl: "10px",
                md: "10px",
                sm: "10px",
                xs: "1px",
                xxs: "1px",
              }}
            >
              <BR title="Brazil" />
            </Box>
            <Switch
              size={{ xl: "md", md: "sm", sm: "sm", xs: "sm", xxs: "sm" }}
              alignSelf="center"
            />
            <Box
              width={{
                xl: "50px",
                md: "40px",
                sm: "30px",
                xs: "25px",
                xxs: "25px",
              }}
              height="100%"
              marginLeft={{
                xl: "10px",
                md: "10px",
                sm: "10px",
                xs: "1px",
                xxs: "1px",
              }}
            >
              <US title="United States" filter="grayscale(90%)" />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
