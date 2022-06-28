import MetaComponent from "../components/Meta";
import ReviewsComponent from "../components/Reviews";
import { BRAND_NAME } from "../lib";

const Reviews = () => {
  return (
    <>
      <MetaComponent title={`Info Pages | ${BRAND_NAME}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reviews</h1>
      </div>

      <ReviewsComponent/>
    </>
  );
};

export default Reviews;

Reviews.auth = true;
