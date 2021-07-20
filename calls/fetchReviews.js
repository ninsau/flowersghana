import { DataStore } from "aws-amplify";
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
      const reviewsData = await DataStore.query(Reviews);
      setReviews(reviewsData.reverse());
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
          {reviews.slice(0, 5).map((review, i) => {
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
