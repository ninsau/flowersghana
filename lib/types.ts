export type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

export type ImageType = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
};

export type FooterType = {
  social: Array<{ name: string; href: string }>;
  customerService: Array<{ name: string; href: string }>;
  company: Array<{ name: string; href: string }>;
  legal: Array<{ name: string; href: string }>;
  bottomLinks: Array<{ name: string; href: string }>;
};

export type CollectionsType = Array<{
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}>;

export type InfosType = {
  infos: Array<{
    id: string;
    title: string;
    content: string;
    page: string;
    header: string;
  }>;
};

export type ProductsType = {
  products: Array<{
    title: string;
    amount: string;
    img: string;
    tags: string;
    availability: string;
    category: string;
    slug: string;
    description: string;
  }>;
  slug?: string;
};

export type ProductType = {
  title: string;
  amount: string;
  img: string;
  tags: string;
  availability: string;
  category: string;
  slug: string;
  description: string;
};

export type CartContentType = {
  title: string;
  price: number;
  image: string;
  availability: string;
  slug: string;
  quantity: number;
};

export type Context = {
  req?: any;
  modules?: any[];
};

export type CartStateType = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export type NotificationsType = {
  content: string;
  color: string;
};

export type CurrencyType = "NGN" | "GHS" | "USD" | "ZAR";

export type ValuesType = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  region: string;
  phone: string;
  note: string;
  instructions: string;
  amount: string;
  cart: string;
  status: string;
  tracking: string;
  trackingID: string;
  calendar: string;
};
