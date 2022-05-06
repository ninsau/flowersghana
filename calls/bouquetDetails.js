import { React, useState, useEffect, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { DataStore } from "aws-amplify";
import { Bouquets } from "../media/models";
import { useRouter } from "next/router";
import Backdrop from "../components/loader/bouquet";
import { Typography } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import { CardContent } from "@material-ui/core";
import AddToCartComponent from "../cart/addToCart";
import { Chip } from "@material-ui/core";
import dynamic from "next/dynamic";
import HeadComponent from "../components/navigation/head";
import Image from "next/image";

export default function BouquetDetails() {
  const Custom404Component = dynamic(() =>
    import("../components/utils/custom404")
  );
  const CopyText = dynamic(() => import("../components/utils/copyText"));
  const Share = dynamic(() => import("../components/utils/share"));
  const router = useRouter();
  let slug = router.query.slug;
  const [bouquets, setBouquets] = useState([]);
  const [returned, setReturned] = useState(true);

  async function fetchPosts() {
    const bouquetsData = await DataStore.query(Bouquets, (item) =>
      item.slug("eq", slug)
    );
    if (bouquetsData.length < 1) {
      setReturned(false);
    } else {
      setBouquets(bouquetsData);
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
  }, []);

  return (
    <>
      {bouquets.length < 1 && returned === true && (
        <>
          <Backdrop />
        </>
      )}

      {/* {returned === false && (
        <>
          <Custom404Component />
        </>
      )} */}
      {bouquets.map((item, i) => {
        return (
          <Fragment key={i}>
            <Grid m={4} item xs={12} md={5}>
              <HeadComponent
                title={`${item.title} | FlowersGhana` || "Not Found"}
                image={`https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,q_100,w_380/${item.img}`}
                description={item.description}
              />
              <CardHeader
                title={item.title}
                subheader={
                  <Chip
                    label={`₵${item.amount}`}
                    variant="outlined"
                    color="secondary"
                  />
                }
              />

              <CardContent>
                <Image
                  src={`https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_516,q_100,w_387/${item.img}`}
                  alt={item.title}
                  width={387}
                  height={516}
                  quality={100}
                  blurDataURL={`https://res.cloudinary.com/deyudesls/image/upload/c_pad,h_516,q_100,w_380/${item.img}`}
                  placeholder="blur"
                />
                <Typography variant="body2" color="textSecondary" component="p">
                  <br />
                  Tags:{" "}
                  {item.tags.split(",").map((tag) => (
                    <sl-badge type="info" key={tag}>
                      {" "}
                      {tag}{" "}
                    </sl-badge>
                  ))}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Copy/Share link:
                  <IconButton aria-label="share">
                    <CopyText textToCopy={item.slug} />
                    <Share
                      shareData={{
                        title: `${item.title}`,
                        text: `${item.description}`,
                        url: `https://www.flowersghana.com/bouquet/${item.slug}`,
                      }}
                    />
                  </IconButton>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.availability}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} md={7}>
              <h2>Description</h2>
              <Typography paragraph>{item.description}</Typography>
              <br />

              <Grid item xs={12} md={4} key={Math.random()}>
                <br />
                <AddToCartComponent
                  itemTitle={item.title}
                  itemPrice={item.amount}
                />
              </Grid>
              <br />
              <sl-details summary="What do we do if exact item is not available?">
                <p>
                  If the exact flowers, plants, or container you have selected
                  is unavailable, we will create a beautiful bouquet with the
                  freshest available plants or flowers. Only items of equal or
                  higher value will be substituted.
                </p>
              </sl-details>
            </Grid>
          </Fragment>
        );
      })}
    </>
  );
}
