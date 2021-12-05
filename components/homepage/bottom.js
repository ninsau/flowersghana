import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import FetchReviews from "../../calls/fetchReviews";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.primary,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: theme.spacing(8),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function Bottom() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.mainFeaturedPost}
      style={{ backgroundImage:
        "url(https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_100,w_387/v1629207885/picnic%20fever.webp)"}}>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography variant="h5" color="inherit" paragraph>
                Customers from all over are excited with our flowers! Send
                freshly cut flowers with free delivery and greeting card
              </Typography>
              <Link href="/reviews">
                <Button variant="outlined" color="outlined" size="large">
                  See All Reviews
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <div>
        <FetchReviews />
      </div>
    </>
  );
}
