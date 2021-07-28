import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {
  stepsStore,
  activeStepStore,
  recipientStore,
  senderStore,
} from "./store";
import localforage from "localforage";
import { DataStore } from "aws-amplify";
import { Checkout, Cart } from "../../media/models";
import { PaystackButton } from "react-paystack";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Review() {
  const classes = useStyles();
  const activeStep = activeStepStore((state) => state.activeStep);
  const setActiveStep = activeStepStore((state) => state.setActiveStep);
  const steps = stepsStore((state) => state.steps);
  const recipient = recipientStore((state) => state.recipient);
  const sender = senderStore((state) => state.sender);
  const [data, setData] = useState([]);
  const publicKey = "pk_live_dc752231bfcf577b0e2626cede5bda221f605179";

  const FetchData = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      const data = [];
      await localforage.iterate(function (value, key, iterationNumber) {
        data.push({ key, ...value });
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let prices = [0, 0];
  data?.map((x) => {
    prices.push(x[1]);
  });

  let totalPrice = prices?.reduce(reducer);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const extra = {
    paymentMade: false,
    trackOrder: `${recipient.firstname}-${sender.sfirstname}`,
  };

  const mergeOrderDetails = { ...recipient, ...sender, ...extra };

  const cartDetails = {
    trackOrder: `${recipient.firstname}-${sender.sfirstname}`,
    cart: JSON.stringify(data),
  };

  const componentProps = {
    email: sender.email,
    amount: totalPrice * 100,
    metadata: {
      name: sender.sfirstname,
      phone: sender.sphone,
    },
    currency: "Ghs",
    publicKey,
    text: "Proceed to payment",
    onSuccess: () => PlaceOrder(),
  };

  const ClearCart = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      localforage.clear().then(function () {
        console.log("Database is now empty.");
        location.replace("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const PlaceOrder = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      await DataStore.save(new Checkout(mergeOrderDetails));
      await DataStore.save(new Cart(cartDetails));
      ClearCart();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {data.map((product, i) => (
          <ListItem className={classes.listItem} key={i}>
            <ListItemText
              primary={product.key}
              secondary={`Quantity: ${product[0]}`}
            />
            <Typography variant="body2">₵{product[1]}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary={"Delivery"} />
          <Typography variant="body2">₵{recipient.fee}</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ₵{totalPrice + recipient.fee}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Recipient
          </Typography>
          <Typography gutterBottom>
            {recipient.firstname} {recipient.lastname}
          </Typography>
          <Typography gutterBottom>{`${recipient.location} - ${
            recipient.location2 || recipient.city
          }`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Sender
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>
                {sender.sfirstname} {sender.email} {sender.sphone}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <div className={classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <PaystackButton className={"paystack-button"} {...componentProps} />
          ) : null}
        </div>
      </Grid>
    </>
  );
}