"use strict";
(() => {
var exports = {};
exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 2988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_graphQL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4037);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8969);
/* harmony import */ var _components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8285);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(state_pool__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_2__]);
([_components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const albumQuery = `
        getAllAlbums(OPTIONS) {
            id
            titleNat
            titleRom
            songs {
                id
                albumOrder
                titleNat
                titleRom
                artists {
                    id
                    nameNat
                    nameRom
                }
                length
                isInstrumental
                isRadioDrama
            }
            artists {
                id
                nameNat
                nameRom
            }
            releaseDate
        }
    `;
const albumQueryName = "getAllAlbums";
const AllAlbums = ({ initialPage , maxCount  })=>{
    const { 0: albums , 1: setAlbums  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [pageLimit, setPageLimit] = (0,state_pool__WEBPACK_IMPORTED_MODULE_4__.useGlobalState)('pageLimit');
    const maxPage = Math.ceil(maxCount / pageLimit);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.min(initialPage, maxPage));
    const { 0: pageSwitchReady , 1: setPageSwitchReady  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAlbums([]);
        setPageSwitchReady(false);
        (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(albumQuery.replace("OPTIONS", `sort: false, page: ${page}, pageLimit: ${pageLimit}`)).then((value)=>{
            if (value) setAlbums(albumQueryName in value ? value[albumQueryName] : []);
            setPageSwitchReady(true);
        });
    }, [
        page,
        pageLimit
    ]);
    const pageDown = ()=>{
        if (pageSwitchReady) {
            if (page > 1) {
                setPage(page - 1);
            }
        }
    };
    const pageUp = ()=>{
        if (pageSwitchReady) {
            if (page < maxPage) {
                setPage(page + 1);
            }
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "All CDs",
                icon: 'ph:disc-fill'
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-secondary dark:text-secondary text-sm font-light",
                children: [
                    "Showing ",
                    (page - 1) * pageLimit + 1,
                    " - ",
                    page * pageLimit,
                    " of ",
                    maxCount,
                    " CDs"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-x-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: pageDown,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: page > 1 && pageSwitchReady ? '' : 'text-secondary dark:text-secondary ' + (pageSwitchReady ? "cursor-not-allowed" : "cursor-wait"),
                            children: "Previous Page"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: pageUp,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: page < maxPage && pageSwitchReady ? '' : 'text-secondary dark:text-secondary ' + (pageSwitchReady ? "cursor-not-allowed" : "cursor-wait"),
                            children: "Next Page"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageLimit(2);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "2"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageLimit(5);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "5"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            setPageLimit(10);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "10"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                albums: albums,
                lines: 2
            })
        ]
    }));
};
const getServerSideProps = async ({ query  })=>{
    return {
        props: {
            initialPage: query.p ? parseInt(String(query.p)) > 0 ? parseInt(String(query.p)) : 1 : 1,
            maxCount: (await (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)("getAllAlbumsCount")).getAllAlbumsCount || 50
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllAlbums);

});

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 474:
/***/ ((module) => {

module.exports = require("state-pool");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,4,285], () => (__webpack_exec__(2988)));
module.exports = __webpack_exports__;

})();