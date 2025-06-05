"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isProtectedRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/mood_history(.*)\",\n    \"/sitting(.*)\",\n    \"/user-profile(.*)\",\n    \"/upgrade(.*)\",\n    \"/succ\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)(async (auth, req)=>{\n    if (isProtectedRoute(req)) await auth.protect();\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJFO0FBRTNFLE1BQU1FLG1CQUFtQkQsd0VBQWtCQSxDQUFDO0lBQzFDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELGlFQUFlRCxxRUFBZUEsQ0FBQyxPQUFPRyxNQUFNQztJQUMxQyxJQUFJRixpQkFBaUJFLE1BQU0sTUFBTUQsS0FBS0UsT0FBTztBQUMvQyxFQUFFLEVBQUM7QUFFSSxNQUFNQyxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1AsNkVBQTZFO1FBQzdFO1FBQ0EsNEJBQTRCO1FBQzVCO0tBQ0Q7QUFDSCxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMveXV1dXV1L0RvY3VtZW50cy9NeS1QZXJzb25hbC1Qcm9qZWN0cy9tb29kLXRyYWNrZXIvbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVya01pZGRsZXdhcmUsIGNyZWF0ZVJvdXRlTWF0Y2hlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzL3NlcnZlclwiO1xuXG5jb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gY3JlYXRlUm91dGVNYXRjaGVyKFtcbiAgXCIvbW9vZF9oaXN0b3J5KC4qKVwiLFxuICBcIi9zaXR0aW5nKC4qKVwiLFxuICBcIi91c2VyLXByb2ZpbGUoLiopXCIsXG4gIFwiL3VwZ3JhZGUoLiopXCIsXG4gIFwiL3N1Y2NcIlxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsZXJrTWlkZGxld2FyZShhc3luYyAoYXV0aCwgcmVxKSA9PiB7XG4gIGlmIChpc1Byb3RlY3RlZFJvdXRlKHJlcSkpIGF3YWl0IGF1dGgucHJvdGVjdCgpO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcbiAgICAvLyBTa2lwIE5leHQuanMgaW50ZXJuYWxzIGFuZCBhbGwgc3RhdGljIGZpbGVzLCB1bmxlc3MgZm91bmQgaW4gc2VhcmNoIHBhcmFtc1xuICAgIFwiLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopXCIsXG4gICAgLy8gQWx3YXlzIHJ1biBmb3IgQVBJIHJvdXRlc1xuICAgIFwiLyhhcGl8dHJwYykoLiopXCIsXG4gIF0sXG59O1xuIl0sIm5hbWVzIjpbImNsZXJrTWlkZGxld2FyZSIsImNyZWF0ZVJvdXRlTWF0Y2hlciIsImlzUHJvdGVjdGVkUm91dGUiLCJhdXRoIiwicmVxIiwicHJvdGVjdCIsImNvbmZpZyIsIm1hdGNoZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});