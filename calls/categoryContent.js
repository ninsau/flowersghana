import Grid from "@material-ui/core/Grid";
import { DataStore, Predicates } from "aws-amplify";
import { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Link from "next/link";
import Backdrop from "../components/loader/backdrop";
import CardHeader from "@material-ui/core/CardHeader";
import AddToCartComponent from "../cart/addToCart";
import SimpleSnackbar from "../cart/snackbar";
import { stateStore } from "../cart/store";
import Pagin from "../components/utils/pagination";
import Custom404Component from "../components/utils/custom404";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CardContent } from "@material-ui/core";

export default function HomeContent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [returned, setReturned] = useState(true);
  const done = stateStore((state) => state.done);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      if (slug === undefined) {
        const bouquetsData = await DataStore.query(
          Bouquets,
          (item) =>
            item.or((item) =>
              item
                .category("contains", "featured")
                .category("contains", "popular")
            ),
          {
            page: 0,
            limit: 18,
          }
        );
        setBouquets(bouquetsData);
      } else if (slug === "all") {
        const bouquetsData = await DataStore.query(Bouquets, Predicates.ALL, {
          page: pageIndex,
          limit: 18,
        });
        if (bouquetsData.length < 1) {
          setReturned(false);
        } else {
          setBouquets(bouquetsData);
        }
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
            page: pageIndex,
            limit: 18,
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
  }, [pageIndex]);

  return (
    <>
      {bouquets.length < 1 && returned === true && (
        <>
          <Backdrop />
        </>
      )}

      {bouquets.length < 1 && returned === false && (
        <>
          <Custom404Component />
        </>
      )}

      {done === true && (
        <SimpleSnackbar message={"Item has been added to cart"} />
      )}
      {bouquets.map((item, i) => {
        return (
          <Grid item xs={6} md={4} key={i}>
            <Link href={`/bouquet/${item.slug}`}>
              <CardHeader
                style={{ minHeight: 100 }}
                title={item.title}
                avatar={
                  <sl-badge type="danger" pulse>
                    ₵{item.amount}
                  </sl-badge>
                }
                subheader={item.availability}
              />
            </Link>
            <CardContent>
              <Link href={`/bouquet/${item.slug}`}>
                <LazyLoadImage
                  delayTime={500}
                  placeholderSrc={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp`}
                  effect="blur"
                  src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,w_387/${item.img}`}
                  alt={item.title}
                  className="lazy"
                />
              </Link>
              <AddToCartComponent
                itemTitle={item.title}
                itemPrice={item.amount}
              />
            </CardContent>
          </Grid>
        );
      })}

      {slug !== undefined && bouquets.length > 0 && returned === true && (
        <Grid item xs={12} md={12}>
          <Pagin
            pageCount={3}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </Grid>
      )}
    </>
  );
}
