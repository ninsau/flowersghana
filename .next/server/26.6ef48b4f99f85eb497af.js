exports.ids = [26];
exports.modules = {

/***/ "pNlu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomEls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function CustomEls({
  URL
}) {
  // useRef to avoid re-renders
  const customEls = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"])(() => {
    if (customEls.current) {
      return;
    }

    const {
      setBasePath
    } = __webpack_require__("QaNC");

    setBasePath(`${URL}/static/static`); // This imports all components

    __webpack_require__("U2GT"); // If you want to selectively import components, replace this line with your own definitions
    // require("@shoelace-style/shoelace/dist/components/button/button");


    customEls.current = true;
  }, [URL, customEls]);
  return null;
}

/***/ })

};;