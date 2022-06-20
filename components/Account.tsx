import { format } from "date-fns";
import Link from "next/link";
import { useDataWithEmail } from "../lib/hooks";
import { CheckoutNew } from "../src/models";
import { AccountProductComponent } from "./Images";
import NotificationComponent from "./Notification";

const AccountComponent = (email: any) => {
  const orders = useDataWithEmail(CheckoutNew, email.email);

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-xl">
          <h1
            id="your-orders-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Your Orders
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>
        {orders?.length < 1 ? (
          <NotificationComponent
            content="You currently have no orders"
            color="red"
          />
        ) : (
          <div className="mt-12 space-y-16 sm:mt-16">
            {orders.map((item) => {
              return (
                <section
                  key={item.trackingID}
                  aria-labelledby={`${item.trackingID}-heading`}
                >
                  <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                    <h2
                      id={`${item.trackingID}-heading`}
                      className="text-lg font-medium text-gray-900 md:flex-shrink-0"
                    >
                      Order #{item.trackingID}
                    </h2>
                    <div className="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                      <p className="text-sm font-medium text-gray-500">{`${
                        item.tracking
                      } on ${format(
                        new Date(item.updatedAt as unknown as number),
                        "MMM dd yyyy"
                      )}`}</p>
                      <div className="flex text-sm font-medium">
                        <span>
                          Status:{" "}
                          <span className="text-green-600 hover:text-green-500">
                            {" "}
                            {item.tracking}
                          </span>
                        </span>
                        {/* <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                        <a
                          href={item.slug}
                          className="text-green-600 hover:text-green-500"
                        >
                          View Invoice
                        </a>
                      </div> */}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
                    {JSON.parse(item.cart).map((product: any, i: number) => (
                      <div key={i} className="py-6 sm:flex">
                        <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                          <AccountProductComponent
                            src={product.image}
                            alt={product.title}
                          />
                          <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                            <h3 className="text-sm font-medium text-gray-900">
                              <Link href={`/product/${product.slug}`}>
                                {product.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500 truncate">
                              <span
                                className="mx-1 text-gray-400"
                                aria-hidden="true"
                              >
                                Qunatity &middot;
                              </span>{" "}
                              <span>{product.quantity}</span>
                            </p>
                            <p className="mt-1 font-medium text-gray-900">
                              ${product.price}
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                          <button
                            type="button"
                            className="w-full flex items-center justify-center bg-green-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-full sm:flex-grow-0"
                          >
                            <Link href={`/product/${product.slug}`}>
                              Buy again
                            </Link>
                          </button>
                          {/* <button
                          type="button"
                          className="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:w-full sm:flex-grow-0"
                        >
                          Shop similar
                        </button> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountComponent;
