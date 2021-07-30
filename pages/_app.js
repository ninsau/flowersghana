import React from "react";
import Container from "@material-ui/core/Container";
import "@shoelace-style/shoelace/dist/themes/base.css";
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import config from "../media/aws-exports.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import dynamic from "next/dynamic";
import HeadComponent from '../components/navigation/head'

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
  const ScriptsComponent = dynamic(() =>
    import("../components/navigation/scripts")
  );
  const CustomEls = dynamic(() => import("../utils/shoelace"));
  const HeaderComponent = dynamic(() =>
    import("../components/navigation/header")
  );
  const FooterComponent = dynamic(() =>
    import("../components/navigation/footer")
  );

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
        <CssBaseline />
        <Container>
          <HeadComponent />
          <HeaderComponent />
          <Component {...pageProps} />
          <FooterComponent />
        </Container>
        <ScriptsComponent />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
