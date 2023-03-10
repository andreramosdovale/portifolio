import Head from "next/head";
import Header from "@/components/Header";
import { ptBr, en } from "@/content/Home.data";
import { IDefaultProps } from "@/types/IDefaultProps";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { defaultColors } from "@/styles/theme";
import { MdOutlineMailOutline } from "react-icons/md/";
import { BsWhatsapp } from "react-icons/bs/";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai/";
import Link from "next/link";

export default function Home({ ...props }: IDefaultProps) {
  const content = props.lang === "ptBr" ? ptBr : en;

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header path={content.path} />
      </main>
      <Box
        margin={{
          "4xl": "10% 35%",
          "3xl": "10% 25%",
          "2xl": "10% 20%",
          xl: "10% 20%",
          md: "10% 20%",
          sm: "10% 15%",
          xs: "10% 10%",
          xxs: "10% 5%",
        }}
      >
        <Center>
          <Flex justifyContent="flex-start" direction="column">
            <Text
              fontSize={{
                "2xl": "4xl",
                xl: "4xl",
                md: "3xl",
                sm: "2xl",
                xs: "2xl",
                xxs: "xl",
              }}
              color={defaultColors.fontColorSecondary}
              fontWeight="bold"
            >
              {content.welcome}
            </Text>
            <Text
              fontSize={{
                "2xl": "5xl",
                xl: "5xl",
                md: "4xl",
                sm: "3xl",
                xs: "3xl",
                xxs: "2xl",
              }}
              color={defaultColors.fontColorPrimary}
              fontWeight="bold"
              marginBottom="2%"
            >
              André Ramos do Vale
            </Text>
            <Text
              fontSize={{
                "2xl": "lg",
                xl: "md",
                md: "xs",
                sm: "xs",
                xs: "xs",
                xxs: "xs",
              }}
              cursor="pointer"
              color={defaultColors.fontColorPrimary}
              _hover={{
                color: defaultColors.primaryColor,
              }}
              display="flex"
              alignItems="center"
              marginBottom="2%"
            >
              <MdOutlineMailOutline size="20px" />
              <span
                style={{
                  marginLeft: "1%",
                }}
              >
                andre_ramosdovale@outlook.com
              </span>
            </Text>
            <Text
              fontSize={{
                "2xl": "lg",
                xl: "md",
                md: "xs",
                sm: "xs",
                xs: "xs",
                xxs: "xs",
              }}
              cursor="pointer"
              color={defaultColors.fontColorPrimary}
              _hover={{
                color: defaultColors.primaryColor,
              }}
              display="flex"
              alignItems="center"
              marginBottom="2%"
            >
              <BsWhatsapp size="20px" />
              <span
                style={{
                  marginLeft: "1%",
                }}
              >
                {content.contactWpp}
              </span>
            </Text>
            <Link href="https://github.com/andreramosdovale">
              <Text
                fontSize={{
                  "2xl": "lg",
                  xl: "md",
                  md: "xs",
                  sm: "xs",
                  xs: "xs",
                  xxs: "xs",
                }}
                cursor="pointer"
                color={defaultColors.fontColorPrimary}
                _hover={{
                  color: defaultColors.primaryColor,
                }}
                display="flex"
                alignItems="center"
                marginBottom="2%"
              >
                <AiFillGithub size="20px" />
                <span
                  style={{
                    marginLeft: "1%",
                  }}
                >
                  github.com/andreramosdovale
                </span>
              </Text>
            </Link>
            <Link href="https://www.linkedin.com/in/andreramosdovale/">
              <Text
                fontSize={{
                  "2xl": "lg",
                  xl: "md",
                  md: "xs",
                  sm: "xs",
                  xs: "xs",
                  xxs: "xs",
                }}
                cursor="pointer"
                color={defaultColors.fontColorPrimary}
                _hover={{
                  color: defaultColors.primaryColor,
                }}
                display="flex"
                alignItems="center"
              >
                <AiFillLinkedin size="20px" />
                <span
                  style={{
                    marginLeft: "1%",
                  }}
                >
                  linkedin.com/in/andreramosdovale
                </span>
              </Text>
            </Link>
          </Flex>
        </Center>
      </Box>
    </>
  );
}
