(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("antd/lib/spin/style"), require("antd/lib/spin"), require("whatwg-fetch"), require("antd/lib/radio/style"), require("antd/lib/radio"), require("antd/lib/checkbox/style"), require("antd/lib/checkbox"), require("antd/lib/select/style"), require("antd/lib/select"), require("antd/lib/popover/style"), require("antd/lib/popover"), require("antd/lib/button/style"), require("antd/lib/button"), require("antd/lib/table/style"), require("antd/lib/table"), require("classnames"), require("antd/lib/tooltip/style"), require("antd/lib/tooltip"), require("antd/lib/auto-complete/style"), require("antd/lib/auto-complete"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "antd/lib/spin/style", "antd/lib/spin", "whatwg-fetch", "antd/lib/radio/style", "antd/lib/radio", "antd/lib/checkbox/style", "antd/lib/checkbox", "antd/lib/select/style", "antd/lib/select", "antd/lib/popover/style", "antd/lib/popover", "antd/lib/button/style", "antd/lib/button", "antd/lib/table/style", "antd/lib/table", "classnames", "antd/lib/tooltip/style", "antd/lib/tooltip", "antd/lib/auto-complete/style", "antd/lib/auto-complete"], factory);
	else if(typeof exports === 'object')
		exports["pbu-document"] = factory(require("react"), require("prop-types"), require("antd/lib/spin/style"), require("antd/lib/spin"), require("whatwg-fetch"), require("antd/lib/radio/style"), require("antd/lib/radio"), require("antd/lib/checkbox/style"), require("antd/lib/checkbox"), require("antd/lib/select/style"), require("antd/lib/select"), require("antd/lib/popover/style"), require("antd/lib/popover"), require("antd/lib/button/style"), require("antd/lib/button"), require("antd/lib/table/style"), require("antd/lib/table"), require("classnames"), require("antd/lib/tooltip/style"), require("antd/lib/tooltip"), require("antd/lib/auto-complete/style"), require("antd/lib/auto-complete"));
	else
		root["pbu-document"] = factory(root["react"], root["prop-types"], root["antd/lib/spin/style"], root["antd/lib/spin"], root["whatwg-fetch"], root["antd/lib/radio/style"], root["antd/lib/radio"], root["antd/lib/checkbox/style"], root["antd/lib/checkbox"], root["antd/lib/select/style"], root["antd/lib/select"], root["antd/lib/popover/style"], root["antd/lib/popover"], root["antd/lib/button/style"], root["antd/lib/button"], root["antd/lib/table/style"], root["antd/lib/table"], root["classnames"], root["antd/lib/tooltip/style"], root["antd/lib/tooltip"], root["antd/lib/auto-complete/style"], root["antd/lib/auto-complete"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_92__, __WEBPACK_EXTERNAL_MODULE_94__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_101__, __WEBPACK_EXTERNAL_MODULE_110__, __WEBPACK_EXTERNAL_MODULE_111__, __WEBPACK_EXTERNAL_MODULE_112__, __WEBPACK_EXTERNAL_MODULE_113__, __WEBPACK_EXTERNAL_MODULE_114__, __WEBPACK_EXTERNAL_MODULE_115__, __WEBPACK_EXTERNAL_MODULE_135__, __WEBPACK_EXTERNAL_MODULE_136__, __WEBPACK_EXTERNAL_MODULE_137__, __WEBPACK_EXTERNAL_MODULE_138__, __WEBPACK_EXTERNAL_MODULE_139__, __WEBPACK_EXTERNAL_MODULE_140__, __WEBPACK_EXTERNAL_MODULE_143__, __WEBPACK_EXTERNAL_MODULE_170__, __WEBPACK_EXTERNAL_MODULE_171__, __WEBPACK_EXTERNAL_MODULE_172__, __WEBPACK_EXTERNAL_MODULE_173__) {
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

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _main = __webpack_require__(93);

	var _main2 = _interopRequireDefault(_main);

	var _editValuesContainer = __webpack_require__(174);

	var _editValuesContainer2 = _interopRequireDefault(_editValuesContainer);

	var _docUtils = __webpack_require__(131);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PBUDocumentEdit = function PBUDocumentEdit(_ref) {
	  var docConfigUrl = _ref.docConfigUrl,
	      docCode = _ref.docCode,
	      docData = _ref.docData,
	      subjectTotals = _ref.subjectTotals,
	      subjectDetails = _ref.subjectDetails,
	      currentCopy = _ref.currentCopy,
	      activityId = _ref.activityId,
	      subjectsTopLevel = _ref.subjectsTopLevel,
	      subjectsTree = _ref.subjectsTree,
	      hasErrorInfo = _ref.hasErrorInfo,
	      onSearchSubjects = _ref.onSearchSubjects,
	      onDocChange = _ref.onDocChange,
	      onAccountTitleSubejctSelected = _ref.onAccountTitleSubejctSelected,
	      onAccountDetailSubjectSelected = _ref.onAccountDetailSubjectSelected,
	      editable = _ref.editable,
	      onConfigLoaded = _ref.onConfigLoaded,
	      onSubjectBlur = _ref.onSubjectBlur,
	      currentPage = _ref.currentPage;


	  var docProps = {
	    docConfigUrl: docConfigUrl,
	    docCode: docCode,
	    docData: docData,
	    subjectTotals: subjectTotals,
	    subjectDetails: subjectDetails,
	    currentCopy: currentCopy,
	    activityId: activityId,
	    subjectsTopLevel: subjectsTopLevel,
	    subjectsTree: subjectsTree,
	    hasErrorInfo: hasErrorInfo,
	    onSearchSubjects: onSearchSubjects,
	    onDocChange: onDocChange,
	    onAccountTitleSubejctSelected: onAccountTitleSubejctSelected,
	    onAccountDetailSubjectSelected: onAccountDetailSubjectSelected,
	    editable: editable,
	    onSubjectBlur: onSubjectBlur,
	    currentPage: currentPage
	  };

	  return _react2.default.createElement(
	    _main2.default,
	    { docConfigUrl: docConfigUrl,
	      onConfigLoaded: onConfigLoaded },
	    _react2.default.createElement(_editValuesContainer2.default, (0, _extends3.default)({ key: docConfigUrl,
	      ratioHeight: 1,
	      ratioWidth: 1
	    }, docProps))
	  );
	}; /**
	    * @author AngusC
	    * @description 学生编辑用组件
	    */

	PBUDocumentEdit.propTypes = {
	  /**
	   * 单据配置文件地址
	   */
	  docConfigUrl: _propTypes2.default.string.isRequired,
	  /**
	   * 单据编码
	   */
	  docCode: _propTypes2.default.string,
	  /**
	   * 数据集合
	   */
	  docData: _propTypes2.default.object.isRequired,
	  /**
	   * 总账科目
	   */
	  subjectTotals: _propTypes2.default.array,
	  /**
	   * 明细账科目
	   */
	  subjectDetails: _propTypes2.default.array,
	  /**
	   * 当前联
	   */
	  currentCopy: _propTypes2.default.number,
	  /**
	   * 当前节点Id
	   */
	  activityId: _propTypes2.default.string.isRequired,
	  /**
	   * 第0级科目分类
	   */
	  subjectsTopLevel: _propTypes2.default.array,
	  /**
	   * 第0级科目分类对应的子分类
	   */
	  subjectsTree: _propTypes2.default.any,
	  /**
	   * 搜索科目时的回调
	   */
	  onSearchSubjects: _propTypes2.default.func,
	  /**
	   * 是否显示标错信息，默认false
	   */
	  hasErrorInfo: _propTypes2.default.bool,
	  /**
	   * 账单所属会计科目即第0级被选中时的回调
	   */
	  onAccountTitleSubejctSelected: _propTypes2.default.func,
	  /**
	   * 账单所属会计明细科目被选中时的回调
	   */
	  onAccountDetailSubjectSelected: _propTypes2.default.func,
	  /**
	   * 是否可编辑，默认true
	   */
	  editable: _propTypes2.default.bool,
	  /**
	   * onChange回调
	   */
	  onDocChange: _propTypes2.default.func,
	  /**
	   * 当单据配置文件加载完毕时的回调
	   * @param {Object} docConfig 单据配置文件信息
	   */
	  onConfigLoaded: _propTypes2.default.func,
	  /**
	   * 记账凭证单据总账或明细账科目编辑完失去焦点的回调
	   */
	  onSubjectBlur: _propTypes2.default.func,
	  /**
	   * 当前页
	   */
	  currentPage: _propTypes2.default.number
	};

	PBUDocumentEdit.defaultProps = {
	  hasErrorInfo: false,
	  subjectTotals: [],
	  subjectDetails: [],
	  subjectsTopLevel: [],
	  subjectsTree: [],
	  currentCopy: 0,
	  onAccountTitleSubejctSelected: function onAccountTitleSubejctSelected(subject) {
	    console.log('subject = ', subject);
	  },
	  onAccountDetailSubjectSelected: function onAccountDetailSubjectSelected(subject) {
	    console.log('subject = ', subject);
	  },
	  onSearchSubjects: function onSearchSubjects(value, subjectId) {
	    console.log('value = ', value, ' subjectId = ', subjectId);
	  },
	  editable: true,
	  onDocChange: function onDocChange(data) {
	    console.log('data = ', data);
	  },
	  onSubjectBlur: function onSubjectBlur() {},
	  currentPage: 1
	};

	exports.default = PBUDocumentEdit;


	PBUDocumentEdit.mapExaminesWithAll = _docUtils.mapExaminesWithAll;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(2);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(20) });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var ctx = __webpack_require__(8);
	var hide = __webpack_require__(10);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(9);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(15) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(12);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var toPrimitive = __webpack_require__(18);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(15) && !__webpack_require__(16)(function () {
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(16)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(6).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(21);
	var gOPS = __webpack_require__(36);
	var pIE = __webpack_require__(37);
	var toObject = __webpack_require__(38);
	var IObject = __webpack_require__(25);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(16)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(22);
	var enumBugKeys = __webpack_require__(35);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(23);
	var toIObject = __webpack_require__(24);
	var arrayIndexOf = __webpack_require__(28)(false);
	var IE_PROTO = __webpack_require__(32)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(25);
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(26);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24);
	var toLength = __webpack_require__(29);
	var toAbsoluteIndex = __webpack_require__(31);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(30);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(33)('keys');
	var uid = __webpack_require__(34);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(27);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(38);
	var $getPrototypeOf = __webpack_require__(42);

	__webpack_require__(43)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(23);
	var toObject = __webpack_require__(38);
	var IE_PROTO = __webpack_require__(32)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5);
	var core = __webpack_require__(7);
	var fails = __webpack_require__(16);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(46);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	var $Object = __webpack_require__(7).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(51);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(70);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(65);
	module.exports = __webpack_require__(69).f('iterator');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(54)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(55)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(30);
	var defined = __webpack_require__(27);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(56);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(57);
	var hide = __webpack_require__(10);
	var has = __webpack_require__(23);
	var Iterators = __webpack_require__(58);
	var $iterCreate = __webpack_require__(59);
	var setToStringTag = __webpack_require__(63);
	var getPrototypeOf = __webpack_require__(42);
	var ITERATOR = __webpack_require__(64)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(60);
	var descriptor = __webpack_require__(19);
	var setToStringTag = __webpack_require__(63);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(10)(IteratorPrototype, __webpack_require__(64)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(12);
	var dPs = __webpack_require__(61);
	var enumBugKeys = __webpack_require__(35);
	var IE_PROTO = __webpack_require__(32)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(62).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(11);
	var anObject = __webpack_require__(12);
	var getKeys = __webpack_require__(21);

	module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(6).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f;
	var has = __webpack_require__(23);
	var TAG = __webpack_require__(64)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(33)('wks');
	var uid = __webpack_require__(34);
	var Symbol = __webpack_require__(6).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(66);
	var global = __webpack_require__(6);
	var hide = __webpack_require__(10);
	var Iterators = __webpack_require__(58);
	var TO_STRING_TAG = __webpack_require__(64)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(67);
	var step = __webpack_require__(68);
	var Iterators = __webpack_require__(58);
	var toIObject = __webpack_require__(24);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(64);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(72);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(6);
	var has = __webpack_require__(23);
	var DESCRIPTORS = __webpack_require__(15);
	var $export = __webpack_require__(5);
	var redefine = __webpack_require__(57);
	var META = __webpack_require__(73).KEY;
	var $fails = __webpack_require__(16);
	var shared = __webpack_require__(33);
	var setToStringTag = __webpack_require__(63);
	var uid = __webpack_require__(34);
	var wks = __webpack_require__(64);
	var wksExt = __webpack_require__(69);
	var wksDefine = __webpack_require__(74);
	var enumKeys = __webpack_require__(75);
	var isArray = __webpack_require__(76);
	var anObject = __webpack_require__(12);
	var toIObject = __webpack_require__(24);
	var toPrimitive = __webpack_require__(18);
	var createDesc = __webpack_require__(19);
	var _create = __webpack_require__(60);
	var gOPNExt = __webpack_require__(77);
	var $GOPD = __webpack_require__(79);
	var $DP = __webpack_require__(11);
	var $keys = __webpack_require__(21);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(78).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(37).f = $propertyIsEnumerable;
	  __webpack_require__(36).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(56)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(34)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(23);
	var setDesc = __webpack_require__(11).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(16)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6);
	var core = __webpack_require__(7);
	var LIBRARY = __webpack_require__(56);
	var wksExt = __webpack_require__(69);
	var defineProperty = __webpack_require__(11).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(21);
	var gOPS = __webpack_require__(36);
	var pIE = __webpack_require__(37);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(26);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(24);
	var gOPN = __webpack_require__(78).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(22);
	var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(37);
	var createDesc = __webpack_require__(19);
	var toIObject = __webpack_require__(24);
	var toPrimitive = __webpack_require__(18);
	var has = __webpack_require__(23);
	var IE8_DOM_DEFINE = __webpack_require__(14);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 80 */
/***/ (function(module, exports) {

	

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(74)('asyncIterator');


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(74)('observable');


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(84);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(88);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(87).set });


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13);
	var anObject = __webpack_require__(12);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(8)(Function.call, __webpack_require__(79).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	var $Object = __webpack_require__(7).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(60) });


/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_92__;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _style2 = __webpack_require__(94);

	var _spin = __webpack_require__(95);

	var _spin2 = _interopRequireDefault(_spin);

	var _getPrototypeOf = __webpack_require__(39);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(44);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(45);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(49);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(83);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _utils = __webpack_require__(96);

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author AngusC
	 * @description root 组件，加载配置文件
	 */

	var MainContainer = function (_Component) {
	    (0, _inherits3.default)(MainContainer, _Component);

	    function MainContainer() {
	        var _ref;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, MainContainer);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MainContainer.__proto__ || (0, _getPrototypeOf2.default)(MainContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            docConfig: [],
	            errMsg: '加载中...'
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(MainContainer, [{
	        key: 'loadDocConfig',
	        value: function loadDocConfig(props) {
	            var _this2 = this;

	            var docConfigUrl = props.docConfigUrl;


	            if (!docConfigUrl || (0, _isEmpty2.default)(docConfigUrl)) {
	                return;
	            }

	            this.setState({
	                docConfig: [],
	                errMsg: '加载中...'
	            }, function () {
	                (0, _utils.loadConfig)(docConfigUrl, function (docConfig) {
	                    if (!docConfig || docConfig.length < 1) {
	                        _this2.setState({
	                            errMsg: '.'
	                        });
	                    } else {
	                        _this2.setState({
	                            docConfig: docConfig
	                        });
	                        _this2.props.onConfigLoaded(docConfig);
	                    }
	                });
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.loadDocConfig(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.docConfigUrl && typeof this.props.docConfigUrl === 'string' && !(0, _isEmpty2.default)(this.props.docConfigUrl) && nextProps.docConfigUrl === this.props.docConfigUrl) {
	                return;
	            }

	            this.loadDocConfig(nextProps);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _state = this.state,
	                docConfig = _state.docConfig,
	                errMsg = _state.errMsg;


	            var renderChildren = function renderChildren() {
	                var childrenNodes = _react2.default.Children.map(_this3.props.children, function (child) {
	                    return _react2.default.cloneElement(child, { config: docConfig });
	                });
	                return childrenNodes;
	            };

	            return _react2.default.createElement(
	                'div',
	                { className: this.props.className },
	                docConfig.length > 0 ? renderChildren() : _react2.default.createElement(_spin2.default, null)
	            );
	        }
	    }]);
	    return MainContainer;
	}(_react.Component);

	exports.default = MainContainer;


	MainContainer.propTypes = {
	    /**
	     * 单据配置文件
	     */
	    docConfigUrl: _propTypes2.default.string.isRequired,
	    /**
	     * 类名
	     */
	    className: _propTypes2.default.string,
	    /**
	     * 当单据配置文件加载完毕时的回调
	     * @param {Object} docConfig 单据配置文件信息
	     */
	    onConfigLoaded: _propTypes2.default.func
	};

	MainContainer.defaultProps = {
	    onConfigLoaded: function onConfigLoaded(config) {
	        console.log('config');
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_95__;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _defineProperty2 = __webpack_require__(97);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends4 = __webpack_require__(1);

	var _extends5 = _interopRequireDefault(_extends4);

	var _keys = __webpack_require__(98);

	var _keys2 = _interopRequireDefault(_keys);

	var _typeof2 = __webpack_require__(50);

	var _typeof3 = _interopRequireDefault(_typeof2);

	__webpack_require__(101);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* 矩形碰撞检测
	* @param  {Object} r1 [description]
	* @param  {Object} r2 [description]
	* @return {Boolean}    [description]
	*/
	exports.intersectRect = function (r1, r2) {
	    return !(r2.left > r1.left + r1.width || r2.left + r2.width < r1.left || r2.top > r1.top + r1.height || r2.top + r2.height < r1.top);
	};

	/**
	 * 加载单据配置文件
	 * @param  {String}   url      配置文件地址
	 * @param  {Function} callback 加载后的回调
	 */
	/**
	 * @author AngusC
	 * @description 工具
	 */

	// const fetch = require('whatwg-fetch');
	// console.log('fetch = ', fetch);

	exports.loadConfig = function (url, callback) {
	    if (!url || typeof url === 'string' && url.trim().length === 0) {
	        callback();
	    }

	    fetch(url).then(function (response) {
	        return response.json();
	    }).then(function (data) {
	        callback(data.docConfig);
	    }).catch(function (err) {
	        console.log('err = ', err);
	        callback();
	    });
	};

	/**
	 * md5 hash
	 * @type {String}
	 */
	exports.md5 = __webpack_require__(102);
	/**
	 * 根据属性描述`desc`获取`obj`的子代的属性
	 * @eg:
	 * const obj = {a: {b: {c: 0}}};
	 * const c = getDescendantantProp(obj, "a.b.c")
	 * //c = 0
	 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
	 * @param  {Object} obj  [description]
	 * @param  {String} desc [description]
	 * @return {Object}      [description]
	 */
	exports.getDescendantantProp = function (obj, desc) {
	    if (!obj) {
	        return;
	    }

	    if (!desc) {
	        return obj;
	    }

	    var arr = desc.split('.');

	    while (arr.length) {
	        if (obj) {
	            obj = obj[arr.shift()];
	        } else {
	            return;
	        }
	    }

	    return obj;
	};

	/**
	 * 过滤掉obj的key属性，并生成一个新的对象
	 * @return {Object|undefined}
	 */
	exports.excludePropertyOfObject = function (obj, key) {
	    if (!obj || (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object' || !key || typeof key !== 'string') {
	        return;
	    }

	    return (0, _keys2.default)(obj).filter(function (_key) {
	        return _key !== key;
	    }).reduce(function (sum, _key) {
	        return (0, _extends5.default)({}, sum, (0, _defineProperty3.default)({}, _key, obj[_key]));
	    }, {});
	};

	/**
	 * 过滤掉obj的keys属性，并生成一个新的对象
	 * @param  {Object} obj  [description]
	 * @param  {String|Array} keys [description]
	 * @return {Object|undefined}      [description]
	 */
	exports.excludePropertiesOfObject = function (obj, keys) {
	    if (!obj || (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object' || !keys || typeof keys !== 'string' && !Array.isArray(keys)) {
	        return;
	    }

	    return (0, _keys2.default)(obj).filter(function (_key) {
	        if (typeof keys === 'string') {
	            return _key !== keys;
	        } else {
	            return keys.indexOf(_key) === -1;
	        }
	    }).reduce(function (sum, _key) {
	        return (0, _extends5.default)({}, sum, (0, _defineProperty3.default)({}, _key, obj[_key]));
	    }, {});
	};

	exports.isPromise = function (obj) {
	    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(46);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(100);
	module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(38);
	var $keys = __webpack_require__(21);

	__webpack_require__(43)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * JavaScript MD5
	 * https://github.com/blueimp/JavaScript-MD5
	 *
	 * Copyright 2011, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * https://opensource.org/licenses/MIT
	 *
	 * Based on
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/* global define */

	;(function ($) {
	  'use strict'

	  /*
	  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	  * to work around bugs in some JS interpreters.
	  */
	  function safeAdd (x, y) {
	    var lsw = (x & 0xffff) + (y & 0xffff)
	    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
	    return (msw << 16) | (lsw & 0xffff)
	  }

	  /*
	  * Bitwise rotate a 32-bit number to the left.
	  */
	  function bitRotateLeft (num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt))
	  }

	  /*
	  * These functions implement the four basic operations the algorithm uses.
	  */
	  function md5cmn (q, a, b, x, s, t) {
	    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
	  }
	  function md5ff (a, b, c, d, x, s, t) {
	    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
	  }
	  function md5gg (a, b, c, d, x, s, t) {
	    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
	  }
	  function md5hh (a, b, c, d, x, s, t) {
	    return md5cmn(b ^ c ^ d, a, b, x, s, t)
	  }
	  function md5ii (a, b, c, d, x, s, t) {
	    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
	  }

	  /*
	  * Calculate the MD5 of an array of little-endian words, and a bit length.
	  */
	  function binlMD5 (x, len) {
	    /* append padding */
	    x[len >> 5] |= 0x80 << (len % 32)
	    x[((len + 64) >>> 9 << 4) + 14] = len

	    var i
	    var olda
	    var oldb
	    var oldc
	    var oldd
	    var a = 1732584193
	    var b = -271733879
	    var c = -1732584194
	    var d = 271733878

	    for (i = 0; i < x.length; i += 16) {
	      olda = a
	      oldb = b
	      oldc = c
	      oldd = d

	      a = md5ff(a, b, c, d, x[i], 7, -680876936)
	      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
	      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
	      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
	      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
	      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
	      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
	      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
	      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
	      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
	      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
	      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
	      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
	      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
	      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
	      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

	      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
	      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
	      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
	      b = md5gg(b, c, d, a, x[i], 20, -373897302)
	      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
	      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
	      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
	      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
	      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
	      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
	      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
	      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
	      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
	      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
	      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
	      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

	      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
	      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
	      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
	      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
	      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
	      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
	      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
	      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
	      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
	      d = md5hh(d, a, b, c, x[i], 11, -358537222)
	      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
	      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
	      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
	      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
	      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
	      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

	      a = md5ii(a, b, c, d, x[i], 6, -198630844)
	      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
	      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
	      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
	      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
	      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
	      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
	      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
	      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
	      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
	      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
	      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
	      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
	      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
	      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
	      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

	      a = safeAdd(a, olda)
	      b = safeAdd(b, oldb)
	      c = safeAdd(c, oldc)
	      d = safeAdd(d, oldd)
	    }
	    return [a, b, c, d]
	  }

	  /*
	  * Convert an array of little-endian words to a string
	  */
	  function binl2rstr (input) {
	    var i
	    var output = ''
	    var length32 = input.length * 32
	    for (i = 0; i < length32; i += 8) {
	      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
	    }
	    return output
	  }

	  /*
	  * Convert a raw string to an array of little-endian words
	  * Characters >255 have their high-byte silently ignored.
	  */
	  function rstr2binl (input) {
	    var i
	    var output = []
	    output[(input.length >> 2) - 1] = undefined
	    for (i = 0; i < output.length; i += 1) {
	      output[i] = 0
	    }
	    var length8 = input.length * 8
	    for (i = 0; i < length8; i += 8) {
	      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
	    }
	    return output
	  }

	  /*
	  * Calculate the MD5 of a raw string
	  */
	  function rstrMD5 (s) {
	    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
	  }

	  /*
	  * Calculate the HMAC-MD5, of a key and some data (raw strings)
	  */
	  function rstrHMACMD5 (key, data) {
	    var i
	    var bkey = rstr2binl(key)
	    var ipad = []
	    var opad = []
	    var hash
	    ipad[15] = opad[15] = undefined
	    if (bkey.length > 16) {
	      bkey = binlMD5(bkey, key.length * 8)
	    }
	    for (i = 0; i < 16; i += 1) {
	      ipad[i] = bkey[i] ^ 0x36363636
	      opad[i] = bkey[i] ^ 0x5c5c5c5c
	    }
	    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
	    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
	  }

	  /*
	  * Convert a raw string to a hex string
	  */
	  function rstr2hex (input) {
	    var hexTab = '0123456789abcdef'
	    var output = ''
	    var x
	    var i
	    for (i = 0; i < input.length; i += 1) {
	      x = input.charCodeAt(i)
	      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
	    }
	    return output
	  }

	  /*
	  * Encode a string as utf-8
	  */
	  function str2rstrUTF8 (input) {
	    return unescape(encodeURIComponent(input))
	  }

	  /*
	  * Take string arguments and return either raw or hex encoded strings
	  */
	  function rawMD5 (s) {
	    return rstrMD5(str2rstrUTF8(s))
	  }
	  function hexMD5 (s) {
	    return rstr2hex(rawMD5(s))
	  }
	  function rawHMACMD5 (k, d) {
	    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
	  }
	  function hexHMACMD5 (k, d) {
	    return rstr2hex(rawHMACMD5(k, d))
	  }

	  function md5 (string, key, raw) {
	    if (!key) {
	      if (!raw) {
	        return hexMD5(string)
	      }
	      return rawMD5(string)
	    }
	    if (!raw) {
	      return hexHMACMD5(key, string)
	    }
	    return rawHMACMD5(key, string)
	  }

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return md5
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else if (typeof module === 'object' && module.exports) {
	    module.exports = md5
	  } else {
	    $.md5 = md5
	  }
	})(this)


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isEmpty;

	var _assertString = __webpack_require__(104);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isEmpty(str) {
	  (0, _assertString2.default)(str);
	  return str.length === 0;
	}
	module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assertString;
	function assertString(input) {
	  var isString = typeof input === 'string' || input instanceof String;

	  if (!isString) {
	    throw new TypeError('This library (validator.js) validates strings only');
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	module.exports = __webpack_require__(7).Object.values;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(5);
	var $values = __webpack_require__(109)(false);

	$export($export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys = __webpack_require__(21);
	var toIObject = __webpack_require__(24);
	var isEnum = __webpack_require__(37).f;
	module.exports = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};


/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_110__;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_111__;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_112__;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_113__;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_114__;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_115__;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(39);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(44);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(45);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(49);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(83);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DocBG = function (_Component) {
	    (0, _inherits3.default)(DocBG, _Component);

	    function DocBG() {
	        var _ref;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, DocBG);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DocBG.__proto__ || (0, _getPrototypeOf2.default)(DocBG)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            loading: false,
	            currentCopy: _this.props.currentCopy
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(DocBG, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.setState({
	                currentCopy: this.props.currentCopy
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                currentCopy: this.props.currentCopy
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                config = _props.config,
	                ratioWidth = _props.ratioWidth,
	                ratioHeight = _props.ratioHeight,
	                children = _props.children,
	                className = _props.className,
	                currentCopy = _props.currentCopy;
	            var loading = this.state.loading;

	            //最大可渲染联次

	            var copyToRender = function copyToRender() {
	                if (currentCopy > config.length - 1) {
	                    return config.length - 1;
	                }

	                return currentCopy;
	            };

	            var style = (0, _extends3.default)({
	                backgroundImage: 'url(' + config[copyToRender()].backgroundImage + ')',
	                backgroundColor: '#FFFFFF',
	                backgroundRepeat: 'no-repeat',
	                backgroundPosition: 'center',
	                width: config[copyToRender()].width * ratioWidth,
	                height: config[copyToRender()].height * ratioHeight
	            }, config[copyToRender()].style);
	            var bgKey = config[copyToRender()].backgroundImage;

	            return _react2.default.createElement(
	                'div',
	                { key: loading + '_' + bgKey,
	                    className: className,
	                    style: style },
	                _react2.default.createElement(
	                    'span',
	                    { style: { display: 'none' } },
	                    config[copyToRender()].backgroundImage
	                ),
	                children
	            );
	        }
	    }]);
	    return DocBG;
	}(_react.Component); /**
	                      * @author AngusC
	                      * @description 单据背景组件
	                      */


	exports.default = DocBG;


	DocBG.propTypes = {
	    /**
	     * 单据当前联配置
	     */
	    config: _propTypes2.default.array.isRequired,
	    /**
	     * 宽度缩放比例，默认1
	     */
	    ratioWidth: _propTypes2.default.number,
	    /**
	     * 高度缩放比例，默认1
	     */
	    ratioHeight: _propTypes2.default.number,
	    /**
	     * className
	     */
	    className: _propTypes2.default.string,
	    /**
	     * 当前联次
	     */
	    currentCopy: _propTypes2.default.number,
	    /**
	     * 背景图片已经加载成功
	     */
	    onBackgroundLoaded: _propTypes2.default.func
	};

	DocBG.defaultProps = {
	    ratioWidth: 1,
	    ratioHeight: 1,
	    currentCopy: 0,
	    onBackgroundLoaded: function onBackgroundLoaded() {}
	};
	module.exports = exports['default'];

/***/ }),
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap && typeof btoa === 'function') {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
		// eslint-disable-next-line no-undef
		var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
		var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

		return '/*# ' + data + ' */';
	}


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/

	var stylesInDom = {};

	var	memoize = function (fn) {
		var memo;

		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	};

	var isOldIE = memoize(function () {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	});

	var getElement = (function (fn) {
		var memo = {};

		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}

			return memo[selector]
		};
	})(function (target) {
		return document.querySelector(target)
	});

	var singleton = null;
	var	singletonCounter = 0;
	var	stylesInsertedAtTop = [];

	var	fixUrls = __webpack_require__(121);

	module.exports = function(list, options) {
		if (false) {
			if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};

		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (!options.singleton) options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (!options.insertInto) options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (!options.insertAt) options.insertAt = "bottom";

		var styles = listToStyles(list, options);

		addStylesToDom(styles, options);

		return function update (newList) {
			var mayRemove = [];

			for (var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];

				domStyle.refs--;
				mayRemove.push(domStyle);
			}

			if(newList) {
				var newStyles = listToStyles(newList, options);
				addStylesToDom(newStyles, options);
			}

			for (var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];

				if(domStyle.refs === 0) {
					for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom (styles, options) {
		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			if(domStyle) {
				domStyle.refs++;

				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}

				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];

				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}

				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles (list, options) {
		var styles = [];
		var newStyles = {};

		for (var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = options.base ? item[0] + options.base : item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};

			if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
			else newStyles[id].parts.push(part);
		}

		return styles;
	}

	function insertStyleElement (options, style) {
		var target = getElement(options.insertInto)

		if (!target) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}

		var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

		if (options.insertAt === "top") {
			if (!lastStyleElementInsertedAtTop) {
				target.insertBefore(style, target.firstChild);
			} else if (lastStyleElementInsertedAtTop.nextSibling) {
				target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				target.appendChild(style);
			}
			stylesInsertedAtTop.push(style);
		} else if (options.insertAt === "bottom") {
			target.appendChild(style);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement (style) {
		if (style.parentNode === null) return false;
		style.parentNode.removeChild(style);

		var idx = stylesInsertedAtTop.indexOf(style);
		if(idx >= 0) {
			stylesInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement (options) {
		var style = document.createElement("style");

		options.attrs.type = "text/css";

		addAttrs(style, options.attrs);
		insertStyleElement(options, style);

		return style;
	}

	function createLinkElement (options) {
		var link = document.createElement("link");

		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		addAttrs(link, options.attrs);
		insertStyleElement(options, link);

		return link;
	}

	function addAttrs (el, attrs) {
		Object.keys(attrs).forEach(function (key) {
			el.setAttribute(key, attrs[key]);
		});
	}

	function addStyle (obj, options) {
		var style, update, remove, result;

		// If a transform function was defined, run it on the css
		if (options.transform && obj.css) {
		    result = options.transform(obj.css);

		    if (result) {
		    	// If transform returns a value, use that instead of the original css.
		    	// This allows running runtime transformations on the css.
		    	obj.css = result;
		    } else {
		    	// If the transform function returns a falsy value, don't add this css.
		    	// This allows conditional loading of css
		    	return function() {
		    		// noop
		    	};
		    }
		}

		if (options.singleton) {
			var styleIndex = singletonCounter++;

			style = singleton || (singleton = createStyleElement(options));

			update = applyToSingletonTag.bind(null, style, styleIndex, false);
			remove = applyToSingletonTag.bind(null, style, styleIndex, true);

		} else if (
			obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function"
		) {
			style = createLinkElement(options);
			update = updateLink.bind(null, style, options);
			remove = function () {
				removeStyleElement(style);

				if(style.href) URL.revokeObjectURL(style.href);
			};
		} else {
			style = createStyleElement(options);
			update = applyToTag.bind(null, style);
			remove = function () {
				removeStyleElement(style);
			};
		}

		update(obj);

		return function updateStyle (newObj) {
			if (newObj) {
				if (
					newObj.css === obj.css &&
					newObj.media === obj.media &&
					newObj.sourceMap === obj.sourceMap
				) {
					return;
				}

				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;

			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag (style, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (style.styleSheet) {
			style.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = style.childNodes;

			if (childNodes[index]) style.removeChild(childNodes[index]);

			if (childNodes.length) {
				style.insertBefore(cssNode, childNodes[index]);
			} else {
				style.appendChild(cssNode);
			}
		}
	}

	function applyToTag (style, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			style.setAttribute("media", media)
		}

		if(style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			while(style.firstChild) {
				style.removeChild(style.firstChild);
			}

			style.appendChild(document.createTextNode(css));
		}
	}

	function updateLink (link, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/*
			If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
			and there is no publicPath defined then lets turn convertToAbsoluteUrls
			on by default.  Otherwise default to the convertToAbsoluteUrls option
			directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls) {
			css = fixUrls(css);
		}

		if (sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = link.href;

		link.href = URL.createObjectURL(blob);

		if(oldSrc) URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 121 */
/***/ (function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DOC_TYPE = exports.MODE = exports.EXAMINE_NAME = exports.EXAMINE_TEXT = exports.EXAMINE_COLOR = exports.EXAMINE = exports.ELEMENT_TYPE = exports.ELEMENT = undefined;

	var _element = __webpack_require__(123);

	var _element2 = _interopRequireDefault(_element);

	var _elementType = __webpack_require__(124);

	var _elementType2 = _interopRequireDefault(_elementType);

	var _examine = __webpack_require__(125);

	var _examine2 = _interopRequireDefault(_examine);

	var _examineColor = __webpack_require__(126);

	var _examineColor2 = _interopRequireDefault(_examineColor);

	var _examineText = __webpack_require__(127);

	var _examineText2 = _interopRequireDefault(_examineText);

	var _examineTitle = __webpack_require__(128);

	var _examineTitle2 = _interopRequireDefault(_examineTitle);

	var _mode = __webpack_require__(129);

	var _mode2 = _interopRequireDefault(_mode);

	var _docType = __webpack_require__(130);

	var _docType2 = _interopRequireDefault(_docType);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ELEMENT = _element2.default;
	exports.ELEMENT_TYPE = _elementType2.default;
	exports.EXAMINE = _examine2.default;
	exports.EXAMINE_COLOR = _examineColor2.default;
	exports.EXAMINE_TEXT = _examineText2.default;
	exports.EXAMINE_NAME = _examineTitle2.default;
	exports.MODE = _mode2.default;
	exports.DOC_TYPE = _docType2.default;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 元素类型枚举
	 */
	exports.default = {
	  /**
	   * 单行文本型
	   */
	  INPUT: 'INPUT',
	  /**
	   * 多行文本型
	   */
	  TEXT_AREA: 'TEXT_AREA',
	  /**
	   * 整数型数值
	   */
	  INTEGER: 'INTEGER',
	  /**
	   * 浮点型数值
	   */
	  FLOAT: 'FLOAT',
	  /**
	   * 科目型， stands for General Ledger Account
	   */
	  ACCOUNT: 'ACCOUNT',
	  /**
	   * 总账科目型
	   */
	  GLA: 'GLA',
	  /**
	   * 明细科目型，stands for Subsidiary Ledger
	   */
	  SL: 'SL',
	  /**
	   * 只读label
	   */
	  LABEL: 'LABEL',
	  /**
	   * checkbox，即多选
	   */
	  CHECK_BOX: 'CHECK_BOX',
	  /**
	   * 单选
	   */
	  RADIO: 'RADIO',
	  /**
	   * 下拉选择
	   */
	  SELECT: 'SELECT'

	};
	module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 元素所属类型枚举
	 */
	exports.default = {
	  /**
	   * 普通类型元素
	   */
	  NORMAL: 'NORMAL',
	  /**
	   * 属于表格型元素
	   * 此元素的元素配置中必包含table属性
	   */
	  TABLE: 'TABLE'
	  /**
	   * TODO: 添加其他类型
	   */
	};
	module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 甄别方式枚举
	 */
	exports.default = {
	  /**
	   * 单编辑框
	   */
	  SINGLE: 'SINGLE',
	  /**
	   * 多编辑框
	   */
	  MULTI_ELM: 'MULTI_ELM',
	  /**
	   * 多行集合
	   */
	  MULTI_LINE: 'MULTI_LINE',
	  /**
	   * 合计栏
	   */
	  SETTLEMENT: 'SETTLEMENT'
	};
	module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 甄别方式对应的颜色值枚举
	 */
	exports.default = {
	    SINGLE: '#FF756E',
	    MULTI_ELM: '#A28DDD',
	    MULTI_LINE: '#95DF7D',
	    SETTLEMENT: '#FAA755'
	};
	module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 甄别方式介绍文本枚举
	 */
	exports.default = {
	    SINGLE: '本空填写的数据与此空的正确答案对比一致，本甄别框判对。',
	    MULTI_ELM: '甄别框中所有空填写的数据与正确答案对比，全部一致，本甄别框判对。',
	    MULTI_LINE: '填写的数据没有固定顺序，行数据与正确答案行数据循环比对，本行数据一致，本行判对。',
	    SETTLEMENT: '单页时同单编辑框，续页时，相加后甄别'
	};
	module.exports = exports['default'];

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * 甄别方式对应中文名称枚举
	 */
	exports.default = {
	    SINGLE: '单编辑框',
	    MULTI_ELM: '多编辑框',
	    MULTI_LINE: '多行集合',
	    SETTLEMENT: '合计栏'
	};
	module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 单据模式 废弃!!!!
	 * @deprecated
	 */
	exports.default = {
	  /**
	   * 设置答案
	   */
	  ANSWER_SET: 'ANSWER_SET',
	  /**
	   * 预置数据
	   */
	  DATA_INIT: 'DATA_INIT',
	  /**
	   * 设置甄别方式及权重
	   * 对应selectable
	   */
	  EXAMINE_SET: 'EXAMINE_SET',
	  /**
	   * 预览，包括权重及甄别方式
	   * 对应readonly
	   */
	  PREVIEW: 'PREVIEW'
	  /**
	   * TODO: 添加课运端模式
	   */
	};
	module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author AngusC
	 * @description 单据类型枚举
	 */

	exports.default = {
	  /**
	   * 默认仿真背景单据
	   */
	  DEFALUT: 'DEFAULT',
	  /**
	   * excel自定义上传单据
	   */
	  EXCEL: 'EXCEL'
	  /**
	   * TODO: NC,ERP单据等
	   */
	};
	module.exports = exports['default'];

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _values = __webpack_require__(106);

	var _values2 = _interopRequireDefault(_values);

	var _defineProperty2 = __webpack_require__(97);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _keys = __webpack_require__(98);

	var _keys2 = _interopRequireDefault(_keys);

	var _extends3 = __webpack_require__(1);

	var _extends4 = _interopRequireDefault(_extends3);

	exports.copyToShow = copyToShow;
	exports.basicStyleOfItem = basicStyleOfItem;
	exports.testNumber = testNumber;
	exports.filterValue = filterValue;
	exports.canChange = canChange;
	exports.mapExaminesWithAll = mapExaminesWithAll;
	exports.combineSubjects = combineSubjects;
	exports.combineDataToState = combineDataToState;
	exports.resetSelectHeightOfAntd = resetSelectHeightOfAntd;
	exports.formatValueOfItem = formatValueOfItem;
	exports.subjectOfPropsInCustom = subjectOfPropsInCustom;
	exports.firstCopy = firstCopy;
	exports.saveAs = saveAs;
	exports.isCurrentActivityEmpty = isCurrentActivityEmpty;
	exports.isAllEmpty = isAllEmpty;
	exports.genValue = genValue;

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _isNumeric = __webpack_require__(132);

	var _isNumeric2 = _interopRequireDefault(_isNumeric);

	var _isFloat = __webpack_require__(133);

	var _isFloat2 = _interopRequireDefault(_isFloat);

	var _constants = __webpack_require__(122);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* 获取可显示的联
	* @param  {Object} config      单据配置信息
	* @param  {Number} currentCopy 期望显示的联
	* @return {Number}             允许显示的联
	*/
	/**
	 * @author Chenzhyc
	 * @description 单据工具集
	 */

	function copyToShow(config, currentCopy) {
	    if (!currentCopy) {
	        return 0;
	    }
	    //如果当前单据只有1联，则返回0
	    if (config.length === 1) {
	        return 0;
	    }
	    //如果传入的当前联大于总联数，则返回0
	    if (currentCopy > config.length - 1) {
	        return 0;
	    }
	    //只有当前联存在元素信息时才返回当前联
	    if (config[currentCopy].elements) {
	        return currentCopy;
	    }

	    return 0;
	}
	/**
	 * 元素基本样式获取
	 * @param  {Object} item [description]
	 * @return {Object}      [description]
	 */
	function basicStyleOfItem(item, highlightItem, highlightColor) {
	    var ratioWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	    var ratioHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
	    var pos = item.pos;


	    var backgroundStyle = highlightItem ? {
	        background: highlightColor
	    } : {};

	    var style = (0, _extends4.default)({
	        left: pos.left * ratioWidth,
	        top: pos.top * ratioHeight,
	        width: pos.width * ratioWidth,
	        height: pos.height * ratioHeight,
	        lineHeight: pos.height * ratioHeight + 'px'
	    }, backgroundStyle, item.style);

	    return style;
	}

	//判断数字合法性
	function testNumber(item, value) {

	    if (!item.constraint) {
	        return true;
	    }

	    var tooBig = item.constraint.maxValue && parseFloat(value) > item.constraint.maxValue;
	    var tooSmall = item.constraint.minValue && parseFloat(value) < item.constraint.minValue;

	    return !(tooBig || tooSmall);
	}

	/**
	 * 过滤掉value中的padStart信息
	 * @param  {Object} item  [description]
	 * @param  {String} value [description]
	 * @return {String}       [description]
	 */
	function filterValue(item, value) {
	    if (item.constraint) {
	        if (item.constraint.padStart) {
	            return value.replace(item.constraint.padStart, '');
	        } else if (item.constraint.localeFormatWith) {
	            return Number(value.replace(/[^0-9\.-]+/g, "")).toString();
	        }
	    }

	    return value;
	}

	//判断输入的内容的合法性
	function canChange(item, value) {
	    var _value = filterValue(item, value);
	    //输入空，通过
	    if (typeof _value === 'string' && (0, _isEmpty2.default)(_value)) {
	        return true;
	    }

	    switch (item.type) {
	        case _constants.ELEMENT.INTEGER:
	            return (0, _isNumeric2.default)(_value) && testNumber(item, _value);
	            break;

	        case _constants.ELEMENT.FLOAT:
	            return (0, _isFloat2.default)(_value) && testNumber(item, _value);
	            break;
	    }

	    return true;
	}

	/**
	 * 根据examines和all，生成对应的keyOfAll
	 * @param  {Array} examines 甄别信息数组
	 * @param  {String} keyOfAll all中要取的key, 可取值`data`,`answer`, `value`
	 * @param  {Object} all      documentBody中的all
	 * @param {String} activityId 活动id,只处理activityId的数据
	 * @return {Array}          新生成的数组
	 */
	function mapExaminesWithAll(examines, keyOfAll, all, activityId) {

	    if (!examines || !keyOfAll || !all) {
	        return [];
	    }

	    if (examines.length === 0 || (0, _isEmpty2.default)(keyOfAll)) {
	        return [];
	    }

	    //每项元素固定的key
	    var staticItems = ['examineId', 'examineType', 'examineName', 'sortOrder'];

	    function sortOrder(item) {
	        if (item.sortOrder && Array.isArray(item.sortOrder)) {
	            return {
	                sortOrder: item.sortOrder
	            };
	        }
	    }

	    function excludeStaticProperty(key) {
	        return !staticItems.includes(key);
	    }

	    function valueOfKey(key) {
	        if (all[key] && all[key][keyOfAll] && all[key].activityId && activityId === all[key].activityId) {
	            return all[key][keyOfAll];
	        }

	        return '';
	    }

	    return examines.map(function (item) {
	        return (0, _keys2.default)(item).filter(excludeStaticProperty).reduce(function (sum, key) {

	            return (0, _extends4.default)({}, sum, (0, _defineProperty3.default)({}, key, valueOfKey(key)), sortOrder(item));
	        }, {
	            examineId: item.examineId,
	            examineType: item.examineType,
	            examineName: item.examineName
	        });
	    });

	    //先排除掉未填过值，然后拼装
	    // return examines.filter(item => {
	    //     return Object.keys(item)
	    //     .filter(excludeStaticProperty)
	    //     .filter(key => {
	    //         return all[key] && all[key][keyOfAll]
	    //     }).length > 0
	    // }).map(item => {
	    //     return Object.keys(item)
	    //     .filter(excludeStaticProperty)
	    //     .filter(key => {
	    //         return all[key] && all[key][keyOfAll]
	    //     })
	    //     .reduce((sum, key) => {
	    //         return {
	    //             ...sum,
	    //             [key]: all[key][keyOfAll],
	    //             ...sortOrder(item)
	    //         }
	    //     }, {
	    //         examineId: item.examineId,
	    //         examineType: item.examineType,
	    //         examineName: item.examineName
	    //     })
	    // })
	}

	//处理总账科目和明细账科目
	function combineSubjects(subjects) {
	    if (!Array.isArray(subjects)) {
	        return [];
	    }

	    var combined = subjects.map(function (subject) {
	        return {
	            value: subject.subjectId,
	            text: subject.subjectName
	        };
	    });

	    return combined;
	}

	function combineDataToState(props) {
	    if (!props.docData) {
	        return { all: {} };
	    }

	    if (!props.docData.all) {
	        return (0, _extends4.default)({}, props.docData, {
	            all: {}
	        });
	    }

	    return props.docData;
	}

	/**
	 * 重置antd的Select或AutoComplete组件的高度，a hack
	 * @param {Array} config 单据配置文件
	 */
	function resetSelectHeightOfAntd(config, dom) {
	    if (!config || !Array.isArray(config) || config.length == 0 || !config[0].elements) {
	        return;
	    }
	    var selectHeight = [];

	    (0, _values2.default)(config[0].elements).forEach(function (item) {
	        if (item.type === _constants.ELEMENT.GLA || item.type === _constants.ELEMENT.SL || item.type === _constants.ELEMENT.SELECT) {
	            selectHeight.push(item.pos.height + 'px');
	        }
	    });

	    //might be a hack
	    var selectNodes = dom.getElementsByClassName('ant-select-selection--single');

	    for (var i = 0; i < selectNodes.length; i++) {
	        selectNodes[i].style.height = selectHeight[i];
	        selectNodes[i].style.backgroundColor = 'transparent';
	    }
	}

	/**
	 * 将value转换成item.type类型的value
	 * @param  {Object} item  [description]
	 * @param  {String} value [description]
	 * @return {[type]}       [description]
	 */
	function formatValueOfItem(item, value) {
	    //输入空，原样返回
	    if (typeof value === 'string' && (0, _isEmpty2.default)(value)) {
	        return value;
	    }

	    if (!item) {
	        return value;
	    }

	    switch (item.type) {
	        case _constants.ELEMENT.INTEGER:
	            return parseInt(value).toString();
	            break;
	    }

	    return value;
	}

	/**
	 * 过滤出docData中的custom中的信息
	 * @param  {Object} props [description]
	 * @param  {String} key   要取的属性
	 * @return {String}       [description]
	 */
	function subjectOfPropsInCustom(props, key) {

	    if (key && props && props.docData && props.docData.custom && props.docData.custom[key]) {
	        return props.docData.custom[key];
	    }
	}

	/**
	 * 根据visibleSheet来展示第一联
	 * @param  {[type]} visibleSheet [description]
	 * @return {[type]}              [description]
	 */
	function firstCopy(visibleSheet) {
	    if (!visibleSheet || visibleSheet.split(',').indexOf('1') == -1) {
	        return 0;
	    }

	    return visibleSheet.split(',').indexOf('1');
	}

	/**
	 * 保存为
	 */
	function saveAs(value, isDataInit) {

	    if (!value) {
	        return {};
	    }

	    if (Array.isArray(value) && value.length === 0) {
	        return {};
	    }

	    if (typeof value === 'string' && (0, _isEmpty2.default)(value)) {
	        return {};
	    }

	    if (isDataInit) {
	        return {
	            data: value
	        };
	    } else {
	        return {
	            answer: value
	        };
	    }
	}

	/**
	 * 当前活动节点是否为空
	 * @param  {String}  activityId [description]
	 * @param  {Object}  all        [description]
	 * @param  {String}  keyOfAll   [description]
	 * @return {Boolean}            [description]
	 */
	function isCurrentActivityEmpty(activityId, all, keyOfAll) {

	    if (!all || (0, _keys2.default)(all).length === 0) {
	        return true;
	    }

	    var found = (0, _keys2.default)(all).find(function (key) {
	        return all[key].activityId === activityId && all[key][keyOfAll] && all[key][keyOfAll].length > 0;
	    });

	    if (found) {
	        return false;
	    }

	    return true;
	}

	/**
	 * 是否有数据
	 * @param  {Object}  all [description]
	 * @return {Boolean}     [description]
	 */
	function isAllEmpty(all) {
	    if (!all || (0, _keys2.default)(all).length === 0) {
	        return true;
	    }

	    return false;

	    // const found = Object.keys(all).find(key => {
	    //     return Object.keys(all[key]).length > 0
	    // })
	    //
	    // return !!!found
	}

	/**
	 * 过滤学生端value
	 * @param  {[type]} value [description]
	 * @return {[type]}       [description]
	 */
	function genValue(value) {
	    if (!value) {
	        return {};
	    }

	    if (typeof value === 'string' && (0, _isEmpty2.default)(value)) {
	        return {};
	    }

	    if (Array.isArray(value) && value.length === 0) {
	        return {};
	    }

	    return { value: value };
	}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isNumeric;

	var _assertString = __webpack_require__(104);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var numeric = /^[-+]?[0-9]+$/;

	function isNumeric(str) {
	  (0, _assertString2.default)(str);
	  return numeric.test(str);
	}
	module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isFloat;

	var _assertString = __webpack_require__(104);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var float = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

	function isFloat(str, options) {
	  (0, _assertString2.default)(str);
	  options = options || {};
	  if (str === '' || str === '.') {
	    return false;
	  }
	  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
	}
	module.exports = exports['default'];

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _style4 = __webpack_require__(135);

	var _popover = __webpack_require__(136);

	var _popover2 = _interopRequireDefault(_popover);

	var _style5 = __webpack_require__(137);

	var _button = __webpack_require__(138);

	var _button2 = _interopRequireDefault(_button);

	var _defineProperty2 = __webpack_require__(97);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _style6 = __webpack_require__(139);

	var _table = __webpack_require__(140);

	var _table2 = _interopRequireDefault(_table);

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _accountSubject = __webpack_require__(141);

	var _accountSubject2 = _interopRequireDefault(_accountSubject);

	var _classnames2 = __webpack_require__(143);

	var _classnames3 = _interopRequireDefault(_classnames2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author AngusC
	 * @description 单据科目PopoverView
	 */

	var AccountSubjectPopover = function AccountSubjectPopover(_ref) {
	    var subjectsTopLevel = _ref.subjectsTopLevel,
	        subjectsTree = _ref.subjectsTree,
	        onAccountDetailRowClicked = _ref.onAccountDetailRowClicked,
	        onAccountTitleSelected = _ref.onAccountTitleSelected,
	        isDataInit = _ref.isDataInit,
	        currentAccountTitle = _ref.currentAccountTitle,
	        config = _ref.config,
	        visible = _ref.visible,
	        normalEdit = _ref.normalEdit,
	        onBlur = _ref.onBlur,
	        hasErrorInfo = _ref.hasErrorInfo;


	    var childrenGenerator = function childrenGenerator(children) {
	        var nodes = children.map(function (item, index) {
	            var node = {
	                key: 'child_' + item.subjectId + '_' + index,
	                childSubjectCode: item.subjectCode,
	                subjectName: item.subjectName,
	                subjectId: item.subjectId,
	                isAnswerSetted: item.isAnswerSetted,
	                isInitDataSetted: item.isInitDataSetted,
	                isAnswered: item.isAnswered
	            };

	            var childrenOpt = {};

	            if (children.children) {
	                childrenOpt = {
	                    children: childrenGenerator(children.children)
	                };
	            }

	            return (0, _extends3.default)({}, node, childrenOpt);
	        });

	        return nodes;
	    };

	    if (config[0].hasSubject) {
	        var subjectNodes = subjectsTopLevel.map(function (subject, index) {
	            var _classnames;

	            var data = Array.isArray(subjectsTree) ? subjectsTree.map(function (item, index) {
	                var childrenOpt = {};

	                if (item.children) {
	                    var childrenNodes = childrenGenerator(item.children);

	                    childrenOpt = {
	                        children: childrenNodes
	                    };
	                }

	                return (0, _extends3.default)({
	                    key: index,
	                    subjectCode: item.subjectCode,
	                    subjectName: item.subjectName,
	                    subjectId: item.subjectId,
	                    isAnswerSetted: item.isAnswerSetted,
	                    isInitDataSetted: item.isInitDataSetted,
	                    isAnswered: item.isAnswered
	                }, childrenOpt);
	            }) : [];

	            var renderCell = function renderCell(text, record, index) {

	                // if (record.children) {
	                //     return text;
	                // }

	                if (normalEdit) {

	                    if (hasErrorInfo && !(record.isAnswerSetted === record.isAnswered)) {
	                        return _react2.default.createElement(
	                            'span',
	                            { style: { background: '#FFFF80' } },
	                            text
	                        );
	                    }

	                    return text;
	                }

	                if (isDataInit) {
	                    if (record.isInitDataSetted) {
	                        return text;
	                    }
	                } else {
	                    if (record.isAnswerSetted) {
	                        return text;
	                    }
	                }

	                return _react2.default.createElement(
	                    'span',
	                    { style: { color: 'rgba(0, 0, 0, 0.25)' } },
	                    text
	                );
	            };

	            var columns = [{
	                title: _react2.default.createElement(
	                    'span',
	                    { style: { visibility: 'hidden' } },
	                    'e'
	                ),
	                key: 'e',
	                width: 10
	            }, {
	                title: _react2.default.createElement(
	                    'span',
	                    { style: { textAlign: 'center' } },
	                    '科目编码'
	                ),
	                key: 'subjectCode',
	                dataIndex: 'subjectCode',
	                render: renderCell
	            }, {
	                title: _react2.default.createElement(
	                    'span',
	                    { style: { visibility: 'hidden' } },
	                    '\u79D1\u76EE\u7F16\u7801'
	                ),
	                key: 'childSubjectCode',
	                dataIndex: 'childSubjectCode',
	                render: renderCell
	            }, {
	                title: '科目名称',
	                dataIndex: 'subjectName',
	                key: 'subjectName',
	                render: renderCell
	            }];

	            var title = _react2.default.createElement(
	                'div',
	                { className: _accountSubject2.default.subject_title },
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    subject.subjectName
	                )
	            );

	            var content = _react2.default.createElement(
	                'div',
	                { className: _accountSubject2.default.subject_content },
	                _react2.default.createElement(_table2.default, {
	                    loading: subjectsTree === 'loading',
	                    size: 'small',
	                    columns: columns,
	                    dataSource: data,
	                    pagination: false,
	                    bordered: true,
	                    onRowClick: onAccountDetailRowClicked
	                })
	            );

	            var visibleOpt = function visibleOpt() {
	                if (!visible && currentAccountTitle && subject.subjectId === currentAccountTitle.subjectId) {
	                    return {
	                        visible: visible
	                    };
	                }
	            };

	            return _react2.default.createElement(
	                _popover2.default,
	                (0, _extends3.default)({ key: subject.subjectId + '_' + index,
	                    title: title,
	                    placement: 'bottomRight',
	                    style: { height: 256, width: 370 },
	                    onVisibleChange: function onVisibleChange(visible) {
	                        //为了动画的完整展示
	                        setTimeout(function () {
	                            onAccountTitleSelected(subject);
	                        }, 300);
	                    }
	                    // visible={true}
	                }, visibleOpt(), {
	                    content: content }),
	                _react2.default.createElement(
	                    _button2.default,
	                    { type: 'ghost', className: (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _accountSubject2.default.highlightBtn, currentAccountTitle && subject.subjectId === currentAccountTitle.subjectId), (0, _defineProperty3.default)(_classnames, _accountSubject2.default.markError, normalEdit && hasErrorInfo && subject.isAnswerSetted && !subject.isAnswered), _classnames)) },
	                    subject.subjectName,
	                    _react2.default.createElement('span', { className: _accountSubject2.default.arrow })
	                )
	            );
	        });

	        return _react2.default.createElement(
	            'div',
	            { className: normalEdit ? _accountSubject2.default.normal : _accountSubject2.default.subject },
	            subjectNodes
	        );
	    }

	    return null;
	};

	exports.default = AccountSubjectPopover;
	module.exports = exports['default'];

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_135__;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_136__;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_137__;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_138__;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_139__;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_140__;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(120)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./accountSubject.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./accountSubject.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)(undefined);
	// imports


	// module
	exports.push([module.id, ".normal__kmSyU .arrow__3Owea{width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #8ca0b3;display:inline-block;margin-left:10px;vertical-align:middle}.normal__kmSyU button{background:#fff}.normal__kmSyU button:hover .arrow__3Owea{border-top:4px solid #3dcc61}.normal__kmSyU .highlightBtn__1t__2{border-color:#3dcc61;color:#3dcc61}.normal__kmSyU .highlightBtn__1t__2 .arrow__3Owea{border-top:4px solid #3dcc61}.normal__kmSyU .markError__2kk_O{background:#ffff80}.subject__2N9oP{width:80%;height:60px;display:inline-block;margin-left:30px}.subject__2N9oP .arrow__3Owea{width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #8ca0b3;display:inline-block;margin-left:10px;vertical-align:middle}.subject__2N9oP button{float:left;height:32px;margin-top:14px;margin-right:5px;border-radius:2px;background:#fff}.subject__2N9oP button:hover .arrow__3Owea{border-top:4px solid #3dcc61}.subject__2N9oP .highlightBtn__1t__2{border-color:#3dcc61;color:#3dcc61}.subject__2N9oP .highlightBtn__1t__2 .arrow__3Owea{border-top:4px solid #3dcc61}.subject_title__1tXGw{width:110%;background:#3dcc61;font-family:PingFangSC-Medium;font-size:14px;color:#fff;margin-left:-16px}.subject_title__1tXGw span{padding-left:20px}.subject_content__1oRyh{width:370px;height:256px;overflow:auto;margin:-8px -17px 0 -16px}", ""]);

	// exports
	exports.locals = {
		"normal": "normal__kmSyU",
		"arrow": "arrow__3Owea",
		"highlightBtn": "highlightBtn__1t__2",
		"markError": "markError__2kk_O",
		"subject": "subject__2N9oP",
		"subject_title": "subject_title__1tXGw",
		"subject_content": "subject_content__1oRyh"
	};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_143__;

/***/ }),
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(97);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames2 = __webpack_require__(143);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author AngusC
	 * @description 联次按钮
	 */

	var CopyGroup = function CopyGroup(_ref) {
	    var visibleSheet = _ref.visibleSheet,
	        onCopyChange = _ref.onCopyChange,
	        className = _ref.className,
	        selectedClsName = _ref.selectedClsName,
	        currentCopy = _ref.currentCopy;


	    if (!visibleSheet) {
	        return null;
	    }

	    if (visibleSheet.split(',').length == 1) {
	        return null;
	    }

	    var copyNodes = function copyNodes() {
	        var copyNodes = visibleSheet.split(',').map(function (copy, index) {
	            if (copy === '0' || !copy || (0, _isEmpty2.default)(copy)) {
	                return;
	            }

	            var isCurrentCopy = index === currentCopy;

	            return _react2.default.createElement(
	                'button',
	                { key: index,
	                    className: (0, _classnames3.default)('', (0, _defineProperty3.default)({}, selectedClsName, isCurrentCopy)),
	                    type: 'ghost',
	                    onClick: function onClick(e) {
	                        return onCopyChange(index);
	                    }
	                },
	                isCurrentCopy ? '\u7B2C' + (index + 1) + '\u8054' : '' + (index + 1)
	            );
	        }).filter(function (copy) {
	            return !!copy;
	        });

	        if (copyNodes.length === 1) {
	            return;
	        }

	        return copyNodes;
	    };

	    if (copyNodes()) {
	        return _react2.default.createElement(
	            'div',
	            { className: className },
	            copyNodes()
	        );
	    }

	    return null;
	};

	exports.default = CopyGroup;


	CopyGroup.propTypes = {
	    /**
	     * 可见联次字符串，以逗号','分割
	     */
	    visibleSheet: _propTypes2.default.string,
	    /**
	     * 联次发生
	     */
	    onCopyChange: _propTypes2.default.func,
	    /**
	     * 联次样式
	     */
	    className: _propTypes2.default.string,
	    /**
	     * 选中后的样式
	     */
	    selectedClsName: _propTypes2.default.string,
	    /**
	     * 当前联
	     * @type {[type]}
	     */
	    currentCopy: _propTypes2.default.number
	};

	CopyGroup.defaultProps = {
	    currentCopy: 0
	};
	module.exports = exports['default'];

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(53);
	__webpack_require__(154);
	module.exports = __webpack_require__(7).Array.from;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(8);
	var $export = __webpack_require__(5);
	var toObject = __webpack_require__(38);
	var call = __webpack_require__(155);
	var isArrayIter = __webpack_require__(156);
	var toLength = __webpack_require__(29);
	var createProperty = __webpack_require__(157);
	var getIterFn = __webpack_require__(158);

	$export($export.S + $export.F * !__webpack_require__(160)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(12);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(58);
	var ITERATOR = __webpack_require__(64)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11);
	var createDesc = __webpack_require__(19);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(159);
	var ITERATOR = __webpack_require__(64)('iterator');
	var Iterators = __webpack_require__(58);
	module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(26);
	var TAG = __webpack_require__(64)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(64)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _values = __webpack_require__(106);

	var _values2 = _interopRequireDefault(_values);

	var _style6 = __webpack_require__(114);

	var _select = __webpack_require__(115);

	var _select2 = _interopRequireDefault(_select);

	var _style7 = __webpack_require__(170);

	var _tooltip = __webpack_require__(171);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _style8 = __webpack_require__(110);

	var _radio = __webpack_require__(111);

	var _radio2 = _interopRequireDefault(_radio);

	var _style9 = __webpack_require__(112);

	var _checkbox = __webpack_require__(113);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _style10 = __webpack_require__(172);

	var _autoComplete = __webpack_require__(173);

	var _autoComplete2 = _interopRequireDefault(_autoComplete);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _classnames = __webpack_require__(143);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _background = __webpack_require__(116);

	var _background2 = _interopRequireDefault(_background);

	var _constants = __webpack_require__(122);

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _isNumeric = __webpack_require__(132);

	var _isNumeric2 = _interopRequireDefault(_isNumeric);

	var _docUtils = __webpack_require__(131);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author AngusC
	 * @description 学生编辑单据区域
	 */

	var Option = _autoComplete2.default.Option;
	var CheckboxGroup = _checkbox2.default.Group;
	var RadioGroup = _radio2.default.Group;

	var DocEditor = function DocEditor(_ref) {
	    var config = _ref.config,
	        docData = _ref.docData,
	        glas = _ref.glas,
	        sls = _ref.sls,
	        ratioHeight = _ref.ratioHeight,
	        ratioWidth = _ref.ratioWidth,
	        bgClassName = _ref.bgClassName,
	        onItemChange = _ref.onItemChange,
	        activityId = _ref.activityId,
	        currentCopy = _ref.currentCopy,
	        currentSubject = _ref.currentSubject,
	        hasErrorInfo = _ref.hasErrorInfo,
	        onSubjectSearch = _ref.onSubjectSearch,
	        onSubjectSelected = _ref.onSubjectSelected,
	        onSubjectBlur = _ref.onSubjectBlur,
	        editable = _ref.editable,
	        disabledColor = _ref.disabledColor,
	        valueToShow = _ref.valueToShow,
	        canEdit = _ref.canEdit,
	        currentPage = _ref.currentPage;
	    var all = docData.all,
	        errors = docData.errors;

	    //元素onChange监听

	    var onElementChange = function onElementChange(item, value) {
	        if ((0, _docUtils.canChange)(item, value)) {
	            if (item.constraint) {
	                if ((0, _isEmpty2.default)((0, _docUtils.filterValue)(item, value))) {
	                    return onItemChange(item, value);
	                }

	                if (item.constraint.padStart) {
	                    if (item.constraint.maxLength) {
	                        onItemChange(item, (0, _docUtils.filterValue)(item, value).padStart(item.constraint.maxLength, item.constraint.padStart));
	                        return;
	                    } else {
	                        var _value2 = (0, _docUtils.formatValueOfItem)(item, (0, _docUtils.filterValue)(item, value));
	                        onItemChange(item, '' + item.constraint.padStart + _value2);
	                        return;
	                    }
	                }
	            }

	            var _value = (0, _docUtils.formatValueOfItem)(item, value);
	            onItemChange(item, _value);
	        }
	    };

	    var onElementBlur = function onElementBlur(item, value) {
	        if ((0, _isEmpty2.default)(value)) {
	            return;
	        }
	        //只处理浮点型
	        if (item.type === _constants.ELEMENT.FLOAT) {
	            if (item.constraint) {
	                if (item.constraint.padStart) {
	                    var _value3 = parseFloat((0, _docUtils.filterValue)(item, value)).toFixed(item.constraint && item.constraint.toFixed).toString();
	                    onItemChange(item, '' + item.constraint.padStart + _value3);
	                    return;
	                } else if (item.constraint.localeFormatWith) {
	                    var _value4 = Number(value.replace(/[^0-9\.-]+/g, ""));
	                    onItemChange(item, _value4.toLocaleString(item.constraint.localeFormatWith.locales, item.constraint.localeFormatWith.options));
	                    return;
	                }
	            }

	            var _value = parseFloat((0, _docUtils.filterValue)(item, value));

	            if (item.constraint && item.constraint.toFixed) {
	                onItemChange(item, _value.toFixed(item.constraint && item.constraint.toFixed).toString());
	                return;
	            }
	            onItemChange(item, _value.toString());
	            return;
	        } else if (item.type === _constants.ELEMENT.INPUT || item.type === _constants.ELEMENT.TEXT_AREA) {
	            onItemChange(item, value.trim());
	        }
	    };

	    //元素自身的样式
	    var styleOfItem = function styleOfItem(item) {
	        var wrapperStyles = function wrapperStyles(_item) {

	            if (hasErrorInfo && errors && errors.indexOf(_item.name) !== -1) {
	                return (0, _docUtils.basicStyleOfItem)(_item, true, '#FFFF80');
	            }

	            if (!all[_item.name]) {
	                return (0, _docUtils.basicStyleOfItem)(_item);
	            }

	            if (!hasErrorInfo) {
	                return (0, _docUtils.basicStyleOfItem)(_item);
	            }

	            return (0, _docUtils.basicStyleOfItem)(_item);
	        };

	        /**
	         * 可编辑状态的下拉搜索选择和TEXT_AREA不需要overflow, textOverflow和whiteSpace属性
	         */
	        if ((item.type === _constants.ELEMENT.GLA || item.type === _constants.ELEMENT.SL) && canEdit(item)) {
	            return wrapperStyles(item);
	        }

	        if (item.type === _constants.ELEMENT.TEXT_AREA) {
	            return wrapperStyles(item);
	        }

	        return (0, _extends3.default)({
	            overflow: 'hidden',
	            textOverflow: 'ellipsis',
	            whiteSpace: 'nowrap'
	        }, wrapperStyles(item));
	    };

	    //渲染只读元素，包括Label
	    var renderReadOnlyItem = function renderReadOnlyItem(item, index) {
	        var value = valueToShow(item);

	        if (item.type === _constants.ELEMENT.LABEL) {

	            if (!value && value !== '' && (!config[0].docType || config[0].docType === _constants.DOC_TYPE.DEFAULT)) {
	                return null;
	            }

	            return _react2.default.createElement(
	                'span',
	                { key: 'readonly_' + index + '_' + currentPage,
	                    title: value,
	                    style: styleOfItem(item) },
	                value
	            );
	        }
	        //非第一联展示原始颜色，第一联展示灰色
	        if (currentCopy > 0) {
	            return _react2.default.createElement(
	                'span',
	                { key: 'readonly_' + index + '_' + currentPage,
	                    name: item.name,
	                    title: value,
	                    style: (0, _extends3.default)({}, styleOfItem(item)) },
	                value
	            );
	        } else {
	            return _react2.default.createElement(
	                'span',
	                { key: 'readonly_' + index + '_' + currentPage,
	                    name: item.name,
	                    title: value,
	                    style: (0, _extends3.default)({}, styleOfItem(item), disabledColor) },
	                value
	            );
	        }
	    };

	    //渲染普通文本输入框
	    var renderNormalItem = function renderNormalItem(item, index) {
	        return _react2.default.createElement('input', { key: item.name + '_' + index + '_' + currentPage,
	            name: item.name,
	            style: styleOfItem(item),
	            title: valueToShow(item) ? valueToShow(item) : '',
	            value: valueToShow(item) ? valueToShow(item) : '',
	            onChange: function onChange(e) {
	                onElementChange(item, e.target.value);
	            },
	            onBlur: function onBlur(e) {
	                onElementBlur(item, e.target.value);
	            }
	        });
	    };

	    //渲染下拉选择元素
	    var renderSelectItem = function renderSelectItem(item, index, dataSource) {

	        var styleOfSelect = (0, _extends3.default)({}, styleOfItem(item), {
	            top: styleOfItem(item).top - 4,
	            fontSize: 'inherit'
	        });

	        var glaSubjectId = function glaSubjectId() {
	            if (item.type === _constants.ELEMENT.SL) {
	                return all[item.gla].value || all[item.gla].data || all[item.gla].answer;
	            }
	        };

	        var renderOption = function renderOption(option) {
	            return _react2.default.createElement(
	                Option,
	                { key: option.value },
	                _react2.default.createElement(
	                    _tooltip2.default,
	                    { title: option.text },
	                    option.text
	                )
	            );
	        };

	        return _react2.default.createElement(
	            _autoComplete2.default,
	            { key: item.name + '_' + index + '_' + currentPage,
	                name: item.name,
	                value: valueToShow(item),
	                style: styleOfSelect,
	                onSearch: function onSearch(value) {
	                    onSubjectSearch(item, value, glaSubjectId());
	                },
	                onSelect: function onSelect(value, option) {
	                    onSubjectSelected(item, value, {
	                        text: option.props.children.props.children,
	                        value: value
	                    });
	                },
	                onBlur: function onBlur(value) {
	                    onSubjectBlur(item, value, dataSource);
	                },
	                dataSource: dataSource.map(renderOption)
	            },
	            _react2.default.createElement('input', { key: item.name + '_' + index + '_' + currentPage,
	                style: {
	                    overflow: 'hidden',
	                    textOverflow: 'ellipsis',
	                    whiteSpace: 'nowrap'
	                },
	                onFocus: function onFocus(e) {
	                    onSubjectSearch(item, '', glaSubjectId());
	                },
	                name: item.name,
	                title: valueToShow(item) })
	        );
	    };

	    //渲染多行文本元素
	    var renderTextareaItem = function renderTextareaItem(item, index) {
	        var value = valueToShow(item) ? valueToShow(item) : '';

	        var style = (0, _extends3.default)({}, styleOfItem(item), {
	            resize: 'none'
	        });

	        return canEdit(item) ? _react2.default.createElement('textarea', { key: 'textarea_' + item.name + '_' + index + '_' + currentPage,
	            name: item.name,
	            style: style,
	            value: value,
	            onChange: function onChange(e) {
	                onElementChange(item, e.target.value);
	            }
	        }) : _react2.default.createElement('textarea', { key: 'textarea_' + item.name + '_' + index + '_' + currentPage,
	            name: item.name,
	            style: style,
	            value: value,
	            readOnly: 'readonly',
	            onChange: function onChange(e) {
	                onElementChange(item, e.target.value);
	            }
	        });
	    };

	    //复选框
	    var renderCheckBox = function renderCheckBox(item, index) {
	        if (!item.options) {
	            return _react2.default.createElement('input', { key: item.name + '_' + index + '_' + currentPage,
	                name: item.name,
	                type: 'checkbox',
	                style: (0, _docUtils.basicStyleOfItem)(item)
	            });
	        } else {
	            return _react2.default.createElement(
	                'div',
	                { key: item.name + '_' + index + '_' + currentPage,
	                    name: item.name,
	                    style: (0, _docUtils.basicStyleOfItem)(item) },
	                _react2.default.createElement(
	                    'div',
	                    { style: { position: 'relative', top: '50%', transform: 'translateY(-50%)' } },
	                    _react2.default.createElement(CheckboxGroup, { options: item.options,
	                        disabled: !canEdit(item),
	                        value: valueToShow(item),
	                        onChange: function onChange(value) {
	                            return onElementChange(item, value);
	                        }
	                    })
	                )
	            );
	        }
	    };

	    //单选框
	    var renderRadio = function renderRadio(item, index) {
	        return _react2.default.createElement(
	            'div',
	            { key: item.name + '_' + index + '_' + currentPage,
	                name: item.name,
	                style: (0, _docUtils.basicStyleOfItem)(item) },
	            _react2.default.createElement(RadioGroup, { style: {
	                    position: 'relative',
	                    top: '50%',
	                    transform: 'translateY(-50%)'
	                }, disabled: !canEdit(item),
	                value: valueToShow(item),
	                onChange: function onChange(e) {
	                    return onElementChange(item, e.target.value);
	                },
	                options: item.options })
	        );
	    };

	    //下拉选择框
	    var renderSelect = function renderSelect(item, index) {
	        var renderOptions = function renderOptions(options) {
	            return options.map(function (option) {
	                return _react2.default.createElement(
	                    Option,
	                    { key: option,
	                        value: option },
	                    option
	                );
	            });
	        };

	        return _react2.default.createElement(
	            _select2.default,
	            { key: item.name + '_' + index + '_' + currentPage,
	                disabled: !canEdit(item),
	                value: valueToShow(item),
	                allowClear: true,
	                onChange: function onChange(value) {
	                    return onElementChange(item, value ? value : '');
	                },
	                style: (0, _docUtils.basicStyleOfItem)(item) },
	            renderOptions(item.options)
	        );
	    };

	    //渲染元素们
	    var renderElements = function renderElements() {

	        var copy = (0, _docUtils.copyToShow)(config, currentCopy);

	        var elementNodes = (0, _values2.default)(config[copy].elements).map(function (item, index) {

	            switch (item.type) {
	                case _constants.ELEMENT.INPUT:
	                case _constants.ELEMENT.INTEGER:
	                case _constants.ELEMENT.FLOAT:
	                    return canEdit(item) ? renderNormalItem(item, index) : renderReadOnlyItem(item, index);
	                    break;

	                case _constants.ELEMENT.GLA:
	                    return canEdit(item) ? renderSelectItem(item, index, glas) : renderReadOnlyItem(item, index);
	                    break;
	                case _constants.ELEMENT.SL:
	                    return canEdit(item) ? renderSelectItem(item, index, sls) : renderReadOnlyItem(item, index);
	                    break;

	                case _constants.ELEMENT.LABEL:
	                    return renderReadOnlyItem(item, index);
	                    break;

	                case _constants.ELEMENT.TEXT_AREA:
	                    return renderTextareaItem(item, index);
	                    break;
	                case _constants.ELEMENT.CHECK_BOX:
	                    return renderCheckBox(item, index);
	                    break;

	                case _constants.ELEMENT.RADIO:
	                    return renderRadio(item, index);
	                    break;

	                case _constants.ELEMENT.SELECT:
	                    return renderSelect(item, index);
	                    break;
	            }
	        });

	        return elementNodes;
	    };

	    return _react2.default.createElement(
	        _background2.default,
	        { className: bgClassName,
	            ratioWidth: ratioWidth,
	            ratioHeight: ratioHeight,
	            currentCopy: currentCopy,
	            config: config },
	        renderElements()
	    );
	};

	exports.default = DocEditor;


	DocEditor.propTypes = {
	    config: _propTypes2.default.array,
	    docData: _propTypes2.default.object,
	    glas: _propTypes2.default.array,
	    sls: _propTypes2.default.array,
	    ratioHeight: _propTypes2.default.number,
	    ratioWidth: _propTypes2.default.number,
	    bgClassName: _propTypes2.default.string,
	    onItemChange: _propTypes2.default.func,
	    activityId: _propTypes2.default.string,
	    currentCopy: _propTypes2.default.number,
	    hasErrorInfo: _propTypes2.default.bool,
	    onSubjectSearch: _propTypes2.default.func,
	    onSubjectSelected: _propTypes2.default.func,
	    onSubjectBlur: _propTypes2.default.func,
	    disabledColor: _propTypes2.default.object,
	    canEdit: _propTypes2.default.func,
	    valueToShow: _propTypes2.default.func
	};

	DocEditor.defaultProps = {
	    onItemChange: function onItemChange(item, value) {
	        console.log('value = ', value);
	    },
	    editable: true,
	    hasErrorInfo: false,
	    disabledColor: {},
	    canEdit: function canEdit() {},
	    valueToShow: function valueToShow() {},
	    currentPage: 1
	};
	module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_170__;

/***/ }),
/* 171 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_171__;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_172__;

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_173__;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _from = __webpack_require__(152);

	var _from2 = _interopRequireDefault(_from);

	var _defineProperty2 = __webpack_require__(97);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _keys = __webpack_require__(98);

	var _keys2 = _interopRequireDefault(_keys);

	var _getPrototypeOf = __webpack_require__(39);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(44);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(45);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(49);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(83);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _extends3 = __webpack_require__(1);

	var _extends4 = _interopRequireDefault(_extends3);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(143);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _docEditor = __webpack_require__(169);

	var _docEditor2 = _interopRequireDefault(_docEditor);

	var _docEditor3 = __webpack_require__(175);

	var _docEditor4 = _interopRequireDefault(_docEditor3);

	var _constants = __webpack_require__(122);

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _accountSubject = __webpack_require__(134);

	var _accountSubject2 = _interopRequireDefault(_accountSubject);

	var _utils = __webpack_require__(96);

	var _docUtils = __webpack_require__(131);

	var _copyGroup = __webpack_require__(146);

	var _copyGroup2 = _interopRequireDefault(_copyGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//处理总账科目和明细账科目
	function combineSubjects(subjects) {
	    if (!Array.isArray(subjects)) {
	        return [];
	    }

	    var combined = subjects.map(function (subject) {
	        return {
	            value: subject.subjectId,
	            text: subject.subjectName
	        };
	    });

	    return combined;
	} /**
	   * @author AngusC
	   * @description 编辑内容容器
	   */

	function combineDataToState(props) {
	    if (!props.docData) {
	        return { all: {} };
	    }

	    if (!props.docData.all) {
	        return (0, _extends4.default)({}, props.docData, {
	            all: {}
	        });
	    }

	    return props.docData;
	}

	var EditValuesContainer = function (_Component) {
	    (0, _inherits3.default)(EditValuesContainer, _Component);

	    function EditValuesContainer() {
	        var _ref;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditValuesContainer);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditValuesContainer.__proto__ || (0, _getPrototypeOf2.default)(EditValuesContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            docData: combineDataToState(_this.props),
	            glas: [],
	            sls: [],
	            subjectVisible: false,
	            currentAccountTitle: (0, _docUtils.subjectOfPropsInCustom)(_this.props, 'subjectTitle'),
	            currentAccountDetail: (0, _docUtils.subjectOfPropsInCustom)(_this.props, 'subjectDetail'),
	            currentCopy: _this.props.currentCopy
	        }, _this.onItemChange = function (item, valueProps, addActivityId, cb) {
	            var activityId = _this.props.activityId;
	            var docData = _this.state.docData;


	            var activityOpt = function activityOpt() {
	                if (addActivityId) {
	                    return {
	                        activityId: activityId
	                    };
	                } else {
	                    return {};
	                }
	            };

	            var newItemInAll = (0, _utils.excludePropertiesOfObject)((0, _extends4.default)({}, docData.all[item.name]), ['activityId', 'value', 'subjectName']);

	            var genNewAll = function genNewAll() {
	                if ((0, _keys2.default)(newItemInAll).length === 0 && (0, _keys2.default)(valueProps).length === 0 && (0, _keys2.default)(activityOpt()).length === 0) {

	                    return (0, _utils.excludePropertiesOfObject)(docData.all, item.name);
	                } else {
	                    return (0, _extends4.default)({}, docData.all, (0, _defineProperty3.default)({}, item.name, (0, _extends4.default)({}, newItemInAll, valueProps, activityOpt())));
	                }
	            };

	            _this.setState({
	                docData: (0, _extends4.default)({}, docData, {
	                    all: genNewAll()
	                })
	            }, function () {
	                _this.props.onDocChange((0, _extends4.default)({}, docData, {
	                    all: genNewAll()
	                }));

	                cb && cb();
	            });
	        }, _this.onNormalItemChange = function (item, value) {
	            if (Array.isArray(value)) {
	                _this.onItemChange(item, (0, _docUtils.genValue)(value), value.length > 0);
	            } else {
	                _this.onItemChange(item, (0, _docUtils.genValue)(value), !(0, _isEmpty2.default)(value));
	            }
	        }, _this.onSubjectSearch = function (item, value, subjectId) {
	            _this.onItemChange(item, { subjectName: value }, !(0, _isEmpty2.default)(value), function () {
	                _this.props.onSearchSubjects(value, subjectId, item.gla && item.gla);
	            });
	        }, _this.onSubjectSelected = function (item, value, option) {
	            _this.onItemChange(item, (0, _extends4.default)({}, (0, _docUtils.genValue)(value), { subjectName: option.text }), !(0, _isEmpty2.default)(value), function () {
	                if (item.type === _constants.ELEMENT.GLA) {
	                    _this.props.onSearchSubjects('', value, item.name);
	                }
	            });
	        }, _this.onSubjectBlur = function (item, value, dataSource) {
	            var selected = dataSource.find(function (item) {
	                return item.text === value;
	            });

	            if (selected) {
	                _this.onItemChange(item, { value: selected.value, subjectName: value }, !(0, _isEmpty2.default)(value));
	            } else {
	                // this.onItemChange(item, { value: '', subjectName: '' }, false)
	                _this.onItemChange(item, {}, false);
	            }
	        }, _this.onAccountTitleSelected = function (subject) {
	            var docData = _this.state.docData;


	            _this.setState({
	                subjectVisible: true
	            });

	            _this.props.onAccountTitleSubejctSelected(subject);
	        }, _this.onAccountDetailRowClicked = function (record, index, e) {
	            var docData = _this.state.docData;


	            var subject = {
	                subjectId: record.subjectId,
	                subjectName: record.subjectName,
	                subjectCode: record.subjectCode ? record.subjectCode : record.childSubjectCode
	            };

	            _this.setState({
	                subjectVisible: false
	            }, function () {
	                _this.setState({
	                    subjectVisible: true
	                });
	            });

	            _this.props.onAccountDetailSubjectSelected(subject);
	        }, _this.onCopyChange = function (copy) {
	            _this.setState({
	                currentCopy: copy
	            });
	        }, _this.valueToShow = function (item) {
	            var _this$props = _this.props,
	                editable = _this$props.editable,
	                hasErrorInfo = _this$props.hasErrorInfo,
	                activityId = _this$props.activityId;
	            var docData = _this.state.docData;
	            var all = docData.all,
	                errors = docData.errors;


	            if (item.type === _constants.ELEMENT.LABEL) {
	                if (item.textValue) {
	                    return item.textValue;
	                } else if (item.equalTo && docData.custom && (0, _utils.getDescendantantProp)(docData.custom, item.equalTo)) {
	                    return (0, _utils.getDescendantantProp)(docData.custom, item.equalTo);
	                }

	                return;
	            }

	            if (!all[item.name]) {
	                return;
	            }
	            //只能显示预置的科目或自己选择的科目
	            if (all[item.name].subjectName) {
	                return all[item.name].subjectName;
	            }

	            //展示预置的数据，非本activityId的答案和学生填写的value
	            if (all[item.name].data) {
	                return all[item.name].data;
	            } else if (all[item.name].answer && all[item.name].activityId !== activityId) {
	                return all[item.name].answer;
	            } else if (all[item.name].value) {
	                return all[item.name].value;
	            }

	            if (hasErrorInfo && errors && errors.indexOf(item.name) !== -1) {
	                return '';
	            }
	        }, _this.canEdit = function (item) {
	            var _this$props2 = _this.props,
	                editable = _this$props2.editable,
	                hasErrorInfo = _this$props2.hasErrorInfo,
	                activityId = _this$props2.activityId;
	            var _this$state = _this.state,
	                docData = _this$state.docData,
	                currentCopy = _this$state.currentCopy;
	            var all = docData.all;
	            //非第一联不可编辑

	            if (currentCopy > 0 || !editable) {
	                return false;
	            }

	            //预置数据不可编辑
	            if (all[item.name] && all[item.name].data) {
	                return false;
	            }
	            //碎片任务流转过来的之前节点的答案也只是作为背景数据不可编辑
	            if (all[item.name] && all[item.name].answer && all[item.name].activityId !== activityId) {
	                return false;
	            }
	            //流程任务流转过来的之前节点的学生填写的内容也不可编辑
	            if (all[item.name] && all[item.name].value && all[item.name].activityId !== activityId) {
	                return false;
	            }

	            if (item.type === _constants.ELEMENT.SL) {
	                if (!all[item.gla]) {
	                    return false;
	                }
	                //没有设置对应的总账科目时不可编辑明细
	                if (all[item.gla] && all[item.gla].activityId !== activityId) {
	                    //碎片任务的答案
	                    return all[item.gla].answer && !(0, _isEmpty2.default)(all[item.gla].answer);
	                }

	                //流程任务的预置数据和学生流转数据
	                return all[item.gla] && all[item.gla].activityId && all[item.gla].activityId === activityId && (all[item.gla].value && !(0, _isEmpty2.default)(all[item.gla].value) || all[item.gla].data && !(0, _isEmpty2.default)(all[item.gla].data));
	            }

	            if (!all[item.name]) {
	                return true;
	            }

	            return true;
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(EditValuesContainer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            (0, _docUtils.resetSelectHeightOfAntd)(this.props.config, this.refs.docBG);
	            this.setState({
	                glas: combineSubjects(this.props.subjectTotals),
	                sls: combineSubjects(this.props.subjectDetails),
	                docData: combineDataToState(this.props),
	                currentAccountTitle: (0, _docUtils.subjectOfPropsInCustom)(this.props, 'subjectTitle'),
	                currentAccountDetail: (0, _docUtils.subjectOfPropsInCustom)(this.props, 'subjectDetail'),
	                currentCopy: this.props.currentCopy
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState({
	                glas: combineSubjects(nextProps.subjectTotals),
	                sls: combineSubjects(nextProps.subjectDetails),
	                docData: combineDataToState(nextProps),
	                currentCopy: nextProps.currentCopy,
	                currentAccountTitle: (0, _docUtils.subjectOfPropsInCustom)(nextProps, 'subjectTitle'),
	                currentAccountDetail: (0, _docUtils.subjectOfPropsInCustom)(nextProps, 'subjectDetail')
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            (0, _docUtils.resetSelectHeightOfAntd)(this.props.config, this.refs.docBG);
	        }

	        //要展示的value


	        //元素是否可编辑

	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                config = _props.config,
	                ratioHeight = _props.ratioHeight,
	                ratioWidth = _props.ratioWidth,
	                activityId = _props.activityId,
	                hasErrorInfo = _props.hasErrorInfo,
	                subjectsTopLevel = _props.subjectsTopLevel,
	                subjectsTree = _props.subjectsTree,
	                editable = _props.editable,
	                currentPage = _props.currentPage;
	            var _state = this.state,
	                docData = _state.docData,
	                glas = _state.glas,
	                sls = _state.sls,
	                subjectVisible = _state.subjectVisible,
	                currentAccountTitle = _state.currentAccountTitle,
	                currentCopy = _state.currentCopy;


	            return _react2.default.createElement(
	                'div',
	                { ref: 'docBG', className: _docEditor4.default.main_container },
	                _react2.default.createElement(_accountSubject2.default, { subjectsTopLevel: subjectsTopLevel,
	                    subjectsTree: subjectsTree,
	                    currentAccountTitle: currentAccountTitle,
	                    onAccountDetailRowClicked: this.onAccountDetailRowClicked,
	                    onAccountTitleSelected: this.onAccountTitleSelected,
	                    normalEdit: true,
	                    visible: subjectVisible,
	                    hasErrorInfo: hasErrorInfo,
	                    config: config }),
	                _react2.default.createElement(_copyGroup2.default, { currentCopy: currentCopy,
	                    className: _docEditor4.default.copy,
	                    visibleSheet: (0, _from2.default)(Array(config.length).keys()).fill('1').join(','),
	                    selectedClsName: _docEditor4.default.highlight,
	                    onCopyChange: this.onCopyChange }),
	                _react2.default.createElement(
	                    'div',
	                    { className: _docEditor4.default.doc },
	                    _react2.default.createElement(_docEditor2.default, { bgClassName: _docEditor4.default.container,
	                        config: config,
	                        docData: docData,
	                        glas: glas,
	                        sls: sls,
	                        currentCopy: currentCopy,
	                        ratioHeight: ratioHeight,
	                        ratioWidth: ratioWidth,
	                        activityId: activityId,
	                        onItemChange: this.onNormalItemChange,
	                        onSubjectSearch: this.onSubjectSearch,
	                        onSubjectSelected: this.onSubjectSelected,
	                        onSubjectBlur: this.onSubjectBlur,
	                        hasErrorInfo: hasErrorInfo,
	                        canEdit: this.canEdit,
	                        valueToShow: this.valueToShow,
	                        currentPage: currentPage,
	                        editable: editable })
	                )
	            );
	        }
	    }]);
	    return EditValuesContainer;
	}(_react.Component);

	exports.default = EditValuesContainer;
	module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(176);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// Prepare cssTransformation
	var transform;

	var options = {}
	options.transform = transform
	// add the styles to the DOM
	var update = __webpack_require__(120)(content, options);
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./docEditor.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./docEditor.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)(undefined);
	// imports


	// module
	exports.push([module.id, ".container__k-vvQ *{padding:0;font-family:Courier Newi;color:#313131}.container__k-vvQ{border:1px solid #e1e1e1;box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}.container__k-vvQ input{background:none}.container__k-vvQ input,.container__k-vvQ textarea{outline:none;border:1px solid #ddd;border:none}.container__k-vvQ input,.container__k-vvQ span{font-family:Courier New;background:none;outline:none;display:inline-block;box-sizing:border-box;-webkit-box-sizing:border-box}.main_container__1_E10{text-align:left;display:inline-block;line-height:1.5;overflow:hidden}.copy__3qiRV,.doc__38uNh{display:inline-block;float:left}.copy__3qiRV{vertical-align:top;left:0;width:50px;z-index:10;text-align:right}.copy__3qiRV button{background-image:linear-gradient(-180deg,#fafafa,#f4f4f4);border:1px solid #c1c1c1;color:#000;margin-bottom:1px;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;transition:all .3s ease-in-out;width:30px;height:30px}.copy__3qiRV .highlight__WJL0g,.copy__3qiRV button:focus,.copy__3qiRV button:hover{width:50px;height:30px}", ""]);

	// exports
	exports.locals = {
		"container": "container__k-vvQ",
		"main_container": "main_container__1_E10",
		"doc": "doc__38uNh",
		"copy": "copy__3qiRV",
		"highlight": "highlight__WJL0g"
	};

/***/ })
/******/ ])
});
;