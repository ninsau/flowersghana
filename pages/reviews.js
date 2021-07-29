import dynamic from "next/dynamic";

export default function ReviewsPage() {
  const AddReviews = dynamic(() => import("../calls/addReviews"));
  const FetchReviews = dynamic(() => import("../calls/fetchReviews"));

  return (
    <>
      <AddReviews />
      <br />
      <br />
      <div>
        <FetchReviews />
      </div>
    </>
  );
}
