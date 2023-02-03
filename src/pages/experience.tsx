import Head from "next/head";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import LangContext from "@/context/LangContext";
import { IContentExperience } from "@/types/IContentExperience";
import { en, ptBr } from "@/content/Experience.data";

export default function Experience() {
  const { lang } = useContext(LangContext);
  const [content, setContent] = useState<IContentExperience>(ptBr);

  useEffect(() => {
    setContent(lang === "ptBr" ? ptBr : en);
  }, [lang]);

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header path={content.title} />
      </main>
    </>
  );
}
