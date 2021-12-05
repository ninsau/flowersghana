import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Bouquets } from "../media/models";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRouter } from "next/router";

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
  const router = useRouter()

  useEffect(() => {
    fetchPosts();
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
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <ImageList className={classes.imageList} cols={6}>
      {bouquets.map((item) => (
        <ImageListItem
          key={item.img}
          onClick={() => router.push(`/bouquet/${item.slug}`)}
        >
          <LazyLoadImage
            delayTime={500}
            placeholderSrc={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp`}
            effect="blur"
            src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_100,w_387/${item.img}`}
            alt={item.title}
            className="bottom-images"
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
