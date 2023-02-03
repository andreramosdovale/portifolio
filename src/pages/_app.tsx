import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { deafaultTheme } from "@/styles/theme";
import LangContext from "@/context/LangContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState("ptBr");

  return (
    <ChakraProvider theme={deafaultTheme}>
      <LangContext.Provider value={{ lang, setLang }}>
        <Component {...pageProps} lang={lang} />
      </LangContext.Provider>
    </ChakraProvider>
  );
}
