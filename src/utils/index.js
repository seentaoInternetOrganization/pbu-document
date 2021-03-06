/**
 * @author AngusC
 * @description 工具
 */

// const fetch = require('whatwg-fetch');
// console.log('fetch = ', fetch);

import 'whatwg-fetch';
/**
* 矩形碰撞检测
* @param  {Object} r1 [description]
* @param  {Object} r2 [description]
* @return {Boolean}    [description]
*/
exports.intersectRect = function(r1, r2) {
    return !(r2.left > (r1.left + r1.width)
    || (r2.left + r2.width) < r1.left
    || r2.top > (r1.top + r1.height)
    || (r2.top + r2.height) < r1.top);
}

/**
 * 加载单据配置文件
 * @param  {String}   url      配置文件地址
 * @param  {Function} callback 加载后的回调
 */
exports.loadConfig = function(url, callback) {
    if (!url
        || (typeof url === 'string' && url.trim().length === 0)) {
        callback()
    }
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callback(data.docConfig)
    })
    .catch(err => {
        console.log('err = ', err);
        callback();
    });
}

/**
 * md5 hash
 * @type {String}
 */
exports.md5 = require('blueimp-md5');
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

    const arr = desc.split('.');

    while(arr.length) {
        if (obj) {
            obj = obj[arr.shift()];
        }else {
            return;
        }
    }

    return obj;
};

/**
 * 过滤掉obj的key属性，并生成一个新的对象
 * @return {Object|undefined}
 */
exports.excludePropertyOfObject = function(obj, key) {
    if (!obj
        || typeof obj !== 'object'
        || !key
        || typeof key !== 'string') {
        return
    }

    return Object.keys(obj)
    .filter(_key => {
        return _key !== key
    })
    .reduce((sum, _key) => {
        return {
            ...sum,
            [_key]: obj[_key]
        }
    }, {})
}

/**
 * 过滤掉obj的keys属性，并生成一个新的对象
 * @param  {Object} obj  [description]
 * @param  {String|Array} keys [description]
 * @return {Object|undefined}      [description]
 */
exports.excludePropertiesOfObject = function(obj, keys) {
    if (!obj
        || typeof obj !== 'object'
        || !keys
        || (typeof keys !== 'string' && !Array.isArray(keys))
    ) {
        return
    }

    return Object.keys(obj)
    .filter(_key => {
        if (typeof keys === 'string') {
            return _key !== keys
        }else {
            return keys.indexOf(_key) === -1
        }
    })
    .reduce((sum, _key) => {
        return {
            ...sum,
            [_key]: obj[_key]
        }
    }, {})
}


exports.isPromise = function(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
