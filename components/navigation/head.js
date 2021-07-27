import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadComponent() {
  const router = useRouter();
  let urlPath = router.asPath;

  const title = {
    "/": "Send flowers to Ghana | FlowersGhana",
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
        {/* <link
          href="https://fonts.googleapis.com/css?family=Nunito:100,300,400,600,700,800,900"
          rel="stylesheet"
        /> */}
      </Head>
    </>
  );
}
