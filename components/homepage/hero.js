import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { DataStore } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { Bouquets } from '../../media/models'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://www.flowersghana.com/images/1a511297-4675-478e-820c-54c9b9098dbf.JPG)",
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
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Bouquets)
      setPosts(postData)
    }
    const subscription = DataStore.observe(Bouquets).subscribe(() => fetchPosts())
    return () => subscription.unsubscribe()
  }, [])

  posts.map((a)=>{
    console.log(a.id)
  })
  return (
    <>
      <Paper
        className={classes.mainFeaturedPost}
        style={{
          backgroundImage: `url('https://www.flowersghana.com/images/1a511297-4675-478e-820c-54c9b9098dbf.JPG')`,
        }}
      >
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
                {posts.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                All our flowers and plants are freshly cut, and are delivered
                directly from the farm.
              </Typography>
              <Link variant="subtitle1" href="#">
                <Button variant="contained" size="large">
                  Shop Now
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
