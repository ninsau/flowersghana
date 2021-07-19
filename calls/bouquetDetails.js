import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Head from "next/head";

export default function BouquetDetails() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [quantity, setQuantity] = useState(1);

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
          <sl-progress-bar indeterminate></sl-progress-bar>
        </>
      )}
      {bouquets.map((item, i) => {
        return (
          <>
            <Head>
              <title>{item.title} | FlowersGhana</title>
            </Head>

            <Grid m={4} item xs={12} md={4} key={Math.random()}>
              <sl-card class="card-image">
                <img
                  slot="image"
                  src={`/images/${item.img}`}
                  alt={item.title}
                />

                <h1>{item.title}</h1>
                <sl-badge type="danger">₵{item.amount}</sl-badge>
              </sl-card>
            </Grid>
            <Grid item xs={12} md={8} key={Math.random()}>
              <h2>Details</h2>
              <p>{item.description}</p>
              <br />
              {item.tags.split(',').map(tag=> <sl-badge type="info"> {tag} </sl-badge> )}
              <br/>
              <h4>Quantity: {quantity}</h4>
              <Grid item xs={12} md={4} key={Math.random()}>
                <sl-input
                  type="number"
                  min={1}
                  max={500}
                  value={quantity}
                  onKeyUp={(e) => setQuantity(e.target.value)}
                ></sl-input>
                <br />
                <sl-button type="success" class="add" href={item.link}>
                Add to cart
              </sl-button>
              </Grid>
              <br/>
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
