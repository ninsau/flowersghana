import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
import { BRAND_IMAGE, BRAND_NAME, BRAND_TAGLINE, BRAND_URL } from ".";
AWS.config.update({
  accessKeyId: process.env.FOSUAA_AWS_ACCESS_KEY,
  secretAccessKey: process.env.FOSUAA_AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});
// AWS.config.getCredentials(function (error) {
//     if (error) {
//         console.log(error.stack);
//     }
// });
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});

export const sendMail = async (toEmail, fromEmail, tracking) => {
  try {
    const response = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `Order Update ${BRAND_NAME}`,
      html: `
   
      <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
      <noscript>
        <xml>
          <o:OfficeDocumentSettings
            xmlns:o="urn:schemas-microsoft-com:office:office"
          >
            <o:PixelsPerInch></o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,
        th,
        div,
        p,
        a,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Segoe UI", sans-serif;
          mso-line-height-rule: exactly;
        }
      </style>
    <![endif]-->
      <title>New sign-in to your account</title>
      <style>:root {
          color-scheme: light dark;
          supported-color-schemes: light dark;
        }</style>
      <style>
.hover-bg-blue-600:hover {
  background-color: #2563eb !important;
}
.hover-underline:hover {
  text-decoration: underline !important;
}
@media (max-width: 600px) {
  .sm-w-full {
    width: 100% !important;
  }
  .sm-py-32 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .sm-px-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .sm-leading-32 {
    line-height: 32px !important;
  }
}
@media (prefers-color-scheme: dark) {
  .dark-mode-bg-gray-999 {
    background-color: #1b1c1e !important;
  }
  .dark-mode-bg-gray-989 {
    background-color: #2d2d2d !important;
  }
  .dark-mode-text-gray-979 {
    color: #a9a9a9 !important;
  }
  .dark-mode-text-white {
    color: #ffffff !important;
  }
}
</style>
  </head>
  <body class="dark-mode-bg-gray-999" style="margin: 0; width: 100%; padding: 0; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f3f4f6;">
      <div style="display: none;">
        We've noticed a new sign-in to your account&#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
        &#160;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
        &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
        &#160;&#847; &#847; &#847; &#847; &#847;
      </div>
    <div role="article" aria-roledescription="email" aria-label="New sign-in to your account" lang="en">
      <table class="sm-w-full" align="center" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td class="sm-py-32 sm-px-24" style="padding: 48px; text-align: center;">
        <a href="${BRAND_URL}">
          <img src="${BRAND_IMAGE}" width="75" alt="Your Logo" style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0;"/>
        </a>
      </td>
    </tr>
</table>
      <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td align="center" class="dark-mode-bg-gray-999" style="background-color: #f3f4f6;">
            <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td align="center" class="sm-px-24">
                  <table style="margin-bottom: 48px; width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="dark-mode-bg-gray-989 dark-mode-text-gray-979 sm-px-24" style="background-color: #ffffff; padding: 48px; text-align: left; font-size: 16px; line-height: 24px; color: #1f2937;">
    <p class="sm-leading-32 dark-mode-text-white" style="margin: 0; margin-bottom: 36px; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 24px; font-weight: 600; color: #000000;">
     Your order has been created successfully!
    </p>
    <p style="margin: 0; margin-bottom: 24px;">
     Your tracking ID is: ${tracking}
    </p>
   

    <p style="margin: 0; margin-bottom: 16px; color: #6b7280;"> Sign in to your <a href="${BRAND_URL}/account" style="color: #6b7280;">account</a>
     to track order. Your can also click
      <a href="${BRAND_URL}/tracking" style="color: #6b7280;">here</a> to track order.
    </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td style="padding-left: 24px; padding-right: 24px; text-align: center; font-size: 12px; color: #4b5563;">
        <p style="margin: 0; margin-bottom: 4px; text-transform: uppercase;">All rights reserved.
          <a href="${BRAND_URL}" class="hover-underline" style="color: #3b82f6; text-decoration: none;">${BRAND_NAME}</a>
        </p>
        <p style="margin: 0; font-style: italic;">${BRAND_TAGLINE}</p>
       
      </td>
    </tr>
</table>
    </div>
  </body>
</html>
      

`,
    });
    return response ? { ok: true } : { ok: false, msg: response };
  } catch (error) {
    console.log("ERROR", error.message);
    return { ok: false, msg: error };
  }
};

export const sendAdminAlert = async (toEmail, fromEmail) => {
  try {
    const response = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `Order Update ${BRAND_NAME}`,
      html: `
     
        <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8">
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
        <noscript>
          <xml>
            <o:OfficeDocumentSettings
              xmlns:o="urn:schemas-microsoft-com:office:office"
            >
              <o:PixelsPerInch></o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        </noscript>
        <style>
          td,
          th,
          div,
          p,
          a,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Segoe UI", sans-serif;
            mso-line-height-rule: exactly;
          }
        </style>
      <![endif]-->
        <title>New sign-in to your account</title>
        <style>:root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
          }</style>
        <style>
  .hover-bg-blue-600:hover {
    background-color: #2563eb !important;
  }
  .hover-underline:hover {
    text-decoration: underline !important;
  }
  @media (max-width: 600px) {
    .sm-w-full {
      width: 100% !important;
    }
    .sm-py-32 {
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }
    .sm-px-24 {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .sm-leading-32 {
      line-height: 32px !important;
    }
  }
  @media (prefers-color-scheme: dark) {
    .dark-mode-bg-gray-999 {
      background-color: #1b1c1e !important;
    }
    .dark-mode-bg-gray-989 {
      background-color: #2d2d2d !important;
    }
    .dark-mode-text-gray-979 {
      color: #a9a9a9 !important;
    }
    .dark-mode-text-white {
      color: #ffffff !important;
    }
  }
  </style>
    </head>
    <body class="dark-mode-bg-gray-999" style="margin: 0; width: 100%; padding: 0; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f3f4f6;">
        <div style="display: none;">
          We've noticed a new sign-in to your account&#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
          &#160;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;
          &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
          &#160;&#847; &#847; &#847; &#847; &#847;
        </div>
      <div role="article" aria-roledescription="email" aria-label="New sign-in to your account" lang="en">
        <table class="sm-w-full" align="center" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td class="sm-py-32 sm-px-24" style="padding: 48px; text-align: center;">
          <a href="${BRAND_URL}">
            <img src="${BRAND_IMAGE}" width="75" alt="Your Logo" style="max-width: 100%; vertical-align: middle; line-height: 100%; border: 0;"/>
          </a>
        </td>
      </tr>
  </table>
        <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center" class="dark-mode-bg-gray-999" style="background-color: #f3f4f6;">
              <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td align="center" class="sm-px-24">
                    <table style="margin-bottom: 48px; width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="dark-mode-bg-gray-989 dark-mode-text-gray-979 sm-px-24" style="background-color: #ffffff; padding: 48px; text-align: left; font-size: 16px; line-height: 24px; color: #1f2937;">
      <p class="sm-leading-32 dark-mode-text-white" style="margin: 0; margin-bottom: 36px; font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; font-size: 24px; font-weight: 600; color: #000000;">
       New Order Alert!
      </p>
      <p style="margin: 0; margin-bottom: 24px;">
       New order recived from: ${toEmail}
      </p>
     
  
      <p style="margin: 0; margin-bottom: 16px; color: #6b7280;"> Sign in to your <a href="https://admin.flowersghana.com/" style="color: #6b7280;">admin dashboard</a>
        to review order.
      </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <table style="width: 100%; font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td style="padding-left: 24px; padding-right: 24px; text-align: center; font-size: 12px; color: #4b5563;">
          <p style="margin: 0; margin-bottom: 4px; text-transform: uppercase;">All rights reserved.
            <a href="${BRAND_URL}" class="hover-underline" style="color: #3b82f6; text-decoration: none;">${BRAND_NAME}</a>
          </p>
          <p style="margin: 0; font-style: italic;">${BRAND_TAGLINE}</p>
         
        </td>
      </tr>
  </table>
      </div>
    </body>
  </html>
        
  
  `,
    });
    return response ? { ok: true } : { ok: false, msg: response };
  } catch (error) {
    console.log("ERROR", error.message);
    return { ok: false, msg: error };
  }
};
