import type { NextPage } from "next";
import MetaComponent from "../components/Meta";
import { BRAND_NAME, BRAND_TAGLINE } from "../lib";

import LandingPageComponent from "../components/LandingPage";

const Home: NextPage = () => {
  return (
    <>
      <MetaComponent title={`${BRAND_TAGLINE} | ${BRAND_NAME}`} />

      <LandingPageComponent />
    </>
  );
};

export default Home;
