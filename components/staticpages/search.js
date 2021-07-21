/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { DataStore, Predicates } from "aws-amplify";
import { Bouquets } from "../../media/models";
import { useRouter } from "next/router";

export default function SearchComponent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const bouquetsData = await DataStore.query(
        Bouquets,
        (item) =>
          item.or((item) =>
            item.category("contains", "popular").tags("contains", slug)
          ),
        {
          page: 0,
          limit: 21,
        }
      );
      setBouquets(bouquetsData);
    }
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  const options = [
    "cheapest",
    "biggest",
    "love",
    "romance",
    "most expensive",
    "roses",
    "chrysanthemums",
  ];
  return (
    <>
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
              fullWidth
            />
          </Grid>
          <Grid>
            {options.map((option, i) => {
              return (
                <sl-badge class="search" type="info" key={i}>
                  {option}
                </sl-badge>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
