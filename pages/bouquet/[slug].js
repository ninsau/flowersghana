import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import dynamic from "next/dynamic";
import BackdropComponent from "../../components/loader/bouquet";

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

export default function CategoryContent(slug) {
  const classes = useStyles();
  const BouquetDetails = dynamic(() => import("../../calls/bouquetDetails"), {
    loading: () => <BackdropComponent />,
  });

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12}>
            <BouquetDetails slug={slug.slug} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: { slug: params.slug },
  };
}
