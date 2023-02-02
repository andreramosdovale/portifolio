import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { deafaultTheme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={deafaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
