import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { Bouquets } from "../../media/models";
import BouquetDetails from "../../calls/bouquetDetails";

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

export default function CategoryContent(data) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <BouquetDetails slug={data.data} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const bouquetsData = await DataStore.query(Bouquets, (item) =>
    item.slug("eq", params.slug)
  );
  return {
    props: { data: JSON.parse(JSON.stringify(bouquetsData)) },
  };
}
