"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 4037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ graphQL)
});

;// CONCATENATED MODULE: ./api/creds.js
// config.js
const API_URL = "http://3.0.147.142:3050/graphql";


;// CONCATENATED MODULE: ./api/graphQL.ts

async function graphQL(query) {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query { ${query} }`
            })
        });
        return (await res.json()).data;
    } catch (error) {
        console.log(error);
    }
};


/***/ }),

/***/ 8969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const Header = ({ icon , title  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: 'text-primary dark:text-primary',
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.InlineIcon, {
                        className: 'inline mr-2',
                        icon: icon || "ph:question-bold"
                    }),
                    title || 'Untitled Page'
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: 'mt-3'
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

});

/***/ }),

/***/ 9134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useNative1)
/* harmony export */ });
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(state_pool__WEBPACK_IMPORTED_MODULE_0__);

const useNative1 = ()=>{
    const [useNative] = (0,state_pool__WEBPACK_IMPORTED_MODULE_0__.useGlobalState)('useNative');
    return useNative;
};



/***/ }),

/***/ 5551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _MenuContents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2743);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MenuContents__WEBPACK_IMPORTED_MODULE_2__, _iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
([_MenuContents__WEBPACK_IMPORTED_MODULE_2__, _iconify_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const Menu = (props)=>{
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setCollapsed(true);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        wrapperRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: props.className + ' relative inline-flex items-center select-none',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>{
                    setCollapsed(!collapsed);
                },
                className: 'inline-block box-border',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.InlineIcon, {
                    className: 'text-primary',
                    icon: "ph:dots-three-outline-fill"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuContents__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                songs: [],
                innerRef: wrapperRef,
                collapsed: collapsed,
                ...props
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

});

/***/ }),

/***/ 2743:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5566);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(474);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(state_pool__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tools_DownloadFormats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7881);
/* harmony import */ var _Hooks_useNative__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_2__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const MenuContents = (props)=>{
    const { 0: collapsed , 1: setCollapsed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.collapsed);
    const [defaultDownloadFormat] = (0,state_pool__WEBPACK_IMPORTED_MODULE_3__.useGlobalState)('defaultDownloadFormat');
    const native = (0,_Hooks_useNative__WEBPACK_IMPORTED_MODULE_5__/* .useNative */ .F)();
    const { 0: isPlaying , 1: setIsPlaying  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const playAudio = ()=>{
        if (audioRef.current) {
            audioRef.current.play().then(()=>{
                setIsPlaying(true);
            });
        }
    };
    const pauseAudio = ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCollapsed(props.collapsed);
    }, [
        props.collapsed
    ]);
    const buttons = {
        "Copy Link": {
            callback: ()=>{
                if (props.linkToCopy) {
                    // Play the audio
                    playAudio();
                    // Copy the link to the clipboard
                    navigator.clipboard.writeText(props.linkToCopy).then(()=>{
                        console.log(`Copied Link ${props.linkToCopy} to Clipboard ${props.songname}`);
                    });
                }
            },
            icon: "ph:link-simple-bold"
        },
        "Download": {
            callback: ()=>{
                console.log("Downloaded");
                const songId = props.linkToCopy.match(/song=(\d+)/);
                if (songId && songId[1]) {
                    if (props.songname) {
                        const downloadUrl = `${songId[1]}.m4a`; // Adjust the extension as needed
                        const anchor = document.createElement("a");
                        anchor.href = downloadUrl;
                        anchor.download = `${props.songname}.m4a`; // Use props.songname for the file name
                        anchor.click();
                        console.log("Downloaded song with ID:", props.songname);
                    } else {
                        console.log("Song name not provided or invalid.");
                    }
                } else {
                    console.log("Song ID not found in the URL.");
                }
            },
            icon: "ph:download-simple-bold"
        }
    };
    let jsx = [];
    for (let option of props.options){
        jsx.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: ()=>{
                setCollapsed(true);
                buttons[option].callback();
            },
            className: (props.fullAlbumMode ? 'h-8' : 'h-6') + ' w-full px-2 flex items-center hover:bg-blue-500 hover:bg-opacity-25 dark:hover:bg-opacity-40 text-sm rounded-md',
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: 'space-x-2',
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_2__.InlineIcon, {
                        className: "inline text-primary",
                        icon: buttons[option].icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: 'inline font-light',
                        children: [
                            option,
                            option === 'Download' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: 'ml-2 italic text-xs font-light text-secondary dark:text-secondary',
                                children: [
                                    _Tools_DownloadFormats__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z[defaultDownloadFormat].title,
                                    " ",
                                    _Tools_DownloadFormats__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z[defaultDownloadFormat].quality
                                ]
                            }) : null
                        ]
                    })
                ]
            })
        }, option));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: props.innerRef,
        className: 'absolute -top-1 -right-2 ' + (props.fullAlbumMode ? 'w-60' : 'w-48') + ' bg-white dark:bg-dark-50 bg-opacity-50 bg-clip-padding rounded-lg p-1 shadow-md backdrop-blur z-20' + (collapsed ? ' hidden' : ''),
        children: jsx
    }, collapsed ? 'hidden' : 'visible'));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuContents);

});

/***/ }),

/***/ 9038:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1641);
/* harmony import */ var _SongTags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1665);
/* harmony import */ var _MenuView_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5551);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(474);
/* harmony import */ var state_pool__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(state_pool__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_MenuView_Menu__WEBPACK_IMPORTED_MODULE_4__, _iconify_react__WEBPACK_IMPORTED_MODULE_6__]);
([_MenuView_Menu__WEBPACK_IMPORTED_MODULE_4__, _iconify_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const SongCard = (props)=>{
    const { 0: baseURL , 1: setBaseURL  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [useNative] = (0,state_pool__WEBPACK_IMPORTED_MODULE_5__.useGlobalState)('useNative');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setBaseURL(window.location.host);
    }, []);
    const song = props.song;
    if (song === undefined) return null;
    const fullAlbumMode = props.fullAlbumMode;
    const title = song.titleRom !== "" ? useNative ? song.titleNat : song.titleRom : song.titleNat;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: props.className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: 'flex h-full justify-between items-center text-sm ' + (fullAlbumMode ? 'px-5' : 'px-3'),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (fullAlbumMode ? 'space-x-5' : 'space-x-3') + ' flex items-center',
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "inline-block " + (fullAlbumMode ? "w-5" : "w-3.5") + " text-secondary dark:text-secondary",
                            children: song.albumOrder
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "inline-block max-w-1/2 font-light overflow-ellipsis",
                            children: title
                        }),
                        JSON.stringify(props.albumArtists) === JSON.stringify(song.artists) || song.artists.length === 0 ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "inline-block italic font-light text-secondary",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Tools_RenderArtist__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                artists: song.artists
                            })
                        }),
                        props.isSelected ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: 'text-md text-primary dark:text-primary',
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_6__.InlineIcon, {
                                    className: 'absolute animate-ping',
                                    icon: 'ph:circle-fill'
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_6__.InlineIcon, {
                                    className: 'relative',
                                    icon: 'ph:circle-fill'
                                })
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (fullAlbumMode ? 'space-x-5' : 'space-x-3') + ' flex-none flex items-center',
                    children: [
                        song.isInstrumental ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SongTags__WEBPACK_IMPORTED_MODULE_3__/* .InstrumentalTag */ .N, {
                        }) : null,
                        song.isRadioDrama ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SongTags__WEBPACK_IMPORTED_MODULE_3__/* .RadioDramaTag */ .a, {
                        }) : null,
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "inline-block w-9 font-light text-secondary dark:text-secondary text-center",
                            children: [
                                Math.floor(song.length / 60),
                                ":",
                                (song.length % 60 + 100).toString().slice(-2)
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuView_Menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            className: 'text-md ml-2',
                            options: [
                                'Copy Link',
                                'Download'
                            ],
                            fullAlbumMode: fullAlbumMode,
                            linkToCopy: `${baseURL}/cds/${props.albumId}?song=${song.id}`,
                            songname: song.titleRom
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SongCard);

});

/***/ }),

/***/ 9056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SongCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9038);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SongCard__WEBPACK_IMPORTED_MODULE_2__]);
_SongCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const SongList = (props)=>{
    const songs = props.songs;
    const specifiedLines = props.lines || 12;
    const fullAlbumMode = props.fullAlbumMode || false;
    const lines = fullAlbumMode ? songs.length : Math.min(specifiedLines, songs.length);
    let jsx = [];
    for(let i = 0; i < lines; i++){
        let isSelected = false;
        let styles = [
            fullAlbumMode ? 'h-10' : "h-7",
            "transition",
            "duration-300",
            fullAlbumMode ? "hover:bg-gray-100 dark:hover:bg-dark-100" : "hover:bg-gray-200 dark:hover:bg-dark-200"
        ];
        if (i === 0) {
            styles.push("rounded-t-xl");
        }
        if (i === lines - 1 && (!fullAlbumMode && specifiedLines >= songs.length || fullAlbumMode)) {
            styles.push("rounded-b-xl");
        }
        if (i % 2 === 0) {
            styles.push(fullAlbumMode ? "dark:bg-dark-50 bg-gray-50" : "dark:bg-dark-150 bg-gray-150");
        }
        if (songs[i].id === props.highlightedId && fullAlbumMode) {
            isSelected = true;
        }
        jsx.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SongCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: styles.join(" "),
            song: songs[i],
            isSelected: isSelected,
            ...props
        }, songs[i].id));
    }
    const diff = songs.length - specifiedLines;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: 'max-w-full',
        children: [
            jsx,
            specifiedLines >= songs.length || fullAlbumMode ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: 'ml-3 mt-1 text-sm text-secondary dark:text-secondary font-light',
                children: [
                    "and ",
                    diff,
                    " more track",
                    diff === 1 ? '' : 's',
                    "...",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: `/cds/[id]`,
                        as: `/cds/${props.albumId || 404}`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: 'text-xs ml-2 hover:underline text-primary dark:text-primary',
                            children: "View Full CD"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SongList);

});

/***/ }),

/***/ 1665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ InstrumentalTag),
/* harmony export */   "a": () => (/* binding */ RadioDramaTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InstrumentalTag = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: 'inline-block uppercase text-xxs font-light dark:text-white text-secondary italic px-1.5 bg-instrumental bg-opacity-10 dark:bg-opacity-40 tracking-wide rounded transition-colors duration-300',
        children: "Off Vocal"
    }));
};
const RadioDramaTag = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: 'inline-block uppercase text-xxs font-light dark:text-white text-secondary italic px-1.5 bg-radio bg-opacity-10 dark:bg-opacity-40 tracking-wide rounded transition-colors duration-300',
        children: "Radio Drama"
    }));
};


/***/ }),

/***/ 7881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DownloadFormats = {
    'flac': {
        extension: '.flac',
        title: 'FLAC',
        quality: 'Lossless',
        description: 'Lossless quality for whatever you need it for.'
    },
    'mp3-320': {
        extension: '.mp3',
        title: 'MP3',
        quality: '320kbps',
        description: 'High quality for optimal music playback.'
    },
    'mp3-192': {
        extension: '.mp3',
        title: 'MP3',
        quality: '192kbps',
        description: 'Storage-efficient with minimal quality loss for music playback. More compatible than OGG Vorbis. Rankable quality on osu!.'
    },
    'vorbis-192': {
        extension: '.ogg',
        title: 'Vorbis',
        quality: '192kbps',
        description: 'Storage-efficient with minimal quality loss for music playback. Slightly higher quality than MP3 192kbps. Rankable quality on osu!.'
    },
    'opus-128': {
        extension: '.ogg',
        title: 'Opus',
        quality: '128kbps',
        description: 'High storage-efficiency with low quality loss for music playback.'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadFormats);


/***/ }),

/***/ 1641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_graphQL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4037);
/* harmony import */ var _Hooks_useNative__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9134);




const RenderArtist = ({ artists  })=>{
    const native = (0,_Hooks_useNative__WEBPACK_IMPORTED_MODULE_2__/* .useNative */ .F)();
    const { 0: members , 1: setMembers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const getMembers = (artistId)=>{
        const query = `
          getArtistById (id: "${artistId}") {
            members {
                lastNameNat
                lastNameRom
                firstNameNat
                firstNameRom
                foreignNameOrder
              }
          }
        `;
        (0,_api_graphQL__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(query).then((res)=>{
            const data = res.getArtistById.members;
            setMembers(data);
        });
    };
    if (artists.length === 0) {
        return null;
    }
    let artistElements = [];
    let isFirst = true;
    for (const artist of artists){
        let artistName;
        if (artist.nameNat === "") {
            if (members.length === 0) {
                getMembers(artist.id);
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Loading..."
                }));
            }
            const member = members[0];
            const firstName = native ? member.firstNameNat : member.firstNameRom;
            const lastName = native ? member.lastNameNat : member.lastNameRom;
            artistName = member.foreignNameOrder ? `${firstName}${native ? '・' : ' '}${lastName}` : `${lastName}${native ? '' : ' '}${firstName}`;
        } else if (artist.nameRom === "") {
            artistName = artist.nameNat;
        } else {
            artistName = native ? artist.nameNat : artist.nameRom;
        }
        artistElements.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            id: artist.id.toString(),
            children: artistName
        }, artist.id));
        if (isFirst && artists.length > 1) {
            isFirst = false;
            artistElements.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: ", "
            }, 'comma-after-' + artist.id));
        }
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: artistElements
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RenderArtist);


/***/ })

};
;