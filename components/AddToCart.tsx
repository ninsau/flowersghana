import { Formik, Field, Form } from "formik";
import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import localforage from "localforage";
import * as yup from "yup";
import { cartStateStore } from "../lib/store";
import { ProductType } from "../lib/types";
import { useEffect } from "react";

const AddToCartComponent = (product: ProductType) => {
  const open = cartStateStore((state) => state.open);
  const setOpen = cartStateStore((state) => state.setOpen);
  const [stateOfProduct, setStateOfProduct] = React.useState(null);

  const fetchData = async () => {
    try {
      const value: any = await localforage.getItem(product.title);
      setStateOfProduct(value);
    } catch (err) {
      console.log(err);
    }
  };

  const QuantitySchema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Minimum quantity is 1")
      .max(1000, "Maximum quantity is 1000"),
  });

  useEffect(() => {
    fetchData();
  }, [open]);

  return (
    <>
      <Formik
        validationSchema={QuantitySchema}
        initialValues={{ quantity: 1 }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));

          try {
            localforage.setItem(product.title, {
              image: product.img,
              title: product.title,
              price: (parseInt(product.amount) * values.quantity),
              quantity: values.quantity,
              availabilty: product.availability,
              slug: product.slug,
            });
          } catch (error) {
            console.log(error);
          } finally {
            setOpen(true);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Choose Quantity
                  </label>
                  <div className="mt-1">
                    <Field
                      type="number"
                      name="quantity"
                      id="quantity"
                      min={1}
                      max={1000}
                      className={`shadow-sm block w-full sm:text-sm ${
                        errors.quantity && touched.quantity
                          ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                      }  rounded-md`}
                    />
                    {errors.quantity && touched.quantity && (
                      <span className="text-red-500 hover:text-red-700">
                        {errors.quantity}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-10">
                  {stateOfProduct ? (
                    <button
                      type="submit"
                      className={`w-full  bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500" border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white `}
                      disabled
                    >
                      Added to cart
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className={`w-full bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500" border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white `}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="group inline-flex text-base font-medium"
                  >
                    <ShieldCheckIcon
                      className="flex-shrink-0 mr-2 h-6 w-6 text-green-400 group-hover:text-green-500"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 hover:text-gray-700">
                      Quality Guaranteed
                    </span>
                  </a>
                </div>
              </section>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddToCartComponent;
