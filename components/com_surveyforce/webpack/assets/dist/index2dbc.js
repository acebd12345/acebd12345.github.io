/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/src/javascript/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/javascript/index.js":
/*!****************************************!*\
  !*** ./assets/src/javascript/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./assets/src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vmodel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vmodel.js */ \"./node_modules/vmodel.js/dist/jquery.vmodel.min.js\");\n/* harmony import */ var vmodel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vmodel_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_jquery_ui_dist_jquery_ui_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/jquery-ui-dist/jquery-ui.min.js */ \"./node_modules/jquery-ui-dist/jquery-ui.min.js\");\n/* harmony import */ var _node_modules_jquery_ui_dist_jquery_ui_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jquery_ui_dist_jquery_ui_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _md_body_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md/body.js */ \"./assets/src/javascript/md/body.js\");\n/* harmony import */ var _md_body_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_md_body_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _md_step_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md/step.js */ \"./assets/src/javascript/md/step.js\");\n/* harmony import */ var _md_step_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_md_step_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _md_section_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./md/section-block.js */ \"./assets/src/javascript/md/section-block.js\");\n/* harmony import */ var _md_section_block_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_md_section_block_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _md_global_susy_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./md/global/susy-screen */ \"./assets/src/javascript/md/global/susy-screen.js\");\n/* harmony import */ var _md_global_susy_screen__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_md_global_susy_screen__WEBPACK_IMPORTED_MODULE_6__);\n// 載入 SCSS\r\n\r\n \r\n// // 載入 jQuery Plugin\r\n\r\n\r\n\r\n// 載入會使用到的 JS 程式碼\r\n\r\n\r\n\r\n\r\n\r\n \r\n$(function (){\r\n    $.vmodel.get(\"global/susyScreen\", true);\r\n    $.vmodel.get(\"step\", true);\r\n    $.vmodel.get(\"section/block\", true);\r\n    $.vmodel.get(\"body\", true);\r\n})\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/src/javascript/index.js?");

/***/ }),

/***/ "./assets/src/javascript/md/body.js":
/*!******************************************!*\
  !*** ./assets/src/javascript/md/body.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(function (){\r\n    $.vmodel.create({\r\n        selector: 'body',\r\n        model: '--body',\r\n        isautoload: false,\r\n        method: function (){\r\n            var vs = this;\r\n            this.autoload = ['init'];\r\n            this.init = function (){\r\n            }\r\n            this.getElement = function (){\r\n                return (window.opera) ? (document.compatMode == \"CSS1Compat\" ? $('html') : $('body')) : $('html,body');\r\n            }\r\n\r\n            // 捲軸移動到指定位置\r\n            this.scrollTo = function (top, callback){\r\n                var $body = vs.getElement();\r\n\r\n                $body.animate({\r\n                    scrollTop: top\r\n                }, 1200, \"easeInOutCubic\", function (){\r\n                    if (callback) callback.call(this);\r\n                });\r\n            }\r\n        }\r\n    });\r\n    \r\n})\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/src/javascript/md/body.js?");

/***/ }),

/***/ "./assets/src/javascript/md/section-block.js":
/*!***************************************************!*\
  !*** ./assets/src/javascript/md/section-block.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(function (){\r\n    $.vmodel.create({\r\n        selector: '.main-section',\r\n        model: '--section/block',\r\n        isautoload: false,\r\n        method: function (){\r\n            var vs = this;\r\n            this.autoload = ['init', 'clickTitle', 'setCss', 'back', 'printPage', 'whenProcessing'];\r\n            this.init = function (){\r\n\r\n            }\r\n\r\n            // 一進入頁面，自動展開當前階段\r\n            this.whenProcessing = function (){\r\n                var target = $.vmodel.get(\"step\").getProccessingTarget();\r\n                \r\n                vs.findSection(target)\r\n                    .find(\".tab-point\")\r\n                    .trigger('click');\r\n            }\r\n\r\n            // 透過如 [data-target] 尋找對應的 section\r\n            this.findSection = function (target){\r\n\r\n                // 組合後會是如 section#f6 \r\n                return vs.root.find(\"section\" + target)\r\n            }\r\n\r\n            // 如果再列印頁面，將會自動展開所有的收闔內容\r\n            this.printPage = function (){\r\n                var isPrint = vs.root.find(\".is-input\").val() === \"true\" ? true : false;\r\n                if (isPrint === false) return false;\r\n\r\n                vs.root.find(\"h3\").each(function (){\r\n                    $(this).trigger('click')\r\n                })\r\n            }\r\n\r\n            // 返回頂端，也必須 focus() 回頂端\r\n            this.back = function (){\r\n                vs.root.on(\"click\", \".back-to-top\", function (){\r\n                    var targetId = $(this).parents(\"section\").attr(\"id\");\r\n\r\n                    var $desc = $(this).prev();\r\n                    vs.descHide($desc)\r\n                    $.vmodel.get(\"body\").scrollTo(0, function (){\r\n                        $.vmodel.get(\"step\").focus(targetId);\r\n                    });\r\n\r\n                    return false;\r\n                });\r\n                \r\n            }\r\n            this.clickTitle = function (){\r\n                vs.root.on(\"click\", \".tab-point\", function (e){\r\n                    e.preventDefault();\r\n                    vs.switchDesc(this);\r\n                });\r\n            }\r\n\r\n            // 切換 .desc\r\n            this.switchDesc = function (usethis){\r\n\r\n                if (vs.descIsOpen(usethis)) {\r\n                    vs.descHide(usethis);\r\n                }\r\n                else {\r\n                    vs.descShow(usethis);\r\n                }\r\n            }\r\n\r\n            this.descShowTarget = function (id){\r\n                var selector = vs.root.find(id).find(\".desc\");\r\n                // 需要讓 tabindex 被 focus, 而 tabindex 在標籤 a 是預設的\r\n                $(id).find(\".tab-point\").focus();\r\n                vs.descShow(selector)\r\n            }\r\n\r\n            this.descIsOpen = function (usethis){\r\n                var $desc = _desc(usethis);\r\n                return $desc.parents(\".section-block\").hasClass('open');\r\n            }\r\n\r\n            this.descShow = function (usethis){\r\n                var $desc = _desc(usethis);\r\n                $desc.parents(\".section-block\").addClass('open');\r\n                $desc.slideDown({\r\n                    duration: 1200,\r\n                    easing: 'easeOutExpo'\r\n                });\r\n            }\r\n\r\n            this.descHide = function (usethis){\r\n                var $desc = _desc(usethis);\r\n                $desc.parents(\".section-block\").removeClass('open');\r\n                $desc.slideUp({\r\n                    duration: 800,\r\n                    easing: 'easeOutExpo'\r\n                });\r\n            }\r\n\r\n            this.setCss = function (){\r\n\r\n                _setTitleHeight();\r\n                \r\n            }\r\n\r\n            var _setTitleHeight = function (){\r\n\r\n                $.vmodel.get(\"global/susyScreen\").listen({\r\n                    mobile: function (){\r\n                        _removeResizeHeight();\r\n                    },\r\n                    pad: function (){\r\n                        _resizeAction();\r\n                    },\r\n                    desktop: function (){\r\n                        _resizeAction();\r\n                    }\r\n                });\r\n                \r\n            }\r\n\r\n            var _removeResizeHeight = function (){\r\n                vs.root.find(\".completed, .processing\").css({\r\n                    height: \"unset\"\r\n                })\r\n            }\r\n\r\n            var _resizeAction = function (){\r\n                var target = vs.root.find(\".completed\");\r\n                _eachHeight(target);\r\n\r\n                var target = vs.root.find(\".processing\");\r\n                _eachHeight(target);\r\n            }\r\n\r\n            var _eachHeight = function (target){\r\n                target.each(function (){\r\n                    var h = $(this).find(\"h3\").height();\r\n                    $(this).height(h)\r\n                });\r\n            }\r\n\r\n            var _desc = function (usethis){\r\n                return $(usethis).parents(\".section-block\").find(\".desc\");\r\n            }\r\n        }\r\n    });\r\n    \r\n})\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/src/javascript/md/section-block.js?");

/***/ }),

/***/ "./assets/src/javascript/md/step.js":
/*!******************************************!*\
  !*** ./assets/src/javascript/md/step.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {$(function (){\r\n    $.vmodel.create({\r\n        selector: '#flows',\r\n        model: '--step',\r\n        isautoload: false,\r\n        method: function (){\r\n            var vs = this;\r\n            this.autoload = ['init', 'bindClick'];\r\n            this.init = function (){\r\n                _addAttr();\r\n            }\r\n\r\n            var _addAttr = function(){\r\n                vs.root.find(\"li a\").each(function (){\r\n                    var href = $(this).attr(\"href\");\r\n                    $(this).attr(\"data-target\", href)\r\n                })\r\n            }\r\n            this.bindClick = function (){\r\n                vs.root.find(\"li\").on(\"click\", \"a\", function (){\r\n                    var target = $(this).attr(\"data-target\");\r\n                    var top = $(target).offset().top;\r\n\r\n                    $.vmodel.get(\"body\").scrollTo(top, function (){\r\n                        $.vmodel.get(\"section/block\").descShowTarget(target);\r\n                    });\r\n                    \r\n                    return false;\r\n                });\r\n            }\r\n\r\n            this.focus = function (id){\r\n                console.log(vs.root.find(\"[href='#\"+id+\"']\"))\r\n                vs.root.find(\"[href='#\"+id+\"']\").focus();\r\n            }\r\n\r\n            // 尋找當前階段一進入頁面會的預選 (.proccessing)\r\n            this.getProccessingTarget = function (){\r\n                return vs.root.find(\".processing\").attr(\"data-target\");\r\n            }\r\n        }\r\n    });\r\n    \r\n})\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/src/javascript/md/step.js?");

/***/ })

/******/ });