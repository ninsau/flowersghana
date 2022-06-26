import {
  BellIcon,
  CollectionIcon,
  HomeIcon,
  InformationCircleIcon,
  RssIcon,
} from "@heroicons/react/outline";

export const BRAND_NAME: string = "Flowers Ghana";

export const BRAND_TAGLINE: string =
  "Send flowers to Ghana - Florist in Accra ";

export const BRAND_DESCRIPTION: string =
  "Florist in Ghana - FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY flower delivery in Ghana. Quality. Order online. Pay online.";

export const BRAND_URL: string = "https://www.flowersghana.com";


export const BRAND_IMAGE: string =
  "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp";

export const BRAND_FAVICON: string =
  "https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_16/v1626707839/flowersghanaLogo.webp";


export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: false },
  {
    name: "Inventory",
    href: "/inventory",
    icon: CollectionIcon,
    current: false,
  },
  {
    name: "Info Pages",
    href: "/info",
    icon: InformationCircleIcon,
    current: false,
  },
  { name: "Sale", href: "/sale", icon: BellIcon, current: false },
  { name: "Banner", href: "/banner", icon: RssIcon, current: false },
];

export const copyText = (info: any) => {
  navigator.clipboard.writeText(info);
};

export const share = (data: any) => {
  navigator.share(data);
};
