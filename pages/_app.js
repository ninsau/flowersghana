import React from "react";
import Container from "@material-ui/core/Container";
import "../styles/globals.css";
import { Amplify } from "aws-amplify";
import config from "../media/aws-exports.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import dynamic from "next/dynamic";
import HeadComponent from "../components/navigation/head";
import BackdropComponent from "../components/loader/backdrop";

Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  const ScriptsComponent = dynamic(() =>
    import("../components/navigation/scripts")
  );
  const FooterComponent = dynamic(() =>
    import("../components/navigation/footer")
  );

  const HeaderComponent = dynamic(
    () => import("../components/navigation/header"),
    {
      loading: () => <BackdropComponent />,
    }
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
