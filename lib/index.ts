import { CollectionsType, FooterType } from "./types";

export const BRAND_NAME: string = "Flowers Ghana";

export const BRAND_TAGLINE: string =
  "Send flowers to Ghana - Florist in Accra ";

export const BRAND_DESCRIPTION: string =
  "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online.";

export const BRAND_URL: string = "https://www.flowersghana.com";

export const BRAND_BUTTON_TEXT: string = "Send someone flowers";

export const BRAND_IMAGE: string =
  "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp";

export const BRAND_FAVICON: string =
  "https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_16/v1626707839/flowersghanaLogo.webp";

  export const HOME_IMAGE_URL: string = "https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_720/v1655655512/homeimage.webp"

export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const navigation = {
  categories: [
    {
      name: "Popular",
      featured: [
        { name: "Champagne Grove", href: "/product/champagne-grove" },
        { name: "Little Lady", href: "/product/little-lady" },
        { name: "White Bond", href: "/product/white-bond" },
      ],
      collection: [
        { name: "Budget Bouquets", href: "/collections/budget" },
        { name: "Roses", href: "/collections/roses" },
        { name: "White Flowers", href: "/collections/white" },
        { name: "Add-on Items", href: "/collections/add-on" },
      ],
    },
    {
      name: "Occasions",
      featured: [
        { name: "Red Red", href: "/product/red-red" },
        { name: "Bright Places", href: "/product/bright-places" },
        { name: "Blush Hush", href: "/product/blush-hush" },
      ],
      collection: [
        { name: "Birthday", href: "/collections/birthday" },
        { name: "Anniversary", href: "/collections/anniversary" },
        { name: "Sympathy", href: "/collections/sympathy" },
      ],
    },
  ],
  pages: [
    { name: "Reviews", href: "/reviews" },
    { name: "Our Story", href: "/about-us" },
  ],
};

export const footerNavigation: FooterType = {
  social: [
    { name: "Instagram", href: "https://instagram.com/flowerghana" },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=233242877574",
    },
    { name: "Facebook", href: "https://facebook.com/flowerghana" },

    { name: "Twitter", href: "https://twitter.com/flowersghana" },
  ],
  customerService: [
    { name: "Contact", href: "/contact" },
    { name: "Delivery", href: "/delivery" },
    { name: "Tracking", href: "/tracking" },
  ],
  company: [
    { name: "Who we are", href: "/about-us" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Return Policy", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    {name: "Cookie Policy", href: "/cookie-policy"},

  ],
  bottomLinks: [
    { name: "Accessibility", href: "/accessibility" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ],
};

export const currencies: Array<string> = [
  // "CAD",
  // "USD",
  "GHS",
  // "AUD",
  // "EUR",
  // "GBP"
];

export const collections: CollectionsType = [
  {
    name: "Birthday",
    description: "Send birthday flowers to your friends",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_389/v1655655769/photo-1513151233558-d860c5398176_yai8ft.webp",
    imageAlt: "birthday flowers",
    href: "/collections/birthday",
  },
  {
    name: "Add On Items",
    description: "Choose a variety of add-on items to send to your friends",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_389/v1655655797/photo-1530103862676-de8c9debad1d_wca4sy.webp",
    imageAlt: "balloons in the air",
    href: "/collections/add-on",
  },
  {
    name: "Budget Bouquets",
    description: "Check out our budget bouquets",
    imageSrc:
      "https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_389/v1655655818/photo-1591870101203-9862f6cf75f5_zu0jhv.webp",
    imageAlt: "brown envelope on table",
    href: "collections/budget",
  },
];

export const deliveryMethods = [
  { id: 1, title: "Standard", turnaround: "4-8 hours for same day", price: 0 },
  { id: 2, title: "Express", turnaround: "2-4 hours", price: 100 },
];

export const regionList = [
  "Greater Accra",
  "Ashanti",
  "Ahafo",
  "Bono",
  "Bono East",
  "Central",
  "Eastern",
  "North East",
  "Northern",
  "Oti",
  "Savannah",
  "Upper East",
  "Upper West",
  "Volta",
  "Western",
  "Western North",
];

export const copyText = (url: string) => {
  navigator.clipboard.writeText(
    `https://www.flowersghana.com/product/${url}`
  );
};

export  const share = (data:any) => {
  navigator.share(data)
};