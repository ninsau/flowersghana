import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Head from "next/head";
import Backdrop from "../components/loader/backdrop";
import { Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { CardContent } from "@material-ui/core";
import AddToCartComponent from "../cart/addToCart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Chip } from "@material-ui/core";
import dynamic from "next/dynamic";

export default function BouquetDetails() {
  const Custom404Component = dynamic(() =>
    import("../components/utils/custom404")
  );
  const CopyText = dynamic(() => import("../components/utils/copyText"));
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [returned, setReturned] = useState(true);

  async function fetchPosts() {
    const bouquetsData = await DataStore.query(Bouquets, (item) =>
      item.slug("eq", slug)
    );
    if (bouquetsData.length < 1) {
      setReturned(false);
    } else {
      setBouquets(bouquetsData);
    }
  }

  const getSubscription = () => {
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  };

  useEffect(() => {
    fetchPosts();
    getSubscription();
  }, []);

  return (
    <>
      {bouquets.length < 1 && returned === true && (
        <>
          <Backdrop />
        </>
      )}

      {/* {bouquets.length < 1 && returned === false && (
        <>
          <Custom404Component />
        </>
      )} */}
      {slug !== undefined && (
        <Head>
          <title>{slug || "Bouquet Details"} | FlowersGhana</title>
        </Head>
      )}
      {bouquets.map((item, i) => {
        return (
          <>
            <Grid m={4} item xs={12} md={5} key={i}>
              <CardHeader
                title={item.title}
                subheader={
                  <Chip
                    label={`₵${item.amount}`}
                    variant="outlined"
                    color="secondary"
                  />
                }
              />

              <CardContent>
                <LazyLoadImage
                  slot="image"
                  delayTime={500}
                  placeholderSrc={`https://res.cloudinary.com/deyudesls/image/upload/c_thumb,h_516,q_10,w_387/${item.img}`}
                  effect="blur"
                  src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_100,w_387/${item.img}`}
                  alt={item.title}
                  className="lazy"
                />
                <Typography variant="body2" color="textSecondary" component="p">
                  <br />
                  Tags:{" "}
                  {item.tags.split(",").map((tag) => (
                    <sl-badge type="info"> {tag} </sl-badge>
                  ))}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Copy link:
                  <IconButton aria-label="share">
                    <CopyText textToCopy={item.slug} />
                  </IconButton>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.availability}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={7} key={Math.random()}>
              <h2>Description</h2>
              <Typography paragraph>{item.description}</Typography>
              <br />

              <Grid item xs={12} md={4} key={Math.random()}>
                <br />
                <AddToCartComponent
                  itemTitle={item.title}
                  itemPrice={item.amount}
                />
              </Grid>
              <br />
              <sl-details summary="What do we do if exact item is not available?">
                <p>
                  If the exact flowers, plants, or container you have selected
                  is unavailable, we will create a beautiful bouquet with the
                  freshest available plants or flowers. Only items of equal or
                  higher value will be substituted.
                </p>
              </sl-details>
            </Grid>
          </>
        );
      })}
    </>
  );
}
