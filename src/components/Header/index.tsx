import NextLink from "next/link";
import { Flex, Text, Link, Box, color } from "@chakra-ui/react";
import { ptBr, en } from "@/content/Header.data";
import { IContentHeader } from "@/types/IContentHeader";
import { US, BR } from "country-flag-icons/react/3x2";
import { useContext, useState } from "react";
import LangContext from "@/context/LangContext";
import { defaultColors } from "@/styles/theme";

interface IHeader {
  path: string | null;
}

const Header = ({ path }: IHeader) => {
  const { lang, setLang } = useContext(LangContext);
  const [content, setContent] = useState<IContentHeader>(ptBr);
  const [currentLang, setCurrentLang] = useState(lang);

  const ChangeFilterFlag = (lang: string): boolean => {
    if (currentLang == lang) {
      return true;
    }

    return false;
  };

  const ChangeLang = (lang: string) => {
    const contentType = lang === "ptBr" ? ptBr : en;

    setLang(lang);
    setCurrentLang(lang);
    setContent(contentType);
  };

  const AddBorderBotton = (component: string) => {
    if (path === component) {
      return `3px solid ${defaultColors.primaryColor}`;
    }
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
          <Link as={NextLink} href="/" style={{ textDecoration: "none" }}>
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
                xxs: "xs",
              }}
              style={{
                borderBottom: AddBorderBotton("Home"),
              }}
              color={defaultColors.fontColorPrimary}
              _hover={{
                color: defaultColors.primaryColor,
              }}
            >
              {content.home}
            </Text>
          </Link>
          <Link as={NextLink} href="/about" style={{ textDecoration: "none" }}>
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
                xxs: "xs",
              }}
              style={{
                borderBottom: AddBorderBotton("About"),
              }}
              color={defaultColors.fontColorPrimary}
              _hover={{
                color: defaultColors.primaryColor,
              }}
            >
              {content.about}
            </Text>
          </Link>
          <Link
            as={NextLink}
            href="/experience"
            style={{ textDecoration: "none" }}
          >
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
                xxs: "xs",
              }}
              style={{
                borderBottom: AddBorderBotton("Experience"),
              }}
              color={defaultColors.fontColorPrimary}
              _hover={{
                color: defaultColors.primaryColor,
              }}
            >
              {content.experience}
            </Text>
          </Link>
          <Link
            as={NextLink}
            href="/projects"
            style={{ textDecoration: "none" }}
          >
            <Text
              fontSize={{
                "2xl": "2xl",
                xl: "xl",
                md: "lg",
                sm: "sm",
                xs: "xs",
                xxs: "xs",
              }}
              style={{
                borderBottom: AddBorderBotton("Projects"),
              }}
              color={defaultColors.fontColorPrimary}
              _hover={{
                color: defaultColors.primaryColor,
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
              onClick={() => ChangeLang("ptBr")}
            >
              <BR
                title="Português"
                filter={ChangeFilterFlag("ptBr") ? "" : "grayscale(90%)"}
              />
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
              onClick={() => ChangeLang("en")}
            >
              <US
                title="English"
                filter={ChangeFilterFlag("en") ? "" : "grayscale(90%)"}
              />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
