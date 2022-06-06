import Head from "next/head";
import { useRouter } from "next/router";

export default function HeadComponent({ title, image, description }) {
  const router = useRouter();
  let urlPath = router.asPath;

  const titles = {
    "/": "Send flowers to Ghana - Florist in Accra | Flowers Ghana",
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

  // console.log(title)

  return (
    <>
      <Head>
        <title>
          {(titles[urlPath] ?? title) ||
            "Send flowers to Ghana - Florist in Accra "}
        </title>

        <meta
          name="google-site-verification"
          content="sSptwoLmfmCDsOmhdYVomW_kcMKEZu4ckCfUEROyemk"
        />

        <meta
          name="title"
          content={
            (titles[urlPath] ?? title) ||
            "Send flowers to Ghana - Florist in Accra "
          }
        />
        <meta
          name="description"
          content={
            description ??
            "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />

        <meta name="application-name" content="FlowersGhana App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FlowersGhana" />
        <meta
          name="description"
          content={
            description ??
            "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flowersghana.com" />
        <meta
          property="og:title"
          content={
            (titles[urlPath] ?? title) ||
            "Send flowers to Ghana - Florist in Accra "
          }
        />
        <meta
          property="og:description"
          content={
            description ||
            "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />
        <meta
          property="og:image"
          content={
            image ||
            "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
          }
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.flowersghana.com" />
        <meta
          property="twitter:title"
          content={
            (titles[urlPath] ?? title) ||
            "Send flowers to Ghana - Florist in Accra "
          }
        />
        <meta
          property="twitter:description"
          content={
            description ||
            "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />
        <meta
          property="twitter:image"
          content={
            image ||
            "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp"
          }
        ></meta>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Sunflower Sauce",
                image: [
                  "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
                ],
                description:
                  "This beautiful bouquet comes mainly with freshly cut and brightly coloured sunflowers, alongside other plansts and flowers.",
                sku: "17",
                mpn: "17",
                brand: {
                  "@type": "Brand",
                  name: "Flowers Ghana",
                },
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Kojo",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.4",
                  reviewCount: "89",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/v1616906400/Sunflower%20sauce.webp",
                  priceCurrency: "GHS",
                  price: "500",
                  priceValidUntil: "2020-11-25",
                  itemCondition: "https://schema.org/UsedCondition",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Cutie Rosey",
                image: [
                  "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
                ],
                description:
                  "This bouquet comes with 4 red roses, filled neatly with baby-breaths",
                sku: "16",
                mpn: "16",
                brand: {
                  "@type": "Brand",
                  name: "Flowers Ghana",
                },
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Kojo",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.4",
                  reviewCount: "89",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/v1616906402/cutie%20rosey.webp",
                  priceCurrency: "GHS",
                  price: "300",
                  priceValidUntil: "2020-11-25",
                  itemCondition: "https://schema.org/UsedCondition",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Morning Dew",
                image: [
                  "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
                ],
                description:
                  "A neatly wrapped bouquet of chrysanthemums in paper.",
                sku: "15",
                mpn: "15",
                brand: {
                  "@type": "Brand",
                  name: "Flowers Ghana",
                },
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Kojo",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.4",
                  reviewCount: "89",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/v1629207798/morning%20dew.webp",
                  priceCurrency: "GHS",
                  price: "500",
                  priceValidUntil: "2020-11-25",
                  itemCondition: "https://schema.org/UsedCondition",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Touch Of Sunshine",
                image: [
                  "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
                ],
                description: `Approximately 10" W x 21" H. This beautiful bouquet contains baby-breaths, and white roses.`,
                sku: "14",
                mpn: "14",
                brand: {
                  "@type": "Brand",
                  name: "Flowers Ghana",
                },
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Kojo",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.4",
                  reviewCount: "89",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/v1627498652/touch_of_sunshine_n5jlhb.webp",
                  priceCurrency: "GHS",
                  price: "500",
                  priceValidUntil: "2020-11-25",
                  itemCondition: "https://schema.org/UsedCondition",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Small Magic",
                image: [
                  "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
                ],
                description:
                  "This bouquet comes with 3 red roses, filled neatly with baby-breaths",
                sku: "13",
                mpn: "13",
                brand: {
                  "@type": "Brand",
                  name: "Flowers Ghana",
                },
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Kojo",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.4",
                  reviewCount: "89",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/v1616906414/small%20magic.webp",
                  priceCurrency: "GHS",
                  price: "270",
                  priceValidUntil: "2020-11-25",
                  itemCondition: "https://schema.org/UsedCondition",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: "Rosy Daisy",
                image: [
                  "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
                ],
                description:
                  "This bouquet comes with 4 white roses, filled neatly with baby-breaths",
                sku: "12",
                mpn: "12",
                brand: {
                  "@type": "Brand",
                  name: "Flowers Ghana",
                },
                review: {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Kojo",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.4",
                  reviewCount: "89",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/v1616906401/rosy%20daisy.webp",
                  priceCurrency: "GHS",
                  price: "300",
                  priceValidUntil: "2020-11-25",
                  itemCondition: "https://schema.org/UsedCondition",
                  availability: "https://schema.org/InStock",
                },
              }
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Florist",
              image: [
                "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp",
              ],
              name: "Flowers Ghana",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Legon",
                addressLocality: "Accra",
                addressRegion: "Greater Accra",
                postalCode: "00233",
                addressCountry: "Ghana",
              },
              review: {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "Kojo",
                },
              },
              url: "http://www.flowersghana.com",
              telephone: "+233242877574",
              priceRange: "₵₵₵",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday"],
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "http://www.flowersghana.com/about",
              logo: "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp",
            }),
          }}
        />
      </Head>
    </>
  );
}
