import { CheckCircleIcon } from "@heroicons/react/solid";

import { DataStore } from "aws-amplify";
import { CheckoutNew } from "../src/models";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useSession } from "next-auth/react";
import React from "react";
import NotificationComponent from "./Notification";

const steps = [
  { name: "Order Received", href: "#", status: "complete" },
  { name: "Processing", href: "#", status: "current" },
  { name: "En Route", href: "#", status: "upcoming" },
  { name: "Delivered", href: "#", status: "upcoming" },
];

const TrackingComponent = () => {
  const { data: session } = useSession();
  const [data, setData] = React.useState<any>();
  const [loaded, setLoaded] = React.useState<Boolean>(false);
  const userEmail = session && session?.user?.email ? session?.user?.email : "";

  const TrackingSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email"),

    tracking: yup
      .string()
      .length(7, "TrrackingId should be 7 characters in length")
      .required("Please type out your trackingID "),
  });

  return (
    <>
      <Formik
        enableReinitialize
        validationSchema={TrackingSchema}
        initialValues={{ tracking: "", email: userEmail }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          try {
            const data = await DataStore.query(CheckoutNew, (item: any) =>
              item.and((item: any) =>
                item.email("eq", values.email).trackingID("eq", values.tracking)
              )
            );
            setData(data);
          } catch (err: any) {
            console.log(err);
          } finally {
            setLoaded(true);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="py-6 px-4 sm:px-6 lg:px-8">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your email
              </label>
              <div className="mt-1">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`shadow-sm ${
                    errors.email &&
                    touched.email &&
                    "focus:ring-red-500 focus:border-red-500"
                  }  block w-full sm:text-sm border-gray-300 rounded-md`}
                  placeholder="email@email.com"
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 hover:text-red-700">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="tracking"
                className="block text-sm font-medium text-gray-700"
              >
                Your tracking ID
              </label>
              <div className="mt-1">
                <Field
                  type="text"
                  name="tracking"
                  id="tracking"
                  className={`shadow-sm ${
                    errors.tracking &&
                    touched.tracking &&
                    "focus:ring-red-500 focus:border-red-500"
                  }  block w-full sm:text-sm border-gray-300 rounded-md`}
                  placeholder="ID12345"
                />
                {errors.tracking && touched.tracking && (
                  <span className="text-red-500 hover:text-red-700">
                    {errors.tracking}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Track Your Order
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {loaded && (
        <>
          {data?.length < 1 ? (
            <NotificationComponent content="No orders found" color="red" />
          ) : (
            <div className="py-12 px-4 sm:px-6 lg:px-8">
              <nav className="flex justify-center" aria-label="Progress">
                <ol role="list" className="space-y-6">
                  {data.map((step: any) => (
                    <li key={step.id}>
                      {step.tracking === "Order placed" && (
                        <>
                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Order Received
                              </span>
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-gray-200" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-gray-600">
                              Processing
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-gray-200" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-gray-600">
                              En Route
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-gray-200" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-gray-600">
                              Delivered
                            </span>
                          </div>
                        </>
                      )}

                      {step.tracking === "Processing" && (
                        <>
                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Order Received
                              </span>
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-green-200" />
                              <span className="relative block w-2 h-2 bg-green-600 rounded-full" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-green-600">
                              Processing
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-gray-200" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-gray-600">
                              En Route
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-gray-200" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-gray-600">
                              Delivered
                            </span>
                          </div>
                        </>
                      )}

                      {step.tracking === "En route" && (
                        <>
                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Order Received
                              </span>
                            </span>
                          </div>

                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Processing
                              </span>
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-green-200" />
                              <span className="relative block w-2 h-2 bg-green-600 rounded-full" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-green-600">
                              En Route
                            </span>
                          </div>

                          <div className="flex items-start" aria-current="step">
                            <span
                              className="flex-shrink-0 h-5 w-5 relative flex items-center justify-center"
                              aria-hidden="true"
                            >
                              <span className="absolute h-4 w-4 rounded-full bg-gray-200" />
                            </span>
                            <span className="ml-3 text-sm font-medium text-gray-600">
                              Delivered
                            </span>
                          </div>
                        </>
                      )}

                      {step.tracking === "Delivered" && (
                        <>
                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Order Received
                              </span>
                            </span>
                          </div>

                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Processing
                              </span>
                            </span>
                          </div>
                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                En Route
                              </span>
                            </span>
                          </div>

                          <div className="group">
                            <span className="flex items-start">
                              <span className="flex-shrink-0 relative h-5 w-5 flex items-center justify-center">
                                <CheckCircleIcon
                                  className="h-full w-full text-green-600 group-hover:text-green-800"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                Delivered
                              </span>
                            </span>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TrackingComponent;
