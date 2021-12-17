import Head from "next/head";
import Script from "next/script";

export default function ScriptsComponent() {
  return (
    <>
      <Script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WCPZGN7');`,
        }}
      />
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/shoelace.js"
      />

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
