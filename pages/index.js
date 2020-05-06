import React from "react";
import Head from "next/head";
import Header from "../components/header";
// import MainContent from "../components/main";
// import Footer from "../components/footer";

import { GlobalStyle } from "../global-styles";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossorigin="anonymous"
        />
        <title>La Nación</title>
      </Head>
      <GlobalStyle />
      <Header />
      {/* <MainContent />
      <Footer /> */}
    </>
  );
}