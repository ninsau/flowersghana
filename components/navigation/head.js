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
    "/bouquets/featured": "Featered Bouquets | FlowersGhana",
    "/bouquets/popular": "Popular Bouquets | FlowersGhana",
    "/bouquets/birthday": "Birthday Bouquets | FlowersGhana",
    "/bouquets/budget": "Budget Friendly | FlowersGhana",
    "/bouquets/roses": "Roses | FlowersGhana",
  };

  return (
    <>
      <Head>
        <title>
          {title[urlPath] != undefined
            ? `${title[urlPath]}`
            : "Page Not Found | FlowersGhana"}
        </title>
        <link rel="icon" href="/logo/banner.JPG" type="image/png" sizes="16x16" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:100,300,400,600,700,800,900"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}
