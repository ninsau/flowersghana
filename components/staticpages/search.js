/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { Bouquets } from "../../media/models";
import Link from "next/link";
import Fuse from "fuse.js";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import AddToCartComponent from "../../cart/addToCart";
import Image from "next/image";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CardContent } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import Backdrop from "../loader/backdrop";
import HeadComponent from "../navigation/head";

export default function SearchComponent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [returned, setReturned] = useState(true);

  const options = [
    "cheapest",
    "christmas",
    "love",
    "romance",
    "big",
    "roses",
    "chrysanthemums",
  ];

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const bouquetsData = await DataStore.query(Bouquets);

      if (bouquetsData.length < 1) {
        setReturned(false);
      } else {
        setBouquets(bouquetsData);
      }
    }
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  const option = {
    includeScore: true,
    keys: ["title", "tags", "category", "description", "amount"],
  };

  const toString = JSON.stringify(bouquets);
  const toJson = JSON.parse(toString);

  const fuse = new Fuse(toJson, option);

  let result;
  if (slug !== undefined && searchParam === "") {
    result = fuse.search(slug);
  } else {
    result = fuse.search(searchParam);
  }

  return (
    <>
      {slug && searchParam === "" ? (
        <HeadComponent
          title={`Search '${slug}' | FlowersGhana`}
          description={`Find samples of ${slug} and we will deliver to your loved ones in Ghana.`}
        />
      ) : (
        <title>{`Search '${searchParam}'`} | FlowersGhana</title>
      )}

      {bouquets.length < 1 && returned === true && (
        <>
          <Backdrop />
        </>
      )}
      <div style={{ margin: 20 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid>
            <TextField
              margin="dense"
              multiline
              id="review"
              label="Search by keyword(s)"
              type="text"
              variant="outlined"
              onChange={(e) => setSearchParam(e.target.value)}
              value={searchParam}
              fullWidth
            />
            <Typography variant="body2" color="textSecondary" component="p">
              Find an item by searching title, description, amount less than, or
              category.
            </Typography>
          </Grid>
          <Grid style={{ margin: 20 }}>
            {options.map((option, i) => {
              return (
                <sl-badge
                  class="search"
                  onClick={() => setSearchParam(option)}
                  type="info"
                  key={i}
                >
                  {option}
                </sl-badge>
              );
            })}
          </Grid>
          <Grid style={{ margin: 20 }}>
            {result.length < 1 && (
              <>
                <sl-alert type="danger" open>
                  <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
                  <strong>Please try another keyword(s)</strong>
                  <br />
                  No items found.
                </sl-alert>
              </>
            )}
          </Grid>

          <Grid container item>
            {result.map((item, i) => {
              return (
                <Grid item xs={6} md={4} key={i}>
                  <Link href={`/bouquet/${item.item.slug}`}>
                    <CardHeader
                      style={{ minHeight: 100 }}
                      title={item.item.title}
                      avatar={
                        <Chip
                          label={`₵${item.item.amount}`}
                          variant="outlined"
                          color="secondary"
                        />
                      }
                      subheader={item.item.availability}
                    />
                  </Link>

                  <CardContent>
                    <Link href={`/bouquet/${item.item.slug}`}>
                      <Image
                        src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_auto,w_387/${item.item.img}`}
                        width={380}
                        height={516}
                        alt={item.item.title}
                        blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/${item.item.img}`}
                        placeholder="blur"
                      />
                    </Link>
                    <AddToCartComponent
                      itemTitle={item.item.title}
                      itemPrice={item.item.amount}
                    />
                  </CardContent>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
