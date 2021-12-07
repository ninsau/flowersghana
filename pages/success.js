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
export default function Success() {
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
            <Typography variant="h6" color="textSecondary" component="p" style={{ margin: 30 }}>
              Thank you for shopping with us! Your order has been received successfully.
            </Typography>
          </Grid>
          <Grid>
            <sl-responsive-media>
              <img
                src="https://res.cloudinary.com/deyudesls/image/upload/v1627506009/success.webp"
                alt="A train riding through autumn foliage with mountains in the distance."
              />
            </sl-responsive-media>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
