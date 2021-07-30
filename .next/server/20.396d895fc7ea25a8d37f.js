exports.ids = [20];
exports.modules = {

/***/ "+HB/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ HeaderComponent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__("IfcR");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingCartOutlined"
var ShoppingCartOutlined_ = __webpack_require__("wtZz");
var ShoppingCartOutlined_default = /*#__PURE__*/__webpack_require__.n(ShoppingCartOutlined_);

// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// EXTERNAL MODULE: ./cart/store.js
var store = __webpack_require__("TUxr");

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// EXTERNAL MODULE: external "@material-ui/core/TableContainer"
var TableContainer_ = __webpack_require__("5id3");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/HighlightOff"
var HighlightOff_ = __webpack_require__("nsCJ");
var HighlightOff_default = /*#__PURE__*/__webpack_require__.n(HighlightOff_);

// EXTERNAL MODULE: ./cart/snackbar.js
var snackbar = __webpack_require__("osTt");

// CONCATENATED MODULE: ./cart/shoppingCart.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const StyledTableCell = Object(styles_["withStyles"])(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell_default.a);
const StyledTableRow = Object(styles_["withStyles"])(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow_default.a);
const useStyles = Object(styles_["makeStyles"])({
  table: {
    minWidth: 500
  }
});
function ShoppingCartComponent() {
  const classes = useStyles();
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(0);
  const done = Object(store["c" /* stateStore */])(state => state.done);
  const {
    0: data,
    1: setData
  } = Object(external_react_["useState"])([]);
  const remove = Object(store["b" /* removeStore */])(state => state.done);
  const setRemove = Object(store["b" /* removeStore */])(state => state.setDone);
  const open = Object(store["a" /* cartIconStore */])(state => state.open);
  const setOpen = Object(store["a" /* cartIconStore */])(state => state.setOpen);

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
  }, [done, remove]);

  const ClearCart = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      external_localforage_default.a.clear().then(function () {
        console.log("Database is now empty.");
        location.reload("/");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const RemoveItem = async title => {
    try {
      external_localforage_default.a.removeItem(title);
    } catch (err) {
      console.log(err);
    }
  };

  Object(external_react_["useEffect"])(() => {
    RemoveItem(remove);
  }, [remove]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FetchData = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      const data = [];
      await external_localforage_default.a.iterate(function (value, key, iterationNumber) {
        data.push(_objectSpread({
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
  }, [done, remove]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let prices = [0, 0];
  data === null || data === void 0 ? void 0 : data.map(x => {
    prices.push(x[1]);
  });
  let totalPrice = prices === null || prices === void 0 ? void 0 : prices.reduce(reducer);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Badge_default.a, {
      badgeContent: count,
      onClick: handleClickOpen,
      color: "secondary",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShoppingCartOutlined_default.a, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog_default.a, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: [remove !== "" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(snackbar["a" /* default */], {
        message: "Item removed from cart"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContent_default.a, {
        children: data.length < 1 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            children: "Shopping cart is empty."
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogActions_default.a, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
              color: "secondary",
              onClick: handleClose,
              children: "Close"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
              href: "/category/popular",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
                color: "primary",
                children: "Start shopping"
              })
            })]
          })]
        }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogTitle_default.a, {
            id: "form-dialog-title",
            children: "Shopping Cart"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TableContainer_default.a, {
            component: Paper_default.a,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Table_default.a, {
              className: classes.table,
              "aria-label": "customized table",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TableHead_default.a, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TableRow_default.a, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: "Name"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: "Quantity"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: "Price\xA0(\u20B5)"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: "Remove"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TableBody_default.a, {
                children: data.map((row, i) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledTableRow, {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    component: "th",
                    scope: "row",
                    children: row.key
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: row[0]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: row[1]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledTableCell, {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HighlightOff_default.a, {
                      onClick: () => setRemove(row.key)
                    })
                  })]
                }, i))
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
            style: {
              margin: 20
            },
            variant: "h6",
            children: ["Total: \u20B5", totalPrice]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogActions_default.a, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
              onClick: handleClose,
              children: "Close"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
              onClick: ClearCart,
              children: "Clear Cart"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Link"], {
              href: "/checkout",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
                color: "secondary",
                children: "Checkout"
              })
            })]
          })]
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/navigation/header.js














const header_useStyles = Object(styles_["makeStyles"])(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));
const sections = [{
  title: "Reviews",
  url: "/reviews"
}, {
  title: "Featured",
  url: "/category/featured"
}, {
  title: "Popular",
  url: "/category/popular"
}, {
  title: "Birthday",
  url: "/category/birthday"
}, {
  title: "Budget",
  url: "/category/budget"
}, {
  title: "Roses",
  url: "/category/roses"
}, {
  title: "Sympathy",
  url: "/category/sympathy"
}, {
  title: "Anniversary",
  url: "/category/anniversary"
}, {
  title: "Add-Ons",
  url: "/category/add-on"
}];
function HeaderComponent() {
  const classes = header_useStyles();
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Toolbar_default.a, {
      className: classes.toolbar,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
        size: "small",
        href: "/",
        children: "FlowersGhana"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
        component: "h2",
        variant: "h5",
        color: "inherit",
        align: "center",
        noWrap: true,
        className: classes.toolbarTitle,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hidden_default.a, {
          smDown: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            href: "/",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.png",
              alt: "flowersghana logo",
              width: 200,
              height: 73
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
          color: "inherit",
          href: "/search/random",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search_default.a, {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(IconButton_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShoppingCartComponent, {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Toolbar_default.a, {
      component: "nav",
      variant: "dense",
      className: classes.toolbarSecondary,
      children: sections.map(section => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
        color: `${router.asPath === section.url ? "secondary" : "inherit"}`,
        noWrap: true,
        variant: "body2",
        href: section.url,
        className: classes.toolbarLink,
        children: section.title
      }, section.title))
    })]
  });
}

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

/***/ })

};;