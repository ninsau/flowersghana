import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadComponent(text) {
  const router = useRouter();
  let urlPath = router.asPath;

  const title = {
    "/": "Send flowers to Ghana - Florist, Free Delivery | Flowers Ghana",
    "/about": "About Us | FlowersGhana",
    "/contact": "Contact Us | FlowersGhana",
    "/terms": "Terms & Conditions | FlowersGhana",
    "/privacy": "Privacy Policy | FlowersGhana",
    "/category/featured": "Featered Bouquets | FlowersGhana",
    "/category/popular": "Popular Bouquets | FlowersGhana",
    "/category/birthday": "Birthday Bouquets | FlowersGhana",
    "/category/budget": "Budget Friendly | FlowersGhana",
    "/category/roses": "Roses | FlowersGhana",
    "/reviews": "Customer Reviews | FlowersGhana",
    "/category/all": "All Bouquets | FlowersGhana",
    "/checkout": "Checkout | FlowersGhana",
    "/category/sympathy": "Sympathy Bouquets | FlowersGhana",
    "/category/florist-choice": "Florist's Choice | FlowersGhana",
    "/category/add-on": "Add-On Items | FlowersGhana",
    "/category/anniversary": "Anniversary Bouquets | FlowersGhana",
    "/cookies": "Cookie Policy | FlowersGhana",
    "/success": "Thank You! | FlowersGhana",
    "/contact-us": "Contact Us | FlowersGhana",
  };

  return (
    <>
      <Head>
        <title>
          {title[urlPath] !== undefined
            ? `${title[urlPath]}`
            : " || Send flowers to Ghana - Florist, Free Delivery | Flowers Ghana"}
        </title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp"
          type="image/png"
          sizes="16x16"
        />

        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          id="viewport"
        />
        <meta
          name="description"
          content="Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online. Flowers flower"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flowersghana.com/" />
        <meta
          property="og:title"
          content={`${title[urlPath]} || Send flowers to Ghana - Florist, Free Delivery | Flowers Ghana`}
        />
        <meta
          property="og:description"
          content="Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <meta
          name="google-site-verification"
          content="sSptwoLmfmCDsOmhdYVomW_kcMKEZu4ckCfUEROyemk"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.flowersghana.com/" />
        <meta
          property="twitter:title"
          content={`${title[urlPath]} || Send flowers to Ghana - Florist, Free Delivery | Flowers Ghana`}
        />
        <meta
          property="twitter:description"
          content="Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />

        <meta
          name="keywords"
          content="flowers, send flowers to Ghana, send flowers in Ghana, flower delivery, buy fresh flowers, rose flowers in Ghana, bouquet, flowers for sale, florist, bouquet of flowers, flowersghaha, flowers ghana, flower ghana, ghana flower, ghana flowers, gift flowers"
        />

        <meta name="copyright" content="Copyright (c)2021 flowersghana.com" />
      </Head>
    </>
  );
}
