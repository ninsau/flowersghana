import dynamic from "next/dynamic";
import BackdropComponent from "../components/loader/backdrop";
import React from "react";
import HeadComponent from "../components/navigation/head";
// import { useRouter } from "next/router";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import { textData } from "../store/textData";
// import Custom404Component from "../components/utils/custom404";
// import Link from "next/link";

export default function Checkout() {
  const CheckoutComponent = dynamic(
    () => import("../components/checkout/checkout"),
    {
      loading: () => <BackdropComponent />,
    }
  );
  return (
    <>
      <HeadComponent />
      <CheckoutComponent />
    </>
  );

  // return (
  //   <Container>
  //     <Grid container spacing={3}>
  //       <Grid item xs={12} style={{ margin: 30 }}>
  //         <Container>
  //           <Typography
  //             component="h4"
  //             variant="h4"
  //             align="left"
  //             color="textPrimary"
  //             gutterBottom
  //           >
  //             !Important: Payment Processor Down
  //           </Typography>

  //           <Typography
  //             variant="h6"
  //             align="left"
  //             color="textSecondary"
  //             component="p"
  //           >
  //             We're having an issue with our payment processors. Please{""}
  //             <Link target="_blank" href="https://instagram.com/flowerghana">
  //               !CLICK HERE!
  //             </Link>
  //             {""}and DM our Instagram to order.
  //           </Typography>
  //           <br />
  //           <Typography
  //             variant="h6"
  //             align="left"
  //             color="textSecondary"
  //             component="p"
  //           >
  //             You can also chat with Kojo on WhatsApp to order{""}
  //             <Link
  //               target="_blank"
  //               href="https://api.whatsapp.com/send?phone=233242877574"
  //             >
  //               by clicking here.
  //             </Link>
  //           </Typography>
  //           <br />
  //           <Typography
  //             variant="h6"
  //             align="left"
  //             color="textSecondary"
  //             component="p"
  //           >
  //             Call us directly on{""}
  //             <Link href="tel:+233209859591">0209859591</Link> or{""}
  //             <Link href="tel:+233242877574">0242877574</Link>
  //           </Typography>
  //         </Container>
  //       </Grid>
  //     </Grid>
  //   </Container>
  // );
}
