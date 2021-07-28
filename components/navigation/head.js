import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadComponent() {
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
          {title[urlPath] != undefined
            ? `${title[urlPath]}`
            : "Page Not Found | FlowersGhana"}
        </title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp"
          type="image/png"
          sizes="16x16"
        />

        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          id="viewport"
        />
        <meta
          name="description"
          content="Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flowersghana.com/" />
        <meta property="og:title" content={`${title[urlPath]}`} />
        <meta
          property="og:description"
          content="Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.flowersghana.com/" />
        <meta property="twitter:title" content={`${title[urlPath]}`} />
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

        <script
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5eb6f778967ae56c52184c26/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
                   `,
          }}
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-96580657-3"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-96580657-3');
                   `,
          }}
        ></script>
      </Head>
    </>
  );
}
