import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import dynamic from "next/dynamic";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouter } from "next/router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://flowersghana.com/">
        FlowersGhana
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: "Company",
    description: [
      { name: "About", link: "/about" },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  {
    title: "Categores",
    description: [
      { name: "All Items", link: "/category/all" },
      { name: "Featured Bouquets", link: "/category/featured" },
      { name: "Popular Bouquets", link: "/category/popular" },
      { name: "Birthday", link: "/category/birthday" },
      { name: "Budget Friendly", link: "/category/budget" },
      { name: "Anniversary", link: "/category/anniversary" },
      { name: "Sympathy", link: "/category/sympathy" },
    ],
  },
  {
    title: "Social",
    description: [
      { name: "Instagram", link: "https://instagram.com/flowerghana" },
      {
        name: "WhatsApp",
        link: "https://api.whatsapp.com/send?phone=233242877574",
      },
      { name: "Facebook", link: "https://facebook.com/flowerghana" },

      { name: "Twitter", link: "https://twitter.com/flowersghana" },
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
    description: [
      { name: "Privacy policy", link: "/privacy" },
      { name: "Terms of use", link: "/terms" },
      { name: "Cookie policy", link: "/cookies" },
    ],
  },
];
export default function FooterComponent() {
  const classes = useStyles();
  const AddOnsComponent = dynamic(() => import("../staticpages/addOns"));
  const router = useRouter();

  return (
    <>
      <Grid item xs={12} md={12} style={{ margin: 30 }}>
        <AddOnsComponent />
      </Grid>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <Hidden smUp>
            <Link href="/">
              <img
                src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp"
                alt="flowersghana logo"
                width={200}
                height={73}
              />
            </Link>
          </Hidden>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h5" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.link}>
                    <Link
                      onClick={() => {
                        router.push(item.link);
                      }}
                      variant="h6"
                      color="textSecondary"
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          <Grid item xs={12} md={12}>
            <LazyLoadImage
              delayTime={500}
              placeholderSrc={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp`}
              effect="blur"
              src="https://res.cloudinary.com/deyudesls/image/upload/c_scale,w_298/v1627490116/banks.png"
              alt="banks"
              width={298}
              height={162}
            />
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
