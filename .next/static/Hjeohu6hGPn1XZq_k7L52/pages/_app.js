(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(t,e,n){n("74v/"),t.exports=n("nOHt")},"1OyB":function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},"2N3f":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return s})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return l}));var r=n("KQm4"),o=n("rePB");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={viewerCountList:[],viewerPageCount:0},a=function(){return{type:"viewer/INIT_VIEWER_STATE"}},p=function(t){return{type:"viewer/SET_VIEWER_COLUMN_COUNT_LIST",payload:{countList:t}}},s=function(t){return{type:"viewer/SET_VIEWER_PAGE_COUNT",payload:{pageCount:t}}},f=function(){return{type:"viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT"}},l=function(){return{type:"viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT"}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case"viewer/INIT_VIEWER_STATE":return u({},t,{viewerCountList:[],viewerPageCount:0});case"viewer/SET_VIEWER_COLUMN_COUNT_LIST":var i=o.countList;return u({},t,{viewerCountList:Object(r.a)(i)});case"viewer/SET_VIEWER_PAGE_COUNT":var a=o.pageCount;return u({},t,{viewerPageCount:a});case"viewer/SET_COUNT_UP_VIEWER_PAGE_COUNT":return u({},t,{viewerPageCount:t.viewerPageCount+1});case"viewer/SET_COUNT_DOWN_VIEWER_PAGE_COUNT":return u({},t,{viewerPageCount:t.viewerPageCount-1});default:return u({},t)}}},"4uiG":function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return y})),n.d(e,"b",(function(){return b}));var r=n("rePB"),o=n("vBmG"),i=n("7b7C");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var a={fontSize:i.b.MIN,widthRatio:i.l.MAX,lineHeight:i.c.MIN,backgroundColor:o.a},p="viewerSetting/SET_FONT_SIZE",s="viewerSetting/SET_VIEWER_SETTING_BACKGROUND_COLOR",f=function(t){return{type:p,payload:{fontSize:t}}},l=function(t){return{type:"viewerSetting/SET_WIDTH_RATIO",payload:{widthRatio:t}}},y=function(t){return{type:"viewerSetting/SET_LINE_HEIGHT",payload:{lineHeight:t}}},b=function(t){return{type:s,payload:{backgroundColor:t}}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case p:var o=r.fontSize;return c({},t,{fontSize:o});case"viewerSetting/SET_WIDTH_RATIO":var i=r.widthRatio;return c({},t,{widthRatio:i});case"viewerSetting/SET_LINE_HEIGHT":var u=r.lineHeight;return c({},t,{lineHeight:u});case s:var f=r.backgroundColor;return c({},t,{backgroundColor:f});default:return c({},t)}}},"5HXA":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},"74v/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),u=n("Nsbk"),c=n("7W2i"),a=n("o0o1"),p=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=b,e.default=void 0;var s=p(n("q1tI")),f=n("g/15");function l(t){var e,n,r;return a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.Component,n=t.ctx,o.next=3,a.awrap((0,f.loadGetInitialProps)(e,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}e.AppInitialProps=f.AppInitialProps;var y=function(t){function e(){return r(this,e),i(this,u(e).apply(this,arguments))}return c(e,t),o(e,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,i=t.__N_SSP;return s.default.createElement(n,Object.assign({},r,o||i?{}:{url:b(e)}))}}]),e}(s.default.Component);function b(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=y,y.origGetInitialProps=l,y.getInitialProps=l},Ji7U:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return o}))},WIAH:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var r=n("KQm4"),o=n("rePB");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={list:null,styles:[]},a=function(t){return{type:"books/SET_BOOK_LIST",payload:{list:t}}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0,n=e.type,o=e.payload;switch(n){case"books/SET_BOOK_LIST":var i=o.list;return u({},t,{list:Object(r.a)(i)});case"books/SET_BOOK_STYLES":var a=o.styles;return u({},t,{styles:Object(r.a)(a)});default:return t}}},cha2:function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),i=n("1OyB"),u=n("vuIU"),c=n("md7G"),a=n("foSv"),p=n("Ji7U"),s=n("q1tI"),f=n.n(s),l=n("/MKj"),y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},O=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(e){i(e)}}function c(t){try{a(r.throw(t))}catch(e){i(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))},d=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},v=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n},w={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(t){return t},deserializeState:function(t){return t}},_=n("8Bbg"),g=n.n(_),h=n("KQm4"),E=n("ANjH"),S=(n("5HXA"),n("WIAH")),P=n("2N3f"),T=n("4uiG"),j=Object(E.combineReducers)({books:S.a,viewer:P.a,viewerSetting:T.a}),m=f.a.createElement,I=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.props,e=t.Component,n=t.pageProps,r=t.store;return m(l.a,{store:r},m(e,n))}}],[{key:"getInitialProps",value:function(t){var e,n,r;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=t.Component,n=t.ctx,r={},!e.getInitialProps){i.next=6;break}return i.next=5,o.a.awrap(e.getInitialProps(n));case 5:r=i.sent;case 6:return i.abrupt("return",{pageProps:r});case 7:case"end":return i.stop()}}),null,null,null,Promise)}}]),e}(g.a);e.default=function(t,e){var n=b(b({},w),e),r="undefined"===typeof window,o=function(o){var i=o.initialState,u=o.ctx,c=n.storeKey,a=function(){return t(n.deserializeState(i),b(b(b({},u),e),{isServer:r}))};return r?a():(c in window||(window[c]=a()),window[c])};return function(t){var e;return(e=function(e){function r(t,r){var i=e.call(this,t,r)||this,u=t.initialState;return n.debug&&console.log("4. WrappedApp.render created new store with initialState",u),i.store=o({ctx:r.ctx,initialState:u}),i}return y(r,e),r.prototype.render=function(){var e=this.props,n=e.initialProps,r=(e.initialState,v(e,["initialProps","initialState"]));return s.createElement(t,b({},r,n,{store:this.store}))},r}(s.Component)).displayName="withRedux("+(t.displayName||t.name||"App")+")",e.getInitialProps=function(e){return O(void 0,void 0,void 0,(function(){var i,u;return d(this,(function(c){switch(c.label){case 0:if(!e)throw new Error("No app context");if(!e.ctx)throw new Error("No page context");return i=o({ctx:e.ctx}),n.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),e.ctx.store=i,e.ctx.isServer=r,u={},"getInitialProps"in t?[4,t.getInitialProps.call(t,e)]:[3,2];case 1:u=c.sent(),c.label=2;case 2:return n.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),[2,{isServer:r,initialState:r?n.serializeState(i.getState()):i.getState(),initialProps:u}]}}))}))},e}}((function(t){return Object(E.createStore)(j,t,(e=[],E.applyMiddleware.apply(void 0,Object(h.a)(e))));var e}))(I)},foSv:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},md7G:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return i}))},vuIU:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return o}))}},[[0,1,2,0,3,4]]]);