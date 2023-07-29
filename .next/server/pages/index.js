"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const Subheader = ({ title , linkTitle , linkURL  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
        children: [
            title,
            linkTitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: 'ml-2 text-sm font-light text-primary dark:text-primary italic hover:underline',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: linkURL || "#",
                    children: linkTitle
                })
            }) : null
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subheader);


/***/ }),

/***/ 4515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hooks_useBaseURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2684);
/* harmony import */ var _Hooks_useNative__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9134);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _Tools_Localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6935);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5551);
/* harmony import */ var _Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__]);
_MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









const TrackCard = ({ track  })=>{
    const baseURL = (0,_Hooks_useBaseURL__WEBPACK_IMPORTED_MODULE_2__/* .useBaseURL */ .N)();
    const native = (0,_Hooks_useNative__WEBPACK_IMPORTED_MODULE_3__/* .useNative */ .F)();
    if (!track) return null;
    const title = (0,_Tools_Localization__WEBPACK_IMPORTED_MODULE_8__/* .getLocalizedTitle */ .m)(track.titleNat, track.titleRom, native);
    const inAlbumTitle = (0,_Tools_Localization__WEBPACK_IMPORTED_MODULE_8__/* .getLocalizedTitle */ .m)(track.inAlbum.titleNat, track.inAlbum.titleRom, native);
    const artists = track.artists.length > 0 ? track.artists : track.inAlbum.artists;
    const imgUrl = `/cds/${track.inAlbum.id}.jpg`;
    const trackUrl = `/cds/${track.inAlbum.id}?song=${track.id}`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'h-24 w-96 mb-6 mr-6 bg-gray-100 dark:bg-dark-100 transition duration-300 shadow-lg rounded-2xl flex flex-row',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: 'h-20 w-20 m-2 relative flex-shrink-0',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    src: imgUrl,
                    className: 'rounded-xl',
                    layout: 'fill',
                    objectFit: "cover",
                    alt: 'Album Cover'
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-72 pl-2 pr-4 py-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: 'max-w-full inline-flex w-full text-lg align-middle mb-1',
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: 'inline-block flex-grow mr-2 truncate',
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: 'hover:underline inline-block',
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        href: trackUrl,
                                        children: title
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: 'flex-none text-md inline-block',
                                options: [
                                    'Copy Link',
                                    'Download'
                                ],
                                linkToCopy: `${baseURL}${trackUrl}`,
                                songname: ""
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'space-x-1 max-w-full text-sm truncate',
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: 'text-secondary dark:text-secondary truncate max-w-full min-w-0',
                            children: [
                                "Song by ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: 'text-primary dark:text-primary',
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        artists: artists
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: 'space-x-1 text-sm truncate',
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: 'inline-block text-secondary dark:text-secondary',
                                children: "From"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: 'inline-block text-secondary dark:text-secondary hover:underline',
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    href: '/cds/[id]',
                                    as: `/cds/${track.inAlbum.id}`,
                                    children: inAlbumTitle
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackCard);

});

/***/ }),

/***/ 1538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TrackCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4515);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TrackCard__WEBPACK_IMPORTED_MODULE_2__]);
_TrackCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const TrackList = ({ tracks  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'flex flex-wrap',
        children: tracks.map((track)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TrackCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                track: track
            }, track.id)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackList);

});

/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8969);
/* harmony import */ var _components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8285);
/* harmony import */ var _api_graphQL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4037);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Sub_Components_Subheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9698);
/* harmony import */ var _components_TrackView_TrackList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TrackView_TrackList__WEBPACK_IMPORTED_MODULE_5__, _components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_1__]);
([_components_TrackView_TrackList__WEBPACK_IMPORTED_MODULE_5__, _components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const Home = ({ albums , artists  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'space-y-3',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Home",
                icon: "ph:house-bold"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sub_Components_Subheader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: 'Recently released CDs',
                linkTitle: 'View all CDs',
                linkURL: "/cds/all"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AlbumView_AlbumList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                albums: albums,
                lines: 4
            }),
            artists.map(({ artist , songs  })=>{
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sub_Components_Subheader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            title: "New songs from " + (artist.nameRom || artist.nameNat),
                            linkTitle: 'More songs from ' + (artist.nameRom || artist.nameNat),
                            linkURL: '#'
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TrackView_TrackList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            tracks: songs
                        })
                    ]
                }, artist.id));
            })
        ]
    }));
};
const getServerSideProps = async ({ res  })=>{
    res.setHeader('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=3600');
    const albumQuery = `
        getAllAlbums (sort: false, limit: 2) {
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
    const albumData = (await (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(albumQuery)).getAllAlbums;
    const artistSongQueries = [
        11050
    ];
    const artistData = [];
    for (const artist of artistSongQueries){
        const artistDataQuery = `
            getArtistById (id: "${artist}") {
                id
                nameNat
                nameRom
            }
        `;
        const artistSongsQuery = `
            findSongsByArtist (artistId: "${artist}", sort: false, limit: 3) {
                id
                inAlbum {
                    id
                    titleNat
                    titleRom
                    artists {
                        id
                        nameNat
                        nameRom
                    }
                    releaseDate
                }
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
        `;
        artistData.push({
            artist: (await (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(artistDataQuery)).getArtistById,
            songs: (await (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(artistSongsQuery)).findSongsByArtist
        });
    }
    return {
        props: {
            albums: albumData,
            artists: artistData
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,4,285], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();