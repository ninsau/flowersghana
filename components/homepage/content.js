import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import HomeContent from "../../calls/categoryContent";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Content() {
  const classes = useStyles();
  const Bottom = dynamic(() => import("./bottom"));
  const Hero = dynamic(() => import("./hero"));

  return (
    <>
      <Hero />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <HomeContent />
          </Grid>
        </Grid>
      </div>
      <Bottom />
    </>
  );
}
