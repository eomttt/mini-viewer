webpackHotUpdate("static/development/pages/viewer.js",{

/***/ "./pages/viewer.tsx":
/*!**************************!*\
  !*** ./pages/viewer.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_viewer_ViewerBottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/viewer/ViewerBottom */ "./components/viewer/ViewerBottom.tsx");
/* harmony import */ var _components_viewer_ViewerCalculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/viewer/ViewerCalculator */ "./components/viewer/ViewerCalculator.tsx");
/* harmony import */ var _components_viewer_ViewerHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/viewer/ViewerHeader */ "./components/viewer/ViewerHeader.tsx");
/* harmony import */ var _components_viewer_ViewerPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/viewer/ViewerPage */ "./components/viewer/ViewerPage.tsx");
/* harmony import */ var _reducers_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/viewer */ "./reducers/viewer.ts");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/util */ "./lib/util.ts");
/* harmony import */ var _constants_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/viewer */ "./constants/viewer.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");


var _jsxFileName = "/Users/hyuntaeeom/Projects/personal/mini-viewer/pages/viewer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "viewer__Container",
  componentId: "sc-1iklkx5-0"
})(["padding:", "% ", "%;height:", "px;background-color:", ";text-align:center;overflow:hidden;"], (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_11__["VIEWER_HEIGHT_RATIO"]) / 2, (100 - _constants_viewer__WEBPACK_IMPORTED_MODULE_11__["VIEWER_WIDTH_RATIO"]) / 2, function (props) {
  return props.styleProps.height;
}, function (props) {
  return props.styleProps.backgroundColor;
});

var Viewer = function Viewer(_ref) {
  var book = _ref.book,
      viewers = _ref.viewers,
      styleText = _ref.styleText;
  var spines = book.spines,
      titles = book.titles,
      ncx = book.ncx,
      contributors = book.contributors;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      viewerWidth = _useState[0],
      setViewerWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      viewerHeight = _useState2[0],
      setViewerHeight = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      nowSpineIndex = _useState3[0],
      setNowSpineIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      wholePageCount = _useState4[0],
      setWholePageCount = _useState4[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.viewer;
  }),
      viewerCountList = _useSelector.viewerCountList,
      viewerPageCount = _useSelector.viewerPageCount;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.viewerSetting;
  }),
      fontSize = _useSelector2.fontSize,
      widthRatio = _useSelector2.widthRatio,
      lineHeight = _useSelector2.lineHeight,
      backgroundColor = _useSelector2.backgroundColor;

  var isAnalyzedSpine = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return viewerCountList.length >= viewers.length;
  }, [viewerCountList, viewers]);
  var isFirstPage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return viewerPageCount === 0;
  }, [viewerPageCount]);
  var isLastPage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return viewerPageCount === wholePageCount;
  }, [viewerPageCount, wholePageCount]);
  var selectedSpineIndex = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var spineIndex = 0;
    var accurateCount = 0;
    viewerCountList.some(function (viewerCount) {
      if (accurateCount + viewerCount.count > viewerPageCount) {
        spineIndex = viewerCount.index;
        return true;
      }

      accurateCount += viewerCount.count;
      return false;
    });
    return spineIndex;
  }, [viewerPageCount, viewerCountList]);
  var pageColumnOffset = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var columnOffset = viewerPageCount;
    viewerCountList.some(function (viewerCount, index) {
      if (index < nowSpineIndex) {
        columnOffset -= viewerCount.count;
        return false;
      }

      return true;
    });
    return columnOffset;
  }, [viewerCountList, viewerPageCount, nowSpineIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setViewerWidth(Math.floor(window.innerWidth * (_constants_viewer__WEBPACK_IMPORTED_MODULE_11__["VIEWER_WIDTH_RATIO"] / 100)));
    setViewerHeight(Math.floor(window.innerHeight * (_constants_viewer__WEBPACK_IMPORTED_MODULE_11__["VIEWER_HEIGHT_RATIO"] / 100)));
    return function () {
      dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_9__["initViewerState"]());
    };
  }, [dispatch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log('Now spine index', selectedSpineIndex);
    setNowSpineIndex(selectedSpineIndex);
  }, [selectedSpineIndex]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isAnalyzedSpine) {
      console.log('Set whole page count');
      var pageCount = viewerCountList.reduce(function (acc, cur) {
        return acc + cur.count;
      }, 0);
      setWholePageCount(pageCount - 1);
    }
  }, [isAnalyzedSpine, viewerCountList]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log('New style');
    dispatch(_reducers_viewer__WEBPACK_IMPORTED_MODULE_9__["initViewerState"]());
  }, [dispatch, fontSize, lineHeight, widthRatio]);
  var calculateViewerWidth = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (nowWidth, newRatio) {
    return Math.floor(Number(nowWidth) * (Number(newRatio) / 100));
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    styleText: styleText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_components_viewer_ViewerHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    titles: titles,
    authors: contributors,
    ncxItem: ncx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(Container, {
    styleProps: {
      height: viewerHeight,
      backgroundColor: backgroundColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, isAnalyzedSpine && __jsx(_components_viewer_ViewerPage__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    __self: this
  }), !isAnalyzedSpine && __jsx(_components_viewer_ViewerCalculator__WEBPACK_IMPORTED_MODULE_6__["default"], {
    viewerWidth: calculateViewerWidth(viewerWidth, widthRatio),
    viewerHeight: viewerHeight,
    spines: spines,
    viewers: viewers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx(_components_viewer_ViewerBottom__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sliderMaxValue: wholePageCount,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }));
}; // eslint-disable-next-line @typescript-eslint/unbound-method


Viewer.getInitialProps = function _callee(context) {
  var req, store, query, bookPath, queryPath, _require, EpubParser, _queryPath$split, _queryPath$split2, fileName, publicPath, _ref2, book, viewers, styleText, _store$getState, books, list, selectedBookInfo, _selectedBookInfo, _book, _viewers, _publicPath, _styleText;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = context.req, store = context.store, query = context.query;
          bookPath = query.bookPath;
          queryPath = decodeURI(String(bookPath || 'epub/jikji'));

          if (!req) {
            _context.next = 24;
            break;
          }

          // Server side render
          _require = __webpack_require__(/*! @ridi/epub-parser */ "./node_modules/@ridi/epub-parser/lib/index.js"), EpubParser = _require.EpubParser;
          _queryPath$split = queryPath.split('/'), _queryPath$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_queryPath$split, 2), fileName = _queryPath$split2[1];
          publicPath = "http://".concat(req.headers.host, "/").concat(queryPath);
          _context.prev = 7;
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_util__WEBPACK_IMPORTED_MODULE_10__["getBookInfo"])(EpubParser, {
            epubFile: fileName,
            epubPath: queryPath
          }));

        case 10:
          _ref2 = _context.sent;
          book = _ref2.book;
          viewers = _ref2.viewers;
          _context.next = 15;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_util__WEBPACK_IMPORTED_MODULE_10__["getStyleText"])(publicPath, book.styles));

        case 15:
          styleText = _context.sent;
          return _context.abrupt("return", {
            book: book,
            viewers: viewers,
            styleText: styleText
          });

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](7);
          console.log('Error', _context.t0);

        case 22:
          _context.next = 33;
          break;

        case 24:
          // Client side render
          _store$getState = store.getState(), books = _store$getState.books;
          list = books.list;
          selectedBookInfo = list[0];
          list.some(function (bookInfo) {
            if (bookInfo.publicPath === queryPath) {
              selectedBookInfo = bookInfo;
              return true;
            }

            return false;
          });
          _selectedBookInfo = selectedBookInfo, _book = _selectedBookInfo.book, _viewers = _selectedBookInfo.viewers, _publicPath = _selectedBookInfo.publicPath;
          _context.next = 31;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_lib_util__WEBPACK_IMPORTED_MODULE_10__["getStyleText"])(_publicPath, _book.styles));

        case 31:
          _styleText = _context.sent;
          return _context.abrupt("return", {
            book: _book,
            viewers: _viewers,
            styleText: _styleText
          });

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 19]], Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Viewer);

/***/ })

})
//# sourceMappingURL=viewer.js.bb30c18f368a8eb76018.hot-update.js.map