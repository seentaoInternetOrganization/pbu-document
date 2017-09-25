(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pbu-document"] = factory();
	else
		root["pbu-document"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PBUDocumentPreview = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PBUDocumentPreview\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'PBUDocumentPreview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PBUDocumentPreview).default;
	  }
	});

	var _PBUDocumentDataInit = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PBUDocumentDataInit\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'PBUDocumentDataInit', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PBUDocumentDataInit).default;
	  }
	});

	var _PBUDocumentAnswerSet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PBUDocumentAnswerSet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'PBUDocumentAnswerSet', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PBUDocumentAnswerSet).default;
	  }
	});

	var _PBUDocumentExamineSet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./PBUDocumentExamineSet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	Object.defineProperty(exports, 'PBUDocumentExamineSet', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PBUDocumentExamineSet).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ])
});
;