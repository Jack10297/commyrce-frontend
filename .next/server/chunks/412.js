"use strict";
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 3412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4715);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2026);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);




function Layout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
            store: _store_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                children
            ]
        })
    });
};


/***/ }),

/***/ 4715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/shop.jpg
/* harmony default export */ const shop = ({"src":"/_next/static/media/shop.4f5be11d.jpg","height":429,"width":1205,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwP/xAAaEAACAgMAAAAAAAAAAAAAAAABAgAhAxJB/9oACAEBAAE/ABiTZjdOemf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/avatar.png
/* harmony default export */ const avatar = ({"src":"/_next/static/media/avatar.b27ee444.png","height":498,"width":499,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/AEyNr0uMrkuNr02Kqk+IpUaEoUB9mT16lABLjK5Lja8/e5kmSlwAO1MycItAfJc5dY0AT4ysKoSqk42K3LOLtZZ3dHBrGmyHPHOJAFCKqQB9o8q1o//arP/dscOpkQBLazxsfgBLhqMkfaCGlJ390KP6zqJ2e3wAVW8vXnAAR4OhLHOQeIuX/dq7+Ne6YHN+EFRpKl5yAEV7lUlNUnB0bdfF1dTF0mVqY0tPVC1dcABIbH9YUlE/TUK3orepkqk7STxZVlc5WmiQg1zLKbqIpAAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./components/Navbar.js







function Navbar() {
    const cart = (0,external_react_redux_.useSelector)((state)=>state.cart.cartList
    );
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sticky top-0 bg-white shadow-md h-12 z-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container my-4 mx-auto flex lg:flex-row sm:flex-col justify-between antialiased text-slate-900",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "sm:text-xl text-md w-8 font-bold underline decoration-red-600 decoration-4",
                            children: "Commyrce"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex gap-x-2 lg:gap-x-4 font-semibold",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/products",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2",
                                        children: "Products"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2",
                                        children: "Contact"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "hover:bg-red-600 w-6 px-2 py-1 hover:text-slate-50 hover:rounded-md lg:px-4 lg:py-2",
                                        children: "About"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hidden relative bottom-2 cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "rounded-full",
                                    src: avatar,
                                    alt: "",
                                    width: "45px",
                                    height: "45px"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "cursor-pointer relative",
                                onClick: ()=>router.push("/cart")
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "absolute left-4 -top-2 flex justify-center items-center w-5 h-5 bg-red-500 text-white rounded-full mr-1",
                                        children: cart.length
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h2": () => (/* binding */ removeFromCart)
/* harmony export */ });
/* unused harmony export cartSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    cartList: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            let index = state.cartList.findIndex((item)=>item.name === action.payload.name
            );
            // if element already exist do not add duplicate to cart
            if (index !== -1) {
                state.cartList.splice(index, 1, action.payload);
                return;
            }
            state.cartList.push(action.payload);
        },
        removeFromCart: (state, action)=>{
            let index = state.cartList.indexOf(action.payload);
            state.cartList.splice(index, 1);
        }
    }
});
const { addToCart , removeFromCart  } = cartSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);


/***/ }),

/***/ 8930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uk": () => (/* binding */ addToProductList)
/* harmony export */ });
/* unused harmony export productSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    productList: []
};
const productSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        addToProductList: (state, action)=>{
            state.productList = [
                ...action.payload
            ];
        }
    }
});
const { addToProductList  } = productSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productSlice.reducer);


/***/ }),

/***/ 2026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./store/slices/stateSlice.js

const initialState = {
    value: "sample"
};
const stateSlice = (0,toolkit_.createSlice)({
    name: "test",
    initialState,
    reducers: {
        increment: (state, action)=>{
            state.value = action.payload.name;
        }
    }
});
const { increment  } = stateSlice.actions;
/* harmony default export */ const slices_stateSlice = (stateSlice.reducer);

;// CONCATENATED MODULE: ./store/slices/piecesSlice.js

const piecesSlice_initialState = {
    value: 1
};
const piecesSlice = (0,toolkit_.createSlice)({
    name: "pieces",
    initialState: piecesSlice_initialState,
    reducers: {
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state)=>{
            if (state.value === 1) {
                return;
            }
            state.value -= 1;
        }
    }
});
const { increment: piecesSlice_increment , decrement  } = piecesSlice.actions;
/* harmony default export */ const slices_piecesSlice = (piecesSlice.reducer);

// EXTERNAL MODULE: ./store/slices/cartSlice.js
var cartSlice = __webpack_require__(1850);
// EXTERNAL MODULE: ./store/slices/productSlice.js
var productSlice = __webpack_require__(8930);
;// CONCATENATED MODULE: ./store/store.js





const store = (0,toolkit_.configureStore)({
    reducer: {
        test: slices_stateSlice,
        pieces: slices_piecesSlice,
        cart: cartSlice/* default */.ZP,
        product: productSlice/* default */.ZP
    }
});


/***/ })

};
;