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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./components/books/BookList.tsx":
/*!***************************************!*\
  !*** ./components/books/BookList.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./styles/index.ts");
/* harmony import */ var _constants_books__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/books */ "./constants/books.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/viewer */ "./constants/viewer.ts");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/components/books/BookList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul``;
const CoverImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li`
  width: 10em;
  border: 1px solid ${_styles__WEBPACK_IMPORTED_MODULE_3__["subColor"]};
  display: inline-block;
  margin: 1em;
  vertical-align: bottom;
  cursor: grab;
  padding: 0;
  & img {
    width: 100%;
    user-select: none;
  }
`;

const BookList = ({
  books
}) => {
  const {
    0: bookList,
    1: setBookList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(books);
  const {
    0: draggedItem,
    1: setDraggedItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const openBook = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(bookIndex => {
    const selectedBook = bookList[bookIndex];
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
      pathname: _constants_viewer__WEBPACK_IMPORTED_MODULE_5__["VIEWER_PATH_NAME"],
      query: {
        bookPath: encodeURI(selectedBook.publicPath)
      }
    });
  }, [bookList]);
  const dragStart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((e, index) => {
    setDraggedItem(bookList[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }, [bookList]);
  const dragOver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((e, index) => {
    e.preventDefault();
    const draggedOverItem = bookList[index];

    if (draggedItem.publicPath === draggedOverItem.publicPath) {
      return;
    }

    const newSortedBooks = bookList.filter(item => item.publicPath !== draggedItem.publicPath);
    newSortedBooks.splice(index, 0, draggedItem);
    setBookList(newSortedBooks);
  }, [bookList, draggedItem]);
  const dragEnd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    e.preventDefault();
  }, []);
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, bookList.map(({
    book,
    publicPath
  }, index) => __jsx(CoverImage, {
    onClick: () => openBook(index),
    onDragOver: e => dragOver(e, index),
    key: publicPath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("img", {
    src: book.cover ? `${publicPath}/${book.cover.href}` : _constants_books__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_IMAGE"],
    draggable: true,
    onDragStart: e => dragStart(e, index),
    onDragEnd: dragEnd,
    alt: "Cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BookList);

/***/ }),

/***/ "./constants/books.ts":
/*!****************************!*\
  !*** ./constants/books.ts ***!
  \****************************/
/*! exports provided: DEFAULT_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_IMAGE", function() { return DEFAULT_IMAGE; });
const DEFAULT_IMAGE = 'default-book.png';

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_books_BookList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/books/BookList */ "./components/books/BookList.tsx");
/* harmony import */ var _reducers_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/books */ "./reducers/books.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/util */ "./lib/util.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = () => {
  const {
    list
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.books);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!list) {
      window.location.reload();
    }
  }, [list]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, list && __jsx(_components_books_BookList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    books: list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }));
}; // eslint-disable-next-line @typescript-eslint/unbound-method


Home.getInitialProps = async context => {
  const {
    req,
    store
  } = context;

  if (req) {
    const fs = __webpack_require__(/*! fs */ "fs");

    const {
      EpubParser
    } = __webpack_require__(/*! @ridi/epub-parser */ "@ridi/epub-parser");

    const files = fs.readdirSync('public/');
    const booksInfo = []; // eslint-disable-next-line no-restricted-syntax

    for (const file of files) {
      if (Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["isEpubFile"])(file)) {
        const [fileName] = file.split('.epub');
        const epubPath = `epub/${fileName}`;

        try {
          const {
            book,
            viewers
          } = await Object(_lib_util__WEBPACK_IMPORTED_MODULE_4__["getBookInfo"])(EpubParser, {
            epubFile: fileName,
            epubPath
          });
          booksInfo.push({
            book,
            viewers,
            publicPath: epubPath
          });
        } catch (error) {
          console.log('Error index.', error);
        }
      }
    }

    store.dispatch(_reducers_books__WEBPACK_IMPORTED_MODULE_3__["setBookList"](booksInfo));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hyuntaeeom/Projects/personal/mini-viewer/pages/index.tsx */"./pages/index.tsx");


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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=index.js.map