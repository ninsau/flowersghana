import React, { useEffect, useState, Fragment } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import localforage from "localforage";
import { CartContentType, CurrencyType } from "../lib/types";
import { classNames, deliveryMethods, regionList } from "../lib";
import { Formik, Field, Form } from "formik";
import NotificationComponent from "./Notification";
import { signIn, useSession } from "next-auth/react";
import * as yup from "yup";
import "yup-phone";
import { DataStore } from "aws-amplify";
import { CheckoutNew } from "../src/models";
import { PaystackButton } from "react-paystack";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { adminUpdateMail, orderUpdateMail } from "../lib/api-helper";

const Custom = (props: any) => <textarea rows={4} name="review" {...props} />;

const CheckoutComponent = () => {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = React.useState<any>(null);
  const [deliveryPrice, setDeliveryPrice] = React.useState(0);
  const { data: session } = useSession();
  const userEmail = session && session?.user?.email ? session?.user?.email : "";
  // const userPhone = session && session?.user?.phone_number ? session?.user?.phone_number : "";
  const userPhone = "";
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY as unknown as string;

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<any>({
    email: userEmail,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    region: "Greater Accra",
    phone: "",
    senderPhone: userPhone,
    note: "",
    instructions: "",
    amount: "",
    cart: JSON.stringify(products),
    status: "Not paid",
    tracking: "Order placed",
    trackingID: "",
    deliveryDate: "",
  });

  const ValidationSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email"),

    firstName: yup
      .string()
      .min(2, "First name should be of minimum 2 characters length")
      .max(40, "First name should be of maximum 40 characters length")
      .required("First name is required"),

    lastName: yup
      .string()
      .min(2, "Last name should be of minimum 2 characters length")
      .max(40, "Last name should be of maximum 40 characters length")
      .required("Last name is required"),

    apartment: yup
      .string()
      .min(2, "Apartment should be of minimum 2 characters length")
      .max(80, "Apartment should be of maximum 80 characters length"),

    address: yup
      .string()
      .min(2, "Address should be of minimum 2 characters length")
      .max(40, "Address should be of maximum 40 characters length")
      .required("Address is required"),

    city: yup
      .string()
      .min(2, "City should be of minimum 2 characters length")
      .max(25, "City should be of maximum 20 characters length")
      .required("City is required"),

    region: yup
      .string()
      .min(2, "Region should be of minimum 2 characters length")
      .max(40, "Region should be of maximum 40 characters length")
      .required("Region is required"),

    instructions: yup
      .string()
      .min(2, "instructions should be of minimum 2 characters length")
      .max(280, "instructions should be of maximum 280 characters length"),

    note: yup
      .string()
      .min(2, "note should be of minimum 2 characters length")
      .max(280, "note should be of maximum 280 characters length"),

    phone: yup
      .string()
      .phone("GH", true, "Please provide a Ghanaian Phone Number")
      .required("Phone number is required"),

    senderPhone: yup
      .string()
      .matches(phoneRegExp, "Your phone number is not valid")
      .required("Phone number is required"),

    deliveryDate: yup.date().required("Date of delivery is required"),
  });

  const fetchCartContent = async () => {
    try {
      const data: any = [];
      await localforage.iterate(function (value: CartContentType) {
        data.push({ ...value });
      });
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const sum = products?.reduce((a: any, b: any) => a + b.price, 0);
  const totalPrice: number = sum ? sum : 0;

  const finalPrice =
    deliveryPrice + totalPrice + 0.0195 * (deliveryPrice + totalPrice);

  const initialValues = {
    email: userEmail,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    region: "Greater Accra",
    phone: "",
    senderPhone: userPhone,
    note: "",
    instructions: "",
    amount: "",
    cart: JSON.stringify(products),
    status: "Not paid",
    tracking: "Order placed",
    trackingID: "",
    deliveryDate: "",
  };

  const completeCheckout = async () => {
    try {
      setOpen(false);
      values.status = "Paid";
      await DataStore.save(new CheckoutNew(values));
      await localforage.clear();
      localStorage.clear();
      await orderUpdateMail(values.email, values.trackingID);
      await adminUpdateMail(
        `${process.env.NEXT_PUBLIC_ADMIN_ONE!}, ${process.env
          .NEXT_PUBLIC_ADMIN_TWO!}`,
        values.deliveryDate
      );
    } catch (error) {
      console.log(error);
    } finally {
      location.replace(`/result?trackingID=${values.trackingID}`);
    }
  };

  const currency: CurrencyType = "GHS";

  const componentProps = {
    email: values.email as string,
    amount: Math.round(finalPrice * 100),
    currency: currency,
    publicKey,
    text: "Proceed to payment",
    onSuccess: () => completeCheckout(),
  };

  useEffect(() => {
    fetchCartContent();
  }, []);

  return (
    <>
      {products && products.length > 0 ? (
        <div className="bg-gray-50">
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Checkout</h2>

            {session?.user?.email ? null : (
              <div className="mb-4">
                <span
                  onClick={() => signIn()}
                  className="w-full mb-4 cursor flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign in to track orders
                </span>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or continue as Guest
                    </span>
                  </div>
                </div>
              </div>
            )}

            <Formik
              validationSchema={ValidationSchema}
              enableReinitialize
              initialValues={initialValues}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                setLoading(true);
                values.amount = JSON.stringify(finalPrice);
                values.trackingID = `ID${Math.round(
                  Math.random() * (100000 - 100 + 1) + 100
                )}`;
                try {
                  setValues(values);
                  setOpen(true);
                } catch (err: any) {
                  console.log(err);
                } finally {
                  setLoading(false);
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                  <div>
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        Contact information
                      </h2>

                      <div className="mt-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <Field
                            type="email"
                            id="email-address"
                            name="email"
                            autoComplete="email"
                            className={`block w-full border-gray-300 rounded-md shadow-sm ${
                              errors.email && touched.email
                                ? "focus:ring-red-500 focus:border-red-500"
                                : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            } `}
                          />
                          {errors.email && touched.email && (
                            <span className="text-red-500 hover:text-red-700">
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="senderPhone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Phone Number
                        </label>
                        <div className="mt-1">
                          <Field
                            type="tel"
                            name="senderPhone"
                            id="senderPhone"
                            autoComplete="tel"
                            className={`block w-full border-gray-300 rounded-md shadow-sm ${
                              errors.senderPhone && touched.senderPhone
                                ? "focus:ring-red-500 focus:border-red-500"
                                : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            } `}
                          />
                          {errors.senderPhone && touched.senderPhone && (
                            <span className="text-red-500 hover:text-red-700">
                              {errors.senderPhone}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="deliveryDate-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Delivery Date
                        </label>
                        <div className="mt-1">
                          <Field
                            type="date"
                            id="deliveryDate-address"
                            name="deliveryDate"
                            autoComplete="deliveryDate"
                            className={`block w-full border-gray-300 rounded-md shadow-sm ${
                              errors.deliveryDate && touched.deliveryDate
                                ? "focus:ring-red-500 focus:border-red-500"
                                : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            } `}
                          />
                          {errors.deliveryDate && touched.deliveryDate && (
                            <span className="text-red-500 hover:text-red-700">
                              {errors.deliveryDate}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Note
                        </label>
                        <div className="mt-1">
                          <Field
                            name="note"
                            rows={4}
                            id="note"
                            className={`block w-full border-gray-300 rounded-md shadow-sm ${
                              errors.note && touched.note
                                ? "focus:ring-red-500 focus:border-red-500"
                                : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            } `}
                            as={Custom}
                          />
                          {errors.note && touched.note && (
                            <span className="text-red-500 hover:text-red-700">
                              {errors.note}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Special Instructions
                        </label>
                        <div className="mt-1">
                          <Field
                            name="instructions"
                            rows={4}
                            id="instructions"
                            className={`block w-full border-gray-300 rounded-md shadow-sm ${
                              errors.instructions && touched.instructions
                                ? "focus:ring-red-500 focus:border-red-500"
                                : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            } `}
                            as={Custom}
                          />
                          {errors.instructions && touched.instructions && (
                            <span className="text-red-500 hover:text-red-700">
                              {errors.instructions}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 border-t border-gray-200 pt-10">
                      <h2 className="text-lg font-medium text-gray-900">
                        Recipient information
                      </h2>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        <div>
                          <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              id="first-name"
                              name="firstName"
                              autoComplete="given-name"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.firstName && touched.firstName
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            />
                            {errors.firstName && touched.firstName && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.firstName}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              id="last-name"
                              name="lastName"
                              autoComplete="family-name"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.lastName && touched.lastName
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            />
                            {errors.lastName && touched.lastName && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.lastName}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              name="address"
                              id="address"
                              autoComplete="street-address"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.address && touched.address
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            />
                            {errors.address && touched.address && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.address}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="apartment"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Apartment, suite, etc.
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              name="apartment"
                              id="apartment"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.apartment && touched.apartment
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            />
                            {errors.apartment && touched.apartment && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.apartment}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <div className="mt-1">
                            <Field
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.city && touched.city
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            />
                            {errors.city && touched.city && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.city}
                              </span>
                            )}
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Region
                          </label>
                          <div className="mt-1">
                            <Field
                              as="select"
                              id="region"
                              name="region"
                              autoComplete="region-name"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.region && touched.region
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            >
                              {regionList.map((region, i: number) => (
                                <option key={i}>{region}</option>
                              ))}
                            </Field>
                            {errors.region && touched.region && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.region}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone
                          </label>
                          <div className="mt-1">
                            <Field
                              type="tel"
                              name="phone"
                              id="phone"
                              autoComplete="tel"
                              className={`block w-full border-gray-300 rounded-md shadow-sm ${
                                errors.phone && touched.phone
                                  ? "focus:ring-red-500 focus:border-red-500"
                                  : "focus:ring-green-500 focus:border-green-500 sm:text-sm"
                              } `}
                            />
                            {errors.phone && touched.phone && (
                              <span className="text-red-500 hover:text-red-700">
                                {errors.phone}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 border-t border-gray-200 pt-10">
                      <RadioGroup
                        value={selectedDeliveryMethod}
                        onChange={setSelectedDeliveryMethod}
                      >
                        <RadioGroup.Label className="text-lg font-medium text-gray-900">
                          Delivery method
                        </RadioGroup.Label>

                        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                          {deliveryMethods.map((deliveryMethod) => (
                            <RadioGroup.Option
                              key={deliveryMethod.id}
                              value={deliveryMethod}
                              className={({ checked, active }) =>
                                classNames(
                                  checked
                                    ? "border-transparent"
                                    : "border-gray-300",
                                  active ? "ring-2 ring-green-500" : "",
                                  "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                                )
                              }
                            >
                              {({ checked, active }) => (
                                <>
                                  <span
                                    onClick={() =>
                                      setDeliveryPrice(deliveryMethod.price)
                                    }
                                    className="flex-1 flex"
                                  >
                                    <span className="flex flex-col">
                                      <RadioGroup.Label
                                        as="span"
                                        className="block text-sm font-medium text-gray-900"
                                      >
                                        {deliveryMethod.title}
                                      </RadioGroup.Label>
                                      <RadioGroup.Description
                                        as="span"
                                        className="mt-1 flex items-center text-sm text-gray-500"
                                      >
                                        {deliveryMethod.turnaround}
                                      </RadioGroup.Description>
                                      <RadioGroup.Description
                                        as="span"
                                        className="mt-6 text-sm font-medium text-gray-900"
                                      >
                                        ₵{deliveryMethod.price}
                                      </RadioGroup.Description>
                                    </span>
                                  </span>
                                  {checked ? (
                                    <CheckCircleIcon
                                      className="h-5 w-5 text-green-600"
                                      aria-hidden="true"
                                    />
                                  ) : null}
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-green-500"
                                        : "border-transparent",
                                      "absolute -inset-px rounded-lg pointer-events-none"
                                    )}
                                    aria-hidden="true"
                                  />
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className="mt-10 lg:mt-0">
                    <h2 className="text-lg font-medium text-gray-900">
                      Order summary
                    </h2>
                    <h3 className="sr-only">Items in your cart</h3>
                    <ul role="list" className="divide-y divide-gray-200">
                      {products?.map((product: CartContentType, i: number) => (
                        <li key={i} className="flex py-6 px-4 sm:px-6">
                          <div className="flex-shrink-0">
                            <img
                              src={`https://res.cloudinary.com/deyudesls/image/upload/${product.image}`}
                              alt={`${product.title} image`}
                              height="100%"
                              width="100%"
                              className="w-20 rounded-md"
                              loading="lazy"
                            />
                          </div>

                          <div className="ml-6 flex-1 flex flex-col">
                            <div className="flex">
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm">{product.title}</h4>
                              </div>
                            </div>

                            <div className="flex-1 pt-2 flex items-end justify-between">
                              <p className="mt-1 text-sm font-medium text-gray-900">
                                ₵{product.price}
                              </p>

                              <div className="ml-4">
                                <label htmlFor="quantity" className="sr-only">
                                  Quantity
                                </label>
                                <span>{product.quantity}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                      <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <dt className="text-sm">Subtotal</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            ₵{totalPrice.toFixed(2)}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-sm">Delivery</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            ₵{deliveryPrice.toFixed(2)}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between">
                          <dt className="text-sm">Taxes</dt>
                          <dd className="text-sm font-medium text-gray-900">
                            ₵{(0.0195 * totalPrice).toFixed(2)}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                          <dt className="text-base font-medium">Total</dt>
                          <dd className="text-base font-medium text-gray-900">
                            ₵{finalPrice.toFixed(2)}
                          </dd>
                        </div>
                      </dl>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        {!loading ? (
                          <button
                            type="submit"
                            className="w-full bg-green-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                          >
                            Confirm order
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                            disabled
                          >
                            <svg
                              role="status"
                              className="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Processing...
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <NotificationComponent
          content="Your have no items in your sopping cart"
          color="red"
        />
      )}

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Order created successfully
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Please allow the page to reload after you make
                          payment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <PaystackButton
                      className={"paystack-button"}
                      {...componentProps}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default CheckoutComponent;
