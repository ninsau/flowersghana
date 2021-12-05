import Head from "next/head";
import Script from "next/script";

export default function ScriptsComponent() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5eb6f778967ae56c52184c26/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
                   `,
        }}
      />
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/shoelace.js"
      />
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=UA-96580657-3"
      />
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-96580657-3');
                   `,
        }}
      />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/themes/base.css"
        />
      </Head>
    </>
  );
}
