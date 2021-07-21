import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Reviews } from "../media/models";
import { useRouter } from "next/router";

export default function FetchReviews() {
  const router = useRouter();
  let path = router.asPath;
  const [reviews, setReviews] = useState([]);
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
            page: 0,
            limit: 20,
          },
          {
            sort: (s) => s.review(SortDirection.ASCENDING),
          }
        );
        setReviews(reviewsData);
      }
    }
    const subscription = DataStore.observe(Reviews).subscribe(() =>
      fetchPosts()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {path === "/" && (
        <>
          {reviews.map((review, i) => {
            return (
              <>
                {i === 0 || i === 1 ? (
                  <>
                    <sl-details summary={`${review.name}`} key={i} open>
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
              </>
            );
          })}
        </>
      )}

      {path === "/reviews" && (
        <>
          {reviews.map((review, i) => {
            return (
              <>
                <sl-details summary={`${review.name}`} key={i} open>
                  <p>{review.review}</p>
                </sl-details>
                <br />
              </>
            );
          })}
        </>
      )}
    </>
  );
}
