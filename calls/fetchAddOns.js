import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Bouquets } from "../media/models";

import { useRouter } from "next/router";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translate(0)",
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

  async function fetchPosts() {
    const bouquetsData = await DataStore.query(
      Bouquets,
      (item) => item.or((item) => item.category("eq", "add-on")),
      Predicates.ALL,
      {
        page: 0,
        limit: 18,
      }
    );
    setBouquets(bouquetsData);
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
    <ImageList className={classes.imageList} cols={6}>
      {bouquets.map((item, i) => (
        <ImageListItem
          key={i}
          onClick={() => location.replace(`/bouquet/${item.slug}`)}
        >
          <Image
            src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_auto,w_380/${item.img}`}
            width={380}
            height={516}
            alt={item.title}
            blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/${item.img}`}
            placeholder="blur"
          />
          <ImageListItemBar
            title={item.title}
            classes={{
              root: classes.titleBar,
              title: classes.title,
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
