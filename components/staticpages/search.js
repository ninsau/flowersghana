/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { Bouquets } from "../../media/models";
import Link from "next/link";
import Fuse from "fuse.js";
import { useRouter } from "next/router";
import Head from "next/head";
import { Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import AddToCartComponent from "../../cart/addToCart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CardContent } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import Backdrop from "../loader/backdrop";

export default function SearchComponent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [returned, setReturned] = useState(true);

  const options = [
    "cheapest",
    "biggest",
    "love",
    "romance",
    "grand",
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
      <Head>
        {slug !== undefined && searchParam === "" ? (
          <title> {`Search '${slug}'`}| FlowersGhana</title>
        ) : (
          <title>{`Search '${searchParam}'`} | FlowersGhana</title>
        )}
      </Head>

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
          justify="center"
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
                          color="secondary"
                        />
                      }
                      subheader={item.item.availability}
                    />
                  </Link>

                  <CardContent>
                    <Link href={`/bouquet/${item.item.slug}`}>
                      <LazyLoadImage
                        slot="image"
                        delayTime={500}
                        placeholderSrc={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp`}
                        effect="blur"
                        src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,w_387/${item.item.img}`}
                        alt={item.item.title}
                        className="lazy"
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
