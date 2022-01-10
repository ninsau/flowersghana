import Head from "next/head";
import Script from "next/script";

export default function ScriptsComponent() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WCPZGN7');`,
        }}
      />

      {/* <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="65f7088c-22ca-4f35-b1d7-d90dcf52abeb" data-blockingmode="auto" type="text/javascript"></Script> */}
      <Script
        strategy="lazyOnload"
        type="module"
        src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/shoelace.js"
      />

      {/* <script id="CookieDeclaration" src="https://consent.cookiebot.com/65f7088c-22ca-4f35-b1d7-d90dcf52abeb/cd.js" type="text/javascript" async></script> */}

      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/themes/base.css"
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WCPZGN7"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    </>
  );
}
