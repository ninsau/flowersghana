import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { stepsStore, activeStepStore, recipientStore } from "./store";
import * as yup from "yup";
import "yup-phone";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function RecipientForm() {
  const classes = useStyles();
  const activeStep = activeStepStore((state) => state.activeStep);
  const setActiveStep = activeStepStore((state) => state.setActiveStep);
  const steps = stepsStore((state) => state.steps);
  const recipient = recipientStore((state) => state.recipient);
  const setRecipient = recipientStore((state) => state.setRecipient);
  const regionList = [
    "Greater Accra",
    "Ashanti",
    "Ahafo",
    "Bono",
    "Bono East",
    "Central",
    "Eastern",
    "North East",
    "Northern",
    "Oti",
    "Savannah",
    "Upper East",
    "Upper West",
    "Volta",
    "Western",
    "Western North",
  ];
  const farList = [
    "Oyarifa",
    "oyarifa",
    "lakeside",
    "Lakeside",
    "Mallam",
    "mallam",
    "kasoa",
    "Kasoa",
    "Pokuase",
    "Achimota",
    "West Hills",
    "Adenta",
  ];

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const CustomFirstName = (props) => (
    <TextField
      required
      id="firstName"
      label="First name"
      fullWidth
      autoComplete="given-name"
      {...props}
    />
  );

  const CustomLastName = (props) => (
    <TextField
      required
      id="lastName"
      label="Last name"
      fullWidth
      autoComplete="family-name"
      {...props}
    />
  );

  const CustomLocation = (props) => (
    <TextField
      required
      id="address1"
      label="Location/Address"
      fullWidth
      autoComplete="shipping address-line1"
      {...props}
    />
  );

  const CustomLocation2 = (props) => (
    <TextField
      id="address2"
      label="Address line 2"
      fullWidth
      autoComplete="shipping address-line2"
      {...props}
    />
  );

  const CustomCity = (props) => (
    <TextField
      required
      id="city"
      label="City/Town"
      fullWidth
      autoComplete="shipping address-level2"
      {...props}
    />
  );

  const CustomRegion = (props) => (
    // <TextField required id="state" label="Region" fullWidth {...props} />
    <Select id="state" required label="region" fullWidth {...props}>
      <MenuItem value={""}>Please select region</MenuItem>
      {regionList.map((region) => (
        <MenuItem value={region}>{region}</MenuItem>
      ))}
    </Select>
  );

  const CustomPhone = (props) => (
    <TextField
      required
      id="phone"
      label="Phone number"
      fullWidth
      autoComplete="phone number"
      type="tel"
      {...props}
    />
  );

  const CustomCalender = (props) => (
    <TextField
      id="date"
      label="Delivery date"
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      {...props}
    />
  );

  const RecipientSchema = yup.object().shape({
    firstname: yup
      .string()
      .min(2, "First name should be of minimum 2 characters length")
      .max(40, "First name should be of maximum 40 characters length")
      .required("First name is required"),

    lastname: yup
      .string()
      .min(2, "Last name should be of minimum 2 characters length")
      .max(40, "Last name should be of maximum 40 characters length")
      .required("Last name is required"),

    location: yup
      .string()
      .min(2, "Location should be of minimum 2 characters length")
      .max(80, "Location should be of maximum 80 characters length"),

    location2: yup
      .string()
      .min(2, "Address should be of minimum 2 characters length")
      .max(40, "Address should be of maximum 40 characters length"),

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

    phone: yup
      .string()
      .phone("GH", true, "Please provide a Ghanaian Phone Number")
      .required("Phone number is required"),

    calender: yup.date().required("Date of delivery is required"),
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Recipient Information
      </Typography>

      <Formik
        initialValues={recipient}
        validationSchema={RecipientSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          if (
            values.region !== "Greater Accra" &&
            values.region !== "Ashanti"
          ) {
            values.fee = 150;
            setRecipient(values);
          } else {
            if (
              farList.includes(values.city) ||
              farList.includes(values.location)
            ) {
              values.fee = 65;
              setRecipient(values);
            } else {
              values.fee = 0;
              setRecipient(values);
            }
          }
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Field name="calender" as={CustomCalender} />
                <br />
                {errors.calender && touched.calender ? errors.calender : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="firstname" as={CustomFirstName} />
                {errors.firstname && touched.firstname
                  ? errors.firstname
                  : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="lastname" as={CustomLastName} />
                {errors.lastname && touched.lastname ? errors.lastname : null}
              </Grid>
              <Grid item xs={12}>
                <Field name="location" as={CustomLocation} />
                {errors.location && touched.location ? errors.location : null}
              </Grid>
              <Grid item xs={12}>
                <Field name="location2" as={CustomLocation2} />
                {errors.location2 && touched.location2
                  ? errors.location2
                  : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="city" as={CustomCity} />
                {errors.city && touched.city ? errors.city : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="region" as={CustomRegion} />
                {errors.region && touched.region ? errors.region : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="phone" as={CustomPhone} />
                {errors.phone && touched.phone ? errors.phone : null}
              </Grid>
            </Grid>

            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
              >
                {activeStep === steps.length - 1
                  ? "Proceed to payment"
                  : "Next"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
