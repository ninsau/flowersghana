module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		5: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"20":"396d895fc7ea25a8d37f","23":"5cdfd4e195f589b572b9","24":"df790efac476940b091b","25":"cef78beeef8a8eedfa6f","26":"6ef48b4f99f85eb497af"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Sgf":
/***/ (function(module, exports) {

module.exports = require("@aws-amplify/datastore");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/tu9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ImageList");

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/themes/base.css
var base = __webpack_require__("DTlc");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: external "aws-amplify"
var external_aws_amplify_ = __webpack_require__("fAuv");

// CONCATENATED MODULE: ./media/aws-exports.js
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
const awsmobile = {
  "aws_project_region": "us-east-1",
  "aws_appsync_graphqlEndpoint": "https://eljsuiwhwbb5lp5lmre5eifzuu.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-lczxq44ndfajzcqwfnmz2gznii"
};
/* harmony default export */ var aws_exports = (awsmobile);
// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/navigation/head.js





function HeadComponent() {
  const router = Object(router_["useRouter"])();
  let urlPath = router.asPath;
  const title = {
    "/": "Send flowers to Ghana - Florist, Free Delivery | Flowers Ghana",
    "/about": "About Us | FlowersGhana",
    "/contact": "Contact Us | FlowersGhana",
    "/terms": "Terms & Conditions | FlowersGhana",
    "/privacy": "Privacy Policy | FlowersGhana",
    "/category/featured": "Featered Bouquets | FlowersGhana",
    "/category/popular": "Popular Bouquets | FlowersGhana",
    "/category/birthday": "Birthday Bouquets | FlowersGhana",
    "/category/budget": "Budget Friendly | FlowersGhana",
    "/category/roses": "Roses | FlowersGhana",
    "/reviews": "Customer Reviews | FlowersGhana",
    "/category/all": "All Bouquets | FlowersGhana",
    "/checkout": "Checkout | FlowersGhana",
    "/category/sympathy": "Sympathy Bouquets | FlowersGhana",
    "/category/florist-choice": "Florist's Choice | FlowersGhana",
    "/category/add-on": "Add-On Items | FlowersGhana",
    "/category/anniversary": "Anniversary Bouquets | FlowersGhana",
    "/cookies": "Cookie Policy | FlowersGhana",
    "/success": "Thank You! | FlowersGhana",
    "/contact-us": "Contact Us | FlowersGhana"
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: title[urlPath] != undefined ? `${title[urlPath]}` : "Page Not Found | FlowersGhana"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_50,w_50/v1626707839/flowersghanaLogo.webp",
        type: "image/png",
        sizes: "16x16"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        id: "viewport"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:url",
        content: "https://www.flowersghana.com/"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: `${title[urlPath]}`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:description",
        content: "Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:image",
        content: "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:url",
        content: "https://www.flowersghana.com/"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:title",
        content: `${title[urlPath]}`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:description",
        content: "Florist in Ghana, FlowerGhana delivers hand-crafted bouquets of FRESH flowers and plants in Ghana. SAME-DAY hand-delivery. Quality. Order online. Pay online."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "twitter:image",
        content: "https://res.cloudinary.com/deyudesls/image/upload/v1626707839/flowersghanaLogo.webp"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: "flowers, send flowers to Ghana, send flowers in Ghana, flower delivery, buy fresh flowers, rose flowers in Ghana, bouquet, flowers for sale, florist, bouquet of flowers, flowersghaha, flowers ghana, flower ghana, ghana flower, ghana flowers, gift flowers"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "copyright",
        content: "Copyright (c)2021 flowersghana.com"
      })]
    })
  });
}
// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












external_aws_amplify_["Amplify"].configure(_objectSpread(_objectSpread({}, aws_exports), {}, {
  ssr: true
}));

MyApp.getInitialProps = async context => {
  const URL = process.env.BASE_URL;
  return {
    URL
  };
};

function MyApp({
  Component,
  pageProps,
  URL
}) {
  const ScriptsComponent = dynamic_default()(() => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, "+zre")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("+zre")],
      modules: ["../components/navigation/scripts"]
    }
  });
  const CustomEls = dynamic_default()(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "pNlu")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("pNlu")],
      modules: ["../utils/shoelace"]
    }
  });
  const HeaderComponent = dynamic_default()(() => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "+HB/")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("+HB/")],
      modules: ["../components/navigation/header"]
    }
  });
  const FooterComponent = dynamic_default()(() => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "RV4C")), {
    loadableGenerated: {
      webpack: () => [/*require.resolve*/("RV4C")],
      modules: ["../components/navigation/footer"]
    }
  });
  const prefersDarkMode = useMediaQuery_default()("(prefers-color-scheme: dark)");
  const theme = external_react_default.a.useMemo(() => Object(styles_["createTheme"])({
    palette: {
      type: prefersDarkMode ? "dark" : "light"
    }
  }), [prefersDarkMode]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [ false && /*#__PURE__*/false, /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
      theme: theme,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeadComponent, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderComponent, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterComponent, {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScriptsComponent, {})]
    })]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "1al6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ImageListItemBar");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "3L9r":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ImageListItem");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5id3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "DTlc":
/***/ (function(module, exports) {



/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "QaNC":
/***/ (function(module, exports) {

module.exports = require("@shoelace-style/shoelace/dist/utilities/base-path");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "U2GT":
/***/ (function(module, exports) {

module.exports = require("@shoelace-style/shoelace/dist/shoelace");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "bp7c":
/***/ (function(module, exports) {

module.exports = require("zustand");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

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

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "nsCJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HighlightOff");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "wtZz":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCartOutlined");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });