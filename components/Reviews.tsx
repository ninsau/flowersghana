import { format } from "date-fns";
import { useDataDescending } from "../lib/hooks";
import { Reviews } from "../src/models";
import AddReviewComponent from "./AddReview";

const ReviewsComponent = () => {
  const reviews: Reviews[] = useDataDescending(Reviews);

  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <AddReviewComponent />
          <h2 className="text-lg font-medium text-gray-900">Recent reviews</h2>

          <div className="mt-6 pb-10 border-t border-gray-200 divide-y divide-gray-200 space-y-10">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
              >
                <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                  <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                    {review.review}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <time
                    // dateTime={review.createdAt}
                    className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                  >
                    {review.createdAt &&
                      format(
                        new Date(review.createdAt as unknown as number),
                        "MMM dd yyyy"
                      )}
                  </time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsComponent;
