import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";

export default function HomeContent() {
  //   const images = [
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //     {
  //       img: "https://source.unsplash.com/random",
  //       title: "Sample Product",
  //       alt: "sample alt",
  //       link: "/#",
  //       availability: "In stock",
  //       amount: 600,
  //     },
  //   ];

  const [bouquets, setBouquets] = useState([]);

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

  return (
    <>
      {bouquets.length < 1 && (
        <>
          <sl-spinner></sl-spinner>
        </>
      )}
      {bouquets.map((item, i) => {
        return (
          <Grid item xs={6} md={4} key={i}>
            <sl-card class="card-header">
              <div slot="header">
                {item.title}{" "}
                <sl-badge type="danger" pulse>
                  ₵{item.amount}
                </sl-badge>
                <sl-badge class="avail" type="info">
                  {item.availability}
                </sl-badge>
              </div>

              <img slot="image" src={`/images/${item.img}`} alt={item.title} />
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
