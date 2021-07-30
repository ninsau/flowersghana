import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CategoryContentPage() {
  const classes = useStyles();
  const CategoryContent = dynamic(() => import("../../calls/categoryContent"));

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <CategoryContent />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
