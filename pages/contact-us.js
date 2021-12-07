import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: 50,
  },
}));
export default function Contact() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h6"
              color="textSecondary"
              component="p"
              style={{ margin: 30 }}
            >
              We're here to answer your questions and discuss the future of our
              collaboration!
              <br />
              Call <Link href="tel:+233242877574">
                Kojo (+233 242 877 574)
              </Link>{" "}
              or
              <Link href="tel:+233209859591"> Kwabena (+233 209 859 591)</Link>
            </Typography>
          </Grid>
          <Grid>
            <sl-responsive-media>
              <img
                src="https://res.cloudinary.com/deyudesls/image/upload/v1627506334/contact%20us.webp"
                alt="A train riding through autumn foliage with mountains in the distance."
              />
            </sl-responsive-media>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
