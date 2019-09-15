import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { tema } from "../styles/tema";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <ThemeProvider theme={tema}>
          <Component {...pageProps} />
        </ThemeProvider>
    );
  }
}
