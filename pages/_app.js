import React from "react";
import HeadComponent from "../components/navigation/head";
import HeaderComponent from "../components/navigation/header";
import FooterComponent from "../components/navigation/footer";
import Container from "@material-ui/core/Container";
import "@shoelace-style/shoelace/dist/themes/base.css";
import CustomEls from '../utils/shoelace'


MyApp.getInitialProps = async (context) => {
  const URL = process.env.BASE_URL;

  return {
    URL
  };
};


function MyApp({ Component, pageProps, URL }) {
  return (
    <>
      {process.browser && <CustomEls URL={URL} />}
      <Container>
        <HeadComponent />
        <HeaderComponent />
        <Component {...pageProps} />
        <FooterComponent />
      </Container>
    </>
  );
}

export default MyApp;
