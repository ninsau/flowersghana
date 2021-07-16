import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


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

export default function Content() {
  const classes = useStyles();

  const images = [
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
    {
      img: "https://source.unsplash.com/random",
      title: "Sample Product",
      alt: "sample alt",
      link: "/#",
      availability: "In stock",
      amount: 600,
    },
  ];
  function ImageList() {
    return (
      <>
        {images.map((item, i) => {
          return (
            <Grid item xs={6} md={4} key={i}>
              <sl-card class="card-header">
                <div slot="header">
                  {item.title} <sl-badge type="danger" pulse>₵{item.amount}</sl-badge>
                  <sl-badge class="avail" type="info">
                    {item.availability}
                  </sl-badge>
                </div>
                
                <img slot="image" src={item.img} alt={item.alt} />
                <sl-button class="add" href={item.link}>
                  Add to cart
                </sl-button>
              </sl-card>
            </Grid>
          );
        })}
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <ImageList />
        </Grid>
      </Grid>
    </div>
  );
}
