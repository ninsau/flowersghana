import FetchReviews from "../calls/fetchReviews";
import AddReviews from "../calls/addReviews";

export default function ReviewsPage() {
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
