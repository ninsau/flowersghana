import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: 50,
  },
}));
export default function Custom404Component() {
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
            justify="center"
          >
            <Typography variant="h6" color="textSecondary" component="p" style={{ margin: 30 }}>
              404: This page or item does not exist. Please check your link and try with a different parameter.
            </Typography>
          </Grid>
          <Grid>
            <sl-responsive-media>
              <img
                src="https://res.cloudinary.com/deyudesls/image/upload/v1627493038/404%20image.webp"
                alt="A train riding through autumn foliage with mountains in the distance."
              />
            </sl-responsive-media>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
