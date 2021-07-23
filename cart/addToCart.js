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
import { useCookies } from "react-cookie";
// import { parseCookies } from "./cookieHelper";

export default function AddToCartComponent({ itemTitle }) {
  const [open, setOpen] = useState(false);
  const [cookie, setCookie] = useCookies(["cart"]);

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


  // const CookieCount = () => {
  //   let count = [];

  //   for (const [key, value] of Object.entries(cookie)) {
  //     if (
  //       key !== "_ga" &&
  //       key !== "_ga_F0MWV1FSS0" &&
  //       key !== "next-auth.callback-url"
  //     ) {
  //       let quantity = value.quantity;
  //       count.push({ key, quantity });
  //     }
  //   }
  //   console.log( count);
  // }
  // useEffect(() => {

  // CookieCount()

  // }, [cookie]);

  // console.log(count)


  return (
    <>
      <sl-button class="add" onClick={handleClickOpen}>
        Add to cart
      </sl-button>
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
            initialValues={{ quantity: 1, title: itemTitle }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              // alert(JSON.stringify(values, null, 2));

              setCookie("cart", JSON.stringify(values), {
                path: "/",
                maxAge: 3600, // Expires after 1hr
                sameSite: true,
              });
              //   handleClose();
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

// AddToCartComponent.getInitialProps = async ({ req }) => {
//   const data = parseCookies(req)

// if (res) {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {
//       res.writeHead(301, { Location: "/" })
//       res.end()
//     }
//   }

//   return {
//     data: data && data,
//   }
// }
