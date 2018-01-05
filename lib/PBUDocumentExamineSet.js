(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("antd/lib/spin/style"), require("antd/lib/spin"), require("whatwg-fetch"), require("antd/lib/button/style"), require("antd/lib/button"), require("classnames"), require("antd/lib/input/style"), require("antd/lib/input"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "antd/lib/spin/style", "antd/lib/spin", "whatwg-fetch", "antd/lib/button/style", "antd/lib/button", "classnames", "antd/lib/input/style", "antd/lib/input"], factory);
	else if(typeof exports === 'object')
		exports["pbu-document"] = factory(require("react"), require("prop-types"), require("antd/lib/spin/style"), require("antd/lib/spin"), require("whatwg-fetch"), require("antd/lib/button/style"), require("antd/lib/button"), require("classnames"), require("antd/lib/input/style"), require("antd/lib/input"));
	else
		root["pbu-document"] = factory(root["react"], root["prop-types"], root["antd/lib/spin/style"], root["antd/lib/spin"], root["whatwg-fetch"], root["antd/lib/button/style"], root["antd/lib/button"], root["classnames"], root["antd/lib/input/style"], root["antd/lib/input"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_92__, __WEBPACK_EXTERNAL_MODULE_94__, __WEBPACK_EXTERNAL_MODULE_95__, __WEBPACK_EXTERNAL_MODULE_101__, __WEBPACK_EXTERNAL_MODULE_139__, __WEBPACK_EXTERNAL_MODULE_140__, __WEBPACK_EXTERNAL_MODULE_145__, __WEBPACK_EXTERNAL_MODULE_188__, __WEBPACK_EXTERNAL_MODULE_189__) {
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

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _main = __webpack_require__(93);

	var _main2 = _interopRequireDefault(_main);

	var _editWeight = __webpack_require__(179);

	var _editWeight2 = _interopRequireDefault(_editWeight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author AngusC
	 * @description 权重及甄别项设置
	 */

	var PBUDocumentExamineSet = function PBUDocumentExamineSet(_ref) {
	  var docConfigUrl = _ref.docConfigUrl,
	      docCode = _ref.docCode,
	      docData = _ref.docData,
	      onSave = _ref.onSave,
	      loading = _ref.loading;

	  return _react2.default.createElement(
	    _main2.default,
	    { docConfigUrl: docConfigUrl },
	    _react2.default.createElement(_editWeight2.default, { ratioWidth: 1,
	      ratioHeight: 1,
	      data: docData,
	      loading: loading,
	      onSave: onSave
	    })
	  );
	};

	PBUDocumentExamineSet.propTypes = {
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
	  docData: _propTypes2.default.object,
	  /**
	   * 保存回调
	   * @param {Object} data
	   */
	  onSave: _propTypes2.default.func,
	  /**
	   * 加载中效果
	   */
	  loading: _propTypes2.default.bool
	};

	PBUDocumentExamineSet.defaultProps = {};

	exports.default = PBUDocumentExamineSet;
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
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(118);
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
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./background.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./background.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)(undefined);
	// imports


	// module
	exports.push([module.id, ".container__10moE *{padding:0;font-family:Courier New;color:#313131}.container__10moE{border:1px solid #e1e1e1;box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}.left__2RZRO{float:left;box-sizing:border-box}.container__10moE input,.container__10moE span{font-family:Courier New;background:none;outline:none;display:inline-block;box-sizing:border-box;-webkit-box-sizing:border-box}.container__10moE div{border-radius:2px}", ""]);

	// exports
	exports.locals = {
		"container": "container__10moE",
		"left": "left__2RZRO"
	};

/***/ }),
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

	    // return examines.map(item => {
	    //     return Object.keys(item)
	    //     .filter(excludeStaticProperty)
	    //     .reduce((sum, key) => {
	    //
	    //         return {
	    //             ...sum,
	    //             [key]: valueOfKey(key),
	    //             ...sortOrder(item)
	    //         }
	    //     }, {
	    //         examineId: item.examineId,
	    //         examineType: item.examineType,
	    //         examineName: item.examineName
	    //     })
	    // })

	    // 先排除掉未填过值，然后拼装
	    return examines.filter(function (item) {
	        return (0, _keys2.default)(item).filter(excludeStaticProperty).filter(function (key) {
	            return all[key] && all[key][keyOfAll];
	        }).length > 0;
	    }).map(function (item) {
	        return (0, _keys2.default)(item).filter(excludeStaticProperty).filter(function (key) {
	            return all[key] && all[key][keyOfAll];
	        }).reduce(function (sum, key) {
	            return (0, _extends4.default)({}, sum, (0, _defineProperty3.default)({}, key, all[key][keyOfAll]), sortOrder(item));
	        }, {
	            examineId: item.examineId,
	            examineType: item.examineType,
	            examineName: item.examineName
	        });
	    });
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
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_139__;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_140__;

/***/ }),
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_145__;

/***/ }),
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(7);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _values = __webpack_require__(106);

	var _values2 = _interopRequireDefault(_values);

	var _defineProperty2 = __webpack_require__(97);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _extends3 = __webpack_require__(1);

	var _extends4 = _interopRequireDefault(_extends3);

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

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(145);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _editWeight = __webpack_require__(180);

	var _editWeight2 = _interopRequireDefault(_editWeight);

	var _utils = __webpack_require__(96);

	var _constants = __webpack_require__(122);

	var _background = __webpack_require__(117);

	var _background2 = _interopRequireDefault(_background);

	var _isEmpty = __webpack_require__(103);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	var _isInt = __webpack_require__(182);

	var _isInt2 = _interopRequireDefault(_isInt);

	var _blueimpMd = __webpack_require__(102);

	var _blueimpMd2 = _interopRequireDefault(_blueimpMd);

	var _selectedRectangle = __webpack_require__(183);

	var _selectedRectangle2 = _interopRequireDefault(_selectedRectangle);

	var _reactComposition = __webpack_require__(184);

	var _reactComposition2 = _interopRequireDefault(_reactComposition);

	var _weightHeader = __webpack_require__(187);

	var _weightHeader2 = _interopRequireDefault(_weightHeader);

	var _docUtils = __webpack_require__(131);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @author AngusC
	 * @description 编辑权重及甄别方式
	 */

	var EditWeight = function (_Component) {
	    (0, _inherits3.default)(EditWeight, _Component);

	    function EditWeight() {
	        var _ref;

	        var _temp, _this, _ret;

	        (0, _classCallCheck3.default)(this, EditWeight);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditWeight.__proto__ || (0, _getPrototypeOf2.default)(EditWeight)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            currentExamineType: '',
	            //是否显示选择框
	            showSelectRect: false,
	            //选择框信息
	            selectRect: (0, _selectedRectangle.zeroRect)(),
	            //当前选中的元素们
	            selectedElement: {},
	            //编辑完成的元素们
	            completedElement: {},
	            //用于生成tag
	            examineTypeIndex: {},
	            selectedTag: '',
	            editTagId: '',
	            editTagName: '',
	            tagNameBackup: ''
	        }, _this.combineDataIntoCompleted = function (props) {
	            var data = props.data,
	                config = props.config;


	            if (!data) {
	                return;
	            }

	            //去掉不属于此单据的元素
	            var newCompletedElement = (0, _keys2.default)(data.all).filter(function (key) {
	                return !!config[0].elements[key] && data.all[key].examineType;
	            }).reduce(function (sum, key) {
	                return (0, _extends4.default)({}, sum, (0, _defineProperty3.default)({}, key, (0, _extends4.default)({}, data.all[key], {
	                    element: config[0].elements[key]
	                })));
	            }, {});

	            _this.setState({
	                completedElement: newCompletedElement
	            });
	        }, _this.onExamineTypeChange = function (type) {
	            _this.setState({
	                currentExamineType: type
	            });
	        }, _this.onMouseDown = function (e) {
	            var xInContainer = e.clientX - _this.refs.docContainer.getBoundingClientRect().left + _this.refs.docContainer.scrollLeft;
	            var yInContainer = e.clientY - _this.refs.docContainer.getBoundingClientRect().top + _this.refs.docContainer.scrollTop;

	            _this.setState({
	                showSelectRect: true,
	                selectRect: (0, _selectedRectangle.makeRect)(xInContainer, yInContainer, xInContainer, yInContainer, 0, 0)
	            });
	        }, _this.onMouseUp = function (e) {
	            //只有当鼠标抬起时才会有下列操作
	            //声明糖
	            var _this$state = _this.state,
	                currentExamineType = _this$state.currentExamineType,
	                selectedElement = _this$state.selectedElement,
	                completedElement = _this$state.completedElement,
	                examineTypeIndex = _this$state.examineTypeIndex,
	                selectedTag = _this$state.selectedTag;
	            //首先计算examineId

	            var examineId = currentExamineType + '_' + (0, _blueimpMd2.default)(Date.now());

	            if (!(0, _isEmpty2.default)(selectedTag)) {
	                examineId = selectedTag;
	            }

	            //然后将selectedElement移到completedElement区
	            var newCompletedElement = (0, _extends4.default)({}, completedElement);

	            var exIndex = (0, _extends4.default)({}, examineTypeIndex);

	            var examineName = _constants.EXAMINE_NAME[currentExamineType];
	            //生成标签
	            if (exIndex.hasOwnProperty(currentExamineType)) {
	                exIndex[currentExamineType].push({
	                    examineId: examineId,
	                    index: exIndex[currentExamineType].length,
	                    examineName: '' + _constants.EXAMINE_NAME[currentExamineType] + exIndex[currentExamineType].length
	                });
	                examineName = '' + _constants.EXAMINE_NAME[currentExamineType] + exIndex[currentExamineType].length;
	            } else {
	                exIndex[currentExamineType] = [{
	                    examineId: examineId,
	                    index: 0,
	                    examineName: '' + _constants.EXAMINE_NAME[currentExamineType]
	                }];
	            }

	            (0, _values2.default)(selectedElement).forEach(function (item, index) {
	                if (currentExamineType === _constants.EXAMINE.MULTI_LINE && item.elmtype !== _constants.ELEMENT_TYPE.TABLE) {
	                    return;
	                }
	                //去掉checkbox和label
	                if (item.type === _constants.ELEMENT.LABEL || item.type === _constants.ELEMENT.CHECK_BOX && !item.options) {
	                    return;
	                }

	                newCompletedElement[item.name] = {
	                    weight: 1,
	                    examineType: currentExamineType,
	                    examineId: examineId,
	                    examineName: examineName,
	                    element: item
	                };
	            });

	            _this.setState({
	                examineTypeIndex: exIndex,
	                completedElement: newCompletedElement,
	                selectedElement: {},
	                showSelectRect: false,
	                selectRect: (0, _selectedRectangle.zeroRect)()
	            });
	        }, _this.onMouseLeave = function (e) {
	            _this.setState({
	                showSelectRect: false,
	                selectedElement: {},
	                selectRect: (0, _selectedRectangle.zeroRect)()
	            });
	        }, _this.onMouseMove = function (e) {
	            var xInContainer = e.clientX - _this.refs.docContainer.getBoundingClientRect().left + _this.refs.docContainer.scrollLeft;
	            var yInContainer = e.clientY - _this.refs.docContainer.getBoundingClientRect().top + _this.refs.docContainer.scrollTop;
	            //声明糖
	            var _this$state2 = _this.state,
	                currentExamineType = _this$state2.currentExamineType,
	                selectedElement = _this$state2.selectedElement,
	                completedElement = _this$state2.completedElement,
	                selectRect = _this$state2.selectRect;
	            //当鼠标反向选取时的计算

	            var newLeft = xInContainer < selectRect.startLeft ? xInContainer : selectRect.startLeft;
	            var newTop = yInContainer < selectRect.startTop ? yInContainer : selectRect.startTop;

	            if (_this.state.showSelectRect) {
	                var elements = _this.props.config[0].elements;
	                var newSelectedElement = (0, _extends4.default)({}, selectedElement);

	                (0, _values2.default)(elements).forEach(function (item, index) {
	                    if ((0, _utils.intersectRect)(item.pos, selectRect) && !completedElement.hasOwnProperty(item.name)) {
	                        newSelectedElement[item.name] = item;
	                    } else {
	                        delete newSelectedElement[item.name];
	                    }
	                });

	                _this.setState({
	                    selectRect: (0, _selectedRectangle.makeRect)(newLeft, newTop, selectRect.startLeft, selectRect.startTop, Math.abs(xInContainer - selectRect.startLeft), Math.abs(yInContainer - selectRect.startTop)),
	                    selectedElement: newSelectedElement
	                });
	            }
	        }, _this.onWeightChange = function (name, value) {

	            if (value.length > 0 && !(0, _isInt2.default)(value, { min: 0, max: 99 })) {
	                return;
	            }

	            var _this$state3 = _this.state,
	                currentExamineType = _this$state3.currentExamineType,
	                completedElement = _this$state3.completedElement;


	            var newCompletedElement = (0, _extends4.default)({}, completedElement);

	            //如果是多行编辑则权重值影响的是整列
	            if (newCompletedElement[name].examineType === _constants.EXAMINE.MULTI_LINE) {
	                var tempObj = (0, _extends4.default)({}, newCompletedElement);

	                //多行编辑情况下一定存在table.col
	                (0, _values2.default)(newCompletedElement).forEach(function (item, index) {
	                    if (item.examineType === newCompletedElement[name].examineType && item.examineId === newCompletedElement[name].examineId && item.element.table.col === newCompletedElement[name].element.table.col) {
	                        tempObj[item.element.name].weight = value;
	                    }
	                });

	                newCompletedElement = (0, _extends4.default)({}, tempObj);
	            } else {
	                newCompletedElement[name].weight = value;
	            }

	            _this.setState({
	                completedElement: newCompletedElement
	            });
	        }, _this.onRemoveCompleted = function (name) {
	            var _this$state4 = _this.state,
	                currentExamineType = _this$state4.currentExamineType,
	                completedElement = _this$state4.completedElement;


	            var newCompletedElement = (0, _extends4.default)({}, completedElement);
	            //如果是多行编辑则删除时要删除掉整列
	            if (newCompletedElement[name].examineType === _constants.EXAMINE.MULTI_LINE) {
	                var tempObj = (0, _extends4.default)({}, newCompletedElement);

	                //多行编辑情况下一定存在table.col
	                (0, _values2.default)(newCompletedElement).forEach(function (item, index) {
	                    if (item.examineType === newCompletedElement[name].examineType && item.examineId === newCompletedElement[name].examineId && item.element.table.col === newCompletedElement[name].element.table.col) {
	                        delete tempObj[item.element.name];
	                    }
	                });

	                newCompletedElement = (0, _extends4.default)({}, tempObj);
	            } else {
	                delete newCompletedElement[name];
	            }
	            _this.setState({
	                completedElement: newCompletedElement
	            });
	        }, _this.onClearAll = function () {
	            _this.setState({
	                selectedElement: {},
	                completedElement: {},
	                examineTypeIndex: {},
	                currentExamineType: ''
	            });
	        }, _this.onRemoveByTagId = function (examineId) {
	            var _this$state5 = _this.state,
	                currentExamineType = _this$state5.currentExamineType,
	                completedElement = _this$state5.completedElement;


	            var newCompletedElement = (0, _extends4.default)({}, completedElement);

	            (0, _values2.default)(completedElement).forEach(function (item, index) {
	                if (item.examineId === examineId) {
	                    delete newCompletedElement[item.element.name];
	                }
	            });

	            _this.setState({
	                completedElement: newCompletedElement,
	                selectedTag: ''
	            });
	        }, _this.onSelectTags = function (examineId) {
	            _this.setState({
	                selectedTag: examineId === _this.state.selectedTag ? '' : examineId
	            });
	        }, _this.onEditTag = function (e) {
	            _this.setState({
	                editTagName: e.target.value
	            });
	        }, _this.onTagDoubleClick = function (examineId, examineName) {
	            _this.setState({
	                editTagId: examineId,
	                editTagName: examineName,
	                tagNameBackup: examineName
	            });
	        }, _this.onTagBlur = function () {
	            var newCompletedElement = (0, _extends4.default)({}, _this.state.completedElement);

	            (0, _values2.default)(newCompletedElement).forEach(function (item) {
	                if (item.examineId === _this.state.editTagId) {
	                    if (!(0, _isEmpty2.default)(_this.state.editTagName.trim())) {
	                        item.examineName = _this.state.editTagName;
	                    } else {
	                        item.examineName = _this.state.tagNameBackup;
	                    }
	                }
	            });

	            _this.setState({
	                editTagId: '',
	                selectedTag: '',
	                tagNameBackup: '',
	                completedElement: newCompletedElement
	            });
	        }, _this.onSave = function (data) {
	            _this.props.onSave(data);
	        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	    }

	    (0, _createClass3.default)(EditWeight, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.combineDataIntoCompleted(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.combineDataIntoCompleted(nextProps);
	        }

	        //权重修改监听


	        //删除选中的元素


	        //清除操作


	        //根据标签名删除

	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                config = _props.config,
	                ratioWidth = _props.ratioWidth,
	                ratioHeight = _props.ratioHeight,
	                data = _props.data,
	                loading = _props.loading;
	            var _state = this.state,
	                selectedElement = _state.selectedElement,
	                currentExamineType = _state.currentExamineType,
	                completedElement = _state.completedElement,
	                showSelectRect = _state.showSelectRect,
	                selectRect = _state.selectRect,
	                selectedTag = _state.selectedTag,
	                examineTypeIndex = _state.examineTypeIndex,
	                editTagId = _state.editTagId,
	                editTagName = _state.editTagName;

	            var docData = data;
	            //顶部操作渲染
	            var renderTopHeader = function renderTopHeader() {
	                return _react2.default.createElement(_weightHeader2.default, { config: config[0],
	                    all: completedElement,
	                    editTagId: editTagId,
	                    selectedTag: selectedTag,
	                    onSave: _this2.onSave,
	                    onClearAll: _this2.onClearAll,
	                    onSelectTags: _this2.onSelectTags,
	                    onTagDoubleClick: _this2.onTagDoubleClick,
	                    onTagBlur: _this2.onTagBlur,
	                    onRemoveByTagId: _this2.onRemoveByTagId,
	                    onEditTag: _this2.onEditTag,
	                    editTagName: editTagName,
	                    loading: loading
	                });
	            };

	            //渲染右侧设置项
	            var renderRightContainer = function renderRightContainer() {
	                //渲染甄别方式选择radio
	                var renderRadioButtons = function renderRadioButtons() {
	                    var radioNodes = (0, _keys2.default)(_constants.EXAMINE_NAME).map(function (item, index) {
	                        var checkedOpt = {
	                            checked: false
	                        };

	                        if (currentExamineType === item) {
	                            checkedOpt = {
	                                checked: 'checked'
	                            };
	                        }

	                        return _react2.default.createElement(
	                            'label',
	                            { key: item + '_' + index, htmlFor: item, onClick: function onClick() {
	                                    _this2.onExamineTypeChange(item);
	                                } },
	                            _react2.default.createElement('input', (0, _extends4.default)({ type: 'radio', name: 'radio', id: item }, checkedOpt)),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                _constants.EXAMINE_NAME[item]
	                            )
	                        );
	                    });

	                    return radioNodes;
	                };

	                return _react2.default.createElement(
	                    'div',
	                    { className: _editWeight2.default.right_container },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        renderRadioButtons()
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _editWeight2.default.msg },
	                        (0, _keys2.default)(_constants.EXAMINE).map(function (key) {
	                            return _react2.default.createElement(
	                                'p',
	                                { key: key },
	                                _react2.default.createElement(
	                                    'span',
	                                    null,
	                                    _constants.EXAMINE_NAME[key],
	                                    '\uFF1A'
	                                ),
	                                _constants.EXAMINE_TEXT[key]
	                            );
	                        })
	                    )
	                );
	            };

	            //渲染选择完成区
	            var renderCompletedZone = function renderCompletedZone() {
	                var elementNodes = (0, _values2.default)(completedElement).map(function (item, index) {
	                    if (!item.element) {
	                        return;
	                    }

	                    var pos = item.element.pos;


	                    if (!(0, _isEmpty2.default)(selectedTag) && selectedTag !== item.examineId) {
	                        return null;
	                    }
	                    if (item.element.type === _constants.ELEMENT.LABEL || item.element.type === _constants.ELEMENT.CHECK_BOX && !item.element.options) {
	                        return null;
	                    }

	                    var selected = {
	                        border: '1px solid ' + _constants.EXAMINE_COLOR[item.examineType],
	                        borderRadius: 2
	                    };

	                    return _react2.default.createElement(
	                        'div',
	                        { key: item.element.name + '_' + index,
	                            style: (0, _extends4.default)({
	                                position: "absolute",
	                                left: pos.left * ratioWidth,
	                                top: pos.top * ratioHeight,
	                                width: pos.width * ratioWidth,
	                                height: pos.height * ratioHeight
	                            }, selected) },
	                        _react2.default.createElement('input', { id: item.element.name,
	                            style: {
	                                background: '#fff',
	                                textAlign: 'center'
	                                // padding:'0 10px'
	                            },
	                            name: item.element.name,
	                            value: item.weight,
	                            onChange: function onChange(e) {
	                                _this2.onWeightChange(item.element.name, e.target.value);
	                            }
	                        }),
	                        _react2.default.createElement('i', { className: _editWeight2.default.iconfont,
	                            onClick: function onClick() {
	                                _this2.onRemoveCompleted(item.element.name);
	                            },
	                            style: {
	                                // top: (pos.height * ratioHeight - 14)/2-4,
	                                color: _constants.EXAMINE_COLOR[item.examineType]
	                            } })
	                    );
	                });

	                return elementNodes;
	            };

	            //渲染选中的元素，并且待编辑状态
	            var renderSelectedZone = function renderSelectedZone() {
	                var elementNodes = (0, _values2.default)(selectedElement).map(function (item, index) {
	                    var selected = {
	                        border: '1px solid ' + _constants.EXAMINE_COLOR[currentExamineType],
	                        borderRadius: 2
	                    };

	                    var pos = item.pos;


	                    return _react2.default.createElement('input', { key: item.name + '_' + index,
	                        id: item.name,
	                        name: item.name,
	                        style: (0, _extends4.default)({
	                            position: "absolute",
	                            left: pos.left * ratioWidth,
	                            top: pos.top * ratioHeight,
	                            width: pos.width * ratioWidth,
	                            height: pos.height * ratioHeight
	                        }, item.style, selected)
	                    });
	                });

	                return elementNodes;
	            };

	            //要展示的value
	            var valueToShow = function valueToShow(item) {

	                if (item.type === _constants.ELEMENT.LABEL) {
	                    if (item.textValue) {
	                        return item.textValue;
	                    } else if (item.equalTo && docData.custom && (0, _utils.getDescendantantProp)(docData.custom, item.equalTo)) {
	                        return (0, _utils.getDescendantantProp)(docData.custom, item.equalTo);
	                    }

	                    return;
	                }
	            };

	            //渲染只读元素，包括Label
	            var renderReadOnlyItem = function renderReadOnlyItem(item, index) {
	                var value = valueToShow(item);

	                if (!value && value !== '' && (!config[0].docType || config[0].docType === _constants.DOC_TYPE.DEFAULT)) {
	                    return null;
	                }

	                return _react2.default.createElement(
	                    'span',
	                    { key: 'readonly_' + index,
	                        title: value,
	                        style: (0, _extends4.default)({
	                            overflow: 'hidden',
	                            textOverflow: 'ellipsis',
	                            whiteSpace: 'nowrap'
	                        }, (0, _docUtils.basicStyleOfItem)(item)) },
	                    value
	                );
	            };

	            var renderBorderIfNeeded = function renderBorderIfNeeded(item, index) {
	                if (!config[0].docType || config[0].docType === _constants.DOC_TYPE.DEFAULT) {
	                    return null;
	                }

	                return _react2.default.createElement('div', { key: item.name + '_' + index,
	                    style: (0, _docUtils.basicStyleOfItem)(item) });
	            };

	            var renderReadOnly = function renderReadOnly() {
	                var elementNodes = (0, _values2.default)(config[0].elements).map(function (item, index) {

	                    switch (item.type) {
	                        case _constants.ELEMENT.LABEL:
	                            return renderReadOnlyItem(item, index);
	                            break;
	                        default:
	                            return renderBorderIfNeeded(item, index);
	                            break;
	                    }
	                });

	                return elementNodes;
	            };

	            //渲染单据
	            var renderDoc = function renderDoc() {

	                var mouseEventOpt = {};
	                //只有选择了甄别方式才添加鼠标事件
	                if (!(0, _isEmpty2.default)(currentExamineType)) {
	                    mouseEventOpt = {
	                        onMouseDown: _this2.onMouseDown,
	                        onMouseMove: _this2.onMouseMove,
	                        onMouseLeave: _this2.onMouseLeave,
	                        onMouseUp: _this2.onMouseUp
	                    };
	                }

	                return _react2.default.createElement(
	                    'div',
	                    { className: (0, _classnames2.default)(_editWeight2.default.outter, _editWeight2.default.left) },
	                    _react2.default.createElement(
	                        'div',
	                        (0, _extends4.default)({ ref: 'docContainer',
	                            key: config[0].backgroundImage,
	                            className: (0, _classnames2.default)(_editWeight2.default.detail, _editWeight2.default.left),
	                            style: (0, _extends4.default)({
	                                background: '#FFFFFF url(' + config[0].backgroundImage + ') no-repeat center center',
	                                width: config[0].width * ratioWidth,
	                                height: config[0].height * ratioHeight
	                            }, config[0].style)
	                        }, mouseEventOpt),
	                        renderReadOnly(),
	                        renderSelectedZone(),
	                        renderCompletedZone(),
	                        showSelectRect && _react2.default.createElement(_selectedRectangle2.default, { rect: selectRect })
	                    )
	                );
	            };

	            return _react2.default.createElement(
	                'div',
	                null,
	                renderTopHeader(),
	                _react2.default.createElement(
	                    'div',
	                    { className: _editWeight2.default.content },
	                    renderDoc(),
	                    renderRightContainer()
	                )
	            );
	        }
	    }]);
	    return EditWeight;
	}(_react.Component);

	exports.default = EditWeight;


	EditWeight.propTypes = {
	    /**
	     * 单据配置信息，当前联的
	     */
	    config: _propTypes2.default.array,
	    /**
	     * 横向缩放比例，默认1
	     */
	    ratioWidth: _propTypes2.default.number,
	    /**
	     * 纵向缩放比例，默认1
	     */
	    ratioHeight: _propTypes2.default.number,
	    /**
	     * 需要展示的数据，权重和甄别方式相关
	     */
	    data: _propTypes2.default.object,
	    /**
	     * 保存回调
	     * @param {Object} data
	     */
	    onSave: _propTypes2.default.func,
	    /**
	     * 加载中
	     */
	    loading: _propTypes2.default.bool
	};

	EditWeight.defaultProps = {
	    ratioWidth: 1,
	    ratioHeight: 1,
	    data: null,
	    loading: false,
	    onSave: function onSave(data) {
	        console.log('data = ', data);
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(181);
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
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./editWeight.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&minimize&localIdentName=[local]__[hash:base64:5]!../../node_modules/less-loader/index.js!./editWeight.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(119)(undefined);
	// imports


	// module
	exports.push([module.id, ".wrap__2Q-Bq *{margin:0;padding:0;list-style:none;outline:none}.sub_nav__1zfhT{background:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,.1);width:100%;height:60px}.sub_nav__1zfhT *{margin:0;padding:0;list-style:none;outline:none}.sub_nav__1zfhT h2{font-size:16px;line-height:60px;color:#313131;width:180px;margin-left:20px;_display:inline;float:left;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.menus__22z7s{width:55%;float:left;position:relative;box-sizing:border-box;-webkit-box-sizing:border-box}.menus__22z7s .next__j0yT2,.menus__22z7s .pre__27VVX{display:inline-block;width:22px;height:32px;background:#ebebeb;border-radius:2px;cursor:pointer;position:absolute;left:0;top:14px;line-height:30px;text-align:center;color:#c1c1c1}.menus__22z7s .next__j0yT2{left:auto;right:0}.menus__22z7s .next__j0yT2:hover,.menus__22z7s .pre__27VVX:hover{background:#d1d1d1;color:#a8a8a8}.menus__22z7s .pre__27VVX i:before{content:\"\\E900\";font-size:12px}.menus__22z7s .next__j0yT2 i:before{content:\"\\E901\";font-size:12px}.menus__22z7s div{display:inline-block;overflow:auto;line-height:60px;width:100%;white-space:nowrap}.menus__22z7s li{height:32px;display:inline-block;border:1px solid #c1c1c1;border-radius:2px;position:relative;color:#919191;cursor:pointer;margin:0 5px;box-sizing:border-box;-webkit-box-sizing:border-box;line-height:32px!important}.menus__22z7s li input{height:26px;display:block;min-width:50px;max-width:100px}.menus__22z7s li b{padding:0 14px;display:inline-block;height:32px;line-height:32px;font-weight:400}.menus__22z7s .highlight__1398Y,.menus__22z7s li:hover{color:#3dcc61;border-color:#3dcc61}.delete__1hqVr{width:14px;height:14px;background:#fff;display:block;position:absolute;right:-7px;top:-7px;overflow:hidden;line-height:12px}@font-face{font-family:iconfont;src:url(\"https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_document/font/icomoon.eot\");src:url(\"https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_document/font/icomoon.eot?#iefix\") format(\"embedded-opentype\"),url(\"https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_document/font/icomoon.woff\") format(\"woff\"),url(\"https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_document/font/icomoon.ttf\") format(\"truetype\"),url(\"https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_document/font/icomoon.svg#iconfont\") format(\"svg\")}.iconfont__3oeiU{font-family:iconfont;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.delete__1hqVr i:before{content:\"\\E902\";font-size:14px}.btn_group__3V2KL{float:right;margin-right:30px;_display:inline;margin-top:10px}.btn_group__3V2KL button{width:140px;height:40px;background:#3dcc61;border-radius:2px;font-size:14px;color:#fff;border:0}.btn_group__3V2KL button:hover{background:#35b355;cursor:pointer}.btn_group__3V2KL .clear__3rhqR{background:#fff;color:#3dcc61;border:1px solid #3dcc61;margin-right:10px}.btn_group__3V2KL .clear__3rhqR:hover{color:#35b355;border-color:#35b355;background:#fff}.content__2OaaB{width:1220px;margin:30px auto;overflow:hidden}.content__2OaaB input,textarea{-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;outline:none;border:1px solid #ddd}.content__2OaaB input:focus,textarea:focus{box-shadow:0 0 5px #3dcc61;border:1px solid #3dcc61}.right_container__dcdZD{float:left;margin-left:20px;_display:inline}.right_container__dcdZD label{display:block;margin-bottom:10px;cursor:pointer}.right_container__dcdZD label span{display:inline-block;width:120px;height:32px;background:#e66963;color:#fff;font-size:14px;line-height:32px;text-align:center;margin-left:10px;border:1px solid #e66963}.right_container__dcdZD label:nth-child(2) span{background:#a28ddd;border:1px solid #917ec4}.right_container__dcdZD label:nth-child(3) span{background:#95df7d;border:1px solid #84c46e}.right_container__dcdZD label:nth-child(4) span{background:#faa755;border:1px solid #e0964c}.msg__kI0ht{background:#f4f4f4;border:1px solid #ebebeb;border-radius:2px;width:200px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;font-size:12px;padding:12px 20px 18px;margin-top:65px}.msg__kI0ht p{margin-top:5px;line-height:18px;color:#616161}.msg__kI0ht p span{font-weight:500!important}.detail__V7dDU{border:1px solid #e1e1e1;box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}.detail__V7dDU *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.outter__3hQTI{width:1000px;overflow-x:auto;overflow-y:hidden}.left__25p_A{float:left;box-sizing:border-box}.detail__V7dDU input{width:100%;height:100%;border:0;background:none}.time__1pAKe{width:30px;height:26px}.detail__V7dDU div i{position:absolute;right:0;cursor:pointer}.detail__V7dDU div i:before{content:\"\\E902\";font-size:12px}.type__1evRY{width:21px;height:26px}.num__2-6Ez{width:51px;height:26px}.summary__262gv{width:113px;height:26px}.subject__OF6Za{width:89px;height:26px}.debtor__2_mfF{width:173px;height:26px}.balance__2Rdvs input,.debtor__2_mfF input,.lender__2aq7f input{text-align:right;letter-spacing:5px}.lender__2aq7f{width:178px;height:26px}.sign__3zPNm{width:38px;height:26px}.balance__2Rdvs{width:172px;height:26px}.check__3weTC{width:16px;height:26px}", ""]);

	// exports
	exports.locals = {
		"wrap": "wrap__2Q-Bq",
		"sub_nav": "sub_nav__1zfhT",
		"menus": "menus__22z7s",
		"pre": "pre__27VVX",
		"next": "next__j0yT2",
		"highlight": "highlight__1398Y",
		"delete": "delete__1hqVr",
		"iconfont": "iconfont__3oeiU",
		"btn_group": "btn_group__3V2KL",
		"clear": "clear__3rhqR",
		"content": "content__2OaaB",
		"right_container": "right_container__dcdZD",
		"msg": "msg__kI0ht",
		"detail": "detail__V7dDU",
		"outter": "outter__3hQTI",
		"left": "left__25p_A",
		"time": "time__1pAKe",
		"type": "type__1evRY",
		"num": "num__2-6Ez",
		"summary": "summary__262gv",
		"subject": "subject__OF6Za",
		"debtor": "debtor__2_mfF",
		"lender": "lender__2aq7f",
		"balance": "balance__2Rdvs",
		"sign": "sign__3zPNm",
		"check": "check__3weTC"
	};

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isInt;

	var _assertString = __webpack_require__(104);

	var _assertString2 = _interopRequireDefault(_assertString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
	var intLeadingZeroes = /^[-+]?[0-9]+$/;

	function isInt(str, options) {
	  (0, _assertString2.default)(str);
	  options = options || {};

	  // Get the regex to use for testing, based on whether
	  // leading zeroes are allowed or not.
	  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

	  // Check min/max/lt/gt
	  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
	  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
	  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
	  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

	  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
	}
	module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.zeroRect = zeroRect;
	exports.makeRect = makeRect;

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(145);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 0单位矩形对象
	 * @return {Object} [description]
	 */
	function zeroRect() {
	    return {
	        left: 0,
	        top: 0,
	        startLeft: 0,
	        startTop: 0,
	        width: 0,
	        height: 0
	    };
	}

	/**
	 * 生成矩形对象
	 * @param  {Number} left      [description]
	 * @param  {Number} top       [description]
	 * @param  {Number} startLeft [description]
	 * @param  {Number} startTop  [description]
	 * @param  {Number} width     [description]
	 * @param  {Number} height    [description]
	 * @return {Object}           [description]
	 */
	/**
	 * @author AngusC
	 * @description 选择框组件
	 */
	function makeRect(left, top, startLeft, startTop, width, height) {
	    return {
	        left: left,
	        top: top,
	        startLeft: startLeft,
	        startTop: startTop,
	        width: width,
	        height: height
	    };
	}

	var Rectangle = function Rectangle(_ref) {
	    var rect = _ref.rect;


	    return _react2.default.createElement('div', { style: {
	            position: "absolute",
	            backgroundColor: 'rgba(0,0,0,0.1)',
	            zIndex: 0,
	            left: rect.left,
	            top: rect.top,
	            width: rect.width,
	            height: rect.height
	        } });
	};

	exports.default = Rectangle;


	Rectangle.propTypes = {
	    /**
	     * 矩形对象，包括left, top, width, height
	     */
	    rect: _propTypes2.default.object.isRequired
	};

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = __webpack_require__(185);

	module.exports = __webpack_require__(185);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extend2 = __webpack_require__(186);

	var _extend3 = _interopRequireDefault(_extend2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var reactComposition = function reactComposition(userSettings) {
	    var returnProps = {};
	    var defaultSettings = {
	        onChange: null
	    };
	    var settings = (0, _extend3["default"])(true, defaultSettings, userSettings);
	    var defaultReactCompositionStatus = function defaultReactCompositionStatus() {
	        return {
	            composition: false
	        };
	    };
	    var data = {
	        get: function get(event) {
	            return event.target.__REACT_COMPOSITION_SECRET_DATA || defaultReactCompositionStatus();
	        },
	        set: function set(event, obj) {
	            event.target.__REACT_COMPOSITION_SECRET_DATA = obj;
	        },
	        extend: function extend(event, obj) {
	            event.target.__REACT_COMPOSITION_SECRET_DATA = (0, _extend3["default"])(true, event.target.__REACT_COMPOSITION_SECRET_DATA, obj);
	        }
	    };
	    returnProps.onChange = function (event) {
	        event.reactComposition = data.get(event);
	        if (settings.onChange) {
	            settings.onChange(event);
	        }
	    };
	    returnProps.onCompositionStart = function (event) {
	        if (settings.onCompositionStart) {
	            settings.onCompositionStart(event);
	        }
	        data.extend(event, {
	            composition: true
	        });
	    };
	    returnProps.onCompositionUpdate = function (event) {
	        if (settings.onCompositionUpdate) {
	            settings.onCompositionUpdate(event);
	        }
	    };
	    returnProps.onCompositionEnd = function (event) {
	        if (settings.onCompositionEnd) {
	            settings.onCompositionEnd(event);
	        }
	        data.extend(event, {
	            composition: false
	        });
	        event.reactComposition = data.get(event);
	        settings.onChange(event);
	    };
	    return returnProps;
	};
	exports["default"] = reactComposition;

	module.exports = reactComposition;

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) { /**/ }

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone;
		var target = arguments[0];
		var i = 1;
		var length = arguments.length;
		var deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}
		if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _style3 = __webpack_require__(139);

	var _button = __webpack_require__(140);

	var _button2 = _interopRequireDefault(_button);

	var _style4 = __webpack_require__(188);

	var _input = __webpack_require__(189);

	var _input2 = _interopRequireDefault(_input);

	var _stringify = __webpack_require__(163);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _extends2 = __webpack_require__(1);

	var _extends3 = _interopRequireDefault(_extends2);

	var _values = __webpack_require__(106);

	var _values2 = _interopRequireDefault(_values);

	var _react = __webpack_require__(91);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(145);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(92);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _editWeight = __webpack_require__(180);

	var _editWeight2 = _interopRequireDefault(_editWeight);

	var _reactComposition = __webpack_require__(184);

	var _reactComposition2 = _interopRequireDefault(_reactComposition);

	var _constants = __webpack_require__(122);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 对象转入examines中
	 * @param  {[type]} groups   [description]
	 * @param  {[type]} examines [description]
	 * @return {[type]}          [description]
	 */
	/**
	 * @author AngusC
	 * @description 编辑权重头部
	 */

	function groupsToExamines(groups, examines) {
	    if (!groups || !Array.isArray(examines)) {
	        return;
	    }

	    (0, _values2.default)(groups).forEach(function (item, index) {
	        if (item.examineType) {
	            examines.push(item);
	        } else {
	            groupsToExamines(item, examines);
	        }
	    });
	}

	/**
	 * 对all分组
	 * @param  {[type]} all    [description]
	 * @param  {[type]} groups [description]
	 * @return {[type]}        [description]
	 */
	function groupAll(all, groups) {
	    if (!all || !groups) {
	        return;
	    }

	    /**
	     * 先根据examineId 进行分组，如果是examineType为MULTI_LINE的话，则同行为一组
	     */
	    (0, _values2.default)(all).forEach(function (item, index) {
	        switch (item.examineType) {
	            case _constants.EXAMINE.MULTI_ELM:
	                if (!groups.hasOwnProperty(item.examineId)) {
	                    //去除不必要的item.element项
	                    groups[item.examineId] = {
	                        examineType: item.examineType,
	                        examineId: item.examineId,
	                        examineName: item.examineName
	                    };
	                }
	                groups[item.examineId][item.element.name] = item.weight;
	                break;

	            case _constants.EXAMINE.MULTI_LINE:
	                if (!(groups.hasOwnProperty(item.examineId) && groups[item.examineId].hasOwnProperty('row' + item.element.table.row))) {
	                    groups[item.examineId] = (0, _extends3.default)({}, groups[item.examineId]);
	                    groups[item.examineId]['row' + item.element.table.row] = {
	                        examineType: item.examineType,
	                        examineId: item.examineId,
	                        examineName: item.examineName
	                    };

	                    if (!groups[item.examineId]['row' + item.element.table.row].hasOwnProperty('sortOrder')) {
	                        groups[item.examineId]['row' + item.element.table.row]['sortOrder'] = [];
	                    }
	                }
	                groups[item.examineId]['row' + item.element.table.row]['sortOrder'].push(item.element.name);
	                groups[item.examineId]['row' + item.element.table.row][item.element.name] = item.weight;
	                break;

	            case _constants.EXAMINE.SINGLE:
	            case _constants.EXAMINE.SETTLEMENT:
	                if (!groups.hasOwnProperty(item.examineId)) {
	                    groups[item.examineId] = {};
	                }

	                if (!groups[item.examineId].hasOwnProperty(item.element.name)) {
	                    groups[item.examineId][item.element.name] = {};
	                }

	                groups[item.examineId][item.element.name] = {
	                    examineType: item.examineType,
	                    examineId: item.examineId,
	                    examineName: item.examineName
	                };

	                groups[item.examineId][item.element.name][item.element.name] = item.weight;
	                break;

	        }
	    });
	}

	/**
	 * 生成新的all，剔除element
	 * @param  {[type]} all      [description]
	 * @return {[type]}          [description]
	 */
	function examinesToAll(all) {
	    if (!all) {
	        return;
	    }

	    var newAll = {};
	    (0, _values2.default)(all).forEach(function (item) {
	        newAll[item.element.name] = {
	            examineType: item.examineType,
	            examineId: item.examineId,
	            examineName: item.examineName,
	            weight: item.weight
	        };
	    });

	    return newAll;
	}

	var EditWeightHeader = function EditWeightHeader(_ref) {
	    var config = _ref.config,
	        all = _ref.all,
	        selectedTag = _ref.selectedTag,
	        editTagId = _ref.editTagId,
	        editTagName = _ref.editTagName,
	        onSave = _ref.onSave,
	        onClearAll = _ref.onClearAll,
	        onSelectTags = _ref.onSelectTags,
	        onTagDoubleClick = _ref.onTagDoubleClick,
	        onTagBlur = _ref.onTagBlur,
	        onRemoveByTagId = _ref.onRemoveByTagId,
	        onEditTag = _ref.onEditTag,
	        loading = _ref.loading;


	    var onSaveClick = function onSaveClick() {
	        var examines = [];
	        var groups = {};

	        groupAll(all, groups);
	        groupsToExamines(groups, examines);
	        var newAll = examinesToAll(all);
	        var data = {
	            all: newAll,
	            examines: examines
	        };
	        onSave((0, _stringify2.default)(data));
	    };

	    var renderTags = function renderTags() {
	        var temp = [];
	        (0, _values2.default)(all).forEach(function (item, index) {
	            if (temp.findIndex(function (o) {
	                return o.examineId === item.examineId;
	            }) !== -1) {
	                return;
	            }

	            temp.push(item);
	        });

	        var tagLength = 0;
	        var tagNodes = temp.map(function (item, index) {
	            var className = item.examineId === selectedTag ? _editWeight2.default.highlight : _editWeight2.default.tag;
	            tagLength = tagLength + item.examineName.length;

	            return _react2.default.createElement(
	                'li',
	                { key: item.examineId + '_' + index,
	                    className: className,
	                    onClick: function onClick() {
	                        onSelectTags(item.examineId);
	                    },
	                    onDoubleClick: function onDoubleClick() {
	                        onTagDoubleClick(item.examineId, item.examineName);
	                    }
	                },
	                editTagId === item.examineId ? _react2.default.createElement(_input2.default, { value: editTagName,
	                    style: { height: 32 },
	                    onPressEnter: onTagBlur,
	                    onBlur: onTagBlur,
	                    maxLength: 6,
	                    onChange: onEditTag
	                }) : _react2.default.createElement(
	                    'b',
	                    null,
	                    item.examineName
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { className: _editWeight2.default.delete, onClick: function onClick(e) {
	                            e.stopPropagation();
	                            onRemoveByTagId(item.examineId);
	                        } },
	                    _react2.default.createElement('i', { className: _editWeight2.default.iconfont })
	                )
	            );
	        });

	        return _react2.default.createElement(
	            'div',
	            { className: _editWeight2.default.menus },
	            _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'ul',
	                    null,
	                    tagNodes
	                )
	            )
	        );
	    };

	    return _react2.default.createElement(
	        'div',
	        { className: _editWeight2.default.sub_nav },
	        _react2.default.createElement(
	            'h2',
	            { title: config.title },
	            config.title
	        ),
	        renderTags(),
	        _react2.default.createElement(
	            'div',
	            { className: _editWeight2.default.btn_group },
	            _react2.default.createElement(
	                _button2.default,
	                { type: 'ghost', className: _editWeight2.default.clear, onClick: onClearAll },
	                '\u6E05\u9664'
	            ),
	            _react2.default.createElement(
	                _button2.default,
	                { type: 'primary', onClick: onSaveClick, loading: loading },
	                '\u4FDD\u5B58'
	            )
	        )
	    );
	};

	exports.default = EditWeightHeader;
	module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_188__;

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_189__;

/***/ })
/******/ ])
});
;