import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Bouquets } from "../media/models";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { IconButton } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.white,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function FetchAddOns() {
  const classes = useStyles();
  const [bouquets, setBouquets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      const bouquetsData = await DataStore.query(
        Bouquets,
        (item) => item.or((item) => item.category("contains", "add-on")),
        Predicates.ALL,
        {
          page: 0,
          limit: 18,
        }
      );
      setBouquets(bouquetsData);
    }
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <ImageList className={classes.imageList} cols={3}>
      {bouquets.map((item) => (
        <ImageListItem
          key={item.img}
          onClick={() => router.replace(`/bouquet/${item.slug}`)}
        >
          <img
            src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,w_387/${item.img}`}
            alt={item.title}
          />
          <ImageListItemBar
            title={item.title}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
            actionIcon={
              <IconButton aria-label={`view ${item.title}`}>
                <VisibilityOutlinedIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
