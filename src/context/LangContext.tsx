import { createContext } from "react";

const LangContext = createContext({
  lang: "ptBr",
  setLang: (lang: string) => {},
});

export default LangContext;
