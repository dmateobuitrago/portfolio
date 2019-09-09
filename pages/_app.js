import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  componentDidUpdate() {
    console.log("updated");
  }
  componentDidMount() {
    console.log("did mount");
  }

  componentWillMount() {
    console.log("will mount");
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
    //   <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    //   </Container>
    );
  }
}
