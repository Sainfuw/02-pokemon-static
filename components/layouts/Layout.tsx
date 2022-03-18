import type { NextPage } from "next";

import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: JSX.Element;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: NextPage<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Emilio Navarro" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Descripcion de ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
