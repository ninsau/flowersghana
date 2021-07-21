import Grid from "@material-ui/core/Grid";
import { DataStore, Predicates } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Link from "next/link";
import Backdrop from '../components/loader/backdrop'


export default function HomeContent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      if (slug === undefined || slug === "all") {
        const bouquetsData = await DataStore.query(Bouquets, Predicates.ALL, {
          page: 0,
          limit: 21
        });
        setBouquets(bouquetsData);
      } else {
        const bouquetsData = await DataStore.query(
          Bouquets,
          (item) =>
            item.or((item) =>
              item.category("contains", slug).tags("contains", slug)
            ),
          {
            page: 0,
            limit: 21,
          }
        );
        setBouquets(bouquetsData);
      }
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
          <Backdrop/>
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
              <Link href={`/bouquet/${item.slug}`}>
                <img slot="image" src={`${item.img}`} alt={item.title} />
              </Link>

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
