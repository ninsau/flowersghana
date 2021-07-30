exports.ids = [21];
exports.modules = {

/***/ "efXW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewsComponent; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IbbU");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fEgT");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1gBk");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("iTUb");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MbIc");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("0Jp5");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("fAuv");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _media_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("hdPt");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function ReviewsComponent() {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CustomName = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread({
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Your name",
    type: "text",
    variant: "outlined",
    fullWidth: true
  }, props));

  const CustomReview = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread({
    margin: "dense",
    multiline: true,
    id: "review",
    label: "Your review",
    type: "text",
    variant: "filled",
    fullWidth: true
  }, props));

  const ReviewSchema = yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().min(2, "Name should be of minimum 2 characters length").max(40, "Name should be of maximum 40 characters length").required("Name is required"),
    review: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().min(2, "Review should be of minimum 20 characters length").required("Please type out your review ")
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        variant: "outlined",
        onClick: handleClickOpen,
        children: "Add a review"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a, {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "form-dialog-title",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "form-dialog-title",
          children: "Add a review"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default.a, {
            children: "Share your experience shopping with FlowersGhana. Please reach our customer care lines with any complains you might have."
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
            validationSchema: ReviewSchema,
            initialValues: {
              name: "",
              review: ""
            },
            onSubmit: async values => {
              await new Promise(resolve => setTimeout(resolve, 500));
              await aws_amplify__WEBPACK_IMPORTED_MODULE_11__["DataStore"].save(new _media_models__WEBPACK_IMPORTED_MODULE_12__[/* Reviews */ "d"]({
                name: values.name,
                review: values.review
              }));
              handleClose();
            },
            children: ({
              errors,
              touched
            }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
                name: "name",
                as: CustomName
              }), errors.name && touched.name ? errors.name : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
                name: "review",
                as: CustomReview
              }), errors.review && touched.review ? errors.review : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  onClick: handleClose,
                  children: "Cancel"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  type: "submit",
                  color: "secondary",
                  children: "Publish"
                })]
              })]
            })
          })]
        })]
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