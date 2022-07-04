import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports.js";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";
import { useSession, SessionProvider } from "next-auth/react";
import { NextComponentType } from "next";

Amplify.configure({
  ...config,
  ssr: true,
});

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <HeaderComponent />
          <Component {...pageProps} />
        </Auth>
      ) : (
        <>
          <HeaderComponent />
          <Component {...pageProps} />
        </>
      )}
      <FooterComponent />
    </SessionProvider>
  );
}

export default MyApp;

const Auth = ({ children }: any) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return children;
};
