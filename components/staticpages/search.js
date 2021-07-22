/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { Bouquets } from "../../media/models";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import Fuse from "fuse.js";
import { useRouter } from "next/router";
import Head from 'next/head'

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

export default function SearchComponent() {
  const classes = useStyles();
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const options = [
    "cheapest",
    "biggest",
    "love",
    "romance",
    "most expensive",
    "roses",
    "chrysanthemums",
  ];

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const bouquetsData = await DataStore.query(Bouquets);
      setBouquets(bouquetsData);
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
  if (slug !== "random" || slug != undefined) {
    if (searchParam === "") {
      result = fuse.search(slug);
    } else {
      result = fuse.search(searchParam);
    }
  } else {
    result = fuse.search(searchParam);
  }

  return (
    <>
    <Head>
        {slug !== undefined && searchParam === '' ? <title> {`Search '${slug}'`}| FlowersGhana</title> : <title>{`Search '${searchParam}'`} | FlowersGhana</title>}
    </Head>
      <div style={{ margin: 20 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          {/* <p>Search with title, category, description, image name, or price</p> */}
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
                  <strong>Please try a keyword</strong>
                  <br />
                  No items found.
                </sl-alert>
              </>
            )}
          </Grid>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                {result.map((item, i) => {
                  return (
                    <Grid item xs={6} md={4} key={i}>
                      <sl-card class="card-header">
                        <div slot="header">
                          {item.item.title}{" "}
                          <sl-badge type="danger" pulse>
                            ₵{item.item.amount}
                          </sl-badge>
                          <sl-badge class="avail" type="info">
                            {item.item.availability}
                          </sl-badge>
                        </div>
                        <Link href={`/bouquet/${item.item.slug}`}>
                          <img
                            slot="image"
                            src={`${item.item.img}`}
                            alt={item.item.title}
                          />
                        </Link>

                        <sl-button class="add" href={item.item.link}>
                          Add to cart
                        </sl-button>
                      </sl-card>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}
