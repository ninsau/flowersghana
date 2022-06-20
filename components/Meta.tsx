import Head from "next/head";
import {
  BRAND_DESCRIPTION,
  BRAND_FAVICON,
  BRAND_IMAGE,
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_URL,
} from "../lib";
import { Meta } from "../lib/types";

const MetaComponent = ({ title, description, image, url }: Meta) => {
  return (
    <>
      <Head>
        <title>{title || BRAND_NAME}</title>

        <meta name="title" content={BRAND_TAGLINE} />
        <meta name="description" content={description || BRAND_DESCRIPTION} />
        <link rel="icon" type="image/png" sizes="32x32" href={BRAND_FAVICON} />

        <meta
          name="google-site-verification"
          content="sSptwoLmfmCDsOmhdYVomW_kcMKEZu4ckCfUEROyemk"
        />

        <meta name="application-name" content={BRAND_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={title || BRAND_TAGLINE} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || BRAND_URL} />
        <meta property="og:title" content={title || BRAND_TAGLINE} />
        <meta
          property="og:description"
          content={description || BRAND_DESCRIPTION}
        />
        <meta property="og:image" content={image || BRAND_IMAGE} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url || BRAND_URL} />
        <meta property="twitter:title" content={title || BRAND_TAGLINE} />
        <meta
          property="twitter:description"
          content={description || BRAND_DESCRIPTION}
        />
        <meta property="twitter:image" content={image || BRAND_IMAGE} />
      </Head>
    </>
  );
};

export default MetaComponent;
