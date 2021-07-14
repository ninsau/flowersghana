import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  review: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function InitReview() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" component="review" className={classes.review}>
        <Grid container spacing={4} justify="space-evenly">
          <Grid xs={12} sm={3}>
            <Typography color="textSecondary">
              Ubi si duis sunt sint, veniam de nescius ne hic fore coniunctione
              in pariatur reprehenderit hic arbitror. De a praesentibus ea magna
              expetendis ab consectetur e do ipsum cupidatat praesentibus id ita
              dolore sunt ut singulis. De tamen senserit comprehenderit do qui
              te praetermissum ut offendit id singulis ex ubi officia
              firmissimum ex o anim laboris ingeniis, quamquam illum cernantur
              vidisse, fore vidisse incurreret qui senserit in sint. Quibusdam
              consectetur de ullamco do possumus exercitation eu commodo, illum
              offendit aut offendit, arbitror si quem probant.Offendit nam
              incurreret, si elit export in expetendis a mandaremus firmissimum
              non nostrud, anim aut fabulas, laborum ita malis sed ad magna si
              illum non eu fugiat doctrina coniunctione hic aute consequat ubi
              doctrina. Non duis duis aute officia, offendit ea minim nescius.
              Do hic distinguantur, id ex graviterque. Et nam eram
              laborum.adjective
            </Typography>
            <Typography variant="body2" component="p">
              Jay-z
            </Typography>
          </Grid>

          <Grid xs={12} sm={3}>
            <Typography color="textSecondary">
              Ubi si duis sunt sint, veniam de nescius ne hic fore coniunctione
              in pariatur reprehenderit hic arbitror. De a praesentibus ea magna
              expetendis ab consectetur e do ipsum cupidatat praesentibus id ita
              dolore sunt ut singulis. De tamen senserit comprehenderit do qui
              te praetermissum ut offendit id singulis ex ubi officia
              firmissimum ex o anim laboris ingeniis, quamquam illum cernantur
              vidisse, fore vidisse incurreret qui senserit in sint. Quibusdam
              consectetur de ullamco do possumus exercitation eu commodo, illum
              offendit aut offendit, arbitror si quem probant.Offendit nam
              incurreret, si elit export in expetendis a mandaremus firmissimum
              non nostrud, anim aut fabulas, laborum ita malis sed ad magna si
              illum non eu fugiat doctrina coniunctione hic aute consequat ubi
              doctrina. Non duis duis aute officia, offendit ea minim nescius.
              Do hic distinguantur, id ex graviterque. Et nam eram laborum.
            </Typography>
            <Typography variant="body2" component="p">
              Kanye
            </Typography>
          </Grid>

          <Grid xs={12} sm={3}>
            <Typography color="textSecondary">
              Ubi si duis sunt sint, veniam de nescius ne hic fore coniunctione
              in pariatur reprehenderit hic arbitror. De a praesentibus ea magna
              expetendis ab consectetur e do ipsum cupidatat praesentibus id ita
              dolore sunt ut singulis. De tamen senserit comprehenderit do qui
              te praetermissum ut offendit id singulis ex ubi officia
              firmissimum ex o anim laboris ingeniis, quamquam illum cernantur
              vidisse, fore vidisse incurreret qui senserit in sint. Quibusdam
              consectetur de ullamco do possumus exercitation eu commodo, illum
              offendit aut offendit, arbitror si quem probant.Offendit nam
              incurreret, si elit export in expetendis a mandaremus firmissimum
              non nostrud, anim aut fabulas, laborum ita malis sed ad magna si
              illum non eu fugiat doctrina coniunctione hic aute consequat ubi
              doctrina. Non duis duis aute officia, offendit ea minim nescius.
              Do hic distinguantur, id ex graviterque. Et nam eram laborum.
            </Typography>
            <Typography variant="body2" component="p">
              Eminem
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
