import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { defaultColors } from "@/styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          backgroundColor: defaultColors.primaryGrayColor,
        }}
      >
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
