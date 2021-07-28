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
import { useRouter } from "next/router";
import localforage from "localforage";
import { stateStore, removeStore } from "./store";
import { Typography } from "@material-ui/core";

export default function AddToCartComponent({ itemTitle, itemPrice }) {
  const setDone = stateStore((state) => state.setDone);
  const done = stateStore((state) => state.done);
  const remove = removeStore((state) => state.done);
  const [success, setSuccess] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  let path = router.asPath;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Quantity = (props) => (
    <TextField
      margin="dense"
      label="Quantity"
      type="number"
      variant="outlined"
      fullWidth
      {...props}
    />
  );

  const QuantitySchema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "Minimum quantity is 1")
      .max(1000, "Maximum quantity is 1000")
      .required("Quantity is required"),
  });

  const FetchSuccess = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const value = await localforage.getItem(itemTitle).then(function (value) {
        setSuccess(value);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchSuccess();
  }, [done, remove]);

  return (
    <>
      {success === null ? (
        <sl-button
          class="add"
          type={path.includes("/bouquet/") ? "success" : null}
          onClick={handleClickOpen}
        >
          Add to cart
        </sl-button>
      ) : (
        <sl-button class="add" disabled>
          Item added
        </sl-button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{itemTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please choose the quantity of {itemTitle} you want for your purchase
            today.
          </DialogContentText>
          <Formik
            validationSchema={QuantitySchema}
            initialValues={{ quantity: 1, title: itemTitle, price: itemPrice }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              let netPrice = values.price * values.quantity;
              try {
                localforage.setItem(values.title, [values.quantity, netPrice]);
                setDone(!done);
                handleClose();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="quantity" as={Quantity} />
                {errors.quantity && touched.quantity ? errors.quantity : null}
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" color="secondary">
                    Add to cart
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}
