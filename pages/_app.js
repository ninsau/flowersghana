import React from "react";
import HeadComponent from "../components/navigation/head";
import HeaderComponent from "../components/navigation/header";
import FooterComponent from "../components/navigation/footer";
import Container from "@material-ui/core/Container";
import "@shoelace-style/shoelace/dist/themes/base.css";
import CustomEls from "../utils/shoelace";
import "../styles/globals.css";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import config from "../media/aws-exports.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

Amplify.configure({
  ...config,
  ssr: true,
});

MyApp.getInitialProps = async (context) => {
  const URL = process.env.BASE_URL;

  return {
    URL,
  };
};

function MyApp({ Component, pageProps, URL }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");


  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <>
      {process.browser && <CustomEls URL={URL} />}
      <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Container>
          <HeadComponent />
          <HeaderComponent />
          <Component {...pageProps} />
          <FooterComponent />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
