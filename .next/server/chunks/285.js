"use strict";
exports.id = 285;
exports.ids = [285];
exports.modules = {

/***/ 654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var _Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1641);
/* harmony import */ var _SongView_SongList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9056);
/* harmony import */ var _MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5551);
/* harmony import */ var _Hooks_useBaseURL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2684);
/* harmony import */ var _Hooks_useNative__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9134);
/* harmony import */ var _Tools_Localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6935);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SongView_SongList__WEBPACK_IMPORTED_MODULE_5__, _MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__]);
([_SongView_SongList__WEBPACK_IMPORTED_MODULE_5__, _MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const AlbumCard = ({ album , lines  })=>{
    const baseURL = (0,_Hooks_useBaseURL__WEBPACK_IMPORTED_MODULE_7__/* .useBaseURL */ .N)();
    const native = (0,_Hooks_useNative__WEBPACK_IMPORTED_MODULE_8__/* .useNative */ .F)();
    if (!album) return null;
    const title = (0,_Tools_Localization__WEBPACK_IMPORTED_MODULE_9__/* .getLocalizedTitle */ .m)(album.titleNat, album.titleRom, native);
    const subtitle = (0,_Tools_Localization__WEBPACK_IMPORTED_MODULE_9__/* .getLocalizedSubtitle */ .f)(album.titleNat, album.titleRom, native);
    const imgUrl = `/cds/${album.id}.jpg`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'h-max w-144 relative mb-6 mr-6',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: `/cds/[id]`,
                as: `/cds/${album.id}`,
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: 'block h-26 w-26 absolute z-50 transform rotate-355 rounded-2xl shadow-lg',
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'w-full h-full relative',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            src: imgUrl,
                            className: 'rounded-2xl',
                            layout: 'fill',
                            objectFit: "cover",
                            alt: 'Album Cover'
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: 'h-2'
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: 'w-140 ml-4 bg-gray-100 dark:bg-dark-100 transition duration-300 shadow-lg rounded-2xl',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: 'flex flex-nowrap max-w-full flex-none flex-row h-26',
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: 'flex-shrink-0 w-20 mr-7'
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: 'mt-3 mr-4 w-full min-w-0',
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: 'inline-flex w-full text-xl align-middle',
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: 'inline-block flex-grow truncate mr-2',
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: 'hover:underline inline-block',
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                        href: `/cds/[id]`,
                                                        as: `/cds/${album.id}`,
                                                        children: title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuView_Menu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                className: 'flex-none text-md inline-block',
                                                options: [
                                                    'Copy Link'
                                                ],
                                                linkToCopy: `${baseURL}/cds/${album.id}`,
                                                songname: ""
                                            })
                                        ]
                                    }),
                                    subtitle ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: 'dark:text-secondary text-xs text-secondary font-light tracking-wide truncate',
                                        children: subtitle
                                    }) : null,
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: 'inline-block text-md text-primary dark:text-primary',
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    artists: album.artists
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: 'inline-block text-secondary dark:text-secondary mx-1',
                                                children: "\xb7"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: 'inline-block text-secondary dark:text-secondary text-sm font-bold',
                                                children: new Date(album.releaseDate).getUTCFullYear()
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: 'p-2',
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SongView_SongList__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            songs: album.songs,
                            lines: lines,
                            albumId: album.id,
                            albumArtists: album.artists
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumCard);

});

/***/ }),

/***/ 8285:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AlbumCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AlbumCard__WEBPACK_IMPORTED_MODULE_2__]);
_AlbumCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const AlbumList = ({ albums , lines  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: 'flex flex-wrap',
        children: albums.map((album)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AlbumCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                album: album,
                lines: lines || 10
            }, album.id)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlbumList);

});

/***/ }),

/***/ 2684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useBaseURL)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useBaseURL = ()=>{
    const { 0: baseURL , 1: setBaseURL  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setBaseURL(window.location.host);
    }, []);
    return baseURL;
};


/***/ }),

/***/ 6935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ getLocalizedTitle),
/* harmony export */   "f": () => (/* binding */ getLocalizedSubtitle)
/* harmony export */ });
function getLocalizedTitle(nat, rom, isNative) {
    return rom === "" || isNative ? nat : rom;
}
function getLocalizedSubtitle(nat, rom, isNative) {
    return rom === "" || isNative ? null : nat;
}


/***/ })

};
;