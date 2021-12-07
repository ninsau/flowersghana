import { DataStore, Predicates, SortDirection } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { Reviews } from "../media/models";
import { useRouter } from "next/router";
import Pagin from "../components/utils/pagination";
import { Grid } from "@material-ui/core";
import Backdrop from "../components/loader/backdrop";
import Custom404Component from "../components/utils/custom404";

export default function FetchReviews() {
  const router = useRouter();
  let path = router.asPath;
  const [reviews, setReviews] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [returned, setReturned] = useState(true);

  useEffect(() => {
    fetchPosts();
    async function fetchPosts() {
      if (path === "/") {
        const reviewsData = await DataStore.query(
          Reviews,
          Predicates.ALL,
          {
            page: 0,
            limit: 5,
          },
          {
            sort: (s) => s.review(SortDirection.ASCENDING),
          }
        );
        setReviews(reviewsData);
      } else {
        const reviewsData = await DataStore.query(
          Reviews,
          Predicates.ALL,
          {
            page: pageIndex,
            limit: 10,
          },
          {
            sort: (s) => s.review(SortDirection.ASCENDING),
          }
        );
        if (reviewsData.length < 1) {
          setReturned(false);
        } else {
          setReviews(reviewsData);
        }
      }
    }
    const subscription = DataStore.observe(Reviews).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, [pageIndex]);

  return (
    <>
      {reviews.length < 1 && returned === true && (
        <>
          <Backdrop />
        </>
      )}

      {reviews.length < 1 && returned === false && (
        <>
          <Custom404Component />
        </>
      )}
      {path === "/" && (
        <>
          {reviews.map((review, i) => {
            return (
              <React.Fragment key={i}>
                {i === 0 || i === 1 ? (
                  <>
                    <sl-details summary={`${review.name}`} open>
                      <p>{review.review}</p>
                    </sl-details>
                    <br />
                  </>
                ) : (
                  <>
                    <sl-details summary={`${review.name}`} key={i}>
                      <p>{review.review}</p>
                    </sl-details>
                    <br />
                  </>
                )}
              </React.Fragment>
            );
          })}
        </>
      )}

      {path === "/reviews" && (
        <>
          {reviews.map((review, i) => {
            return (
              <React.Fragment key={i}>
                <sl-details summary={`${review.name}`} key={i} open>
                  <p>{review.review}</p>
                </sl-details>
                <br />
              </React.Fragment>
            );
          })}
        </>
      )}

      {path !== "/" && (
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
