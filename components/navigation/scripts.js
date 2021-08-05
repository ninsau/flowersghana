import Head from "next/head";

export default function ScriptsComponent() {
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.47/dist/shoelace.js"
        ></script>
        <script
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
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-96580657-3"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-96580657-3');
                   `,
          }}
        ></script>
      </Head>
    </>
  );
}
