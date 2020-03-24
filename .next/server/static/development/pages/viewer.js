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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  styleText
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, styleText)), children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/viewer/ViewerBottom.tsx":
/*!********************************************!*\
  !*** ./components/viewer/ViewerBottom.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ViewerSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewerSlider */ "./components/viewer/ViewerSlider.tsx");
/* harmony import */ var _styles_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/viewer */ "./styles/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerBottom.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerMenu"]).withConfig({
  displayName: "ViewerBottom__Container",
  componentId: "djgv2d-0"
})(["bottom:0;"]);

const ViewerBottom = ({
  sliderMaxValue
}) => __jsx(Container, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_ViewerSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
  maxValue: sliderMaxValue,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (ViewerBottom);

/***/ }),

/***/ "./components/viewer/ViewerCalculator.tsx":
/*!************************************************!*\
  !*** ./components/viewer/ViewerCalculator.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/viewer */ "./reducers/viewer.ts");
/* harmony import */ var _ViewerCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewerCount */ "./components/viewer/ViewerCount.tsx");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerCalculator.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PRIVATE_ADD_COUNT_ACTION = 'AddCount';
const initialState = {
  countItems: []
};

const privateReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_ADD_COUNT_ACTION:
      {
        const data = action.payload;
        return _objectSpread({}, state, {
          countItems: [...state.countItems, data]
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

const ViewerCalculator = ({
  viewerWidth,
  viewerHeight,
  viewers,
  spines
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: reducerState,
    1: dispatchReducer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(privateReducer, initialState);
  const {
    fontSize,
    widthRatio,
    lineHeight
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewerSetting);
  const setCountCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((count, index) => {
    const spine = spines[index];
    dispatchReducer({
      type: PRIVATE_ADD_COUNT_ACTION,
      payload: {
        index,
        count,
        spineId: spine.id
      }
    });
  }, [spines]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      countItems
    } = reducerState;

    if (countItems.length >= spines.length) {
      dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_2__["setViewerCountList"](countItems));
    }
  }, [dispatch, reducerState, spines]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, viewers.map((viewer, index) => __jsx(_ViewerCount__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: viewer,
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight,
    viewer: viewer,
    viewerStyle: {
      fontSize,
      widthRatio,
      lineHeight
    },
    setCountCallback: count => setCountCallback(count, index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerCalculator);

/***/ }),

/***/ "./components/viewer/ViewerCount.tsx":
/*!*******************************************!*\
  !*** ./components/viewer/ViewerCount.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/viewer */ "./styles/viewer.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/viewer */ "./constants/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerCount.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const HiddenArticle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_2__["ViewerArticle"]).withConfig({
  displayName: "ViewerCount__HiddenArticle",
  componentId: "sc-1llu6pn-0"
})(["overflow:scroll;"]);
const HiddenSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_2__["ViewerSection"]).withConfig({
  displayName: "ViewerCount__HiddenSection",
  componentId: "sc-1llu6pn-1"
})(["visibility:hidden;"]);

const ViewerCount = ({
  viewerWidth,
  viewerHeight,
  viewer,
  viewerStyle,
  setCountCallback
}) => {
  const hiddenViewContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const hiddenViewSectionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (viewerWidth) {
      const {
        current: hiddenViewContainerCurrent
      } = hiddenViewContainerRef;
      const count = hiddenViewContainerCurrent.scrollWidth / (viewerWidth + _constants_viewer__WEBPACK_IMPORTED_MODULE_3__["VIEWER_PAGE_GAP"]);
      setCountCallback(count);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [viewerWidth]);
  return __jsx(HiddenArticle, {
    styleProps: _objectSpread({}, viewerStyle, {
      width: viewerWidth,
      height: viewerHeight
    }),
    ref: hiddenViewContainerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(HiddenSection, {
    styleProps: {
      width: viewerWidth
    },
    ref: hiddenViewSectionRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_2__["ViewerContents"], {
    dangerouslySetInnerHTML: {
      __html: viewer
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerCount);

/***/ }),

/***/ "./components/viewer/ViewerHeader.tsx":
/*!********************************************!*\
  !*** ./components/viewer/ViewerHeader.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ViewerNcx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewerNcx */ "./components/viewer/ViewerNcx.tsx");
/* harmony import */ var _ViewerSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewerSetting */ "./components/viewer/ViewerSetting.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./styles/index.ts");
/* harmony import */ var _styles_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/viewer */ "./styles/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_5__["ViewerMenu"]).withConfig({
  displayName: "ViewerHeader__Container",
  componentId: "ym8won-0"
})(["top:0;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerHeader__Info",
  componentId: "ym8won-1"
})(["max-width:50%;white-space:nowrap;vertical-align:top;margin:auto auto auto 7em;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerHeader__Title",
  componentId: "ym8won-2"
})(["width:100%;text-overflow:ellipsis;overflow:hidden;display:inline-block;font-size:", ";"], _styles__WEBPACK_IMPORTED_MODULE_4__["titleFontSize"]);
const Author = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerHeader__Author",
  componentId: "ym8won-3"
})(["width:100%;text-overflow:ellipsis;overflow:hidden;"]);
const HeaderNcx = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerHeader__HeaderNcx",
  componentId: "ym8won-4"
})(["margin:auto 7em auto auto;"]);
const HeaderSetting = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerHeader__HeaderSetting",
  componentId: "ym8won-5"
})(["margin:auto 7em auto 0;"]);

const ViewerHeader = ({
  titles,
  authors,
  ncxItem
}) => {
  const getString = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(items => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, ''), []);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, getString(titles)), __jsx(Author, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, getString(authors.map(authorItem => authorItem.name)))), __jsx(HeaderNcx, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_ViewerNcx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ncxItem: ncxItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), __jsx(HeaderSetting, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_ViewerSetting__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerHeader);

/***/ }),

/***/ "./components/viewer/ViewerNcx.tsx":
/*!*****************************************!*\
  !*** ./components/viewer/ViewerNcx.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./styles/index.ts");
/* harmony import */ var _reducers_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/viewer */ "./reducers/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerNcx.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ViewerNcx__Container",
  componentId: "q4ouf6-0"
})(["position:relative;"]);
const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ViewerNcx__ToggleButton",
  componentId: "q4ouf6-1"
})(["cursor:pointer;"]);
const NavPointItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "ViewerNcx__NavPointItems",
  componentId: "q4ouf6-2"
})(["position:absolute;width:10em;height:30em;left:50%;transform:translateX(-50%);overflow:scroll;list-style-type:none;margin:0;padding:0;border:1px solid ", ";background-color:", ";"], _styles__WEBPACK_IMPORTED_MODULE_3__["subColor"], _styles__WEBPACK_IMPORTED_MODULE_3__["defaultColor"]);
const NavPointItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "ViewerNcx__NavPointItem",
  componentId: "q4ouf6-3"
})(["text-align:center;padding:2px;border-bottom:1px solid ", ";cursor:pointer;margin:0;&:nth-last-child(1){border-bottom:initial;}"], _styles__WEBPACK_IMPORTED_MODULE_3__["subColor"]);

const ViewerNcx = ({
  ncxItem
}) => {
  const {
    navPoints
  } = ncxItem;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    viewerCountList
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewer);
  const {
    0: isShowNcx,
    1: setIsShowNcx
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const setViewerPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(viewerSpineId => {
    // 목차에서 선택할 때에 pageCount 업데이트 해준다.
    let spineIndex = -1;
    let spinePageCount = 0;
    viewerCountList.some((viewrCount, index) => {
      if (viewrCount.spineId === viewerSpineId) {
        spineIndex = index;
        return true;
      }

      return false;
    });

    if (spineIndex > -1) {
      viewerCountList.some((viewerCount, index) => {
        if (index < spineIndex) {
          spinePageCount += viewerCount.count;
          return false;
        }

        return true;
      });
      dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_4__["setViewerPageCount"](spinePageCount));
    }
  }, [dispatch, viewerCountList]);
  const toggleShowNcs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsShowNcx(!isShowNcx);
  }, [isShowNcx]);
  const selectNavPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(point => {
    setIsShowNcx(false);
    setViewerPage(point.spine.id);
  }, [setViewerPage]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(ToggleButton, {
    onClick: toggleShowNcs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "\uBAA9\uCC28"), isShowNcx && __jsx(NavPointItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, navPoints.map(navPoint => __jsx(NavPointItem, {
    onClick: () => selectNavPoint(navPoint),
    key: navPoint.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, navPoint.label))));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerNcx);

/***/ }),

/***/ "./components/viewer/ViewerPage.tsx":
/*!******************************************!*\
  !*** ./components/viewer/ViewerPage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/viewer */ "./styles/viewer.ts");
/* harmony import */ var _reducers_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/viewer */ "./reducers/viewer.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/viewer */ "./constants/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react/no-danger */






const Article = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerArticle"]).withConfig({
  displayName: "ViewerPage__Article",
  componentId: "sc-14mn4t-0"
})(["overflow:hidden;text-align:initial;"]);
const RightButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerButton"]).withConfig({
  displayName: "ViewerPage__RightButton",
  componentId: "sc-14mn4t-1"
})(["right:2em;"]);
const LeftButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerButton"]).withConfig({
  displayName: "ViewerPage__LeftButton",
  componentId: "sc-14mn4t-2"
})(["left:2em;"]);

const ViewerPage = ({
  viewerWidth,
  viewerHeight,
  pageColumnOffset,
  viewerSpine,
  isFirstPage,
  isLastPage
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: nowViewerCount,
    1: setNowViewerCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    fontSize,
    widthRatio,
    lineHeight
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewerSetting);
  const viewArticleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      current: viewArticleRefCurrent
    } = viewArticleRef;
    viewArticleRefCurrent.scrollLeft = pageColumnOffset * (viewerWidth + _constants_viewer__WEBPACK_IMPORTED_MODULE_5__["VIEWER_PAGE_GAP"]);
    setNowViewerCount(pageColumnOffset);
  }, [viewerSpine, pageColumnOffset, viewerWidth]);
  const clickRight = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const {
      current: viewArticleRefCurrent
    } = viewArticleRef;
    setNowViewerCount(nowViewerCount + 1);
    viewArticleRefCurrent.scrollLeft += viewerWidth + _constants_viewer__WEBPACK_IMPORTED_MODULE_5__["VIEWER_PAGE_GAP"];
    dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_4__["setCountUpViewerPageCount"]());
  }, [dispatch, nowViewerCount, viewerWidth]);
  const clickLeft = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const {
      current: viewArticleRefCurrent
    } = viewArticleRef;
    setNowViewerCount(nowViewerCount - 1);
    viewArticleRefCurrent.scrollLeft -= viewerWidth + _constants_viewer__WEBPACK_IMPORTED_MODULE_5__["VIEWER_PAGE_GAP"];
    dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_4__["setCountDownViewerPageCount"]());
  }, [dispatch, nowViewerCount, viewerWidth]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Article, {
    ref: viewArticleRef,
    onClick: clickRight,
    styleProps: {
      widthRatio,
      fontSize,
      lineHeight,
      width: viewerWidth,
      height: viewerHeight
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerSection"], {
    styleProps: {
      widthRatio,
      fontSize,
      lineHeight,
      width: viewerWidth,
      height: viewerHeight
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerContents"], {
    dangerouslySetInnerHTML: {
      __html: viewerSpine
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }))), !isFirstPage && __jsx(LeftButton, {
    onClick: clickLeft,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Left"), !isLastPage && __jsx(RightButton, {
    onClick: clickRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Right"));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerPage);

/***/ }),

/***/ "./components/viewer/ViewerSetting.tsx":
/*!*********************************************!*\
  !*** ./components/viewer/ViewerSetting.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ViewerSettingCountItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewerSettingCountItem */ "./components/viewer/ViewerSettingCountItem.tsx");
/* harmony import */ var _ViewerSettingColorItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewerSettingColorItem */ "./components/viewer/ViewerSettingColorItem.tsx");
/* harmony import */ var _reducers_viewerSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/viewerSetting */ "./reducers/viewerSetting.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles */ "./styles/index.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/viewer */ "./constants/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerSetting.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ViewerSetting__Container",
  componentId: "sc-1omnhz6-0"
})(["position:relative;"]);
const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ViewerSetting__ToggleButton",
  componentId: "sc-1omnhz6-1"
})(["cursor:pointer;"]);
const SettingItems = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "ViewerSetting__SettingItems",
  componentId: "sc-1omnhz6-2"
})(["position:absolute;width:15em;left:50%;transform:translateX(-50%);overflow:scroll;list-style-type:none;margin:0;padding:0;border:1px solid ", ";background-color:", ";"], _styles__WEBPACK_IMPORTED_MODULE_6__["subColor"], _styles__WEBPACK_IMPORTED_MODULE_6__["defaultColor"]);

const ViewerSetting = () => {
  const {
    fontSize,
    widthRatio,
    lineHeight,
    backgroundColor
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewerSetting);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: isShowSetting,
    1: setIsShowSetting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: settingItems,
    1: setSettingItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSettingItems([{
      label: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_LABEL"].FONT_SIZE,
      key: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_KEY"].FONT_SIZE,
      value: fontSize,
      valueUnit: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_UNIT"].FONT_SIZE,
      minValue: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["FONT_SIZE_RANGE"].MIN,
      maxValue: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["FONT_SIZE_RANGE"].MAX,
      action: value => {
        dispatch(_reducers_viewerSetting__WEBPACK_IMPORTED_MODULE_5__["setViewerSettingFontSize"](value));
      }
    }, {
      label: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_LABEL"].WIDTH_RATIO,
      key: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_KEY"].WIDTH_RATIO,
      value: widthRatio,
      valueUnit: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_UNIT"].WIDTH,
      minValue: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["WIDTH_RATIO_RANGE"].MIN,
      maxValue: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["WIDTH_RATIO_RANGE"].MAX,
      action: value => {
        dispatch(_reducers_viewerSetting__WEBPACK_IMPORTED_MODULE_5__["setViewerSettingWidthRatio"](value));
      }
    }, {
      label: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_LABEL"].LINE_HEIGHT,
      key: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_KEY"].LINE_HEIGHT,
      value: lineHeight,
      valueUnit: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_UNIT"].LINE_HEIGHT,
      minValue: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["LINE_HEIGHT_RANGE"].MIN,
      maxValue: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["LINE_HEIGHT_RANGE"].MAX,
      action: value => {
        dispatch(_reducers_viewerSetting__WEBPACK_IMPORTED_MODULE_5__["setViewerSettingLineHeight"](value));
      }
    }, {
      label: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_LABEL"].BACKGROUND_COLOR,
      key: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["SETTING_ITEM_KEY"].BACKGROUND_COLOR,
      value: backgroundColor,
      colors: _constants_viewer__WEBPACK_IMPORTED_MODULE_7__["BACKGROUND_COLORS"],
      action: value => {
        dispatch(_reducers_viewerSetting__WEBPACK_IMPORTED_MODULE_5__["setViewerSettingBackgroundColor"](value));
      }
    }]);
  }, [dispatch, fontSize, widthRatio, lineHeight, backgroundColor]);
  const toggleShowNcs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsShowSetting(!isShowSetting);
  }, [isShowSetting]);
  const renderSettingItem = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(settingItem => {
    const {
      key,
      label,
      value,
      valueUnit,
      action,
      minValue,
      maxValue,
      colors
    } = settingItem;

    if (colors) {
      return __jsx(_ViewerSettingColorItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: key,
        label: label,
        value: value,
        colors: colors,
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: undefined
      });
    }

    return __jsx(_ViewerSettingCountItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: key,
      label: label,
      value: value,
      valueUnit: valueUnit,
      minValue: minValue,
      maxValue: maxValue,
      action: action,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: undefined
    });
  }, []);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(ToggleButton, {
    onClick: toggleShowNcs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "\uC124\uC815"), isShowSetting && __jsx(SettingItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, settingItems.map(settingItem => renderSettingItem(settingItem))));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerSetting);

/***/ }),

/***/ "./components/viewer/ViewerSettingColorItem.tsx":
/*!******************************************************!*\
  !*** ./components/viewer/ViewerSettingColorItem.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./styles/index.ts");
/* harmony import */ var _styles_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/viewer */ "./styles/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerSettingColorItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Controller = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerSettingColorItem__Controller",
  componentId: "sc-4drjko-0"
})(["display:flex;margin:auto 0 auto auto;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerSettingColorItem__Content",
  componentId: "sc-4drjko-1"
})(["width:1em;height:1em;border:1px solid ", ";border-radius:50%;background-color:", " !important;cursor:pointer;margin:0 .2em;"], props => props.styleProps.isSelected ? 'black' : `${_styles__WEBPACK_IMPORTED_MODULE_2__["subColor"]}`, props => props.styleProps.color);

const ViewerSettingColorItem = ({
  label,
  value,
  colors,
  action
}) => {
  const selectColor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(selectedColor => {
    action(selectedColor);
  }, [action]);
  return __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerSettingItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_3__["ViewerSettingLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, label), __jsx(Controller, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, colors.map(color => __jsx(Content, {
    key: color,
    styleProps: {
      color,
      isSelected: color === value
    },
    onClick: () => selectColor(color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerSettingColorItem);

/***/ }),

/***/ "./components/viewer/ViewerSettingCountItem.tsx":
/*!******************************************************!*\
  !*** ./components/viewer/ViewerSettingCountItem.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./styles/index.ts");
/* harmony import */ var _styles_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/viewer */ "./styles/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerSettingCountItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Controller = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerSettingCountItem__Controller",
  componentId: "sc-1rnr8mc-0"
})(["display:flex;width:30%;margin:auto 0 auto auto;border:1px solid ", ";border-radius:1em;padding-left:.3em;padding-right:.3em;"], _styles__WEBPACK_IMPORTED_MODULE_3__["subColor"]);
const MinusButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerSettingCountItem__MinusButton",
  componentId: "sc-1rnr8mc-1"
})(["width:50%;cursor:pointer;border-right:1px solid ", ""], _styles__WEBPACK_IMPORTED_MODULE_3__["subColor"]);
const PlusButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ViewerSettingCountItem__PlusButton",
  componentId: "sc-1rnr8mc-2"
})(["width:50%;cursor:pointer;"]);

const ViewerSettingCountItem = ({
  label,
  value,
  valueUnit,
  minValue,
  maxValue,
  action
}) => {
  const {
    0: showValue,
    1: setShowValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  const isIntegerNumber = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(number => number % 1 === 0, []);
  const debounceAction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(action, 400), [action]);
  const countUpValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const expectedValue = Number(showValue) + valueUnit;

    if (expectedValue <= maxValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);
      setShowValue(newValue);
      debounceAction(newValue);
    } else {
      alert('변경 할 수 있는 최대값 입니다.');
    }
  }, [debounceAction, showValue, maxValue, valueUnit, isIntegerNumber]);
  const countDownValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const expectedValue = Number(showValue) - valueUnit;

    if (expectedValue >= minValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);
      setShowValue(newValue);
      debounceAction(newValue);
      ;
    } else {
      alert('변경 할 수 있는 최소값 입니다.');
    }
  }, [debounceAction, showValue, minValue, valueUnit, isIntegerNumber]);
  return __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_4__["ViewerSettingItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_4__["ViewerSettingLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, label), __jsx(_styles_viewer__WEBPACK_IMPORTED_MODULE_4__["ViewerSettingValue"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, showValue), __jsx(Controller, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(MinusButton, {
    onClick: countDownValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, "-"), __jsx(PlusButton, {
    onClick: countUpValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "+")));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerSettingCountItem);

/***/ }),

/***/ "./components/viewer/ViewerSlider.tsx":
/*!********************************************!*\
  !*** ./components/viewer/ViewerSlider.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/viewer */ "./reducers/viewer.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/viewer */ "./constants/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/viewer/ViewerSlider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ViewerSlider__Container",
  componentId: "sc-1bvmglt-0"
})(["width:100%;margin:auto 5%;flex-direction:column;display:flex;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "ViewerSlider__Input",
  componentId: "sc-1bvmglt-1"
})(["margin-left:", "%;width:", "%;cursor:grab;"], (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_4__["VIEWER_SLIDER_LEN_RATIO"]) / 2, _constants_viewer__WEBPACK_IMPORTED_MODULE_4__["VIEWER_SLIDER_LEN_RATIO"]);
const Marker = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ViewerSlider__Marker",
  componentId: "sc-1bvmglt-2"
})(["margin-left:", "%;"], (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_4__["VIEWER_SLIDER_LEN_RATIO"]) / 2);

const ViewerSlider = ({
  maxValue
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    viewerPageCount
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewer);
  const hasMaxValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => !!maxValue, [maxValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(viewerPageCount);
  }, [viewerPageCount]);
  const onChangeSlider = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_3__["setViewerPageCount"](Number(e.target.value)));
  }, [dispatch]);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, hasMaxValue && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Marker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, `${value}/${maxValue}`), __jsx(Input, {
    type: "range",
    min: "0",
    max: maxValue,
    value: value,
    onChange: onChangeSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewerSlider);

/***/ }),

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

/***/ "./lib/util.ts":
/*!*********************!*\
  !*** ./lib/util.ts ***!
  \*********************/
/*! exports provided: getBook, getViewers, getBookInfo, isEpubFile, getStyleText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBook", function() { return getBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewers", function() { return getViewers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookInfo", function() { return getBookInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEpubFile", function() { return isEpubFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleText", function() { return getStyleText; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getBook = async (parser, {
  unzipPath
}) => {
  try {
    const book = await parser.parse({
      validatePackage: true,
      parseStyle: false,
      unzipPath
    });
    return book;
  } catch (error) {
    console.log('Get book error', error);
  }

  return null;
};
const getViewers = async (parser, {
  bookSpines,
  publicPath
}) => {
  try {
    const viewers = await parser.readItems(bookSpines, {
      force: true,
      extractBody: true,
      serializedAnchor: true,
      ignoreScript: true,
      basePath: publicPath
    });
    return viewers;
  } catch (error) {
    console.log('Get viewers error', error);
  }

  return [];
};
const getBookInfo = async (EpubParser, {
  epubFile,
  epubPath
}) => {
  const parser = new EpubParser(`public/${epubFile}.epub`);

  try {
    const book = await getBook(parser, {
      unzipPath: `public/${epubPath}`
    });

    if (book) {
      const viewers = await getViewers(parser, {
        bookSpines: book.spines,
        publicPath: epubPath
      });
      return {
        book,
        viewers
      };
    }
  } catch (error) {
    console.log('Get book info error', error);
  }

  return {
    book: null,
    viewers: []
  };
};
const isEpubFile = fileName => {
  return fileName.includes('.epub');
};
const getStyleText = async (publicPath, styles) => {
  const res = []; // eslint-disable-next-line no-restricted-syntax

  for (const style of styles) {
    try {
      const data = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${publicPath}/${style.href}`);
      res.push(data.data);
    } catch (error) {
      console.log('Get style text error', error);
    }
  }

  return res.join('');
};

/***/ }),

/***/ "./pages/viewer.tsx":
/*!**************************!*\
  !*** ./pages/viewer.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_viewer_ViewerBottom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/viewer/ViewerBottom */ "./components/viewer/ViewerBottom.tsx");
/* harmony import */ var _components_viewer_ViewerCalculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/viewer/ViewerCalculator */ "./components/viewer/ViewerCalculator.tsx");
/* harmony import */ var _components_viewer_ViewerHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/viewer/ViewerHeader */ "./components/viewer/ViewerHeader.tsx");
/* harmony import */ var _components_viewer_ViewerPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/viewer/ViewerPage */ "./components/viewer/ViewerPage.tsx");
/* harmony import */ var _reducers_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/viewer */ "./reducers/viewer.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/util */ "./lib/util.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/viewer */ "./constants/viewer.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/pages/viewer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "viewer__Container",
  componentId: "sc-1iklkx5-0"
})(["padding:", "% ", "%;height:", "px;background-color:", ";text-align:center;overflow:hidden;"], (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_9__["VIEWER_HEIGHT_RATIO"]) / 2, (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_9__["VIEWER_WIDTH_RATIO"]) / 2, props => props.styleProps.height, props => props.styleProps.backgroundColor);

const Viewer = ({
  book,
  viewers,
  styleText
}) => {
  const {
    spines,
    titles,
    ncx,
    contributors
  } = book;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: viewerWidth,
    1: setViewerWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: viewerHeight,
    1: setViewerHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: nowSpineIndex,
    1: setNowSpineIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: wholePageCount,
    1: setWholePageCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    viewerCountList,
    viewerPageCount
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewer);
  const {
    fontSize,
    widthRatio,
    lineHeight,
    backgroundColor
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.viewerSetting);
  const isAnalyzedSpine = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => viewerCountList.length >= viewers.length, [viewerCountList, viewers]);
  const isFirstPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => viewerPageCount === wholePageCount, [viewerPageCount, wholePageCount]);
  const selectedSpineIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let spineIndex = 0;
    let accurateCount = 0;
    viewerCountList.some(viewerCount => {
      if (accurateCount + viewerCount.count > viewerPageCount) {
        spineIndex = viewerCount.index;
        return true;
      }

      accurateCount += viewerCount.count;
      return false;
    });
    return spineIndex;
  }, [viewerPageCount, viewerCountList]);
  const pageColumnOffset = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    let columnOffset = viewerPageCount;
    viewerCountList.some((viewerCount, index) => {
      if (index < nowSpineIndex) {
        columnOffset -= viewerCount.count;
        return false;
      }

      return true;
    });
    return columnOffset;
  }, [viewerCountList, viewerPageCount, nowSpineIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setViewerWidth(Math.floor(window.innerWidth * (_constants_viewer__WEBPACK_IMPORTED_MODULE_9__["VIEWER_WIDTH_RATIO"] / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (_constants_viewer__WEBPACK_IMPORTED_MODULE_9__["VIEWER_HEIGHT_RATIO"] / 100)));
    return () => {
      dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_7__["initViewerState"]());
    };
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('Now spine index', selectedSpineIndex);
    setNowSpineIndex(selectedSpineIndex);
  }, [selectedSpineIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isAnalyzedSpine) {
      console.log('Set whole page count');
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      setWholePageCount(pageCount - 1);
    }
  }, [isAnalyzedSpine, viewerCountList]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('New style');
    dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_7__["initViewerState"]());
  }, [dispatch, fontSize, lineHeight, widthRatio]);
  const calculateViewerWidth = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((nowWidth, newRatio) => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)), []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    styleText: styleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_components_viewer_ViewerHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    titles: titles,
    authors: contributors,
    ncxItem: ncx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }), __jsx(Container, {
    styleProps: {
      height: viewerHeight,
      backgroundColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, isAnalyzedSpine && __jsx(_components_viewer_ViewerPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    viewerWidth: calculateViewerWidth(viewerWidth, widthRatio),
    viewerHeight: viewerHeight,
    pageColumnOffset: pageColumnOffset,
    viewerSpine: viewers[nowSpineIndex],
    isFirstPage: isFirstPage,
    isLastPage: isLastPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }), !isAnalyzedSpine && __jsx(_components_viewer_ViewerCalculator__WEBPACK_IMPORTED_MODULE_4__["default"], {
    viewerWidth: calculateViewerWidth(viewerWidth, widthRatio),
    viewerHeight: viewerHeight,
    spines: spines,
    viewers: viewers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  })), __jsx(_components_viewer_ViewerBottom__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sliderMaxValue: wholePageCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }));
}; // eslint-disable-next-line @typescript-eslint/unbound-method


Viewer.getInitialProps = async context => {
  const {
    req,
    store,
    query
  } = context;
  const {
    bookPath
  } = query;
  const queryPath = decodeURI(String(bookPath || 'epub/jikji'));

  if (req) {
    // Server side render
    const {
      EpubParser
    } = __webpack_require__(/*! @ridi/epub-parser */ "@ridi/epub-parser");

    const [, fileName] = queryPath.split('/');
    const publicPath = `http://${req.headers.host}/${queryPath}`;

    try {
      const {
        book,
        viewers
      } = await Object(_lib_util__WEBPACK_IMPORTED_MODULE_8__["getBookInfo"])(EpubParser, {
        epubFile: fileName,
        epubPath: queryPath
      });
      const styleText = await Object(_lib_util__WEBPACK_IMPORTED_MODULE_8__["getStyleText"])(publicPath, book.styles);
      return {
        book,
        viewers,
        styleText
      };
    } catch (error) {
      console.log('Error', error);
    }
  } else {
    // Client side render
    const {
      books
    } = store.getState();
    const {
      list
    } = books;
    let selectedBookInfo = list[0];
    list.some(bookInfo => {
      if (bookInfo.publicPath === queryPath) {
        selectedBookInfo = bookInfo;
        return true;
      }

      return false;
    });
    const {
      book,
      viewers,
      publicPath
    } = selectedBookInfo;
    const styleText = await Object(_lib_util__WEBPACK_IMPORTED_MODULE_8__["getStyleText"])(publicPath, book.styles);
    return {
      book,
      viewers,
      styleText
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Viewer);

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

/***/ "./styles/viewer.ts":
/*!**************************!*\
  !*** ./styles/viewer.ts ***!
  \**************************/
/*! exports provided: ViewerMenu, ViewerArticle, ViewerSection, ViewerContents, ViewerButton, ViewerSettingItem, ViewerSettingLabel, ViewerSettingValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerMenu", function() { return ViewerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerArticle", function() { return ViewerArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerSection", function() { return ViewerSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerContents", function() { return ViewerContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerButton", function() { return ViewerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerSettingItem", function() { return ViewerSettingItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerSettingLabel", function() { return ViewerSettingLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerSettingValue", function() { return ViewerSettingValue; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./styles/index.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/viewer */ "./constants/viewer.ts");



const ViewerMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewer__ViewerMenu",
  componentId: "fvzlxv-0"
})(["width:100%;height:", "%;position:fixed;display:flex;border-top:1px solid ", ";border-bottom:1px solid ", ";background-color:", ";z-index:5;"], (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_2__["VIEWER_HEIGHT_RATIO"]) / 2 - 1, _index__WEBPACK_IMPORTED_MODULE_1__["subColor"], _index__WEBPACK_IMPORTED_MODULE_1__["subColor"], _index__WEBPACK_IMPORTED_MODULE_1__["defaultColor"]);
const ViewerArticle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "viewer__ViewerArticle",
  componentId: "fvzlxv-1"
})(["box-sizing:border-box;visibility:visible;vertical-align:top;white-space:initial;display:inline-block;width:", "px;height:", "px;font-size:", "em;line-height:", "em;"], props => props.styleProps.width, props => props.styleProps.height, props => props.styleProps.fontSize, props => props.styleProps.lineHeight);
const ViewerSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "viewer__ViewerSection",
  componentId: "fvzlxv-2"
})(["height:100%;column-gap:", "px;column-fill:auto;column-width:", "px;"], _constants_viewer__WEBPACK_IMPORTED_MODULE_2__["VIEWER_PAGE_GAP"], props => props.styleProps.width);
const ViewerContents = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewer__ViewerContents",
  componentId: "fvzlxv-3"
})(["-webkit-appearance:none;-moz-appearance:none;appearance:none;"]);
const ViewerButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewer__ViewerButton",
  componentId: "fvzlxv-4"
})(["position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;"]);
const ViewerSettingItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewer__ViewerSettingItem",
  componentId: "fvzlxv-5"
})(["height:3em;text-align:center;padding:.4em;border-bottom:1px solid ", ";margin:0;display:flex;&:nth-last-child(1){border-bottom:initial;}"], _index__WEBPACK_IMPORTED_MODULE_1__["subColor"]);
const ViewerSettingLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewer__ViewerSettingLabel",
  componentId: "fvzlxv-6"
})(["margin:auto .5em auto 0;"]);
const ViewerSettingValue = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewer__ViewerSettingValue",
  componentId: "fvzlxv-7"
})(["margin:auto auto auto 0;"]);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/viewer.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hyuntaeeom/Projects/personal/mini-viewer/pages/viewer.tsx */"./pages/viewer.tsx");


/***/ }),

/***/ "@ridi/epub-parser":
/*!************************************!*\
  !*** external "@ridi/epub-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ridi/epub-parser");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=viewer.js.map