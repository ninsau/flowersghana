import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Head from "next/head";
import BackdropComponent from "../components/loader/backdrop";
import { Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import LinkIcon from "@material-ui/icons/Link";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { CardContent } from "@material-ui/core";
import AddToCartComponent from "../cart/addToCart";

export default function BouquetDetails() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const bouquetsData = await DataStore.query(Bouquets, (item) =>
        item.slug("eq", slug)
      );
      setBouquets(bouquetsData);
    }
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {bouquets.length < 1 && (
        <>
          <BackdropComponent />
        </>
      )}
      {bouquets.map((item, i) => {
        return (
          <>
            <Head>
              <title>{item.title} | FlowersGhana</title>
            </Head>

            <Grid m={4} item xs={12} md={5} key={Math.random()}>
              <CardHeader
                title={item.title}
                subheader={
                  <sl-badge type="danger" pulse>
                    ₵{item.amount}
                  </sl-badge>
                }
              />

              <sl-card class="card-header">
                <img slot="image" src={`${item.img}`} alt={item.title} />

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <br />
                    Tags:{" "}
                    {item.tags.split(",").map((tag) => (
                      <sl-badge type="info"> {tag} </sl-badge>
                    ))}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    <LinkIcon />
                  </IconButton>
                  {item.availability}
                </CardActions>
              </sl-card>
            </Grid>
            <Grid item xs={12} md={7} key={Math.random()}>
              <h2>Description</h2>
              <Typography paragraph>{item.description}</Typography>
              <br />

              <Grid item xs={12} md={4} key={Math.random()}>
                <br />
                <AddToCartComponent itemTitle={item.title} itemPrice={item.amount} />
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
