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

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__("vBmG");

// CONCATENATED MODULE: ./constants/books.ts
const DEFAULT_IMAGE = 'default-book.png';
// EXTERNAL MODULE: ./constants/viewer.ts
var viewer = __webpack_require__("7b7C");

// CONCATENATED MODULE: ./components/books/BookList.tsx
var __jsx = external_react_default.a.createElement;






const Container = external_styled_components_default.a.ul.withConfig({
  displayName: "BookList__Container",
  componentId: "sc-14s4gg1-0"
})([""]);
const CoverImage = external_styled_components_default.a.li.withConfig({
  displayName: "BookList__CoverImage",
  componentId: "sc-14s4gg1-1"
})(["width:10em;border:1px solid ", ";display:inline-block;margin:1em;vertical-align:bottom;cursor:grab;padding:0;& img{width:100%;user-select:none;}"], styles["b" /* subColor */]);

const BookList = ({
  books
}) => {
  const {
    0: bookList,
    1: setBookList
  } = Object(external_react_["useState"])(books);
  const {
    0: draggedItem,
    1: setDraggedItem
  } = Object(external_react_["useState"])(null);
  const openBook = Object(external_react_["useCallback"])(bookIndex => {
    const selectedBook = bookList[bookIndex];
    router_default.a.push({
      pathname: viewer["i" /* VIEWER_PATH_NAME */],
      query: {
        bookPath: encodeURI(selectedBook.publicPath)
      }
    });
  }, [bookList]);
  const dragStart = Object(external_react_["useCallback"])((e, index) => {
    setDraggedItem(bookList[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  }, [bookList]);
  const dragOver = Object(external_react_["useCallback"])((e, index) => {
    e.preventDefault();
    const draggedOverItem = bookList[index];

    if (draggedItem.publicPath === draggedOverItem.publicPath) {
      return;
    }

    const newSortedBooks = bookList.filter(item => item.publicPath !== draggedItem.publicPath);
    newSortedBooks.splice(index, 0, draggedItem);
    setBookList(newSortedBooks);
  }, [bookList, draggedItem]);
  const dragEnd = Object(external_react_["useCallback"])(e => {
    e.preventDefault();
  }, []);
  return __jsx(Container, null, bookList.map(({
    book,
    publicPath
  }, index) => __jsx(CoverImage, {
    onClick: () => openBook(index),
    onDragOver: e => dragOver(e, index),
    key: publicPath
  }, __jsx("img", {
    src: book.cover ? `${publicPath}/${book.cover.href}` : DEFAULT_IMAGE,
    draggable: true,
    onDragStart: e => dragStart(e, index),
    onDragEnd: dragEnd,
    alt: "Cover"
  }))));
};

/* harmony default export */ var books_BookList = (BookList);
// EXTERNAL MODULE: ./reducers/books.ts
var reducers_books = __webpack_require__("WIAH");

// EXTERNAL MODULE: ./lib/util.ts
var util = __webpack_require__("dTf1");

// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__("apO0");

// CONCATENATED MODULE: ./pages/index.tsx
var pages_jsx = external_react_default.a.createElement;







const Home = () => {
  const {
    list
  } = Object(external_react_redux_["useSelector"])(state => state.books);
  Object(external_react_["useEffect"])(() => {
    if (!list) {
      window.location.reload();
    }
  }, [list]);
  return pages_jsx(Layout["a" /* default */], null, list && pages_jsx(books_BookList, {
    books: list
  }));
}; // eslint-disable-next-line @typescript-eslint/unbound-method


Home.getInitialProps = async context => {
  const {
    req,
    store
  } = context;

  if (req) {
    const fs = __webpack_require__("mw/K");

    const {
      EpubParser
    } = __webpack_require__("GZPn");

    const files = fs.readdirSync('public/');
    const booksInfo = []; // eslint-disable-next-line no-restricted-syntax

    for (const file of files) {
      if (Object(util["c" /* isEpubFile */])(file)) {
        const [fileName] = file.split('.epub');
        const epubPath = `epub/${fileName}`;

        try {
          const {
            book,
            viewers
          } = await Object(util["a" /* getBookInfo */])(EpubParser, {
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

    store.dispatch(reducers_books["b" /* setBookList */](booksInfo));
  }
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GZPn":
/***/ (function(module, exports) {

module.exports = require("@ridi/epub-parser");

/***/ }),

/***/ "WIAH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export SET_BOOK_LIST */
/* unused harmony export SET_BOOK_STYLES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setBookList; });
/* unused harmony export setBookStyles */
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
/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, action) => {
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

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

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