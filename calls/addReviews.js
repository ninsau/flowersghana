import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as yup from "yup";
import { DataStore } from "aws-amplify";
import { Reviews } from "../media/models";

export default function ReviewsComponent() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CustomName = (props) => (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Your name"
      type="text"
      variant="outlined"
      fullWidth
      {...props}
    />
  );

  const CustomReview = (props) => (
    <TextField
      margin="dense"
      multiline
      id="review"
      label="Your review"
      type="text"
      variant="filled"
      fullWidth
      {...props}
    />
  );

  const ReviewSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Name should be of minimum 2 characters length")
      .max(40, "Name should be of maximum 40 characters length")
      .required("Name is required"),

    review: yup
      .string()
      .min(2, "Review should be of minimum 20 characters length")
      .required("Please type out your review "),
  });
  return (
    <>
<div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add a review
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a review</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Share your experience shopping with FlowersGhana. Please reach our
              customer care lines with any complains you might have.
            </DialogContentText>
            <Formik
              validationSchema={ReviewSchema}
              initialValues={{ name: "", review: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                await DataStore.save(
                  new Reviews({
                    name: values.name,
                    review: values.review,
                  })
                );
                handleClose();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field name="name" as={CustomName} />
                  {errors.name && touched.name ? errors.name : null}
                  <Field name="review" as={CustomReview} />
                  {errors.review && touched.review ? errors.review : null}

                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" color="secondary">
                      Publish
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
  
</>
  );
}
