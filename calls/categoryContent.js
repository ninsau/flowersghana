import Grid from "@material-ui/core/Grid";
import { DataStore, Predicates } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Link from "next/link";
import Backdrop from "../components/loader/backdrop";
import CardHeader from "@material-ui/core/CardHeader";
import AddToCartComponent from "../cart/addToCart";

export default function HomeContent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [returned, setReturned] = useState(true);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      if (slug === undefined || slug === "all") {
        const bouquetsData = await DataStore.query(Bouquets, Predicates.ALL, {
          page: 0,
          limit: 21,
        });
        setBouquets(bouquetsData);
      } else {
        const bouquetsData = await DataStore.query(
          Bouquets,
          (item) =>
            item.or((item) =>
              item
                .category("contains", slug)
                .tags("contains", slug)
                .description("contains", slug)
            ),
          {
            page: 0,
            limit: 21,
          }
        );
        if (bouquetsData.length < 1) {
          setReturned(false);
        } else {
          setBouquets(bouquetsData);
        }
      }
    }
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {bouquets.length < 1 && returned === true && (
        <>
          <Backdrop />
        </>
      )}

      {bouquets.length < 1 && returned === false && (
        <>
          <h1>Not found</h1>
        </>
      )}
      {bouquets.map((item, i) => {
        return (
          <Grid item xs={6} md={4} key={i}>
            <Link href={`/bouquet/${item.slug}`}>
              <CardHeader
                title={item.title}
                avatar={
                  <sl-badge type="danger" pulse>
                    ₵{item.amount}
                  </sl-badge>
                }
                subheader={item.availability}
              />
            </Link>
            <sl-card>
              <Link href={`/bouquet/${item.slug}`}>
                <img slot="image" src={`${item.img}`} alt={item.title} />
              </Link>
              <AddToCartComponent
                itemTitle={item.title}
                itemPrice={item.amount}
              />
            </sl-card>
          </Grid>
        );
      })}
    </>
  );
}
