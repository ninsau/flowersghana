import dynamic from "next/dynamic";
import BackdropComponent from "../components/loader/reviews";

export default function ReviewsPage() {
  const AddReviews = dynamic(() => import("../calls/addReviews"));
  const FetchReviews = dynamic(() => import("../calls/fetchReviews"), {
    loading: () => <BackdropComponent />,
  });

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
