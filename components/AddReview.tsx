import { DataStore } from "aws-amplify";
import { Reviews } from "../src/models";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import NotificationComponent from "./Notification";
import { useState } from "react";

const CustomReview = (props: any) => (
  <textarea rows={4} name="review" {...props} />
);

const AddReviewComponent = () => {
  const [added, setAdded] = useState<Boolean>(false);
  const [error, setError] = useState(null);

  const ReviewSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name should be of minimum 2 characters length")
      .max(40, "Name should be of maximum 40 characters length")
      .required("Name is required"),

    review: yup
      .string()
      .min(20, "Review should be of minimum 20 characters length")
      .required("Please type out your review "),
  });

  return (
    <>
      {added && (
        <NotificationComponent
          content={`${error ? error : "Review added successfully"}`}
          color={`${error ? "red" : "green"}`}
        />
      )}

      <Formik
        validationSchema={ReviewSchema}
        initialValues={{ name: "", review: "" }}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          try {
            await DataStore.save(
              new Reviews({
                name: values.name,
                review: values.review,
              })
            );
          } catch (err: any) {
            setError(err);
          } finally {
            setAdded(true);
            resetForm();
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <div className="mt-1">
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`shadow-sm ${
                    errors.name &&
                    touched.name &&
                    "focus:ring-red-500 focus:border-red-500"
                  }  block w-full sm:text-sm border-gray-300 rounded-md`}
                  placeholder="Jane Doe"
                />
                {errors.name && touched.name && (
                  <span className="text-red-500 hover:text-red-700">
                    {errors.name}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="review"
                className="block text-sm font-medium mt-2 text-gray-700"
              >
                Add your review
              </label>
              <div className="mt-1">
                <Field
                  name="review"
                  rows={4}
                  id="review"
                  className={`shadow-sm ${
                    errors.review &&
                    touched.review &&
                    "focus:ring-red-500 focus:border-red-500"
                  } block w-full sm:text-sm border-gray-300 rounded-md`}
                  defaultValue={""}
                  as={CustomReview}
                />
                {errors.review && touched.review && (
                  <span className="text-red-500 hover:text-red-700">
                    {errors.review}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddReviewComponent;
