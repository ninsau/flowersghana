import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_100,w_387/v1616906400/1a511297-4675-478e-820c-54c9b9098dbf_usqfex.webp)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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

export default function Hero() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Send a bouquet of flowers to your loved ones this Christmas
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                All our flowers and plants are freshly cut, and are delivered
                directly from the farm.
              </Typography>

              <Button
                onClick={() => router.push("/category/christmas")}
                variant="outlined"
                size="large"
              >
                Shop christmas flowers
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
