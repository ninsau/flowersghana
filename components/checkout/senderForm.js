import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { stepsStore, activeStepStore, senderStore } from "./store";
import * as yup from "yup";
import "yup-phone";

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

export default function SenderForm() {
  const classes = useStyles();
  const activeStep = activeStepStore((state) => state.activeStep);
  const setActiveStep = activeStepStore((state) => state.setActiveStep);
  const steps = stepsStore((state) => state.steps);
  const sender = senderStore((state) => state.sender);
  const setSender = senderStore((state) => state.setSender);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const CustomFirstName = (props) => (
    <TextField
      required
      id="sfirstName"
      label="First name"
      fullWidth
      autoComplete="given-name"
      {...props}
    />
  );

  const CustomNote = (props) => (
    <TextField
      id="note"
      label="Add a note"
      multiline
      fullWidth
      autoComplete="add a note"
      {...props}
    />
  );

  const CustomInstructions = (props) => (
    <TextField
      id="instruction"
      label="Add instructions"
      multiline
      fullWidth
      autoComplete="Add instructions"
      {...props}
    />
  );

  const CustomPhone = (props) => (
    <TextField
      required
      id="sphone"
      label="Phone number"
      fullWidth
      autoComplete="phone number"
      type="tel"
      {...props}
    />
  );

  const CustomEmail = (props) => (
    <TextField
      required
      id="email"
      label="Email address"
      fullWidth
      autoComplete="email address"
      type="email"
      {...props}
    />
  );
  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const SenderSchema = yup.object().shape({
    sfirstname: yup
      .string()
      .min(2, "First name should be of minimum 2 characters length")
      .max(40, "First name should be of maximum 40 characters length")
      .required("First name is required"),

    note: yup
      .string()
      .min(10, "Note should be of minimum 10 characters length")
      .max(280, "Note should be of maximum 280 characters length"),

    instructions: yup
      .string()
      .min(10, "Instructions should be of minimum 10 characters length")
      .max(280, "Instructions should be of maximum 280 characters length"),

    sphone: yup.string().matches(phoneRegExp, "Phone number is not valid"),

    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required")
      .min(10, "Instructions should be of minimum 10 characters length")
      .max(280, "Instructions should be of maximum 280 characters length"),
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sender Information
      </Typography>

      <Formik
        initialValues={sender}
        validationSchema={SenderSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          setSender(values);
          handleNext();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Field name="email" as={CustomEmail} />
                <br />
                {errors.email && touched.email ? errors.email : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="sfirstname" as={CustomFirstName} />
                {errors.sfirstname && touched.sfirstname
                  ? errors.firstname
                  : null}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="sphone" as={CustomPhone} />
                {errors.sphone && touched.sphone ? errors.sphone : null}
              </Grid>
              <Grid item xs={12}>
                <Field name="note" as={CustomNote} />
                {errors.note && touched.note ? errors.note : null}
              </Grid>
              <Grid item xs={12}>
                <Field name="instructions" as={CustomInstructions} />
                {errors.instructions && touched.instructions
                  ? errors.instructions
                  : null}
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
