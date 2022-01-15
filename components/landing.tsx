import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome Admin | FlowersGhana</title>
        <meta
          name="description"
          content="Order management page for flowersGhana"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp"
        />
      </Head>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="xl:inline">Welcome</span>{" "}
            <span className="text-indigo-600 xl:inline">Admin</span>
          </h1>
          <p className="mt-3 text-base  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            If you are here, you know what to do. Use the button below to sign
            in to the portal.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
            <div className="rounded-md shadow">
              <a
                href="#"
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
              >
                Sign In With Google
              </a>
            </div>
            {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
