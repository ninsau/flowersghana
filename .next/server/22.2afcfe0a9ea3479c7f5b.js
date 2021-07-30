exports.ids = [22];
exports.modules = {

/***/ "9jNx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CheckoutCompoent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Stepper"
var Stepper_ = __webpack_require__("UpG9");
var Stepper_default = /*#__PURE__*/__webpack_require__.n(Stepper_);

// EXTERNAL MODULE: external "@material-ui/core/Step"
var Step_ = __webpack_require__("OvFP");
var Step_default = /*#__PURE__*/__webpack_require__.n(Step_);

// EXTERNAL MODULE: external "@material-ui/core/StepLabel"
var StepLabel_ = __webpack_require__("EfMu");
var StepLabel_default = /*#__PURE__*/__webpack_require__.n(StepLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "zustand"
var external_zustand_ = __webpack_require__("bp7c");
var external_zustand_default = /*#__PURE__*/__webpack_require__.n(external_zustand_);

// CONCATENATED MODULE: ./components/checkout/store.js

const stepsStore = external_zustand_default()(set => ({
  steps: ["Recipient details", "Sender details", "Review your order"]
}));
const activeStepStore = external_zustand_default()(set => ({
  activeStep: 0,
  setActiveStep: val => set(state => ({
    activeStep: val
  }))
}));
const recipientStore = external_zustand_default()(set => ({
  recipient: {
    calender: "",
    firstname: "",
    lastname: "",
    region: "",
    phone: "",
    location: "",
    location2: "",
    city: "",
    fee: 0
  },
  setRecipient: val => set(state => ({
    recipient: val
  }))
}));
const senderStore = external_zustand_default()(set => ({
  sender: {
    email: "",
    sfirstname: "",
    sphone: "",
    note: "",
    instructions: ""
  },
  setSender: val => set(state => ({
    sender: val
  }))
}));
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "yup-phone"
var external_yup_phone_ = __webpack_require__("3Tz2");

// CONCATENATED MODULE: ./components/checkout/recipientForm.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const useStyles = Object(styles_["makeStyles"])(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));
function RecipientForm() {
  const classes = useStyles();
  const activeStep = activeStepStore(state => state.activeStep);
  const setActiveStep = activeStepStore(state => state.setActiveStep);
  const steps = stepsStore(state => state.steps);
  const recipient = recipientStore(state => state.recipient);
  const setRecipient = recipientStore(state => state.setRecipient);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const CustomFirstName = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    required: true,
    id: "firstName",
    label: "First name",
    fullWidth: true,
    autoComplete: "given-name"
  }, props));

  const CustomLastName = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    required: true,
    id: "lastName",
    label: "Last name",
    fullWidth: true,
    autoComplete: "family-name"
  }, props));

  const CustomLocation = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    required: true,
    id: "address1",
    label: "Location/Address",
    fullWidth: true,
    autoComplete: "shipping address-line1"
  }, props));

  const CustomLocation2 = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    id: "address2",
    label: "Address line 2",
    fullWidth: true,
    autoComplete: "shipping address-line2"
  }, props));

  const CustomCity = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    required: true,
    id: "city",
    label: "City/Town",
    fullWidth: true,
    autoComplete: "shipping address-level2"
  }, props));

  const CustomRegion = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    required: true,
    id: "state",
    label: "Region",
    fullWidth: true
  }, props));

  const CustomPhone = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    required: true,
    id: "phone",
    label: "Phone number",
    fullWidth: true,
    autoComplete: "phone number",
    type: "tel"
  }, props));

  const CustomCalender = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, _objectSpread({
    id: "date",
    label: "Delivery date",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    fullWidth: true
  }, props));

  const RecipientSchema = external_yup_["object"]().shape({
    firstname: external_yup_["string"]().min(2, "First name should be of minimum 2 characters length").max(40, "First name should be of maximum 40 characters length").required("First name is required"),
    lastname: external_yup_["string"]().min(2, "Last name should be of minimum 2 characters length").max(40, "Last name should be of maximum 40 characters length").required("Last name is required"),
    location: external_yup_["string"]().min(2, "Location should be of minimum 2 characters length").max(80, "Location should be of maximum 80 characters length"),
    location2: external_yup_["string"]().min(2, "Address should be of minimum 2 characters length").max(40, "Address should be of maximum 40 characters length"),
    city: external_yup_["string"]().min(2, "City should be of minimum 2 characters length").max(25, "City should be of maximum 20 characters length").required("City is required"),
    region: external_yup_["string"]().min(2, "Region should be of minimum 2 characters length").max(40, "Region should be of maximum 40 characters length").required("Region is required"),
    phone: external_yup_["string"]().phone("GH", true, "Please provide a Ghanaian Phone Number").required("Phone number is required"),
    calender: external_yup_["date"]().required("Date of delivery is required")
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
      variant: "h6",
      gutterBottom: true,
      children: "Recipient Information"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
      initialValues: recipient,
      validationSchema: RecipientSchema,
      onSubmit: async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        setRecipient(values);
        handleNext();
      },
      children: ({
        errors,
        touched
      }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "calender",
              as: CustomCalender
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), errors.calender && touched.calender ? errors.calender : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "firstname",
              as: CustomFirstName
            }), errors.firstname && touched.firstname ? errors.firstname : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "lastname",
              as: CustomLastName
            }), errors.lastname && touched.lastname ? errors.lastname : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "location",
              as: CustomLocation
            }), errors.location && touched.location ? errors.location : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "location2",
              as: CustomLocation2
            }), errors.location2 && touched.location2 ? errors.location2 : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "city",
              as: CustomCity
            }), errors.city && touched.city ? errors.city : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "region",
              as: CustomRegion
            }), errors.region && touched.region ? errors.region : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "phone",
              as: CustomPhone
            }), errors.phone && touched.phone ? errors.phone : null]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.buttons,
          children: [activeStep !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
            onClick: handleBack,
            className: classes.button,
            children: "Back"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
            variant: "contained",
            color: "primary",
            className: classes.button,
            type: "submit",
            children: activeStep === steps.length - 1 ? "Proceed to payment" : "Next"
          })]
        })]
      })
    })]
  });
}
// CONCATENATED MODULE: ./components/checkout/senderForm.js




function senderForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function senderForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { senderForm_ownKeys(Object(source), true).forEach(function (key) { senderForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { senderForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function senderForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const senderForm_useStyles = Object(styles_["makeStyles"])(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));
function SenderForm() {
  const classes = senderForm_useStyles();
  const activeStep = activeStepStore(state => state.activeStep);
  const setActiveStep = activeStepStore(state => state.setActiveStep);
  const steps = stepsStore(state => state.steps);
  const sender = senderStore(state => state.sender);
  const setSender = senderStore(state => state.setSender);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const CustomFirstName = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, senderForm_objectSpread({
    required: true,
    id: "sfirstName",
    label: "First name",
    fullWidth: true,
    autoComplete: "given-name"
  }, props));

  const CustomNote = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, senderForm_objectSpread({
    id: "note",
    label: "Add a note",
    multiline: true,
    fullWidth: true,
    autoComplete: "add a note"
  }, props));

  const CustomInstructions = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, senderForm_objectSpread({
    id: "instruction",
    label: "Add instructions",
    multiline: true,
    fullWidth: true,
    autoComplete: "Add instructions"
  }, props));

  const CustomPhone = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, senderForm_objectSpread({
    required: true,
    id: "sphone",
    label: "Phone number",
    fullWidth: true,
    autoComplete: "phone number",
    type: "tel"
  }, props));

  const CustomEmail = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, senderForm_objectSpread({
    required: true,
    id: "email",
    label: "Email address",
    fullWidth: true,
    autoComplete: "email address",
    type: "email"
  }, props));

  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const SenderSchema = external_yup_["object"]().shape({
    sfirstname: external_yup_["string"]().min(2, "First name should be of minimum 2 characters length").max(40, "First name should be of maximum 40 characters length").required("First name is required"),
    note: external_yup_["string"]().min(10, "Note should be of minimum 10 characters length").max(280, "Note should be of maximum 280 characters length"),
    instructions: external_yup_["string"]().min(10, "Instructions should be of minimum 10 characters length").max(280, "Instructions should be of maximum 280 characters length"),
    sphone: external_yup_["string"]().matches(phoneRegExp, "Phone number is not valid"),
    email: external_yup_["string"]().email("Enter a valid email")
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
      variant: "h6",
      gutterBottom: true,
      children: "Sender Information"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
      initialValues: sender,
      validationSchema: SenderSchema,
      onSubmit: async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        setSender(values);
        handleNext();
      },
      children: ({
        errors,
        touched
      }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "email",
              as: CustomEmail
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), errors.email && touched.email ? errors.email : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "sfirstname",
              as: CustomFirstName
            }), errors.sfirstname && touched.sfirstname ? errors.firstname : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            sm: 6,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "sphone",
              as: CustomPhone
            }), errors.sphone && touched.sphone ? errors.sphone : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "note",
              as: CustomNote
            }), errors.note && touched.note ? errors.note : null]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Field"], {
              name: "instructions",
              as: CustomInstructions
            }), errors.instructions && touched.instructions ? errors.instructions : null]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.buttons,
          children: [activeStep !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
            onClick: handleBack,
            className: classes.button,
            children: "Back"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
            variant: "contained",
            color: "primary",
            className: classes.button,
            type: "submit",
            children: activeStep === steps.length - 1 ? "Proceed to payment" : "Next"
          })]
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: ./media/models/index.js + 1 modules
var models = __webpack_require__("hdPt");

// EXTERNAL MODULE: external "react-paystack"
var external_react_paystack_ = __webpack_require__("3S92");

// CONCATENATED MODULE: ./components/checkout/review.js




function review_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function review_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { review_ownKeys(Object(source), true).forEach(function (key) { review_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { review_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function review_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const review_useStyles = Object(styles_["makeStyles"])(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));
function Review() {
  const classes = review_useStyles();
  const activeStep = activeStepStore(state => state.activeStep);
  const setActiveStep = activeStepStore(state => state.setActiveStep);
  const steps = stepsStore(state => state.steps);
  const recipient = recipientStore(state => state.recipient);
  const sender = senderStore(state => state.sender);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])([]);
  const publicKey = "pk_live_dc752231bfcf577b0e2626cede5bda221f605179";

  const FetchData = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const data = [];
      await external_localforage_default.a.iterate(function (value, key, iterationNumber) {
        data.push(review_objectSpread({
          key
        }, value));
      });
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  Object(external_react_["useEffect"])(() => {
    FetchData();
  }, []);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let prices = [0, 0];
  data === null || data === void 0 ? void 0 : data.map(x => {
    prices.push(x[1]);
  });
  let totalPrice = prices === null || prices === void 0 ? void 0 : prices.reduce(reducer);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const extra = {
    paymentMade: false,
    trackOrder: `${recipient.firstname}-${sender.sfirstname}`
  };

  const mergeOrderDetails = review_objectSpread(review_objectSpread(review_objectSpread({}, recipient), sender), extra);

  const cartDetails = {
    trackOrder: `${recipient.firstname}-${sender.sfirstname}`,
    cart: JSON.stringify(data)
  };
  const componentProps = {
    email: sender.email,
    amount: totalPrice * 100,
    metadata: {
      name: sender.sfirstname,
      phone: sender.sphone
    },
    currency: "Ghs",
    publicKey,
    text: "Proceed to payment",
    onSuccess: () => PlaceOrder()
  };

  const ClearCart = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      external_localforage_default.a.clear().then(function () {
        console.log("Database is now empty.");
        location.replace("/success");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const PlaceOrder = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      await external_aws_amplify_["DataStore"].save(new models["c" /* Checkout */](mergeOrderDetails));
      await external_aws_amplify_["DataStore"].save(new models["b" /* Cart */](cartDetails));
      ClearCart();
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
      variant: "h6",
      gutterBottom: true,
      children: "Order summary"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(List_default.a, {
      disablePadding: true,
      children: [data.map((product, i) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ListItem_default.a, {
        className: classes.listItem,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItemText_default.a, {
          primary: product.key,
          secondary: `Quantity: ${product[0]}`
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
          variant: "body2",
          children: ["\u20B5", product[1]]
        })]
      }, i)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ListItem_default.a, {
        className: classes.listItem,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItemText_default.a, {
          primary: "Delivery"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
          variant: "body2",
          children: ["\u20B5", recipient.fee]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ListItem_default.a, {
        className: classes.listItem,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItemText_default.a, {
          primary: "Total"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
          variant: "subtitle1",
          className: classes.total,
          children: ["\u20B5", totalPrice + recipient.fee]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
      container: true,
      spacing: 2,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
        item: true,
        xs: 12,
        sm: 6,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
          variant: "h6",
          gutterBottom: true,
          className: classes.title,
          children: "Recipient"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
          gutterBottom: true,
          children: [recipient.firstname, " ", recipient.lastname]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
          gutterBottom: true,
          children: `${recipient.location} - ${recipient.location2 || recipient.city}`
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
        item: true,
        container: true,
        direction: "column",
        xs: 12,
        sm: 6,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
          variant: "h6",
          gutterBottom: true,
          className: classes.title,
          children: "Sender"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
          container: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
              gutterBottom: true,
              children: [sender.sfirstname, " ", sender.email, " ", sender.sphone]
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.buttons,
        children: [activeStep !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          onClick: handleBack,
          className: classes.button,
          children: "Back"
        }), activeStep === steps.length - 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_paystack_["PaystackButton"], review_objectSpread({
          className: "paystack-button"
        }, componentProps)) : null]
      })]
    })]
  });
}
// CONCATENATED MODULE: ./components/checkout/checkout.js
















const checkout_useStyles = Object(styles_["makeStyles"])(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

function getStepContent(step) {
  switch (step) {
    case 0:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(RecipientForm, {});

    case 1:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SenderForm, {});

    case 2:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Review, {});

    default:
      throw new Error("Unknown step");
  }
}

function CheckoutCompoent() {
  const classes = checkout_useStyles();
  const steps = stepsStore(state => state.steps);
  const activeStep = activeStepStore(state => state.activeStep);
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(0);

  const FetchCount = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const value = await external_localforage_default.a.length().then(function (numberOfKeys) {
        setCount(numberOfKeys);
      });
    } catch (err) {
      console.log(err);
    }
  };

  Object(external_react_["useEffect"])(() => {
    FetchCount();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: count !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
        className: classes.layout,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paper_default.a, {
          className: classes.paper,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
            component: "h1",
            variant: "h4",
            align: "center",
            children: "Checkout"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Stepper_default.a, {
            activeStep: activeStep,
            className: classes.stepper,
            children: steps.map(label => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Step_default.a, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(StepLabel_default.a, {
                children: label
              })
            }, label))
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
            children: activeStep === steps.length ? null : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
              children: getStepContent(activeStep)
            })
          })]
        })
      })]
    })
  });
}

/***/ }),

/***/ "hdPt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Cart; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ Checkout; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ Reviews; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Bouquets; });

// EXTERNAL MODULE: external "@aws-amplify/datastore"
var datastore_ = __webpack_require__("+Sgf");

// CONCATENATED MODULE: ./media/models/schema.js
const schema = {
  "models": {
    "Cart": {
      "name": "Cart",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "trackOrder": {
          "name": "trackOrder",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "cart": {
          "name": "cart",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "fetchOrder": {
          "name": "fetchOrder",
          "isArray": false,
          "type": {
            "model": "Checkout"
          },
          "isRequired": false,
          "attributes": [],
          "association": {
            "connectionType": "BELONGS_TO",
            "targetName": "cartFetchOrderId"
          }
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "Carts",
      "attributes": [{
        "type": "model",
        "properties": {}
      }, {
        "type": "auth",
        "properties": {
          "rules": [{
            "allow": "public",
            "operations": ["create", "update", "delete", "read"]
          }]
        }
      }]
    },
    "Checkout": {
      "name": "Checkout",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "firstname": {
          "name": "firstname",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "lastname": {
          "name": "lastname",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "calender": {
          "name": "calender",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "city": {
          "name": "city",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "email": {
          "name": "email",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "fee": {
          "name": "fee",
          "isArray": false,
          "type": "Int",
          "isRequired": false,
          "attributes": []
        },
        "insturctions": {
          "name": "insturctions",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "location": {
          "name": "location",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "location2": {
          "name": "location2",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "note": {
          "name": "note",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "phone": {
          "name": "phone",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "region": {
          "name": "region",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "sfisrtname": {
          "name": "sfisrtname",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "sphone": {
          "name": "sphone",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "paymentMade": {
          "name": "paymentMade",
          "isArray": false,
          "type": "Boolean",
          "isRequired": false,
          "attributes": []
        },
        "trackOrder": {
          "name": "trackOrder",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "Checkouts",
      "attributes": [{
        "type": "model",
        "properties": {}
      }, {
        "type": "auth",
        "properties": {
          "rules": [{
            "allow": "public",
            "operations": ["create", "update", "delete", "read"]
          }]
        }
      }]
    },
    "Reviews": {
      "name": "Reviews",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "name": {
          "name": "name",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "review": {
          "name": "review",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "Reviews",
      "attributes": [{
        "type": "model",
        "properties": {}
      }, {
        "type": "auth",
        "properties": {
          "rules": [{
            "allow": "public",
            "operations": ["create", "update", "delete", "read"]
          }]
        }
      }]
    },
    "Bouquets": {
      "name": "Bouquets",
      "fields": {
        "id": {
          "name": "id",
          "isArray": false,
          "type": "ID",
          "isRequired": true,
          "attributes": []
        },
        "img": {
          "name": "img",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "title": {
          "name": "title",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "description": {
          "name": "description",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "availability": {
          "name": "availability",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "amount": {
          "name": "amount",
          "isArray": false,
          "type": "Int",
          "isRequired": false,
          "attributes": []
        },
        "slug": {
          "name": "slug",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "tags": {
          "name": "tags",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "category": {
          "name": "category",
          "isArray": false,
          "type": "String",
          "isRequired": false,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        },
        "updatedAt": {
          "name": "updatedAt",
          "isArray": false,
          "type": "AWSDateTime",
          "isRequired": false,
          "attributes": [],
          "isReadOnly": true
        }
      },
      "syncable": true,
      "pluralName": "Bouquets",
      "attributes": [{
        "type": "model",
        "properties": {}
      }, {
        "type": "auth",
        "properties": {
          "rules": [{
            "allow": "public",
            "operations": ["create", "update", "delete", "read"]
          }]
        }
      }]
    }
  },
  "enums": {},
  "nonModels": {},
  "version": "a645fe686bfb80b153ef25da9c320481"
};
// CONCATENATED MODULE: ./media/models/index.js
// @ts-check


const {
  Cart,
  Checkout,
  Reviews,
  Bouquets
} = Object(datastore_["initSchema"])(schema);


/***/ })

};;