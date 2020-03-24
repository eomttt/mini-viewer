module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/viewer.ts":
/*!*****************************!*\
  !*** ./constants/viewer.ts ***!
  \*****************************/
/*! exports provided: VIEWER_PATH_NAME, VIEWER_WIDTH_RATIO, VIEWER_HEIGHT_RATIO, VIEWER_PAGE_GAP, VIEWER_SLIDER_LEN_RATIO, SETTING_ITEM_KEY, SETTING_ITEM_LABEL, SETTING_ITEM_UNIT, FONT_SIZE_RANGE, WIDTH_RATIO_RANGE, LINE_HEIGHT_RANGE, BACKGROUND_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWER_PATH_NAME", function() { return VIEWER_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWER_WIDTH_RATIO", function() { return VIEWER_WIDTH_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWER_HEIGHT_RATIO", function() { return VIEWER_HEIGHT_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWER_PAGE_GAP", function() { return VIEWER_PAGE_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWER_SLIDER_LEN_RATIO", function() { return VIEWER_SLIDER_LEN_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_ITEM_KEY", function() { return SETTING_ITEM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_ITEM_LABEL", function() { return SETTING_ITEM_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTING_ITEM_UNIT", function() { return SETTING_ITEM_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZE_RANGE", function() { return FONT_SIZE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH_RATIO_RANGE", function() { return WIDTH_RATIO_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_HEIGHT_RANGE", function() { return LINE_HEIGHT_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_COLORS", function() { return BACKGROUND_COLORS; });
const VIEWER_PATH_NAME = '/viewer';
const VIEWER_WIDTH_RATIO = 70;
const VIEWER_HEIGHT_RATIO = 85;
const VIEWER_PAGE_GAP = 0;
const VIEWER_SLIDER_LEN_RATIO = 90;
const SETTING_ITEM_KEY = {
  FONT_SIZE: 'fontSize',
  WIDTH_RATIO: 'widthRatio',
  LINE_HEIGHT: 'lineHeight',
  BACKGROUND_COLOR: 'backgroundColor'
};
const SETTING_ITEM_LABEL = {
  FONT_SIZE: '글자 크기 (em)',
  WIDTH_RATIO: '문단 너비 (%)',
  LINE_HEIGHT: '줄 간격 (em)',
  BACKGROUND_COLOR: '배경색'
};
const SETTING_ITEM_UNIT = {
  FONT_SIZE: 0.1,
  WIDTH: 10,
  LINE_HEIGHT: 1
};
const FONT_SIZE_RANGE = {
  MIN: 1,
  MAX: 2
};
const WIDTH_RATIO_RANGE = {
  MIN: 50,
  MAX: 100
};
const LINE_HEIGHT_RANGE = {
  MIN: 1.5,
  MAX: 5
};
const BACKGROUND_COLORS = ['white', '#fff599', '#f7a0ac'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./store/index.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default()(_store__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp));

/***/ }),

/***/ "./reducers/books.ts":
/*!***************************!*\
  !*** ./reducers/books.ts ***!
  \***************************/
/*! exports provided: initialState, SET_BOOK_LIST, SET_BOOK_STYLES, setBookList, setBookStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BOOK_LIST", function() { return SET_BOOK_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BOOK_STYLES", function() { return SET_BOOK_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBookList", function() { return setBookList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBookStyles", function() { return setBookStyles; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  list: null,
  styles: []
}; // Action types

const SET_BOOK_LIST = 'books/SET_BOOK_LIST';
const SET_BOOK_STYLES = 'books/SET_BOOK_STYLES'; // Action creators

const setBookList = list => ({
  type: SET_BOOK_LIST,
  payload: {
    list
  }
});
const setBookStyles = styles => ({
  type: SET_BOOK_STYLES,
  payload: {
    styles
  }
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_BOOK_LIST:
      {
        const {
          list
        } = payload;
        return _objectSpread({}, state, {
          list: [...list]
        });
      }

    case SET_BOOK_STYLES:
      {
        const {
          styles
        } = payload;
        return _objectSpread({}, state, {
          styles: [...styles]
        });
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./reducers/index.ts":
/*!***************************!*\
  !*** ./reducers/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books */ "./reducers/books.ts");
/* harmony import */ var _viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer */ "./reducers/viewer.ts");
/* harmony import */ var _viewerSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewerSetting */ "./reducers/viewerSetting.ts");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  books: _books__WEBPACK_IMPORTED_MODULE_1__["default"],
  viewer: _viewer__WEBPACK_IMPORTED_MODULE_2__["default"],
  viewerSetting: _viewerSetting__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./reducers/viewer.ts":
/*!****************************!*\
  !*** ./reducers/viewer.ts ***!
  \****************************/
/*! exports provided: initialState, INIT_VIEWER_STATE, SET_VIEWER_COLUMN_COUNT_LIST, SET_VIEWER_PAGE_COUNT, SET_COUNT_UP_VIEWER_PAGE_COUNT, SET_COUNT_DOWN_VIEWER_PAGE_COUNT, initViewerState, setViewerCountList, setViewerPageCount, setCountUpViewerPageCount, setCountDownViewerPageCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_VIEWER_STATE", function() { return INIT_VIEWER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VIEWER_COLUMN_COUNT_LIST", function() { return SET_VIEWER_COLUMN_COUNT_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VIEWER_PAGE_COUNT", function() { return SET_VIEWER_PAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_UP_VIEWER_PAGE_COUNT", function() { return SET_COUNT_UP_VIEWER_PAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_DOWN_VIEWER_PAGE_COUNT", function() { return SET_COUNT_DOWN_VIEWER_PAGE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initViewerState", function() { return initViewerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewerCountList", function() { return setViewerCountList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewerPageCount", function() { return setViewerPageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountUpViewerPageCount", function() { return setCountUpViewerPageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountDownViewerPageCount", function() { return setCountDownViewerPageCount; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  viewerCountList: [],
  viewerPageCount: 0
}; // Action types

const INIT_VIEWER_STATE = 'viewer/INIT_VIEWER_STATE';
const SET_VIEWER_COLUMN_COUNT_LIST = 'viewer/SET_VIEWER_COLUMN_COUNT_LIST';
const SET_VIEWER_PAGE_COUNT = 'viewer/SET_VIEWER_PAGE_COUNT';
const SET_COUNT_UP_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT';
const SET_COUNT_DOWN_VIEWER_PAGE_COUNT = 'viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT'; // Action creators

const initViewerState = () => ({
  type: INIT_VIEWER_STATE
});
const setViewerCountList = countList => ({
  type: SET_VIEWER_COLUMN_COUNT_LIST,
  payload: {
    countList
  }
});
const setViewerPageCount = pageCount => ({
  type: SET_VIEWER_PAGE_COUNT,
  payload: {
    pageCount
  }
});
const setCountUpViewerPageCount = () => ({
  type: SET_COUNT_UP_VIEWER_PAGE_COUNT
});
const setCountDownViewerPageCount = () => ({
  type: SET_COUNT_DOWN_VIEWER_PAGE_COUNT
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case INIT_VIEWER_STATE:
      {
        return _objectSpread({}, state, {
          viewerCountList: [],
          viewerPageCount: 0
        });
      }

    case SET_VIEWER_COLUMN_COUNT_LIST:
      {
        const {
          countList
        } = payload;
        return _objectSpread({}, state, {
          viewerCountList: [...countList]
        });
      }

    case SET_VIEWER_PAGE_COUNT:
      {
        const {
          pageCount
        } = payload;
        return _objectSpread({}, state, {
          viewerPageCount: pageCount
        });
      }

    case SET_COUNT_UP_VIEWER_PAGE_COUNT:
      {
        return _objectSpread({}, state, {
          viewerPageCount: state.viewerPageCount + 1
        });
      }

    case SET_COUNT_DOWN_VIEWER_PAGE_COUNT:
      {
        return _objectSpread({}, state, {
          viewerPageCount: state.viewerPageCount - 1
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./reducers/viewerSetting.ts":
/*!***********************************!*\
  !*** ./reducers/viewerSetting.ts ***!
  \***********************************/
/*! exports provided: initialState, SET_FONT_SIZE, SET_WIDTH_RATIO, SET_LINE_HEIGHT, SET_BACKGROUND_COLOR, setViewerSettingFontSize, setViewerSettingWidthRatio, setViewerSettingLineHeight, setViewerSettingBackgroundColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FONT_SIZE", function() { return SET_FONT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_WIDTH_RATIO", function() { return SET_WIDTH_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LINE_HEIGHT", function() { return SET_LINE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BACKGROUND_COLOR", function() { return SET_BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewerSettingFontSize", function() { return setViewerSettingFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewerSettingWidthRatio", function() { return setViewerSettingWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewerSettingLineHeight", function() { return setViewerSettingLineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewerSettingBackgroundColor", function() { return setViewerSettingBackgroundColor; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ "./styles/index.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/viewer */ "./constants/viewer.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  fontSize: _constants_viewer__WEBPACK_IMPORTED_MODULE_1__["FONT_SIZE_RANGE"].MIN,
  widthRatio: _constants_viewer__WEBPACK_IMPORTED_MODULE_1__["WIDTH_RATIO_RANGE"].MAX,
  lineHeight: _constants_viewer__WEBPACK_IMPORTED_MODULE_1__["LINE_HEIGHT_RANGE"].MIN,
  backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_0__["defaultColor"]
}; // Action types

const SET_FONT_SIZE = 'viewerSetting/SET_FONT_SIZE';
const SET_WIDTH_RATIO = 'viewerSetting/SET_WIDTH_RATIO';
const SET_LINE_HEIGHT = 'viewerSetting/SET_LINE_HEIGHT';
const SET_BACKGROUND_COLOR = 'viewerSetting/SET_VIEWER_SETTING_BACKGROUND_COLOR'; // Action creators

const setViewerSettingFontSize = fontSize => ({
  type: SET_FONT_SIZE,
  payload: {
    fontSize
  }
});
const setViewerSettingWidthRatio = widthRatio => ({
  type: SET_WIDTH_RATIO,
  payload: {
    widthRatio
  }
});
const setViewerSettingLineHeight = lineHeight => ({
  type: SET_LINE_HEIGHT,
  payload: {
    lineHeight
  }
});
const setViewerSettingBackgroundColor = color => ({
  type: SET_BACKGROUND_COLOR,
  payload: {
    backgroundColor: color
  }
});
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  const {
    type,
    payload
  } = action;

  switch (type) {
    case SET_FONT_SIZE:
      {
        const {
          fontSize
        } = payload;
        return _objectSpread({}, state, {
          fontSize
        });
      }

    case SET_WIDTH_RATIO:
      {
        const {
          widthRatio
        } = payload;
        return _objectSpread({}, state, {
          widthRatio
        });
      }

    case SET_LINE_HEIGHT:
      {
        const {
          lineHeight
        } = payload;
        return _objectSpread({}, state, {
          lineHeight
        });
      }

    case SET_BACKGROUND_COLOR:
      {
        const {
          backgroundColor
        } = payload;
        return _objectSpread({}, state, {
          backgroundColor
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.ts");
/* eslint-disable @typescript-eslint/explicit-function-return-type */




const bindMiddleware = middleware => {
  if (true) {
    return Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

/* harmony default export */ __webpack_exports__["default"] = (initialState => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, bindMiddleware([])));

/***/ }),

/***/ "./styles/index.ts":
/*!*************************!*\
  !*** ./styles/index.ts ***!
  \*************************/
/*! exports provided: defaultColor, subColor, titleFontSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColor", function() { return defaultColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subColor", function() { return subColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleFontSize", function() { return titleFontSize; });
const defaultColor = 'white';
const subColor = '#80808080';
const titleFontSize = '1.3em';

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map