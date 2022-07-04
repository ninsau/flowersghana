import Script from "next/script";

export default function ScriptsComponent() {
  return (
    <>
      <Script
        id="tag manager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WCPZGN7');`,
        }}
      />

      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WCPZGN7"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript> */}

      {/* <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-WCPZGN7', { 
                page_path: window.location.pathname,
            });
        `,
        }}
      />

      <Script
        strategy="worker"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-WCPZGN7`}
      /> */}
    </>
  );
}
