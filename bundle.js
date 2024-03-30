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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*MAIN*/\nnav {\n  background-color: rgb(214, 218, 200);\n  width: 250px;\n  color: black;\n  padding: 10px;\n}\n\n.date-list, .project-list {\n  padding-left: 10px;\n  font-size: 1.25rem;\n  display: flex;\n  flex-direction: column;\n}\n\nnav h2 {\n  font-size: 1.5rem;\n  margin: 5px 0;\n}\n\n.project-subtitle {\n  margin-top: 10px;\n}\n\n.add-project-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 10px;\n  gap: 10px;\n}\n\n.input-project {\n  min-height: 30px;\n  font-size: 1.2rem;\n  padding-left: 10px;\n}\n\n.add-project-btn {\n  padding: 5px 0;\n  font-size: 1rem;\n  background-color: rgb(156, 175, 170);\n  border: 2px solid transparent;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(239, 188, 155);\n}\n\n.project-item, .date-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 5px;\n  cursor: pointer;\n}\n\n.project-item:hover, .date-item:hover {\n  background-color: rgb(251, 243, 213);\n}\n\n.delete-project-btn, .project-name {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  min-height: 20px;\n}\n\n.delete-project-btn svg {\n  height: 20px;\n  width: 20px;\n}\n\n/*TASK*/\n.task-container {\n  background-color: white;\n  width: 100%;\n}\n\n.task-heading {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-top: 20px;\n}\n\n.task-list {\n  width: 100%;\n  margin: 0 auto;\n  padding: 10px 20px;\n}\n\n.task-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid black;\n  padding: 5px 10px;\n  font-size: 1.25rem;\n  min-height: 10px;\n}\n\n.task-item:not(first-child) {\n  margin-top: 10px;\n}\n\n.task-item span {\n  cursor: pointer;\n}\n\n.task-info {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  justify-content: flex-start;\n}\n\n.task-status {\n  height: 20px;\n  width: 20px;\n}\n\n.task-action {\n  display: flex;\n  padding: 10px;\n  gap: 10px;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  justify-content: flex-end;\n}\n\n.task-priority {\n  width: 100px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-item: center;\n}\n\n.task-action svg {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-task-btn {\n  padding: 5px 10px;\n  font-size: 1rem;\n  display: block;\n  margin: 10px auto;\n  background-color: rgb(239, 188, 155);\n  border: 1px solid transparent;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(156, 175, 170);\n  color: black;\n}\n\n/*.project-dialog {*/\n/*\tmin-height: 40px;*/\n/*\tdisplay: flex;*/\n/*\tflex-direction: column;*/\n/*\twidth: 100%;*/\n/*\tmax-width: 250px;*/\n/*}*/\n.project-dialog {\n  width: 100%;\n  max-width: 500px;\n  min-height: 60px;\n  margin: 200px auto;\n  border: 1px solid transparent;\n  background-color: steelblue;\n  padding: 10px;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n.submit-btn-container {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n\n#input-project {\n  min-height: 40px;\n  padding-left: 10px;\n  font-size: 1rem;\n  text-align: center;\n  text-transform: normal;\n}\n\n.submit-btn-container button {\n  padding: 5px 10px;\n  font-size: 1.25rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n/*TASK DIALOG*/\n.task-dialog {\n  width: 100%;\n  max-width: 400px;\n  min-height: 300px;\n  margin: 70px auto;\n  padding: 20px;\n  border: 1px solid transparent;\n  background-color: rgb(251, 243, 213);\n}\n\n.task-input-list {\n  margin: 20px 0;\n}\n\n.task-input-list li {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  font-size: 1.25rem;\n}\n\n.task-input-list li:not(first-child) {\n  margin-top: 10px;\n}\n\n.task-input-list input {\n  min-height: 30px;\n}\n\n#task-title {\n  font-size: 1.25rem;\n  padding: 10px;\n}\n\n#task-description {\n  width: 100%;\n  min-height: 60px;\n  font-size: 1.25rem;\n  color: black;\n  font-weight: 500;\n}\n\n.task-btn-container {\n  margin-top: 30px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.task-btn-container button {\n  padding: 5px 10px;\n  font-size: 1rem;\n}\n\n#task-date {\n  min-height: 30px;\n  font-size: 1.25rem;\n  padding: 10px;\n}\n\n#task-priority {\n  min-height: 40px;\n  font-size: 1.25rem;\n  padding: 10px;\n}\n\n#task-priority option {\n  min-height: 50px;\n}\n\nfooter {\n  background-color: rgb(156, 175, 170);\n}\n\n.container.footer {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 1.25rem;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100vw;\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  background-color: rgb(251, 243, 213);\n}\n\nli {\n  list-style: none;\n}\n\na {\n  color: black;\n}\n\n.container {\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  height: 100%;\n  margin: 0 auto;\n}\n\n/*HEADER*/\nheader {\n  min-height: 40px;\n  text-align: left;\n  padding: 10px;\n  background-color: rgb(239, 188, 155);\n}\n\n.app-name {\n  font-size: 3rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/display.js":
/*!**********************************!*\
  !*** ./src/functions/display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.js */ \"./src/functions/icons.js\");\n\n\nclass Display {\n\n\tconstructor() {\n\t\tthis.filteredTask = [];\n\t}\n\n\trenderAllProject(data) {\n\t\tconst projectContainer = document.querySelector(\".project-list\");\n\t\tlet innerProject = \"\";\n\t\tdata.forEach((item, index) => {\n\t\t\tinnerProject += `<li class=\"project-item\" >\n\t\t\t<span class=\"project-name\" id=\"${item}-${index}\" >${item}</span>\n\t\t\t<span class=\"delete-project-btn\" id=\"${item}-${index}\" >${_icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete}</span>\n\t\t\t</li>`\n\t\t})\n\t\tprojectContainer.innerHTML = innerProject;\n\t}\n\n\n\trenderAllTasks(taskList) {\n\t\tconst taskContainer = document.querySelector(\".task-list\");\n\t\ttaskContainer.innerHTML = \"\";\n\t\tthis.renderTasks(taskList)\n\t\tconsole.log(taskList)\n\t}\n\n\n\trenderTasks(taskList) {\n\n\t\tconst taskContainer = document.querySelector(\".task-list\");\n\t\ttaskContainer.innerHTML = \"\";\n\t\tlet innerTask = \"\";\n\t\ttaskList.forEach(({ task, description, date, priority }, index) => {\n\t\t\tconst priorityIcon = (status) => {\n\t\t\t\tif (status === \"normal\") {\n\t\t\t\t\treturn _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lightStar;\n\t\t\t\t} else if (status === \"medium\") {\n\t\t\t\t\treturn _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].solidStar;\n\t\t\t\t} else {\n\t\t\t\t\treturn _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].solidStar + _icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].solidStar\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tinnerTask += `\n\t\t\t\t\t<li class=\"task-item\" >\n\t\t\t\t\t<div class=\"task-info\">\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"task-status\" />\n\t\t\t\t\t\t<span class=\"task-name\">${task}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"task-action\">\n\t\t\t\t\t\t<span class=\"task-date\">${date}</span>\n\t\t\t\t\t\t<span class=\"task-priority\">${priorityIcon(priority)}</span>\n\t\t\t\t\t\t<span class=\"task-edit\">${_icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].edit}</span>\n\t\t\t\t\t\t<span class=\"task-delete\">${_icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete}</span>\n\t\t\t\t\t\t<span class=\"task-info\">${_icons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].detail}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\t\t\t\n\t\t\t\t`\n\t\t\ttaskContainer.innerHTML = innerTask;\n\t\t})\n\n\n\t}\n\n\tshowTaskByProject(name, taskList) {\n\t\tconsole.log(taskList)\n\t\tthis.renderTasks(taskList.filter((task) => task.project === name))\n\n\t}\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);\n\n\n//# sourceURL=webpack://todo/./src/functions/display.js?");

/***/ }),

/***/ "./src/functions/icons.js":
/*!********************************!*\
  !*** ./src/functions/icons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst icons = {\n\tdelete: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z\"/></svg>`,\n\tbin: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z\"/></svg>`,\n\tsolidStar: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z\"/></svg>`,\n\tlightStar: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z\"/></svg>`,\n\tedit: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z\"/></svg>`,\n\tdetail: `<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z\"/></svg>`\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);\n\n\n//# sourceURL=webpack://todo/./src/functions/icons.js?");

/***/ }),

/***/ "./src/functions/project.js":
/*!**********************************!*\
  !*** ./src/functions/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n\t#project\n\tconstructor() {\n\t\tthis.#project = [\"home\", \"work\", \"school\"]\n\t}\n\t\n\tadd(name) {\n\t\tif (!this.#project.includes(name)) {\n\t\t\tthis.#project.push(name);\n\t\t\tconsole.log(this.#project)\n\t\t} else [\n\t\t\talert(\"Project already exist\")\n\t\t]\n\t}\n\t\n\tdelete(idx) {\n\t\tif (idx >= 0) {\n\t\t\tthis.#project.splice(idx, 1)\n\t\t} else {\n\t\t\treturn;\n\t\t}\n\t}\n\t\n\tprojectData() {\n\t\treturn [...this.#project]\n\t}\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo/./src/functions/project.js?");

/***/ }),

/***/ "./src/functions/task.js":
/*!*******************************!*\
  !*** ./src/functions/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n\t#task\n\tconstructor() {\n\t\tthis.#task = [\n\t\t\t{\n\t\t\t\tproject: \"home\",\n\t\t\t\ttask: \"eating\",\n\t\t\t\tdescription: \"must eat vegetables\",\n\t\t\t\tdate: \"23-02-2023\",\n\t\t\t\tpriority: \"normal\"\n\t\t\t},\n\t\t\t{\n\t\t\t\tproject: \"home\",\n\t\t\t\ttask: \"drinking\",\n\t\t\t\tdescription: \"must drink juice\",\n\t\t\t\tdate: \"23-02-2023\",\n\t\t\t\tpriority: \"high\"\n\t\t\t},\n\t\t\t{\n\t\t\t\tproject: \"school\",\n\t\t\t\ttask: \"practice basketball\",\n\t\t\t\tdescription: \"final competiton\",\n\t\t\t\tdate: \"23-02-2023\",\n\t\t\t\tpriority: \"medium\"\n\t\t\t},\n\t\t\t{\n\t\t\t\tproject: \"work\",\n\t\t\t\ttask: \"math test\",\n\t\t\t\tdescription: \"mid semester test\",\n\t\t\t\tdate: \"23-02-2023\",\n\t\t\t\tpriority: \"high\"\n\t\t\t}\n\t\t]\n\t}\n\n\taddTask(newTask) {\n\t\tthis.#task.push(newTask)\n\t\tconsole.log(this.#task)\n\t}\n\n\tdelete(name) {\n\t\tconsole.log(name)\n\n\t\tfor (let i = this.#task.length - 1; i >= 0; i--) {\n\n\t\t\tif (this.#task[i].project === name) {\n\t\t\t\tthis.#task.splice(i, 1)\n\t\t\t\tconsole.log(this.#task)\n\t\t\t}\n\t\t}\n\n\t}\n\n\ttaskData() {\n\t\tconsole.log(this.#task)\n\t\treturn [...this.#task]\n\t}\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://todo/./src/functions/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _functions_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/project.js */ \"./src/functions/project.js\");\n/* harmony import */ var _functions_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/display.js */ \"./src/functions/display.js\");\n/* harmony import */ var _functions_task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/task.js */ \"./src/functions/task.js\");\n\n\n\n\n\n//GLOBAL ELEMENT VARIABLES\nconst taskContainer = document.querySelector(\".task-list\")\n\n\nconst project = new _functions_project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst display = new _functions_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst task = new _functions_task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nlet taskList = task.taskData()\nlet projectList = project.projectData()\n\n\n//RENDER ALL PROJECT AND TASK\nconst renderTasks = () => {\n\tdisplay.renderTasks(task.taskData())\n}\n\n\n\nconst renderAllProject = () => {\n\tdisplay.renderAllProject(project.projectData())\n}\n\n\n\n//ADD PROJECT\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\n\nfunction handleAddProject(event) {\n\tlet input = document.querySelector(\".input-project\");\n\tif (input.value === \"\") {\n\t\talert(\"Project field cant be empty\");\n\t\treturn;\n\t}\n\tproject.add(input.value)\n\trenderAllProject()\n\tinput.value = \"\";\n\tconsole.log(input.value)\n}\n\n\nconst projectDialog = document.querySelector(\".project-dialog\")\nconst addProject = () => {\n\tprojectDialog.showModal();\n\n}\n\n//CANCEL DIALOG\nconst cancelDialog = document.querySelector(\".cancel-project\")\ncancelDialog.addEventListener(\"click\", () => {\n\tprojectDialog.close()\n})\n\naddProjectBtn.addEventListener(\"click\", addProject)\n\n//SUBMIT NEW PROJECT\nconst submitProject = document.querySelector(\".submit-project\")\nsubmitProject.addEventListener(\"click\", () => {\n\tconst input = document.querySelector(\"#input-project\")\n\n\tif (input.value === \"\") {\n\t\talert(\"Project field cant be empty\");\n\t\treturn;\n\t}\n\tproject.add(input.value.toLowerCase())\n\trenderAllProject()\n\tinput.value = \"\";\n\tconsole.log(input.value)\n\n})\n\n//HANDLE NAVIGATION BUTTON\nconst dateContainer = document.querySelector(\".date-list\");\n\ndateContainer.addEventListener(\"click\", event => {\n\tconst btn = event.target;\n\n\tlet btnName = btn.textContent.toLowerCase();\n\n\tswitch (btnName) {\n\t\tcase \"all tasks\":\n\t\t\trenderTasks();\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn;\n\t}\n\n})\n\n\n\n//HANDLE PROJECT EVENT\nconst projectBtn = document.querySelector(\".project-list\");\nconst handleProject = (event) => {\n\n\tlet btn = event.target.closest(\"SPAN\")\n\tif (btn === null) {\n\t\treturn;\n\t}\n\n\tlet data = btn.id.split(\"-\");\n\n\tswitch (btn.className) {\n\t\tcase \"delete-project-btn\":\n\t\t\thandleDelete(data)\n\t\t\tbreak;\n\t\tcase \"project-name\":\n\t\t\tshowTaskByProject(btn);\n\t\t\tbreak;\n\t\tdefault:\n\t\t\treturn;\n\t}\n}\n\n\nconst handleDelete = (data) => {\n\tlet idx = parseInt(data[1]);\n\tlet name = data[0]\n\tproject.delete(idx);\n\trenderAllProject()\n\ttask.delete(name)\n\tdisplay.renderAllTasks(task.taskData())\n}\n\n\nconst showTaskByProject = (name) => {\n\tlet projectName = name.id.split(\"-\")[0]\n\tconsole.log(projectName)\n\tdisplay.showTaskByProject(projectName, task.taskData())\n}\n\n\n//ADD TASK BUTTON OR SHOW DIALOG NEW TASK\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\nconst dialogTask = document.querySelector(\".task-dialog\");\nconst taskCancelBtn = document.querySelector(\".task-cancel-btn\");\nconst taskSubmitBtn = document.querySelector(\".task-submit-btn\");\n\n\nconst createTask = (project, task, description, date, priority) => {\n\treturn { project, task, description, date, priority }\n}\n\n//SETUP DIALOG ELEMENT\nlet projectName = \"\"\nconst taskEl = document.querySelector(\"#task-title\");\nconst descriptionEl = document.querySelector(\"#task-description\");\nconst dateEl = document.querySelector(\"#task-date\");\nconst priorityEl = document.querySelector(\"#task-priority\");\n\nconst clearDialogInput = () => {\n\ttaskEl.value = \"\";\n\tdescriptionEl.value = \"\";\n\tdateEl.value = \"\";\n\tpriorityEl.value = \"\";\n\tprojectName = \"\"\n}\n\n\n\naddTaskBtn.addEventListener(\"click\", () => {\n\tdialogTask.showModal()\n})\n\ntaskCancelBtn.addEventListener(\"click\", () => {\n\tdialogTask.close();\n\tclearDialogInput()\n})\n\n\n\ntaskSubmitBtn.addEventListener(\"click\", () => {\n\n\tif (!taskEl.value) {\n\t\talert(\"Task title can't be empty\")\n\t\treturn;\n\t}\n\n\tlet project = projectName;\n\tlet taskName = taskEl.value;\n\tlet description = descriptionEl.value;\n\tlet date = dateEl.value;\n\tlet priority = priorityEl.value;\n\n\n\tlet newTask = createTask(project, taskName, description, date, priority)\n\ttask.addTask(newTask)\n\trenderAllTasks()\n\tclearDialogInput()\n\n})\n\nconst start = () => {\n\trenderAllProject()\n\trenderTasks()\n}\n\nprojectBtn.addEventListener(\"click\", handleProject)\n\n\ndocument.addEventListener(\"DOMContentLoaded\", start)\n\n//# sourceURL=webpack://todo/./src/index.js?");

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