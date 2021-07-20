import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

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
      { name: "Contact Us", link: "/contact-us" },
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
    ],
  },
  {
    title: "Social",
    description: [
      { name: "Instagram", link: "https://instagram.com/flowerghana" },
      { name: "Facebook", link: "https://facebook.com/flowerghana" },
      {
        name: "WhatsApp",
        link: "https://api.whatsapp.com/send?phone=233242877574",
      },
      { name: "Twitter", link: "https://twitter.com/flowersghana" },
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
    description: [
      { name: "Privacy policy", link: "/privacy" },
      { name: "Terms of use", link: "/terms" },
    ],
  },
];
export default function FooterComponent() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <Hidden smUp>
            <Link href="/">
              <img
                src="https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
                alt="flowersghana logo"
                width={200}
                height={70}
              />
            </Link>
          </Hidden>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
