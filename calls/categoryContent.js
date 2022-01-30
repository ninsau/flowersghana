import Grid from "@material-ui/core/Grid";
import { DataStore, Predicates } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Link from "next/link";
import Backdrop from "../components/loader/fullpage";
import CardHeader from "@material-ui/core/CardHeader";
import AddToCartComponent from "../cart/addToCart";
import { stateStore } from "../cart/store";
import { CardContent } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import dynamic from "next/dynamic";
import HeadComponent from "../components/navigation/head";
import Image from "next/image";

export default function HomeContent() {
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [returned, setReturned] = useState(true);
  const done = stateStore((state) => state.done);
  const [pageIndex, setPageIndex] = useState(0);
  const Custom404Component = dynamic(() =>
    import("../components/utils/custom404")
  );
  const Pagin = dynamic(() => import("../components/utils/pagination"));
  const SimpleSnackbar = dynamic(() => import("../cart/snackbar"));

  async function fetchPosts() {
    if (slug === undefined) {
      const bouquetsData = await DataStore.query(
        Bouquets,
        (item) =>
          item.or((item) =>
            item
              .category("contains", "christmas")
              .tags("contains", "cheap")
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

  const getSubscription = () => {
    const subscription = DataStore.observe(Bouquets).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  };

  useEffect(() => {
    fetchPosts();
    getSubscription();
  }, [pageIndex]);

  return (
    <>
      {/* {slug && ( */}
      <HeadComponent
        description={`Ghana Flowers - Send ${
          slug ?? "this lovely item"
        } bouquet in Ghana. Same day and free delivery throughout Accra and Kumasi. `}
      />
      {/* )} */}
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
          <React.Fragment key={i}>
            <Grid item xs={6} md={4}>
              <Link href={`/bouquet/${item.slug}`}>
                <CardHeader
                  style={{ minHeight: 100 }}
                  title={item.title}
                  avatar={
                    <Chip
                      label={`₵${item.amount}`}
                      variant="outlined"
                      color="secondary"
                    />
                  }
                  subheader={item.availability}
                />
              </Link>
              <CardContent>
                <Image
                  onClick={() => router.push(`/bouquet/${item.slug}`)}
                  src={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_auto,w_380/${item.img}`}
                  width={380}
                  height={516}
                  alt={item.title}
                  blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_10,q_40,w_6/${item.img}`}
                  placeholder="blur"
                />
                <AddToCartComponent
                  itemTitle={item.title}
                  itemPrice={item.amount}
                />
              </CardContent>
            </Grid>
          </React.Fragment>
        );
      })}

      {slug !== undefined && bouquets.length > 0 && returned === true && (
        <Grid item xs={12} md={12}>
          <Pagin
            pageCount={6}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </Grid>
      )}
    </>
  );
}
