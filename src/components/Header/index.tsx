import NextLink from "next/link";
import { Flex, Text, Link, Box, Center } from "@chakra-ui/react";
import { ptBr, en, IContent } from "./content.data";
import { US, BR } from "country-flag-icons/react/3x2";
import { useState } from "react";

interface IHeader {
  path: string;
}

const Header = ({ path }: IHeader) => {
  const [content, setContent] = useState<IContent>(ptBr);
  const [currentLang, setCurrentLang] = useState<"ptBr" | "en">("ptBr");

  const changeFilterFlag = (lang: string): boolean => {
    if (currentLang === lang) {
      return true;
    }

    return false;
  };

  const changeLang = (lang: "ptBr" | "en") => {
    const contentType = lang === "ptBr" ? ptBr : en;

    setContent(contentType);
    setCurrentLang(lang);
  };

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
                xl: "5px",
                md: "5px",
                sm: "5px",
                xs: "1px",
                xxs: "1px",
              }}
              cursor="pointer"
              onClick={() => changeLang("ptBr")}
            >
              <BR
                title="Português"
                filter={changeFilterFlag("ptBr") ? "" : "grayscale(90%)"}
              />
              <Center>
                <Text fontSize="xs">
                  <i>PT-BR</i>
                </Text>
              </Center>
            </Box>
            <Box
              width={{
                xl: "50px",
                md: "40px",
                sm: "30px",
                xs: "25px",
                xxs: "25px",
              }}
              height="100%"
              cursor="pointer"
              onClick={() => changeLang("en")}
            >
              <US
                title="English"
                filter={changeFilterFlag("en") ? "" : "grayscale(90%)"}
              />
              <Center>
                <Text fontSize="xs">
                  <i>EN</i>
                </Text>
              </Center>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
