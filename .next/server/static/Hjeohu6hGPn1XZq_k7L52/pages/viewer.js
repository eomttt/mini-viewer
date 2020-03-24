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

/***/ "2N3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export INIT_VIEWER_STATE */
/* unused harmony export SET_VIEWER_COLUMN_COUNT_LIST */
/* unused harmony export SET_VIEWER_PAGE_COUNT */
/* unused harmony export SET_COUNT_UP_VIEWER_PAGE_COUNT */
/* unused harmony export SET_COUNT_DOWN_VIEWER_PAGE_COUNT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initViewerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setViewerCountList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setViewerPageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCountUpViewerPageCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCountDownViewerPageCount; });
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
/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, action) => {
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7je4");


/***/ }),

/***/ "4uiG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export SET_FONT_SIZE */
/* unused harmony export SET_WIDTH_RATIO */
/* unused harmony export SET_LINE_HEIGHT */
/* unused harmony export SET_BACKGROUND_COLOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setViewerSettingFontSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setViewerSettingWidthRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setViewerSettingLineHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setViewerSettingBackgroundColor; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vBmG");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7b7C");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  fontSize: _constants_viewer__WEBPACK_IMPORTED_MODULE_1__[/* FONT_SIZE_RANGE */ "b"].MIN,
  widthRatio: _constants_viewer__WEBPACK_IMPORTED_MODULE_1__[/* WIDTH_RATIO_RANGE */ "l"].MAX,
  lineHeight: _constants_viewer__WEBPACK_IMPORTED_MODULE_1__[/* LINE_HEIGHT_RANGE */ "c"].MIN,
  backgroundColor: _styles__WEBPACK_IMPORTED_MODULE_0__[/* defaultColor */ "a"]
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
/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, action) => {
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

/***/ "7b7C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return VIEWER_PATH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return VIEWER_WIDTH_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return VIEWER_HEIGHT_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VIEWER_PAGE_GAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return VIEWER_SLIDER_LEN_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SETTING_ITEM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SETTING_ITEM_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SETTING_ITEM_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FONT_SIZE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WIDTH_RATIO_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LINE_HEIGHT_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKGROUND_COLORS; });
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

/***/ "7je4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./reducers/viewer.ts
var reducers_viewer = __webpack_require__("2N3f");

// EXTERNAL MODULE: ./constants/viewer.ts
var constants_viewer = __webpack_require__("7b7C");

// CONCATENATED MODULE: ./components/viewer/ViewerSlider.tsx
var __jsx = external_react_default.a.createElement;





const Container = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSlider__Container",
  componentId: "sc-1bvmglt-0"
})(["width:100%;margin:auto 5%;flex-direction:column;display:flex;"]);
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "ViewerSlider__Input",
  componentId: "sc-1bvmglt-1"
})(["margin-left:", "%;width:", "%;cursor:grab;"], (100 - constants_viewer["j" /* VIEWER_SLIDER_LEN_RATIO */]) / 2, constants_viewer["j" /* VIEWER_SLIDER_LEN_RATIO */]);
const Marker = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSlider__Marker",
  componentId: "sc-1bvmglt-2"
})(["margin-left:", "%;"], (100 - constants_viewer["j" /* VIEWER_SLIDER_LEN_RATIO */]) / 2);

const ViewerSlider = ({
  maxValue
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(0);
  const {
    viewerPageCount
  } = Object(external_react_redux_["useSelector"])(state => state.viewer);
  const hasMaxValue = Object(external_react_["useMemo"])(() => !!maxValue, [maxValue]);
  Object(external_react_["useEffect"])(() => {
    setValue(viewerPageCount);
  }, [viewerPageCount]);
  const onChangeSlider = Object(external_react_["useCallback"])(e => {
    dispatch(reducers_viewer["f" /* setViewerPageCount */](Number(e.target.value)));
  }, [dispatch]);
  return __jsx(Container, null, hasMaxValue && __jsx(external_react_default.a.Fragment, null, __jsx(Marker, null, `${value}/${maxValue}`), __jsx(Input, {
    type: "range",
    min: "0",
    max: maxValue,
    value: value,
    onChange: onChangeSlider
  })));
};

/* harmony default export */ var viewer_ViewerSlider = (ViewerSlider);
// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__("vBmG");

// CONCATENATED MODULE: ./styles/viewer.ts



const ViewerMenu = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__ViewerMenu",
  componentId: "fvzlxv-0"
})(["width:100%;height:", "%;position:fixed;display:flex;border-top:1px solid ", ";border-bottom:1px solid ", ";background-color:", ";z-index:5;"], (100 - constants_viewer["g" /* VIEWER_HEIGHT_RATIO */]) / 2 - 1, styles["b" /* subColor */], styles["b" /* subColor */], styles["a" /* defaultColor */]);
const ViewerArticle = external_styled_components_default.a.article.withConfig({
  displayName: "viewer__ViewerArticle",
  componentId: "fvzlxv-1"
})(["box-sizing:border-box;visibility:visible;vertical-align:top;white-space:initial;display:inline-block;width:", "px;height:", "px;font-size:", "em;line-height:", "em;"], props => props.styleProps.width, props => props.styleProps.height, props => props.styleProps.fontSize, props => props.styleProps.lineHeight);
const ViewerSection = external_styled_components_default.a.section.withConfig({
  displayName: "viewer__ViewerSection",
  componentId: "fvzlxv-2"
})(["height:100%;column-gap:", "px;column-fill:auto;column-width:", "px;"], constants_viewer["h" /* VIEWER_PAGE_GAP */], props => props.styleProps.width);
const ViewerContents = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__ViewerContents",
  componentId: "fvzlxv-3"
})(["-webkit-appearance:none;-moz-appearance:none;appearance:none;"]);
const ViewerButton = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__ViewerButton",
  componentId: "fvzlxv-4"
})(["position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;"]);
const ViewerSettingItem = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__ViewerSettingItem",
  componentId: "fvzlxv-5"
})(["height:3em;text-align:center;padding:.4em;border-bottom:1px solid ", ";margin:0;display:flex;&:nth-last-child(1){border-bottom:initial;}"], styles["b" /* subColor */]);
const ViewerSettingLabel = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__ViewerSettingLabel",
  componentId: "fvzlxv-6"
})(["margin:auto .5em auto 0;"]);
const ViewerSettingValue = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__ViewerSettingValue",
  componentId: "fvzlxv-7"
})(["margin:auto auto auto 0;"]);
// CONCATENATED MODULE: ./components/viewer/ViewerBottom.tsx
var ViewerBottom_jsx = external_react_default.a.createElement;




const ViewerBottom_Container = external_styled_components_default()(ViewerMenu).withConfig({
  displayName: "ViewerBottom__Container",
  componentId: "djgv2d-0"
})(["bottom:0;"]);

const ViewerBottom = ({
  sliderMaxValue
}) => ViewerBottom_jsx(ViewerBottom_Container, null, ViewerBottom_jsx(viewer_ViewerSlider, {
  maxValue: sliderMaxValue
}));

/* harmony default export */ var viewer_ViewerBottom = (ViewerBottom);
// CONCATENATED MODULE: ./components/viewer/ViewerCount.tsx
var ViewerCount_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const HiddenArticle = external_styled_components_default()(ViewerArticle).withConfig({
  displayName: "ViewerCount__HiddenArticle",
  componentId: "sc-1llu6pn-0"
})(["overflow:scroll;"]);
const HiddenSection = external_styled_components_default()(ViewerSection).withConfig({
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
  const hiddenViewContainerRef = Object(external_react_["useRef"])(null);
  const hiddenViewSectionRef = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    if (viewerWidth) {
      const {
        current: hiddenViewContainerCurrent
      } = hiddenViewContainerRef;
      const count = hiddenViewContainerCurrent.scrollWidth / (viewerWidth + constants_viewer["h" /* VIEWER_PAGE_GAP */]);
      setCountCallback(count);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [viewerWidth]);
  return ViewerCount_jsx(HiddenArticle, {
    styleProps: _objectSpread({}, viewerStyle, {
      width: viewerWidth,
      height: viewerHeight
    }),
    ref: hiddenViewContainerRef
  }, ViewerCount_jsx(HiddenSection, {
    styleProps: {
      width: viewerWidth
    },
    ref: hiddenViewSectionRef
  }, ViewerCount_jsx(ViewerContents, {
    dangerouslySetInnerHTML: {
      __html: viewer
    }
  })));
};

/* harmony default export */ var viewer_ViewerCount = (ViewerCount);
// CONCATENATED MODULE: ./components/viewer/ViewerCalculator.tsx
var ViewerCalculator_jsx = external_react_default.a.createElement;

function ViewerCalculator_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ViewerCalculator_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ViewerCalculator_ownKeys(Object(source), true).forEach(function (key) { ViewerCalculator_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ViewerCalculator_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ViewerCalculator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PRIVATE_ADD_COUNT_ACTION = 'AddCount';
const initialState = {
  countItems: []
};

const privateReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRIVATE_ADD_COUNT_ACTION:
      {
        const data = action.payload;
        return ViewerCalculator_objectSpread({}, state, {
          countItems: [...state.countItems, data]
        });
      }

    default:
      {
        return ViewerCalculator_objectSpread({}, state);
      }
  }
};

const ViewerCalculator = ({
  viewerWidth,
  viewerHeight,
  viewers,
  spines
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: reducerState,
    1: dispatchReducer
  } = Object(external_react_["useReducer"])(privateReducer, initialState);
  const {
    fontSize,
    widthRatio,
    lineHeight
  } = Object(external_react_redux_["useSelector"])(state => state.viewerSetting);
  const setCountCallback = Object(external_react_["useCallback"])((count, index) => {
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
  Object(external_react_["useEffect"])(() => {
    const {
      countItems
    } = reducerState;

    if (countItems.length >= spines.length) {
      dispatch(reducers_viewer["e" /* setViewerCountList */](countItems));
    }
  }, [dispatch, reducerState, spines]);
  return ViewerCalculator_jsx(external_react_default.a.Fragment, null, viewers.map((viewer, index) => ViewerCalculator_jsx(viewer_ViewerCount, {
    key: viewer,
    viewerWidth: viewerWidth,
    viewerHeight: viewerHeight,
    viewer: viewer,
    viewerStyle: {
      fontSize,
      widthRatio,
      lineHeight
    },
    setCountCallback: count => setCountCallback(count, index)
  })));
};

/* harmony default export */ var viewer_ViewerCalculator = (ViewerCalculator);
// CONCATENATED MODULE: ./components/viewer/ViewerNcx.tsx
var ViewerNcx_jsx = external_react_default.a.createElement;





const ViewerNcx_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerNcx__Container",
  componentId: "q4ouf6-0"
})(["position:relative;"]);
const ToggleButton = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerNcx__ToggleButton",
  componentId: "q4ouf6-1"
})(["cursor:pointer;"]);
const NavPointItems = external_styled_components_default.a.ul.withConfig({
  displayName: "ViewerNcx__NavPointItems",
  componentId: "q4ouf6-2"
})(["position:absolute;width:10em;height:30em;left:50%;transform:translateX(-50%);overflow:scroll;list-style-type:none;margin:0;padding:0;border:1px solid ", ";background-color:", ";"], styles["b" /* subColor */], styles["a" /* defaultColor */]);
const NavPointItem = external_styled_components_default.a.li.withConfig({
  displayName: "ViewerNcx__NavPointItem",
  componentId: "q4ouf6-3"
})(["text-align:center;padding:2px;border-bottom:1px solid ", ";cursor:pointer;margin:0;&:nth-last-child(1){border-bottom:initial;}"], styles["b" /* subColor */]);

const ViewerNcx = ({
  ncxItem
}) => {
  const {
    navPoints
  } = ncxItem;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    viewerCountList
  } = Object(external_react_redux_["useSelector"])(state => state.viewer);
  const {
    0: isShowNcx,
    1: setIsShowNcx
  } = Object(external_react_["useState"])(false);
  const setViewerPage = Object(external_react_["useCallback"])(viewerSpineId => {
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
      dispatch(reducers_viewer["f" /* setViewerPageCount */](spinePageCount));
    }
  }, [dispatch, viewerCountList]);
  const toggleShowNcs = Object(external_react_["useCallback"])(() => {
    setIsShowNcx(!isShowNcx);
  }, [isShowNcx]);
  const selectNavPoint = Object(external_react_["useCallback"])(point => {
    setIsShowNcx(false);
    setViewerPage(point.spine.id);
  }, [setViewerPage]);
  return ViewerNcx_jsx(ViewerNcx_Container, null, ViewerNcx_jsx(ToggleButton, {
    onClick: toggleShowNcs
  }, "\uBAA9\uCC28"), isShowNcx && ViewerNcx_jsx(NavPointItems, null, navPoints.map(navPoint => ViewerNcx_jsx(NavPointItem, {
    onClick: () => selectNavPoint(navPoint),
    key: navPoint.label
  }, navPoint.label))));
};

/* harmony default export */ var viewer_ViewerNcx = (ViewerNcx);
// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/viewer/ViewerSettingCountItem.tsx
var ViewerSettingCountItem_jsx = external_react_default.a.createElement;





const Controller = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSettingCountItem__Controller",
  componentId: "sc-1rnr8mc-0"
})(["display:flex;width:30%;margin:auto 0 auto auto;border:1px solid ", ";border-radius:1em;padding-left:.3em;padding-right:.3em;"], styles["b" /* subColor */]);
const MinusButton = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSettingCountItem__MinusButton",
  componentId: "sc-1rnr8mc-1"
})(["width:50%;cursor:pointer;border-right:1px solid ", ""], styles["b" /* subColor */]);
const PlusButton = external_styled_components_default.a.div.withConfig({
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
  } = Object(external_react_["useState"])(value);
  const isIntegerNumber = Object(external_react_["useCallback"])(number => number % 1 === 0, []);
  const debounceAction = Object(external_react_["useCallback"])(external_lodash_debounce_default()(action, 400), [action]);
  const countUpValue = Object(external_react_["useCallback"])(() => {
    const expectedValue = Number(showValue) + valueUnit;

    if (expectedValue <= maxValue) {
      const newValue = isIntegerNumber(expectedValue) ? expectedValue : expectedValue.toFixed(1);
      setShowValue(newValue);
      debounceAction(newValue);
    } else {
      alert('변경 할 수 있는 최대값 입니다.');
    }
  }, [debounceAction, showValue, maxValue, valueUnit, isIntegerNumber]);
  const countDownValue = Object(external_react_["useCallback"])(() => {
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
  return ViewerSettingCountItem_jsx(ViewerSettingItem, null, ViewerSettingCountItem_jsx(ViewerSettingLabel, null, label), ViewerSettingCountItem_jsx(ViewerSettingValue, null, showValue), ViewerSettingCountItem_jsx(Controller, null, ViewerSettingCountItem_jsx(MinusButton, {
    onClick: countDownValue
  }, "-"), ViewerSettingCountItem_jsx(PlusButton, {
    onClick: countUpValue
  }, "+")));
};

/* harmony default export */ var viewer_ViewerSettingCountItem = (ViewerSettingCountItem);
// CONCATENATED MODULE: ./components/viewer/ViewerSettingColorItem.tsx
var ViewerSettingColorItem_jsx = external_react_default.a.createElement;




const ViewerSettingColorItem_Controller = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSettingColorItem__Controller",
  componentId: "sc-4drjko-0"
})(["display:flex;margin:auto 0 auto auto;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSettingColorItem__Content",
  componentId: "sc-4drjko-1"
})(["width:1em;height:1em;border:1px solid ", ";border-radius:50%;background-color:", " !important;cursor:pointer;margin:0 .2em;"], props => props.styleProps.isSelected ? 'black' : `${styles["b" /* subColor */]}`, props => props.styleProps.color);

const ViewerSettingColorItem = ({
  label,
  value,
  colors,
  action
}) => {
  const selectColor = Object(external_react_["useCallback"])(selectedColor => {
    action(selectedColor);
  }, [action]);
  return ViewerSettingColorItem_jsx(ViewerSettingItem, null, ViewerSettingColorItem_jsx(ViewerSettingLabel, null, label), ViewerSettingColorItem_jsx(ViewerSettingColorItem_Controller, null, colors.map(color => ViewerSettingColorItem_jsx(Content, {
    key: color,
    styleProps: {
      color,
      isSelected: color === value
    },
    onClick: () => selectColor(color)
  }))));
};

/* harmony default export */ var viewer_ViewerSettingColorItem = (ViewerSettingColorItem);
// EXTERNAL MODULE: ./reducers/viewerSetting.ts
var viewerSetting = __webpack_require__("4uiG");

// CONCATENATED MODULE: ./components/viewer/ViewerSetting.tsx
var ViewerSetting_jsx = external_react_default.a.createElement;








const ViewerSetting_Container = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSetting__Container",
  componentId: "sc-1omnhz6-0"
})(["position:relative;"]);
const ViewerSetting_ToggleButton = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerSetting__ToggleButton",
  componentId: "sc-1omnhz6-1"
})(["cursor:pointer;"]);
const SettingItems = external_styled_components_default.a.ul.withConfig({
  displayName: "ViewerSetting__SettingItems",
  componentId: "sc-1omnhz6-2"
})(["position:absolute;width:15em;left:50%;transform:translateX(-50%);overflow:scroll;list-style-type:none;margin:0;padding:0;border:1px solid ", ";background-color:", ";"], styles["b" /* subColor */], styles["a" /* defaultColor */]);

const ViewerSetting = () => {
  const {
    fontSize,
    widthRatio,
    lineHeight,
    backgroundColor
  } = Object(external_react_redux_["useSelector"])(state => state.viewerSetting);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: isShowSetting,
    1: setIsShowSetting
  } = Object(external_react_["useState"])(false);
  const {
    0: settingItems,
    1: setSettingItems
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    setSettingItems([{
      label: constants_viewer["e" /* SETTING_ITEM_LABEL */].FONT_SIZE,
      key: constants_viewer["d" /* SETTING_ITEM_KEY */].FONT_SIZE,
      value: fontSize,
      valueUnit: constants_viewer["f" /* SETTING_ITEM_UNIT */].FONT_SIZE,
      minValue: constants_viewer["b" /* FONT_SIZE_RANGE */].MIN,
      maxValue: constants_viewer["b" /* FONT_SIZE_RANGE */].MAX,
      action: value => {
        dispatch(viewerSetting["c" /* setViewerSettingFontSize */](value));
      }
    }, {
      label: constants_viewer["e" /* SETTING_ITEM_LABEL */].WIDTH_RATIO,
      key: constants_viewer["d" /* SETTING_ITEM_KEY */].WIDTH_RATIO,
      value: widthRatio,
      valueUnit: constants_viewer["f" /* SETTING_ITEM_UNIT */].WIDTH,
      minValue: constants_viewer["l" /* WIDTH_RATIO_RANGE */].MIN,
      maxValue: constants_viewer["l" /* WIDTH_RATIO_RANGE */].MAX,
      action: value => {
        dispatch(viewerSetting["e" /* setViewerSettingWidthRatio */](value));
      }
    }, {
      label: constants_viewer["e" /* SETTING_ITEM_LABEL */].LINE_HEIGHT,
      key: constants_viewer["d" /* SETTING_ITEM_KEY */].LINE_HEIGHT,
      value: lineHeight,
      valueUnit: constants_viewer["f" /* SETTING_ITEM_UNIT */].LINE_HEIGHT,
      minValue: constants_viewer["c" /* LINE_HEIGHT_RANGE */].MIN,
      maxValue: constants_viewer["c" /* LINE_HEIGHT_RANGE */].MAX,
      action: value => {
        dispatch(viewerSetting["d" /* setViewerSettingLineHeight */](value));
      }
    }, {
      label: constants_viewer["e" /* SETTING_ITEM_LABEL */].BACKGROUND_COLOR,
      key: constants_viewer["d" /* SETTING_ITEM_KEY */].BACKGROUND_COLOR,
      value: backgroundColor,
      colors: constants_viewer["a" /* BACKGROUND_COLORS */],
      action: value => {
        dispatch(viewerSetting["b" /* setViewerSettingBackgroundColor */](value));
      }
    }]);
  }, [dispatch, fontSize, widthRatio, lineHeight, backgroundColor]);
  const toggleShowNcs = Object(external_react_["useCallback"])(() => {
    setIsShowSetting(!isShowSetting);
  }, [isShowSetting]);
  const renderSettingItem = Object(external_react_["useCallback"])(settingItem => {
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
      return ViewerSetting_jsx(viewer_ViewerSettingColorItem, {
        key: key,
        label: label,
        value: value,
        colors: colors,
        action: action
      });
    }

    return ViewerSetting_jsx(viewer_ViewerSettingCountItem, {
      key: key,
      label: label,
      value: value,
      valueUnit: valueUnit,
      minValue: minValue,
      maxValue: maxValue,
      action: action
    });
  }, []);
  return ViewerSetting_jsx(ViewerSetting_Container, null, ViewerSetting_jsx(ViewerSetting_ToggleButton, {
    onClick: toggleShowNcs
  }, "\uC124\uC815"), isShowSetting && ViewerSetting_jsx(SettingItems, null, settingItems.map(settingItem => renderSettingItem(settingItem))));
};

/* harmony default export */ var viewer_ViewerSetting = (ViewerSetting);
// CONCATENATED MODULE: ./components/viewer/ViewerHeader.tsx
var ViewerHeader_jsx = external_react_default.a.createElement;






const ViewerHeader_Container = external_styled_components_default()(ViewerMenu).withConfig({
  displayName: "ViewerHeader__Container",
  componentId: "ym8won-0"
})(["top:0;"]);
const Info = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerHeader__Info",
  componentId: "ym8won-1"
})(["max-width:50%;white-space:nowrap;vertical-align:top;margin:auto auto auto 7em;"]);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerHeader__Title",
  componentId: "ym8won-2"
})(["width:100%;text-overflow:ellipsis;overflow:hidden;display:inline-block;font-size:", ";"], styles["c" /* titleFontSize */]);
const Author = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerHeader__Author",
  componentId: "ym8won-3"
})(["width:100%;text-overflow:ellipsis;overflow:hidden;"]);
const HeaderNcx = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerHeader__HeaderNcx",
  componentId: "ym8won-4"
})(["margin:auto 7em auto auto;"]);
const HeaderSetting = external_styled_components_default.a.div.withConfig({
  displayName: "ViewerHeader__HeaderSetting",
  componentId: "ym8won-5"
})(["margin:auto 7em auto 0;"]);

const ViewerHeader = ({
  titles,
  authors,
  ncxItem
}) => {
  const getString = Object(external_react_["useCallback"])(items => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, ''), []);
  return ViewerHeader_jsx(ViewerHeader_Container, null, ViewerHeader_jsx(Info, null, ViewerHeader_jsx(Title, null, getString(titles)), ViewerHeader_jsx(Author, null, getString(authors.map(authorItem => authorItem.name)))), ViewerHeader_jsx(HeaderNcx, null, ViewerHeader_jsx(viewer_ViewerNcx, {
    ncxItem: ncxItem
  })), ViewerHeader_jsx(HeaderSetting, null, ViewerHeader_jsx(viewer_ViewerSetting, null)));
};

/* harmony default export */ var viewer_ViewerHeader = (ViewerHeader);
// CONCATENATED MODULE: ./components/viewer/ViewerPage.tsx
var ViewerPage_jsx = external_react_default.a.createElement;

/* eslint-disable react/no-danger */






const Article = external_styled_components_default()(ViewerArticle).withConfig({
  displayName: "ViewerPage__Article",
  componentId: "sc-14mn4t-0"
})(["overflow:hidden;text-align:initial;"]);
const RightButton = external_styled_components_default()(ViewerButton).withConfig({
  displayName: "ViewerPage__RightButton",
  componentId: "sc-14mn4t-1"
})(["right:2em;"]);
const LeftButton = external_styled_components_default()(ViewerButton).withConfig({
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
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: nowViewerCount,
    1: setNowViewerCount
  } = Object(external_react_["useState"])(0);
  const {
    fontSize,
    widthRatio,
    lineHeight
  } = Object(external_react_redux_["useSelector"])(state => state.viewerSetting);
  const viewArticleRef = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    const {
      current: viewArticleRefCurrent
    } = viewArticleRef;
    viewArticleRefCurrent.scrollLeft = pageColumnOffset * (viewerWidth + constants_viewer["h" /* VIEWER_PAGE_GAP */]);
    setNowViewerCount(pageColumnOffset);
  }, [viewerSpine, pageColumnOffset, viewerWidth]);
  const clickRight = Object(external_react_["useCallback"])(() => {
    const {
      current: viewArticleRefCurrent
    } = viewArticleRef;
    setNowViewerCount(nowViewerCount + 1);
    viewArticleRefCurrent.scrollLeft += viewerWidth + constants_viewer["h" /* VIEWER_PAGE_GAP */];
    dispatch(reducers_viewer["d" /* setCountUpViewerPageCount */]());
  }, [dispatch, nowViewerCount, viewerWidth]);
  const clickLeft = Object(external_react_["useCallback"])(() => {
    const {
      current: viewArticleRefCurrent
    } = viewArticleRef;
    setNowViewerCount(nowViewerCount - 1);
    viewArticleRefCurrent.scrollLeft -= viewerWidth + constants_viewer["h" /* VIEWER_PAGE_GAP */];
    dispatch(reducers_viewer["c" /* setCountDownViewerPageCount */]());
  }, [dispatch, nowViewerCount, viewerWidth]);
  return ViewerPage_jsx(external_react_default.a.Fragment, null, ViewerPage_jsx(Article, {
    ref: viewArticleRef,
    onClick: clickRight,
    styleProps: {
      widthRatio,
      fontSize,
      lineHeight,
      width: viewerWidth,
      height: viewerHeight
    }
  }, ViewerPage_jsx(ViewerSection, {
    styleProps: {
      widthRatio,
      fontSize,
      lineHeight,
      width: viewerWidth,
      height: viewerHeight
    }
  }, ViewerPage_jsx(ViewerContents, {
    dangerouslySetInnerHTML: {
      __html: viewerSpine
    }
  }))), !isFirstPage && ViewerPage_jsx(LeftButton, {
    onClick: clickLeft
  }, "Left"), !isLastPage && ViewerPage_jsx(RightButton, {
    onClick: clickRight
  }, "Right"));
};

/* harmony default export */ var viewer_ViewerPage = (ViewerPage);
// EXTERNAL MODULE: ./lib/util.ts
var util = __webpack_require__("dTf1");

// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__("apO0");

// CONCATENATED MODULE: ./pages/viewer.tsx
var viewer_jsx = external_react_default.a.createElement;











const viewer_Container = external_styled_components_default.a.div.withConfig({
  displayName: "viewer__Container",
  componentId: "sc-1iklkx5-0"
})(["padding:", "% ", "%;height:", "px;background-color:", ";text-align:center;overflow:hidden;"], (100 - constants_viewer["g" /* VIEWER_HEIGHT_RATIO */]) / 2, (100 - constants_viewer["k" /* VIEWER_WIDTH_RATIO */]) / 2, props => props.styleProps.height, props => props.styleProps.backgroundColor);

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
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: viewerWidth,
    1: setViewerWidth
  } = Object(external_react_["useState"])(0);
  const {
    0: viewerHeight,
    1: setViewerHeight
  } = Object(external_react_["useState"])(0);
  const {
    0: nowSpineIndex,
    1: setNowSpineIndex
  } = Object(external_react_["useState"])(0);
  const {
    0: wholePageCount,
    1: setWholePageCount
  } = Object(external_react_["useState"])(0);
  const {
    viewerCountList,
    viewerPageCount
  } = Object(external_react_redux_["useSelector"])(state => state.viewer);
  const {
    fontSize,
    widthRatio,
    lineHeight,
    backgroundColor
  } = Object(external_react_redux_["useSelector"])(state => state.viewerSetting);
  const isAnalyzedSpine = Object(external_react_["useMemo"])(() => viewerCountList.length >= viewers.length, [viewerCountList, viewers]);
  const isFirstPage = Object(external_react_["useMemo"])(() => viewerPageCount === 0, [viewerPageCount]);
  const isLastPage = Object(external_react_["useMemo"])(() => viewerPageCount === wholePageCount, [viewerPageCount, wholePageCount]);
  const selectedSpineIndex = Object(external_react_["useMemo"])(() => {
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
  const pageColumnOffset = Object(external_react_["useMemo"])(() => {
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
  Object(external_react_["useEffect"])(() => {
    setViewerWidth(Math.floor(window.innerWidth * (constants_viewer["k" /* VIEWER_WIDTH_RATIO */] / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (constants_viewer["g" /* VIEWER_HEIGHT_RATIO */] / 100)));
    return () => {
      dispatch(reducers_viewer["b" /* initViewerState */]());
    };
  }, [dispatch]);
  Object(external_react_["useEffect"])(() => {
    console.log('Now spine index', selectedSpineIndex);
    setNowSpineIndex(selectedSpineIndex);
  }, [selectedSpineIndex]);
  Object(external_react_["useEffect"])(() => {
    if (isAnalyzedSpine) {
      console.log('Set whole page count');
      const pageCount = viewerCountList.reduce((acc, cur) => acc + cur.count, 0);
      setWholePageCount(pageCount - 1);
    }
  }, [isAnalyzedSpine, viewerCountList]);
  Object(external_react_["useEffect"])(() => {
    console.log('New style');
    dispatch(reducers_viewer["b" /* initViewerState */]());
  }, [dispatch, fontSize, lineHeight, widthRatio]);
  const calculateViewerWidth = Object(external_react_["useCallback"])((nowWidth, newRatio) => Math.floor(Number(nowWidth) * (Number(newRatio) / 100)), []);
  return viewer_jsx(Layout["a" /* default */], {
    styleText: styleText
  }, viewer_jsx(viewer_ViewerHeader, {
    titles: titles,
    authors: contributors,
    ncxItem: ncx
  }), viewer_jsx(viewer_Container, {
    styleProps: {
      height: viewerHeight,
      backgroundColor
    }
  }, isAnalyzedSpine && viewer_jsx(viewer_ViewerPage, {
    viewerWidth: calculateViewerWidth(viewerWidth, widthRatio),
    viewerHeight: viewerHeight,
    pageColumnOffset: pageColumnOffset,
    viewerSpine: viewers[nowSpineIndex],
    isFirstPage: isFirstPage,
    isLastPage: isLastPage
  }), !isAnalyzedSpine && viewer_jsx(viewer_ViewerCalculator, {
    viewerWidth: calculateViewerWidth(viewerWidth, widthRatio),
    viewerHeight: viewerHeight,
    spines: spines,
    viewers: viewers
  })), viewer_jsx(viewer_ViewerBottom, {
    sliderMaxValue: wholePageCount
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
    } = __webpack_require__("GZPn");

    const [, fileName] = queryPath.split('/');
    const publicPath = `http://${req.headers.host}/${queryPath}`;

    try {
      const {
        book,
        viewers
      } = await Object(util["a" /* getBookInfo */])(EpubParser, {
        epubFile: fileName,
        epubPath: queryPath
      });
      const styleText = await Object(util["b" /* getStyleText */])(publicPath, book.styles);
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
    const styleText = await Object(util["b" /* getStyleText */])(publicPath, book.styles);
    return {
      book,
      viewers,
      styleText
    };
  }
};

/* harmony default export */ var pages_viewer = __webpack_exports__["default"] = (Viewer);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GZPn":
/***/ (function(module, exports) {

module.exports = require("@ridi/epub-parser");

/***/ }),

/***/ "Q4dm":
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "apO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = ({
  children,
  styleText
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("style", null, styleText)), children);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dTf1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getBook */
/* unused harmony export getViewers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBookInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEpubFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStyleText; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "vBmG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return titleFontSize; });
const defaultColor = 'white';
const subColor = '#80808080';
const titleFontSize = '1.3em';

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });