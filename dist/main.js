/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --primary-bg-color: #1338be;\n    --accent-color: #fd6a02;\n    --text-color: black;\n    --card-bg: azure;\n    --white-color: white;\n    --gray-color: grey;\n}\n\n* {\n    font-family:\n        system-ui,\n        -apple-system,\n        BlinkMacSystemFont,\n        'Segoe UI',\n        Roboto,\n        Oxygen,\n        Ubuntu,\n        Cantarell,\n        'Open Sans',\n        'Helvetica Neue',\n        sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-bg-color);\n}\n\n.header-container {\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    background: var(--accent-color);\n}\n\nh1 {\n    color: var(--white-color);\n    padding: 0 50px;\n}\n\n.logo {\n    filter: invert(1);\n}\n\n.display {\n}\n\n.search-bar {\n    height: 15px;\n    background: var(--white-color);\n    display: flex;\n    align-items: center;\n    border-radius: 40px;\n    padding: 10px 20px;\n    width: 250px;\n    margin: 50px auto;\n}\n\n.search-bar input {\n    background: transparent;\n\n    border: 0;\n    outline: none;\n    padding: 10px 5px;\n    font-size: 16px;\n}\n\n::placeholder {\n    color: var(--gray-color);\n}\n\n.search-bar button {\n    background: var(--white-color);\n    border-radius: 10px;\n    border: 0;\n    width: 60px;\n    height: 35px;\n    cursor: pointer;\n    margin-left: 25px;\n}\n\n.weather-cards {\n    display: grid;\n    margin: 50px;\n    grid-template-columns: repeat(2, minmax(350px, 1fr));\n    grid-gap: 25px;\n}\n\n.current-weather-card {\n    background: var(--card-bg);\n    border-radius: 10px;\n    padding: 15px;\n}\n\n.condition {\n    display: flex;\n}\n\n.forecast-container {\n    display: grid;\n    grid-template-rows: repeat(3, minmax(150px, 1fr));\n    grid-gap: 25px;\n}\n\n.forecast-card {\n    display: flex;\n    flex-direction: column;\n    border: 2px solid gray;\n    background: var(--card-bg);\n    border-radius: 10px;\n    padding: 15px;\n}\n\n.forecast-condition {\n    display: flex;\n}\n\n.footer {\n    background: var(--accent-color);\n    padding: 20px;\n    font-size: 14px;\n    color: var(--white-color);\n    font-family: var(--nav-font);\n    text-align: center;\n    margin-top: auto;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/layout */ \"./src/modules/layout.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n\n\n\n(0,_modules_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('calgary');\n\n\n//# sourceURL=webpack://javascript-template/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\nasync function getWeatherData(locationQuery) {\n    try {\n        // Forecast weather data\n        const response = await fetch(\n            `https://api.weatherapi.com/v1/forecast.json?key=f01a3f590edd4b47b4b185016242201&q=${locationQuery}&days=3&aqi=no`,\n            { mode: 'cors' }\n        );\n\n        // Check if the response is successful\n        if (response.ok) {\n            const weatherData = await response.json();\n            console.log('Forecast Weather Data:', weatherData);\n\n            // Display current weather data\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].makeWeatherCards();\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendLocation(\n                weatherData.location.country,\n                weatherData.location.name\n            );\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendCondition(\n                weatherData.current.condition.icon,\n                weatherData.current.condition.text\n            );\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendTemperature(\n                weatherData.current.temp_c,\n                weatherData.current.temp_f\n            );\n\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendFeelslike(\n                weatherData.current.feelslike_c,\n                weatherData.current.feelslike_f\n            );\n\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendWindspeed(\n                weatherData.current.wind_mph,\n                weatherData.current.wind_kph\n            );\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendWinddir(weatherData.current.wind_dir);\n            _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendHumidity(weatherData.current.humidity);\n\n            const forecastDays = weatherData.forecast.forecastday;\n\n            forecastDays.forEach((forecastDay) => {\n                _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendForecast(forecastDay);\n            });\n        } else {\n            // Handle error response\n            const errorData = await response.json();\n            console.error(\n                'Error fetching weather data:',\n                errorData.error.message\n            );\n        }\n    } catch (error) {\n        console.error('Error in getWeatherData:', error);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);\n\n\n//# sourceURL=webpack://javascript-template/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n\n\nconst displayController = (() => {\n    document.addEventListener('DOMContentLoaded', () => {\n        const form = document.querySelector('form');\n\n        form.addEventListener('submit', (event) => {\n            event.preventDefault();\n\n            const searchQueryInput = document.getElementById('search-bar');\n            const searchQuery = searchQueryInput.value;\n\n            (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchQuery);\n\n            console.log('Form submitted with value:', searchQuery);\n            searchQueryInput.value = '';\n        });\n    });\n\n    const isMetric = true;\n\n    // Create the weather cards\n    const weatherCards = document.createElement('div');\n    weatherCards.classList.add('weather-cards');\n\n    const currentWeatherCard = document.createElement('div');\n    currentWeatherCard.classList.add('current-weather-card');\n\n    const forecastWeatherCards = document.createElement('div');\n    forecastWeatherCards.classList.add('forecast-container');\n\n    const makeWeatherCards = () => {\n        // Clear existing weather cards and their children\n        const existingWeatherCards = document.querySelector('.weather-cards');\n        if (existingWeatherCards) {\n            // Clear the content of the current and forecast weather cards\n            currentWeatherCard.innerHTML = '';\n            forecastWeatherCards.innerHTML = '';\n        } else {\n            // Append the new weather cards to the displayDiv if not present\n            const displayDiv = document.querySelector('.display');\n            displayDiv.appendChild(weatherCards);\n        }\n\n        weatherCards.appendChild(currentWeatherCard);\n        weatherCards.appendChild(forecastWeatherCards);\n    };\n\n    const appendLocation = (countryName, cityName) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const location = document.createElement('p');\n        location.classList.add('location');\n        location.textContent = `${countryName}, ${cityName}`;\n        newDisplayDiv.appendChild(location);\n    };\n\n    const appendCondition = (icon, conditionText) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const conditionDiv = document.createElement('div');\n        conditionDiv.classList.add('condition');\n\n        const iconElement = document.createElement('img');\n        iconElement.classList.add('weather-icon');\n        iconElement.src = `https://${icon}`;\n        iconElement.alt = 'Weather Icon';\n\n        const conditionTextElement = document.createElement('p');\n        conditionTextElement.textContent = `${conditionText}`;\n\n        conditionDiv.appendChild(iconElement);\n        conditionDiv.appendChild(conditionTextElement);\n\n        newDisplayDiv.appendChild(conditionDiv);\n    };\n\n    const appendTemperature = (celsius, fahrenheit) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const temperature = document.createElement('p');\n        temperature.classList.add('temperature');\n\n        if (isMetric) {\n            temperature.textContent = `Temperature: ${celsius}°C`;\n        } else {\n            temperature.textContent = `Temperature: ${fahrenheit}°F`;\n        }\n\n        newDisplayDiv.appendChild(temperature);\n    };\n\n    const appendFeelslike = (feelsInC, feelsInF) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const feelsLike = document.createElement('p');\n        feelsLike.classList.add('feels-like');\n\n        if (isMetric) {\n            feelsLike.textContent = `Feels like: ${feelsInC}°C`;\n        } else {\n            feelsLike.textContent = `Feels like: ${feelsInF}°F`;\n        }\n\n        newDisplayDiv.appendChild(feelsLike);\n    };\n\n    const appendWindspeed = (mph, kph) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const windspeed = document.createElement('p');\n        windspeed.classList.add('windspeed');\n\n        if (isMetric) {\n            windspeed.textContent = `Wind Speed: ${kph} Km/h`;\n        } else {\n            windspeed.textContent = `Wind Speed: ${mph} Mi/h`;\n        }\n\n        newDisplayDiv.appendChild(windspeed);\n    };\n\n    const appendWinddir = (direction) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const winddir = document.createElement('p');\n        winddir.classList.add('winddir');\n        winddir.textContent = `Wind is heading towards ${direction}`;\n        newDisplayDiv.appendChild(winddir);\n    };\n\n    const appendHumidity = (humidity) => {\n        const newDisplayDiv = document.querySelector('.current-weather-card');\n        const humidityDiv = document.createElement('p');\n        humidityDiv.classList.add('humidity');\n        humidityDiv.textContent = `Humditiy: ${humidity}%`;\n        newDisplayDiv.appendChild(humidityDiv);\n    };\n\n    const appendForecast = (forecastDay) => {\n        const forecastCard = document.createElement('div');\n        forecastCard.classList.add('forecast-card');\n\n        const dateElement = document.createElement('p');\n        dateElement.classList.add('forecast-date');\n        dateElement.textContent = forecastDay.date;\n\n        const iconElement = document.createElement('img');\n        iconElement.classList.add('forecast-icon');\n        iconElement.src = `https://${forecastDay.day.condition.icon}`;\n        iconElement.alt = 'Weather Icon';\n\n        const conditionTextElement = document.createElement('p');\n        conditionTextElement.textContent = `${forecastDay.day.condition.text}`;\n\n        const forecastCondition = document.createElement('div');\n        forecastCondition.classList.add('forecast-condition');\n\n        forecastCondition.appendChild(iconElement);\n        forecastCondition.appendChild(conditionTextElement);\n\n        const temperatureElement = document.createElement('p');\n        temperatureElement.classList.add('forecast-temperature');\n\n        if (isMetric) {\n            temperatureElement.textContent = `Average Temperature: ${forecastDay.day.avgtemp_c}°C`;\n        } else {\n            temperatureElement.textContent = `Average Temperature: ${forecastDay.day.avgtemp_f}°F`;\n        }\n\n        const humidityElement = document.createElement('p');\n        humidityElement.classList.add('forecast-humidity');\n        humidityElement.textContent = `Humidity: ${forecastDay.day.avghumidity}%`;\n\n        const precipitationElement = document.createElement('p');\n        precipitationElement.classList.add('forecast-precipitation');\n        precipitationElement.textContent = `Precipitation: ${forecastDay.day.daily_chance_of_rain}%`;\n\n        // Append the elements to the forecast card\n        forecastCard.appendChild(dateElement);\n\n        forecastCard.appendChild(forecastCondition);\n        forecastCard.appendChild(temperatureElement);\n        forecastCard.appendChild(humidityElement);\n        forecastCard.appendChild(precipitationElement);\n\n        // Append the forecast card to the forecast container\n        forecastWeatherCards.appendChild(forecastCard);\n    };\n\n    return {\n        makeWeatherCards,\n        appendLocation,\n        appendCondition,\n        appendTemperature,\n        appendFeelslike,\n        appendWindspeed,\n        appendWinddir,\n        appendHumidity,\n        appendForecast,\n    };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://javascript-template/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.svg */ \"./src/assets/images/logo.svg\");\n\n\nconst container = document.querySelector('.container');\n\n// Header contaienr\nconst headerContainer = document.createElement('div');\nheaderContainer.classList.add('header-container');\n\n// Logo\nconst logoImage = document.createElement('img');\nlogoImage.classList.add('logo');\nlogoImage.src = _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\nlogoImage.alt = 'Weather Logo';\nlogoImage.style.width = '30px';\nlogoImage.style.height = 'auto';\n\n// Header Title\nconst titleElement = document.createElement('h1');\ntitleElement.textContent = 'Weather App';\n\n// Toggle Unit Button\nconst unitToggleButton = document.createElement('button');\nunitToggleButton.classList.add('unit-toggle');\n\n// Create a span for the slider\nconst sliderSpan = document.createElement('span');\nsliderSpan.classList.add('slider', 'round');\n\n// Append text content and slider to the button\nunitToggleButton.textContent = 'Toggle Units';\nunitToggleButton.appendChild(sliderSpan);\n\nheaderContainer.appendChild(logoImage);\nheaderContainer.appendChild(titleElement);\n// headerContainer.appendChild(unitToggleButton);\n\ncontainer.appendChild(headerContainer);\n\n// Display container\nconst displayContainer = document.createElement('div');\ndisplayContainer.classList.add('display');\n\ncontainer.appendChild(displayContainer);\n\n// Form container\nconst form = document.createElement('form');\nform.classList.add('search-bar');\ndisplayContainer.appendChild(form);\n\n// Input to form\nconst input = document.createElement('input');\ninput.type = 'text';\ninput.id = 'search-bar';\ninput.placeholder = 'Enter your City';\nform.appendChild(input);\n\n// Search Button\nconst button = document.createElement('button');\nbutton.type = 'submit';\nbutton.textContent = 'Search';\nform.appendChild(button);\n\n// Footer container\nconst footerContainer = document.createElement('div');\nfooterContainer.classList.add('footer');\nfooterContainer.textContent = \"DragonflyValkyrie's Weather App 2024\";\n\ncontainer.appendChild(footerContainer);\n\n\n//# sourceURL=webpack://javascript-template/./src/modules/layout.js?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2229424e7cc6d52eb6fb.svg\";\n\n//# sourceURL=webpack://javascript-template/./src/assets/images/logo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;