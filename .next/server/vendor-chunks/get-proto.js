"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-proto";
exports.ids = ["vendor-chunks/get-proto"];
exports.modules = {

/***/ "(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js":
/*!*********************************************************!*\
  !*** ./node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar $Object = __webpack_require__(/*! es-object-atoms */ \"(action-browser)/./node_modules/es-object-atoms/index.js\");\n\n/** @type {import('./Object.getPrototypeOf')} */\nmodule.exports = $Object.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vT2JqZWN0LmdldFByb3RvdHlwZU9mLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxpRkFBaUI7O0FBRXZDLFdBQVcsbUNBQW1DO0FBQzlDIiwic291cmNlcyI6WyIvVXNlcnMveXV1dXV1L0RvY3VtZW50cy9NeS1QZXJzb25hbC1Qcm9qZWN0cy9tb29kLXRyYWNrZXIvbm9kZV9tb2R1bGVzL2dldC1wcm90by9PYmplY3QuZ2V0UHJvdG90eXBlT2YuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJ2VzLW9iamVjdC1hdG9tcycpO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9PYmplY3QuZ2V0UHJvdG90eXBlT2YnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gJE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBudWxsO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\n/** @type {import('./Reflect.getPrototypeOf')} */\nmodule.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vUmVmbGVjdC5nZXRQcm90b3R5cGVPZi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixXQUFXLG9DQUFvQztBQUMvQyIsInNvdXJjZXMiOlsiL1VzZXJzL3l1dXV1dS9Eb2N1bWVudHMvTXktUGVyc29uYWwtUHJvamVjdHMvbW9vZC10cmFja2VyL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vUmVmbGVjdC5nZXRQcm90b3R5cGVPZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKSB8fCBudWxsO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/get-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-proto/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ \"(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js\");\nvar originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ \"(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js\");\n\nvar getDunderProto = __webpack_require__(/*! dunder-proto/get */ \"(action-browser)/./node_modules/dunder-proto/get.js\");\n\n/** @type {import('.')} */\nmodule.exports = reflectGetProto\n\t? function getProto(O) {\n\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\treturn reflectGetProto(O);\n\t}\n\t: originalGetProto\n\t\t? function getProto(O) {\n\t\t\tif (!O || (typeof O !== 'object' && typeof O !== 'function')) {\n\t\t\t\tthrow new TypeError('getProto: not an object');\n\t\t\t}\n\t\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\t\treturn originalGetProto(O);\n\t\t}\n\t\t: getDunderProto\n\t\t\t? function getProto(O) {\n\t\t\t\t// @ts-expect-error TS can't narrow inside a closure, for some reason\n\t\t\t\treturn getDunderProto(O);\n\t\t\t}\n\t\t\t: null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsc0JBQXNCLG1CQUFPLENBQUMscUdBQTBCO0FBQ3hELHVCQUF1QixtQkFBTyxDQUFDLG1HQUF5Qjs7QUFFeEQscUJBQXFCLG1CQUFPLENBQUMsNkVBQWtCOztBQUUvQyxXQUFXLGFBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy95dXV1dXUvRG9jdW1lbnRzL015LVBlcnNvbmFsLVByb2plY3RzL21vb2QtdHJhY2tlci9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZmxlY3RHZXRQcm90byA9IHJlcXVpcmUoJy4vUmVmbGVjdC5nZXRQcm90b3R5cGVPZicpO1xudmFyIG9yaWdpbmFsR2V0UHJvdG8gPSByZXF1aXJlKCcuL09iamVjdC5nZXRQcm90b3R5cGVPZicpO1xuXG52YXIgZ2V0RHVuZGVyUHJvdG8gPSByZXF1aXJlKCdkdW5kZXItcHJvdG8vZ2V0Jyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZmxlY3RHZXRQcm90b1xuXHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRyZXR1cm4gcmVmbGVjdEdldFByb3RvKE8pO1xuXHR9XG5cdDogb3JpZ2luYWxHZXRQcm90b1xuXHRcdD8gZnVuY3Rpb24gZ2V0UHJvdG8oTykge1xuXHRcdFx0aWYgKCFPIHx8ICh0eXBlb2YgTyAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIE8gIT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2dldFByb3RvOiBub3QgYW4gb2JqZWN0Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTIGNhbid0IG5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlLCBmb3Igc29tZSByZWFzb25cblx0XHRcdHJldHVybiBvcmlnaW5hbEdldFByb3RvKE8pO1xuXHRcdH1cblx0XHQ6IGdldER1bmRlclByb3RvXG5cdFx0XHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjYW4ndCBuYXJyb3cgaW5zaWRlIGEgY2xvc3VyZSwgZm9yIHNvbWUgcmVhc29uXG5cdFx0XHRcdHJldHVybiBnZXREdW5kZXJQcm90byhPKTtcblx0XHRcdH1cblx0XHRcdDogbnVsbDtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/index.js\n");

/***/ })

};
;