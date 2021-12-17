import Head from "next/head";
import { useRouter } from "next/router";
import { Copyright } from "./footer";

export default function HeadComponent({
  title: pageTitle,
  image: pageImage,
  description: pageDescription,
}) {
  const router = useRouter();
  let urlPath = router.asPath;

  const title = {
    "/": "Send flowers to Ghana - Flowers in Ghana | Flowers Ghana",
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
        {/* <!-- Primary Meta Tags --> */}
        <title>
          {title[urlPath]
            ? title[urlPath]
            : pageTitle ||
              "Send flowers to Ghana - Flowers in Ghana | Flowers Ghana"}
        </title>
        <meta
          name="title"
          content={
            title[urlPath]
              ? title[urlPath]
              : pageTitle ||
                "Send flowers to Ghana - Flowers in Ghana | Flowers Ghana"
          }
        />
        <meta
          name="description"
          content={
            pageDescription
              ? pageDescription
              : "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />

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
          name="keywords"
          content="flowers, send flowers to Ghana, send flowers in Ghana, flower delivery, buy fresh flowers, rose flowers in Ghana, bouquet, flowers for sale, florist, bouquet of flowers, flowersghaha, flowers ghana, flower ghana, ghana flower, ghana flowers, gift flowers"
        />

        <meta name="copyright" content={<Copyright />} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flowersghana.com/" />
        <meta
          property="og:title"
          content={
            title[urlPath]
              ? title[urlPath]
              : pageTitle ||
                "Send flowers to Ghana - Flowers in Ghana | Flowers Ghana"
          }
        />
        <meta
          property="og:description"
          content={
            pageDescription
              ? pageDescription
              : "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />
        <meta
          property="og:image"
          content={
            pageImage
              ? pageImage
              : "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
          }
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.flowersghana.com/" />
        <meta
          property="twitter:title"
          content={
            title[urlPath]
              ? title[urlPath]
              : pageTitle ||
                "Send flowers to Ghana - Flowers in Ghana | Flowers Ghana"
          }
        />
        <meta
          property="twitter:description"
          content={
            pageDescription
              ? pageDescription
              : "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online."
          }
        />
        <meta
          property="twitter:image"
          content={
            pageImage
              ? pageImage
              : "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
          }
        />

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
