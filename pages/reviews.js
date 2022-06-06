import dynamic from "next/dynamic";
import BackdropComponent from "../components/loader/reviews";
import HeadComponent from "../components/navigation/head";

export default function ReviewsPage() {
  const AddReviews = dynamic(() => import("../calls/addReviews"));
  const FetchReviews = dynamic(() => import("../calls/fetchReviews"), {
    loading: () => <BackdropComponent />,
  });

  return (
    <>
<HeadComponent/>

      <AddReviews />
      <br />
      <br />
      <div>
        <FetchReviews />
      </div>
    </>
  );
}
