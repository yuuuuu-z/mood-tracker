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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst isProtectedRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    \"/mood_history(.*)\",\n    \"/sitting(.*)\",\n    \"/user-profile(.*)\",\n    \"/upgrade(.*)\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_1__.clerkMiddleware)(async (auth, req)=>{\n    if (isProtectedRoute(req)) await auth.protect();\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJFO0FBRTNFLE1BQU1FLG1CQUFtQkQsd0VBQWtCQSxDQUFDO0lBQzFDO0lBQ0E7SUFDQTtJQUNBO0NBRUQ7QUFFRCxpRUFBZUQscUVBQWVBLENBQUMsT0FBT0csTUFBTUM7SUFDMUMsSUFBSUYsaUJBQWlCRSxNQUFNLE1BQU1ELEtBQUtFLE9BQU87QUFDL0MsRUFBRSxFQUFDO0FBRUksTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUNQLDZFQUE2RTtRQUM3RTtRQUNBLDRCQUE0QjtRQUM1QjtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL3l1dXV1dS9Eb2N1bWVudHMvTXktUGVyc29uYWwtUHJvamVjdHMvbW9vZC10cmFja2VyL21pZGRsZXdhcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlLCBjcmVhdGVSb3V0ZU1hdGNoZXIgfSBmcm9tIFwiQGNsZXJrL25leHRqcy9zZXJ2ZXJcIjtcblxuY29uc3QgaXNQcm90ZWN0ZWRSb3V0ZSA9IGNyZWF0ZVJvdXRlTWF0Y2hlcihbXG4gIFwiL21vb2RfaGlzdG9yeSguKilcIixcbiAgXCIvc2l0dGluZyguKilcIixcbiAgXCIvdXNlci1wcm9maWxlKC4qKVwiLFxuICBcIi91cGdyYWRlKC4qKVwiLFxuICBcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGVya01pZGRsZXdhcmUoYXN5bmMgKGF1dGgsIHJlcSkgPT4ge1xuICBpZiAoaXNQcm90ZWN0ZWRSb3V0ZShyZXEpKSBhd2FpdCBhdXRoLnByb3RlY3QoKTtcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbXG4gICAgLy8gU2tpcCBOZXh0LmpzIGludGVybmFscyBhbmQgYWxsIHN0YXRpYyBmaWxlcywgdW5sZXNzIGZvdW5kIGluIHNlYXJjaCBwYXJhbXNcbiAgICBcIi8oKD8hX25leHR8W14/XSpcXFxcLig/Omh0bWw/fGNzc3xqcyg/IW9uKXxqcGU/Z3x3ZWJwfHBuZ3xnaWZ8c3ZnfHR0Znx3b2ZmMj98aWNvfGNzdnxkb2N4P3x4bHN4P3x6aXB8d2VibWFuaWZlc3QpKS4qKVwiLFxuICAgIC8vIEFsd2F5cyBydW4gZm9yIEFQSSByb3V0ZXNcbiAgICBcIi8oYXBpfHRycGMpKC4qKVwiLFxuICBdLFxufTtcbiJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJjcmVhdGVSb3V0ZU1hdGNoZXIiLCJpc1Byb3RlY3RlZFJvdXRlIiwiYXV0aCIsInJlcSIsInByb3RlY3QiLCJjb25maWciLCJtYXRjaGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});