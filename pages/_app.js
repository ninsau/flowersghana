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
import { CookiesProvider } from "react-cookie";

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
  return (
    <>
      {process.browser && <CustomEls URL={URL} />}
      <CookiesProvider>
        <Container>
          <HeadComponent />
          <Component {...pageProps} />
          <FooterComponent />
        </Container>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
