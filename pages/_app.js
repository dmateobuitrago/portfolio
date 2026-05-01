import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { tema } from "../styles/tema";
import "../styles/tokens.css";
import "../styles/globals.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <title>Mateo Buitrago Jara - Senior Product Designer</title>
        </Head>
        <ThemeProvider theme={tema}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
