import Image from "next/image";
import { HOME_IMAGE_URL } from "../lib";
import { ImageType } from "../lib/types";

export const LogoComponent = ({ height, width }: any) => {
  return (
    <Image
      src={`https://res.cloudinary.com/deyudesls/image/upload/q_auto:best/v1626707839/flowersghanaLogo.webp`}
      alt="logo"
      height={height}
      width={width}
    />
  );
};

export const HeroImageComponent = () => {
  return (
    // <Image
    //   src="https://images.unsplash.com/photo-1577193120905-21e0c301d5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //   alt="logo"
    //   height={838}
    //   width={720}
    //   layout='responsive'
    //   sizes="10vw"
    //   blurDataURL={
    //     "https://images.unsplash.com/photo-1577193120905-21e0c301d5d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    //   }
    //   placeholder="blur"
    // />
    <img
      src={HOME_IMAGE_URL}
      alt="brighly colored flower"
      height="100%"
      width="100%"
      className="w-full h-full object-center object-cover"
      loading="lazy"
    />
  );
};

export const CollectionsImageComponent = ({ src, alt }: ImageType) => {
  return <Image src={src} alt={alt} height={256} width={389} />;
};

export const FeaturedImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      alt={alt}
      height={280}
      width={280}
      blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      placeholder="blur"
    />
  );
};

export const DecorativeImageComponent = () => {
  return (
    <Image
      src={HOME_IMAGE_URL}
      alt="decoorative background image"
      height={896}
      width={1216}
      blurDataURL={HOME_IMAGE_URL}
      placeholder="blur"
    />
  );
};

export const FlagImageComponent = () => {
  return (
    <Image
      src="https://res.cloudinary.com/deyudesls/image/upload/c_pad,w_20/v1655655950/255px-Flag_of_Ghana.svg_r7zm4y.webp"
      alt="ghana flag"
      height={15}
      width={20}
    />
  );
};

export const CategoryImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={`https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_576,w_384/${src}`}
      alt={alt}
      height={576}
      width={384}
      blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      placeholder="blur"
    />
  );
};

export const ProductImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      alt={alt}
      height={592}
      width={592}
      quality={100}
      blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      placeholder="blur"
    />
  );
};

export const CartProductImageComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={`https://res.cloudinary.com/deyudesls/image/upload/h_94,w_94/${src}`}
      alt={alt}
      height={94}
      width={94}
      blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      placeholder="blur"
    />
  );
};

export const AccountProductComponent = ({ src, alt }: ImageType) => {
  return (
    <Image
      src={`https://res.cloudinary.com/deyudesls/image/upload/h_180,w_180/${src}`}
      alt={alt}
      height={180}
      width={180}
      blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/${src}`}
      placeholder="blur"
    />
  );
};
