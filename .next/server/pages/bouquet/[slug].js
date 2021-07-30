module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Sgf":
/***/ (function(module, exports) {

module.exports = require("@aws-amplify/datastore");

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GXH2");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXH2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CategoryContent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./media/models/index.js + 1 modules
var models = __webpack_require__("hdPt");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/loader/backdrop.js
var backdrop = __webpack_require__("huYs");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/CardHeader"
var CardHeader_ = __webpack_require__("bXgj");
var CardHeader_default = /*#__PURE__*/__webpack_require__.n(CardHeader_);

// EXTERNAL MODULE: external "@material-ui/icons/FileCopyOutlined"
var FileCopyOutlined_ = __webpack_require__("Lt9D");
var FileCopyOutlined_default = /*#__PURE__*/__webpack_require__.n(FileCopyOutlined_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: ./cart/addToCart.js
var addToCart = __webpack_require__("PI1L");

// EXTERNAL MODULE: ./components/utils/custom404.js
var custom404 = __webpack_require__("lExk");

// EXTERNAL MODULE: ./cart/snackbar.js
var snackbar = __webpack_require__("osTt");

// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__("g8bt");

// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/src/effects/blur.css
var effects_blur = __webpack_require__("R3Vo");

// CONCATENATED MODULE: ./calls/bouquetDetails.js





















function BouquetDetails() {
  const router = Object(router_["useRouter"])();
  let slug = router.query.slug;
  const {
    0: bouquets,
    1: setBouquets
  } = Object(external_react_["useState"])([]);
  const {
    0: returned,
    1: setReturned
  } = Object(external_react_["useState"])(true);
  const {
    0: copy,
    1: setCopy
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    fetchPosts();

    async function fetchPosts() {
      const bouquetsData = await external_aws_amplify_["DataStore"].query(models["a" /* Bouquets */], item => item.slug("eq", slug));

      if (bouquetsData.length < 1) {
        setReturned(false);
      } else {
        setBouquets(bouquetsData);
      }
    }

    const subscription = external_aws_amplify_["DataStore"].observe(models["a" /* Bouquets */]).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);

  const Copied = url => {
    navigator.clipboard.writeText(`https://www.flowersghana.com/bouquet/${url}`);
    setCopy("copied");
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [bouquets.length < 1 && returned === true && /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(backdrop["a" /* default */], {})
    }), bouquets.length < 1 && returned === false && /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(custom404["a" /* default */], {})
    }), copy !== "" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(snackbar["a" /* default */], {
      message: "Copied!"
    }), bouquets.map((item, i) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
            children: [item.title, " | FlowersGhana"]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          m: 4,
          item: true,
          xs: 12,
          md: 5,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CardHeader_default.a, {
            title: item.title,
            subheader: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Chip"], {
              label: `₵${item.amount}`,
              color: "secondary"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["CardContent"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazy_load_image_component_["LazyLoadImage"], {
              slot: "image",
              delayTime: 500,
              placeholderSrc: `https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp`,
              effect: "blur",
              src: `https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,w_387/${item.img}`,
              alt: item.title,
              className: "lazy"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Tags:", " ", item.tags.split(",").map(tag => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("sl-badge", {
                type: "info",
                children: [" ", tag, " "]
              }))]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: ["Copy link:", /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
                "aria-label": "share",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FileCopyOutlined_default.a, {
                  color: copy !== '' ? 'secondary' : 'inherit',
                  onClick: () => Copied(item.slug)
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: item.availability
            })]
          })]
        }, Math.random()), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          item: true,
          xs: 12,
          md: 7,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
            children: "Description"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            paragraph: true,
            children: item.description
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
            item: true,
            xs: 12,
            md: 4,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(addToCart["a" /* default */], {
              itemTitle: item.title,
              itemPrice: item.amount
            })]
          }, Math.random()), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("sl-details", {
            summary: "What do we do if exact item is not available?",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "If the exact flowers, plants, or container you have selected is unavailable, we will create a beautiful bouquet with the freshest available plants or flowers. Only items of equal or higher value will be substituted."
            })
          })]
        }, Math.random())]
      });
    })]
  });
}
// CONCATENATED MODULE: ./pages/bouquet/[slug].js





const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
function CategoryContent() {
  const classes = useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.root,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
        container: true,
        spacing: 1,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
          container: true,
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BouquetDetails, {})
        })
      })
    })
  });
}

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Lt9D":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FileCopyOutlined");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "PI1L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCartComponent; });
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("wiMN");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("TUxr");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function AddToCartComponent({
  itemTitle,
  itemPrice
}) {
  const setDone = Object(_store__WEBPACK_IMPORTED_MODULE_13__[/* stateStore */ "c"])(state => state.setDone);
  const done = Object(_store__WEBPACK_IMPORTED_MODULE_13__[/* stateStore */ "c"])(state => state.done);
  const remove = Object(_store__WEBPACK_IMPORTED_MODULE_13__[/* removeStore */ "b"])(state => state.done);
  const {
    0: success,
    1: setSuccess
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  let path = router.asPath;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Quantity = props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread({
    margin: "dense",
    label: "Quantity",
    type: "number",
    variant: "outlined",
    fullWidth: true
  }, props));

  const QuantitySchema = yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
    quantity: yup__WEBPACK_IMPORTED_MODULE_10__["number"]().min(1, "Minimum quantity is 1").max(1000, "Maximum quantity is 1000").required("Quantity is required")
  });

  const FetchSuccess = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const value = await localforage__WEBPACK_IMPORTED_MODULE_12___default.a.getItem(itemTitle).then(function (value) {
        setSuccess(value);
      });
    } catch (err) {
      console.log(err);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    FetchSuccess();
  }, [done, remove]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [success === null ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("sl-button", {
      class: "add",
      type: path.includes("/bouquet/") ? "success" : null,
      onClick: handleClickOpen,
      children: "Add to cart"
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("sl-button", {
      class: "add",
      disabled: true,
      children: "Item added"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "form-dialog-title",
        children: itemTitle
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: ["Please choose the quantity of ", itemTitle, " you want for your purchase today."]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
          validationSchema: QuantitySchema,
          initialValues: {
            quantity: 1,
            title: itemTitle,
            price: itemPrice
          },
          onSubmit: async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            let netPrice = values.price * values.quantity;

            try {
              localforage__WEBPACK_IMPORTED_MODULE_12___default.a.setItem(values.title, [values.quantity, netPrice]);
              setDone(!done);
              handleClose();
            } catch (err) {
              console.log(err);
            }
          },
          children: ({
            errors,
            touched
          }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
              name: "quantity",
              as: Quantity
            }), errors.quantity && touched.quantity ? errors.quantity : null, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
                onClick: handleClose,
                children: "Cancel"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
                type: "submit",
                color: "secondary",
                children: "Add to cart"
              })]
            })]
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "R3Vo":
/***/ (function(module, exports) {



/***/ }),

/***/ "TUxr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return stateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cartIconStore; });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bp7c");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand__WEBPACK_IMPORTED_MODULE_0__);

const stateStore = zustand__WEBPACK_IMPORTED_MODULE_0___default()(set => ({
  done: false,
  setDone: val => set(state => ({
    done: val
  }))
}));
const removeStore = zustand__WEBPACK_IMPORTED_MODULE_0___default()(set => ({
  done: '',
  setDone: val => set(state => ({
    done: val
  }))
}));
const cartIconStore = zustand__WEBPACK_IMPORTED_MODULE_0___default()(set => ({
  open: false,
  setOpen: val => set(state => ({
    open: val
  }))
}));

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "bXgj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "bp7c":
/***/ (function(module, exports) {

module.exports = require("zustand");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fAuv":
/***/ (function(module, exports) {

module.exports = require("aws-amplify");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "g8bt":
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

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


/***/ }),

/***/ "huYs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackdropComponent; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vxx+");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  transform: 'translateZ(0)',
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    background: '#000'
  }
}));
function BackdropComponent() {
  const classes = useStyles();
  const {
    0: open
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.backdrop,
      open: open,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3___default.a, {
        color: "inherit"
      })
    })
  });
}

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "lExk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Custom404Component; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: 50
  }
}));
function Custom404Component() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("sl-responsive-media", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "https://res.cloudinary.com/deyudesls/image/upload/v1627493038/404%20image.webp",
              alt: "A train riding through autumn foliage with mountains in the distance."
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          container: true,
          spacing: 0,
          direction: "column",
          alignItems: "center",
          justify: "center",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            variant: "h6",
            color: "textSecondary",
            component: "p",
            style: {
              margin: 30
            },
            children: "404: This page or item does not exist. Please check your link and try with a different parameter."
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "osTt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleSnackbar; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("D4mc");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("j08L");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TUxr");









function SimpleSnackbar({
  message
}) {
  const [opens, setOpens] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const open = Object(_store__WEBPACK_IMPORTED_MODULE_6__[/* cartIconStore */ "a"])(state => state.open);
  const setOpen = Object(_store__WEBPACK_IMPORTED_MODULE_6__[/* cartIconStore */ "a"])(state => state.setOpen);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpens(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      open: opens,
      autoHideDuration: 6000,
      onClose: handleClose,
      message: message,
      action: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
          size: "small",
          "aria-label": "close",
          color: "inherit",
          onClick: handleClose,
          children: [message === "Item has been added to cart" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
            color: "secondary",
            size: "small",
            onClick: () => setOpen(true),
            children: "View"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
            fontSize: "small"
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "vxx+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });