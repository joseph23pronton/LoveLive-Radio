"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 4876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getUTCReleaseDate)
/* harmony export */ });
function getUTCReleaseDate(date) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const utcDate = date.getUTCDate();
    let dateSuffix;
    if (11 <= utcDate && utcDate <= 13) {
        dateSuffix = 'th';
    } else {
        switch(date.getUTCDate() % 10){
            case 1:
                {
                    dateSuffix = 'st';
                }
                break;
            case 2:
                {
                    dateSuffix = 'nd';
                }
                break;
            case 3:
                {
                    dateSuffix = 'rd';
                }
                break;
            default:
                {
                    dateSuffix = 'th';
                }
        }
    }
    return `${months[date.getUTCMonth()]} ${utcDate}${dateSuffix}, ${date.getUTCFullYear()}`;
}


/***/ }),

/***/ 5838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8969);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_1__]);
_components_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const Custom404 = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'space-y-3',
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            title: "OwO! The requested URL doesn't seem to exist..."
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom404);

});

/***/ }),

/***/ 3424:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(state_pool__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5566);
/* harmony import */ var _api_graphQL__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4037);
/* harmony import */ var _components_Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1641);
/* harmony import */ var _components_SongView_SongList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9056);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5838);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Tools_Time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4876);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SongView_SongList__WEBPACK_IMPORTED_MODULE_6__, _iconify_react__WEBPACK_IMPORTED_MODULE_4__, _404__WEBPACK_IMPORTED_MODULE_7__]);
([_components_SongView_SongList__WEBPACK_IMPORTED_MODULE_6__, _iconify_react__WEBPACK_IMPORTED_MODULE_4__, _404__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);











const FullAlbum = ({ album  })=>{
    const [useNative] = (0,state_pool__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)('useNative');
    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const highlighted = String(query.song) || null;
    if (!album) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_404__WEBPACK_IMPORTED_MODULE_7__["default"], {
    }));
    const mainTitle = album.titleRom === "" || useNative ? album.titleNat : album.titleRom;
    const releaseDate = new Date(album.releaseDate);
    let totalLength = 0;
    album.songs.forEach((song)=>totalLength += song.length
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'space-y-6',
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: 'mt-14 h-60 flex',
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'h-full w-60 relative flex-none',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            alt: "Album Cover",
                            className: 'rounded-2xl',
                            src: `/cds/${album.id}.jpg`,
                            layout: 'fill',
                            objectFit: "contain",
                            priority: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: 'ml-8 flex flex-col flex-grow',
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: 'flex items-center flex-grow',
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: 'leading-none space-y-4',
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: 'space-y-2',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: 'text-3xl',
                                                    children: mainTitle
                                                }),
                                                album.titleRom === "" || useNative ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: 'text-md text-secondary dark:text-secondary font-light tracking-wide truncate',
                                                    children: album.titleNat
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: 'text-xl',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: 'inline-block text-primary dark:text-primary',
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        artists: album.artists
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: 'inline-block text-secondary dark:text-secondary mx-1',
                                                    children: "\xb7"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: 'inline-block text-secondary dark:text-secondary',
                                                    children: releaseDate.getUTCFullYear()
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: 'mt-2',
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: 'h-8 w-32 rounded-lg bg-primary text-white',
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_4__.InlineIcon, {
                                            className: 'inline-block mr-1',
                                            icon: 'ph:link-simple-bold'
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Copy Link"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SongView_SongList__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                songs: album.songs,
                albumArtists: album.artists,
                fullAlbumMode: true,
                highlightedId: highlighted,
                albumId: album.id
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: 'text-secondary dark:text-secondary text-sm font-light flex flex-col',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "Released on ",
                            (0,_components_Tools_Time__WEBPACK_IMPORTED_MODULE_9__/* .getUTCReleaseDate */ .D)(releaseDate)
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            album.songs.length,
                            " Songs, ",
                            Math.ceil(totalLength / 60),
                            " Minutes"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: album.catalog
                    })
                ]
            })
        ]
    }));
};
const getServerSideProps = async ({ res , params  })=>{
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=259200');
    const query = `
        getAlbumById(id: "${params.id}") {
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
        catalog
        parent
      }
    `;
    const data = (await (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(query)).getAlbumById;
    return {
        props: {
            album: data
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullAlbum);

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,4], () => (__webpack_exec__(3424)));
module.exports = __webpack_exports__;

})();