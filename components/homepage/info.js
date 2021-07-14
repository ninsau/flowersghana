import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Info() {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* Hero unit */}
            <Container
              maxWidth="sm"
              component="main"
              className={classes.heroContent}
            >
              <Typography
                component="h3"
                variant="h2"
                align="left"
                color="textPrimary"
                gutterBottom
              >
                About flowersghana
              </Typography>
              <Typography
                variant="h5"
                align="left"
                color="textSecondary"
                component="p"
              >
                FlowerGhana has been delivering high quality foral arrangements
                and gift add-ons throughout Accra and Kumasi. We hand deliver
                all our products to give that personal touch to your friends and
                loved ones. Our packages serve to strengthen bonds between
                families, lovers, friends, and so on. We do same day deliveries
                if order comes in before 12 O'clock noon. Order a bouquet of
                freshly cut flowers as a gift for your loved ones for Val’s day,
                birthday, anniversary, and more. Our arrangements are
                expertly-crafted and are delivered with the tone you intend.
                Shop with us today for a wonderful experience!
              </Typography>
            </Container>
            {/* End hero unit */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
