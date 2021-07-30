exports.ids = [24];
exports.modules = {

/***/ "dj3a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AddOnsComponent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/ImageList"
var ImageList_ = __webpack_require__("/tu9");
var ImageList_default = /*#__PURE__*/__webpack_require__.n(ImageList_);

// EXTERNAL MODULE: external "@material-ui/core/ImageListItem"
var ImageListItem_ = __webpack_require__("3L9r");
var ImageListItem_default = /*#__PURE__*/__webpack_require__.n(ImageListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ImageListItemBar"
var ImageListItemBar_ = __webpack_require__("1al6");
var ImageListItemBar_default = /*#__PURE__*/__webpack_require__.n(ImageListItemBar_);

// EXTERNAL MODULE: external "@aws-amplify/datastore"
var datastore_ = __webpack_require__("+Sgf");

// EXTERNAL MODULE: ./media/models/index.js + 1 modules
var models = __webpack_require__("hdPt");

// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__("g8bt");

// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/src/effects/blur.css
var effects_blur = __webpack_require__("R3Vo");

// CONCATENATED MODULE: ./calls/fetchAddOns.js











const useStyles = Object(styles_["makeStyles"])(theme => ({
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.primary.white
  },
  titleBar: {
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));
function FetchAddOns() {
  const classes = useStyles();
  const {
    0: bouquets,
    1: setBouquets
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    fetchPosts();

    async function fetchPosts() {
      const bouquetsData = await datastore_["DataStore"].query(models["a" /* Bouquets */], item => item.or(item => item.category("contains", "add-on")), datastore_["Predicates"].ALL, {
        page: 0,
        limit: 18
      });
      setBouquets(bouquetsData);
    }

    const subscription = datastore_["DataStore"].observe(models["a" /* Bouquets */]).subscribe(() => fetchPosts());
    return () => subscription.unsubscribe();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageList_default.a, {
    className: classes.imageList,
    cols: 3,
    children: bouquets.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ImageListItem_default.a, {
      onClick: () => location.replace(`/bouquet/${item.slug}`),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_lazy_load_image_component_["LazyLoadImage"], {
        delayTime: 500,
        placeholderSrc: `https://res.cloudinary.com/deyudesls/image/upload/c_scale,q_100,w_200/v1627491504/flowersghana%20logo.webp`,
        effect: "blur",
        src: `https://res.cloudinary.com/deyudesls/image/upload/c_scale,h_516,w_387/${item.img}`,
        alt: item.title,
        className: "bottom-images"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageListItemBar_default.a, {
        title: item.title,
        classes: {
          root: classes.titleBar,
          title: classes.title
        }
      })]
    }, item.img))
  });
}
// CONCATENATED MODULE: ./components/staticpages/addOns.js




const addOns_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  }
}));
function AddOnsComponent() {
  const classes = addOns_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(FetchAddOns, {})
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